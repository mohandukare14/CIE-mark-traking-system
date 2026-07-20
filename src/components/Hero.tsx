import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Users, Award, BookOpen } from 'lucide-react';

interface HeroProps {
  onOpenLogin?: () => void;
}

const Hero = ({ onOpenLogin }: HeroProps) => {
  const handleLoginClick = (e: React.MouseEvent) => {
    if (onOpenLogin) {
      e.preventDefault();
      onOpenLogin();
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 flex items-center bg-gradient-to-br from-dark-teal via-primary-teal to-deep-teal overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-lime/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-gold/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left pt-10 lg:pt-0"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-neon-lime text-sm font-semibold mb-6 border border-white/20">
              ZEAL College of Engineering & Research
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-white">
                CIE Activity Marks
              </span> <br />
              Tracking System
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Manage, monitor, and track student Continuous Internal Evaluation activities with complete transparency, efficiency, and security.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#login" onClick={handleLoginClick} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-neon-lime text-dark-gray px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(187,246,97,0.6)] transition-all flex items-center justify-center gap-2"
                >
                  Login <ArrowRight size={20} />
                </motion.button>
              </a>
              <a href="#about" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-transparent text-white border-2 border-white/50 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                >
                  Learn More
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Right Illustration/Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center">

              {/* Main Dashboard Card */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="glass-card w-full max-w-md p-6 relative z-20"
              >
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">Student Overview</h3>
                    <p className="text-white/60 text-xs">Semester 6</p>
                  </div>
                  <div className="h-10 w-10 bg-primary-teal rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-dark-teal/50 rounded-xl p-4 flex items-center gap-4 border border-white/5">
                    <div className="p-3 bg-neon-lime/20 text-neon-lime rounded-lg">
                      <BarChart3 size={24} />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Total CIE Score</p>
                      <p className="text-white font-bold text-xl">85/100</p>
                    </div>
                  </div>

                  <div className="bg-dark-teal/50 rounded-xl p-4 flex items-center gap-4 border border-white/5">
                    <div className="p-3 bg-accent-gold/20 text-accent-gold rounded-lg">
                      <Award size={24} />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Activities Completed</p>
                      <p className="text-white font-bold text-xl">4/5</p>
                    </div>
                  </div>
                </div>
              </motion.div>



              <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute top-0 -left-4 glass-card p-4 z-10 opacity-70"
              >
                <BookOpen className="text-white" size={32} />
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
