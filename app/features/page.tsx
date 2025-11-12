'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, Users, Globe, Shield, Zap, Settings, MessageSquare, ArrowRight, Sparkles, CheckCircle, Star, Heart, Download, ExternalLink, Play, Target, Award, Rocket, Lock, Eye, Database } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const coreFeatures = [
  {
    title: 'Pre-Meeting Intelligence Briefs',
    description: 'Know who you\'re talking to before you say a word',
    details: 'Before every meeting, receive a detailed psychological profile analyzing communication style, decision-making patterns, personality type, and conversation triggers. Never walk into a meeting blind again—and never say the wrong thing.',
    icon: Eye,
    color: 'from-blue-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
    benefits: [
      'Personality and communication style analysis',
      'Decision-making pattern mapping',
      'Conversation trigger identification',
      'Historical interaction insights',
    ],
  },
  {
    title: 'What to Say (and NOT to Say)',
    description: 'Conversation roadmaps that prevent costly mistakes',
    details: 'Get specific talking points that resonate with each person, plus explicit warnings about topics to avoid, communication styles that backfire, and phrases that kill deals. The difference between closing and losing often comes down to one wrong sentence.',
    icon: MessageSquare,
    color: 'from-green-500 to-green-600',
    gradient: 'bg-gradient-to-br from-green-50 to-green-100',
    benefits: [
      'Recommended talking points and angles',
      'Topics and phrases to avoid',
      'Communication style preferences',
      'Objection handling strategies',
    ],
  },
  {
    title: 'Deep Contact Research',
    description: 'Intelligence pulled from everywhere they exist online',
    details: 'Punctual automatically researches your meeting attendees across LinkedIn, company websites, social media, news mentions, and your CRM. Every data point becomes a psychological insight that helps you connect faster and build rapport instantly.',
    icon: Database,
    color: 'from-purple-500 to-purple-600',
    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
    benefits: [
      'LinkedIn profile analysis',
      'Company and role context',
      'Social media sentiment analysis',
      'CRM history integration',
    ],
  },
  {
    title: 'Team Intelligence Sharing',
    description: 'When one person learns, everyone benefits',
    details: 'Share psychological insights and conversation intelligence across your entire team. If someone discovers what works (or what to avoid) with a client, that knowledge becomes institutional. Stop losing deals because someone didn\'t know better.',
    icon: Users,
    color: 'from-orange-500 to-orange-600',
    gradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
    benefits: [
      'Shared contact intelligence database',
      'Team conversation playbooks',
      'Collective learning and insights',
      'Mistake prevention alerts',
    ],
  },
]

const advancedFeatures = [
  {
    category: 'Psychological Analysis',
    features: [
      {
        name: 'Personality Profiling',
        description: 'DISC, Myers-Briggs style mapping and behavioral pattern analysis',
        icon: Eye,
        color: 'from-blue-500 to-blue-600',
      },
      {
        name: 'Communication Style Detection',
        description: 'Identify if they\'re direct, analytical, expressive, or amiable communicators',
        icon: MessageSquare,
        color: 'from-green-500 to-green-600',
      },
      {
        name: 'Decision-Making Patterns',
        description: 'Understand how they make decisions: data-driven, consensus-based, or intuitive',
        icon: Target,
        color: 'from-purple-500 to-purple-600',
      },
      {
        name: 'Objection Prediction',
        description: 'AI-powered analysis of likely objections and how to address them',
        icon: Shield,
        color: 'from-orange-500 to-orange-600',
      },
    ],
  },
  {
    category: 'Contact Intelligence',
    features: [
      {
        name: 'LinkedIn Deep Dive',
        description: 'Analyze career trajectory, connections, interests, and engagement patterns',
        icon: Users,
        color: 'from-blue-500 to-blue-600',
      },
      {
        name: 'Social Sentiment Analysis',
        description: 'What they care about, post about, and respond to online',
        icon: Heart,
        color: 'from-green-500 to-green-600',
      },
      {
        name: 'Company Context',
        description: 'Understand their company culture, recent news, and strategic priorities',
        icon: Globe,
        color: 'from-purple-500 to-purple-600',
      },
      {
        name: 'Relationship Mapping',
        description: 'See connections between your network and theirs',
        icon: Target,
        color: 'from-orange-500 to-orange-600',
      },
    ],
  },
  {
    category: 'Conversation Intelligence',
    features: [
      {
        name: 'Talking Point Generation',
        description: 'AI-suggested conversation starters that build rapport instantly',
        icon: Sparkles,
        color: 'from-blue-500 to-blue-600',
      },
      {
        name: 'Red Flag Alerts',
        description: 'Explicit warnings about topics, phrases, and approaches to avoid',
        icon: Clock,
        color: 'from-green-500 to-green-600',
      },
      {
        name: 'Rapport Building Strategy',
        description: 'Specific tactics to connect based on shared interests and values',
        icon: Database,
        color: 'from-purple-500 to-purple-600',
      },
      {
        name: 'Follow-Up Recommendations',
        description: 'What to say after the meeting based on how it went',
        icon: Settings,
        color: 'from-orange-500 to-orange-600',
      },
    ],
  },
  {
    category: 'Team Intelligence',
    features: [
      {
        name: 'Shared Contact Database',
        description: 'Centralized intelligence repository accessible to your entire team',
        icon: Database,
        color: 'from-blue-500 to-blue-600',
      },
      {
        name: 'Conversation Playbooks',
        description: 'Document what works (and what doesn\'t) for each contact',
        icon: Zap,
        color: 'from-green-500 to-green-600',
      },
      {
        name: 'Mistake Prevention System',
        description: 'Alert team members before they repeat past mistakes',
        icon: Settings,
        color: 'from-purple-500 to-purple-600',
      },
      {
        name: 'Performance Analytics',
        description: 'Track which approaches win deals and which kill them',
        icon: Download,
        color: 'from-orange-500 to-orange-600',
      },
    ],
  },
]

