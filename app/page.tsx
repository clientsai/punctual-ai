'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Globe, Shield, Users, Clock, Zap, CheckCircle, ArrowRight, Star, Sparkles, TrendingUp, Award, Heart, Target, Rocket, BarChart3, Play, Download, ExternalLink } from 'lucide-react'
import { Hero } from '@/components/hero'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TESTIMONIALS } from '@/lib/constants'

const valueProps = [
  {
    icon: Calendar,
    title: 'Smart Availability Management',
    description: 'Set your schedule once and let Punctual handle the rest. Our intelligent system learns your preferences and automatically manages your availability across all platforms.',
    features: ['Recurring schedules', 'Smart overrides', 'Buffer time management', 'Time zone handling'],
    color: 'from-blue-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
    stats: '5 hours saved weekly',
  },
  {
    icon: Globe,
    title: 'Universal Integration',
    description: 'Seamlessly connects with 100+ tools you already use. From Google Calendar to Salesforce, Punctual works everywhere your business operates.',
    features: ['100+ integrations', 'Real-time sync', 'Custom webhooks', 'API access'],
    color: 'from-green-500 to-green-600',
    gradient: 'bg-gradient-to-br from-green-50 to-green-100',
    stats: '100+ tools',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Your data security is our top priority. SOC 2 certified, GDPR compliant, and built with enterprise-grade encryption to protect your sensitive information.',
    features: ['SOC 2 certified', 'GDPR compliant', 'AES-256 encryption', 'SSO support'],
    color: 'from-purple-500 to-purple-600',
    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
    stats: '99.9% uptime',
  },
]

const features = [
  {
    title: 'Intelligent Scheduling',
    description: 'Our AI-powered system learns from your scheduling patterns and automatically optimizes your calendar for maximum productivity.',
    icon: Zap,
    benefits: ['Smart conflict detection', 'Automatic rescheduling', 'Pattern recognition', 'Predictive availability'],
    image: 'calendar-ai.jpg',
  },
  {
    title: 'Team Collaboration',
    description: 'Coordinate complex team schedules with round-robin assignments, collective availability, and intelligent workload distribution.',
    icon: Users,
    benefits: ['Round-robin scheduling', 'Team availability', 'Workload balancing', 'Admin controls'],
    image: 'team-scheduling.jpg',
  },
  {
    title: 'Advanced Analytics',
    description: 'Gain insights into your scheduling patterns with detailed analytics and reporting to optimize your time management.',
    icon: BarChart3,
    benefits: ['Usage analytics', 'Time insights', 'Productivity metrics', 'Custom reports'],
    image: 'analytics.jpg',
  },
]

const stats = [
  { icon: Users, value: '50,000+', label: 'Active Users', description: 'Growing community of professionals' },
  { icon: Clock, value: '5 hours', label: 'Time Saved Weekly', description: 'Average time saved per user' },
  { icon: Shield, value: '99.9%', label: 'Uptime', description: 'Reliable service guarantee' },
  { icon: Star, value: '4.9/5', label: 'Customer Rating', description: 'Based on 10,000+ reviews' },
  { icon: Globe, value: '150+', label: 'Countries', description: 'Global user base' },
  { icon: Award, value: 'SOC 2', label: 'Certified', description: 'Enterprise security standard' },
]

const useCases = [
  {
    title: 'Sales Teams',
    description: 'Streamline prospect meetings and demos with intelligent scheduling that adapts to your sales process.',
    icon: Target,
    benefits: ['Lead qualification', 'Demo scheduling', 'Follow-up automation', 'CRM integration'],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Consultants',
    description: 'Manage multiple clients efficiently with flexible scheduling that respects your time and theirs.',
    icon: Heart,
    benefits: ['Client management', 'Flexible availability', 'Project tracking', 'Billing integration'],
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Recruiters',
    description: 'Coordinate interviews across multiple time zones with automated scheduling and candidate management.',
    icon: Users,
    benefits: ['Interview coordination', 'Candidate experience', 'Team collaboration', 'Feedback collection'],
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Healthcare',
    description: 'Schedule patient appointments with intelligent conflict resolution and automated reminders.',
    icon: Shield,
    benefits: ['Patient scheduling', 'Appointment reminders', 'Provider availability', 'HIPAA compliance'],
    color: 'from-orange-500 to-red-600',
  },
]

