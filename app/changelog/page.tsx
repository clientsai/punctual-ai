'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Plus, Bug, Zap, Shield, Star, ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const changelogEntries = [
  {
    version: '2.1.0',
    date: '2024-01-15',
    type: 'major',
    changes: [
      {
        type: 'feature',
        title: 'AI-Powered Scheduling Suggestions',
        description: 'Our new AI analyzes your calendar patterns to suggest optimal meeting times.',
      },
      {
        type: 'feature',
        title: 'Bulk Availability Management',
        description: 'Set availability for multiple team members at once with our new bulk editor.',
      },
      {
        type: 'improvement',
        title: 'Enhanced Mobile Experience',
        description: 'Completely redesigned mobile interface with improved navigation and performance.',
      },
    ],
  },
  {
    version: '2.0.5',
    date: '2024-01-10',
    type: 'patch',
    changes: [
      {
        type: 'fix',
        title: 'Calendar Sync Issues Resolved',
        description: 'Fixed intermittent calendar synchronization problems with Google Calendar.',
      },
      {
        type: 'fix',
        title: 'Email Notification Improvements',
        description: 'Improved reliability of booking confirmation and reminder emails.',
      },
      {
        type: 'improvement',
        title: 'Performance Optimizations',
        description: 'Reduced page load times by 30% across all dashboard pages.',
      },
    ],
  },
  {
    version: '2.0.0',
    date: '2024-01-01',
    type: 'major',
    changes: [
      {
        type: 'feature',
        title: 'Team Scheduling Dashboard',
        description: 'New centralized dashboard for managing team availability and bookings.',
      },
      {
        type: 'feature',
        title: 'Advanced Analytics',
        description: 'Comprehensive reporting on booking patterns, team utilization, and productivity metrics.',
      },
      {
        type: 'feature',
        title: 'Custom Branding',
        description: 'White-label options for enterprise customers with custom logos and colors.',
      },
      {
        type: 'feature',
        title: 'API v2 Release',
        description: 'Completely redesigned API with improved performance and new endpoints.',
      },
    ],
  },
  {
    version: '1.9.2',
    date: '2023-12-20',
    type: 'patch',
    changes: [
      {
        type: 'fix',
        title: 'Timezone Handling Improvements',
        description: 'Better handling of daylight saving time transitions and edge cases.',
      },
      {
        type: 'improvement',
        title: 'UI Polish',
        description: 'Minor visual improvements and accessibility enhancements.',
      },
    ],
  },
  {
    version: '1.9.0',
    date: '2023-12-15',
    type: 'minor',
    changes: [
      {
        type: 'feature',
        title: 'Slack Integration',
        description: 'Receive booking notifications directly in Slack channels.',
      },
      {
        type: 'feature',
        title: 'Recurring Meeting Support',
        description: 'Set up recurring meetings with flexible scheduling rules.',
      },
      {
        type: 'improvement',
        title: 'Enhanced Security',
        description: 'Added two-factor authentication and improved data encryption.',
      },
    ],
  },
]

const getChangeIcon = (type: string) => {
  switch (type) {
    case 'feature':
      return <Plus className="w-4 h-4 text-green-500" />
    case 'fix':
      return <Bug className="w-4 h-4 text-red-500" />
    case 'improvement':
      return <Zap className="w-4 h-4 text-blue-500" />
    case 'security':
      return <Shield className="w-4 h-4 text-purple-500" />
    default:
      return <Star className="w-4 h-4 text-gray-500" />
  }
}

const getChangeColor = (type: string) => {
  switch (type) {
    case 'feature':
      return 'bg-green-100 text-green-800'
    case 'fix':
      return 'bg-red-100 text-red-800'
    case 'improvement':
      return 'bg-blue-100 text-blue-800'
    case 'security':
      return 'bg-purple-100 text-purple-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getVersionBadge = (type: string) => {
  switch (type) {
    case 'major':
      return <Badge variant="default">Major Release</Badge>
    case 'minor':
      return <Badge variant="secondary">Minor Release</Badge>
    case 'patch':
      return <Badge variant="outline">Patch</Badge>
    default:
      return <Badge variant="outline">Update</Badge>
  }
}

export default function ChangelogPage() {
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
            <Badge variant="secondary" className="mb-4">Changelog</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              What's New
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay up to date with the latest features, improvements, and fixes we're shipping to make Punctual better every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Changelog Entries */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {changelogEntries.map((entry, entryIndex) => (
              <motion.div
                key={entry.version}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: entryIndex * 0.1 }}
                className="relative"
              >
                {/* Version Line */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-gray-900">v{entry.version}</h2>
                    {getVersionBadge(entry.type)}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{entry.date}</span>
                  </div>
                </div>

                {/* Changes */}
                <div className="space-y-4">
                  {entry.changes.map((change, changeIndex) => (
                    <motion.div
                      key={changeIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (entryIndex * 0.1) + (changeIndex * 0.05) }}
                    >
                      <Card className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                              {getChangeIcon(change.type)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-semibold text-gray-900">
                                  {change.title}
                                </h3>
                                <Badge className={getChangeColor(change.type)}>
                                  {change.type}
                                </Badge>
                              </div>
                              <p className="text-gray-600">
                                {change.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Separator Line */}
                {entryIndex < changelogEntries.length - 1 && (
                  <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get notified about new features and updates as soon as they're released
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm mt-4 text-gray-500">
                We'll only send you product updates. No spam.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Preview */}
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
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600">
              Here's what we're working on next
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">Q2 2024</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Planned</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Advanced AI Scheduling
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Machine learning-powered scheduling that learns from your preferences and automatically optimizes meeting times.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">Q2 2024</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Planned</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Video Meeting Integration
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Seamless integration with all major video conferencing platforms with automatic room creation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">Q3 2024</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Planned</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Mobile App Redesign
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Complete redesign of our mobile apps with native performance and offline capabilities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">Q3 2024</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Planned</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Enterprise Workflows
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Advanced workflow automation for enterprise customers with custom approval processes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <button className="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
              View Full Roadmap
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
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
              Try the latest features
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience all the new features and improvements we've been working on
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://app.punctual.ai/register">
                <button className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
              </Link>
              <Link href="https://app.punctual.ai/demo">
                <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-primary transition-colors">
                  Schedule Demo
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
