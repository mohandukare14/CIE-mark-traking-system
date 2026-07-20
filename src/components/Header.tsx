import { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onOpenLogin?: () => void;
}

const Header = ({ onOpenLogin }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPassedHome, setIsPassedHome] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Academic Calendar', href: '#calendar', id: 'calendar' },
    { name: 'CIE Guidelines', href: '#guidelines', id: 'guidelines' },
    { name: 'Activities', href: '#activities', id: 'activities' },
    { name: 'Notices', href: '#notices', id: 'notices' },
    { name: 'Help Desk', href: '#helpdesk', id: 'helpdesk' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const homeElement = document.getElementById('home');
      if (homeElement) {
        const rect = homeElement.getBoundingClientRect();
        setIsPassedHome(rect.bottom <= 120);
      } else {
        setIsPassedHome(window.scrollY > 450);
      }

      setIsScrolled(window.scrollY > 20);

      if (window.scrollY < 100) {
        setActiveSection('home');
      } else {
        const sectionsInDOM = navLinks
          .map((link) => {
            const el = document.getElementById(link.id);
            if (!el) return null;
            const rect = el.getBoundingClientRect();
            return { id: link.id, top: rect.top };
          })
          .filter((item): item is { id: string; top: number } => item !== null)
          .sort((a, b) => a.top - b.top);

        let currentSection = 'home';
        for (const sec of sectionsInDOM) {
          if (sec.top <= 220) {
            currentSection = sec.id;
          }
        }
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginClick = (e: React.MouseEvent) => {
    if (onOpenLogin) {
      e.preventDefault();
      onOpenLogin();
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-black/40 backdrop-blur-md shadow-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo Left */}
          <a
            href="#home"
            className="flex items-center gap-3 group cursor-pointer shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center font-bold text-primary-teal shadow-md group-hover:scale-105 transition-transform">
              Z
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight tracking-tight group-hover:text-neon-lime transition-colors">
                ZCOER
              </span>
              <span className="text-white/70 text-xs font-medium">CIE Portal</span>
            </div>
          </a>

          {/* Desktop Navigation - Aligned to end of flex */}
          <nav
            className={`hidden lg:flex items-center space-x-5 xl:space-x-6 ml-auto transition-all duration-300 ${isPassedHome ? 'pr-32' : 'pr-0'
              }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-sm font-semibold transition-colors shrink-0 ${isActive ? 'text-neon-lime' : 'text-white/80 hover:text-white'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-lime rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Login Button - Absolutely positioned at right edge so it takes NO flex flow space */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
            <AnimatePresence>
              {isPassedHome && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, x: 15 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.85, x: 15 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <a href="#login" onClick={handleLoginClick}>
                    <button className="bg-neon-lime text-dark-gray hover:bg-white hover:text-dark-teal px-5 py-2 rounded-full font-bold text-sm shadow-lg hover:shadow-[0_0_20px_rgba(187,246,97,0.6)] transition-all duration-300 flex items-center gap-2 transform active:scale-95 whitespace-nowrap">
                      <LogIn size={16} />
                      <span>Login</span>
                    </button>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-5 flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-base font-semibold transition-all ${isActive
                        ? 'bg-white/10 text-neon-lime pl-4 border-l-4 border-neon-lime'
                        : 'text-white/90 hover:bg-white/5 hover:text-white'
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-white/10">
                <a href="#login" onClick={handleLoginClick}>
                  <button className="w-full bg-neon-lime text-dark-gray hover:bg-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md transition-colors">
                    <LogIn size={18} />
                    <span>Login Portal</span>
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
