import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, FileText, CalendarDays, Bell, UserSquare2, GraduationCap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Academic Calendar',
      description: 'View the complete semester schedule, exam dates, and holidays.',
      icon: <CalendarIcon size={32} />,
      color: 'text-primary-teal',
      bg: 'bg-primary-teal/10'
    },
    {
      title: 'CIE Guidelines',
      description: 'Download and review official regulations and marking schemes.',
      icon: <FileText size={32} />,
      color: 'text-accent-gold',
      bg: 'bg-accent-gold/10'
    },
    {
      title: 'Upcoming Activities',
      description: 'Stay updated with upcoming workshops, seminars, and events.',
      icon: <CalendarDays size={32} />,
      color: 'text-neon-lime',
      bg: 'bg-neon-lime/20'
    },
    {
      title: 'Latest Notices',
      description: 'Get instant notifications for recent announcements and updates.',
      icon: <Bell size={32} />,
      color: 'text-primary-teal',
      bg: 'bg-primary-teal/10'
    },
    {
      title: 'Student Dashboard',
      description: 'Track your personal marks, attendance, and activity completion.',
      icon: <UserSquare2 size={32} />,
      color: 'text-dark-teal',
      bg: 'bg-dark-teal/10'
    },
    {
      title: 'Faculty Dashboard',
      description: 'Manage activities, verify student participation, and update marks.',
      icon: <GraduationCap size={32} />,
      color: 'text-accent-gold',
      bg: 'bg-accent-gold/10'
    }
  ];

  return (
    <section id="guidelines" className="py-24 bg-gradient-to-b from-white to-off-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-teal/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-lime/10 rounded-full filter blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-gray mb-4 font-poppins">
            Everything You Need in One Portal
          </h2>
          <p className="text-lg text-dark-gray/70">
            Discover a comprehensive suite of tools tailored for academic excellence and transparent evaluation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg rounded-[20px] p-8 hover:shadow-2xl hover:bg-white transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-3 font-poppins">{feature.title}</h3>
              <p className="text-dark-gray/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