const useCases = [
  {
    title: 'Sales Teams',
    description: 'Close more deals by understanding buyer psychology',
    icon: Target,
    color: 'from-blue-500 to-blue-600',
    features: [
      'Buyer personality and objection analysis',
      'Decision-maker communication mapping',
      'Deal-killing phrase alerts',
      'Competitive intelligence integration',
    ],
  },
  {
    title: 'Recruiting Teams',
    description: 'Land top candidates by understanding what motivates them',
    icon: Users,
    color: 'from-green-500 to-green-600',
    features: [
      'Candidate motivation and values analysis',
      'Career trajectory pattern recognition',
      'Interview approach recommendations',
      'Offer presentation strategy',
    ],
  },
  {
    title: 'Consultants',
    description: 'Command premium rates with unmatched client preparation',
    icon: Globe,
    color: 'from-purple-500 to-purple-600',
    features: [
      'Client psychology and communication preferences',
      'Stakeholder influence mapping',
      'Objection handling playbooks',
      'Relationship development roadmaps',
    ],
  },
  {
    title: 'Executives',
    description: 'Make every high-stakes conversation count',
    icon: Award,
    color: 'from-orange-500 to-orange-600',
    features: [
      'Board member and investor profiling',
      'Partnership negotiation intelligence',
      'Crisis communication preparation',
      'Media and PR conversation strategy',
    ],
  },
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP Sales',
    company: 'Enterprise SaaS',
    quote: 'We stopped losing deals because someone said the wrong thing. The pre-meeting briefs are like having a psychologist prep you before every call. Our close rate jumped 34%.',
    rating: 5,
    feature: 'Intelligence Briefs',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Executive Recruiter',
    company: 'TalentFirst',
    quote: 'I used to research candidates for hours. Now Punctual tells me what motivates them, what to emphasize in my pitch, and what red flags to avoid. I close offers faster than ever.',
    rating: 5,
    feature: 'Psychological Profiling',
  },
  {
    name: 'James Patterson',
    role: 'Management Consultant',
    company: 'Independent',
    quote: 'My clients think I\'m psychic. I walk in knowing their communication style, decision-making process, and exactly how to present my recommendations. It\'s unfair—but it works.',
    rating: 5,
    feature: 'Communication Mapping',
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
              Psychological Intelligence
            </Badge>

            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Never Say the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Wrong Thing Again</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              While other tools just book the time slot, Punctual researches who you\'re meeting, analyzes their psychology, and tells you exactly what to say—and what never to say. Walk into every conversation prepared, confident, and armed with intelligence your competition doesn\'t have.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://app.punctual.ai/register">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark">
                  <Rocket className="w-4 h-4 mr-2" />
                  Get Your First Brief
                </Button>
              </Link>
              <Link href="https://punctual.ai/demo">
                <Button variant="outline" size="lg">
                  <Play className="w-4 h-4 mr-2" />
                  See Intelligence in Action
                </Button>
              </Link>
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
              Intelligence <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">That Wins Meetings</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The psychological analysis and pre-meeting intelligence that transforms how you communicate
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
              Every Detail <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Matters</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From psychological profiling to conversation analytics—the complete intelligence platform for meeting preparation
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
              Intelligence for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Every Profession</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how professionals use psychological intelligence to win more conversations
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
              Real People, <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Real Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professionals who stopped guessing and started winning
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
              Stop Embarrassing Yourself
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Get your first intelligence brief in 2 minutes. See exactly what you should say—and what you should never say—before your next meeting.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="https://app.punctual.ai/register">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Get First Brief Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="https://punctual.ai/demo">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                  <Play className="w-5 h-5 mr-2" />
                  See Sample Brief
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}