import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Lock, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [role, setRole] = useState<'student' | 'faculty'>('student');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 1500);
  };

  const fillDemoCredentials = () => {
    if (role === 'student') {
      setIdentifier('72019483J');
      setPassword('student123');
    } else {
      setIdentifier('FAC-8842');
      setPassword('faculty123');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-gray/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-white/20"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-dark-teal via-primary-teal to-deep-teal p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
            >
              <X size={18} />
            </button>
            
            <div className="flex items-center gap-2 mb-2">
              <span className="p-2 bg-neon-lime/20 text-neon-lime rounded-xl">
                <ShieldCheck size={22} />
              </span>
              <span className="text-xs uppercase font-bold tracking-wider text-neon-lime">
                ZCOER CIE Portal
              </span>
            </div>
            
            <h3 className="text-2xl font-black font-poppins">Account Sign In</h3>
            <p className="text-sm text-white/80 mt-1">Access your Continuous Internal Evaluation dashboard</p>
          </div>

          {/* Body */}
          <div className="p-6">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 animate-bounce">
                  <CheckCircle size={36} />
                </div>
                <h4 className="text-xl font-bold text-dark-gray mb-1 font-poppins">Login Successful!</h4>
                <p className="text-sm text-dark-gray/70">Redirecting to your {role} dashboard...</p>
              </motion.div>
            ) : (
              <>
                {/* Role Switcher */}
                <div className="grid grid-cols-2 gap-2 p-1.5 bg-off-white rounded-2xl mb-6 border border-light-gray/20">
                  <button
                    type="button"
                    onClick={() => setRole('student')}
                    className={`py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                      role === 'student'
                        ? 'bg-primary-teal text-white shadow-md'
                        : 'text-dark-gray/70 hover:text-dark-gray'
                    }`}
                  >
                    Student Portal
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('faculty')}
                    className={`py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                      role === 'faculty'
                        ? 'bg-primary-teal text-white shadow-md'
                        : 'text-dark-gray/70 hover:text-dark-gray'
                    }`}
                  >
                    Faculty / Evaluator
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-dark-gray uppercase tracking-wider mb-2">
                      {role === 'student' ? 'PRN / Roll Number' : 'Employee ID / Faculty Code'}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-light-gray">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        required
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        placeholder={role === 'student' ? 'e.g. 72019483J' : 'e.g. FAC-8842'}
                        className="w-full pl-10 pr-4 py-3 bg-off-white border border-light-gray/25 rounded-xl text-dark-gray font-medium focus:ring-2 focus:ring-primary-teal focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs font-bold text-dark-gray uppercase tracking-wider">
                        Password
                      </label>
                      <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-xs text-primary-teal hover:underline font-semibold">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-light-gray">
                        <Lock size={18} />
                      </div>
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-3 bg-off-white border border-light-gray/25 rounded-xl text-dark-gray font-medium focus:ring-2 focus:ring-primary-teal focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-light-gray/40 text-primary-teal focus:ring-primary-teal" />
                      <span className="text-xs text-dark-gray/70 font-medium">Remember session</span>
                    </label>
                    <button
                      type="button"
                      onClick={fillDemoCredentials}
                      className="text-xs text-primary-teal/80 hover:text-primary-teal underline font-semibold"
                    >
                      Fill Demo Data
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 bg-neon-lime text-dark-gray hover:bg-dark-teal hover:text-white py-3.5 rounded-xl font-bold text-base transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
                  >
                    <span>Sign In to Dashboard</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LoginModal;
