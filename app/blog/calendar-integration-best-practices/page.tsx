'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, Users, ArrowRight, Share2, Heart, MessageSquare, BookOpen, TrendingUp, CheckCircle, Star, Zap, Target, Award, Rocket, Shield, Globe, Lock, Eye, Database, Code, Bell, BarChart3, Smartphone, Laptop, Monitor, Headphones, Mic, Video, Camera, Wifi, Battery, Cpu, HardDrive, MemoryStick, Wrench, Cog, Layers, PieChart, Activity, RefreshCw, Plus, Minus, X, AlertCircle, Info, Lightbulb, Compass, MapPin, Flag } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const integrationSteps = [
  {
    step: '01',
    title: 'Choose the Right Calendar Platform',
    description: 'Select a calendar system that aligns with your team\'s needs and integrates well with your existing tools.',
    details: [
      'Evaluate Google Calendar for its widespread adoption and integration capabilities',
      'Consider Microsoft Outlook for enterprise environments with Office 365',
      'Assess Apple Calendar for teams using Mac and iOS devices',
      'Look for platforms with robust API support for custom integrations'
    ],
    icon: Calendar,
    tip: 'Most teams benefit from choosing one primary platform to avoid sync issues'
  },
  {
    step: '02',
    title: 'Set Up Proper Permissions and Sharing',
    description: 'Configure calendar sharing and permissions to ensure team members have appropriate access levels.',
    details: [
      'Create shared calendars for different projects or departments',
      'Set up proper permission levels (view-only, edit, manage)',
      'Use calendar groups for easy team-wide sharing',
      'Implement guest access for external collaborators'
    ],
    icon: Shield,
    tip: 'Start with restrictive permissions and gradually open up access as needed'
  },
  {
    step: '03',
    title: 'Establish Naming Conventions',
    description: 'Create consistent naming patterns for events, calendars, and categories to improve organization.',
    details: [
      'Use prefixes to categorize different types of meetings (e.g., "MTG:", "CALL:", "FOCUS:")',
      'Include project codes or client names in event titles',
      'Standardize time zone notation in event descriptions',
      'Create color-coding systems for different meeting types'
    ],
    icon: Target,
    tip: 'Document your naming conventions and share them with the entire team'
  },
  {
    step: '04',
    title: 'Configure Time Zone Settings',
    description: 'Properly handle time zones to prevent scheduling conflicts and confusion across global teams.',
    details: [
      'Set up automatic time zone detection for meeting invitations',
      'Display multiple time zones in calendar views for global teams',
      'Use time zone conversion tools for international meetings',
      'Include time zone information in all meeting invitations'
    ],
    icon: Globe,
    tip: 'Always double-check time zones when scheduling with international team members'
  },
  {
    step: '05',
    title: 'Implement Meeting Templates',
    description: 'Create standardized meeting templates to ensure consistency and save time when scheduling.',
    details: [
      'Develop templates for common meeting types (standups, reviews, client calls)',
      'Include standard agenda items and time allocations',
      'Pre-configure meeting settings (video links, dial-in numbers)',
      'Create recurring meeting series for regular check-ins'
    ],
    icon: Layers,
    tip: 'Templates should be flexible enough to accommodate different meeting needs'
  },
  {
    step: '06',
    title: 'Set Up Automated Scheduling',
    description: 'Leverage scheduling tools and automation to reduce the back-and-forth of meeting coordination.',
    details: [
      'Use scheduling links for external meetings',
      'Implement buffer time between meetings automatically',
      'Set up automatic reminders and follow-up actions',
      'Configure conflict detection and resolution'
    ],
    icon: Zap,
    tip: 'Automation works best when combined with clear communication about availability'
  },
  {
    step: '07',
    title: 'Integrate with Communication Tools',
    description: 'Connect your calendar with team communication platforms for seamless workflow integration.',
    details: [
      'Sync calendar status with Slack or Microsoft Teams',
      'Set up automatic meeting room bookings',
      'Integrate with video conferencing tools',
      'Connect with project management platforms'
    ],
    icon: MessageSquare,
    tip: 'Choose integrations that reduce context switching and improve efficiency'
  },
  {
    step: '08',
    title: 'Monitor and Optimize Usage',
    description: 'Regularly review calendar usage patterns and optimize based on team feedback and data.',
    details: [
      'Track meeting frequency and duration patterns',
      'Identify and eliminate unnecessary meetings',
      'Analyze peak productivity times for scheduling',
      'Gather team feedback on calendar effectiveness'
    ],
    icon: BarChart3,
    tip: 'Schedule monthly reviews to assess and improve your calendar integration'
  }
]

