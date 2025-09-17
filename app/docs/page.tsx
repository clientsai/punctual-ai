'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Search, BookOpen, ChevronRight, Clock, Star, CheckCircle, ArrowRight, Filter, SortAsc, Download, Share2, Bookmark, Eye, ThumbsUp, MessageCircle, Zap, Shield, TrendingUp, Users, Settings, Calendar, Mail, Globe, Code, FileText, Video, Play, ExternalLink } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const docCategories = [
  {
    name: 'Getting Started',
    description: 'Everything you need to know to get up and running with Punctual',
    icon: BookOpen,
    color: 'from-blue-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
    articles: 24,
    featured: true,
  },
  {
    name: 'User Guide',
    description: 'Comprehensive guides for all Punctual features and functionality',
    icon: Users,
    color: 'from-green-500 to-green-600',
    gradient: 'bg-gradient-to-br from-green-50 to-green-100',
    articles: 67,
    featured: true,
  },
  {
    name: 'Integrations',
    description: 'Connect Punctual with your favorite tools and services',
    icon: Zap,
    color: 'from-purple-500 to-purple-600',
    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
    articles: 45,
    featured: false,
  },
  {
    name: 'API Reference',
    description: 'Complete API documentation for developers and power users',
    icon: Code,
    color: 'from-orange-500 to-orange-600',
    gradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
    articles: 89,
    featured: false,
  },
  {
    name: 'Troubleshooting',
    description: 'Common issues, solutions, and troubleshooting guides',
    icon: Shield,
    color: 'from-red-500 to-red-600',
    gradient: 'bg-gradient-to-br from-red-50 to-red-100',
    articles: 32,
    featured: false,
  },
  {
    name: 'Best Practices',
    description: 'Tips, tricks, and best practices for optimal scheduling',
    icon: TrendingUp,
    color: 'from-pink-500 to-pink-600',
    gradient: 'bg-gradient-to-br from-pink-50 to-pink-100',
    articles: 18,
    featured: false,
  },
]

const featuredArticles = [
  {
    id: 1,
    title: 'Complete Setup Guide',
    description: 'Step-by-step instructions to set up your Punctual account and start scheduling',
    category: 'Getting Started',
    readTime: '8 min read',
    difficulty: 'Beginner',
    helpful: 98,
    views: 15420,
    lastUpdated: '2 days ago',
    tags: ['setup', 'onboarding', 'basics'],
    featured: true,
  },
  {
    id: 2,
    title: 'Calendar Integration Guide',
    description: 'Connect Google Calendar, Outlook, and other calendar providers seamlessly',
    category: 'Integrations',
    readTime: '12 min read',
    difficulty: 'Intermediate',
    helpful: 95,
    views: 12850,
    lastUpdated: '1 week ago',
    tags: ['calendar', 'sync', 'integration'],
    featured: true,
  },
  {
    id: 3,
    title: 'Team Scheduling Best Practices',
    description: 'Learn how to efficiently manage team schedules and avoid conflicts',
    category: 'Best Practices',
    readTime: '15 min read',
    difficulty: 'Advanced',
    helpful: 92,
    views: 9870,
    lastUpdated: '3 days ago',
    tags: ['team', 'scheduling', 'management'],
    featured: true,
  },
  {
    id: 4,
    title: 'API Authentication & Setup',
    description: 'Complete guide to authenticating and using the Punctual API',
    category: 'API Reference',
    readTime: '20 min read',
    difficulty: 'Advanced',
    helpful: 89,
    views: 7650,
    lastUpdated: '5 days ago',
    tags: ['api', 'authentication', 'development'],
    featured: true,
  },
]

const quickStartGuides = [
  {
    title: 'First Booking Page',
    description: 'Create your first booking page in under 5 minutes',
    icon: Calendar,
    time: '5 min',
    difficulty: 'Beginner',
  },
  {
    title: 'Email Notifications',
    description: 'Set up automated email confirmations and reminders',
    icon: Mail,
    time: '3 min',
    difficulty: 'Beginner',
  },
  {
    title: 'Team Member Setup',
    description: 'Add team members and configure their availability',
    icon: Users,
    time: '7 min',
    difficulty: 'Intermediate',
  },
  {
    title: 'Custom Branding',
    description: 'Personalize your booking pages with your brand',
    icon: Settings,
    time: '4 min',
    difficulty: 'Beginner',
  },
  {
    title: 'Webhook Configuration',
    description: 'Set up webhooks for real-time event notifications',
    icon: Code,
    time: '10 min',
    difficulty: 'Advanced',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Understand your scheduling metrics and insights',
    icon: TrendingUp,
    time: '6 min',
    difficulty: 'Intermediate',
  },
]

