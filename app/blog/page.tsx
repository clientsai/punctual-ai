'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, User, Users, ArrowRight, Tag, Sparkles, TrendingUp, BookOpen, MessageSquare, Heart, Share2, Download, ExternalLink } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const featuredPost = {
  title: 'The Future of Scheduling: How AI is Revolutionizing Time Management',
  excerpt: 'Discover how artificial intelligence is transforming the way we manage our time and schedule meetings, making productivity more efficient than ever before.',
  author: 'Punctual.ai Team',
  authorRole: 'Product Team',
  publishedAt: '2024-12-15',
  readTime: '8 min read',
  category: 'Product',
  tags: ['AI', 'Productivity', 'Scheduling', 'Technology'],
  content: 'In today\'s fast-paced world, managing time effectively has become more crucial than ever. Traditional scheduling methods are no longer sufficient to handle the complexity of modern work environments. This is where artificial intelligence steps in, offering revolutionary solutions that are transforming how we approach time management...',
}

const blogPosts = [
  {
    id: 1,
    title: '10 Productivity Hacks for Remote Teams',
    excerpt: 'Learn proven strategies to boost productivity and collaboration in remote work environments.',
    author: 'Punctual.ai Team',
    publishedAt: '2024-12-10',
    readTime: '6 min read',
    category: 'Productivity',
    tags: ['Remote Work', 'Productivity', 'Team Management'],
    featured: true,
  },
  {
    id: 2,
    title: 'Calendar Integration Best Practices',
    excerpt: 'Master the art of calendar integration with these expert tips and strategies.',
    author: 'Punctual.ai Team',
    publishedAt: '2024-12-08',
    readTime: '5 min read',
    category: 'Tutorial',
    tags: ['Calendar', 'Integration', 'Tutorial'],
    featured: false,
  },
  {
    id: 3,
    title: 'The Psychology of Meeting Scheduling',
    excerpt: 'Understanding the psychological factors that influence effective meeting scheduling.',
    author: 'Punctual.ai Team',
    publishedAt: '2024-12-05',
    readTime: '7 min read',
    category: 'Psychology',
    tags: ['Psychology', 'Meetings', 'Behavior'],
    featured: false,
  },
  {
    id: 4,
    title: 'Enterprise Scheduling Solutions',
    excerpt: 'How large organizations can implement scalable scheduling solutions.',
    author: 'Punctual.ai Team',
    publishedAt: '2024-12-03',
    readTime: '9 min read',
    category: 'Enterprise',
    tags: ['Enterprise', 'Scalability', 'Solutions'],
    featured: true,
  },
  {
    id: 5,
    title: 'Time Zone Management Made Easy',
    excerpt: 'Navigate global teams and time zones with these practical strategies.',
    author: 'Punctual.ai Team',
    publishedAt: '2024-12-01',
    readTime: '4 min read',
    category: 'Global',
    tags: ['Time Zones', 'Global Teams', 'Management'],
    featured: false,
  },
  {
    id: 6,
    title: 'Automation in Scheduling: What\'s Next?',
    excerpt: 'Explore the latest trends in scheduling automation and what the future holds.',
    author: 'Punctual.ai Team',
    publishedAt: '2024-11-28',
    readTime: '6 min read',
    category: 'Technology',
    tags: ['Automation', 'Technology', 'Future'],
    featured: false,
  },
]


const popularTags = [
  'Scheduling', 'Productivity', 'AI', 'Remote Work', 'Calendar', 'Meetings', 'Automation', 'Time Management'
]

const newsletter = {
  title: 'Stay Updated',
  description: 'Get the latest insights on scheduling, productivity, and time management delivered to your inbox.',
  subscribers: '10,000+',
  frequency: 'Weekly',
}

export default function BlogPage() {
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
              Blog & Insights
            </Badge>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Insights & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Stories</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover the latest trends, tips, and insights about scheduling, productivity, 
              and time management from our team of experts.
            </p>
            
          </motion.div>
        </div>
      </section>


      {/* Featured Post */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-primary text-white">
              <TrendingUp className="w-4 h-4 mr-2" />
              Featured Article
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-lg text-gray-600">Don't miss our most popular and trending articles</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary via-primary-dark to-accent flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-10 h-10 text-white" />
                    </div>
                    <Badge className="bg-white text-gray-900 mb-4">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2">{featuredPost.title}</h3>
                    <p className="text-white/90 text-sm">{featuredPost.excerpt}</p>
                  </div>
                </div>
                
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link href={`/blog/${featuredPost.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}>
                      <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    
                    <div className="flex items-center gap-4 text-gray-500">
                      <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">24</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm">Share</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Articles</h2>
            <p className="text-lg text-gray-600">Explore our complete collection of articles and insights</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BookOpen className="w-8 h-8 text-primary" />
                      </div>
                      {post.featured && (
                        <Badge className="bg-primary text-white mb-2">
                          Featured
                        </Badge>
                      )}
                      <Badge className="bg-white text-gray-900 border border-gray-200">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Link href={post.title === 'The Psychology of Meeting Scheduling' ? '/blog/psychology-meeting-scheduling' : `/blog/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}>
                        <Button variant="outline" size="sm">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      
                      <div className="flex items-center gap-3 text-gray-500">
                        <button className="hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="hover:text-blue-500 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary-dark to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">{newsletter.title}</h2>
            <p className="text-xl mb-8 opacity-90">
              {newsletter.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-gray-900"
              />
              <Button className="bg-white text-primary hover:bg-gray-100 px-6 py-3">
                Subscribe
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {newsletter.subscribers} subscribers
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {newsletter.frequency}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Tags</h2>
            <p className="text-lg text-gray-600">Explore articles by topic</p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center">
            {popularTags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer"
                >
                  <Tag className="w-3 h-3 mr-2" />
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}