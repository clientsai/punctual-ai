'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Search, MessageCircle, Users, TrendingUp, Clock, Star, ThumbsUp, Reply, Filter, SortAsc, Plus, Bookmark, Share2, MoreHorizontal, CheckCircle, Award, Zap, Heart, Eye } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const categories = [
  {
    name: 'General Discussion',
    description: 'General questions and discussions about Punctual',
    icon: MessageCircle,
    color: 'from-blue-500 to-blue-600',
    posts: 1247,
    latestPost: '2 hours ago',
  },
  {
    name: 'Getting Started',
    description: 'Help for new users and basic setup questions',
    icon: Users,
    color: 'from-green-500 to-green-600',
    posts: 892,
    latestPost: '4 hours ago',
  },
  {
    name: 'Feature Requests',
    description: 'Suggest new features and vote on ideas',
    icon: TrendingUp,
    color: 'from-purple-500 to-purple-600',
    posts: 456,
    latestPost: '1 day ago',
  },
  {
    name: 'Integrations',
    description: 'Calendar sync, API, and third-party integrations',
    icon: Zap,
    color: 'from-orange-500 to-orange-600',
    posts: 678,
    latestPost: '6 hours ago',
  },
  {
    name: 'Troubleshooting',
    description: 'Technical issues and bug reports',
    icon: CheckCircle,
    color: 'from-red-500 to-red-600',
    posts: 234,
    latestPost: '3 hours ago',
  },
  {
    name: 'Success Stories',
    description: 'Share your wins and case studies',
    icon: Award,
    color: 'from-pink-500 to-pink-600',
    posts: 189,
    latestPost: '1 day ago',
  },
]

const recentPosts = [
  {
    id: 1,
    title: 'How to set up automated follow-up sequences?',
    category: 'Getting Started',
    author: 'Community Member',
    authorAvatar: '/avatars/community-member.jpg',
    replies: 12,
    views: 234,
    likes: 8,
    isPinned: true,
    isSolved: false,
    lastActivity: '2 hours ago',
    tags: ['automation', 'follow-up', 'email'],
  },
  {
    id: 2,
    title: 'Calendar sync issues with Outlook 365',
    category: 'Troubleshooting',
    author: 'Community Member',
    authorAvatar: '/avatars/community-member.jpg',
    replies: 7,
    views: 156,
    likes: 3,
    isPinned: false,
    isSolved: true,
    lastActivity: '4 hours ago',
    tags: ['outlook', 'sync', 'calendar'],
  },
  {
    id: 3,
    title: 'Feature Request: Bulk scheduling for team events',
    category: 'Feature Requests',
    author: 'Community Member',
    authorAvatar: '/avatars/community-member.jpg',
    replies: 23,
    views: 445,
    likes: 15,
    isPinned: false,
    isSolved: false,
    lastActivity: '6 hours ago',
    tags: ['bulk', 'team', 'scheduling'],
  },
  {
    id: 4,
    title: 'Success: Increased booking rates by 40% with Punctual',
    category: 'Success Stories',
    author: 'Community Member',
    authorAvatar: '/avatars/community-member.jpg',
    replies: 18,
    views: 678,
    likes: 32,
    isPinned: true,
    isSolved: false,
    lastActivity: '1 day ago',
    tags: ['success', 'metrics', 'growth'],
  },
  {
    id: 5,
    title: 'API integration with Salesforce - best practices?',
    category: 'Integrations',
    author: 'Community Member',
    authorAvatar: '/avatars/community-member.jpg',
    replies: 9,
    views: 189,
    likes: 6,
    isPinned: false,
    isSolved: false,
    lastActivity: '8 hours ago',
    tags: ['api', 'salesforce', 'integration'],
  },
  {
    id: 6,
    title: 'Custom branding not showing on mobile app',
    category: 'Troubleshooting',
    author: 'Community Member',
    authorAvatar: '/avatars/community-member.jpg',
    replies: 4,
    views: 98,
    likes: 2,
    isPinned: false,
    isSolved: false,
    lastActivity: '12 hours ago',
    tags: ['mobile', 'branding', 'display'],
  },
]

