import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  ArrowRight,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  CheckCircle2,
  Info,
  Grid,
  List
} from 'lucide-react';

interface EventItem {
  id: string;
  title: string;
  monthIndex: number; // 0-11
  date: string;
  dayNumber: number;
  time: string;
  venue: string;
  type: 'Hackathon' | 'Workshop' | 'Seminar' | 'Exam' | 'Competition' | 'Holiday' | 'Academic';
  color: string;
  badgeBg: string;
  desc: string;
}

const MONTH_NAMES = [
  'January 2026', 'February 2026', 'March 2026', 'April 2026',
  'May 2026', 'June 2026', 'July 2026', 'August 2026',
  'September 2026', 'October 2026', 'November 2026', 'December 2026'
];

const SHORT_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Days count and start weekday for 2026 (0 = Sun, 1 = Mon, ..., 6 = Sat)
const MONTH_CONFIG = [
  { days: 31, startDay: 4 }, // Jan
  { days: 28, startDay: 0 }, // Feb
  { days: 31, startDay: 0 }, // Mar
  { days: 30, startDay: 3 }, // Apr
  { days: 31, startDay: 5 }, // May
  { days: 30, startDay: 1 }, // Jun
  { days: 31, startDay: 3 }, // Jul
  { days: 31, startDay: 6 }, // Aug
  { days: 30, startDay: 2 }, // Sep
  { days: 31, startDay: 4 }, // Oct
  { days: 30, startDay: 0 }, // Nov
  { days: 31, startDay: 2 }, // Dec
];

