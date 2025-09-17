'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Search, BookOpen, Video, MessageCircle, ChevronRight, Clock, CheckCircle, Star, Zap, Users, Shield, Globe, Award, TrendingUp, Sparkles, Play, Download, ExternalLink } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const helpCategories = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    description: 'Learn the basics of Punctual and set up your first booking page with our comprehensive guides',
    articles: 12,
    color: 'from-blue-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
    features: ['Setup Wizard', 'First Booking', 'Calendar Sync', 'Basic Settings'],
  },
  {
    icon: Zap,
    title: 'Campaigns',
    description: 'Create and manage marketing campaigns, email sequences, and automated workflows',
    articles: 8,
    color: 'from-purple-500 to-purple-600',
    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
    features: ['Email Campaigns', 'Automation', 'Templates', 'Analytics'],
  },
  {
    icon: TrendingUp,
    title: 'Analytics',
    description: 'Track performance, measure success, and optimize your scheduling with detailed insights',
    articles: 10,
    color: 'from-green-500 to-green-600',
    gradient: 'bg-gradient-to-br from-green-50 to-green-100',
    features: ['Performance Metrics', 'Reports', 'Insights', 'Export Data'],
  },
  {
    icon: Shield,
    title: 'Billing',
    description: 'Manage your subscription, payment methods, and billing information',
    articles: 6,
    color: 'from-orange-500 to-orange-600',
    gradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
    features: ['Subscription Plans', 'Payment Methods', 'Invoices', 'Upgrades'],
  },
  {
    icon: MessageCircle,
    title: 'Troubleshooting',
    description: 'Common issues and how to resolve them quickly with detailed solutions and workarounds',
    articles: 15,
    color: 'from-red-500 to-red-600',
    gradient: 'bg-gradient-to-br from-red-50 to-red-100',
    features: ['Error Fixes', 'Sync Issues', 'Integration Problems', 'Performance'],
  },
  {
    icon: Clock,
    title: 'Advanced Features',
    description: 'Master advanced scheduling and team management features for power users',
    articles: 20,
    color: 'from-indigo-500 to-indigo-600',
    gradient: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
    features: ['API Integration', 'Custom Workflows', 'Enterprise Features', 'Automation'],
  },
]

const popularArticles = [
  {
    title: 'How to connect your Google Calendar',
    description: 'Step-by-step guide to syncing your Google Calendar with Punctual for seamless scheduling',
    category: 'Getting Started',
    readTime: '3 min read',
    helpful: 95,
    views: 1250,
    difficulty: 'Beginner',
    lastUpdated: '2 days ago',
  },
  {
    title: 'Creating your first email campaign',
    description: 'Learn how to set up automated email sequences and marketing campaigns to boost engagement',
    category: 'Campaigns',
    readTime: '5 min read',
    helpful: 92,
    views: 980,
    difficulty: 'Beginner',
    lastUpdated: '1 week ago',
  },
  {
    title: 'Understanding your analytics dashboard',
    description: 'Navigate through key metrics, reports, and insights to optimize your scheduling performance',
    category: 'Analytics',
    readTime: '4 min read',
    helpful: 88,
    views: 1100,
    difficulty: 'Beginner',
    lastUpdated: '3 days ago',
  },
  {
    title: 'Managing your subscription and billing',
    description: 'Update payment methods, view invoices, and manage your Punctual subscription settings',
    category: 'Billing',
    readTime: '3 min read',
    helpful: 90,
    views: 850,
    difficulty: 'Beginner',
    lastUpdated: '5 days ago',
  },
  {
    title: 'Setting up team scheduling',
    description: 'Configure round-robin and collective scheduling for your team with advanced options',
    category: 'Advanced Features',
    readTime: '6 min read',
    helpful: 87,
    views: 750,
    difficulty: 'Intermediate',
    lastUpdated: '1 week ago',
  },
  {
    title: 'Troubleshooting calendar sync issues',
    description: 'Common calendar synchronization problems and how to resolve them quickly',
    category: 'Troubleshooting',
    readTime: '4 min read',
    helpful: 94,
    views: 900,
    difficulty: 'Intermediate',
    lastUpdated: '4 days ago',
  },
  {
    title: 'Customizing your booking page',
    description: 'Personalize your booking page with your brand colors, logo, and custom messaging',
    category: 'Getting Started',
    readTime: '4 min read',
    helpful: 88,
    views: 1100,
    difficulty: 'Beginner',
    lastUpdated: '3 days ago',
  },
  {
    title: 'Setting up automated workflows',
    description: 'Create powerful automation rules to streamline your scheduling and follow-up processes',
    category: 'Campaigns',
    readTime: '7 min read',
    helpful: 91,
    views: 720,
    difficulty: 'Intermediate',
    lastUpdated: '2 days ago',
  },
  {
    title: 'Exporting and sharing reports',
    description: 'Learn how to export your analytics data and share insights with your team',
    category: 'Analytics',
    readTime: '3 min read',
    helpful: 89,
    views: 680,
    difficulty: 'Beginner',
    lastUpdated: '1 week ago',
  },
  {
    title: 'Upgrading your plan',
    description: 'Step-by-step guide to upgrading your Punctual plan and accessing new features',
    category: 'Billing',
    readTime: '2 min read',
    helpful: 93,
    views: 540,
    difficulty: 'Beginner',
    lastUpdated: '5 days ago',
  },
]


