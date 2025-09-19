'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, Users, ArrowRight, Share2, Heart, MessageSquare, BookOpen, TrendingUp, CheckCircle, Star, Zap, Target, Award, Rocket, Shield, Globe, Lock, Eye, Database, Code, Bell, BarChart3, Smartphone, Laptop, Monitor, Headphones, Mic, Video, Camera, Wifi, Battery, Cpu, HardDrive, MemoryStick, Wrench, Cog, Layers, PieChart, Activity, RefreshCw, Plus, Minus, X, AlertCircle, Info, Lightbulb, Compass, MapPin, Flag, Brain, User, UserCheck, Users2, UserX, UserPlus, UserMinus, UserCog, UserSearch } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const psychologicalFactors = [
  {
    factor: 'Time Perception and Availability',
    description: 'How individuals perceive and value their time affects their willingness to schedule meetings.',
    details: [
      'People overestimate their future availability by 40% on average',
      'Time blocking reduces scheduling conflicts by creating clear boundaries',
      'Buffer time between meetings improves focus and reduces stress',
      'Peak productivity hours vary significantly between individuals'
    ],
    icon: Clock,
    impact: 'Understanding time perception can reduce scheduling conflicts by 35%'
  },
  {
    factor: 'Social Dynamics and Hierarchy',
    description: 'Power dynamics and social relationships influence meeting scheduling behavior and participation.',
    details: [
      'Higher-status individuals often control meeting times and locations',
      'Group size affects participation rates and decision-making quality',
      'Cultural differences impact punctuality and meeting formality',
      'Gender dynamics can influence speaking time and participation'
    ],
    icon: Users,
    impact: 'Addressing social dynamics improves meeting effectiveness by 50%'
  },
  {
    factor: 'Cognitive Load and Decision Fatigue',
    description: 'The mental effort required for scheduling decisions can lead to suboptimal choices.',
    details: [
      'Decision fatigue increases throughout the day, affecting scheduling quality',
      'Too many options can lead to choice paralysis and delayed decisions',
      'Default options and templates reduce cognitive load significantly',
      'Automation reduces decision fatigue and improves consistency'
    ],
    icon: Brain,
    impact: 'Reducing cognitive load increases scheduling efficiency by 60%'
  },
  {
    factor: 'Anxiety and Meeting Avoidance',
    description: 'Fear and anxiety about meetings can lead to avoidance behaviors and poor scheduling habits.',
    details: [
      'Meeting anxiety affects 30% of professionals, leading to avoidance',
      'Clear agendas and expectations reduce anxiety and improve attendance',
      'Virtual meetings can reduce social anxiety for some individuals',
      'Preparation time and materials help reduce meeting-related stress'
    ],
    icon: AlertCircle,
    impact: 'Addressing anxiety improves meeting attendance by 45%'
  },
  {
    factor: 'Motivation and Goal Alignment',
    description: 'Personal and professional goals influence how people prioritize and approach meetings.',
    details: [
      'Goal clarity increases meeting commitment and preparation',
      'Personal relevance determines meeting priority and engagement',
      'Progress tracking motivates consistent meeting attendance',
      'Recognition and feedback reinforce positive meeting behaviors'
    ],
    icon: Target,
    impact: 'Goal alignment increases meeting productivity by 40%'
  },
  {
    factor: 'Technology Adoption and Resistance',
    description: 'Individual comfort with technology affects their willingness to use scheduling tools and systems.',
    details: [
      'Technology anxiety prevents 25% of users from adopting new tools',
      'Training and support significantly improve technology adoption rates',
      'User-friendly interfaces reduce resistance and increase usage',
      'Peer influence and social proof drive technology adoption'
    ],
    icon: Smartphone,
    impact: 'Proper training increases tool adoption by 70%'
  }
]

