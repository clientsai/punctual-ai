'use client'

import { motion } from 'framer-motion'
import { Calendar, Download, Mail, ExternalLink, Quote, Award, Users, TrendingUp } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const pressReleases = [
  {
    title: 'Punctual Raises $15M Series A to Accelerate Scheduling Innovation',
    date: '2024-01-15',
    summary: 'Funding will be used to expand team, enhance AI capabilities, and scale globally.',
    category: 'Funding',
  },
  {
    title: 'Punctual Launches Enterprise Security Features for Large Organizations',
    date: '2024-01-10',
    summary: 'New SSO, advanced compliance, and dedicated support for enterprise customers.',
    category: 'Product',
  },
  {
    title: 'Punctual Surpasses 50,000 Active Users Milestone',
    date: '2024-01-05',
    summary: 'Rapid growth driven by remote work adoption and scheduling complexity.',
    category: 'Growth',
  },
  {
    title: 'Punctual Partners with Leading CRM Providers for Seamless Integration',
    date: '2023-12-20',
    summary: 'New integrations with Salesforce, HubSpot, and Pipedrive streamline workflows.',
    category: 'Partnerships',
  },
]

const mediaMentions = [
  {
    publication: 'TechCrunch',
    title: 'Punctual is solving the meeting scheduling nightmare',
    date: '2024-01-12',
    excerpt: 'The startup has built an AI-powered scheduling platform that eliminates back-and-forth emails...',
    url: '#',
  },
  {
    publication: 'Forbes',
    title: 'How Punctual is transforming workplace productivity',
    date: '2024-01-08',
    excerpt: 'By automating the scheduling process, Punctual saves teams an average of 5 hours per week...',
    url: '#',
  },
  {
    publication: 'The Verge',
    title: 'The best scheduling tools for remote teams in 2024',
    date: '2024-01-05',
    excerpt: 'Punctual stands out for its intuitive interface and powerful automation features...',
    url: '#',
  },
  {
    publication: 'Wired',
    title: 'AI is finally making meeting scheduling bearable',
    date: '2023-12-28',
    excerpt: 'Punctual\'s machine learning algorithms understand context and preferences...',
    url: '#',
  },
]

const awards = [
  {
    title: 'Best Productivity Tool 2024',
    organization: 'Product Hunt',
    date: '2024-01-01',
    description: 'Recognized for innovation in workplace productivity solutions.',
  },
  {
    title: 'Top 10 SaaS Startups',
    organization: 'SaaS Weekly',
    date: '2023-12-15',
    description: 'Featured in annual roundup of promising SaaS companies.',
  },
  {
    title: 'Design Excellence Award',
    organization: 'UX Design Awards',
    date: '2023-11-20',
    description: 'Awarded for outstanding user experience design.',
  },
]

const stats = [
  { label: 'Active Users', value: '50,000+', icon: Users },
  { label: 'Time Saved', value: '5 hours/week', icon: TrendingUp },
  { label: 'Uptime', value: '99.9%', icon: Award },
  { label: 'Countries', value: '50+', icon: Calendar },
]

export default function PressPage() {
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
            <Badge variant="secondary" className="mb-4">Press</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Press</span> & Media
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news, announcements, and media coverage about Punctual.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
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
              Press Releases
            </h2>
            <p className="text-lg text-gray-600">
              Latest announcements and company news
            </p>
          </motion.div>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">{release.category}</Badge>
                          <span className="text-sm text-gray-500">{release.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {release.title}
                        </h3>
                        <p className="text-gray-600">
                          {release.summary}
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <Button variant="outline" size="sm">
                          Read more
                          <ExternalLink className="w-4 h-4 ml-2" />
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

      {/* Media Mentions */}
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
              Media Coverage
            </h2>
            <p className="text-lg text-gray-600">
              What the press is saying about Punctual
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {mediaMentions.map((mention, index) => (
              <motion.div
                key={mention.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Quote className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-gray-900">{mention.publication}</span>
                      <span className="text-sm text-gray-500">{mention.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {mention.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {mention.excerpt}
                    </p>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      Read full article
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
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
              Awards & Recognition
            </h2>
            <p className="text-lg text-gray-600">
              Industry recognition for our innovation and impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {award.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {award.organization}
                    </p>
                    <p className="text-xs text-gray-500 mb-3">
                      {award.date}
                    </p>
                    <p className="text-sm text-gray-600">
                      {award.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Press Kit
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Download our press kit with logos, screenshots, and company information
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                <Download className="w-5 h-5 mr-2" />
                Download Press Kit
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="w-5 h-5 mr-2" />
                Contact Press Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Media Inquiries
            </h2>
            <p className="text-xl mb-8 opacity-90">
              For press inquiries, interviews, or media requests, please contact our press team.
            </p>
            <div className="bg-white/10 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-lg font-semibold mb-2">Press Contact</p>
              <p className="mb-1">press@punctual.ai</p>
              <p className="text-sm opacity-80">+1 (555) 123-4567</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
