'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Database, Globe, Users, FileText, CheckCircle, AlertTriangle, Clock, Mail, Phone, ArrowRight, Sparkles, Download, ExternalLink, Calendar, Settings, Zap, Heart } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const privacyPrinciples = [
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'We implement industry-leading security measures to protect your personal information',
    details: 'End-to-end encryption, secure data centers, and regular security audits ensure your data is always protected.',
    color: 'from-blue-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
  },
  {
    icon: Lock,
    title: 'Privacy by Design',
    description: 'Privacy considerations are built into every aspect of our product development',
    details: 'From the initial design phase to ongoing updates, we prioritize your privacy in every decision we make.',
    color: 'from-green-500 to-green-600',
    gradient: 'bg-gradient-to-br from-green-50 to-green-100',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We believe in clear, honest communication about how we handle your data',
    details: 'Our privacy policy is written in plain language, and we regularly update you on any changes.',
    color: 'from-purple-500 to-purple-600',
    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
  },
  {
    icon: Users,
    title: 'User Control',
    description: 'You have complete control over your personal information and how it\'s used',
    details: 'Access, modify, or delete your data at any time through our user-friendly controls.',
    color: 'from-orange-500 to-orange-600',
    gradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
  },
]

const dataTypes = [
  {
    category: 'Account Information',
    description: 'Information you provide when creating and managing your account',
    examples: ['Name and email address', 'Profile information', 'Account preferences', 'Billing information'],
    icon: Users,
    color: 'from-blue-500 to-blue-600',
  },
  {
    category: 'Calendar Data',
    description: 'Your calendar information and scheduling data',
    examples: ['Meeting details and times', 'Availability schedules', 'Calendar events', 'Time zone preferences'],
    icon: Calendar,
    color: 'from-green-500 to-green-600',
  },
  {
    category: 'Usage Information',
    description: 'How you interact with our service',
    examples: ['Feature usage patterns', 'Performance data', 'Error logs', 'Device information'],
    icon: Settings,
    color: 'from-purple-500 to-purple-600',
  },
  {
    category: 'Communication Data',
    description: 'Information from your communications with us',
    examples: ['Support tickets', 'Feedback and surveys', 'Email communications', 'Chat transcripts'],
    icon: Mail,
    color: 'from-orange-500 to-orange-600',
  },
]

const rights = [
  {
    title: 'Right to Access',
    description: 'You can request a copy of all personal data we have about you',
    icon: Eye,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Right to Rectification',
    description: 'You can correct or update your personal information at any time',
    icon: FileText,
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Right to Erasure',
    description: 'You can request deletion of your personal data under certain circumstances',
    icon: Database,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Right to Portability',
    description: 'You can export your data in a machine-readable format',
    icon: Download,
    color: 'from-orange-500 to-orange-600',
  },
  {
    title: 'Right to Object',
    description: 'You can object to certain processing of your personal data',
    icon: AlertTriangle,
    color: 'from-red-500 to-red-600',
  },
  {
    title: 'Right to Restrict Processing',
    description: 'You can request that we limit how we process your data',
    icon: Lock,
    color: 'from-indigo-500 to-indigo-600',
  },
]

const securityMeasures = [
  {
    title: 'Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard protocols',
    details: 'We use AES-256 encryption for data at rest and TLS 1.3 for data in transit',
    icon: Lock,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Access Controls',
    description: 'Strict access controls ensure only authorized personnel can access your data',
    details: 'Multi-factor authentication, role-based access, and regular access reviews',
    icon: Users,
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Regular Audits',
    description: 'We conduct regular security audits and penetration testing',
    details: 'Third-party security assessments and continuous monitoring of our systems',
    icon: Shield,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Data Centers',
    description: 'Your data is stored in secure, SOC 2 Type II certified data centers',
    details: 'Physical security, environmental controls, and redundant systems',
    icon: Database,
    color: 'from-orange-500 to-orange-600',
  },
]

const complianceFrameworks = [
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation compliance for EU users',
    icon: Globe,
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'CCPA',
    description: 'California Consumer Privacy Act compliance for California residents',
    icon: Shield,
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'SOC 2 Type II',
    description: 'Security, availability, and confidentiality controls certification',
    icon: CheckCircle,
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'ISO 27001',
    description: 'Information security management system certification',
    icon: Lock,
    color: 'from-orange-500 to-orange-600',
  },
]

