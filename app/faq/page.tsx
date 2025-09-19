'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Search, ChevronDown, HelpCircle, MessageCircle, BookOpen, Clock, Star, Users, Zap, Shield, Globe, Award, Sparkles, CheckCircle, ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const faqCategories = [
  {
    icon: HelpCircle,
    title: 'Getting Started',
    description: 'Basic questions about setting up and using Punctual',
    color: 'from-blue-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
    count: 8,
  },
  {
    icon: Users,
    title: 'Team Features',
    description: 'Questions about team scheduling and collaboration',
    color: 'from-green-500 to-green-600',
    gradient: 'bg-gradient-to-br from-green-50 to-green-100',
    count: 6,
  },
  {
    icon: Shield,
    title: 'Security & Privacy',
    description: 'Data protection and security measures',
    color: 'from-purple-500 to-purple-600',
    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
    count: 5,
  },
  {
    icon: Globe,
    title: 'Integrations',
    description: 'Connecting with other tools and platforms',
    color: 'from-orange-500 to-orange-600',
    gradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
    count: 7,
  },
  {
    icon: Award,
    title: 'Billing & Plans',
    description: 'Pricing, billing, and subscription questions',
    color: 'from-teal-500 to-teal-600',
    gradient: 'bg-gradient-to-br from-teal-50 to-teal-100',
    count: 4,
  },
  {
    icon: Zap,
    title: 'Advanced Features',
    description: 'Power user features and customization',
    color: 'from-indigo-500 to-indigo-600',
    gradient: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
    count: 6,
  },
]

const faqs = [
  {
    id: 1,
    question: 'How do I get started with Punctual?',
    answer: 'Getting started with Punctual is quick and easy. Simply sign up for a free account, connect your calendar (Google, Outlook, or Apple), and start sharing your booking link. Our setup wizard will guide you through the process step by step. You can be up and running in under 5 minutes.',
    category: 'Getting Started',
    helpful: 95,
    views: 1250,
    tags: ['setup', 'getting-started', 'calendar'],
  },
  {
    id: 2,
    question: 'Can I use Punctual with multiple calendars?',
    answer: 'Yes! Punctual supports multiple calendar connections. You can sync Google Calendar, Outlook, Apple Calendar, and other calendar providers simultaneously. The system will check all connected calendars to prevent double-booking and show your true availability across all platforms.',
    category: 'Getting Started',
    helpful: 92,
    views: 980,
    tags: ['calendar', 'multiple', 'sync'],
  },
  {
    id: 3,
    question: 'How does team scheduling work?',
    answer: 'Team scheduling allows multiple team members to share availability and let clients book with any available person. You can set up round-robin scheduling, collective availability, or specific team member preferences. The system automatically handles conflicts and ensures optimal scheduling for your team.',
    category: 'Team Features',
    helpful: 88,
    views: 1100,
    tags: ['team', 'scheduling', 'collaboration'],
  },
  {
    id: 4,
    question: 'Is my data secure with Punctual?',
    answer: 'Absolutely. We implement enterprise-grade security measures including AES-256 encryption, SOC 2 Type II certification, and GDPR compliance. All data is encrypted both in transit and at rest, and we undergo regular security audits. Your privacy and data security are our top priorities.',
    category: 'Security & Privacy',
    helpful: 97,
    views: 850,
    tags: ['security', 'privacy', 'encryption'],
  },
  {
    id: 5,
    question: 'What integrations are available?',
    answer: 'Punctual integrates with over 100+ popular tools including Zoom, Microsoft Teams, Google Meet, Slack, Salesforce, HubSpot, and many more. We also offer a robust API for custom integrations. Check our integrations page for the complete list and setup guides.',
    category: 'Integrations',
    helpful: 90,
    views: 1200,
    tags: ['integrations', 'api', 'tools'],
  },
  {
    id: 6,
    question: 'Can I customize my booking page?',
    answer: 'Yes! You can fully customize your booking page with your brand colors, logo, custom messaging, and even your own domain. We offer extensive customization options including custom CSS for advanced users. You can also create multiple booking pages for different services or team members.',
    category: 'Advanced Features',
    helpful: 85,
    views: 750,
    tags: ['customization', 'branding', 'booking-page'],
  },
  {
    id: 7,
    question: 'How does time zone handling work?',
    answer: 'Punctual automatically detects the booker\'s time zone and converts times accordingly. You can set your default time zone in settings, and the system will handle all conversions automatically. We support all major time zones and automatically adjust for daylight saving time changes.',
    category: 'Getting Started',
    helpful: 93,
    views: 900,
    tags: ['timezone', 'scheduling', 'global'],
  },
  {
    id: 8,
    question: 'What happens if someone books outside my available hours?',
    answer: 'Punctual only shows your available time slots to bookers. If you\'re not available, those times won\'t appear in the booking interface. You can also set up automatic rejection for bookings outside your preferred hours and configure buffer times between meetings.',
    category: 'Getting Started',
    helpful: 89,
    views: 680,
    tags: ['availability', 'booking', 'hours'],
  },
  {
    id: 9,
    question: 'Can I set up automated reminders?',
    answer: 'Yes! You can configure automatic email reminders for both you and your clients. Set custom reminder times (e.g., 24 hours, 1 hour before) and customize the reminder content. You can also send follow-up emails after meetings and set up no-show notifications.',
    category: 'Advanced Features',
    helpful: 87,
    views: 820,
    tags: ['reminders', 'automation', 'notifications'],
  },
  {
    id: 10,
    question: 'How do I handle cancellations and rescheduling?',
    answer: 'Clients can cancel or reschedule meetings directly from the confirmation email or by logging into their booking. You can also manage all bookings from your dashboard. The system automatically updates calendars and sends notifications to all parties when changes are made.',
    category: 'Getting Started',
    helpful: 91,
    views: 950,
    tags: ['cancellation', 'rescheduling', 'management'],
  },
  {
    id: 11,
    question: 'What payment options are available?',
    answer: 'Punctual offers flexible billing options including monthly and annual subscriptions. We accept all major credit cards and offer enterprise billing for larger organizations. Annual subscriptions come with a 20% discount, and we offer a free forever plan for individuals.',
    category: 'Billing & Plans',
    helpful: 84,
    views: 720,
    tags: ['billing', 'payment', 'subscription'],
  },
  {
    id: 12,
    question: 'Is there a mobile app?',
    answer: 'Yes! Punctual has native mobile apps for iOS and Android. The mobile app provides full functionality including calendar management, booking creation, team scheduling, and real-time notifications. You can also access Punctual through any mobile web browser.',
    category: 'Getting Started',
    helpful: 86,
    views: 1100,
    tags: ['mobile', 'app', 'ios', 'android'],
  },
]