const integrations = [
  { name: 'Google Calendar', logo: 'google', status: 'Popular' },
  { name: 'Microsoft Outlook', logo: 'microsoft', status: 'Popular' },
  { name: 'Zoom', logo: 'zoom', status: 'Essential' },
  { name: 'Slack', logo: 'slack', status: 'Popular' },
  { name: 'Salesforce', logo: 'salesforce', status: 'Enterprise' },
  { name: 'HubSpot', logo: 'hubspot', status: 'Popular' },
]

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Value Props Section with Enhanced Design */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Why Choose Punctual
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              The <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Smart Way</span> to Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your scheduling from a time-consuming chore into an automated, intelligent system 
              that works around your preferences and maximizes your productivity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className={`h-full ${prop.gradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}>
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${prop.color} opacity-5 rounded-full -translate-y-16 translate-x-16`} />
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${prop.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <prop.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{prop.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{prop.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {prop.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs mr-1 mb-1">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="text-2xl font-bold text-primary">{prop.stats}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase - Availability Management */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 px-4 py-2 text-sm bg-gradient-to-r from-primary to-accent text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Availability Management
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Time, <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Your Rules</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Define when you're available with intelligent scheduling that respects your boundaries, 
                learns your preferences, and automatically adapts to your changing schedule. Set buffer times, 
                block personal time, and let Punctual handle the complexity of availability management.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  'Recurring availability patterns',
                  'Date-specific overrides',
                  'Minimum notice periods',
                  'Buffer between meetings',
                  'Time zone intelligence',
                  'Conflict resolution',
                ].map((feature, index) => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <Link href="https://app.punctual.ai/signup">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark">
                    Try Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
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
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Availability Settings</h3>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Monday - Friday</span>
                      <span className="text-sm text-gray-600">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Buffer Time</span>
                      <span className="text-sm text-gray-600">15 minutes</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Time Zone</span>
                      <span className="text-sm text-gray-600">Auto-detect</span>
                    </div>
                  </div>
                </div>
                <div className="h-4 bg-gradient-to-r from-primary to-accent rounded-lg"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary to-accent text-white rounded-xl p-4 shadow-lg">
                <Clock className="w-8 h-8" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-primary rounded-xl p-4 shadow-lg border-2 border-primary/20">
                <Zap className="w-6 h-6" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Showcase - Team Scheduling */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1 relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Team Scheduling</h3>
                  <Badge className="bg-blue-100 text-blue-800">Live</Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Sales Team</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">3 available</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {['Sarah Chen', 'Mike Johnson', 'Emily Davis'].map((name, index) => (
                        <div key={name} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-sm font-semibold">
                              {name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="text-sm font-medium">{name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-gray-500">Available</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4">
                    <div className="h-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded w-full mb-2"></div>
                    <div className="text-xs text-gray-600">Next available: 2:30 PM today</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-accent to-primary text-white rounded-xl p-4 shadow-lg">
                <Users className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-accent rounded-xl p-3 shadow-lg border-2 border-accent/20">
                <TrendingUp className="w-5 h-5" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <Badge className="mb-6 px-4 py-2 text-sm bg-gradient-to-r from-accent to-primary text-white">
                <Users className="w-4 h-4 mr-2" />
                Team Collaboration
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Coordinate Your <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Entire Team</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Scale scheduling across your organization with intelligent team coordination. 
                Round-robin assignments, collective availability, and smart workload distribution 
                ensure your team operates at peak efficiency while maintaining work-life balance.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  'Automatic distribution',
                  'Team booking pages',
                  'Collective scheduling',
                  'Admin controls',
                  'Workload balancing',
                  'Performance insights',
                ].map((feature, index) => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-accent to-primary hover:from-accent-dark hover:to-primary-dark">
                  Start Team Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Guide
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced Design */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-dark to-accent text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-pattern"></div>
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
              Trusted by Teams Worldwide
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join thousands of professionals who've transformed their scheduling with Punctual
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

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              <Target className="w-4 h-4 mr-2" />
              Perfect for Every Team
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Built for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Every Industry</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're in sales, consulting, healthcare, or any other industry, 
              Punctual adapts to your specific needs and workflows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                    
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit) => (
                        <Badge key={benefit} variant="outline" className="text-xs mr-1 mb-1">
                          {benefit}
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

      {/* Testimonials Section with Enhanced Design */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              <Heart className="w-4 h-4 mr-2" />
              Customer Stories
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Loved by <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Teams Worldwide</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Punctual has transformed scheduling for teams across industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              <Globe className="w-4 h-4 mr-2" />
              Seamless Integration
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Works with <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">100+ Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect Punctual with your existing workflow. No disruption, just better scheduling.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
                    <Badge 
                      variant={integration.status === 'Popular' ? 'default' : integration.status === 'Essential' ? 'secondary' : 'outline'}
                      className="text-xs"
                    >
                      {integration.status}
                    </Badge>
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
          <div className="absolute top-0 left-0 w-full h-full bg-pattern"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl font-bold mb-6">
              Start Scheduling Smarter Today
            </h2>
            <p className="text-2xl mb-12 opacity-90 leading-relaxed">
              Join 50,000+ professionals who've eliminated scheduling hassle and reclaimed their time
            </p>
            
            <div className="max-w-2xl mx-auto mb-12">
              <form
                action="https://app.punctual.ai/create"
                method="GET"
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 text-lg rounded-xl text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-white/50"
                  required
                />
                <Link href="https://app.punctual.ai/signup">
                  <Button type="submit" size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </form>
              <p className="text-sm mt-6 opacity-80">
                Free forever for individuals • No credit card required • Setup in 2 minutes
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}