export default function PrivacyPage() {
  return (
    <div>
      {/* Hero Section with Enhanced Design */}
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
                Privacy Policy
              </Badge>
            </motion.div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Privacy <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Matters</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              We're committed to protecting your privacy and being transparent about how we collect, 
              use, and safeguard your personal information. This policy explains our practices and 
              your rights regarding your data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Contact Privacy Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Last Updated Notice */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Last updated: December 15, 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our Privacy <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Principles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide how we handle your personal information
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className={`h-full ${principle.gradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}>
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${principle.color} opacity-5 rounded-full -translate-y-16 translate-x-16`} />
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <principle.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{principle.description}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{principle.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Information We <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Collect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collect only the information necessary to provide and improve our services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {dataTypes.map((type, index) => (
              <motion.div
                key={type.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <type.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.category}</h3>
                        <p className="text-gray-600 leading-relaxed">{type.description}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Examples include:</h4>
                      <ul className="space-y-2">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              How We Use Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Information</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use your information only for legitimate business purposes and to improve your experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Primary Uses</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Service Delivery',
                    description: 'To provide, maintain, and improve our scheduling services',
                    icon: Zap,
                    color: 'from-blue-500 to-blue-600',
                  },
                  {
                    title: 'Account Management',
                    description: 'To manage your account and provide customer support',
                    icon: Users,
                    color: 'from-green-500 to-green-600',
                  },
                  {
                    title: 'Communication',
                    description: 'To send you important updates and respond to your inquiries',
                    icon: Mail,
                    color: 'from-purple-500 to-purple-600',
                  },
                  {
                    title: 'Security',
                    description: 'To protect against fraud and ensure platform security',
                    icon: Shield,
                    color: 'from-orange-500 to-orange-600',
                  },
                ].map((use, index) => (
                  <motion.div
                    key={use.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${use.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <use.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{use.title}</h4>
                      <p className="text-gray-600">{use.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Legal Basis</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Contract Performance',
                    description: 'Processing necessary to fulfill our contract with you',
                    percentage: '60%',
                    color: 'from-blue-500 to-blue-600',
                  },
                  {
                    title: 'Legitimate Interest',
                    description: 'Processing for our legitimate business interests',
                    percentage: '25%',
                    color: 'from-green-500 to-green-600',
                  },
                  {
                    title: 'Consent',
                    description: 'Processing based on your explicit consent',
                    percentage: '10%',
                    color: 'from-purple-500 to-purple-600',
                  },
                  {
                    title: 'Legal Obligation',
                    description: 'Processing required by law or regulation',
                    percentage: '5%',
                    color: 'from-orange-500 to-orange-600',
                  },
                ].map((basis, index) => (
                  <motion.div
                    key={basis.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{basis.title}</h4>
                      <span className="text-sm font-bold text-gray-500">{basis.percentage}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{basis.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${basis.color} rounded-full transition-all duration-1000`}
                        style={{ width: basis.percentage }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Rights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You have comprehensive rights regarding your personal information
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rights.map((right, index) => (
              <motion.div
                key={right.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${right.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <right.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{right.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{right.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Security <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Measures</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implement comprehensive security measures to protect your data
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <motion.div
                key={measure.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${measure.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <measure.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{measure.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{measure.description}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{measure.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Compliance & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain compliance with major privacy and security frameworks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full text-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${framework.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <framework.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{framework.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{framework.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Questions About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Privacy?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact our privacy team if you have any questions about this policy or your data
            </p>
          </motion.div>

          <Card className="shadow-xl border-0">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">We're Here to Help</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our privacy team is dedicated to helping you understand your rights and our practices. 
                We're committed to transparency and will respond to your inquiries promptly.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h4>
                  <p className="text-gray-600">privacy@punctual.ai</p>
                </div>
                <div className="text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Privacy Team
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Full Policy
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-dark to-accent text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Trust Punctual with Your Data
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              We're committed to protecting your privacy and being transparent about our practices. 
              Start using Punctual with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                <Settings className="w-5 h-5 mr-2" />
                Privacy Settings
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}