import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-background dark:bg-dark-background flex items-center">
      <ParticlesBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-800 dark:text-white mb-4">
              Hi, I'm{' '}
              <span className="text-accent dark:text-dark-accent">
                Khushi Vanaparthy
              </span>
            </h1>
            <h2 className="font-inter text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Data Engineer & Data Analyst Enthusiast
            </h2>
            <p className="font-inter text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Aspiring to leverage my programming skills and knowledge of cloud platforms
              to contribute to innovative projects in the IT sector.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="/KhushiVanaparthy_DataEngineer_Resume.pdf"
                download
                className="flex items-center gap-2 bg-accent dark:bg-dark-accent text-white px-6 py-3 rounded-lg font-inter font-medium hover:bg-accent/90 dark:hover:bg-dark-accent/90 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.a>
              
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/khushivanaparthy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/khushi-vanaparthi-87827825a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </motion.a>
                <motion.a
                  href="mailto:Khushi.vanaparthi11@gmail.com"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1000"
              alt="Decorative illustration"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
