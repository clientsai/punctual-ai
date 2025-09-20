'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { Search, ExternalLink, CheckCircle, Zap, Globe, Shield, Sparkles, ArrowRight, Play, Download, Star, Users, Clock, BarChart3, Heart, Target, Award, TrendingUp } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { INTEGRATIONS } from '@/lib/constants'

const allIntegrations = [
  // Calendar
  { 
    name: 'Google Calendar', 
    category: 'Calendar', 
    description: 'Sync your Google Calendar with real-time updates and conflict resolution',
    logo: 'google',
    status: 'Popular',
    features: ['Real-time sync', 'Conflict resolution', 'Event creation', 'Availability sync'],
    color: 'from-blue-500 to-blue-600',
  },
  { 
    name: 'Microsoft Outlook', 
    category: 'Calendar', 
    description: 'Connect Microsoft Outlook with seamless integration',
    logo: 'microsoft',
    status: 'Popular',
    features: ['Outlook sync', 'Exchange support', 'Meeting creation', 'Availability sync'],
    color: 'from-orange-500 to-orange-600',
  },
  { 
    name: 'Apple Calendar', 
    category: 'Calendar', 
    description: 'Integrate with iCal and Apple Calendar for Mac users',
    logo: 'apple',
    status: 'Available',
    features: ['iCal sync', 'Mac integration', 'iOS support', 'Event sync'],
    color: 'from-gray-500 to-gray-600',
  },
  { 
    name: 'Office 365', 
    category: 'Calendar', 
    description: 'Full Office 365 integration with advanced features',
    logo: 'office365',
    status: 'Enterprise',
    features: ['Office 365 sync', 'Teams integration', 'SharePoint support', 'Advanced security'],
    color: 'from-blue-600 to-blue-700',
  },

  // Video
  { 
    name: 'Zoom', 
    category: 'Video', 
    description: 'Auto-create Zoom meetings with custom settings',
    logo: 'zoom',
    status: 'Essential',
    features: ['Auto-creation', 'Custom settings', 'Waiting rooms', 'Recording options'],
    color: 'from-blue-500 to-blue-600',
  },
  { 
    name: 'Google Meet', 
    category: 'Video', 
    description: 'Generate Google Meet links automatically',
    logo: 'google',
    status: 'Popular',
    features: ['Auto-links', 'Calendar integration', 'Screen sharing', 'Recording'],
    color: 'from-green-500 to-green-600',
  },
  { 
    name: 'Microsoft Teams', 
    category: 'Video', 
    description: 'Schedule Teams calls with full integration',
    logo: 'microsoft',
    status: 'Popular',
    features: ['Teams calls', 'Channel integration', 'Meeting rooms', 'Recording'],
    color: 'from-purple-500 to-purple-600',
  },
  { 
    name: 'Webex', 
    category: 'Video', 
    description: 'Cisco Webex integration for enterprise meetings',
    logo: 'webex',
    status: 'Enterprise',
    features: ['Webex meetings', 'Enterprise features', 'Security compliance', 'Recording'],
    color: 'from-indigo-500 to-indigo-600',
  },

  // CRM
  { 
    name: 'Salesforce', 
    category: 'CRM', 
    description: 'Sync with Salesforce CRM and automate lead management',
    logo: 'salesforce',
    status: 'Enterprise',
    features: ['Lead sync', 'Opportunity tracking', 'Custom fields', 'Automation'],
    color: 'from-blue-500 to-blue-600',
  },
  { 
    name: 'HubSpot', 
    category: 'CRM', 
    description: 'Connect HubSpot contacts and automate workflows',
    logo: 'hubspot',
    status: 'Popular',
    features: ['Contact sync', 'Deal tracking', 'Workflow automation', 'Reporting'],
    color: 'from-orange-500 to-orange-600',
  },
  { 
    name: 'Pipedrive', 
    category: 'CRM', 
    description: 'Pipedrive integration for sales pipeline management',
    logo: 'pipedrive',
    status: 'Available',
    features: ['Pipeline sync', 'Deal tracking', 'Activity logging', 'Custom fields'],
    color: 'from-green-500 to-green-600',
  },
  { 
    name: 'Close', 
    category: 'CRM', 
    description: 'Close.com sync for sales team efficiency',
    logo: 'close',
    status: 'Available',
    features: ['Lead sync', 'Call logging', 'Follow-up automation', 'Reporting'],
    color: 'from-purple-500 to-purple-600',
  },

  // Productivity
  { 
    name: 'Slack', 
    category: 'Productivity', 
    description: 'Get Slack notifications and team updates',
    logo: 'slack',
    status: 'Popular',
    features: ['Notifications', 'Team updates', 'Channel integration', 'Bot commands'],
    color: 'from-purple-500 to-purple-600',
  },
  { 
    name: 'Notion', 
    category: 'Productivity', 
    description: 'Log meetings and notes in Notion automatically',
    logo: 'notion',
    status: 'Available',
    features: ['Meeting logs', 'Note creation', 'Database sync', 'Templates'],
    color: 'from-gray-500 to-gray-600',
  },
  { 
    name: 'Linear', 
    category: 'Productivity', 
    description: 'Create Linear issues and track project progress',
    logo: 'linear',
    status: 'Available',
    features: ['Issue creation', 'Project tracking', 'Team sync', 'Automation'],
    color: 'from-blue-500 to-blue-600',
  },
  { 
    name: 'Asana', 
    category: 'Productivity', 
    description: 'Sync with Asana tasks and project management',
    logo: 'asana',
    status: 'Available',
    features: ['Task creation', 'Project sync', 'Team collaboration', 'Deadline tracking'],
    color: 'from-orange-500 to-orange-600',
  },

  // Payment
  { 
    name: 'Stripe', 
    category: 'Payment', 
    description: 'Collect payments and process transactions',
    logo: 'stripe',
    status: 'Popular',
    features: ['Payment processing', 'Subscription billing', 'Invoice generation', 'Tax handling'],
    color: 'from-purple-500 to-purple-600',
  },
  { 
    name: 'PayPal', 
    category: 'Payment', 
    description: 'PayPal payments and subscription management',
    logo: 'paypal',
    status: 'Available',
    features: ['PayPal payments', 'Subscription billing', 'Invoice generation', 'Refund handling'],
    color: 'from-blue-500 to-blue-600',
  },

  // Analytics
  { 
    name: 'Google Analytics', 
    category: 'Analytics', 
    description: 'Track conversions and user behavior',
    logo: 'google',
    status: 'Popular',
    features: ['Conversion tracking', 'User behavior', 'Custom events', 'Reporting'],
    color: 'from-orange-500 to-orange-600',
  },
  { 
    name: 'Segment', 
    category: 'Analytics', 
    description: 'Send events to Segment for advanced analytics',
    logo: 'segment',
    status: 'Available',
    features: ['Event tracking', 'Data pipeline', 'Custom events', 'Integration hub'],
    color: 'from-blue-500 to-blue-600',
  },

  // Automation
  { 
    name: 'Zapier', 
    category: 'Automation', 
    description: 'Connect 5000+ apps with automated workflows',
    logo: 'zapier',
    status: 'Popular',
    features: ['5000+ apps', 'Automated workflows', 'Custom triggers', 'Multi-step zaps'],
    color: 'from-orange-500 to-orange-600',
  },
  { 
    name: 'Make', 
    category: 'Automation', 
    description: 'Advanced automation with visual workflow builder',
    logo: 'make',
    status: 'Available',
    features: ['Visual workflows', 'Advanced automation', 'Custom logic', 'API integration'],
    color: 'from-purple-500 to-purple-600',
  },

  // Developer
  { 
    name: 'Webhooks', 
    category: 'Developer', 
    description: 'Custom webhooks for real-time integrations',
    logo: 'webhook',
    status: 'Developer',
    features: ['Real-time events', 'Custom endpoints', 'Payload customization', 'Retry logic'],
    color: 'from-green-500 to-green-600',
  },
  { 
    name: 'REST API', 
    category: 'Developer', 
    description: 'Full RESTful API access for custom integrations',
    logo: 'api',
    status: 'Developer',
    features: ['REST API', 'Authentication', 'Rate limiting', 'Documentation'],
    color: 'from-indigo-500 to-indigo-600',
  },
]