const popularTopics = [
  { topic: 'Calendar Sync', questions: 12, icon: Clock },
  { topic: 'Team Scheduling', questions: 8, icon: Users },
  { topic: 'Customization', questions: 15, icon: Zap },
  { topic: 'Integrations', questions: 20, icon: Globe },
  { topic: 'Security', questions: 6, icon: Shield },
  { topic: 'Billing', questions: 9, icon: Award },
]

const supportStats = [
  { icon: MessageCircle, label: 'Response Time', value: '< 2 Hours', color: 'text-blue-600' },
  { icon: Star, label: 'Satisfaction', value: '99.2%', color: 'text-green-600' },
  { icon: Users, label: 'Support Team', value: '25+ Experts', color: 'text-purple-600' },
  { icon: Globe, label: 'Languages', value: '12+ Supported', color: 'text-orange-600' },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const categories = ['All', 'Getting Started', 'Team Features', 'Security & Privacy', 'Integrations', 'Billing & Plans', 'Advanced Features']

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

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
              Frequently Asked <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Questions</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Find quick answers to common questions about Punctual. Can't find what you're looking for? 
              Our support team is here to help.
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
                  placeholder="Search for answers, features, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories with Enhanced Design */}
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
              Find answers organized by topic and feature area
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faqCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedCategory(category.title)}
              >
                <Card className={`h-full ${category.gradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 ${selectedCategory === category.title ? 'ring-2 ring-primary' : ''}`}>
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-5 rounded-full -translate-y-16 translate-x-16`} />
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                    
                    <div className="flex items-center justify-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {category.count} questions
                      </Badge>
                      {selectedCategory === category.title && (
                        <CheckCircle className="w-4 h-4 text-primary" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List with Enhanced Design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-bold text-gray-900">
                {selectedCategory === 'All' ? 'All Questions' : `${selectedCategory} Questions`}
              </h2>
              <div className="text-sm text-gray-500">
                {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className={`hover:shadow-lg transition-all duration-300 ${openFAQ === faq.id ? 'shadow-lg border-primary/20' : ''}`}>
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {faq.question}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <Badge variant="outline" className="text-xs">
                              {faq.category}
                            </Badge>
                            <span>{faq.views} views</span>
                            <span>•</span>
                            <span>{faq.helpful}% helpful</span>
                          </div>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                            openFAQ === faq.id ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </button>
                    
                    {openFAQ === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            {faq.answer}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {faq.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Was this helpful?</span>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" className="p-1 h-auto">
                                👍 Yes
                              </Button>
                              <Button variant="ghost" size="sm" className="p-1 h-auto">
                                👎 No
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or category filter.</p>
              <Button onClick={() => { setSearchQuery(''); setSelectedCategory('All') }}>
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Popular Topics */}
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
              Popular Topics
            </h2>
            <p className="text-lg text-gray-600">
              Most searched topics and frequently asked questions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTopics.map((topic, index) => (
              <motion.div
                key={topic.topic}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSearchQuery(topic.topic)}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <topic.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {topic.topic}
                    </h3>
                    <p className="text-sm text-gray-600">{topic.questions} questions</p>
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
              Still Need Help?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Can't find the answer you're looking for? Our support team is here to help you succeed. 
              Get in touch with our experts for personalized assistance.
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
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Help Center</h3>
                <p className="text-sm opacity-80 mb-4">Browse our comprehensive documentation</p>
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Visit Help Center
                </Button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <p className="text-sm opacity-80 mb-4">Send us a message and we'll get back to you</p>
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Contact Support
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}