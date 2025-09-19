'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, Users, ArrowRight, Share2, Heart, MessageSquare, BookOpen, TrendingUp, CheckCircle, Star, Zap, Target, Award, Rocket, Shield, Globe, Lock, Eye, Database, Code, Bell, BarChart3, Smartphone, Laptop, Monitor, Headphones, Mic, Video, Camera, Wifi, Battery, Cpu, HardDrive, MemoryStick, Wrench, Cog, Layers, PieChart, Activity, RefreshCw, Plus, Minus, X, AlertCircle, Info, Lightbulb, Compass, MapPin, Flag } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const enterpriseFeatures = [
  {
    title: 'Scalable Architecture',
    description: 'Built to handle thousands of users and millions of bookings without performance degradation.',
    details: [
      'Horizontal scaling across multiple data centers',
      'Load balancing and auto-scaling capabilities',
      '99.9% uptime SLA guarantee',
      'Real-time monitoring and alerting'
    ],
    icon: Database,
    impact: 'Supports 100,000+ concurrent users'
  },
  {
    title: 'Advanced Security',
    description: 'Enterprise-grade security with comprehensive compliance and data protection.',
    details: [
      'SOC 2 Type II and ISO 27001 certified',
      'End-to-end encryption for all data',
      'SSO/SAML integration support',
      'Role-based access control (RBAC)'
    ],
    icon: Shield,
    impact: 'Meets all enterprise security requirements'
  },
  {
    title: 'Custom Integrations',
    description: 'Seamless integration with existing enterprise systems and workflows.',
    details: [
      'RESTful API with comprehensive documentation',
      'Webhook support for real-time updates',
      'Pre-built connectors for major enterprise tools',
      'Custom integration development services'
    ],
    icon: Code,
    impact: 'Integrates with 500+ enterprise applications'
  },
  {
    title: 'Advanced Analytics',
    description: 'Comprehensive reporting and analytics to optimize scheduling efficiency.',
    details: [
      'Real-time dashboard with key metrics',
      'Custom report generation and scheduling',
      'Predictive analytics for capacity planning',
      'Executive summary reports'
    ],
    icon: BarChart3,
    impact: 'Reduces scheduling conflicts by 40%'
  },
  {
    title: 'Global Deployment',
    description: 'Worldwide deployment with regional data centers and compliance.',
    details: [
      'Multi-region data centers for low latency',
      'GDPR, CCPA, and regional compliance',
      'Multi-language and timezone support',
      'Local data residency options'
    ],
    icon: Globe,
    impact: 'Available in 50+ countries'
  },
  {
    title: 'Dedicated Support',
    description: '24/7 enterprise support with dedicated account management.',
    details: [
      'Dedicated customer success manager',
      'Priority support with 1-hour response time',
      'Custom training and onboarding programs',
      'Regular health checks and optimization'
    ],
    icon: Users,
    impact: '99% customer satisfaction rating'
  }
]

const implementationSteps = [
  {
    phase: 'Discovery & Planning',
    duration: '2-4 weeks',
    activities: [
      'Requirements gathering and analysis',
      'Current system assessment',
      'Integration planning and architecture design',
      'Security and compliance review'
    ]
  },
  {
    phase: 'Pilot Deployment',
    duration: '4-6 weeks',
    activities: [
      'Limited user group testing',
      'Integration development and testing',
      'Custom configuration setup',
      'User training and feedback collection'
    ]
  },
  {
    phase: 'Full Rollout',
    duration: '6-8 weeks',
    activities: [
      'Organization-wide deployment',
      'Data migration and validation',
      'Advanced feature configuration',
      'Go-live support and monitoring'
    ]
  },
  {
    phase: 'Optimization',
    duration: 'Ongoing',
    activities: [
      'Performance monitoring and tuning',
      'Feature adoption and training',
      'Continuous improvement initiatives',
      'Regular health checks and updates'
    ]
  }
]

const relatedPosts = [
  {
    title: '10 Productivity Hacks for Remote Teams',
    excerpt: 'Learn proven strategies to boost productivity and collaboration in remote work environments.',
    href: '/blog/10-productivity-hacks-remote-teams',
    readTime: '6 min read',
    category: 'Productivity'
  },
  {
    title: 'Calendar Integration Best Practices',
    excerpt: 'Master the art of calendar integration with these expert tips and strategies.',
    href: '/blog/calendar-integration-best-practices',
    readTime: '5 min read',
    category: 'Tutorial'
  },
  {
    title: 'The Psychology of Meeting Scheduling',
    excerpt: 'Understanding the psychological factors that influence effective meeting scheduling.',
    href: '/blog/psychology-meeting-scheduling',
    readTime: '7 min read',
    category: 'Psychology'
  }
]

export default function BlogPostPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Link href="/blog" className="text-primary hover:underline text-sm font-medium">
                ← Back to Blog
              </Link>
            </div>
            
            <Badge variant="secondary" className="mb-4">Enterprise</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise Scheduling Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              How large organizations can implement scalable scheduling solutions that integrate 
              seamlessly with existing systems while maintaining security, compliance, and performance.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Enclose.ai Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>December 3, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>9 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-gray-600 mb-8">
              Enterprise scheduling presents unique challenges that go far beyond simple calendar management. 
              Large organizations need solutions that can scale to thousands of users, integrate with complex 
              IT ecosystems, maintain strict security standards, and provide the flexibility to adapt to 
              changing business requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Enterprise Scheduling Challenge</h2>
            <p className="text-gray-600 mb-6">
              Unlike small teams or individual users, enterprise organizations face a multitude of complex 
              requirements that demand sophisticated scheduling solutions. These include managing multiple 
              departments with different scheduling needs, ensuring compliance with various regulations, 
              integrating with existing enterprise software, and maintaining security across all touchpoints.
            </p>

            <p className="text-gray-600 mb-8">
              The stakes are high: poor scheduling can lead to lost productivity, missed opportunities, 
              compliance violations, and significant financial losses. This is why enterprise scheduling 
              solutions must be designed from the ground up to handle the scale, complexity, and security 
              requirements of large organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive capabilities designed for large organizations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    
                    <ul className="space-y-2 mb-4">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-800">{feature.impact}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-lg text-gray-600">
              A structured approach to enterprise deployment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.phase}</h3>
                    <p className="text-sm text-gray-600 mb-4">{step.duration}</p>
                    
                    <ul className="space-y-2 text-sm text-gray-600">
                      {step.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                          {activity}
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
              Ready for enterprise scheduling?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our enterprise solutions can transform your organization's scheduling
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Enterprise Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <BookOpen className="w-5 h-5 mr-2" />
                Download Enterprise Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Articles
            </h2>
            <p className="text-lg text-gray-600">
              Continue your productivity journey with these related posts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <Link href={post.href} className="inline-flex items-center text-primary hover:underline text-sm font-medium">
                      Read more <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
