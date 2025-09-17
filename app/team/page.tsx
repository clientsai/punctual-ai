'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, Mail, MapPin, Calendar, Award, Users, Sparkles, ArrowRight, Heart, Globe, Zap, Target, Star, CheckCircle, Play, Download, ExternalLink } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-founder',
    bio: 'Former product manager at Google with 10+ years building user-centric products. Passionate about solving real problems with elegant solutions that make people\'s lives better.',
    image: '/images/team/sarah.jpg',
    location: 'San Francisco, CA',
    joined: '2021',
    social: {
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
    },
    expertise: ['Product Strategy', 'Leadership', 'User Experience', 'Vision'],
    color: 'from-blue-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
    achievements: ['Former Google PM', '10+ years experience', 'Product visionary'],
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO & Co-founder',
    bio: 'Full-stack engineer and former tech lead at Stripe. Expert in scalable systems and developer experience with a passion for building robust, performant applications.',
    image: '/images/team/michael.jpg',
    location: 'San Francisco, CA',
    joined: '2021',
    social: {
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      github: 'https://github.com/michaelrodriguez',
    },
    expertise: ['Engineering', 'Architecture', 'DevOps', 'Scalability'],
    color: 'from-green-500 to-green-600',
    gradient: 'bg-gradient-to-br from-green-50 to-green-100',
    achievements: ['Former Stripe Tech Lead', 'Open source contributor', 'System architect'],
  },
  {
    name: 'Emma Watson',
    role: 'Head of Product',
    bio: 'Product designer turned product manager with a focus on creating intuitive user experiences. Former design lead at Airbnb with expertise in user research and strategy.',
    image: '/images/team/emma.jpg',
    location: 'New York, NY',
    joined: '2022',
    social: {
      linkedin: 'https://linkedin.com/in/emmawatson',
      twitter: 'https://twitter.com/emmawatson',
    },
    expertise: ['Product Design', 'User Research', 'Strategy', 'Innovation'],
    color: 'from-purple-500 to-purple-600',
    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
    achievements: ['Former Airbnb Design Lead', 'UX expert', 'Product strategist'],
  },
  {
    name: 'David Park',
    role: 'Head of Engineering',
    bio: 'Senior engineer with expertise in distributed systems and API design. Former principal engineer at Netflix with deep knowledge of high-scale systems and performance optimization.',
    image: '/images/team/david.jpg',
    location: 'Seattle, WA',
    joined: '2022',
    social: {
      linkedin: 'https://linkedin.com/in/davidpark',
      github: 'https://github.com/davidpark',
    },
    expertise: ['Backend Systems', 'API Design', 'Performance', 'Microservices'],
    color: 'from-orange-500 to-orange-600',
    gradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
    achievements: ['Former Netflix Principal Engineer', 'Distributed systems expert', 'API architect'],
  },
  {
    name: 'Lisa Thompson',
    role: 'Head of Design',
    bio: 'Design systems expert and user experience strategist. Former design director at Figma with extensive experience in creating cohesive, scalable design systems.',
    image: '/images/team/lisa.jpg',
    location: 'Austin, TX',
    joined: '2022',
    social: {
      linkedin: 'https://linkedin.com/in/lisathompson',
      twitter: 'https://twitter.com/lisathompson',
    },
    expertise: ['Design Systems', 'UX Strategy', 'Visual Design', 'Brand'],
    color: 'from-pink-500 to-pink-600',
    gradient: 'bg-gradient-to-br from-pink-50 to-pink-100',
    achievements: ['Former Figma Design Director', 'Design systems expert', 'Brand strategist'],
  },
  {
    name: 'James Wilson',
    role: 'Head of Sales',
    bio: 'Sales leader with 8+ years in B2B SaaS. Expert in building high-performing sales teams and customer success with a track record of driving revenue growth.',
    image: '/images/team/james.jpg',
    location: 'Chicago, IL',
    joined: '2023',
    social: {
      linkedin: 'https://linkedin.com/in/jameswilson',
      twitter: 'https://twitter.com/jameswilson',
    },
    expertise: ['Sales Strategy', 'Customer Success', 'Team Building', 'Growth'],
    color: 'from-indigo-500 to-indigo-600',
    gradient: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
    achievements: ['8+ years B2B SaaS', 'Revenue growth expert', 'Team builder'],
  },
]

