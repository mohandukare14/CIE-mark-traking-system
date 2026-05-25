import React from 'react';
import { Sprout, BarChart2, History } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 my-4 rounded-2xl px-6 py-4 flex items-center justify-between border-none shadow-2xl">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-emerald-500/20 rounded-lg">
          <Sprout className="text-emerald-400" size={24} />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
          FarmMarket
        </span>
      </div>

      <div className="flex gap-2">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: BarChart2 },
          { id: 'assistant', label: 'AI Assistant', icon: Sprout },
          { id: 'market', label: 'Direct Trade', icon: History },
          { id: 'requests', label: 'My Requests', icon: History },
          { id: 'nearby', label: 'Markets', icon: BarChart2 }
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
              activeTab === item.id 
                ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <item.icon size={18} />
            <span className="hidden lg:inline">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
