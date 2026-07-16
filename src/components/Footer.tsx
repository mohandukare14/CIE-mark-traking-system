import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-teal pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center font-bold text-deep-teal shadow-md">
                Z
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight tracking-tight">
                  ZCOER
                </span>
                <span className="text-white/70 text-xs font-medium">CIE Portal</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Empowering education through transparent, efficient, and digital continuous internal evaluation tracking.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-neon-lime hover:text-dark-gray flex items-center justify-center text-white transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-neon-lime hover:text-dark-gray flex items-center justify-center text-white transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-neon-lime hover:text-dark-gray flex items-center justify-center text-white transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-neon-lime hover:text-dark-gray flex items-center justify-center text-white transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#home" className="hover:text-neon-lime transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-neon-lime transition-colors">About Portal</a></li>
              <li><a href="#calendar" className="hover:text-neon-lime transition-colors">Academic Calendar</a></li>
              <li><a href="#activities" className="hover:text-neon-lime transition-colors">Activities</a></li>
              <li><a href="#notices" className="hover:text-neon-lime transition-colors">Notices</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-neon-lime transition-colors">CIE Guidelines</a></li>
              <li><a href="#" className="hover:text-neon-lime transition-colors">Student Manual</a></li>
              <li><a href="#" className="hover:text-neon-lime transition-colors">Faculty Guide</a></li>
              <li><a href="#helpdesk" className="hover:text-neon-lime transition-colors">Help Desk</a></li>
              <li><a href="#" className="hover:text-neon-lime transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter / Dept Logo */}
          <div>
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">Subscribe to our newsletter for major academic updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-neon-lime"
              />
              <button className="bg-primary-teal hover:bg-neon-lime hover:text-dark-gray text-white px-4 rounded-r-lg transition-colors flex items-center justify-center">
                <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
              <div className="h-8 w-8 bg-white/10 rounded flex items-center justify-center text-xs font-bold text-white/50">
                IT
              </div>
              <span className="text-white/50 text-xs">Developed by Dept. of Information Technology</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 mt-8 text-sm text-white/40 gap-4 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} ZEAL College of Engineering & Research. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
