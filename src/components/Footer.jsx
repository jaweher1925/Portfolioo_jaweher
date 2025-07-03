import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowUp, 
  Heart, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Github,
  ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Data Science & Analytics',
    'Full-Stack Development',
    'UI/UX Design',
    'Education & Training',
    'Machine Learning',
    'Web Applications'
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/jaweher-hichri',
      icon: Linkedin
    },
    {
      name: 'GitHub',
      href: 'https://github.com/jaweher1925',
      icon: Github
    },
    {
      name: 'Email',
      href: 'mailto:jaweherhichri07@gmail.com',
      icon: Mail
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Jaweher Hichri
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Data Scientist, Full-Stack Developer, and UI/UX Designer passionate about 
                  creating innovative solutions that bridge technology and creativity.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <a 
                      href="mailto:jaweherhichri07@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      jaweherhichri07@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <a 
                      href="tel:+21626016053"
                      className="hover:text-primary transition-colors"
                    >
                      +216 26016053
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Nabeul, Tunisia</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Connect & Newsletter */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4">Let's Connect</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Follow me on social media for updates on my latest projects and insights.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-3 mb-6">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center group"
                      >
                        <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      </a>
                    )
                  })}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary w-full"
                  size="sm"
                >
                  Start a Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-sm text-muted-foreground"
            >
              <span>© {currentYear} Jaweher Hichri. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>in Tunisia</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for freelance work</span>
              </div>
              
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="rounded-full w-10 h-10 p-0 hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="border-t border-border py-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center space-x-6 text-xs text-muted-foreground"
          >
            <span>Built with React, Tailwind CSS, and Framer Motion</span>
            <span>•</span>
            <span>Hosted on Vercel</span>
            <span>•</span>
            <button
              onClick={() => scrollToSection('#contact')}
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => scrollToSection('#contact')}
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

