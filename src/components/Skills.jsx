import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Code, 
  Database, 
  Palette, 
  Brain, 
  Globe, 
  Smartphone,
  Server,
  BarChart3
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'primary',
      skills: [
        { name: 'Python', level: 90, experience: '3+ years' },
        { name: 'JavaScript', level: 85, experience: '2+ years' },
        { name: 'Java', level: 80, experience: '2+ years' },
        { name: 'R', level: 85, experience: '2+ years' },
        { name: 'C', level: 75, experience: '1+ years' },
        { name: 'TypeScript', level: 80, experience: '1+ years' }
      ]
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'secondary',
      skills: [
        { name: 'React', level: 88, experience: '2+ years' },
        { name: 'Next.js', level: 85, experience: '1+ years' },
        { name: 'Angular', level: 82, experience: '1+ years' },
        { name: 'HTML/CSS', level: 90, experience: '3+ years' },
        { name: 'Tailwind CSS', level: 85, experience: '1+ years' },
        { name: 'Bootstrap', level: 80, experience: '2+ years' }
      ]
    },
    {
      title: 'Backend & Database',
      icon: Server,
      color: 'accent',
      skills: [
        { name: 'Node.js', level: 80, experience: '2+ years' },
        { name: 'Express.js', level: 78, experience: '1+ years' },
        { name: 'MongoDB', level: 82, experience: '2+ years' },
        { name: 'MySQL', level: 75, experience: '2+ years' },
        { name: 'PostgreSQL', level: 70, experience: '1+ years' },
        { name: 'Firebase', level: 75, experience: '1+ years' }
      ]
    },
    {
      title: 'Data Science & ML',
      icon: BarChart3,
      color: 'primary',
      skills: [
        { name: 'Machine Learning', level: 85, experience: '2+ years' },
        { name: 'Pandas', level: 88, experience: '2+ years' },
        { name: 'NumPy', level: 85, experience: '2+ years' },
        { name: 'Scikit-learn', level: 80, experience: '1+ years' },
        { name: 'TensorFlow', level: 75, experience: '1+ years' },
        { name: 'Data Visualization', level: 85, experience: '2+ years' }
      ]
    },
    {
      title: 'Design & Tools',
      icon: Palette,
      color: 'secondary',
      skills: [
        { name: 'Figma', level: 88, experience: '2+ years' },
        { name: 'Adobe Illustrator', level: 82, experience: '2+ years' },
        { name: 'Photoshop', level: 80, experience: '2+ years' },
        { name: 'Canva', level: 85, experience: '2+ years' },
        { name: 'UI/UX Design', level: 82, experience: '2+ years' },
        { name: 'Prototyping', level: 80, experience: '1+ years' }
      ]
    },
    {
      title: 'Mobile & Other',
      icon: Smartphone,
      color: 'accent',
      skills: [
        { name: 'Android Studio', level: 78, experience: '1+ years' },
        { name: 'React Native', level: 70, experience: '6 months' },
        { name: 'Git/GitHub', level: 85, experience: '3+ years' },
        { name: 'Docker', level: 65, experience: '6 months' },
        { name: 'AWS', level: 60, experience: '6 months' },
        { name: 'Linux', level: 75, experience: '2+ years' }
      ]
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains 
            of software development, data science, and design.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                variants={cardVariants}
                className="group"
              >
                <Card className="h-full card-hover border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-full bg-${category.color}/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-6 w-6 text-${category.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          variants={skillVariants}
                          className="group/skill"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-sm">{skill.name}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">{skill.experience}</span>
                              <span className="text-xs font-medium">{skill.level}%</span>
                            </div>
                          </div>
                          
                          <div className="progress-bar h-2 group-hover/skill:h-3 transition-all duration-300">
                            <motion.div
                              className="progress-fill h-full"
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : {}}
                              transition={{ 
                                duration: 1.5, 
                                delay: 1 + categoryIndex * 0.2 + skillIndex * 0.1,
                                ease: "easeOut"
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-center mb-12">
            Additional <span className="gradient-text">Technologies</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'NLTK', 'Spark', 'Shiny', 'Tidymodels', 'OpenAI API', 'RapidAPI',
              'REST APIs', 'GraphQL', 'JWT', 'OAuth', 'Webpack', 'Vite',
              'Jest', 'Cypress', 'Postman', 'VS Code', 'IntelliJ', 'Jupyter',
              'Tableau', 'Power BI', 'Excel', 'SPSS', 'Agile', 'Scrum'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: 1 + index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border hover:border-primary transition-colors cursor-default"
              >
                <span className="text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <Card className="max-w-3xl mx-auto border-0 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Technology evolves rapidly, and I'm committed to staying current with the latest trends, 
                frameworks, and best practices. I regularly participate in hackathons, online courses, 
                and contribute to open-source projects to expand my skill set and give back to the community.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