const behavioralPatterns = [
  {
    pattern: 'The Planning Fallacy',
    description: 'People consistently underestimate the time required for tasks and meetings.',
    symptoms: [
      'Scheduling meetings too close together',
      'Underestimating preparation time',
      'Overcommitting to multiple meetings',
      'Frequent rescheduling due to time conflicts'
    ],
    solutions: [
      'Add 25% buffer time to all meeting estimates',
      'Use historical data to improve time predictions',
      'Implement automatic buffer time between meetings',
      'Regularly review and adjust time allocations'
    ]
  },
  {
    pattern: 'Status Quo Bias',
    description: 'Preference for maintaining current scheduling patterns, even when inefficient.',
    symptoms: [
      'Resistance to changing meeting times or formats',
      'Continued use of outdated scheduling methods',
      'Reluctance to try new tools or processes',
      'Defensive responses to scheduling suggestions'
    ],
    solutions: [
      'Introduce changes gradually with clear benefits',
      'Provide training and support for new methods',
      'Use data to demonstrate improvement opportunities',
      'Involve team members in process improvement decisions'
    ]
  },
  {
    pattern: 'Availability Heuristic',
    description: 'Over-reliance on easily recalled information when making scheduling decisions.',
    symptoms: [
      'Scheduling based on recent experiences only',
      'Ignoring long-term patterns and trends',
      'Making decisions without considering all options',
      'Frequent scheduling conflicts due to poor planning'
    ],
    solutions: [
      'Use data-driven scheduling tools and analytics',
      'Implement systematic review of scheduling patterns',
      'Create decision-making frameworks and checklists',
      'Regular training on effective scheduling practices'
    ]
  },
  {
    pattern: 'Social Proof and Conformity',
    description: 'Tendency to follow the scheduling behaviors of others, even when suboptimal.',
    symptoms: [
      'Copying scheduling patterns from colleagues',
      'Reluctance to suggest alternative meeting times',
      'Following group decisions without individual assessment',
      'Maintaining inefficient practices due to group pressure'
    ],
    solutions: [
      'Encourage individual assessment of scheduling needs',
      'Provide examples of effective scheduling practices',
      'Create safe spaces for suggesting improvements',
      'Recognize and reward innovative scheduling approaches'
    ]
  }
]

