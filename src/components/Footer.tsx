import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/khushivanaparthy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-dark-accent transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/khushi-vanaparthi-87827825a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-dark-accent transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:Khushi.vanaparthi11@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-dark-accent transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-300 font-inter text-sm">
            Developed by{' '}
            <a
              href="https://github.com/khushivanaparthy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent dark:text-dark-accent hover:text-accent/80 dark:hover:text-dark-accent/80 transition-colors duration-300"
            >
              Khushi Vanaparthy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;