import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ExternalLink,
  Github,
  Filter,
  Database,
  Code,
  Palette,
  GraduationCap,
  Smartphone,
  Globe
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'data-science', label: 'Data Science', icon: Database },
    { id: 'web-development', label: 'Web Development', icon: Code },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'design', label: 'UI/UX Design', icon: Palette },
    { id: 'education', label: 'Education', icon: GraduationCap }
  ]

  const projects = [
    {
 
      id: 1,
      title: 'Predictive Price Model for Laptops',
      description: 'Machine learning model using R and tidymodels to predict laptop prices with Spark and Shiny dashboard.',
      image: '/images/datamining.jpg',
      category: 'data-science',
      technologies: ['R', 'Tidymodels', 'Spark', 'Shiny', 'Machine Learning'],
      github: 'https://github.com/jaweher1925',
      demo: null,
      featured: true
    },
    {
      id: 2,
      title: 'StudyPedia Learning Platform',
      description: 'Full-stack Next.js application for learning aggregation and project collaboration with modern UI.',
      image: '/images/sqilco.png',
      category: 'web-development',
      technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/jaweher1925',
      demo: 'https://studypedia-demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Mobile Car Rental Application',
      description: 'Android application for car rental with real-time booking and Node.js backend integration.',
      image: '/images/carrent.jpg',
      category: 'mobile',
      technologies: ['Android Studio', 'Java', 'Node.js', 'SQLite', 'REST API'],
      github: 'https://github.com/jaweher1925/G-CarBook',
      demo: null,
      featured: false
    },
    {
      id: 4,
      title: 'Text Processing with Python',
      description: 'Advanced text processing system with inverted index and incidence matrix using NLTK.',
      image: '/images/python.jpg',
      category: 'data-science',
      technologies: ['Python', 'NLTK', 'Pandas', 'NumPy', 'Text Mining'],
      github: 'https://github.com/jaweher1925',
      demo: null,
      featured: false
    },
    {
      id: 5,
      title: 'Education Platform with MCQs',
      description: 'Multilingual education platform with course management and interactive multiple-choice questions.',
      image: '/images/angular.jpg',
      category: 'education',
      technologies: ['React', 'Firebase', 'i18n', 'Material-UI', 'PWA'],
      github: 'https://github.com/jaweher1925',
      demo: 'https://github.com/jaweher1925/AngularQuiz',
      featured: true
    },
    {
      id: 6,
      title: 'ChatBot with GPT API',
      description: 'Intelligent chatbot integration using OpenAI GPT API with Python backend.',
      image: '/images/python.jpg',
      category: 'data-science',
      technologies: ['Python', 'OpenAI API', 'Flask', 'NLP', 'REST API'],
      github: 'https://github.com/jaweher1925',
      demo: null,
      featured: false
    },
    {
      id: 7,
      title: 'EUNOIA Academy Management',
      description: 'Complete management system with CRUD operations using Angular, MongoDB, and Express.js.',
      image: '/images/angular.jpg',
      category: 'web-development',
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
      github: 'https://github.com/jaweher1925',
      demo: null,
      featured: false
    },

    /** Design */
    {
      id: 8,
      title: 'Brand Logo Design',
      description: 'Created a modern and memorable logo for a startup.',
      image: '/images/logos/3.png',
      category: 'design',
      technologies: ['canva'],
      github: null,
      demo: '/images/logos/3.png',
      featured: false
    },
    {
      id: 9,
      title: 'Brand Logo Design',
      description: 'Created a modern and memorable logo for a startup.',
      image: '/images/logos/6.jpg',
      category: 'design',
      technologies: ['canva'],
      github: null,
      demo:'/images/logos/6.jpg',
      featured: false
    },
    {
      id: 10,
      title: 'Brand Logo Design',
      description: 'Created a modern and memorable logo for a startup.',
      image: '/images/logos/7.png',
      category: 'design',
      technologies: ['canva'],
      github: null,
      demo:'/images/logos/7.png',
      featured: false
    },
    {
      id: 11,
      title: 'Brand Logo Design',
      description: 'Created a modern and memorable logo for a startup.',
      image: '/images/logos/4.jpg',
      category: 'design',
      technologies: ['canva'],
      github: null,
      demo:'/images/logos/4.jpg',
      featured: false
    },
    {
      id: 12,
      title: 'Brand Logo Design',
      description: 'Created a modern and memorable logo for a startup.',
      image: '/images/logos/8.png',
      category: 'design',
      technologies: ['canva'],
      github: null,
      demo:  '/images/logos/8.png',
      featured: false
    },
    {
      id: 13,
      title: 'Brand Logo Design',
      description: 'Created a modern and memorable logo for a startup.',
      image: '/images/logos/9.png',
      category: 'design',
      technologies: ['Illustrator', 'Figma'],
      github: null,
      demo: '/images/logos/9.png',
      featured: false
    },
    {
      id: 14,
      title: 'Brand Logo Design',
      description: 'Created a modern and memorable logo for a startup.',
      image: '/images/logos/10.png',
      category: 'design',
      technologies: ['Illustrator', 'Figma'],
      github: null,
      demo: '/images/logos/10.png',
      featured: false
    },
    {
      id: 15,
      title: 'Brand Logo Design',
      description: 'Created a modern and memorable logo for a startup.',
      image: '/images/logos/11.png',
      category: 'design',
      technologies: ['Illustrator', 'Figma'],
      github: null,
      demo: '/images/logos/11.png',
      featured: false
    },

    /** Presentations */
    {
      id: 16,
      title: 'Presentation projet PFE ',
      description: 'presentation designed to communicate the key aspects of my Final Year Project (PFE).',
      image: '/images/presentations/pre1.png',
      category: 'education',
      technologies: ['Figma', 'Presentation', 'Video'],
      github: null,
      demo: '',
      featured: true
    },
    {
      id: 17,
      image: '/images/presentations/pre2.png',
      title: 'Presentation projet PFE ',
      description: 'presentation designed to communicate the key aspects of my Final Year Project (PFE).',
      category: 'education',
      technologies: ['Figma', 'Presentation', 'Video'],
      github: null,
      demo: '',
      featured: true
    },
    {
      id: 18,
      title: 'Presentation projet PFE ',
      image: '/images/presentations/pre3.png',
      description: 'presentation designed to communicate the key aspects of my Final Year Project (PFE).',
      category: 'education',
      technologies: ['Figma', 'Presentation', 'Video'],
      github: null,
      demo: '',
      featured: true
    },
    {
      id: 19,
      title: 'Presentation projet PFE ',
      image: '/images/presentations/pred4.png',
      description: 'presentation designed to communicate the key aspects of my Final Year Project (PFE).',
      category: 'education',
      technologies: ['Figma', 'Presentation', 'Video'],
      github: null,
      demo: '',
      featured: true
    },
    {
      id: 20,
      title: 'Presentation projet PFE ',
      image: '/images/presentations/pred5.png',
      description: 'presentation designed to communicate the key aspects of my Final Year Project (PFE).',
      category: 'education',
      technologies: ['Figma', 'Presentation', 'Video'],
      github: null,
      demo: '',
      featured: true
    },
    {
      id: 21,
      title: 'Presentation projet PFE ',
      image: '/images/presentations/pred6.png',
      description: 'presentation designed to communicate the key aspects of my Final Year Project (PFE).',
      category: 'education',
      technologies: ['Figma', 'Presentation', 'Video'],
      github: null,
      demo: '',
      featured: true
    },
    {
      id: 22,
      title: 'Presentation projet PFE ',
      image: '/images/presentations/pred7.png',
      description: 'presentation designed to communicate the key aspects of my Final Year Project (PFE).',
      category: 'education',
      technologies: ['Figma', 'Presentation', 'Video'],
      github: null,
      demo: '',
      featured: true
    },

    /** Posts */
    {
      id: 23,
      title: 'Social Media Poster Series "Edspace Academy"',
      description: 'A collection of posters created for marketing campaigns.',
      image: '/images/affiche/edspace.jpg',
      category: 'design',
      technologies: ['Photoshop', 'Canva'],
      github: null,
      demo: 'https://www.facebook.com/the.edspace',
      featured: false
    },
    {
      id: 24,
      title: 'Social Media Poster Series "TPL CLUBS"',
      description: 'Logo and brand color system designed for a tech startup.',
      image: '/images/affiche/tpl.jpg',
      category: 'design',
      technologies: ['Illustrator', 'Figma'],
      github: null,
      demo: 'https://www.facebook.com/tpl.clubs',
      featured: false
    },
    {
      id: 25,
      title: 'Social Media Poster Series "Musicarth.tn "',
      description: 'Logo and brand color system designed for a tech startup.',
      image: '/images/affiche/musicarth.jpg',
      category: 'design',
      technologies: ['Illustrator', 'Figma'],
      github: null,
      demo: 'https://www.instagram.com/musicarth.tn/',
      featured: false
    },
    {
      id: 26,
      title: 'Social Media Poster Series "Ruby Omra & Hajj"',
      description: 'Logo and brand color system designed for a tech startup.',
      image: '/images/affiche/yakout.jpg',
      category: 'design',
      technologies: ['Illustrator', 'Figma'],
      github: null,
      demo: '/images/affiche/الياقوت للسياحة و الاسفار.jpg',
      featured: true
    }
  ]


  

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold mb-4">
            My <span className="gradient-text text-black">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work across data science, web development, mobile applications, design, and education.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`transition-all duration-300 ${activeFilter === category.id
                    ? 'btn-primary'
                    : 'hover:border-primary hover:text-primary'
                  }`}
              >
                <Icon className="mr-2 h-4 w-4" />
                {category.label}
              </Button>
            )
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              layout
              className="group"
            >
              <Card className="h-full card-hover overflow-hidden border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <Globe className="h-16 w-16 text-primary/40" />
                    )}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.github && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.demo && !project.demo.endsWith('.mp4') && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-muted/50">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies?.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-muted/50">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-2">
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="hover:border-primary hover:text-primary"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.demo &&
                      (project.demo.endsWith('.mp4') ? (
                        <video controls className="rounded-md w-full mt-2">
                          <source src={project.demo} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : project.demo.match(/\.(jpeg|jpg|png|gif|webp|svg)$/i) ? (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="hover:border-primary hover:text-primary"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Full Image
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" className="btn-primary" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      ))}
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Interested in working together? Let's discuss your project!
          </p>
          <Button
            className="btn-primary px-8 py-3"
            size="lg"
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Start a Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
