import Header from './components/Header';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import Features from './components/Features';
import CalendarActivities from './components/CalendarActivities';
import Notices from './components/Notices';
import Login from './components/Login';
import HelpDesk from './components/HelpDesk';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter antialiased bg-off-white text-dark-gray selection:bg-neon-lime/30">
      <Header />
      
      <main>
        <Hero />
        <Statistics />
        <About />
        <Features />
        <CalendarActivities />
        <Notices />
        <Login />
        <HelpDesk />
      </main>

      <Footer />
    </div>
  );
}

export default App;
