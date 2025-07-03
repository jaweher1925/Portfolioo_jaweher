import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Trophy, 
  Users, 
  Calendar, 
  MapPin, 
  Award,
  Heart,
  Code,
  Zap,
  Target,
  Star,
  Brain
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const hackathons = [
    {
      name: 'Hack 4 Justice by RNE',
      year: '2025',
      type: 'Justice & Legal Tech',
      status: 'Upcoming',
      description: 'Developing innovative solutions for justice and legal technology challenges.',
      icon: Trophy,
      color: 'primary'
    },
    {
      name: 'MutualHack by MAE assurance',
      year: '2025',
      type: 'Insurance Tech',
      status: 'Upcoming',
      description: 'Creating digital solutions for the insurance industry.',
      icon: Target,
      color: 'secondary'
    },
    {
      name: 'Deep Learning IndabaX',
      year: '2024',
      type: 'AI/ML',
      status: 'Participated',
      description: 'Advanced deep learning workshop and competition focused on African AI challenges.',
      icon: Brain,
      color: 'accent'
    },
    {
      name: 'FCDream robotique',
      year: '2024',
      type: 'Robotics',
      status: 'Participated',
      description: 'Robotics competition focusing on innovative automation solutions.',
      icon: Zap,
      color: 'primary'
    },
    {
      name: 'POLY-Game Jam',
      year: '2023',
      type: 'Game Development',
      status: 'Participated',
      description: 'Game development competition creating innovative gaming experiences.',
      icon: Code,
      color: 'secondary'
    },
    {
      name: 'La nuit de l\'info',
      year: '2023',
      type: 'Web Development',
      status: 'Participated',
      description: 'All-night coding competition developing web applications for social causes.',
      icon: Heart,
      color: 'accent'
    },
    {
      name: 'IA HACK TUNISIA',
      year: '2022',
      type: 'AI Innovation',
      status: 'Participated',
      description: 'AI-focused hackathon developing intelligent solutions for local challenges.',
      icon: Brain,
      color: 'primary'
    },
    {
      name: 'ARTI-PRENEUR',
      year: '2021',
      type: 'Entrepreneurship',
      status: 'Participated',
      description: 'Entrepreneurship competition combining artificial intelligence with business innovation.',
      icon: Star,
      color: 'secondary'
    }
  ]

  const communityRoles = [
    {
      title: 'Marketing Manager',
      organization: 'Tunisian Programming Lovers National Office',
      period: 'Current',
      description: 'Leading marketing initiatives and community outreach programs for the national programming community.',
      responsibilities: [
        'Strategic marketing planning',
        'Community engagement',
        'Event promotion',
        'Brand development'
      ],
      icon: Users,
      color: 'primary'
    },
    {
      title: 'President & Founder',
      organization: 'Tunisian Programming Lovers Leaders Club - Nabeul Region',
      period: 'Current',
      description: 'Founded and leading the regional chapter, organizing events and fostering the local tech community.',
      responsibilities: [
        'Chapter establishment',
        'Event organization',
        'Member recruitment',
        'Community building'
      ],
      icon: Award,
      color: 'secondary'
    },
    {
      title: 'Events Department Member',
      organization: 'Tunivision Leaders Club',
      period: 'Current',
      description: 'Contributing to event planning and execution for technology and innovation initiatives.',
      responsibilities: [
        'Event planning',
        'Logistics coordination',
        'Speaker management',
        'Attendee engagement'
      ],
      icon: Calendar,
      color: 'accent'
    },
    {
      title: 'General Secretary & Media Chief',
      organization: 'Youth Club Hammamet',
      period: 'Previous',
      description: 'Managed communications and media presence while handling administrative responsibilities.',
      responsibilities: [
        'Administrative management',
        'Media strategy',
        'Content creation',
        'Public relations'
      ],
      icon: Heart,
      color: 'primary'
    }
  ]

  const volunteerWork = [
    {
      event: 'InnoHACK Hammamet',
      year: '2024',
      role: 'Volunteer Organizer',
      description: 'Helped organize and facilitate the innovation hackathon event.'
    },
    {
      event: 'Fc-roBot Sousse',
      year: '2024',
      role: 'Technical Volunteer',
      description: 'Provided technical support for robotics competition participants.'
    },
    {
      event: 'African Handball and Arab Handball Cup',
      year: '2022',
      role: 'Event Volunteer',
      description: 'Supported international handball championship organization and logistics.'
    }
  ]

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
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold mb-4">
            Achievements & <span className="gradient-text">Community</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My involvement in hackathons, community leadership, and volunteer work 
            that demonstrates my commitment to technology and social impact.
          </p>
        </motion.div>

        {/* Hackathons Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-center mb-12">
            <span className="gradient-text">Hackathon</span> Participation
          </h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {hackathons.map((hackathon, index) => {
              const Icon = hackathon.icon
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full card-hover border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-full bg-${hackathon.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`h-6 w-6 text-${hackathon.color}`} />
                        </div>
                        <Badge 
                          variant={hackathon.status === 'Upcoming' ? 'default' : 'secondary'}
                          className={hackathon.status === 'Upcoming' ? 'bg-primary text-primary-foreground' : ''}
                        >
                          {hackathon.status}
                        </Badge>
                      </div>
                      
                      <h4 className="font-semibold text-lg mb-2">{hackathon.name}</h4>
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{hackathon.year}</span>
                        <Badge variant="outline" className="text-xs">
                          {hackathon.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{hackathon.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Community Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-center mb-12">
            Community <span className="gradient-text">Leadership</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {communityRoles.map((role, index) => {
              const Icon = role.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="group"
                >
                  <Card className="h-full card-hover border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-full bg-${role.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <Icon className={`h-6 w-6 text-${role.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{role.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{role.organization}</p>
                          <Badge variant="outline" className="text-xs">
                            {role.period}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4">{role.description}</p>
                      
                      <div>
                        <h5 className="font-medium text-sm mb-2">Key Responsibilities:</h5>
                        <ul className="space-y-1">
                          {role.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start text-xs text-muted-foreground">
                              <div className={`w-1.5 h-1.5 rounded-full bg-${role.color} mt-1.5 mr-2 flex-shrink-0`}></div>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Volunteer Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-12">
            Volunteer <span className="gradient-text">Work</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {volunteerWork.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group"
              >
                <Card className="h-full card-hover text-center border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Heart className="h-6 w-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{work.event}</h4>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{work.year}</span>
                    </div>
                    <Badge variant="outline" className="mb-3">
                      {work.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{work.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="max-w-3xl mx-auto border-0 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Making an Impact</h3>
              <p className="text-muted-foreground">
                Through hackathons, community leadership, and volunteer work, I strive to contribute 
                to the tech ecosystem and create positive change. I believe in the power of collaboration, 
                continuous learning, and giving back to the community that has supported my growth.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements

