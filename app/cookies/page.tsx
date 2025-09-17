'use client'

import { motion } from 'framer-motion'
import { Cookie, Settings, Shield, Eye, Database, CheckCircle } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const cookieTypes = [
  {
    icon: Settings,
    title: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function and cannot be switched off.',
    required: true,
    examples: ['Authentication', 'Security', 'Load balancing'],
  },
  {
    icon: Database,
    title: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website.',
    required: false,
    examples: ['Google Analytics', 'Usage statistics', 'Performance monitoring'],
  },
  {
    icon: Eye,
    title: 'Marketing Cookies',
    description: 'These cookies are used to track visitors across websites for advertising purposes.',
    required: false,
    examples: ['Advertising networks', 'Social media pixels', 'Retargeting'],
  },
  {
    icon: Shield,
    title: 'Preference Cookies',
    description: 'These cookies remember your choices and preferences for a better experience.',
    required: false,
    examples: ['Language settings', 'Theme preferences', 'Location settings'],
  },
]

const cookieDetails = [
  {
    name: '_punctual_session',
    type: 'Essential',
    purpose: 'Maintains your session state across page requests',
    duration: 'Session',
    provider: 'Punctual',
  },
  {
    name: '_ga',
    type: 'Analytics',
    purpose: 'Distinguishes unique users for Google Analytics',
    duration: '2 years',
    provider: 'Google',
  },
  {
    name: '_gid',
    type: 'Analytics',
    purpose: 'Distinguishes unique users for Google Analytics',
    duration: '24 hours',
    provider: 'Google',
  },
  {
    name: '_fbp',
    type: 'Marketing',
    purpose: 'Facebook pixel for advertising and analytics',
    duration: '3 months',
    provider: 'Facebook',
  },
  {
    name: 'punctual_preferences',
    type: 'Preference',
    purpose: 'Stores your UI preferences and settings',
    duration: '1 year',
    provider: 'Punctual',
  },
]

export default function CookiesPage() {
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
            <Badge variant="secondary" className="mb-4">Cookie Policy</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts. 
              Learn about the types of cookies we use and how you can control them.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 15, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies */}
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
              What are cookies?
            </h2>
            <p className="text-lg text-gray-600">
              Understanding how cookies work and why we use them
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and enabling certain functionality.
            </p>
            <p className="text-gray-600 mb-6">
              We use both first-party cookies (set by Punctual) and third-party cookies (set by 
              other services we use) to improve our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
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
              Types of cookies we use
            </h2>
            <p className="text-lg text-gray-600">
              Different categories of cookies serve different purposes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <type.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {type.title}
                          </h3>
                          {type.required ? (
                            <Badge variant="default" className="text-xs">Required</Badge>
                          ) : (
                            <Badge variant="outline" className="text-xs">Optional</Badge>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                          {type.description}
                        </p>
                        <div className="space-y-1">
                          {type.examples.map((example) => (
                            <div key={example} className="flex items-center gap-2 text-sm text-gray-500">
                              <CheckCircle className="w-4 h-4 text-accent" />
                              {example}
                            </div>
                          ))}
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

      {/* Cookie Details */}
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
              Detailed cookie information
            </h2>
            <p className="text-lg text-gray-600">
              Specific cookies we use and their purposes
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Cookie Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Purpose</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Duration</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Provider</th>
                </tr>
              </thead>
              <tbody>
                {cookieDetails.map((cookie, index) => (
                  <motion.tr
                    key={cookie.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 font-mono text-sm text-gray-900">{cookie.name}</td>
                    <td className="py-3 px-4">
                      <Badge 
                        variant={cookie.type === 'Essential' ? 'default' : 'outline'}
                        className="text-xs"
                      >
                        {cookie.type}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{cookie.purpose}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{cookie.duration}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{cookie.provider}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Managing your cookie preferences
            </h2>
            <p className="text-lg text-gray-600">
              You have control over which cookies you accept
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Browser Settings</h3>
            <p className="text-gray-600 mb-6">
              Most web browsers allow you to control cookies through their settings preferences. 
              You can set your browser to refuse cookies or delete certain cookies. However, 
              if you choose to delete or refuse cookies, some features of our website may not 
              function properly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookie Banner</h3>
            <p className="text-gray-600 mb-6">
              When you first visit our website, you'll see a cookie banner that allows you to 
              choose which types of cookies you want to accept. You can change your preferences 
              at any time by clicking the "Cookie Settings" link in our footer.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Opt-Outs</h3>
            <p className="text-gray-600 mb-6">
              For third-party cookies, you can opt out directly through the respective service providers:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline">Google Analytics Opt-out</a></li>
              <li>Facebook: <a href="https://www.facebook.com/settings?tab=ads" className="text-primary hover:underline">Facebook Ad Preferences</a></li>
              <li>General: <a href="http://www.aboutads.info/choices/" className="text-primary hover:underline">Digital Advertising Alliance</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Updates to this policy
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Last updated:</strong> January 15, 2024
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Next review:</strong> January 15, 2025
              </p>
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
              Questions about cookies?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us if you have any questions about our use of cookies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:privacy@punctual.ai" className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors">
                <Cookie className="w-5 h-5 mr-2" />
                Contact Privacy Team
              </a>
              <a href="/privacy" className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-primary transition-colors">
                <Shield className="w-5 h-5 mr-2" />
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
