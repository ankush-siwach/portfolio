import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Database, 
  Shield, 
  Smartphone, 
  Globe, 
  Terminal,
  Cpu,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 70 },
        { name: 'JavaScript/TypeScript', level: 75 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 65 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 65 },
        { name: 'PHP', level: 60 },
        { name: 'MongoDB', level: 78 }
      ]
    },
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'C++', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'Python', level: 65 },
        { name: 'Java', level: 15 }
      ]
    },
    {
  title: 'Robotics',
  icon: Shield,
  color: 'from-red-500 to-orange-500',
  skills: [
    { name: 'Arduino', level: 80 },
    { name: 'Sensors Integration', level: 75 },
    { name: 'Motor Control', level: 70 },
    { name: 'Bluetooth Modules', level: 75 }
  ]
},
  {
  title: 'Database Management',
  icon: Database,
  color: 'from-green-500 to-emerald-500',
  skills: [
    { name: 'MySQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Database Design', level: 70 },
    { name: 'Query Optimization', level: 68 }
  ]
},
  {
  title: 'DevOps & Tools',
  icon: Terminal,
  color: 'from-gray-600 to-gray-800',
  skills: [
    { name: 'Git & GitHub', level: 90 },
    { name: 'Linux Basics', level: 50 },
    { name: 'VS Code & Debugging', level: 80 },
    { name: 'Postman', level: 55 },

  ]
}
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across various domains of software development
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute right-0 top-0 w-2 h-full bg-white/30 rounded-full"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            variants={cardVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Additional Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Cpu, title: 'Data Structures & Algorithms', desc: 'Competitive Programming' },
                { icon: GitBranch, title: 'Version Control', desc: 'Git, GitHub, GitLab' },
                { icon: Database, title: 'Database Design', desc: 'SQL, NoSQL, MongoDB' },
                { icon: Globe, title: 'Web Performance', desc: 'Optimization & SEO' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

