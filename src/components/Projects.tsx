import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Hand Sign Detection for Deaf People",
      description: "Developed a deep-learning-based system to recognize and interpret hand signs, facilitating communication for individuals with hearing impairments. Implemented advanced neural network models to achieve high accuracy in real-time detection and translation of hand gestures.",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&q=80&w=1000",
      tech: ["Python", "OpenCV", "TensorFlow", "Deep Learning"]
    },
    {
      title: "Wireless Energy Transfer Device",
      description: "Engineered a wireless charging device for small electronics using electromagnetic wave transmission. Optimized energy transfer efficiency and designed a receiver-transmitter system with microcontroller-based regulation.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      tech: ["Electronics", "Microcontroller", "Wireless Technology"]
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-background dark:bg-dark-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevProject}
              className="absolute left-0 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-0 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 p-6">
              <div className="relative h-64 md:h-full">
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-poppins font-semibold text-gray-800 dark:text-white mb-4">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {projects[currentIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentIndex].tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/10 dark:bg-dark-accent/10 text-accent dark:text-dark-accent rounded-full text-sm font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-dark-accent transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    <span className="font-inter">Code</span>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-dark-accent transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                    <span className="font-inter">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent dark:bg-dark-accent w-6'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;