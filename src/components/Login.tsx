import { motion } from 'framer-motion';
import { GraduationCap, UserSquare2, ShieldAlert } from 'lucide-react';

const Login = () => {
  const loginTypes = [
    {
      title: 'Student Login',
      description: 'Access your activity marks, submit reports, and track your progress.',
      icon: <UserSquare2 size={40} />,
      color: 'bg-primary-teal',
      hoverGlow: 'hover:shadow-[0_0_20px_rgba(44,154,161,0.5)]'
    },
    {
      title: 'Faculty Login',
      description: 'Verify activities, update student marks, and manage department records.',
      icon: <GraduationCap size={40} />,
      color: 'bg-dark-teal',
      hoverGlow: 'hover:shadow-[0_0_20px_rgba(29,135,143,0.5)]'
    },
    {
      title: 'Admin Login',
      description: 'System configuration, user management, and institutional reporting.',
      icon: <ShieldAlert size={40} />,
      color: 'bg-accent-gold',
      hoverGlow: 'hover:shadow-[0_0_20px_rgba(159,126,81,0.5)]'
    }
  ];

  return (
    <section id="login" className="py-24 relative overflow-hidden bg-gradient-to-br from-dark-gray to-deep-teal">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-neon-lime/10 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-primary-teal/20 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-poppins"
          >
            Ready to Access Your Dashboard?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Select your portal to securely log in to the CIE Activity Marks Tracking System.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {loginTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card-light bg-white/10 p-8 text-center flex flex-col items-center justify-between h-full group"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 ${type.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {type.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                {type.description}
              </p>
              <button className={`w-full py-4 rounded-xl font-bold text-dark-gray bg-neon-lime transition-all duration-300 ${type.hoverGlow}`}>
                Login as {type.title.split(' ')[0]}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Login;
