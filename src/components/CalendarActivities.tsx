import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, MapPin, ArrowRight } from 'lucide-react';

const CalendarActivities = () => {
  const events = [
    {
      title: 'National Level Hackathon 2026',
      date: 'Aug 15 - Aug 16',
      time: '9:00 AM - 5:00 PM',
      venue: 'Main Auditorium',
      type: 'Hackathon',
      color: 'bg-primary-teal text-white'
    },
    {
      title: 'AI & Machine Learning Workshop',
      date: 'Aug 22',
      time: '10:00 AM - 1:00 PM',
      venue: 'Lab Complex - AI Lab',
      type: 'Workshop',
      color: 'bg-accent-gold text-white'
    },
    {
      title: 'Technical Seminar on Blockchain',
      date: 'Sep 05',
      time: '11:00 AM - 1:00 PM',
      venue: 'Seminar Hall 1',
      type: 'Seminar',
      color: 'bg-dark-teal text-white'
    },
    {
      title: 'Annual Poster Competition',
      date: 'Sep 12',
      time: '10:00 AM - 4:00 PM',
      venue: 'College Campus',
      type: 'Competition',
      color: 'bg-neon-lime text-dark-gray'
    },
    {
      title: 'Inter-College Coding Contest',
      date: 'Sep 20',
      time: '9:00 AM - 12:00 PM',
      venue: 'Computer Center',
      type: 'Contest',
      color: 'bg-primary-teal text-white'
    }
  ];

  return (
    <section id="calendar" className="py-24 bg-dark-gray relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Calendar Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-poppins">Academic Calendar</h2>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[20px] p-6 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-white">August 2026</h3>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center text-white transition-colors">&lt;</button>
                  <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center text-white transition-colors">&gt;</button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="text-white/50 text-xs font-semibold py-1">{day}</div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-center">
                {Array.from({ length: 31 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors cursor-pointer
                      ${[15, 16, 22].includes(i + 1) ? 'bg-primary-teal text-white shadow-md' : 'text-white/80 hover:bg-white/10'}
                      ${i + 1 === 15 ? 'border-2 border-neon-lime' : ''}
                    `}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-3 h-3 rounded-full bg-primary-teal"></div>
                  <span>Important Activities</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-3 h-3 rounded-full bg-accent-gold"></div>
                  <span>Exams & Submissions</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <span>Holidays</span>
                </div>
              </div>

              <button className="w-full mt-8 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                View Full Calendar <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Activities Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
            id="activities"
          >
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-3xl font-bold text-white font-poppins">Upcoming Activities</h2>
              <a href="#" className="text-neon-lime hover:text-white transition-colors text-sm font-semibold flex items-center gap-1">
                View All <ArrowRight size={16} />
              </a>
            </div>

            <div className="space-y-4">
              {events.map((event, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${event.color}`}>
                        {event.type}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-neon-lime transition-colors">{event.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-white/70">
                      <div className="flex items-center gap-1.5">
                        <CalendarIcon size={16} className="text-primary-teal" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={16} className="text-accent-gold" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={16} className="text-neon-lime" />
                        {event.venue}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <button className="w-full md:w-auto px-6 py-2.5 rounded-full bg-transparent border border-white/30 text-white font-semibold hover:bg-white hover:text-dark-gray transition-colors">
                      Register Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CalendarActivities;
