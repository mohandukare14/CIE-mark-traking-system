import { useState } from 'react';

const Notices = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'deadline' | 'update'>('all');

  const activities = [
    {
      id: 1,
      category: 'Hackathon',
      date: '22 Jul 2026',
      title: 'CodeCraft Hackathon',
      desc: '24-hour coding challenge focused on scalable application design. Solve real-world cases.',
      points: '+50 Points',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600'
    },
    {
      id: 2,
      category: 'Sports',
      date: '05 Aug 2026',
      title: 'Annual Cricket Cup',
      desc: 'Inter-department athletic tournament. Champion team claims sports senate credits.',
      points: '+30 Points',
      img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600'
    },
    {
      id: 3,
      category: 'Technical',
      date: '12 Aug 2026',
      title: 'Paper Presentation',
      desc: 'Showcase research models in machine learning and cybersecurity parameters.',
      points: '+40 Points',
      img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600'
    },
    {
      id: 4,
      category: 'Community',
      date: '18 Aug 2026',
      title: 'NSS Plantation Drive',
      desc: 'Dedicate service hours for environmental coordination certificates.',
      points: '+20 Points',
      img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600'
    }
  ];

  const notices = [
    {
      id: 1,
      category: 'deadline',
      badge: 'Deadlines',
      time: '2 hours ago',
      title: 'NPTEL Certificate Submissions',
      desc: 'Submit NPTEL course proofs before 25th July. No submissions accepted post this window.'
    },
    {
      id: 2,
      category: 'update',
      badge: 'Updates',
      time: '1 day ago',
      title: 'Portal V2.0 Launched',
      desc: 'A new secure responsive interface has been launched. Check user dashboards for guidelines updates.'
    },
    {
      id: 3,
      category: 'update',
      badge: 'System',
      time: '3 days ago',
      title: 'Verification Hours Restored',
      desc: 'Faculty evaluators are auditing submissions. Standard approval timeline set back to 24h limit.'
    }
  ];

  const filteredNotices = notices.filter(
    notice => activeFilter === 'all' || notice.category === activeFilter
  );

  return (
    <section className="py-24 bg-off-white" id="activities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20">
          
          {/* Activities Column (Left) */}
          <div>
            <h3 className="text-3xl font-extrabold text-dark-gray uppercase mb-12 font-poppins tracking-tight">
              Student activities
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {activities.map(activity => (
                <div 
                  key={activity.id} 
                  className="bg-white border border-light-gray/20 rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col hover:-translate-y-1 hover:border-primary-teal"
                >
                  <div 
                    className="h-44 w-full bg-cover bg-center" 
                    style={{ backgroundImage: `url(${activity.img})` }}
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center text-xs font-bold text-light-gray uppercase mb-3">
                      <span className="text-primary-teal">{activity.category}</span>
                      <span>{activity.date}</span>
                    </div>
                    <h4 className="text-lg font-bold text-dark-gray mb-2 font-poppins">{activity.title}</h4>
                    <p className="text-sm text-dark-gray/70 mb-6 flex-grow leading-relaxed">{activity.desc}</p>
                    <div className="flex justify-between items-center pt-4 border-t border-light-gray/10 mt-auto">
                      <span className="font-extrabold text-primary-teal text-sm">{activity.points}</span>
                      <a href="#register" className="inline-flex items-center justify-center px-4 py-1.5 border border-primary-teal/20 hover:border-primary-teal text-xs font-bold rounded-lg text-primary-teal hover:bg-primary-teal/5 transition-all">
                        Register
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notices Sidebar Board (Right) */}
          <div id="notices" className="bg-white border border-light-gray/20 rounded-[20px] p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-light-gray/10">
              <span className="font-poppins text-lg font-extrabold flex items-center gap-3 text-dark-gray">
                <span className="inline-block w-2.5 h-2.5 bg-primary-teal rounded-full animate-pulse"></span>
                Latest Notices
              </span>
            </div>

            {/* Notice filters */}
            <div className="flex gap-2 mb-8">
              {(['all', 'deadline', 'update'] as const).map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 border text-xs font-bold rounded-lg uppercase transition-all
                    ${activeFilter === filter 
                      ? 'bg-neon-lime text-dark-gray border-neon-lime shadow-sm' 
                      : 'border-light-gray/20 text-light-gray hover:border-light-gray hover:text-dark-gray'
                    }
                  `}
                >
                  {filter === 'all' ? 'All' : filter === 'deadline' ? 'Deadlines' : 'Updates'}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-5 overflow-y-auto max-h-[520px] pr-2 scrollbar-thin scrollbar-thumb-light-gray/20 scrollbar-track-transparent">
              {filteredNotices.map(notice => (
                <div 
                  key={notice.id} 
                  className="p-5 rounded-xl bg-off-white border border-light-gray/10 hover:border-primary-teal/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-center text-[10px] font-bold mb-3">
                    <span className="text-light-gray">{notice.time}</span>
                    <span className={`px-2 py-0.5 rounded text-[9px] uppercase tracking-wider font-extrabold
                      ${notice.badge === 'Deadlines' 
                        ? 'bg-red-500/10 text-red-500' 
                        : notice.badge === 'Updates' 
                        ? 'bg-green-500/10 text-green-500' 
                        : 'bg-blue-500/10 text-blue-500'
                      }
                    `}>
                      {notice.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-dark-gray mb-2 font-poppins">{notice.title}</h4>
                  <p className="text-sm text-dark-gray/70 leading-relaxed">{notice.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Notices;
