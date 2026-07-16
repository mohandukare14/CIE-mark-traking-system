import { motion } from 'framer-motion';
import { Phone, Mail, Ticket, Clock, MessageSquare, MapPin } from 'lucide-react';

const HelpDesk = () => {
  const supportChannels = [
    {
      title: 'Phone Support',
      detail: '+91 800 123 4567',
      subtext: 'Mon-Fri, 9am - 5pm',
      icon: <Phone size={32} />,
      color: 'text-primary-teal'
    },
    {
      title: 'Email Support',
      detail: 'cie.support@zcoer.edu.in',
      subtext: 'Usually replies in 24 hrs',
      icon: <Mail size={32} />,
      color: 'text-accent-gold'
    },
    {
      title: 'Support Ticket',
      detail: 'Raise a Request',
      subtext: 'Track your issue online',
      icon: <Ticket size={32} />,
      color: 'text-dark-teal'
    }
  ];

  return (
    <section id="helpdesk" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-gray mb-4 font-poppins">Help Desk & Support</h2>
          <p className="text-lg text-dark-gray/70 max-w-2xl mx-auto">
            Need assistance with the portal? Our dedicated support team is here to help you resolve any issues quickly.
          </p>
        </div>

        {/* Support Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-off-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-6 ${channel.color} group-hover:scale-110 transition-transform`}>
                {channel.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-2">{channel.title}</h3>
              <p className="text-primary-teal font-semibold text-lg mb-1">{channel.detail}</p>
              <p className="text-dark-gray/50 text-sm">{channel.subtext}</p>
            </motion.div>
          ))}
        </div>

        {/* Map and Contact Section */}
        <div id="contact" className="grid lg:grid-cols-2 gap-12 bg-dark-gray rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Map Placeholder */}
          <div className="h-64 lg:h-auto bg-gray-200 relative">
            <div className="absolute inset-0 bg-dark-teal/20"></div>
            {/* Embedded map or styled placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.606399127732!2d73.8184!3d18.4552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI3JzE4LjciTiA3M8KwNDknMDYuMiJF!5e0!3m2!1sen!2sin!4v1629876543210!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(80%)' }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Campus Map"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-8 font-poppins">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-neon-lime mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Campus Address</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    ZEAL College of Engineering & Research,<br />
                    Survey No. 39, Narhe,<br />
                    Pune, Maharashtra 411041, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-accent-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Office Hours</h4>
                  <p className="text-white/70 text-sm">Monday - Friday: 9:00 AM to 5:00 PM</p>
                  <p className="text-white/70 text-sm">Saturday: 9:00 AM to 1:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageSquare className="text-primary-teal mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Live Chat</h4>
                  <p className="text-white/70 text-sm mb-3">Available during office hours for quick resolutions.</p>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-lg font-medium transition-colors text-sm flex items-center gap-2">
                    Start Chat <MessageSquare size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HelpDesk;
