'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Globe, Shield, Zap, Settings, MessageSquare, ArrowRight, Sparkles, CheckCircle, Star, Heart, Download, ExternalLink, Play, Target, Award, Rocket, Lock, Eye, Database, Code, BookOpen, Bell, BarChart3, Smartphone, Laptop, Monitor, Headphones, Mic, Video, Camera, Wifi, Battery, Cpu, HardDrive, MemoryStick, Wrench, Cog, Layers, PieChart, TrendingUp, Activity, Zap as ZapIcon, RefreshCw, Plus, Minus, X, Check, AlertCircle, Info, Lightbulb, Compass, MapPin, Flag, Calendar as CalendarIcon, Clock as ClockIcon, Users as UsersIcon, Globe as GlobeIcon, Shield as ShieldIcon, Zap as ZapIcon2, Settings as SettingsIcon, MessageSquare as MessageSquareIcon, ArrowRight as ArrowRightIcon, Sparkles as SparklesIcon, CheckCircle as CheckCircleIcon, Star as StarIcon, Heart as HeartIcon, Download as DownloadIcon, ExternalLink as ExternalLinkIcon, Play as PlayIcon, Target as TargetIcon, Award as AwardIcon, Rocket as RocketIcon, Lock as LockIcon, Eye as EyeIcon, Database as DatabaseIcon, Code as CodeIcon, BookOpen as BookOpenIcon, Bell as BellIcon, BarChart3 as BarChart3Icon, Smartphone as SmartphoneIcon, Laptop as LaptopIcon, Monitor as MonitorIcon, Headphones as HeadphonesIcon, Mic as MicIcon, Video as VideoIcon, Camera as CameraIcon, Wifi as WifiIcon, Battery as BatteryIcon, Cpu as CpuIcon, HardDrive as HardDriveIcon, MemoryStick as MemoryStickIcon, Wrench as WrenchIcon, Cog as CogIcon, Layers as LayersIcon, PieChart as PieChartIcon, TrendingUp as TrendingUpIcon, Activity as ActivityIcon, RefreshCw as RefreshCwIcon, Plus as PlusIcon, Minus as MinusIcon, X as XIcon, AlertCircle as AlertCircleIcon, Info as InfoIcon, Lightbulb as LightbulbIcon, Compass as CompassIcon, MapPin as MapPinIcon, Flag as FlagIcon } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const roadmapItems = [
  {
    quarter: 'Q1 2024',
    status: 'completed',
    title: 'Core Platform Launch',
    description: 'Launched the foundational scheduling platform with essential features',
    features: [
      'Basic calendar integration (Google, Outlook)',
      'Simple booking page creation',
      'Email notifications',
      'Basic timezone support',
      'User authentication and profiles'
    ],
    metrics: {
      users: '10,000+',
      bookings: '50,000+',
      satisfaction: '4.8/5'
    }
  },
  {
    quarter: 'Q2 2024',
    status: 'completed',
    title: 'Team Collaboration Features',
    description: 'Enhanced the platform with powerful team scheduling capabilities',
    features: [
      'Team scheduling and availability',
      'Group booking management',
      'Shared calendars and resources',
      'Advanced notification system',
      'Mobile app launch (iOS & Android)'
    ],
    metrics: {
      teams: '2,500+',
      mobileUsers: '15,000+',
      satisfaction: '4.9/5'
    }
  },
  {
    quarter: 'Q3 2024',
    status: 'completed',
    title: 'AI-Powered Intelligence',
    description: 'Introduced artificial intelligence to revolutionize scheduling',
    features: [
      'Smart meeting suggestions',
      'Automatic conflict resolution',
      'Intelligent time slot optimization',
      'Natural language scheduling',
      'Predictive availability'
    ],
    metrics: {
      aiBookings: '100,000+',
      timeSaved: '2.5 hours/week',
      satisfaction: '4.9/5'
    }
  },
  {
    quarter: 'Q4 2024',
    status: 'in-progress',
    title: 'Enterprise & Integrations',
    description: 'Expanding enterprise capabilities and third-party integrations',
    features: [
      'Advanced enterprise security (SSO, SAML)',
      'CRM integrations (Salesforce, HubSpot)',
      'Video conferencing integration',
      'Advanced analytics and reporting',
      'Custom workflow automation'
    ],
    metrics: {
      enterpriseCustomers: '500+',
      integrations: '25+',
      satisfaction: '4.8/5'
    }
  },
  {
    quarter: 'Q1 2025',
    status: 'planned',
    title: 'Global Expansion & Localization',
    description: 'Expanding globally with comprehensive localization support',
    features: [
      'Multi-language support (15+ languages)',
      'Regional compliance (GDPR, CCPA)',
      'Local payment methods',
      'Regional data centers',
      'Cultural calendar support'
    ],
    metrics: {
      targetMarkets: '25+',
      languages: '15+',
      expectedUsers: '100,000+'
    }
  },
  {
    quarter: 'Q2 2025',
    status: 'planned',
    title: 'Advanced AI & Automation',
    description: 'Next-generation AI capabilities and intelligent automation',
    features: [
      'Voice-activated scheduling',
      'Predictive meeting insights',
      'Automated follow-up sequences',
      'Smart resource allocation',
      'Advanced conflict prediction'
    ],
    metrics: {
      aiAccuracy: '95%+',
      automationRate: '80%+',
      expectedUsers: '150,000+'
    }
  },
  {
    quarter: 'Q3 2025',
    status: 'planned',
    title: 'Platform Ecosystem',
    description: 'Building a comprehensive ecosystem of scheduling solutions',
    features: [
      'Third-party app marketplace',
      'Custom app development platform',
      'Advanced API capabilities',
      'White-label solutions',
      'Industry-specific templates'
    ],
    metrics: {
      marketplaceApps: '100+',
      developers: '1,000+',
      expectedUsers: '200,000+'
    }
  },
  {
    quarter: 'Q4 2025',
    status: 'planned',
    title: 'Future of Scheduling',
    description: 'Revolutionary features that will define the future of scheduling',
    features: [
      'AR/VR meeting spaces',
      'Blockchain-based scheduling',
      'Quantum computing optimization',
      'Neural interface integration',
      'Predictive life management'
    ],
    metrics: {
      innovationIndex: '95%+',
      futureReadiness: '100%',
      expectedUsers: '500,000+'
    }
  }
]