const categories = [
  { name: 'All', count: allIntegrations.length, icon: Globe },
  { name: 'Calendar', count: allIntegrations.filter(i => i.category === 'Calendar').length, icon: Clock },
  { name: 'Video', count: allIntegrations.filter(i => i.category === 'Video').length, icon: Play },
  { name: 'CRM', count: allIntegrations.filter(i => i.category === 'CRM').length, icon: Users },
  { name: 'Productivity', count: allIntegrations.filter(i => i.category === 'Productivity').length, icon: Zap },
  { name: 'Payment', count: allIntegrations.filter(i => i.category === 'Payment').length, icon: Heart },
  { name: 'Analytics', count: allIntegrations.filter(i => i.category === 'Analytics').length, icon: BarChart3 },
  { name: 'Automation', count: allIntegrations.filter(i => i.category === 'Automation').length, icon: Target },
  { name: 'Developer', count: allIntegrations.filter(i => i.category === 'Developer').length, icon: Award },
]

const benefits = [
  {
    title: 'Seamless Workflow',
    description: 'Connect all your tools in one place for a unified workflow experience',
    icon: Zap,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Real-time Sync',
    description: 'Keep all your data synchronized across platforms in real-time',
    icon: Clock,
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-level security with SOC 2 compliance and data encryption',
    icon: Shield,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Global Scale',
    description: 'Support for 150+ countries with multi-language and timezone support',
    icon: Globe,
    color: 'from-orange-500 to-orange-600',
  },
]

