import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-background dark:bg-dark-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-poppins font-semibold mb-6 text-gray-800 dark:text-white">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 dark:bg-dark-accent/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-accent dark:text-dark-accent" />
                </div>
                <div>
                  <p className="font-inter text-gray-600 dark:text-gray-300">Email</p>
                  <a 
                    href="mailto:khushi.vanaparthi11@gmail.com"
                    className="font-inter text-gray-800 dark:text-white hover:text-accent dark:hover:text-dark-accent transition-colors duration-300"
                  >
                    khushi.vanaparthi11@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 dark:bg-dark-accent/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-accent dark:text-dark-accent" />
                </div>
                <div>
                  <p className="font-inter text-gray-600 dark:text-gray-300">Connect</p>
                  <a 
                    href="https://www.linkedin.com/in/khushi-vanaparthi-87827825a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-gray-800 dark:text-white hover:text-accent dark:hover:text-dark-accent transition-colors duration-300"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name"
                  className="block text-sm font-inter font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm font-inter font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="message"
                  className="block text-sm font-inter font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-accent dark:bg-dark-accent text-white px-6 py-3 rounded-lg font-inter font-medium hover:bg-accent/90 dark:hover:bg-dark-accent/90 transition-colors duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;