const upcomingFeatures = [
  {
    category: 'AI & Machine Learning',
    features: [
      {
        name: 'Smart Meeting Insights',
        description: 'AI-powered analysis of meeting patterns and productivity insights',
        status: 'in-development',
        eta: 'Q1 2025'
      },
      {
        name: 'Predictive Scheduling',
        description: 'Machine learning algorithms that predict optimal meeting times',
        status: 'planned',
        eta: 'Q2 2025'
      },
      {
        name: 'Voice Commands',
        description: 'Natural language processing for hands-free scheduling',
        status: 'research',
        eta: 'Q3 2025'
      }
    ]
  },
  {
    category: 'Integrations & APIs',
    features: [
      {
        name: 'Slack Deep Integration',
        description: 'Seamless scheduling directly within Slack workspaces',
        status: 'in-development',
        eta: 'Q1 2025'
      },
      {
        name: 'Microsoft Teams Native',
        description: 'Native integration with Microsoft Teams for enterprise users',
        status: 'planned',
        eta: 'Q2 2025'
      },
      {
        name: 'Zapier Advanced',
        description: 'Advanced automation workflows with Zapier integration',
        status: 'planned',
        eta: 'Q1 2025'
      }
    ]
  },
  {
    category: 'Mobile & Accessibility',
    features: [
      {
        name: 'Offline Mode',
        description: 'Full offline functionality for mobile users',
        status: 'in-development',
        eta: 'Q1 2025'
      },
      {
        name: 'Accessibility Suite',
        description: 'Comprehensive accessibility features for all users',
        status: 'planned',
        eta: 'Q2 2025'
      },
      {
        name: 'Apple Watch App',
        description: 'Native Apple Watch app for quick scheduling',
        status: 'research',
        eta: 'Q3 2025'
      }
    ]
  }
]

