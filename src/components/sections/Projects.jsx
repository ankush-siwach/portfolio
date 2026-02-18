import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code, Smartphone, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FolderKanban } from 'lucide-react';


const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const projects = [
    
    {
      id: 1,
      title: 'Fasto - E-commerce Platform',
      description: 'A comprehensive e-commerce website featuring product categories, shopping cart functionality, and guest checkout system. Built with modern web technologies for optimal user experience.',
      image: '/api/placeholder/400/250',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
      features: [
        'Product catalog with categories',
        'Shopping cart & checkout',
        'User authentication',
        'Admin dashboard',
        'Responsive design'
      ],
      icon: ShoppingCart,
      color: 'from-blue-500 to-cyan-500',
      github: '#',
      live: '#'
    },
   {
  id: 2,
  title: 'Project Management Software (MERN)',
  description: 'A full-stack MERN-based project management application that allows teams to create projects, assign tasks, set deadlines, and track real-time progress. Built with secure authentication and dynamic dashboards to enhance collaboration and workflow efficiency.',
  image: '/api/placeholder/400/250',
  technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'REST API'],
  features: [
    'JWT-based authentication & authorization',
    'Create, update & delete projects',
    'Task assignment with deadline tracking',
    'Real-time task status updates',
    'Role-based access control (Admin/Member)',
    'Dynamic dashboard with project analytics',
    'Responsive UI with React'
  ],
      icon: FolderKanban,
      color: 'from-purple-500 to-pink-500',
      github: 'https://github.com/ankush-siwach/project-management-software',
      live: '#'
    },

     {
      id: 3,
      title: 'Bluetooth Controlled Car',
      description: 'Arduino-based autonomous car controlled via Bluetooth and mobile application. Features real-time control, sensor integration, and wireless communication for remote operation.',
      image: '/api/placeholder/400/250',
      technologies: ['Arduino', 'C++', 'Bluetooth', 'Mobile App', 'Sensors'],
      features: [
        'Bluetooth connectivity',
        'Mobile app control',
        'Sensor integration',
        'Real-time feedback',
        'Autonomous navigation'
      ],
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500',
      github: '#',
      live: '#'
    },
 
  // {
  //   id: 4,
  //   title: 'Obstacle Detector Robot',
  //   description: 'Arduino robot that detects and avoids obstacles using ultrasonic sensors for safe navigation.',
  //   image: '/api/placeholder/400/250',
  //   technologies: ['Arduino', 'C++', 'Ultrasonic Sensors', 'Motors'],
  //   features: [
  //     'Obstacle detection',
  //     'Automatic stopping',
  //     'Path adjustment',
  //     'Sensor integration'
  //   ],
  //   icon: Code,
  //   color: 'from-yellow-500 to-green-500',
  //   github: '#',
  //   live: '#'
  // },
  // {
  //   id: 5,
  //   title: 'Robo Soccer',
  //   description: 'Autonomous soccer-playing robot with motor and sensor-guided movement to chase and kick the ball.',
  //   image: '/api/placeholder/400/250',
  //   technologies: ['Arduino', 'C++', 'Motors', 'Sensors', 'Servo'],
  //   features: [
  //     'Ball tracking',
  //     'Motor control',
  //     'Autonomous movement',
  //     'Goal scoring mechanism'
  //   ],
  //   icon: Code,
  //   color: 'from-blue-500 to-indigo-500',
  //   github: '#',
  //   live: '#'
  // },
  // {
  //   id: 6,
  //   title: 'Motor Speedometer',
  //   description: 'Device to measure and display the speed of DC motors using Arduino and sensor feedback.',
  //   image: '/api/placeholder/400/250',
  //   technologies: ['Arduino', 'C++', 'Sensors', 'Display Module'],
  //   features: [
  //     'Motor speed measurement',
  //     'Real-time display',
  //     'Sensor calibration',
  //     'Data logging'
  //   ],
  //   icon: Code,
  //   color: 'from-pink-500 to-purple-500',
  //   github: '#',
  //   live: '#'
  // },
  // {
  //   id: 7,
  //   title: 'PCB Shaker',
  //   description: 'Arduino-controlled PCB shaker to test durability of PCB assemblies by simulating vibrations.',
  //   image: '/api/placeholder/400/250',
  //   technologies: ['Arduino', 'C++', 'Motors', 'Mechanical Setup'],
  //   features: [
  //     'Adjustable vibration intensity',
  //     'Timer control',
  //     'Durability testing',
  //     'Compact design'
  //   ],
  //   icon: Code,
  //   color: 'from-gray-500 to-gray-700',
  //   github: '#',
  //   live: '#'
  // },
  // {
  //   id: 8,
  //   title: 'Pick and Place Robot',
  //   description: 'Robotic arm that picks objects from one location and places them in another using Arduino and sensors.',
  //   image: '/api/placeholder/400/250',
  //   technologies: ['Arduino', 'C++', 'Servo Motors', 'Sensors'],
  //   features: [
  //     'Object detection',
  //     'Precise movement',
  //     'Motor control',
  //     'Automation tasks'
  //   ],
  //   icon: Code,
  //   color: 'from-green-500 to-teal-500',
  //   github: '#',
  //   live: '#'
  // }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
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
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work demonstrating technical skills and creative problem-solving
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Project Image */}
                  <motion.div
                    className={`relative overflow-hidden rounded-2xl shadow-2xl ${
                      index % 2 === 1 ? 'lg:col-start-2' : ''
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                      <div className={`p-4 rounded-full bg-gradient-to-r ${project.color}`}>
                        <project.icon className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex space-x-3">
                          <a
                          href='https://github.com/ankush-siwach/project-management-software'
                          target='_blan'
                          >  
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                          </a>
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div>
                      <div className="flex items-center mb-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} mr-3`}>
                          <project.icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          Project {String(project.id).padStart(2, '0')}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        Key Features:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.5 + featureIndex * 0.1 }}
                            className="flex items-center text-gray-600 dark:text-gray-300"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mr-3`}></div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ delay: 0.8 + techIndex * 0.05 }}
                            className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm rounded-full font-medium shadow-lg`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 pt-4">
                      <Button
                        variant="outline"
                        className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                      <Button className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white`}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Projects */}
          <motion.div
            variants={cardVariants}
            className="text-center mt-16"
          >
            <a
             href ="https://github.com/ankush-siwach?tab=repositories"
              target = "_blank"
              rel="noopener noreferrer"
              >
            <Button
              size="lg"
             
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