const psychologicalStrategies = [
  {
    strategy: 'Nudging and Choice Architecture',
    description: 'Design scheduling systems that guide users toward better decisions without restricting choice.',
    implementation: [
      'Set optimal meeting times as default options',
      'Highlight recommended meeting durations',
      'Suggest buffer time between meetings automatically',
      'Provide visual cues for time zone considerations'
    ],
    effectiveness: 'Increases optimal scheduling choices by 45%'
  },
  {
    strategy: 'Gamification and Motivation',
    description: 'Use game-like elements to make scheduling more engaging and rewarding.',
    implementation: [
      'Award points for timely meeting attendance',
      'Create leaderboards for scheduling efficiency',
      'Offer badges for meeting preparation and participation',
      'Implement challenges for reducing meeting conflicts'
    ],
    effectiveness: 'Improves scheduling engagement by 60%'
  },
  {
    strategy: 'Social Influence and Peer Pressure',
    description: 'Leverage social dynamics to encourage positive scheduling behaviors.',
    implementation: [
      'Show team scheduling statistics and benchmarks',
      'Highlight examples of effective scheduling practices',
      'Create peer recognition programs for good scheduling',
      'Use team challenges to improve collective behavior'
    ],
    effectiveness: 'Increases positive behavior adoption by 55%'
  },
  {
    strategy: 'Personalization and Individual Preferences',
    description: 'Adapt scheduling systems to individual preferences and working styles.',
    implementation: [
      'Learn individual peak productivity hours',
      'Respect personal scheduling preferences and constraints',
      'Adapt meeting formats to individual communication styles',
      'Provide personalized scheduling recommendations'
    ],
    effectiveness: 'Improves individual satisfaction by 70%'
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
            
            <Badge variant="secondary" className="mb-4">Psychology</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Psychology of Meeting Scheduling
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Understanding the psychological factors that influence effective meeting scheduling. 
              Learn how cognitive biases, social dynamics, and individual preferences impact scheduling decisions and outcomes.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Enclose.ai Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>December 5, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>7 min read</span>
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
              Meeting scheduling isn't just about finding available time slots—it's deeply influenced by psychological factors 
              that shape how people perceive time, make decisions, and interact with others. Understanding these psychological 
              principles can transform your approach to scheduling and dramatically improve meeting effectiveness.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Hidden Psychology Behind Scheduling</h2>
            <p className="text-gray-600 mb-6">
              Every scheduling decision is influenced by cognitive biases, social dynamics, and individual psychological 
              patterns. These factors often operate below conscious awareness, leading to suboptimal scheduling choices 
              that can impact team productivity and morale.
            </p>

            <p className="text-gray-600 mb-8">
              By understanding and addressing these psychological factors, teams can create more effective scheduling 
              systems that work with human nature rather than against it. This leads to better attendance, more 
              productive meetings, and improved overall team dynamics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Psychological Factors */}
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
              Key Psychological Factors
            </h2>
            <p className="text-lg text-gray-600">
              The psychological elements that influence scheduling behavior
            </p>
          </motion.div>

          <div className="space-y-12">
            {psychologicalFactors.map((factor, index) => (
              <motion.div
                key={factor.factor}
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
                          <factor.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{factor.factor}</h3>
                        <p className="text-lg text-gray-600 mb-6">{factor.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Insights:</h4>
                          <ul className="space-y-2">
                            {factor.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-2 text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-blue-600" />
                            <span className="font-semibold text-blue-800">Impact:</span>
                            <span className="text-blue-700 ml-2">{factor.impact}</span>
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

      {/* Behavioral Patterns */}
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
              Common Behavioral Patterns
            </h2>
            <p className="text-lg text-gray-600">
              Recognizing and addressing problematic scheduling behaviors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {behavioralPatterns.map((pattern, index) => (
              <motion.div
                key={pattern.pattern}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{pattern.pattern}</h3>
                    <p className="text-gray-600 mb-6">{pattern.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Common Symptoms:</h4>
                      <ul className="space-y-2">
                        {pattern.symptoms.map((symptom, symptomIndex) => (
                          <li key={symptomIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-3">Solutions:</h4>
                      <ul className="space-y-2">
                        {pattern.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start gap-2 text-sm text-green-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Psychological Strategies */}
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
              Psychological Strategies for Better Scheduling
            </h2>
            <p className="text-lg text-gray-600">
              Evidence-based approaches to improve scheduling behavior
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {psychologicalStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.strategy}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{strategy.strategy}</h3>
                    <p className="text-gray-600 mb-6">{strategy.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Implementation:</h4>
                      <ul className="space-y-2">
                        {strategy.implementation.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-blue-800">Effectiveness:</span>
                        <span className="text-blue-700">{strategy.effectiveness}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Applications */}
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
              Putting Psychology into Practice
            </h2>
            <p className="text-lg text-gray-600">
              How to apply these psychological insights in your organization
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Start with Assessment</h3>
            <p className="text-gray-600 mb-6">
              Before implementing any psychological strategies, assess your current scheduling patterns and identify 
              the specific psychological factors that are most relevant to your team. Use surveys, interviews, and 
              data analysis to understand how your team currently approaches scheduling.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Implement Gradually</h3>
            <p className="text-gray-600 mb-6">
              Introduce psychological strategies gradually, starting with the most impactful and least disruptive 
              changes. This allows team members to adapt and provides opportunities to measure effectiveness before 
              scaling up.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Measure and Iterate</h3>
            <p className="text-gray-600 mb-6">
              Continuously measure the impact of your psychological interventions on scheduling behavior and meeting 
              effectiveness. Use both quantitative metrics (attendance rates, scheduling conflicts) and qualitative 
              feedback to refine your approach.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Create a Supportive Culture</h3>
            <p className="text-gray-600 mb-8">
              Foster a culture that values effective scheduling and supports team members in developing better 
              scheduling habits. This includes providing training, recognizing good practices, and creating safe 
              spaces for discussing scheduling challenges.
            </p>
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
              Ready to apply psychology to your scheduling?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start implementing these psychological strategies today and see the difference in your team's scheduling behavior
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
