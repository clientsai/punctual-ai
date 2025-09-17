'use client'

import { motion } from 'framer-motion'
import { CheckCircle, AlertTriangle, XCircle, Clock, Activity, Globe, Database, Zap } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const systemStatus = {
  overall: 'operational',
  uptime: '99.9%',
  lastIncident: '2024-01-10',
}

const services = [
  {
    name: 'API',
    status: 'operational',
    responseTime: '45ms',
    uptime: '99.9%',
    description: 'Core API endpoints and authentication',
  },
  {
    name: 'Web Application',
    status: 'operational',
    responseTime: '120ms',
    uptime: '99.8%',
    description: 'Main web application and dashboard',
  },
  {
    name: 'Calendar Sync',
    status: 'operational',
    responseTime: '200ms',
    uptime: '99.7%',
    description: 'Google Calendar, Outlook, and Apple Calendar integration',
  },
  {
    name: 'Email Service',
    status: 'operational',
    responseTime: '300ms',
    uptime: '99.9%',
    description: 'Booking confirmations and notifications',
  },
  {
    name: 'Video Conferencing',
    status: 'operational',
    responseTime: '150ms',
    uptime: '99.8%',
    description: 'Zoom, Google Meet, and Teams integration',
  },
  {
    name: 'Mobile Apps',
    status: 'operational',
    responseTime: '180ms',
    uptime: '99.9%',
    description: 'iOS and Android applications',
  },
]

const recentIncidents = [
  {
    id: 1,
    title: 'Scheduled maintenance completed',
    status: 'resolved',
    date: '2024-01-15',
    duration: '2 hours',
    description: 'Routine maintenance to improve system performance and security.',
  },
  {
    id: 2,
    title: 'Calendar sync delays resolved',
    status: 'resolved',
    date: '2024-01-10',
    duration: '45 minutes',
    description: 'Temporary delays in calendar synchronization have been resolved.',
  },
  {
    id: 3,
    title: 'Email delivery issues fixed',
    status: 'resolved',
    date: '2024-01-05',
    duration: '1 hour',
    description: 'Email delivery issues affecting some users have been resolved.',
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'operational':
      return <CheckCircle className="w-5 h-5 text-green-500" />
    case 'degraded':
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />
    case 'outage':
      return <XCircle className="w-5 h-5 text-red-500" />
    default:
      return <Clock className="w-5 h-5 text-gray-500" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'operational':
      return 'bg-green-100 text-green-800'
    case 'degraded':
      return 'bg-yellow-100 text-yellow-800'
    case 'outage':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function StatusPage() {
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
            <Badge variant="secondary" className="mb-4">Status</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              System Status
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time status of Punctual services and infrastructure. 
              We're committed to providing reliable service and transparent communication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              {getStatusIcon(systemStatus.overall)}
              <h2 className="text-3xl font-bold text-gray-900">
                All Systems Operational
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              All services are running normally
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Activity className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {systemStatus.uptime}
                  </h3>
                  <p className="text-gray-600">Uptime (30 days)</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    &lt; 200ms
                  </h3>
                  <p className="text-gray-600">Average Response Time</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    99.9%
                  </h3>
                  <p className="text-gray-600">SLA Compliance</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Status
            </h2>
            <p className="text-lg text-gray-600">
              Current status of all Punctual services
            </p>
          </motion.div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {getStatusIcon(service.status)}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {service.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Response Time</p>
                          <p className="font-semibold text-gray-900">
                            {service.responseTime}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Uptime</p>
                          <p className="font-semibold text-gray-900">
                            {service.uptime}
                          </p>
                        </div>
                        <Badge className={getStatusColor(service.status)}>
                          {service.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Incidents
            </h2>
            <p className="text-lg text-gray-600">
              Latest updates on service incidents and maintenance
            </p>
          </motion.div>

          <div className="space-y-4">
            {recentIncidents.map((incident, index) => (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {getStatusIcon(incident.status)}
                          <h3 className="text-lg font-semibold text-gray-900">
                            {incident.title}
                          </h3>
                          <Badge className={getStatusColor(incident.status)}>
                            {incident.status}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">
                          {incident.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{incident.date}</span>
                          <span>•</span>
                          <span>Duration: {incident.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Monitoring & Reliability
            </h2>
            <p className="text-lg text-gray-600">
              How we ensure reliable service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                24/7 Monitoring
              </h3>
              <p className="text-gray-600 text-sm">
                Continuous monitoring of all systems and services
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Auto-Recovery
              </h3>
              <p className="text-gray-600 text-sm">
                Automated failover and recovery systems
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Redundancy
              </h3>
              <p className="text-gray-600 text-sm">
                Multiple data centers and backup systems
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Global CDN
              </h3>
              <p className="text-gray-600 text-sm">
                Fast content delivery worldwide
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Stay updated
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get notified about service status updates and incidents
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
                  className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm mt-4 opacity-80">
                We'll only send you status updates. No spam.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
