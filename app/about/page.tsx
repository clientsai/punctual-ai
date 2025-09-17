'use client'

import { motion } from 'framer-motion'
import { Users, Target, Zap, Heart, Award, Globe, TrendingUp, Clock, Sparkles, ArrowRight, Play, Download, ExternalLink, Star, CheckCircle, Shield, Rocket, BarChart3 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const values = [
  {
    icon: Users,
    title: 'Customer Obsession',
    description: 'Every decision we make starts with how it impacts our users. We obsess over customer feedback and continuously iterate based on real user needs.',
    color: 'from-blue-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
    principles: ['User Research', 'Feedback Loops', 'Data-Driven Decisions', 'Customer Success'],
  },
  {
    icon: Target,
    title: 'Simplicity First',
    description: 'Complex problems deserve elegant solutions, not complicated ones. We believe in the power of simplicity and clean design.',
    color: 'from-green-500 to-green-600',
    gradient: 'bg-gradient-to-br from-green-50 to-green-100',
    principles: ['Clean Design', 'Intuitive UX', 'Minimal Complexity', 'Clear Communication'],
  },
  {
    icon: Zap,
    title: 'Speed & Efficiency',
    description: 'Time is valuable. We obsess over making scheduling instant, reducing friction, and maximizing productivity for our users.',
    color: 'from-purple-500 to-purple-600',
    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
    principles: ['Fast Performance', 'Quick Setup', 'Instant Results', 'Time Savings'],
  },
  {
    icon: Heart,
    title: 'Transparency & Trust',
    description: 'Open communication, honest pricing, clear documentation, and building trust through transparency in everything we do.',
    color: 'from-orange-500 to-orange-600',
    gradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
    principles: ['Open Communication', 'Honest Pricing', 'Clear Documentation', 'Trust Building'],
  },
]

const team = [
  { 
    name: 'Sarah Chen', 
    role: 'CEO & Co-founder', 
    image: '/images/team/sarah.jpg',
    bio: 'Former product manager at Google with 10+ years building user-focused products.',
    linkedin: 'sarah-chen',
    twitter: 'sarahchen',
  },
  { 
    name: 'Michael Rodriguez', 
    role: 'CTO & Co-founder', 
    image: '/images/team/michael.jpg',
    bio: 'Ex-Microsoft engineer passionate about scalable systems and developer experience.',
    linkedin: 'michael-rodriguez',
    twitter: 'mrodriguez',
  },
  { 
    name: 'Emma Watson', 
    role: 'Head of Product', 
    image: '/images/team/emma.jpg',
    bio: 'Product strategist with expertise in B2B SaaS and user experience design.',
    linkedin: 'emma-watson',
    twitter: 'emmawatson',
  },
  { 
    name: 'David Park', 
    role: 'Head of Engineering', 
    image: '/images/team/david.jpg',
    bio: 'Full-stack engineer focused on building reliable, performant systems.',
    linkedin: 'david-park',
    twitter: 'davidpark',
  },
  { 
    name: 'Lisa Thompson', 
    role: 'Head of Design', 
    image: '/images/team/lisa.jpg',
    bio: 'Design leader with a passion for creating beautiful, functional interfaces.',
    linkedin: 'lisa-thompson',
    twitter: 'lisathompson',
  },
  { 
    name: 'James Wilson', 
    role: 'Head of Sales', 
    image: '/images/team/james.jpg',
    bio: 'Sales veteran with deep experience in enterprise software and customer success.',
    linkedin: 'james-wilson',
    twitter: 'jameswilson',
  },
]

const milestones = [
  {
    year: '2021',
    title: 'Company Founded',
    description: 'Sarah and Michael founded Punctual after experiencing scheduling frustrations firsthand.',
    icon: Rocket,
    color: 'from-blue-500 to-blue-600',
  },
  {
    year: '2022',
    title: 'First 1,000 Users',
    description: 'Reached our first major milestone with early adopters who believed in our vision.',
    icon: Users,
    color: 'from-green-500 to-green-600',
  },
  {
    year: '2023',
    title: 'Series A Funding',
    description: 'Raised $15M to accelerate product development and team growth.',
    icon: TrendingUp,
    color: 'from-purple-500 to-purple-600',
  },
  {
    year: '2024',
    title: '50,000+ Users',
    description: 'Reached a major milestone with users across 150+ countries worldwide.',
    icon: Globe,
    color: 'from-orange-500 to-orange-600',
  },
]

const press = [
  {
    publication: 'TechCrunch',
    title: 'Punctual raises $15M to revolutionize meeting scheduling',
    date: 'March 2024',
    logo: 'techcrunch',
  },
  {
    publication: 'Forbes',
    title: 'How Punctual is eliminating the scheduling nightmare for remote teams',
    date: 'February 2024',
    logo: 'forbes',
  },
  {
    publication: 'The Verge',
    title: 'Punctual makes scheduling meetings as easy as sending a link',
    date: 'January 2024',
    logo: 'theverge',
  },
  {
    publication: 'Wired',
    title: 'The future of work: AI-powered scheduling that actually works',
    date: 'December 2023',
    logo: 'wired',
  },
]

const stats = [
  { icon: Users, label: 'Active Users', value: '50,000+', description: 'Growing daily' },
  { icon: Clock, label: 'Time Saved', value: '5 hours', description: 'Per user per week' },
  { icon: Globe, label: 'Countries', value: '150+', description: 'Global reach' },
  { icon: Award, label: 'Meetings Scheduled', value: '5M+', description: 'And counting' },
  { icon: Star, label: 'Customer Rating', value: '4.9/5', description: 'Based on reviews' },
  { icon: Shield, label: 'Uptime', value: '99.9%', description: 'Reliability' },
]

export default function AboutPage() {
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
                About Punctual
              </Badge>
            </motion.div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We're on a mission to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">give you back your time</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Scheduling meetings shouldn't be a meeting itself. We're building the future of scheduling — 
              one where finding time is instant, effortless, and intelligent. Our platform eliminates the 
              back-and-forth emails, calendar conflicts, and time zone confusion that plague modern work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark">
                Join Our Mission
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

      {/* Story Section with Enhanced Design */}
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
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Origin Story</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How two frustrated professionals turned a common pain point into a revolutionary solution
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
                  Punctual was born from frustration. Our founders, Sarah and Michael, were spending 
                  hours every week just scheduling meetings. Email chains with "How about Tuesday?" 
                  followed by "Actually, can we do Wednesday?" were eating up valuable time that 
                  could be spent on actual work.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  They knew there had to be a better way. So in 2021, they set out to build the 
                  scheduling tool they wished existed — one that was powerful enough for enterprises 
                  but simple enough for individuals. A tool that would eliminate the scheduling 
                  nightmare once and for all.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Today, Punctual helps over 50,000 professionals reclaim their time. We've eliminated 
                  millions of back-and-forth emails and saved our users an average of 5 hours per week. 
                  But we're just getting started on our mission to make scheduling effortless for everyone.
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
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">The Problem</h3>
                  <p className="text-gray-600">Scheduling was broken</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold">1</span>
                    </div>
                    <span className="text-gray-700">Endless email chains</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold">2</span>
                    </div>
                    <span className="text-gray-700">Calendar conflicts</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold">3</span>
                    </div>
                    <span className="text-gray-700">Time zone confusion</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary to-accent text-white rounded-xl p-4 shadow-lg">
                <Zap className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-primary rounded-xl p-4 shadow-lg border-2 border-primary/20">
                <Target className="w-6 h-6" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section with Enhanced Design */}
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
                    <p className="text-gray-600 mb-6 leading-relaxed">{value.description}</p>
                    
                    <div className="space-y-2">
                      {value.principles.map((principle) => (
                        <Badge key={principle} variant="outline" className="text-xs mr-1 mb-1">
                          {principle}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Enhanced Design */}
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
              Meet Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Amazing Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people making scheduling better, one feature at a time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-lg text-primary font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                    
                    <div className="flex justify-center gap-3">
                      <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Twitter
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
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
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to revolutionize scheduling
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <milestone.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
                
                {/* Connection Line */}
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced Design */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-dark to-accent text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              The results of our mission to make scheduling effortless for everyone
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Section with Enhanced Design */}
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
              Featured in the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Press</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What industry leaders and publications are saying about Punctual
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {press.map((article, index) => (
              <motion.div
                key={article.publication}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded"></div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {article.date}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{article.publication}</p>
                    
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      Read Article
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Design */}
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
              Ready to eliminate scheduling headaches and reclaim your time? 
              Join thousands of professionals who've already made the switch to Punctual.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                <Download className="w-5 h-5 mr-2" />
                Download Case Study
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}