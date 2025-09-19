'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, Scale, Shield, Users, AlertTriangle, CheckCircle, Clock, Mail, Phone, ArrowRight, Sparkles, Download, ExternalLink, Calendar, Settings, Zap, Heart, Globe, Lock, Eye, Database, CreditCard } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const keyTerms = [
  {
    title: 'Service Agreement',
    description: 'By using Punctual, you agree to these terms and conditions',
    details: 'These terms govern your use of our scheduling platform and services',
    icon: FileText,
    color: 'from-blue-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
  },
  {
    title: 'User Responsibilities',
    description: 'Your obligations when using our service',
    details: 'You must use the service lawfully and respect other users\' rights',
    icon: Users,
    color: 'from-green-500 to-green-600',
    gradient: 'bg-gradient-to-br from-green-50 to-green-100',
  },
  {
    title: 'Data Protection',
    description: 'How we protect and handle your information',
    details: 'We implement security measures to safeguard your data',
    icon: Shield,
    color: 'from-purple-500 to-purple-600',
    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
  },
  {
    title: 'Service Availability',
    description: 'Our commitment to service uptime and reliability',
    details: 'We strive for 99.9% uptime but cannot guarantee uninterrupted service',
    icon: Zap,
    color: 'from-orange-500 to-orange-600',
    gradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
  },
]

const serviceLevels = [
  {
    plan: 'Free',
    features: ['Basic scheduling', '1 calendar integration', 'Email support', 'Standard uptime'],
    uptime: '99.5%',
    support: 'Email only',
    color: 'from-gray-500 to-gray-600',
  },
  {
    plan: 'Pro',
    features: ['Advanced scheduling', 'Unlimited integrations', 'Priority support', 'Enhanced uptime'],
    uptime: '99.9%',
    support: 'Email + Chat',
    color: 'from-blue-500 to-blue-600',
  },
  {
    plan: 'Enterprise',
    features: ['Full feature access', 'Custom integrations', '24/7 support', 'SLA guarantee'],
    uptime: '99.95%',
    support: '24/7 Phone + Chat',
    color: 'from-purple-500 to-purple-600',
  },
]

const userObligations = [
  {
    title: 'Lawful Use',
    description: 'Use the service only for lawful purposes and in accordance with these terms',
    icon: Scale,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Account Security',
    description: 'Maintain the security of your account credentials and notify us of any breaches',
    icon: Lock,
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Content Responsibility',
    description: 'You are responsible for all content you upload or share through the service',
    icon: FileText,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Compliance',
    description: 'Comply with all applicable laws and regulations in your jurisdiction',
    icon: Shield,
    color: 'from-orange-500 to-orange-600',
  },
  {
    title: 'Respect Others',
    description: 'Respect other users\' rights and privacy when using the service',
    icon: Users,
    color: 'from-pink-500 to-pink-600',
  },
  {
    title: 'Accurate Information',
    description: 'Provide accurate and up-to-date information in your account',
    icon: CheckCircle,
    color: 'from-indigo-500 to-indigo-600',
  },
]

const prohibitedUses = [
  'Violating any applicable laws or regulations',
  'Infringing on intellectual property rights',
  'Transmitting malicious code or harmful content',
  'Attempting to gain unauthorized access to our systems',
  'Interfering with the service\'s operation',
  'Using the service for spam or unsolicited communications',
  'Impersonating others or providing false information',
  'Collecting user data without permission',
]

const liabilityLimitations = [
  {
    title: 'Service Availability',
    description: 'We do not guarantee uninterrupted service availability',
    details: 'While we strive for high uptime, we cannot guarantee 100% availability due to maintenance, updates, or unforeseen circumstances.',
    icon: Clock,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Data Loss',
    description: 'We are not liable for data loss or corruption',
    details: 'While we implement backup systems, we cannot guarantee against all forms of data loss.',
    icon: Database,
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Third-Party Services',
    description: 'We are not responsible for third-party integrations',
    details: 'Issues with calendar providers, video conferencing tools, or other integrated services are not our responsibility.',
    icon: ExternalLink,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Indirect Damages',
    description: 'We limit liability for indirect or consequential damages',
    details: 'Our liability is limited to the amount you paid for the service in the 12 months preceding the claim.',
    icon: AlertTriangle,
    color: 'from-orange-500 to-orange-600',
  },
]

const terminationReasons = [
  {
    title: 'Breach of Terms',
    description: 'Violation of these terms and conditions',
    notice: 'Immediate termination possible',
    icon: AlertTriangle,
    color: 'from-red-500 to-red-600',
  },
  {
    title: 'Non-Payment',
    description: 'Failure to pay required fees',
    notice: '30 days notice after payment due',
    icon: CreditCard,
    color: 'from-orange-500 to-orange-600',
  },
  {
    title: 'Inactivity',
    description: 'Account inactive for extended period',
    notice: '90 days notice before termination',
    icon: Clock,
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    title: 'Service Discontinuation',
    description: 'We discontinue the service',
    notice: '90 days notice before termination',
    icon: Settings,
    color: 'from-blue-500 to-blue-600',
  },
]

