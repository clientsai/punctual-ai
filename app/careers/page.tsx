'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Users, Heart, Zap, Globe, Award, Clock, MapPin, Briefcase, Star, ArrowRight, Sparkles, TrendingUp, Coffee, Laptop, Home, Building, CheckCircle, Play, ExternalLink } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const companyValues = [
  {
    icon: Heart,
    title: 'Customer Obsession',
    description: 'We put our customers at the center of everything we do, constantly seeking to understand and exceed their expectations.',
    color: 'from-red-500 to-pink-600',
    gradient: 'bg-gradient-to-br from-red-50 to-pink-100',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We embrace change, take calculated risks, and continuously push the boundaries of what\'s possible in scheduling technology.',
    color: 'from-yellow-500 to-orange-600',
    gradient: 'bg-gradient-to-br from-yellow-50 to-orange-100',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of diverse teams working together to achieve extraordinary results and create meaningful impact.',
    color: 'from-blue-500 to-cyan-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-cyan-100',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We\'re building solutions that help people worldwide connect, collaborate, and achieve their goals more efficiently.',
    color: 'from-green-500 to-emerald-600',
    gradient: 'bg-gradient-to-br from-green-50 to-emerald-100',
  },
]

const benefits = [
  {
    category: 'Health & Wellness',
    items: [
      'Comprehensive health, dental, and vision insurance',
      'Mental health support and counseling services',
      'Gym membership and wellness stipend',
      'Flexible work arrangements and remote options',
    ],
    icon: Heart,
    color: 'text-red-600',
  },
  {
    category: 'Professional Development',
    items: [
      'Learning and development budget ($2,000/year)',
      'Conference attendance and training opportunities',
      'Mentorship programs and career coaching',
      'Internal knowledge sharing sessions',
    ],
    icon: TrendingUp,
    color: 'text-blue-600',
  },
  {
    category: 'Work-Life Balance',
    items: [
      'Unlimited PTO and flexible scheduling',
      'Parental leave and family support',
      'Work-from-home stipend and equipment',
      'Regular team building and social events',
    ],
    icon: Clock,
    color: 'text-green-600',
  },
  {
    category: 'Financial',
    items: [
      'Competitive salary and equity packages',
      '401(k) matching and financial planning',
      'Performance bonuses and profit sharing',
      'Stock option programs',
    ],
    icon: Award,
    color: 'text-purple-600',
  },
]

const openPositions = [
  {
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    remote: true,
    experience: '5+ years',
    description: 'Lead the development of our user-facing applications using React, TypeScript, and modern web technologies.',
    requirements: ['React/TypeScript expertise', '5+ years frontend experience', 'Team leadership skills', 'Product mindset'],
    posted: '2 days ago',
    applicants: 24,
  },
  {
    title: 'Product Marketing Manager',
    department: 'Marketing',
    location: 'New York, NY',
    type: 'Full-time',
    remote: true,
    experience: '3+ years',
    description: 'Drive product positioning, messaging, and go-to-market strategies for our scheduling platform.',
    requirements: ['B2B SaaS experience', '3+ years product marketing', 'Analytical skills', 'Cross-functional collaboration'],
    posted: '1 week ago',
    applicants: 18,
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Remote',
    type: 'Full-time',
    remote: true,
    experience: '2+ years',
    description: 'Help our customers achieve their goals and maximize value from our platform.',
    requirements: ['Customer success experience', 'Strong communication skills', 'Technical aptitude', 'Problem-solving mindset'],
    posted: '3 days ago',
    applicants: 31,
  },
  {
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    remote: true,
    experience: '4+ years',
    description: 'Build and maintain our cloud infrastructure, ensuring scalability, security, and reliability.',
    requirements: ['AWS/Azure expertise', '4+ years DevOps experience', 'Infrastructure as Code', 'Security best practices'],
    posted: '5 days ago',
    applicants: 15,
  },
  {
    title: 'UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    remote: true,
    experience: '3+ years',
    description: 'Create intuitive and beautiful user experiences that delight our customers.',
    requirements: ['3+ years UX design', 'Figma proficiency', 'User research skills', 'Design systems experience'],
    posted: '1 week ago',
    applicants: 22,
  },
  {
    title: 'Sales Development Representative',
    department: 'Sales',
    location: 'Austin, TX',
    type: 'Full-time',
    remote: false,
    experience: '1+ years',
    description: 'Generate qualified leads and build relationships with potential customers.',
    requirements: ['1+ years SDR experience', 'Strong communication skills', 'CRM experience', 'Goal-oriented mindset'],
    posted: '4 days ago',
    applicants: 45,
  },
]

