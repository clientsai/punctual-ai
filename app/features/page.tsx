'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Globe, Shield, Zap, Settings, MessageSquare, ArrowRight, Sparkles, CheckCircle, Star, Heart, Download, ExternalLink, Play, Target, Award, Rocket, Lock, Eye, Database } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const coreFeatures = [
  {
    title: 'Smart Scheduling',
    description: 'AI-powered scheduling that finds the perfect meeting times for everyone',
    details: 'Our intelligent algorithm analyzes availability, preferences, and constraints to suggest optimal meeting times automatically.',
    icon: Calendar,
    color: 'from-blue-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
    benefits: [
      'Automatic time zone detection',
      'Conflict resolution',
      'Buffer time management',
      'Recurring meeting support',
    ],
  },
  {
    title: 'Team Collaboration',
    description: 'Seamlessly coordinate with your team and external partners',
    details: 'Built-in team features that make it easy to manage group schedules, assign meetings, and collaborate effectively.',
    icon: Users,
    color: 'from-green-500 to-green-600',
    gradient: 'bg-gradient-to-br from-green-50 to-green-100',
    benefits: [
      'Team availability views',
      'Round-robin scheduling',
      'Shared calendars',
      'Group meeting coordination',
    ],
  },
  {
    title: 'Global Integration',
    description: 'Connect with 50+ tools and platforms you already use',
    details: 'Seamlessly integrate with your existing workflow through our extensive library of connectors and APIs.',
    icon: Globe,
    color: 'from-purple-500 to-purple-600',
    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
    benefits: [
      'Calendar synchronization',
      'Video conferencing integration',
      'CRM connectivity',
      'Custom API endpoints',
    ],
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-level security with compliance certifications',
    details: 'Your data is protected with enterprise-grade security measures and compliance with major industry standards.',
    icon: Shield,
    color: 'from-orange-500 to-orange-600',
    gradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
    benefits: [
      'SOC 2 Type II certified',
      'GDPR compliant',
      'End-to-end encryption',
      'Advanced access controls',
    ],
  },
]

const advancedFeatures = [
  {
    category: 'Scheduling',
    features: [
      {
        name: 'Availability Management',
        description: 'Set your availability with flexible rules and automatic updates',
        icon: Clock,
        color: 'from-blue-500 to-blue-600',
      },
      {
        name: 'Meeting Templates',
        description: 'Create reusable meeting types with predefined settings',
        icon: Settings,
        color: 'from-green-500 to-green-600',
      },
      {
        name: 'Buffer Time',
        description: 'Automatically add buffer time between meetings',
        icon: Zap,
        color: 'from-purple-500 to-purple-600',
      },
      {
        name: 'Recurring Meetings',
        description: 'Set up recurring meetings with smart conflict resolution',
        icon: Calendar,
        color: 'from-orange-500 to-orange-600',
      },
    ],
  },
  {
    category: 'Team Management',
    features: [
      {
        name: 'Team Pages',
        description: 'Create dedicated booking pages for your team',
        icon: Users,
        color: 'from-blue-500 to-blue-600',
      },
      {
        name: 'Role-Based Access',
        description: 'Control who can access what with granular permissions',
        icon: Lock,
        color: 'from-green-500 to-green-600',
      },
      {
        name: 'Group Scheduling',
        description: 'Find times that work for multiple people',
        icon: Globe,
        color: 'from-purple-500 to-purple-600',
      },
      {
        name: 'Team Analytics',
        description: 'Track team performance and meeting patterns',
        icon: Target,
        color: 'from-orange-500 to-orange-600',
      },
    ],
  },
  {
    category: 'Integrations',
    features: [
      {
        name: 'Calendar Sync',
        description: 'Sync with Google Calendar, Outlook, and more',
        icon: Calendar,
        color: 'from-blue-500 to-blue-600',
      },
      {
        name: 'Video Conferencing',
        description: 'Integrate with Zoom, Teams, and other platforms',
        icon: MessageSquare,
        color: 'from-green-500 to-green-600',
      },
      {
        name: 'CRM Integration',
        description: 'Connect with Salesforce, HubSpot, and other CRMs',
        icon: Database,
        color: 'from-purple-500 to-purple-600',
      },
      {
        name: 'Custom APIs',
        description: 'Build custom integrations with our robust API',
        icon: Settings,
        color: 'from-orange-500 to-orange-600',
      },
    ],
  },
  {
    category: 'Analytics',
    features: [
      {
        name: 'Meeting Insights',
        description: 'Get detailed analytics on your meeting patterns',
        icon: Target,
        color: 'from-blue-500 to-blue-600',
      },
      {
        name: 'Productivity Metrics',
        description: 'Track time saved and efficiency gains',
        icon: Zap,
        color: 'from-green-500 to-green-600',
      },
      {
        name: 'Custom Reports',
        description: 'Create custom reports for your specific needs',
        icon: Settings,
        color: 'from-purple-500 to-purple-600',
      },
      {
        name: 'Export Data',
        description: 'Export your data in various formats',
        icon: Download,
        color: 'from-orange-500 to-orange-600',
      },
    ],
  },
]

