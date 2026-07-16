import { motion } from 'framer-motion';
import { Bell, ArrowRight } from 'lucide-react';

const Notices = () => {
  const notices = [
    {
      id: 1,
      title: 'Revised Guidelines for Minor Project Evaluation',
      date: 'Aug 10, 2026',
      desc: 'The guidelines for the evaluation of minor projects for third-year students have been updated. Please review the new rubric.',
    },
    {
      id: 2,
      title: 'Submission Deadline Extension for Activity 2',
      date: 'Aug 08, 2026',
      desc: 'Due to technical maintenance, the deadline for submitting the reports for Activity 2 has been extended by 48 hours.',
    },
    {
      id: 3,
      title: 'Mandatory Seminar Attendance Policy',
      date: 'Aug 05, 2026',
      desc: 'Attendance in the upcoming technical seminars is mandatory and will carry 10 marks towards your final CIE score.',
    },
    {
      id: 4,
      title: 'Faculty Feedback Form Activation',
      date: 'Aug 01, 2026',
      desc: 'The mid-semester faculty feedback forms are now active. All students are required to complete them by the end of the week.',
    }
  ];

  return (
    <section id="notices" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-teal/10 rounded-full flex items-center justify-center text-primary-teal">
                <Bell size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark-gray font-poppins">Latest Notices</h2>
            </div>
            <p className="text-dark-gray/70 text-lg max-w-2xl">
              Stay informed with the latest announcements, policy updates, and important deadlines from the evaluation committee.
            </p>
          </div>
          <button className="flex items-center gap-2 text-primary-teal font-semibold hover:text-dark-teal transition-colors">
            View All Notices <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {notices.map((notice, index) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-off-white border-l-4 border-primary-teal rounded-r-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-primary-teal/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
              
              <div className="relative z-10">
                <div className="text-sm font-semibold text-primary-teal mb-2">{notice.date}</div>
                <h3 className="text-xl font-bold text-dark-gray mb-3 leading-snug">{notice.title}</h3>
                <p className="text-dark-gray/70 mb-4 text-sm leading-relaxed">{notice.desc}</p>
                <button className="text-dark-teal font-semibold text-sm flex items-center gap-1 group-hover:text-primary-teal transition-colors">
                  Read Full Notice <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Notices;
