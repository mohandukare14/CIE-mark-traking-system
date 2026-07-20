import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import Facilities from './components/Facilities';
import CalendarActivities from './components/CalendarActivities';
import Features from './components/Features';
import Notices from './components/Notices';
import HelpDesk from './components/HelpDesk';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleOpenLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="font-inter antialiased bg-off-white text-dark-gray selection:bg-neon-lime/30">
      <Header onOpenLogin={handleOpenLogin} />
      
      <main>
        <Hero onOpenLogin={handleOpenLogin} />
        <Statistics />
        <About />
        <Facilities />
        <CalendarActivities />
        <Features />
        <Notices />
        <HelpDesk />
      </main>

      <Footer />

      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLogin} />
    </div>
  );
}

export default App;
