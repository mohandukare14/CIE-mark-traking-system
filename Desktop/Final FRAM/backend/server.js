require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Company = require('./models/Company');
const Request = require('./models/Request');
const { MARKETPLACES } = require('./marketplaces-data');

const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/farm-marketplace';

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// ── SEEDING DATA ──
const seedData = async () => {
  const count = await Company.countDocuments();
  if (count === 0) {
    const initialCompanies = [
      {
        name: "AgroCorp Solutions",
        location: "Mumbai, Maharashtra",
        crops: ["soybean", "cotton", "onion"],
        priceRange: "₹4500 - ₹5200",
        minQuantity: 50,
        description: "Leading agro-processor looking for bulk quality crops.",
        contactEmail: "procure@agrocorp.com"
      },
      {
        name: "EcoHarvest Exports",
        location: "Nashik, Maharashtra",
        crops: ["tomato", "onion", "grapes"],
        priceRange: "₹1800 - ₹2800",
        minQuantity: 20,
        description: "Focusing on organic and export-grade vegetables.",
        contactEmail: "info@ecoharvest.com"
      },
      {
        name: "Global Grains Ltd.",
        location: "Indore, Madhya Pradesh",
        crops: ["soybean", "wheat", "jowar"],
        priceRange: "₹2200 - ₹3500",
        minQuantity: 100,
        description: "Bulk buyers for grain processing units across India.",
        contactEmail: "buying@globalgrains.in"
      },
      {
        name: "FreshValley Organics",
        location: "Pune, Maharashtra",
        crops: ["tomato", "onion", "soybean"],
        priceRange: "₹3000 - ₹4000",
        minQuantity: 10,
        description: "Direct supply chain for premium retail markets.",
        contactEmail: "fresh@valley.com"
      }
    ];
    await Company.insertMany(initialCompanies);
    console.log('🌱 Seeded initial company data');
  }
};
seedData();

// ── API ROUTES ──

// GET /api/companies?crop=...
app.get('/api/companies', async (req, res) => {
  try {
    const { crop } = req.query;
    let query = {};
    if (crop) {
      query.crops = { $in: [crop.toLowerCase()] };
    }
    const companies = await Company.find(query);
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/sell-request
app.post('/api/sell-request', async (req, res) => {
  try {
    const { farmerName, crop, quantity, expectedPrice, location, companyId } = req.body;
    
    if (!farmerName || !crop || !quantity || !expectedPrice || !location || !companyId) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newRequest = new Request({
      farmerName,
      crop,
      quantity,
      expectedPrice,
      location,
      companyId,
      status: 'pending'
    });

    await newRequest.save();
    res.status(201).json({ message: "Request submitted successfully", request: newRequest });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── ADDITIONAL AGRI ROUTES ──

// GET /api/nearby-markets
app.get('/api/nearby-markets', (req, res) => {
  const { lat, lng, radius = 100 } = req.query;
  if (!lat || !lng) return res.status(400).json({ error: 'lat/lng required' });
  
  const userLat = parseFloat(lat);
  const userLng = parseFloat(lng);
  
  const results = MARKETPLACES.map(m => {
    const dist = Math.sqrt(Math.pow(m.lat - userLat, 2) + Math.pow(m.lng - userLng, 2)) * 111; // Approx km
    return { ...m, distance: Math.round(dist * 10) / 10 };
  }).filter(m => m.distance <= radius).sort((a, b) => a.distance - b.distance);
  
  res.json({ markets: results });
});

// GET /api/weather
app.get('/api/weather', (req, res) => {
  res.json({
    temp: 28 + Math.floor(Math.random() * 5),
    humidity: 60 + Math.floor(Math.random() * 20),
    condition: 'Partly Cloudy'
  });
});

// GET /api/requests
app.get('/api/requests', async (req, res) => {
  try {
    const requests = await Request.find().populate('companyId', 'name').sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── AI ASSISTANT ROUTES ──

// POST /api/ai/chat
app.post('/api/ai/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    
    const chat = model.startChat({
      history: history || [],
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    res.json({ text: response.text() });
  } catch (err) {
    console.error('AI Chat Error:', err);
    res.status(500).json({ error: "AI Assistant is currently unavailable." });
  }
});

// POST /api/ai/scan
app.post('/api/ai/scan', async (req, res) => {
  try {
    const { image } = req.body; // base64 string
    if (!image) return res.status(400).json({ error: "Image is required" });

    // Extract base64 data
    const base64Data = image.split(',')[1];
    
    const prompt = `Analyze this crop image and provide:
    1. Disease Name (if any)
    2. Confidence Level
    3. Detailed Treatment Steps (bullet points)
    Format as JSON: { "disease": "...", "confidence": "...", "treatment": ["...", "..."] }
    If no disease is found, indicate "Healthy" and provide general maintenance tips.`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: base64Data,
          mimeType: "image/jpeg"
        }
      }
    ]);

    const response = await result.response;
    const text = response.text();
    
    // Clean JSON from response (sometimes Gemini wraps it in code blocks)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const resultJson = jsonMatch ? JSON.parse(jsonMatch[0]) : { error: "Failed to parse AI response" };

    res.json(resultJson);
  } catch (err) {
    console.error('AI Scan Error:', err);
    res.status(500).json({ error: "Image analysis failed." });
  }
});

// ── START SERVER ──
app.listen(PORT, () => {
  console.log(`\n🚀 Marketplace Backend running at http://localhost:${PORT}`);
});
