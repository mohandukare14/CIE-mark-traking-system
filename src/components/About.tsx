import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = [
    'Monitor activity marks in real-time',
    'Verify activities instantly',
    'Manage departmental records efficiently',
    'Ensure 100% transparent evaluation'
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-lime/20 to-primary-teal/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform scale-90"></div>
            <div className="relative rounded-[20px] overflow-hidden shadow-2xl border border-gray-100 bg-white">
              {/* Abstract representation of portal instead of image placeholder for a cleaner look */}
              <div className="h-80 sm:h-[450px] w-full bg-off-white flex items-center justify-center relative p-8">
                <div className="absolute top-8 left-8 w-1/3 h-24 bg-light-gray/20 rounded-xl"></div>
                <div className="absolute top-36 left-8 w-2/3 h-12 bg-light-gray/20 rounded-xl"></div>
                <div className="absolute bottom-12 right-8 w-1/2 h-40 bg-primary-teal/10 rounded-xl"></div>
                
                <div className="glass-card-light w-full max-w-sm h-64 z-10 p-6 flex flex-col justify-between">
                  <div className="flex gap-3 items-center border-b border-gray-200 pb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-teal flex items-center justify-center text-white font-bold">FA</div>
                    <div>
                      <div className="w-24 h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="w-16 h-3 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="w-full h-8 bg-neon-lime/20 rounded flex items-center px-3">
                      <div className="w-20 h-2 bg-primary-teal/40 rounded"></div>
                    </div>
                    <div className="w-full h-8 bg-gray-100 rounded flex items-center px-3">
                      <div className="w-24 h-2 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-gray mb-6 font-poppins">
              About the <span className="text-primary-teal">CIE Portal</span>
            </h2>
            <p className="text-lg text-dark-gray/70 mb-8 leading-relaxed">
              The Continuous Internal Evaluation (CIE) Marks Tracking System is designed exclusively for the ZEAL College of Engineering & Research. It provides a seamless, transparent platform for both students and faculty to manage academic milestones and extracurricular activities.
            </p>
            
            <ul className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-center gap-3 text-dark-gray font-medium"
                >
                  <CheckCircle2 className="text-neon-lime flex-shrink-0" size={24} />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-dark-teal transition-colors shadow-lg hover:shadow-xl"
            >
              Read Full Documentation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
