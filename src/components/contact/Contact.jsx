import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import ContactText from './ContactText';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitMessage('Message envoyé avec succès!');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset message after 3 seconds
      setTimeout(() => setSubmitMessage(''), 3000);
    }, 1500);
  };

  const contactItems = [
    { icon: <FiMail className="text-xl" />, text: 'jamilaguebli02@gmail.com', href: 'mailto:jamilaguebli02@gmail.com' },
    { icon: <FiPhone className="text-xl" />, text: '+216 25759338', href: 'tel:25759338' },
    { icon: <FiGithub className="text-xl" />, text: 'GitHub', href: 'https://github.com/jamilaguebli' },
    { icon: <FiLinkedin className="text-xl" />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/jamila-guebli-923ba5251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
  ];

  return (
    <section id='contact' className="py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
                   <div className="text-center mb-16 w-full">
                     <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                       <ContactText/>
                     </div>
                   </div>
                   </div>
          
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 group"
              >
                <div className="p-3 rounded-full bg-gray-800 group-hover:bg-[#99e7ff] transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{(item.text.includes('@') || item.text === '25759338') ? '' : 'Visit my'}</p>
                  <p className="font-medium group-hover:text-[#99e7ff] transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-8 border-t border-gray-700"
            >
              <h4 className="text-xl font-semibold mb-4">Let's work together</h4>
              <p className="text-gray-400">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div whileHover={{ scale: 1.01 }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#99e7ff] focus:border-transparent transition-all"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#99e7ff] focus:border-transparent transition-all"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#99e7ff] focus:border-transparent transition-all"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-[#99e7ff]   '
                } transition-all duration-300`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FiSend />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-teal-400 mt-4"
                >
                  {submitMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;