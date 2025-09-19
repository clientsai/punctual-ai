'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, Users, ArrowRight, Share2, Heart, MessageSquare, BookOpen, TrendingUp, CheckCircle, Star, Zap, Target, Award, Rocket, Shield, Globe, Lock, Eye, Database, Code, Bell, BarChart3, Smartphone, Laptop, Monitor, Headphones, Mic, Video, Camera, Wifi, Battery, Cpu, HardDrive, MemoryStick, Wrench, Cog, Layers, PieChart, Activity, RefreshCw, Plus, Minus, X, AlertCircle, Info, Lightbulb, Compass, MapPin, Flag } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const timezoneStrategies = [
  {
    title: 'Centralized Time Zone Management',
    description: 'Establish a single source of truth for all time zone information across your organization.',
    details: [
      'Maintain a master time zone database',
      'Automatically detect user time zones',
      'Sync with calendar applications',
      'Provide time zone conversion tools'
    ],
    icon: Globe,
    impact: 'Reduces scheduling errors by 60%'
  },
  {
    title: 'Visual Time Zone Displays',
    description: 'Use visual representations to make time zones intuitive and easy to understand.',
    details: [
      'World clock displays in meeting interfaces',
      'Color-coded time zone indicators',
      'Interactive time zone maps',
      'Overlapping availability visualization'
    ],
    icon: Eye,
    impact: 'Improves meeting coordination by 45%'
  },
  {
    title: 'Automated Time Zone Detection',
    description: 'Leverage technology to automatically detect and apply correct time zones.',
    details: [
      'Browser-based time zone detection',
      'IP address geolocation',
      'Calendar integration for time zone sync',
      'Mobile device location services'
    ],
    icon: Zap,
    impact: 'Eliminates manual time zone entry'
  },
  {
    title: 'Meeting Time Optimization',
    description: 'Use algorithms to find optimal meeting times across multiple time zones.',
    details: [
      'Find overlapping business hours',
      'Consider individual preferences',
      'Account for daylight saving changes',
      'Suggest alternative meeting times'
    ],
    icon: Target,
    impact: 'Increases meeting attendance by 35%'
  }
]

const commonChallenges = [
  {
    challenge: 'Daylight Saving Time Confusion',
    description: 'Different countries change clocks on different dates, causing confusion.',
    solution: 'Use time zone databases that automatically handle DST transitions and provide clear indicators when changes occur.',
    prevention: 'Set up automated reminders before DST changes and use tools that show both local and UTC times.'
  },
  {
    challenge: 'Meeting Time Miscommunication',
    description: 'Participants often misunderstand which time zone a meeting is scheduled in.',
    solution: 'Always display times in both local and UTC formats, and include time zone abbreviations in all communications.',
    prevention: 'Use meeting tools that automatically convert times to each participant\'s local time zone.'
  },
  {
    challenge: 'Recurring Meeting Issues',
    description: 'Recurring meetings can break when DST changes occur or when participants travel.',
    solution: 'Use smart scheduling tools that automatically adjust for DST changes and can handle participant time zone updates.',
    prevention: 'Set up meeting series with flexible time zone handling and provide easy rescheduling options.'
  },
  {
    challenge: 'Cross-Border Team Coordination',
    description: 'Teams spanning multiple continents face significant time zone differences.',
    solution: 'Establish core collaboration hours that work for most team members and use asynchronous communication effectively.',
    prevention: 'Create time zone-aware team calendars and establish clear communication protocols for different time zones.'
  }
]

const toolsAndTechniques = [
  {
    category: 'Scheduling Tools',
    tools: [
      { name: 'World Clock Widgets', description: 'Display multiple time zones simultaneously', rating: 4.8 },
      { name: 'Time Zone Converters', description: 'Quick conversion between any two time zones', rating: 4.6 },
      { name: 'Meeting Schedulers', description: 'Automatically find optimal meeting times', rating: 4.7 },
      { name: 'Calendar Integrations', description: 'Sync time zones across calendar applications', rating: 4.5 }
    ]
  },
  {
    category: 'Communication Best Practices',
    tools: [
      { name: 'Time Zone Notation', description: 'Always include time zone in meeting invites', rating: 4.9 },
      { name: 'UTC Reference', description: 'Use UTC as a common reference point', rating: 4.4 },
      { name: 'Local Time Display', description: 'Show times in each participant\'s local time', rating: 4.8 },
      { name: 'Time Zone Abbreviations', description: 'Use standard time zone abbreviations', rating: 4.3 }
    ]
  },
  {
    category: 'Team Management',
    tools: [
      { name: 'Core Hours Definition', description: 'Establish overlapping work hours', rating: 4.6 },
      { name: 'Asynchronous Communication', description: 'Use tools that work across time zones', rating: 4.7 },
      { name: 'Time Zone Awareness Training', description: 'Educate team on time zone best practices', rating: 4.5 },
      { name: 'Flexible Scheduling', description: 'Allow for different work schedules', rating: 4.8 }
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
            
            <Badge variant="secondary" className="mb-4">Global</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Time Zone Management Made Easy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Navigate global teams and time zones with these practical strategies. Learn how to eliminate 
              scheduling confusion and improve collaboration across different time zones.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Enclose.ai Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>December 1, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>4 min read</span>
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
              In today's globalized workforce, managing time zones has become one of the most critical 
              skills for effective team collaboration. Whether you're coordinating with team members 
              across different continents or scheduling meetings with international clients, time zone 
              management can make or break your productivity.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Global Collaboration Challenge</h2>
            <p className="text-gray-600 mb-6">
              With remote work becoming the norm and teams spanning multiple continents, time zone 
              management has evolved from a minor inconvenience to a critical business skill. The 
              complexity increases exponentially when you consider daylight saving time changes, 
              different work schedules, and cultural differences in time perception.
            </p>

            <p className="text-gray-600 mb-8">
              The good news is that with the right strategies and tools, time zone management can 
              be simplified and even automated. This guide will show you how to eliminate confusion, 
              reduce scheduling errors, and improve collaboration across time zones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Time Zone Strategies */}
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
              Effective Time Zone Strategies
            </h2>
            <p className="text-lg text-gray-600">
              Proven approaches to simplify global team coordination
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {timezoneStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <strategy.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{strategy.title}</h3>
                        <p className="text-gray-600 mb-4">{strategy.description}</p>
                        
                        <ul className="space-y-2 mb-4">
                          {strategy.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-semibold text-blue-800">{strategy.impact}</span>
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

      {/* Common Challenges */}
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
              Common Time Zone Challenges
            </h2>
            <p className="text-lg text-gray-600">
              Solutions to the most frequent time zone management problems
            </p>
          </motion.div>

          <div className="space-y-8">
            {commonChallenges.map((challenge, index) => (
              <motion.div
                key={challenge.challenge}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.challenge}</h3>
                        <p className="text-gray-600 text-sm">{challenge.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Solution:</h4>
                        <p className="text-green-700 text-sm">{challenge.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Prevention:</h4>
                        <p className="text-blue-700 text-sm">{challenge.prevention}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools and Techniques */}
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
              Tools and Techniques
            </h2>
            <p className="text-lg text-gray-600">
              Recommended tools and best practices for time zone management
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {toolsAndTechniques.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-primary" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="border-l-2 border-gray-200 pl-4">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-gray-900 text-sm">{tool.name}</h4>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span className="text-xs text-gray-600">{tool.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">{tool.description}</p>
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
              Master time zone management today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start implementing these strategies and see the difference in your global team coordination
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Try Punctual Free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <BookOpen className="w-5 h-5 mr-2" />
                Read More Articles
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