const useCases = [
  {
    title: 'Sales Teams',
    description: 'Streamline lead qualification and customer meetings',
    icon: Target,
    color: 'from-blue-500 to-blue-600',
    features: [
      'Lead qualification automation',
      'Customer meeting scheduling',
      'Sales pipeline integration',
      'Performance tracking',
    ],
  },
  {
    title: 'HR Departments',
    description: 'Manage interviews and employee meetings efficiently',
    icon: Users,
    color: 'from-green-500 to-green-600',
    features: [
      'Interview scheduling',
      'Employee onboarding',
      'Performance reviews',
      'Team building events',
    ],
  },
  {
    title: 'Consultants',
    description: 'Manage client meetings and project coordination',
    icon: Globe,
    color: 'from-purple-500 to-purple-600',
    features: [
      'Client meeting booking',
      'Project milestone tracking',
      'Time zone management',
      'Billing integration',
    ],
  },
  {
    title: 'Remote Teams',
    description: 'Coordinate across time zones and locations',
    icon: Clock,
    color: 'from-orange-500 to-orange-600',
    features: [
      'Global time zone support',
      'Virtual meeting coordination',
      'Async communication',
      'Team availability tracking',
    ],
  },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Sales Director',
    company: 'TechCorp',
    quote: 'Punctual has revolutionized how we manage our sales meetings. The team scheduling features are incredible.',
    rating: 5,
    feature: 'Team Scheduling',
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupXYZ',
    quote: 'The integrations are seamless. We can now schedule meetings directly from our CRM.',
    rating: 5,
    feature: 'CRM Integration',
  },
  {
    name: 'Emily Davis',
    role: 'HR Manager',
    company: 'GlobalCorp',
    quote: 'Managing interviews across multiple time zones is now effortless with Punctual.',
    rating: 5,
    feature: 'Global Scheduling',
  },
]

export default function FeaturesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
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
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Powerful Features
            </Badge>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Everything You Need to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Schedule Smarter</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover the comprehensive set of features that make Punctual the most 
              powerful scheduling platform for individuals, teams, and enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark">
                <Rocket className="w-4 h-4 mr-2" />
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
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
              Core <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The essential features that make Punctual the most powerful scheduling platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className={`h-full ${feature.gradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}>
                  <CardContent className="p-8 relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-5 rounded-full -translate-y-16 translate-x-16`} />
                    
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">{feature.details}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features by Category */}
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
              Advanced <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive feature set organized by category
            </p>
          </motion.div>

          <div className="space-y-16">
            {advancedFeatures.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  {category.category}
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (featureIndex * 0.05) }}
                      className="group"
                    >
                      <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        <CardContent className="p-6 text-center">
                          <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <feature.icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3">{feature.name}</h4>
                          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
              Perfect for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Every Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how different teams use Punctual to solve their scheduling challenges
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
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      {useCase.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from teams using our features
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.feature}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-dark to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Start your free trial today and discover how Punctual can transform 
              your scheduling workflow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}