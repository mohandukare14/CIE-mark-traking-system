import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin, Navigation, Info, Cloud, Droplets, Wind, Search } from 'lucide-react';
import axios from 'axios';

// Fix for Leaflet default icon issues in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const NearbyMarkets = () => {
  const [userLoc, setUserLoc] = useState({ lat: 28.6139, lng: 77.2090 }); // Default Delhi
  const [markets, setMarkets] = useState([]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Attempt to get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      });
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [userLoc]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [marketRes, weatherRes] = await Promise.all([
        axios.get(`/api/nearby-markets?lat=${userLoc.lat}&lng=${userLoc.lng}`),
        axios.get(`/api/weather?lat=${userLoc.lat}&lng=${userLoc.lng}`)
      ]);
      setMarkets(marketRes.data.markets || []);
      setWeather(weatherRes.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-10 px-6 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold text-white"
          >
            Nearby <span className="text-emerald-400">Markets</span>
          </motion.h1>
          <p className="text-slate-400 mt-2 flex items-center gap-2">
            <MapPin size={16} /> Discover APMC markets in your region
          </p>
        </div>

        {weather && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-4 rounded-3xl flex items-center gap-6 border-slate-700/50"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                <Cloud size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{weather.temp}°C</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{weather.condition}</div>
              </div>
            </div>
            <div className="h-10 w-px bg-slate-700/50" />
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-blue-400 mb-1"><Droplets size={16} className="mx-auto" /></div>
                <div className="text-xs text-white font-bold">{weather.humidity}%</div>
              </div>
              <div className="text-center">
                <div className="text-emerald-400 mb-1"><Wind size={16} className="mx-auto" /></div>
                <div className="text-xs text-white font-bold">12km/h</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map Container */}
        <div className="lg:col-span-2 aspect-video lg:aspect-auto h-[500px] rounded-[2.5rem] overflow-hidden border border-slate-700/50 shadow-2xl relative z-10">
          <MapContainer center={[userLoc.lat, userLoc.lng]} zoom={10} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            {markets.map(market => (
              <Marker key={market.id} position={[market.lat, market.lng]}>
                <Popup>
                  <div className="p-2">
                    <div className="font-bold text-slate-900">{market.name}</div>
                    <div className="text-xs text-slate-600 mb-2">{market.address}</div>
                    <div className="flex flex-wrap gap-1">
                      {market.crops.slice(0, 3).map(c => (
                        <span key={c} className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase">{c}</span>
                      ))}
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Market List */}
        <div className="space-y-4 overflow-y-auto max-h-[500px] pr-2 no-scrollbar">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
            <Navigation className="text-emerald-400" size={20} /> Closest Mandis
          </h3>
          
          {loading ? (
             <div className="space-y-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="h-24 w-full bg-slate-800/50 animate-pulse rounded-3xl" />
               ))}
             </div>
          ) : (
            markets.map((market, i) => (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={market.id} 
                className="glass-card p-5 rounded-3xl hover:bg-slate-800/80 cursor-pointer group border-slate-700/50"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="font-bold text-white group-hover:text-emerald-400 transition-colors">{market.name}</div>
                  <div className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                    {market.distance} km
                  </div>
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1 mb-4">
                  <MapPin size={12} /> {market.district}, {market.state}
                </div>
                <div className="flex flex-wrap gap-1">
                  {market.crops.map(c => (
                    <span key={c} className="text-[9px] font-bold text-slate-400 border border-slate-700 px-2 py-0.5 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NearbyMarkets;