const communityRequests = [
  {
    title: 'Recurring Meeting Templates',
    votes: 1247,
    status: 'in-development',
    description: 'Pre-built templates for common recurring meeting types'
  },
  {
    title: 'Bulk Scheduling Operations',
    votes: 892,
    status: 'planned',
    description: 'Schedule multiple meetings at once with bulk operations'
  },
  {
    title: 'Advanced Time Zone Visualization',
    votes: 756,
    status: 'planned',
    description: 'Visual time zone overlap and availability display'
  },
  {
    title: 'Meeting Room Integration',
    votes: 634,
    status: 'research',
    description: 'Integration with physical meeting room booking systems'
  },
  {
    title: 'Custom Branding for Booking Pages',
    votes: 521,
    status: 'in-development',
    description: 'Advanced customization options for booking page branding'
  }
]

export default function RoadmapPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-4">Product Roadmap</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Our Product <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Roadmap</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what we're building next and how we're shaping the future of scheduling. 
              We're committed to continuous innovation and delivering value to our users.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 15, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Timeline */}
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
              Development Timeline
            </h2>
            <p className="text-lg text-gray-600">
              Our journey from concept to the future of scheduling
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={item.quarter}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline dot */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.status === 'completed' ? 'bg-green-500' : 
                    item.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                  }`}>
                    {item.status === 'completed' ? (
                      <CheckCircle className="w-8 h-8 text-white" />
                    ) : item.status === 'in-progress' ? (
                      <RefreshCw className="w-8 h-8 text-white" />
                    ) : (
                      <Clock className="w-8 h-8 text-white" />
                    )}
                  </div>

                  <Card className="flex-1 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{item.quarter}</h3>
                        <Badge 
                          variant={item.status === 'completed' ? 'default' : 
                                  item.status === 'in-progress' ? 'secondary' : 'outline'}
                        >
                          {item.status === 'completed' ? 'Completed' : 
                           item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                        </Badge>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 mb-6">{item.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Key Features</h5>
                          <ul className="space-y-2">
                            {item.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Impact Metrics</h5>
                          <div className="space-y-2">
                            {Object.entries(item.metrics).map(([key, value]) => (
                              <div key={key} className="flex justify-between text-sm">
                                <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                <span className="font-semibold text-gray-900">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
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
              Upcoming Features
            </h2>
            <p className="text-lg text-gray-600">
              Exciting new capabilities we're working on
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingFeatures.map((category, categoryIndex) => (
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
                      <Layers className="w-5 h-5 text-primary" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="border-l-2 border-gray-200 pl-4">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900">{feature.name}</h4>
                            <Badge 
                              variant={feature.status === 'in-development' ? 'default' : 
                                      feature.status === 'planned' ? 'secondary' : 'outline'}
                              className="text-xs"
                            >
                              {feature.status === 'in-development' ? 'In Dev' : 
                               feature.status === 'planned' ? 'Planned' : 'Research'}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                          <p className="text-xs text-gray-500">ETA: {feature.eta}</p>
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

      {/* Community Requests */}
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
              Community Requests
            </h2>
            <p className="text-lg text-gray-600">
              Features requested by our community and their development status
            </p>
          </motion.div>

          <div className="space-y-4">
            {communityRequests.map((request, index) => (
              <motion.div
                key={request.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{request.title}</h3>
                          <Badge 
                            variant={request.status === 'in-development' ? 'default' : 
                                    request.status === 'planned' ? 'secondary' : 'outline'}
                          >
                            {request.status === 'in-development' ? 'In Development' : 
                             request.status === 'planned' ? 'Planned' : 'Research'}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{request.description}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{request.votes}</div>
                          <div className="text-sm text-gray-500">votes</div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Heart className="w-4 h-4 mr-2" />
                          Vote
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Have a feature request?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We'd love to hear your ideas and suggestions for improving Punctual
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <MessageSquare className="w-5 h-5 mr-2" />
                Submit Request
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