export default function IntegrationsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredIntegrations = allIntegrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      {/* Hero Section with Enhanced Design */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        {/* Animated Background Elements */}
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
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Integrations
              </Badge>
            </motion.div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Connect Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Entire Stack</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Punctual works seamlessly with 100+ tools you already use. Connect your calendar, 
              video conferencing, CRM, and more for a unified workflow experience that saves time 
              and eliminates context switching.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-12">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories with Enhanced Design */}
      <section className="py-8 bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
                <Badge 
                  variant={selectedCategory === category.name ? 'secondary' : 'outline'}
                  className="text-xs"
                >
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Integrations Matter</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamless integrations eliminate context switching and create a unified workflow experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid with Enhanced Design */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-bold text-gray-900">
                {selectedCategory === 'All' ? 'All Integrations' : `${selectedCategory} Integrations`}
              </h2>
              <div className="text-sm text-gray-500">
                {filteredIntegrations.length} integration{filteredIntegrations.length !== 1 ? 's' : ''} found
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredIntegrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.3) }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${integration.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                          <span className="text-lg font-bold text-gray-900">
                            {integration.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                      </div>
                      <Badge 
                        variant={integration.status === 'Popular' || integration.status === 'Essential' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {integration.status}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {integration.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {integration.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {integration.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{feature}</span>
                        </div>
                      ))}
                      {integration.features.length > 3 && (
                        <div className="text-xs text-gray-500">
                          +{integration.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <Badge variant="outline" className="text-xs">
                      {integration.category}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No integrations found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or category filter.</p>
              <Button onClick={() => { setSearchQuery(''); setSelectedCategory('All') }}>
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Request Integration Section with Enhanced Design */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Zap className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Don't See Your Tool?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We're constantly adding new integrations based on user feedback. 
              Let us know what you need and we'll prioritize it for our next release.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Driven</h3>
                <p className="text-gray-600 text-sm">We prioritize integrations based on user requests</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Development</h3>
                <p className="text-gray-600 text-sm">New integrations are typically added within 2-4 weeks</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assured</h3>
                <p className="text-gray-600 text-sm">All integrations are thoroughly tested before release</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark">
                Request Integration
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Roadmap
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Enhanced Design */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-dark to-accent text-white relative overflow-hidden">
        {/* Background Pattern */}
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
              Ready to Connect Your Tools?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Start integrating Punctual with your favorite tools today. 
              Set up your first integration in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="https://app.punctual.ai/register">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="https://punctual.ai/demo">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}