const allArticles = [
  {
    id: 1,
    title: 'Complete Setup Guide',
    description: 'Step-by-step instructions to set up your Punctual account and start scheduling',
    category: 'Getting Started',
    readTime: '8 min read',
    difficulty: 'Beginner',
    helpful: 98,
    views: 15420,
    lastUpdated: '2 days ago',
    tags: ['setup', 'onboarding', 'basics'],
  },
  {
    id: 2,
    title: 'Calendar Integration Guide',
    description: 'Connect Google Calendar, Outlook, and other calendar providers seamlessly',
    category: 'Integrations',
    readTime: '12 min read',
    difficulty: 'Intermediate',
    helpful: 95,
    views: 12850,
    lastUpdated: '1 week ago',
    tags: ['calendar', 'sync', 'integration'],
  },
  {
    id: 3,
    title: 'Team Scheduling Best Practices',
    description: 'Learn how to efficiently manage team schedules and avoid conflicts',
    category: 'Best Practices',
    readTime: '15 min read',
    difficulty: 'Advanced',
    helpful: 92,
    views: 9870,
    lastUpdated: '3 days ago',
    tags: ['team', 'scheduling', 'management'],
  },
  {
    id: 4,
    title: 'API Authentication & Setup',
    description: 'Complete guide to authenticating and using the Punctual API',
    category: 'API Reference',
    readTime: '20 min read',
    difficulty: 'Advanced',
    helpful: 89,
    views: 7650,
    lastUpdated: '5 days ago',
    tags: ['api', 'authentication', 'development'],
  },
  {
    id: 5,
    title: 'Creating Custom Booking Forms',
    description: 'Design custom forms to collect information from your clients',
    category: 'User Guide',
    readTime: '10 min read',
    difficulty: 'Intermediate',
    helpful: 87,
    views: 6540,
    lastUpdated: '1 week ago',
    tags: ['forms', 'customization', 'booking'],
  },
  {
    id: 6,
    title: 'Managing Time Zones',
    description: 'Handle multiple time zones for global team scheduling',
    category: 'User Guide',
    readTime: '6 min read',
    difficulty: 'Beginner',
    helpful: 94,
    views: 8230,
    lastUpdated: '4 days ago',
    tags: ['timezone', 'global', 'scheduling'],
  },
  {
    id: 7,
    title: 'Troubleshooting Sync Issues',
    description: 'Common calendar sync problems and their solutions',
    category: 'Troubleshooting',
    readTime: '8 min read',
    difficulty: 'Intermediate',
    helpful: 91,
    views: 5420,
    lastUpdated: '2 days ago',
    tags: ['sync', 'troubleshooting', 'calendar'],
  },
  {
    id: 8,
    title: 'Webhook Events Reference',
    description: 'Complete list of webhook events and their payloads',
    category: 'API Reference',
    readTime: '25 min read',
    difficulty: 'Advanced',
    helpful: 85,
    views: 3890,
    lastUpdated: '1 week ago',
    tags: ['webhooks', 'api', 'events'],
  },
  {
    id: 9,
    title: 'Email Template Customization',
    description: 'Customize your email templates to match your brand',
    category: 'User Guide',
    readTime: '7 min read',
    difficulty: 'Intermediate',
    helpful: 88,
    views: 6120,
    lastUpdated: '3 days ago',
    tags: ['email', 'templates', 'branding'],
  },
  {
    id: 10,
    title: 'Mobile App Setup',
    description: 'Set up and use the Punctual mobile app effectively',
    category: 'Getting Started',
    readTime: '5 min read',
    difficulty: 'Beginner',
    helpful: 93,
    views: 7890,
    lastUpdated: '1 day ago',
    tags: ['mobile', 'app', 'setup'],
  },
  {
    id: 11,
    title: 'Advanced Automation Rules',
    description: 'Create complex automation workflows for your scheduling needs',
    category: 'Best Practices',
    readTime: '18 min read',
    difficulty: 'Advanced',
    helpful: 86,
    views: 4560,
    lastUpdated: '5 days ago',
    tags: ['automation', 'workflows', 'advanced'],
  },
  {
    id: 12,
    title: 'Security & Privacy Settings',
    description: 'Configure security settings and manage data privacy',
    category: 'User Guide',
    readTime: '9 min read',
    difficulty: 'Intermediate',
    helpful: 90,
    views: 3780,
    lastUpdated: '1 week ago',
    tags: ['security', 'privacy', 'settings'],
  },
]

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('recent')

  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Knowledge Base
              </Badge>
            </motion.div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Complete <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Documentation</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Everything you need to know about Punctual. From basic setup to advanced features, 
              our comprehensive documentation has you covered.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation, guides, and tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Guides */}
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
              Quick Start Guides
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get up and running quickly with these essential guides
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickStartGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <guide.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {guide.time}
                      </div>
                      <Badge 
                        variant={guide.difficulty === 'Beginner' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {guide.difficulty}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most popular and helpful articles from our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 cursor-pointer border-2 border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-primary text-white">
                          Featured
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        {article.helpful}%
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {article.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-4">
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <span>{article.views.toLocaleString()} views</span>
                        <span>•</span>
                        <span>Updated {article.lastUpdated}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {article.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
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
              Find documentation organized by topic and expertise level
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className={`h-full ${category.gradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 cursor-pointer`}>
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {category.featured && (
                      <Badge className="absolute top-4 right-4 bg-primary text-white">
                        Popular
                      </Badge>
                    )}
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                    
                    <div className="space-y-3">
                      <div className="text-3xl font-bold text-primary">{category.articles}</div>
                      <div className="text-sm text-gray-500">Articles</div>
                      
                      <Button className="w-full bg-white text-primary hover:bg-gray-100">
                        Browse Category
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">All Articles</h2>
                <p className="text-lg text-gray-600">Browse our complete documentation library</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="All">All Categories</option>
                  {docCategories.map(category => (
                    <option key={category.name} value={category.name}>{category.name}</option>
                  ))}
                </select>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="helpful">Most Helpful</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-6">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-2">
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
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors cursor-pointer">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {article.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-4">
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <span>{article.views.toLocaleString()} views</span>
                          <span>•</span>
                          <span>Updated {article.lastUpdated}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          {article.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="p-2">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-2">
                            <Share2 className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            Read Article
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-dark to-accent text-white relative overflow-hidden">
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
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Our support team is here to help. Get personalized assistance or suggest new documentation topics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                <ExternalLink className="w-5 h-5 mr-2" />
                Request Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

