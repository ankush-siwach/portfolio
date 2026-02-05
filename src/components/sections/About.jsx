import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Lightbulb, Users, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+' },
    { icon: Award, label: 'Certifications', value: '8+' },
    { icon: Users, label: 'Collaborations', value: '10+' },
    { icon: Lightbulb, label: 'Years Experience', value: '2+' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Passionate Developer & Innovator
              </h3>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                 I’m a software developer with experience in MERN stack, C++, PHP, and robotics.
                I like building projects that solve real problems and make daily tasks easier.


              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                 I have worked on e-commerce sites, CRUD applications, and Arduino-based systems.
                I keep learning new tools and technologies to grow my skills.

              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                 I enjoy working in teams, sharing knowledge, and creating useful solutions.
                 My goal is to build software that helps people and creates a positive impact.
              </p>

              {/* Key Highlights */}
              <div className="mt-8 space-y-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Key Highlights:</h4>
                <ul className="space-y-2">
                  {[
                    'MERN Stack Development',
                    'Robotics & Arduino',
                    'PHP & MySQL',
                    'Competitive Programming',
                    'Project Development'
                  ].map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Technologies I Love */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Technologies I Love Working With
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'C++',
                'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Git', 'MongoDB'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1.2 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700 hover:shadow-md transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

