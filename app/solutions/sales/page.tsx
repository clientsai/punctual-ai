'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, Users, ArrowRight, CheckCircle, Star, Target, TrendingUp, BarChart3, Zap, Shield, Globe, MessageSquare, Phone, Mail, Building, DollarSign, Award, Rocket, Brain, Cpu, Database, Lock, Eye, PieChart, Activity, RefreshCw, Plus, Minus, X, AlertCircle, Info, Lightbulb, Compass, MapPin, Flag, BookOpen, Headphones, Mic, Video, Camera, Wifi, Battery, HardDrive, MemoryStick, Wrench, Cog, Layers } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const salesFeatures = [
  {
    title: 'Automated Lead Scheduling',
    description: 'Never miss a sales opportunity with intelligent lead scheduling that works 24/7.',
    icon: Calendar,
    benefits: [
      'Instant booking for qualified leads',
      'Automatic follow-up scheduling',
      'CRM integration for seamless workflow',
      'Time zone optimization for global teams'
    ]
  },
  {
    title: 'Pipeline Management',
    description: 'Track and manage your entire sales pipeline with built-in scheduling intelligence.',
    icon: BarChart3,
    benefits: [
      'Visual pipeline tracking',
      'Automated stage progression',
      'Performance analytics',
      'Team collaboration tools'
    ]
  },
  {
    title: 'Meeting Intelligence',
    description: 'AI-powered insights to optimize your sales meetings and improve conversion rates.',
    icon: Brain,
    benefits: [
      'Meeting success predictions',
      'Optimal timing recommendations',
      'Follow-up automation',
      'Performance insights'
    ]
  },
  {
    title: 'Team Coordination',
    description: 'Seamlessly coordinate with your sales team and support staff for complex deals.',
    icon: Users,
    benefits: [
      'Multi-person meeting scheduling',
      'Resource availability tracking',
      'Conflict resolution',
      'Team performance metrics'
    ]
  }
]

const salesStats = [
  { metric: '40%', label: 'Increase in qualified meetings' },
  { metric: '65%', label: 'Reduction in scheduling time' },
  { metric: '30%', label: 'Improvement in conversion rates' },
  { metric: '85%', label: 'Customer satisfaction score' }
]

const testimonials = [
  {
    quote: 'Punctual transformed our sales process. We\'re booking 40% more qualified meetings with half the effort.',
    author: 'Sales Director',
    company: 'TechCorp',
    industry: 'Technology'
  },
  {
    quote: 'The automated scheduling features saved our team 10+ hours per week. Game changer for our sales team.',
    author: 'VP of Sales',
    company: 'GrowthCo',
    industry: 'SaaS'
  },
  {
    quote: 'Finally, a tool that understands the complexity of enterprise sales. Our close rates improved dramatically.',
    author: 'Enterprise Sales Manager',
    company: 'Enterprise Solutions',
    industry: 'Enterprise Software'
  }
]

const pricingPlans = [
  {
    name: 'Sales Starter',
    price: '$29',
    period: '/user/month',
    description: 'Perfect for small sales teams',
    features: [
      'Up to 5 team members',
      'Basic scheduling features',
      'CRM integration',
      'Email support',
      'Standard reporting'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Sales Professional',
    price: '$59',
    period: '/user/month',
    description: 'Ideal for growing sales teams',
    features: [
      'Up to 25 team members',
      'Advanced scheduling features',
      'Pipeline management',
      'Meeting intelligence',
      'Priority support',
      'Advanced analytics'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Sales Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large sales organizations',
    features: [
      'Unlimited team members',
      'Custom integrations',
      'Dedicated support',
      'Advanced security',
      'Custom reporting',
      'API access'
    ],
    cta: 'Contact Sales',
    popular: false
  }
]

export default function SalesSolutionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
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
              <Target className="w-4 h-4 mr-2" />
              Sales Solution
            </Badge>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Accelerate Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Sales Pipeline</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your sales process with intelligent scheduling that books more qualified meetings, 
              reduces administrative overhead, and drives higher conversion rates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://app.punctual.ai/register">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark">
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
              </Link>
              <Link href="https://app.punctual.ai/demo">
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
            {salesStats.map((stat, index) => (
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
              Built for Sales Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to streamline your sales process and close more deals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {salesFeatures.map((feature, index) => (
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
              Trusted by Sales Teams
            </h2>
            <p className="text-xl text-gray-600">
              See how sales teams are transforming their processes with Punctual
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

      {/* Pricing */}
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your sales team's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full relative ${plan.popular ? 'ring-2 ring-primary shadow-lg' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-1">{plan.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={plan.cta === 'Contact Sales' ? 'https://app.punctual.ai/contact' : 'https://app.punctual.ai/register'}>
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
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
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of sales teams already using Punctual to close more deals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://app.punctual.ai/register">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Calendar className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
              </Link>
              <Link href="https://app.punctual.ai/demo">
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
