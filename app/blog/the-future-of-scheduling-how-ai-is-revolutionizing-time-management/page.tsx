'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, Users, ArrowRight, Share2, Heart, MessageSquare, BookOpen, TrendingUp, CheckCircle, Star, Zap, Target, Award, Rocket, Shield, Globe, Lock, Eye, Database, Code, Bell, BarChart3, Smartphone, Laptop, Monitor, Headphones, Mic, Video, Camera, Wifi, Battery, Cpu, HardDrive, MemoryStick, Wrench, Cog, Layers, PieChart, Activity, RefreshCw, Plus, Minus, X, AlertCircle, Info, Lightbulb, Compass, MapPin, Flag, Brain } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const aiFeatures = [
  {
    title: 'Intelligent Time Blocking',
    description: 'AI automatically analyzes your work patterns and suggests optimal time blocks for different types of tasks.',
    details: [
      'Learns from your productivity patterns',
      'Automatically blocks focus time for deep work',
      'Suggests optimal meeting times based on energy levels',
      'Adapts to your natural work rhythms'
    ],
    icon: Brain,
    impact: 'Increases productivity by 40%'
  },
  {
    title: 'Smart Conflict Resolution',
    description: 'AI proactively identifies and resolves scheduling conflicts before they become problems.',
    details: [
      'Predicts potential conflicts weeks in advance',
      'Automatically suggests alternative meeting times',
      'Handles complex multi-participant scheduling',
      'Learns from your preferences and constraints'
    ],
    icon: Shield,
    impact: 'Reduces scheduling conflicts by 85%'
  },
  {
    title: 'Predictive Analytics',
    description: 'Advanced AI analyzes patterns to predict optimal meeting times and duration.',
    details: [
      'Predicts meeting success based on timing',
      'Suggests optimal meeting duration',
      'Identifies patterns in successful meetings',
      'Provides insights for better scheduling decisions'
    ],
    icon: BarChart3,
    impact: 'Improves meeting effectiveness by 60%'
  },
  {
    title: 'Natural Language Processing',
    description: 'Schedule meetings using natural conversation with AI that understands context.',
    details: [
      'Voice-activated scheduling commands',
      'Understands complex scheduling requests',
      'Handles multiple languages and dialects',
      'Learns from your communication style'
    ],
    icon: Mic,
    impact: 'Reduces scheduling time by 70%'
  }
]

const futureTechnologies = [
  {
    technology: 'Machine Learning Optimization',
    description: 'Advanced algorithms that continuously learn and improve scheduling recommendations.',
    timeline: 'Available Now',
    status: 'Active',
    icon: Cpu
  },
  {
    technology: 'Predictive Scheduling',
    description: 'AI that predicts the best times for meetings based on historical data and patterns.',
    timeline: 'Q2 2024',
    status: 'Beta',
    icon: Target
  },
  {
    technology: 'Voice-Activated AI',
    description: 'Natural language processing for hands-free scheduling and calendar management.',
    timeline: 'Q3 2024',
    status: 'Development',
    icon: Mic
  },
  {
    technology: 'Emotional Intelligence',
    description: 'AI that considers emotional context and team dynamics in scheduling decisions.',
    timeline: 'Q4 2024',
    status: 'Research',
    icon: Heart
  }
]

const industryImpact = [
  {
    sector: 'Healthcare',
    impact: 'Reduced patient wait times by 35% through intelligent appointment scheduling',
    icon: Shield,
    color: 'from-blue-500 to-blue-600'
  },
  {
    sector: 'Education',
    impact: 'Improved student engagement by 50% with optimized class scheduling',
    icon: BookOpen,
    color: 'from-green-500 to-green-600'
  },
  {
    sector: 'Finance',
    impact: 'Increased client satisfaction by 40% with predictive meeting scheduling',
    icon: BarChart3,
    color: 'from-purple-500 to-purple-600'
  },
  {
    sector: 'Technology',
    impact: 'Boosted team productivity by 45% through AI-powered time management',
    icon: Code,
    color: 'from-orange-500 to-orange-600'
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
            
            <Badge variant="secondary" className="mb-4">Product</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Future of Scheduling: How AI is Revolutionizing Time Management
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover how artificial intelligence is transforming the way we manage our time and schedule meetings, 
              making productivity more efficient than ever before.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Punctual.ai Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
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
              The scheduling landscape is undergoing a revolutionary transformation, driven by advances in artificial 
              intelligence and machine learning. What once required manual coordination and constant back-and-forth 
              communication is now being handled by intelligent systems that learn, adapt, and optimize in real-time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">The AI Revolution in Time Management</h2>
            <p className="text-gray-600 mb-6">
              Traditional scheduling methods are becoming obsolete as AI-powered solutions offer unprecedented 
              efficiency and intelligence. These systems don't just manage calendars—they understand context, 
              predict needs, and make decisions that would typically require human intervention.
            </p>

            <p className="text-gray-600 mb-8">
              The impact is profound: teams are saving hours every week, meetings are more productive, and 
              scheduling conflicts have become a thing of the past. This is the future of time management, 
              and it's happening now.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Features */}
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
              AI-Powered Scheduling Features
            </h2>
            <p className="text-lg text-gray-600">
              Revolutionary capabilities that are transforming how we manage time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
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
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Technologies */}
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
              What's Coming Next
            </h2>
            <p className="text-lg text-gray-600">
              The next generation of AI scheduling technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureTechnologies.map((tech, index) => (
              <motion.div
                key={tech.technology}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.technology}</h3>
                    <p className="text-sm text-gray-600 mb-3">{tech.description}</p>
                    <div className="space-y-1">
                      <Badge variant={tech.status === 'Active' ? 'default' : tech.status === 'Beta' ? 'secondary' : 'outline'}>
                        {tech.status}
                      </Badge>
                      <p className="text-xs text-gray-500">{tech.timeline}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Impact */}
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
              Real-World Impact
            </h2>
            <p className="text-lg text-gray-600">
              How AI scheduling is transforming industries worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryImpact.map((impact, index) => (
              <motion.div
                key={impact.sector}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${impact.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <impact.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{impact.sector}</h3>
                    <p className="text-sm text-gray-600">{impact.impact}</p>
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
              Experience the future of scheduling today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of teams already using AI-powered scheduling to transform their productivity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://app.punctual.ai/signup">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Calendar className="w-5 h-5 mr-2" />
                  Try Punctual Free
                </Button>
              </Link>
              <Link href="https://punctual.ai/demo">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </Link>
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
