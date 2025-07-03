import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Download, Award, Users, Code, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0
  })

  const skills = [
    { name: 'Python', level: 90, category: 'Programming' },
    { name: 'JavaScript', level: 85, category: 'Programming' },
    { name: 'React/Next.js', level: 88, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Machine Learning', level: 85, category: 'Data Science' },
    { name: 'UI/UX Design', level: 82, category: 'Design' },
    { name: 'Figma', level: 88, category: 'Design' },
    { name: 'MongoDB', level: 75, category: 'Database' }
  ]

  const achievements = [
    { icon: Code, label: 'Projects Completed', value: 25, suffix: '+' },
    { icon: Users, label: 'Happy Clients', value: 15, suffix: '+' },
    { icon: Award, label: 'Years Experience', value: 3, suffix: '+' }
  ]

  useEffect(() => {
    if (isInView) {
      // Animate counters
      achievements.forEach((achievement, index) => {
        let start = 0
        const end = achievement.value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            start = end
            clearInterval(timer)
          }

          setCounters(prev => ({
            ...prev,
            [achievement.label.toLowerCase().replace(' ', '')]: Math.floor(start)
          }))
        }, 16)
      })
    }
  }, [isInView])

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions that bridge the gap between
            data science, development, and design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm currently pursuing my Master's in Data Science with a focus on Big Data
                at Leaders University. My journey in technology began with a Bachelor's in
                Computer Science, where I discovered my passion for both the analytical side
                of data and the creative aspects of design.
              </p>
              <p>
                As a co-founder of Musicarth and marketing manager at EdSpace, I've gained
                valuable experience in e-learning platforms and digital marketing. My diverse
                background spans from data analysis and machine learning to full-stack
                development and UI/UX design.
              </p>
              <p>
                I'm also passionate about education, having taught university-level IT subjects
                and mentored students in programming and data science. I believe in sharing
                knowledge and helping others grow in the tech field.
              </p>
            </div>

            <a href="src/assets/cv jaweher_hichri (7).pdf" download>
              <Button className="btn-primary mt-6" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <Card key={index} className="card-hover text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {achievement.label === 'Projects Completed' && counters.projectscompleted}
                      {achievement.label === 'Happy Clients' && counters.happyclients}
                      {achievement.label === 'Years Experience' && counters.yearsexperience}
                      {achievement.suffix}
                    </div>
                    <p className="text-muted-foreground">{achievement.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-12">Technical Skills</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="progress-bar h-2">
                  <motion.div
                    className="progress-fill h-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{skill.category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-12">Education</h3>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>

              {/* Education Items */}
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="relative flex items-center"
                >
                  <div className="flex-1 pr-8 text-right">
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2">Master's in Data Science - Big Data</h4>
                        <p className="text-primary font-medium mb-2">Leaders University, Nabeul</p>
                        <p className="text-sm text-muted-foreground">2024 - Present</p>
                        <p className="text-sm mt-2">Specializing in machine learning, big data analytics, and advanced statistical methods.</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="relative flex items-center"
                >
                  <div className="flex-1 pr-8"></div>
                  <div className="w-4 h-4 bg-secondary rounded-full border-4 border-background relative z-10"></div>
                  <div className="flex-1 pl-8">
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2">Bachelor's in Computer Science</h4>
                        <p className="text-secondary font-medium mb-2">Leaders University, Nabeul</p>
                        <p className="text-sm text-muted-foreground">2021 - 2024</p>
                        <p className="text-sm mt-2">Comprehensive foundation in programming, algorithms, and software development.</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="relative flex items-center"
                >
                  <div className="flex-1 pr-8 text-right">
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2">Scientific Baccalaureate</h4>
                        <p className="text-accent font-medium mb-2">Mohamed Boudhina Hammamet</p>
                        <p className="text-sm text-muted-foreground">2017 - 2021</p>
                        <p className="text-sm mt-2">Strong foundation in mathematics and sciences.</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background relative z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

