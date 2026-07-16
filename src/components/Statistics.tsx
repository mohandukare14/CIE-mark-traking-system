import { motion } from 'framer-motion';

const Statistics = () => {
  const stats = [
    { value: '5000+', label: 'Students' },
    { value: '120+', label: 'Faculty' },
    { value: '150+', label: 'Activities' },
    { value: '100%', label: 'Transparent Evaluation' },
  ];

  return (
    <section className="py-20 bg-off-white relative z-20 -mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
            >
              <h3 className="text-4xl font-extrabold text-primary-teal mb-2 font-poppins">{stat.value}</h3>
              <p className="text-dark-gray/70 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
