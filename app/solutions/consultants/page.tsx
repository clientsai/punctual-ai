'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, Users, ArrowRight, CheckCircle, Star, Target, TrendingUp, BarChart3, Zap, Shield, Globe, MessageSquare, Phone, Mail, Building, DollarSign, Award, Rocket, Brain, Cpu, Database, Lock, Eye, PieChart, Activity, RefreshCw, Plus, Minus, X, AlertCircle, Info, Lightbulb, Compass, MapPin, Flag, BookOpen, Headphones, Mic, Video, Camera, Wifi, Battery, HardDrive, MemoryStick, Wrench, Cog, Layers, Briefcase, UserCheck, UserPlus, UserX, FileText, Clipboard, CreditCard, Handshake, Presentation } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const consultantFeatures = [
  {
    title: 'Client Scheduling',
    description: 'Manage client appointments, consultations, and follow-ups with professional ease.',
    icon: Calendar,
    benefits: [
      'Client self-booking portal',
      'Automated appointment reminders',
      'Time zone management',
      'Flexible scheduling options'
    ]
  },
  {
    title: 'Project Management',
    description: 'Track project timelines, milestones, and deliverables with integrated scheduling.',
    icon: Briefcase,
    benefits: [
      'Project timeline visualization',
      'Milestone tracking',
      'Resource allocation',
      'Deadline management'
    ]
  },
  {
    title: 'Billing Integration',
    description: 'Seamlessly integrate time tracking and billing with your scheduling system.',
    icon: CreditCard,
    benefits: [
      'Time tracking automation',
      'Invoice generation',
      'Payment processing',
      'Expense management'
    ]
  },
  {
    title: 'Client Communication',
    description: 'Maintain professional communication with automated follow-ups and updates.',
    icon: MessageSquare,
    benefits: [
      'Automated follow-ups',
      'Client portal access',
      'Document sharing',
      'Progress updates'
    ]
  }
]

const consultantStats = [
  { metric: '35%', label: 'Increase in billable hours' },
  { metric: '50%', label: 'Reduction in admin time' },
  { metric: '90%', label: 'Client satisfaction rate' },
  { metric: '25%', label: 'Improvement in project delivery' }
]

const testimonials = [
  {
    quote: 'Punctual transformed my consulting practice. I\'m billing 35% more hours with less administrative work.',
    author: 'Management Consultant',
    company: 'Strategic Solutions',
    industry: 'Management Consulting'
  },
  {
    quote: 'The client self-booking feature is a game changer. My clients love the convenience and I save hours every week.',
    author: 'Business Consultant',
    company: 'Growth Partners',
    industry: 'Business Consulting'
  },
  {
    quote: 'Finally, a tool that understands the complexity of consulting work. Project management has never been easier.',
    author: 'IT Consultant',
    company: 'Tech Advisors',
    industry: 'Technology Consulting'
  }
]

export default function ConsultantsSolutionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden">
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
              <Briefcase className="w-4 h-4 mr-2" />
              Consultants Solution
            </Badge>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Optimize Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Consulting Practice</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Streamline your consulting business with intelligent scheduling that maximizes billable hours, 
              improves client experience, and simplifies project management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://punctual.ai/register">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark">
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
              </Link>
              <Link href="https://punctual.ai/demo">
                <Button variant="outline" size="lg">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {consultantStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Built for Consultants
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a successful consulting practice
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {consultantFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600 mb-4">{feature.description}</p>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted by Consultants
            </h2>
            <p className="text-xl text-gray-600">
              See how consultants are growing their practices with Punctual
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                      <div className="text-xs text-gray-400">{testimonial.industry}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Grow Your Consulting Practice?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of consultants already using Punctual to optimize their business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://punctual.ai/register">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Calendar className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
              </Link>
              <Link href="https://punctual.ai/demo">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