const ALL_EVENTS: EventItem[] = [
  {
    id: 'e1',
    title: 'CIE-1 Mark Verification & Progress Review',
    monthIndex: 0,
    date: 'Jan 10',
    dayNumber: 10,
    time: '10:00 AM - 4:00 PM',
    venue: 'Academic Section & Department Desks',
    type: 'Exam',
    color: 'bg-accent-gold text-white',
    badgeBg: 'bg-accent-gold/20 text-accent-gold border-accent-gold/30',
    desc: 'Mandatory continuous internal evaluation verification for odd semester course outcomes.'
  },
  {
    id: 'e2',
    title: 'TechFest Inauguration & Project Expo',
    monthIndex: 0,
    date: 'Jan 24',
    dayNumber: 24,
    time: '9:00 AM - 5:00 PM',
    venue: 'Innovation & Incubation Hub',
    type: 'Hackathon',
    color: 'bg-primary-teal text-white',
    badgeBg: 'bg-primary-teal/20 text-primary-teal border-primary-teal/30',
    desc: 'Annual engineering showcase presenting innovative capstone models and prototype solutions.'
  },
  {
    id: 'e3',
    title: 'National Level Robotics Symposium',
    monthIndex: 1,
    date: 'Feb 12',
    dayNumber: 12,
    time: '9:30 AM - 4:30 PM',
    venue: 'Mechatronics & Robotics Lab',
    type: 'Workshop',
    color: 'bg-neon-lime text-dark-gray',
    badgeBg: 'bg-neon-lime/20 text-neon-lime border-neon-lime/30',
    desc: 'Hands-on hardware integration, ROS programming, and automated rover challenge.'
  },
  {
    id: 'e4',
    title: 'Science Day Exhibition & Code Quiz',
    monthIndex: 1,
    date: 'Feb 28',
    dayNumber: 28,
    time: '10:00 AM - 3:00 PM',
    venue: 'Central Library Amphitheatre',
    type: 'Competition',
    color: 'bg-purple-500 text-white',
    badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    desc: 'Inter-departmental scientific paper presentation and algorithmic logic competition.'
  },
  {
    id: 'e5',
    title: 'Mid-Semester CIE Theory Examinations',
    monthIndex: 2,
    date: 'Mar 15',
    dayNumber: 15,
    time: '10:00 AM - 1:00 PM',
    venue: 'Examination Block A & B',
    type: 'Exam',
    color: 'bg-accent-gold text-white',
    badgeBg: 'bg-accent-gold/20 text-accent-gold border-accent-gold/30',
    desc: 'Formal mid-term CIE assessments covering Units 1 to 3 across all engineering branches.'
  },
  {
    id: 'e6',
    title: 'Cloud Native & DevOps Hands-on Workshop',
    monthIndex: 2,
    date: 'Mar 28',
    dayNumber: 28,
    time: '11:00 AM - 4:00 PM',
    venue: 'Computer Center Lab 3',
    type: 'Workshop',
    color: 'bg-primary-teal text-white',
    badgeBg: 'bg-primary-teal/20 text-primary-teal border-primary-teal/30',
    desc: 'Interactive containerization session featuring Docker, Kubernetes, and CI/CD pipelines.'
  },
  {
    id: 'e7',
    title: 'Dr. B.R. Ambedkar Jayanti (Holiday)',
    monthIndex: 3,
    date: 'Apr 14',
    dayNumber: 14,
    time: 'Full Day',
    venue: 'Campus Holiday',
    type: 'Holiday',
    color: 'bg-red-500 text-white',
    badgeBg: 'bg-red-500/20 text-red-300 border-red-500/30',
    desc: 'Official institutional holiday.'
  },
  {
    id: 'e8',
    title: 'Cyber Security & Ethical Hacking Seminar',
    monthIndex: 3,
    date: 'Apr 22',
    dayNumber: 22,
    time: '10:30 AM - 1:30 PM',
    venue: 'Seminar Hall 2',
    type: 'Seminar',
    color: 'bg-dark-teal text-white',
    badgeBg: 'bg-dark-teal/20 text-emerald-300 border-dark-teal/30',
    desc: 'Guest speaker lecture by industry cybersecurity architects on network defense and forensics.'
  },
  {
    id: 'e9',
    title: 'Final CIE Practical & Viva Voce Submissions',
    monthIndex: 4,
    date: 'May 10',
    dayNumber: 10,
    time: '9:00 AM - 5:00 PM',
    venue: 'Respective Department Labs',
    type: 'Exam',
    color: 'bg-accent-gold text-white',
    badgeBg: 'bg-accent-gold/20 text-accent-gold border-accent-gold/30',
    desc: 'Final continuous internal evaluation practical grading and lab record verification.'
  },
  {
    id: 'e10',
    title: 'Summer Internship & Industry Project Orientation',
    monthIndex: 5,
    date: 'Jun 15',
    dayNumber: 15,
    time: '10:00 AM - 12:30 PM',
    venue: 'Main Auditorium',
    type: 'Academic',
    color: 'bg-blue-500 text-white',
    badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    desc: 'Guidelines for mandatory 4-week industry internships and training documentation.'
  },
  {
    id: 'e11',
    title: 'Academic Session Commencement 2026-27',
    monthIndex: 6,
    date: 'Jul 15',
    dayNumber: 15,
    time: '9:00 AM',
    venue: 'Campus Wide',
    type: 'Academic',
    color: 'bg-blue-500 text-white',
    badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    desc: 'Start of new academic year terms and course registration portal launch.'
  },
  {
    id: 'e12',
    title: 'National Level Hackathon 2026',
    monthIndex: 7,
    date: 'Aug 15 - Aug 16',
    dayNumber: 15,
    time: '9:00 AM - 5:00 PM',
    venue: 'Main Auditorium',
    type: 'Hackathon',
    color: 'bg-primary-teal text-white',
    badgeBg: 'bg-primary-teal/20 text-primary-teal border-primary-teal/30',
    desc: '36-hour continuous build hackathon targeting smart campus solutions and AI applications.'
  },
  {
    id: 'e13',
    title: 'AI & Machine Learning Workshop',
    monthIndex: 7,
    date: 'Aug 22',
    dayNumber: 22,
    time: '10:00 AM - 1:00 PM',
    venue: 'Lab Complex - AI Lab',
    type: 'Workshop',
    color: 'bg-accent-gold text-white',
    badgeBg: 'bg-accent-gold/20 text-accent-gold border-accent-gold/30',
    desc: 'Practical Deep Learning model fine-tuning and PyTorch neural network fundamentals.'
  },
  {
    id: 'e14',
    title: 'Technical Seminar on Blockchain',
    monthIndex: 8,
    date: 'Sep 05',
    dayNumber: 5,
    time: '11:00 AM - 1:00 PM',
    venue: 'Seminar Hall 1',
    type: 'Seminar',
    color: 'bg-dark-teal text-white',
    badgeBg: 'bg-dark-teal/20 text-emerald-300 border-dark-teal/30',
    desc: 'Exploration of smart contracts, decentralized consensus algorithms, and Web3 security.'
  },
  {
    id: 'e15',
    title: 'Annual Poster Competition',
    monthIndex: 8,
    date: 'Sep 12',
    dayNumber: 12,
    time: '10:00 AM - 4:00 PM',
    venue: 'College Campus Quadrangle',
    type: 'Competition',
    color: 'bg-neon-lime text-dark-gray',
    badgeBg: 'bg-neon-lime/20 text-neon-lime border-neon-lime/30',
    desc: 'Exhibition of technical research posters evaluated by internal and external academic juries.'
  },
  {
    id: 'e16',
    title: 'Inter-College Coding Contest',
    monthIndex: 8,
    date: 'Sep 20',
    dayNumber: 20,
    time: '9:00 AM - 12:00 PM',
    venue: 'Computer Center',
    type: 'Competition',
    color: 'bg-primary-teal text-white',
    badgeBg: 'bg-primary-teal/20 text-primary-teal border-primary-teal/30',
    desc: 'Competitive programming contest featuring dynamic programming and graph algorithm challenges.'
  },
  {
    id: 'e17',
    title: 'CIE Mid-Term Assessment Week',
    monthIndex: 9,
    date: 'Oct 18 - Oct 24',
    dayNumber: 18,
    time: '10:00 AM - 1:00 PM',
    venue: 'All Lecture Halls',
    type: 'Exam',
    color: 'bg-accent-gold text-white',
    badgeBg: 'bg-accent-gold/20 text-accent-gold border-accent-gold/30',
    desc: 'Centralized continuous internal evaluation test series for all semester schemes.'
  },
  {
    id: 'e18',
    title: 'IoT & Embedded Hardware Hackathon',
    monthIndex: 10,
    date: 'Nov 10',
    dayNumber: 10,
    time: '9:00 AM - 6:00 PM',
    venue: 'IoT & Microcontroller Lab',
    type: 'Hackathon',
    color: 'bg-primary-teal text-white',
    badgeBg: 'bg-primary-teal/20 text-primary-teal border-primary-teal/30',
    desc: 'Hardware prototyping with ESP32, Raspberry Pi, and sensor telemetry systems.'
  },
  {
    id: 'e19',
    title: 'End Semester CIE Final Mark Sign-off',
    monthIndex: 11,
    date: 'Dec 12',
    dayNumber: 12,
    time: '10:00 AM - 5:00 PM',
    venue: 'CIE Cell & HOD Offices',
    type: 'Exam',
    color: 'bg-red-400 text-white',
    badgeBg: 'bg-red-400/20 text-red-300 border-red-400/30',
    desc: 'Final verification and publishing of CIE internal marks on the institutional portal.'
  }
];

