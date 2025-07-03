import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  BarChart3, 
  Code, 
  Palette, 
  GraduationCap, 
  Database, 
  Smartphone,
  Brain,
  Users
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      icon: BarChart3,
      title: 'Data Science & Analytics',
      description: 'Transform your data into actionable insights with machine learning, statistical analysis, and predictive modeling.',
      features: [
        'Machine Learning Models',
        'Data Visualization',
        'Statistical Analysis',
        'Predictive Analytics',
        'Business Intelligence'
      ],
      color: 'primary'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Build robust web applications and platforms using modern technologies and best practices.',
      features: [
        'React/Next.js Applications',
        'Node.js Backend Development',
        'Database Design & Management',
        'API Development',
        'E-commerce Solutions'
      ],
      color: 'secondary'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Create beautiful, user-centered designs that enhance user experience and drive engagement.',
      features: [
        'User Interface Design',
        'User Experience Research',
        'Prototyping & Wireframing',
        'Design Systems',
        'Brand Identity'
      ],
      color: 'accent'
    },
    {
      icon: GraduationCap,
      title: 'Education & Training',
      description: 'Share knowledge through teaching, mentoring, and creating educational content for IT subjects.',
      features: [
        'University Teaching',
        'Programming Workshops',
        'Data Science Training',
        'One-on-One Mentoring',
        'Curriculum Development'
      ],
      color: 'primary'
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

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer comprehensive solutions across data science, development, design, and education. 
            Let's work together to bring your ideas to life.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full card-hover border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-full bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 text-${service.color}`} />
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">
                        What I Offer:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ 
                              duration: 0.4, 
                              delay: 0.8 + index * 0.2 + featureIndex * 0.1 
                            }}
                            className="flex items-center text-sm"
                          >
                            <div className={`w-2 h-2 rounded-full bg-${service.color} mr-3 flex-shrink-0`}></div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-center mb-12">
            How I <span className="gradient-text">Work</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your needs, goals, and project requirements',
                icon: Users
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Creating a detailed roadmap and timeline for your project',
                icon: Brain
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building your solution with regular updates and feedback',
                icon: Code
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Testing, optimization, and successful project handover',
                icon: Database
              }
            ].map((process, index) => {
              const Icon = process.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {process.step}
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{process.title}</h4>
                  <p className="text-muted-foreground text-sm">{process.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