const disputeResolution = [
  {
    step: '1',
    title: 'Direct Resolution',
    description: 'Contact us directly to resolve any disputes',
    details: 'We encourage users to contact our support team first to resolve issues amicably.',
    icon: Mail,
    color: 'from-blue-500 to-blue-600',
  },
  {
    step: '2',
    title: 'Mediation',
    description: 'If direct resolution fails, we may engage in mediation',
    details: 'We may suggest mediation through a neutral third party to resolve disputes.',
    icon: Users,
    color: 'from-green-500 to-green-600',
  },
  {
    step: '3',
    title: 'Arbitration',
    description: 'Binding arbitration for unresolved disputes',
    details: 'Disputes may be resolved through binding arbitration in accordance with applicable rules.',
    icon: Scale,
    color: 'from-purple-500 to-purple-600',
  },
  {
    step: '4',
    title: 'Legal Action',
    description: 'As a last resort, legal action may be necessary',
    details: 'In rare cases, disputes may need to be resolved through the court system.',
    icon: FileText,
    color: 'from-orange-500 to-orange-600',
  },
]

export default function TermsPage() {
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
                Terms of Service
              </Badge>
            </motion.div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Terms of <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Service</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              These terms and conditions govern your use of Punctual. Please read them carefully 
              as they contain important information about your rights and obligations when using 
              our scheduling platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Contact Legal Team
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

      {/* Key Terms Overview */}
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
              Key Terms <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Overview</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important concepts and definitions you should understand
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyTerms.map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className={`h-full ${term.gradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}>
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${term.color} opacity-5 rounded-full -translate-y-16 translate-x-16`} />
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${term.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <term.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{term.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{term.description}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{term.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Levels */}
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
              Service <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Levels</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different service levels with varying terms and conditions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceLevels.map((level, index) => (
              <motion.div
                key={level.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${level.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl font-bold text-white">{level.plan[0]}</span>
                    </div>
                    <CardTitle className="text-3xl font-bold text-gray-900">{level.plan}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-4 mb-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{level.uptime}</div>
                        <div className="text-sm text-gray-500">Uptime SLA</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-gray-900 mb-1">{level.support}</div>
                        <div className="text-sm text-gray-500">Support Level</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 mb-3">Included Features:</h4>
                      {level.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations */}
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
              Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Obligations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important responsibilities you have when using our service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userObligations.map((obligation, index) => (
              <motion.div
                key={obligation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${obligation.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <obligation.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{obligation.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{obligation.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Uses */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Prohibited <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Uses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Activities that are not allowed when using our service
            </p>
          </motion.div>

          <Card className="shadow-xl border-0">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Cannot Do</h3>
                  <ul className="space-y-4">
                    {prohibitedUses.map((use, index) => (
                      <motion.li
                        key={use}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <span>{use}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-red-50 p-8 rounded-2xl">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Consequences</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Violation of these prohibited uses may result in immediate account suspension 
                    or termination, and in some cases, legal action.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      <span>Account suspension</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      <span>Data deletion</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      <span>Legal action</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Liability Limitations */}
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
              Liability <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Limitations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important limitations on our liability and your understanding of risks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {liabilityLimitations.map((limitation, index) => (
              <motion.div
                key={limitation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${limitation.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <limitation.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{limitation.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{limitation.description}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{limitation.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Termination */}
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
              Service <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Termination</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When and how service may be terminated
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {terminationReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <reason.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{reason.description}</p>
                    <Badge className="bg-gray-100 text-gray-700">
                      {reason.notice}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dispute Resolution */}
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
              Dispute <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Resolution</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we handle disputes and resolve conflicts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {disputeResolution.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Questions About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Terms?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact our legal team if you have any questions about these terms
            </p>
          </motion.div>

          <Card className="shadow-xl border-0">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8">
                <Scale className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Legal Team Contact</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our legal team is available to answer questions about these terms and conditions. 
                We're committed to transparency and will respond to your inquiries promptly.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h4>
                  <p className="text-gray-600">legal@punctual.ai</p>
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
                  Contact Legal Team
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Full Terms
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              By using Punctual, you agree to these terms. Start your free trial today 
              and experience the future of scheduling.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="https://app.punctual.ai/signup">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="https://app.punctual.ai/settings">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                  <Settings className="w-5 h-5 mr-2" />
                  Account Settings
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}