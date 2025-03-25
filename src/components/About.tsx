import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Code } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cards = [
    {
      icon: <GraduationCap className="w-8 h-8 text-accent dark:text-dark-accent" />,
      title: "Education",
      content: [
        "B.Tech in AI and Data Science (CGPA: 8.9)",
        "Intermediate - Sri Chaitanya Junior College (89.3%)",
        "Schooling - Sri Geethanjali Educational Institution (GPA: 9.5)"
      ]
    },
    {
      icon: <Code className="w-8 h-8 text-accent dark:text-dark-accent" />,
      title: "Technical Background",
      content: [
        "Data Engineering",
        "Machine Learning",
        "Cloud Computing",
        "Full Stack Development"
      ]
    },
    {
      icon: <Award className="w-8 h-8 text-accent dark:text-dark-accent" />,
      title: "Achievements",
      content: [
        "Data Engineer Intern at Byte Analytics",
        "Multiple Certifications",
        "Innovative Projects"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter">
            A passionate Data Engineer and AI enthusiast with a strong foundation in technology
            and a drive for innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-background dark:bg-dark-background rounded-full p-4 mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-4 text-gray-800 dark:text-white">
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.content.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 font-inter">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;