const stats = [
  { icon: Users, label: 'Team Members', value: '25+', description: 'Growing team of experts' },
  { icon: Award, label: 'Years Combined Experience', value: '150+', description: 'Industry expertise' },
  { icon: Globe, label: 'Countries', value: '12', description: 'Global remote team' },
  { icon: Calendar, label: 'Founded', value: '2021', description: 'Innovation since day one' },
]

const values = [
  {
    title: 'Customer Obsession',
    description: 'Every decision we make starts with our users. We obsess over their needs and continuously iterate based on feedback.',
    icon: Heart,
    color: 'from-red-500 to-pink-600',
  },
  {
    title: 'Innovation',
    description: 'We embrace change and take calculated risks to push the boundaries of what\'s possible in scheduling technology.',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of diverse teams working together to achieve extraordinary results and create meaningful impact.',
    icon: Users,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to customer support, setting high standards for ourselves.',
    icon: Star,
    color: 'from-purple-500 to-purple-600',
  },
]

const cultureHighlights = [
  {
    title: 'Remote-First Culture',
    description: 'Work from anywhere with flexible hours and a focus on results over location',
    icon: Globe,
    stats: '80% remote',
  },
  {
    title: 'Diverse & Inclusive',
    description: 'We celebrate diversity and create an inclusive environment for all team members',
    icon: Users,
    stats: '45% women',
  },
  {
    title: 'Learning & Growth',
    description: 'Continuous learning with dedicated time and budget for professional development',
    icon: Target,
    stats: '$2K budget',
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible schedules, unlimited PTO, and support for personal well-being',
    icon: Heart,
    stats: 'Unlimited PTO',
  },
]

export default function TeamPage() {
  return (
    <div>
      {/* Hero Section with Enhanced Design */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Meet Our Team
              </Badge>
            </motion.div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Meet Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Amazing Team</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              We're a diverse group of passionate individuals working together to solve 
              the world's scheduling problems. Get to know the people behind Punctual 
              and discover what drives us to build the future of scheduling.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark">
                Join Our Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <Play className="w-4 h-4 mr-2" />
                Watch Our Story
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Stats with Enhanced Design */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Team by Numbers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The collective expertise and experience that powers Punctual
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team with Enhanced Design */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Leadership <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The visionaries and leaders driving Punctual forward with passion and expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className={`h-full ${member.gradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}>
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${member.color} opacity-5 rounded-full -translate-y-16 translate-x-16`} />
                    
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-lg text-primary font-semibold mb-4">{member.role}</p>
                    
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {member.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Joined {member.joined}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {member.bio}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Expertise</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.expertise.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements</h4>
                      <div className="space-y-1">
                        {member.achievements.map((achievement) => (
                          <div key={achievement} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center gap-3">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group-hover:scale-110"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group-hover:scale-110"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group-hover:scale-110"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Highlights */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Culture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What makes working at Punctual special and unique
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{highlight.description}</p>
                    <Badge className="bg-primary/10 text-primary">
                      {highlight.stats}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What Makes Us <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Different</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The values and principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  At Punctual, we believe that great products are built by great teams. We're committed to 
                  creating an environment where everyone can do their best work, learn from each other, 
                  and grow both personally and professionally.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  We value diversity, inclusion, and different perspectives. Our team comes from all over 
                  the world, bringing unique experiences and ideas that make our product better for everyone.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  We're also passionate about work-life balance. We offer flexible working arrangements, 
                  unlimited PTO, and support for remote work because we believe that happy, well-rested 
                  people build better products.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">Making scheduling effortless for everyone</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <span className="text-gray-700">Customer-first approach</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <span className="text-gray-700">Innovation and excellence</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <span className="text-gray-700">Collaboration and growth</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary to-accent text-white rounded-xl p-4 shadow-lg">
                <Users className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-primary rounded-xl p-4 shadow-lg border-2 border-primary/20">
                <Zap className="w-6 h-6" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA with Enhanced Design */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-dark to-accent text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              We're always looking for talented people to join our mission. 
              Check out our open positions and see if there's a role for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}