const commonMistakes = [
  {
    mistake: 'Over-scheduling and Meeting Fatigue',
    description: 'Scheduling too many meetings without considering focus time and breaks.',
    solution: 'Implement "no-meeting Fridays" or block 2-3 hour focus periods daily.',
    impact: 'Reduces productivity by 30%'
  },
  {
    mistake: 'Inconsistent Time Zone Handling',
    description: 'Not properly accounting for time zones when scheduling international meetings.',
    solution: 'Always use calendar tools that automatically handle time zone conversions.',
    impact: 'Causes 25% of meeting conflicts'
  },
  {
    mistake: 'Poor Meeting Descriptions',
    description: 'Creating vague or incomplete meeting descriptions that confuse attendees.',
    solution: 'Include clear agendas, objectives, and preparation requirements in every meeting.',
    impact: 'Reduces meeting effectiveness by 40%'
  },
  {
    mistake: 'Ignoring Buffer Time',
    description: 'Scheduling back-to-back meetings without transition time.',
    solution: 'Automatically add 15-30 minute buffers between meetings.',
    impact: 'Increases stress and reduces meeting quality'
  }
]

const toolsAndIntegrations = [
  {
    category: 'Scheduling Tools',
    tools: [
      { name: 'Calendly', description: 'Easy scheduling links for external meetings', rating: 4.8 },
      { name: 'When2meet', description: 'Group scheduling and availability polling', rating: 4.5 },
      { name: 'Doodle', description: 'Simple polling for meeting times', rating: 4.3 },
      { name: 'Acuity Scheduling', description: 'Advanced scheduling with payment integration', rating: 4.6 }
    ]
  },
  {
    category: 'Calendar Platforms',
    tools: [
      { name: 'Google Calendar', description: 'Most popular with excellent integration options', rating: 4.7 },
      { name: 'Microsoft Outlook', description: 'Enterprise-grade with Office 365 integration', rating: 4.5 },
      { name: 'Apple Calendar', description: 'Seamless integration with Apple ecosystem', rating: 4.4 },
      { name: 'Fantastical', description: 'Advanced features and natural language input', rating: 4.6 }
    ]
  },
  {
    category: 'Integration Platforms',
    tools: [
      { name: 'Zapier', description: 'Connect calendars with 1000+ apps', rating: 4.5 },
      { name: 'Microsoft Power Automate', description: 'Enterprise workflow automation', rating: 4.3 },
      { name: 'IFTTT', description: 'Simple automation for personal use', rating: 4.2 },
      { name: 'Punctual', description: 'AI-powered scheduling and optimization', rating: 4.9 }
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
    title: 'The Psychology of Meeting Scheduling',
    excerpt: 'Understanding the psychological factors that influence effective meeting scheduling.',
    href: '/blog/psychology-meeting-scheduling',
    readTime: '7 min read',
    category: 'Psychology'
  },
  {
    title: 'Time Zone Management Made Easy',
    excerpt: 'Navigate global teams and time zones with these practical strategies.',
    href: '/blog/time-zone-management-made-easy',
    readTime: '4 min read',
    category: 'Global'
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
            
            <Badge variant="secondary" className="mb-4">Tutorial</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Calendar Integration Best Practices
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Master the art of calendar integration with these expert tips and strategies. 
              Learn how to set up seamless scheduling workflows that boost productivity and reduce coordination overhead.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Punctual.ai Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>December 8, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
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
              Effective calendar integration is the foundation of productive team collaboration. When done right, it eliminates 
              scheduling conflicts, reduces administrative overhead, and ensures everyone stays aligned on priorities. However, 
              poor calendar integration can lead to missed meetings, double-bookings, and frustrated team members.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Calendar Integration Matters</h2>
            <p className="text-gray-600 mb-6">
              In today's distributed work environment, calendar integration isn't just a convenience—it's a necessity. 
              Teams that master calendar integration see significant improvements in meeting efficiency, reduced scheduling 
              conflicts, and better time management across the organization.
            </p>

            <p className="text-gray-600 mb-8">
              The key to successful calendar integration lies in understanding your team's unique needs and implementing 
              systems that work seamlessly with your existing workflows. This guide will walk you through the essential 
              steps and best practices that have proven successful across hundreds of teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Integration Steps */}
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
              Step-by-Step Integration Guide
            </h2>
            <p className="text-lg text-gray-600">
              Follow these proven steps to set up effective calendar integration
            </p>
          </motion.div>

          <div className="space-y-12">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-2xl font-bold text-primary">{step.step}</span>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Implementation Details:</h4>
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-2 text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-start gap-2">
                            <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                            <div>
                              <span className="font-semibold text-blue-800">Pro Tip:</span>
                              <span className="text-blue-700 ml-2">{step.tip}</span>
                            </div>
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

      {/* Common Mistakes */}
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
              Common Mistakes to Avoid
            </h2>
            <p className="text-lg text-gray-600">
              Learn from these common pitfalls that can derail your calendar integration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {commonMistakes.map((mistake, index) => (
              <motion.div
                key={mistake.mistake}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{mistake.mistake}</h3>
                        <p className="text-gray-600 text-sm mb-4">{mistake.description}</p>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-green-800 mb-2">Solution:</h4>
                      <p className="text-green-700 text-sm">{mistake.solution}</p>
                    </div>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 mb-2">Impact:</h4>
                      <p className="text-red-700 text-sm">{mistake.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools and Integrations */}
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
              Recommended Tools and Integrations
            </h2>
            <p className="text-lg text-gray-600">
              Top-rated tools for different calendar integration needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {toolsAndIntegrations.map((category, categoryIndex) => (
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
                      <Calendar className="w-5 h-5 text-primary" />
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

      {/* Implementation Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Implementation Timeline
            </h2>
            <p className="text-lg text-gray-600">
              A realistic timeline for implementing calendar integration best practices
            </p>
          </motion.div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Week 1: Foundation Setup</h3>
                <p className="text-gray-600 mb-2">Choose your calendar platform, set up basic sharing, and establish naming conventions.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Platform selection and setup</li>
                  <li>• Basic permission configuration</li>
                  <li>• Naming convention documentation</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Week 2: Team Onboarding</h3>
                <p className="text-gray-600 mb-2">Train your team on the new systems and gather initial feedback.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Team training sessions</li>
                  <li>• Template creation</li>
                  <li>• Initial feedback collection</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Week 3-4: Advanced Features</h3>
                <p className="text-gray-600 mb-2">Implement automation, integrations, and advanced scheduling features.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Automation setup</li>
                  <li>• Third-party integrations</li>
                  <li>• Advanced scheduling tools</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Month 2+: Optimization</h3>
                <p className="text-gray-600 mb-2">Monitor usage, gather feedback, and continuously improve your calendar integration.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Usage analytics review</li>
                  <li>• Process optimization</li>
                  <li>• Advanced feature adoption</li>
                </ul>
              </div>
            </div>
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
              Ready to optimize your calendar integration?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start implementing these best practices today and see the difference in your team's scheduling efficiency
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