const topContributors = [
  { name: 'Community Expert', posts: 156, likes: 1240, avatar: '/avatars/expert.jpg', badge: 'Expert' },
  { name: 'Community Helper', posts: 98, likes: 892, avatar: '/avatars/helper.jpg', badge: 'Helper' },
  { name: 'Active Contributor', posts: 87, likes: 756, avatar: '/avatars/contributor.jpg', badge: 'Contributor' },
  { name: 'Community Helper', posts: 76, likes: 634, avatar: '/avatars/helper2.jpg', badge: 'Helper' },
  { name: 'Community Member', posts: 65, likes: 521, avatar: '/avatars/member.jpg', badge: 'Contributor' },
]

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('recent')

  const filteredPosts = recentPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
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
                <MessageCircle className="w-4 h-4 mr-2" />
                Community Forum
              </Badge>
            </motion.div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Join the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Community</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Connect with other Punctual users, share tips, get help, and contribute to the community. 
              Together, we make scheduling better for everyone.
            </p>
            
            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12"
            >
              <div className="text-center">
                <div className="w-12 h-12 text-blue-600 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">2,847</div>
                <div className="text-sm text-gray-600">Members</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 text-green-600 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">3,694</div>
                <div className="text-sm text-gray-600">Posts</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 text-purple-600 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Reply className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">12,456</div>
                <div className="text-sm text-gray-600">Replies</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 text-orange-600 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1,234</div>
                <div className="text-sm text-gray-600">Solved</div>
              </div>
            </motion.div>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search discussions, topics, or ask a question..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
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
              Find discussions organized by topic and expertise level
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 cursor-pointer">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{category.name}</h3>
                    <p className="text-gray-600 mb-6 text-center leading-relaxed">{category.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{category.posts} posts</span>
                      <span>Latest: {category.latestPost}</span>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white">
                      Browse Category
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
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
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Discussions</h2>
                <p className="text-lg text-gray-600">Join the conversation and get help from the community</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="All">All Categories</option>
                  {categories.map(category => (
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
                  <option value="solved">Recently Solved</option>
                </select>
                
                <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  New Post
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          {post.author.charAt(0)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              {post.isPinned && (
                                <Badge className="bg-yellow-100 text-yellow-800">
                                  <Bookmark className="w-3 h-3 mr-1" />
                                  Pinned
                                </Badge>
                              )}
                              {post.isSolved && (
                                <Badge className="bg-green-100 text-green-800">
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                  Solved
                                </Badge>
                              )}
                              <Badge variant="outline" className="text-xs">
                                {post.category}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Clock className="w-4 h-4" />
                              {post.lastActivity}
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors cursor-pointer">
                            {post.title}
                          </h3>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                              <Reply className="w-4 h-4" />
                              {post.replies} replies
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {post.views} views
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="w-4 h-4" />
                              {post.likes} likes
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-600">by {post.author}</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <div className="flex gap-1">
                                {post.tags.map(tag => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              
                              <div className="flex items-center gap-1">
                                <Button variant="ghost" size="sm" className="p-2">
                                  <ThumbsUp className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm" className="p-2">
                                  <Reply className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm" className="p-2">
                                  <Share2 className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm" className="p-2">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
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
          </motion.div>
        </div>
      </section>

      {/* Top Contributors */}
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
              Top Contributors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognize our most helpful community members
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {topContributors.map((contributor, index) => (
              <motion.div
                key={contributor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {contributor.name.charAt(0)}
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2">{contributor.name}</h3>
                    <Badge 
                      variant={contributor.badge === 'Expert' ? 'default' : 'secondary'}
                      className="mb-4"
                    >
                      {contributor.badge}
                    </Badge>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>{contributor.posts} posts</div>
                      <div>{contributor.likes} likes</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Ready to Join the Conversation?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Connect with thousands of Punctual users, share your knowledge, and get help when you need it. 
              The community is waiting for you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Plus className="w-5 h-5 mr-2" />
                Start a Discussion
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                <MessageCircle className="w-5 h-5 mr-2" />
                Browse Topics
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

