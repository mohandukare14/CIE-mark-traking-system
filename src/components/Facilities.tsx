import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Facilities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const facilities = [
    {
      id: 1,
      title: 'Computer Science Labs',
      desc: 'State-of-the-art developer terminals equipped with AI tools and high-speed network nodes.',
      img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600'
    },
    {
      id: 2,
      title: 'Central Library Hub',
      desc: 'Resource archives featuring reference manuals, digital research databases, and study areas.',
      img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600'
    },
    {
      id: 3,
      title: 'Athletic Arena',
      desc: 'High-capacity stadium, tennis courts, and fitness facilities for sports evaluations.',
      img: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=600'
    },
    {
      id: 4,
      title: 'Innovation Center',
      desc: 'Incubation workspace for student startups, patents, and mechanical projects.',
      img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600'
    },
    {
      id: 5,
      title: 'Seminar Hall Complex',
      desc: 'Multi-purpose auditoriums for national conferences, expert talks, and technical presentations.',
      img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600'
    },
    {
      id: 6,
      title: 'Student Cafeteria',
      desc: 'Hygienic and spacious dining area serving nutritious meals and active social zones.',
      img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600'
    }
  ];

  const [isHovered, setIsHovered] = useState(false);

  const updateSliderDimensions = () => {
    if (!trackRef.current) return;

    const card = trackRef.current.querySelector('.slide-card');
    if (!card) return;

    const width = card.getBoundingClientRect().width;
    setSlideWidth(width);

    const trackWidth = trackRef.current.parentElement?.getBoundingClientRect().width || 0;
    const gap = 32; // gap-8 is 2rem = 32px
    const step = width + gap;

    const visibleCards = Math.round(trackWidth / step) || 1;
    const maxVal = Math.max(0, facilities.length - visibleCards);
    setMaxSlide(maxVal);
  };

  useEffect(() => {
    updateSliderDimensions();
    window.addEventListener('resize', updateSliderDimensions);

    // Setup another trigger to handle post-load dimensions
    const timer = setTimeout(updateSliderDimensions, 100);
    return () => {
      window.removeEventListener('resize', updateSliderDimensions);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isHovered || maxSlide <= 0) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [maxSlide, isHovered]);

  const handleNext = () => {
    setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <section id="facilities" className="py-24 bg-white border-t border-b border-light-gray/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-gray font-poppins">
              Campus Facilities
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-light-gray/20 flex items-center justify-center text-dark-gray hover:border-primary-teal hover:text-primary-teal transition-all cursor-pointer"
              aria-label="Previous Slide"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-light-gray/20 flex items-center justify-center text-dark-gray hover:border-primary-teal hover:text-primary-teal transition-all cursor-pointer"
              aria-label="Next Slide"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={trackRef}
            className="flex gap-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] w-full"
            style={{
              transform: `translateX(-${currentSlide * (slideWidth + 32)}px)`
            }}
          >
            {facilities.map(facility => (
              <div
                key={facility.id}
                className="slide-card flex-shrink-0 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.3px)] bg-off-white border border-light-gray/20 rounded-[20px] overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-2 hover:border-primary-teal transition-all duration-300 group"
              >
                <div className="overflow-hidden h-60 w-full">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${facility.img})` }}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-dark-gray mb-3 font-poppins">{facility.title}</h3>
                  <p className="text-sm text-dark-gray/70 leading-relaxed">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Facilities;
