import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Academic Calendar', href: '#calendar' },
    { name: 'CIE Guidelines', href: '#guidelines' },
    { name: 'Activities', href: '#activities' },
    { name: 'Notices', href: '#notices' },
    { name: 'Contact', href: '#contact' },
    { name: 'Help Desk', href: '#helpdesk' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-teal/80 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Left */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center font-bold text-primary-teal shadow-md">
              Z
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight tracking-tight">
                ZCOER
              </span>
              <span className="text-white/70 text-xs font-medium">CIE Portal</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-neon-lime transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="h-8 w-px bg-white/20"></div>
            <a href="#login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-neon-lime text-dark-gray px-6 py-2 rounded-full font-semibold hover:shadow-[0_0_15px_rgba(187,246,97,0.5)] transition-all"
              >
                Login
              </motion.button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-dark-teal border-t border-white/10 shadow-xl"
        >
          <div className="px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-neon-lime transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#login" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full bg-neon-lime text-dark-gray mt-4 px-6 py-3 rounded-full font-semibold">
                Login
              </button>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
