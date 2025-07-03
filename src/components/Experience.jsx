import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink,
  Building,
  GraduationCap
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      type: 'work',
      title: 'Co-Founder',
      company: 'Musicarth',
      location: 'Remote',
      period: 'Nov 2025 - Present',
      description: 'Co-founded an innovative e-learning platform focused on music education. Leading the development of digital marketing campaigns and platform features.',
      responsibilities: [
        'Platform strategy and development',
        'Digital marketing campaigns',
        'User experience optimization',
        'Team leadership and coordination'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Digital Marketing'],
      current: true
    },
    {
      type: 'work',
      title: 'Marketing Manager',
      company: 'EdSpace',
      location: 'Remote',
      period: 'Sep 2024 - Present',
      description: 'Managing marketing campaigns for e-learning platform, focusing on user acquisition and engagement strategies.',
      responsibilities: [
        'Campaign strategy development',
        'Content marketing',
        'Social media management',
        'Analytics and performance tracking'
      ],
      technologies: ['Analytics Tools', 'Social Media', 'Content Management'],
      current: true
    },
    {
      type: 'work',
      title: 'Human Resources Assistant',
      company: 'EUNOIA ACADEMY',
      location: 'Tunisia',
      period: 'Aug 2023 - Sep 2023',
      description: 'Managed recruitment processes, developed HR documents, and maintained employee databases.',
      responsibilities: [
        'Recruitment and candidate screening',
        'HR documentation development',
        'Employee database management',
        'Application monitoring and processing'
      ],
      technologies: ['HR Systems', 'Database Management', 'Documentation'],
      current: false
    },
    {
      type: 'work',
      title: 'Technical Intern',
      company: 'TUNISIE TELECOM Hammamet',
      location: 'Hammamet, Tunisia',
      period: 'Jul 2023 - Aug 2023',
      description: 'Worked on hierarchical structure of subscriber lines and MSAN network infrastructure.',
      responsibilities: [
        'Network infrastructure analysis',
        'Subscriber line management',
        'MSAN network optimization',
        'Technical documentation'
      ],
      technologies: ['Network Systems', 'MSAN', 'Telecommunications'],
      current: false
    },
    {
      type: 'internship',
      title: 'Full-Stack Developer Intern',
      company: 'StudyPedia India Sqilco',
      location: 'Remote',
      period: 'Feb 2024 - Jun 2024',
      description: 'Designed and developed a learning aggregation platform with project collaboration features using full-stack Next.js.',
      responsibilities: [
        'Full-stack application development',
        'Database design and implementation',
        'User interface development',
        'API integration and testing'
      ],
      technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Full-Stack'],
      current: false
    },
    {
      type: 'internship',
      title: 'Web Developer Intern',
      company: 'EUNOIA ACADEMY',
      location: 'Tunisia',
      period: 'Jul 2023 - Jul 2023',
      description: 'Built a comprehensive management system with CRUD operations using Angular, MongoDB, Node.js, and Express.js.',
      responsibilities: [
        'Frontend development with Angular',
        'Backend API development',
        'Database design and management',
        'System integration and testing'
      ],
      technologies: ['Angular', 'MongoDB', 'Node.js', 'Express.js'],
      current: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey across various roles in technology, education, and business development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background z-10 ${
                    exp.current 
                      ? 'bg-primary animate-pulse' 
                      : exp.type === 'work' 
                        ? 'bg-secondary' 
                        : 'bg-accent'
                  }`}></div>

                  {/* Content */}
                  <div className="ml-16 w-full">
                    <Card className="card-hover border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {exp.type === 'work' ? (
                                <Briefcase className="h-5 w-5 text-primary" />
                              ) : (
                                <GraduationCap className="h-5 w-5 text-accent" />
                              )}
                              <h3 className="text-xl font-semibold">{exp.title}</h3>
                              {exp.current && (
                                <Badge className="bg-primary text-primary-foreground">
                                  Current
                                </Badge>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-4 text-muted-foreground mb-2">
                              <div className="flex items-center gap-1">
                                <Building className="h-4 w-4" />
                                <span className="font-medium text-foreground">{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-1 text-muted-foreground mb-4">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">
                          {exp.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                          <ul className="space-y-1">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start text-sm text-muted-foreground">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="text-xs bg-muted/50"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-center mb-12">
            <span className="gradient-text">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Discovering Entrepreneurship ', date: 'Jun 2025', issuer: 'Cisco' },
              { name: 'Introduction à la science des données', date: 'Jun 2025', issuer: 'Cisco' },
              { name: 'Cisco Networking (CCNA 3)', date: 'Jun 2024', issuer: 'Cisco' },
              { name: 'Cisco Networking (CCNA 2)', date: 'Jun 2023', issuer: 'Cisco' },
              { name: 'Python Programming (PCAP)', date: 'Apr 2023', issuer: 'Python Institute' },
              { name: 'Cisco Networking (CCNA 1)', date: 'Feb 2023', issuer: 'Cisco' }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="card-hover text-center p-4 border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