const teamStats = [
  { icon: Users, label: 'Team Size', value: '50+', color: 'text-blue-600' },
  { icon: Globe, label: 'Countries', value: '12+', color: 'text-green-600' },
  { icon: Award, label: 'Employee Satisfaction', value: '4.8/5', color: 'text-purple-600' },
  { icon: TrendingUp, label: 'Growth Rate', value: '200%', color: 'text-orange-600' },
]

const cultureHighlights = [
  {
    title: 'Flexible Work Environment',
    description: 'Work from anywhere with flexible hours and remote-first culture',
    icon: Home,
    stats: '80% remote',
  },
  {
    title: 'Diverse & Inclusive',
    description: 'We celebrate diversity and create an inclusive environment for all',
    icon: Users,
    stats: '45% women',
  },
  {
    title: 'Innovation Time',
    description: '20% time to work on passion projects and innovative ideas',
    icon: Zap,
    stats: '20% time',
  },
  {
    title: 'Learning Culture',
    description: 'Continuous learning with dedicated time and budget for growth',
    icon: TrendingUp,
    stats: '$2K budget',
  },
]

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')

  const departments = ['All', 'Engineering', 'Marketing', 'Customer Success', 'Design', 'Sales']
  const locations = ['All', 'San Francisco, CA', 'New York, NY', 'Austin, TX', 'Remote']

  const filteredPositions = openPositions.filter(position => {
    const matchesDepartment = selectedDepartment === 'All' || position.department === selectedDepartment
    const matchesLocation = selectedLocation === 'All' || position.location === selectedLocation
    return matchesDepartment && matchesLocation
  })

  return (
    <div>
      {/* Hero Section with Animated Background */}
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
                Join Our Team
              </Badge>
            </motion.div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build the Future of <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Scheduling</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join a team of passionate innovators who are revolutionizing how people schedule meetings and manage their time. 
              We're looking for talented individuals who share our vision of making scheduling effortless for everyone.
            </p>
            
            {/* Team Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            >
              {teamStats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-2`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Values with Enhanced Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className={`h-full ${value.gradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}>
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.color} opacity-5 rounded-full -translate-y-16 translate-x-16`} />
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Life at Punctual
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes working at Punctual special
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <highlight.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{highlight.description}</p>
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We invest in our team's well-being, growth, and success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 ${benefit.color} bg-opacity-10 rounded-xl flex items-center justify-center`}>
                        <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{benefit.category}</h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {benefit.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions with Filters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600">
                Find your next opportunity with us
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex gap-2">
                <span className="text-sm font-medium text-gray-700 self-center">Department:</span>
                {departments.map((dept) => (
                  <Button
                    key={dept}
                    variant={selectedDepartment === dept ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedDepartment(dept)}
                    className="text-sm"
                  >
                    {dept}
                  </Button>
                ))}
              </div>
              <div className="flex gap-2">
                <span className="text-sm font-medium text-gray-700 self-center">Location:</span>
                {locations.map((loc) => (
                  <Button
                    key={loc}
                    variant={selectedLocation === loc ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedLocation(loc)}
                    className="text-sm"
                  >
                    {loc}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {position.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                          <span>•</span>
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="outline" className="text-xs">
                          {position.type}
                        </Badge>
                        {position.remote && (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            Remote OK
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>Posted {position.posted}</span>
                        <span>•</span>
                        <span>{position.applicants} applicants</span>
                        <span>•</span>
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {position.requirements.slice(0, 3).map((req) => (
                        <Badge key={req} variant="secondary" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                      {position.requirements.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{position.requirements.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <Button className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No positions found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more opportunities.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section with Enhanced Design */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-accent text-white relative overflow-hidden">
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
              Don't See Your Role?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              We're always looking for talented individuals who share our passion for innovation. 
              Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:careers@punctual.ai" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <Users className="w-5 h-5 mr-2" />
                Send Your Resume
              </a>
              <a href="/about" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
                <Award className="w-5 h-5 mr-2" />
                Learn About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}