const CalendarActivities = () => {
  // Widget Month State (Default August 2026 = index 7)
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(7);

  // Selected event popup
  const [activeEvent, setActiveEvent] = useState<EventItem | null>(null);

  // Full Year Modal state
  const [isFullYearOpen, setIsFullYearOpen] = useState(false);
  const [fullYearFilter, setFullYearFilter] = useState<string>('All');
  const [fullYearSearch, setFullYearSearch] = useState<string>('');
  const [fullYearActiveTab, setFullYearActiveTab] = useState<number>(7);
  const [viewMode, setViewMode] = useState<'grid' | 'expanded'>('grid');

  // Activities timeline scroll state
  const [activityCategory, setActivityCategory] = useState<string>('All');
  const [isRegistered, setIsRegistered] = useState<string | null>(null);

  const handlePrevMonth = () => {
    setSelectedMonthIndex(prev => (prev === 0 ? 11 : prev - 1));
  };

  const handleNextMonth = () => {
    setSelectedMonthIndex(prev => (prev === 11 ? 0 : prev + 1));
  };

  // Get events for selected month in widget
  const monthEvents = ALL_EVENTS.filter(e => e.monthIndex === selectedMonthIndex);

  // Render Days for selected month
  const currentMonthConfig = MONTH_CONFIG[selectedMonthIndex];
  const daysInMonth = currentMonthConfig.days;
  const startDay = currentMonthConfig.startDay;

  // Days array for grid rendering
  const calendarCells = [];
  for (let i = 0; i < startDay; i++) {
    calendarCells.push({ type: 'empty', key: `empty-${i}` });
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const eventMatch = monthEvents.find(e => e.dayNumber === day);
    calendarCells.push({
      type: 'day',
      dayNumber: day,
      key: `day-${day}`,
      event: eventMatch
    });
  }

  // Filtered list for activities timeline
  const filteredActivities = ALL_EVENTS.filter(event => {
    if (activityCategory !== 'All' && event.type !== activityCategory) return false;
    return true;
  });

  // Filtered events for Full Year Modal
  const filteredFullYearEvents = ALL_EVENTS.filter(event => {
    if (fullYearFilter !== 'All' && event.type !== fullYearFilter) return false;
    if (fullYearSearch.trim()) {
      const q = fullYearSearch.toLowerCase();
      const matchTitle = event.title.toLowerCase().includes(q);
      const matchVenue = event.venue.toLowerCase().includes(q);
      const matchDesc = event.desc.toLowerCase().includes(q);
      if (!matchTitle && !matchVenue && !matchDesc) return false;
    }
    return true;
  });

  const handleRegister = (eventId: string) => {
    setIsRegistered(eventId);
    setTimeout(() => {
      setIsRegistered(null);
    }, 3000);
  };

  return (
    <section id="calendar" className="py-24 bg-dark-gray relative overflow-hidden">
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Academic Calendar Interactive Widget (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white font-poppins flex items-center gap-2">
                <CalendarIcon className="text-primary-teal" size={28} />
                Academic Calendar
              </h2>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[24px] p-6 shadow-2xl relative">
              {/* Header Navigator */}
              <div className="flex justify-between items-center mb-6 bg-white/5 p-3 rounded-2xl border border-white/10">
                <button
                  onClick={handlePrevMonth}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-primary-teal flex items-center justify-center text-white transition-all cursor-pointer hover:scale-105 active:scale-95"
                  title="Previous Month"
                  aria-label="Previous Month"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="text-center">
                  <span className="text-xs uppercase tracking-wider text-neon-lime font-bold block mb-0.5">
                    Academic Year 2026
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {MONTH_NAMES[selectedMonthIndex]}
                  </h3>
                </div>

                <button
                  onClick={handleNextMonth}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-primary-teal flex items-center justify-center text-white transition-all cursor-pointer hover:scale-105 active:scale-95"
                  title="Next Month"
                  aria-label="Next Month"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Month Quick Tabs */}
              <div className="flex overflow-x-auto no-scrollbar gap-1 mb-4 pb-2 border-b border-white/10">
                {SHORT_MONTHS.map((m, idx) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMonthIndex(idx)}
                    className={`px-2.5 py-1 text-xs rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
                      selectedMonthIndex === idx
                        ? 'bg-primary-teal text-white shadow-md scale-105'
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {/* Weekday Labels */}
              <div className="grid grid-cols-7 gap-1 text-center mb-3">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                  <div key={i} className="text-white/50 text-xs font-semibold uppercase tracking-wider py-1">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid Cells */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMonthIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-7 gap-1.5 text-center min-h-[240px]"
                >
                  {calendarCells.map(cell => {
                    if (cell.type === 'empty') {
                      return <div key={cell.key} className="h-9"></div>;
                    }

                    const event = cell.event;
                    const isEventDay = !!event;

                    return (
                      <div
                        key={cell.key}
                        onClick={() => event && setActiveEvent(event)}
                        className={`h-9 flex items-center justify-center rounded-xl text-xs font-bold transition-all relative group cursor-pointer ${
                          isEventDay
                            ? `${event.color} shadow-md scale-105 hover:scale-110 hover:z-20`
                            : 'text-white/80 hover:bg-white/15'
                        }`}
                      >
                        {cell.dayNumber}
                        {isEventDay && (
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-neon-lime animate-ping"></span>
                        )}

                        {/* Tooltip on hover */}
                        {isEventDay && (
                          <div className="absolute bottom-full mb-2 hidden group-hover:block z-30 w-44 bg-dark-gray text-white text-[11px] p-2.5 rounded-xl border border-white/20 shadow-xl pointer-events-none left-1/2 -translate-x-1/2 text-left">
                            <p className="font-bold text-neon-lime leading-tight mb-1">{event.title}</p>
                            <p className="text-white/70 text-[10px]">{event.time}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {/* Legend Badges */}
              <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px]">
                <div className="flex items-center gap-2 text-white/80">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-teal shadow-sm"></span>
                  <span>Hackathons</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-gold shadow-sm"></span>
                  <span>Exams & CIE</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <span className="w-2.5 h-2.5 rounded-full bg-neon-lime shadow-sm"></span>
                  <span>Competitions</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <span className="w-2.5 h-2.5 rounded-full bg-dark-teal shadow-sm"></span>
                  <span>Seminars</span>
                </div>
              </div>

              {/* View Full Calendar Button */}
              <button
                onClick={() => setIsFullYearOpen(true)}
                className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-teal to-dark-teal text-white font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer group"
              >
                <span>View Full Year Calendar</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Upcoming Activities Timeline (8 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-white font-poppins">Upcoming Activities</h2>
                  <p className="text-white/60 text-sm mt-1">CIE Continuous Internal Evaluation schedule & events</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsFullYearOpen(true)}
                    className="text-neon-lime hover:text-white transition-colors text-sm font-semibold flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 cursor-pointer"
                  >
                    All Year View <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex overflow-x-auto gap-2 mb-6 pb-2 scrollbar-none">
                {['All', 'Hackathon', 'Workshop', 'Exam', 'Seminar', 'Competition'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActivityCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                      activityCategory === cat
                        ? 'bg-neon-lime text-dark-gray shadow-md font-bold'
                        : 'bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Activities Card Stack */}
              <div className="space-y-4 max-h-[580px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/20">
                {filteredActivities.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-primary-teal/50 rounded-2xl p-5 md:p-6 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-6 relative"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${event.badgeBg}`}>
                          {event.type}
                        </span>
                        <span className="text-white/50 text-xs font-medium bg-white/5 px-2.5 py-0.5 rounded-md">
                          {SHORT_MONTHS[event.monthIndex]} 2026
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-neon-lime transition-colors w-full sm:w-auto">
                          {event.title}
                        </h3>
                      </div>

                      <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-2">
                        {event.desc}
                      </p>

                      <div className="flex flex-wrap gap-4 text-xs md:text-sm text-white/70">
                        <div className="flex items-center gap-1.5">
                          <CalendarIcon size={16} className="text-primary-teal" />
                          <span className="text-white font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={16} className="text-accent-gold" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={16} className="text-neon-lime" />
                          <span>{event.venue}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 shrink-0">
                      <button
                        onClick={() => handleRegister(event.id)}
                        className={`w-full md:w-auto px-6 py-2.5 rounded-full font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                          isRegistered === event.id
                            ? 'bg-emerald-500 text-white shadow-lg'
                            : 'bg-transparent border border-white/30 text-white hover:bg-white hover:text-dark-gray'
                        }`}
                      >
                        {isRegistered === event.id ? (
                          <>
                            <CheckCircle2 size={18} />
                            Registered!
                          </>
                        ) : (
                          'Register Now'
                        )}
                      </button>

                      <button
                        onClick={() => setActiveEvent(event)}
                        className="text-xs text-white/60 hover:text-neon-lime transition-colors underline text-center"
                      >
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Single Event Detail Popover Modal */}
      <AnimatePresence>
        {activeEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-gray border border-white/20 rounded-3xl p-8 max-w-lg w-full shadow-2xl relative text-white"
            >
              <button
                onClick={() => setActiveEvent(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 border ${activeEvent.badgeBg}`}>
                {activeEvent.type}
              </span>

              <h3 className="text-2xl font-bold text-white mb-3 font-poppins">{activeEvent.title}</h3>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">{activeEvent.desc}</p>

              <div className="bg-white/5 rounded-2xl p-4 space-y-3 mb-6 border border-white/10 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Date:</span>
                  <span className="font-semibold text-neon-lime">{activeEvent.date}, 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Timing:</span>
                  <span className="font-semibold text-white">{activeEvent.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Venue:</span>
                  <span className="font-semibold text-white">{activeEvent.venue}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    handleRegister(activeEvent.id);
                    setActiveEvent(null);
                  }}
                  className="flex-1 py-3 rounded-xl bg-primary-teal hover:bg-primary-teal/90 font-bold text-white transition-all shadow-lg cursor-pointer"
                >
                  Confirm Registration
                </button>
                <button
                  onClick={() => setActiveEvent(null)}
                  className="px-5 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ALL YEAR ACADEMIC CALENDAR MODAL */}
      <AnimatePresence>
        {isFullYearOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-lg overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-dark-gray border border-white/20 rounded-3xl p-6 md:p-8 max-w-6xl w-full max-h-[92vh] flex flex-col shadow-2xl relative text-white my-auto"
            >
              {/* Modal Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-white/10 gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="text-neon-lime" size={32} />
                    <div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-white font-poppins">
                        All Year Academic Calendar
                      </h2>
                      <p className="text-white/60 text-xs md:text-sm">
                        Complete 12-Month Continuous Internal Evaluation (CIE) & Campus Schedule — 2026
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                  {/* View Switcher (Grid vs Expanded Carousel) */}
                  <div className="flex bg-white/10 p-1 rounded-xl border border-white/10">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                        viewMode === 'grid' ? 'bg-primary-teal text-white shadow-md' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      <Grid size={15} /> 12-Month Grid
                    </button>
                    <button
                      onClick={() => setViewMode('expanded')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                        viewMode === 'expanded' ? 'bg-primary-teal text-white shadow-md' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      <List size={15} /> Single Month View
                    </button>
                  </div>

                  <button
                    onClick={() => setIsFullYearOpen(false)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
                    aria-label="Close Modal"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

              {/* Filters & Search Controls */}
              <div className="py-4 flex flex-col md:flex-row gap-4 justify-between items-center border-b border-white/10">
                {/* Category Filter Pills */}
                <div className="flex overflow-x-auto no-scrollbar gap-2 w-full md:w-auto pb-1">
                  {['All', 'Hackathon', 'Workshop', 'Exam', 'Seminar', 'Competition', 'Holiday'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setFullYearFilter(cat)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                        fullYearFilter === cat
                          ? 'bg-primary-teal text-white shadow-md font-bold'
                          : 'bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-72">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                  <input
                    type="text"
                    placeholder="Search events, exams, topics..."
                    value={fullYearSearch}
                    onChange={e => setFullYearSearch(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-neon-lime transition-all"
                  />
                  {fullYearSearch && (
                    <button
                      onClick={() => setFullYearSearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Month Bar for Single Month View or Quick Jump */}
              <div className="py-3 flex overflow-x-auto no-scrollbar gap-2 border-b border-white/10">
                {SHORT_MONTHS.map((m, idx) => {
                  const hasEventsInMonth = ALL_EVENTS.some(e => e.monthIndex === idx);
                  return (
                    <button
                      key={m}
                      onClick={() => {
                        setFullYearActiveTab(idx);
                        setViewMode('expanded');
                      }}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                        fullYearActiveTab === idx && viewMode === 'expanded'
                          ? 'bg-neon-lime text-dark-gray shadow-lg scale-105'
                          : 'bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10'
                      }`}
                    >
                      <span>{m}</span>
                      {hasEventsInMonth && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-teal"></span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Modal Body: Grid View vs Expanded Month View */}
              <div className="flex-1 overflow-y-auto py-6 pr-2 scrollbar-thin scrollbar-thumb-white/20">
                {viewMode === 'grid' ? (
                  /* 12 MONTH GRID VIEW */
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {MONTH_NAMES.map((monthName, mIdx) => {
                      const mEvents = filteredFullYearEvents.filter(e => e.monthIndex === mIdx);
                      const mConfig = MONTH_CONFIG[mIdx];

                      return (
                        <div
                          key={monthName}
                          onClick={() => {
                            setFullYearActiveTab(mIdx);
                            setViewMode('expanded');
                          }}
                          className={`bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-teal/50 rounded-2xl p-4 transition-all duration-300 cursor-pointer group flex flex-col justify-between ${
                            fullYearActiveTab === mIdx ? 'ring-2 ring-neon-lime/60 bg-white/10' : ''
                          }`}
                        >
                          <div>
                            <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/10">
                              <h4 className="font-bold text-white text-base font-poppins group-hover:text-neon-lime transition-colors">
                                {monthName}
                              </h4>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary-teal/20 text-primary-teal border border-primary-teal/30">
                                {mEvents.length} {mEvents.length === 1 ? 'Event' : 'Events'}
                              </span>
                            </div>

                            {/* Mini Calendar Grid */}
                            <div className="grid grid-cols-7 gap-1 text-center mb-3">
                              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                                <div key={i} className="text-[10px] text-white/40 font-semibold">{d}</div>
                              ))}
                              {Array.from({ length: mConfig.startDay }).map((_, i) => (
                                <div key={`e-${i}`} className="h-5"></div>
                              ))}
                              {Array.from({ length: mConfig.days }).map((_, dIdx) => {
                                const dayNum = dIdx + 1;
                                const ev = mEvents.find(e => e.dayNumber === dayNum);
                                return (
                                  <div
                                    key={dayNum}
                                    className={`h-5 flex items-center justify-center rounded text-[10px] font-medium ${
                                      ev ? `${ev.color} font-bold shadow-sm scale-110` : 'text-white/60'
                                    }`}
                                  >
                                    {dayNum}
                                  </div>
                                );
                              })}
                            </div>

                            {/* Event titles snippet */}
                            {mEvents.length > 0 ? (
                              <div className="space-y-1.5 mt-3 pt-3 border-t border-white/10">
                                {mEvents.slice(0, 2).map(ev => (
                                  <div key={ev.id} className="text-xs flex items-center gap-1.5 text-white/80 truncate">
                                    <span className={`w-2 h-2 rounded-full shrink-0 ${ev.color}`}></span>
                                    <span className="truncate">{ev.title}</span>
                                  </div>
                                ))}
                                {mEvents.length > 2 && (
                                  <p className="text-[10px] text-neon-lime font-semibold">
                                    +{mEvents.length - 2} more events...
                                  </p>
                                )}
                              </div>
                            ) : (
                              <p className="text-[11px] text-white/30 italic text-center py-2">No scheduled events</p>
                            )}
                          </div>

                          <div className="mt-4 pt-2 text-right">
                            <span className="text-[11px] text-neon-lime font-semibold group-hover:underline inline-flex items-center gap-1">
                              View Month <ArrowRight size={12} />
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* SINGLE MONTH EXPANDED VIEW */
                  <div>
                    <div className="flex justify-between items-center mb-6 bg-white/5 p-4 rounded-2xl border border-white/10">
                      <div>
                        <span className="text-xs uppercase font-bold text-neon-lime tracking-wider block">
                          Academic Schedule
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          {MONTH_NAMES[fullYearActiveTab]}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setFullYearActiveTab(prev => (prev === 0 ? 11 : prev - 1))}
                          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-primary-teal text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                        >
                          <ChevronLeft size={16} /> Prev Month
                        </button>
                        <button
                          onClick={() => setFullYearActiveTab(prev => (prev === 11 ? 0 : prev + 1))}
                          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-primary-teal text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                        >
                          Next Month <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Month Events List */}
                    {filteredFullYearEvents.filter(e => e.monthIndex === fullYearActiveTab).length > 0 ? (
                      <div className="grid md:grid-cols-2 gap-4">
                        {filteredFullYearEvents
                          .filter(e => e.monthIndex === fullYearActiveTab)
                          .map(ev => (
                            <div
                              key={ev.id}
                              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 transition-all flex flex-col justify-between gap-4"
                            >
                              <div>
                                <div className="flex justify-between items-start mb-2">
                                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${ev.badgeBg}`}>
                                    {ev.type}
                                  </span>
                                  <span className="text-xs font-bold text-neon-lime bg-white/5 px-2.5 py-1 rounded-lg">
                                    {ev.date}
                                  </span>
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">{ev.title}</h4>
                                <p className="text-white/70 text-xs mb-4 leading-relaxed">{ev.desc}</p>
                              </div>

                              <div className="space-y-2 pt-3 border-t border-white/10 text-xs text-white/70">
                                <div className="flex items-center gap-2">
                                  <Clock size={14} className="text-accent-gold" />
                                  <span>{ev.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin size={14} className="text-neon-lime" />
                                  <span>{ev.venue}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/10">
                        <Info size={40} className="mx-auto text-white/30 mb-3" />
                        <h4 className="text-lg font-bold text-white mb-1">No Events Match Filter</h4>
                        <p className="text-white/60 text-xs">Try selecting a different category or month.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60">
                <div className="flex items-center gap-4">
                  <span>Showing {filteredFullYearEvents.length} Total Events across 2026 Academic Year</span>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      alert("Downloading Institutional 2026 Academic Calendar PDF...");
                    }}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download size={14} /> Download Academic Calendar (PDF)
                  </button>
                  <button
                    onClick={() => setIsFullYearOpen(false)}
                    className="px-5 py-2 rounded-xl bg-primary-teal text-white font-semibold hover:bg-primary-teal/90 transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CalendarActivities;
