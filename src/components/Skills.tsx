import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'tools', name: 'Tools' },
  ];

  const skills = [
    { name: 'Python', category: 'languages', proficiency: 90 },
    { name: 'Java', category: 'languages', proficiency: 85 },
    { name: 'MySQL', category: 'languages', proficiency: 85 },
    { name: 'Pandas', category: 'frameworks', proficiency: 88 },
    { name: 'NumPy', category: 'frameworks', proficiency: 85 },
    { name: 'OpenCV', category: 'frameworks', proficiency: 80 },
    { name: 'NLTK', category: 'frameworks', proficiency: 82 },
    { name: 'Git', category: 'tools', proficiency: 85 },
    { name: 'AWS', category: 'tools', proficiency: 80 },
    { name: 'Docker', category: 'tools', proficiency: 85 },
    { name: 'Apache Spark', category: 'tools', proficiency: 80 },
    { name: 'Kafka', category: 'tools', proficiency: 75 },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-background dark:bg-dark-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter">
            My technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-inter transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-accent dark:bg-dark-accent text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-poppins font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-gray-600 dark:text-gray-300 font-inter">
                  {skill.proficiency}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="bg-accent dark:bg-dark-accent h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;