const supportStats = [
  { icon: Users, label: 'Support Team', value: '25+ Experts', color: 'text-blue-600' },
  { icon: Clock, label: 'Response Time', value: '< 2 Hours', color: 'text-green-600' },
  { icon: Shield, label: 'Satisfaction', value: '99.2%', color: 'text-purple-600' },
  { icon: Globe, label: 'Languages', value: '12+ Supported', color: 'text-orange-600' },
]

const faqs = [
  {
    question: 'How do I cancel or reschedule a meeting?',
    answer: 'You can cancel or reschedule meetings directly from the confirmation email or by logging into your Punctual dashboard. The system will automatically notify all participants of any changes and update their calendars accordingly.',
  },
  {
    question: 'Can I use Punctual with multiple calendars?',
    answer: 'Yes! Punctual supports multiple calendar connections. You can sync Google Calendar, Outlook, Apple Calendar, and other calendar providers simultaneously. The system will check all connected calendars to prevent double-booking.',
  },
  {
    question: 'How do I set up buffer time between meetings?',
    answer: 'In your availability settings, you can add buffer time before and after meetings. This ensures you have adequate time to prepare and prevents back-to-back scheduling. You can set different buffer times for different meeting types.',
  },
  {
    question: 'What happens if someone books outside my available hours?',
    answer: 'Punctual only shows your available time slots to bookers. If you\'re not available, those times won\'t appear in the booking interface. You can also set up automatic rejection for bookings outside your preferred hours.',
  },
  {
    question: 'Can I customize the booking confirmation email?',
    answer: 'Absolutely! You can customize the email templates, add your logo, and include additional information like meeting preparation notes, location details, or special instructions for attendees.',
  },
  {
    question: 'How do I handle different time zones for international clients?',
    answer: 'Punctual automatically detects the booker\'s time zone and converts times accordingly. You can also set your default time zone in settings and enable automatic time zone detection for a seamless experience.',
  },
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredArticles = popularArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      {/* Hero Section with Animated Background */}
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
                Help Center
              </Badge>
            </motion.div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              How can we <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">help you?</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Find answers, watch tutorials, and get the most out of Punctual with our comprehensive help resources. 
              Our expert team is here to guide you every step of the way.
            </p>
            
            {/* Support Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12"
            >
              {supportStats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-2`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories with Enhanced Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the help you need organized by topic and difficulty level
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className={`h-full ${category.gradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 cursor-pointer`}>
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-5 rounded-full -translate-y-16 translate-x-16`} />
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                    
                    <div className="space-y-3">
                      <div className="text-3xl font-bold text-primary">{category.articles}</div>
                      <div className="text-sm text-gray-500">Articles</div>
                      
                      <div className="flex flex-wrap gap-1 justify-center">
                        {category.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Popular Articles with Enhanced Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-bold text-gray-900">Popular Articles</h2>
              <div className="text-sm text-gray-500">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:border-primary/20 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                          <Badge 
                            variant={article.difficulty === 'Beginner' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {article.difficulty}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          {article.helpful}%
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {article.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-4">
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <span>{article.views} views</span>
                          <span>•</span>
                          <span>Updated {article.lastUpdated}</span>
                        </div>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="group-hover:bg-primary group-hover:text-white transition-all duration-300"
                        onClick={() => {
                          if (article.title === 'How to connect your Google Calendar') {
                            window.location.href = '/help/articles/connect-google-calendar'
                          } else if (article.title === 'Creating your first email campaign') {
                            window.location.href = '/help/articles/creating-email-campaigns'
                          } else if (article.title === 'Understanding your analytics dashboard') {
                            window.location.href = '/help/articles/understanding-analytics-dashboard'
                          }
                        }}
                      >
                        Read Article
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section with Enhanced Design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about Punctual
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                        <span className="text-primary font-bold text-sm">Q</span>
                      </span>
                      {faq.question}
                    </h3>
                    <div className="ml-12">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support with Enhanced Design */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-accent text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-pattern"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Still need help?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Our support team is here to help you succeed. Get in touch with our experts for personalized assistance.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-sm opacity-80 mb-4">Get instant help from our support team</p>
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Start Chat
                </Button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Schedule a Call</h3>
                <p className="text-sm opacity-80 mb-4">Book a one-on-one session with our experts</p>
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Book Call
                </Button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Download Resources</h3>
                <p className="text-sm opacity-80 mb-4">Access our comprehensive guides and templates</p>
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Download
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}