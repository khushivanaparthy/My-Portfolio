import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Building2, ArrowRight, ArrowDown, GraduationCap } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      icon: <GraduationCap className="w-8 h-8 text-accent dark:text-dark-accent" />,
      title: "AWS re/start Program",
      company: "Tech Mahindra Smart Academy",
      duration: "Present",
      description: "Currently enrolled in the AWS re/start program, learning cloud architecture and AWS services. Developing cloud-native applications and gaining hands-on experience with AWS technologies.",
      arrow: <ArrowRight className="w-6 h-6 text-accent dark:text-dark-accent" />,
      direction: "right"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-accent dark:text-dark-accent" />,
      title: "Data Engineer Intern",
      company: "Byte Analytics",
      duration: "Feb 2024 - July 2024",
      description: "Designed and optimized data pipelines for efficient processing and analysis. Developed and deployed scalable ETL processes. Enhanced data integration from diverse sources.",
      arrow: <ArrowDown className="w-6 h-6 text-accent dark:text-dark-accent" />,
      direction: "down"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-background dark:bg-dark-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter">
            My professional journey and work experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 dark:bg-dark-accent/20 transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:pr-1/2 md:pl-8' : 'md:pl-1/2 md:pr-8'
              }`}
            >
              {/* Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg">
                  {exp.icon}
                </div>
              </div>

              {/* Content */}
              <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-xl font-poppins font-semibold text-gray-800 dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-accent dark:text-dark-accent">
                    {exp.arrow}
                  </span>
                </div>
                <h4 className="text-lg font-inter font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {exp.company}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {exp.duration}
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-inter">
                  {exp.description}
                </p>

                {/* Arrow line */}
                <div className={`absolute top-1/2 w-8 h-0.5 bg-accent/20 dark:bg-dark-accent/20 ${
                  exp.direction === 'right' ? 'right-0' : 'left-0'
                }`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;