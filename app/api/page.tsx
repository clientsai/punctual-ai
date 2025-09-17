'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code, Key, BookOpen, Zap, Shield, Globe, ChevronDown, ChevronRight, Copy, Check } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const apiEndpoints = [
  {
    method: 'GET',
    path: '/api/v1/bookings',
    description: 'Retrieve all bookings for the authenticated user',
    parameters: [
      { name: 'limit', type: 'integer', required: false, description: 'Number of bookings to return (max 100)' },
      { name: 'offset', type: 'integer', required: false, description: 'Number of bookings to skip' },
      { name: 'status', type: 'string', required: false, description: 'Filter by booking status (confirmed, cancelled, pending)' },
    ],
    example: {
      request: 'GET /api/v1/bookings?limit=10&status=confirmed',
      response: {
        data: [
          {
            id: 'booking_123',
            title: 'Product Demo',
            start_time: '2024-01-20T14:00:00Z',
            end_time: '2024-01-20T15:00:00Z',
            attendee_email: 'client@example.com',
            status: 'confirmed'
          }
        ],
        pagination: {
          total: 150,
          limit: 10,
          offset: 0
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/api/v1/bookings',
    description: 'Create a new booking',
    parameters: [
      { name: 'title', type: 'string', required: true, description: 'Booking title' },
      { name: 'start_time', type: 'string', required: true, description: 'Start time in ISO 8601 format' },
      { name: 'end_time', type: 'string', required: true, description: 'End time in ISO 8601 format' },
      { name: 'attendee_email', type: 'string', required: true, description: 'Attendee email address' },
      { name: 'notes', type: 'string', required: false, description: 'Additional notes' },
    ],
    example: {
      request: 'POST /api/v1/bookings',
      response: {
        id: 'booking_456',
        title: 'Sales Call',
        start_time: '2024-01-21T10:00:00Z',
        end_time: '2024-01-21T11:00:00Z',
        attendee_email: 'prospect@example.com',
        status: 'confirmed',
        created_at: '2024-01-15T09:30:00Z'
      }
    }
  },
  {
    method: 'GET',
    path: '/api/v1/availability',
    description: 'Get user availability for a date range',
    parameters: [
      { name: 'start_date', type: 'string', required: true, description: 'Start date in YYYY-MM-DD format' },
      { name: 'end_date', type: 'string', required: true, description: 'End date in YYYY-MM-DD format' },
      { name: 'timezone', type: 'string', required: false, description: 'Timezone (defaults to user timezone)' },
    ],
    example: {
      request: 'GET /api/v1/availability?start_date=2024-01-20&end_date=2024-01-26',
      response: {
        availability: [
          {
            date: '2024-01-20',
            slots: [
              { start: '09:00', end: '10:00', available: true },
              { start: '10:00', end: '11:00', available: false },
              { start: '11:00', end: '12:00', available: true }
            ]
          }
        ]
      }
    }
  },
  {
    method: 'PUT',
    path: '/api/v1/bookings/{id}',
    description: 'Update an existing booking',
    parameters: [
      { name: 'title', type: 'string', required: false, description: 'New booking title' },
      { name: 'start_time', type: 'string', required: false, description: 'New start time' },
      { name: 'end_time', type: 'string', required: false, description: 'New end time' },
      { name: 'status', type: 'string', required: false, description: 'New booking status' },
    ],
    example: {
      request: 'PUT /api/v1/bookings/booking_123',
      response: {
        id: 'booking_123',
        title: 'Updated Meeting',
        start_time: '2024-01-20T15:00:00Z',
        end_time: '2024-01-20T16:00:00Z',
        status: 'confirmed',
        updated_at: '2024-01-15T10:00:00Z'
      }
    }
  },
  {
    method: 'DELETE',
    path: '/api/v1/bookings/{id}',
    description: 'Cancel or delete a booking',
    parameters: [],
    example: {
      request: 'DELETE /api/v1/bookings/booking_123',
      response: {
        success: true,
        message: 'Booking cancelled successfully'
      }
    }
  }
]

const features = [
  {
    icon: Zap,
    title: 'RESTful API',
    description: 'Clean, intuitive REST endpoints that follow industry standards',
  },
  {
    icon: Shield,
    title: 'Secure Authentication',
    description: 'OAuth 2.0 and API key authentication with rate limiting',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'Full timezone support and international date handling',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Docs',
    description: 'Detailed documentation with examples and SDKs',
  },
]

export default function APIPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [expandedEndpoint, setExpandedEndpoint] = useState<number | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const toggleEndpoint = (index: number) => {
    setExpandedEndpoint(expandedEndpoint === index ? null : index)
  }

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
            <Badge variant="secondary" className="mb-4">API Documentation</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Punctual API
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build powerful scheduling integrations with our comprehensive REST API. 
              Access all Punctual features programmatically with our developer-friendly endpoints.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
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
              Why use our API?
            </h2>
            <p className="text-lg text-gray-600">
              Powerful features designed for developers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
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
              Quick Start
            </h2>
            <p className="text-lg text-gray-600">
              Get up and running with the Punctual API in minutes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="w-5 h-5" />
                    Get Your API Key
                  </CardTitle>
                  <CardDescription>
                    Generate an API key from your account settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-semibold">1</span>
                      <span>Go to Settings → API Keys in your Punctual dashboard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-semibold">2</span>
                      <span>Click "Create New API Key"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-semibold">3</span>
                      <span>Copy your API key and keep it secure</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Make Your First Request
                  </CardTitle>
                  <CardDescription>
                    Test the API with a simple request
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-4 text-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">curl</span>
                      <button
                        onClick={() => copyToClipboard('curl -H "Authorization: Bearer YOUR_API_KEY" https://api.punctual.ai/v1/bookings', 'curl')}
                        className="text-gray-400 hover:text-white"
                      >
                        {copiedCode === 'curl' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <pre className="text-green-400">
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.punctual.ai/v1/bookings`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
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
              API Endpoints
            </h2>
            <p className="text-lg text-gray-600">
              Complete reference for all available endpoints
            </p>
          </motion.div>

          <div className="space-y-4">
            {apiEndpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleEndpoint(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Badge 
                          variant={endpoint.method === 'GET' ? 'default' : endpoint.method === 'POST' ? 'secondary' : 'outline'}
                          className="min-w-[60px] text-center"
                        >
                          {endpoint.method}
                        </Badge>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {endpoint.path}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {endpoint.description}
                          </p>
                        </div>
                      </div>
                      {expandedEndpoint === index ? (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                    </button>

                    {expandedEndpoint === index && (
                      <div className="px-6 pb-6 border-t border-gray-200">
                        <div className="pt-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Parameters</h4>
                          <div className="space-y-2 mb-6">
                            {endpoint.parameters.map((param) => (
                              <div key={param.name} className="flex items-start gap-3 text-sm">
                                <div className="flex items-center gap-2 min-w-[100px]">
                                  <span className="font-mono text-gray-600">{param.name}</span>
                                  <Badge variant="outline" className="text-xs">
                                    {param.type}
                                  </Badge>
                                  {param.required && (
                                    <Badge variant="default" className="text-xs">
                                      required
                                    </Badge>
                                  )}
                                </div>
                                <span className="text-gray-600">{param.description}</span>
                              </div>
                            ))}
                          </div>

                          <h4 className="font-semibold text-gray-900 mb-3">Example</h4>
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-gray-600 mb-2">Request:</p>
                              <div className="bg-gray-900 rounded-lg p-4 text-sm">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-gray-400">curl</span>
                                  <button
                                    onClick={() => copyToClipboard(endpoint.example.request, `request-${index}`)}
                                    className="text-gray-400 hover:text-white"
                                  >
                                    {copiedCode === `request-${index}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                  </button>
                                </div>
                                <pre className="text-green-400">{endpoint.example.request}</pre>
                              </div>
                            </div>

                            <div>
                              <p className="text-sm text-gray-600 mb-2">Response:</p>
                              <div className="bg-gray-900 rounded-lg p-4 text-sm">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-gray-400">json</span>
                                  <button
                                    onClick={() => copyToClipboard(JSON.stringify(endpoint.example.response, null, 2), `response-${index}`)}
                                    className="text-gray-400 hover:text-white"
                                  >
                                    {copiedCode === `response-${index}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                  </button>
                                </div>
                                <pre className="text-blue-400">
                                  {JSON.stringify(endpoint.example.response, null, 2)}
                                </pre>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs and Libraries */}
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
              SDKs & Libraries
            </h2>
            <p className="text-lg text-gray-600">
              Official SDKs for popular programming languages
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {['JavaScript', 'Python', 'PHP', 'Ruby', 'Go', 'Java'].map((language, index) => (
              <motion.div
                key={language}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {language}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Official SDK for {language}
                    </p>
                    <Button variant="outline" size="sm">
                      View on GitHub
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Ready to start building?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get your API key and start integrating Punctual into your application
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Get API Key
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Full Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
