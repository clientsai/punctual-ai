'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, AlertTriangle, FileText, Lock, Eye, Database, Globe, Users, Settings, Bell, Download, ExternalLink, ArrowRight, Play, Pause, PlayCircle, PauseCircle, RotateCcw, RotateCw, RefreshCw, Copy } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const complianceFrameworks = [
  {
    name: 'GDPR',
    fullName: 'General Data Protection Regulation',
    description: 'EU regulation for data protection and privacy',
    status: 'compliant',
    icon: Globe,
    features: [
      'Data minimization and purpose limitation',
      'Right to access and portability',
      'Right to erasure (right to be forgotten)',
      'Data breach notification within 72 hours',
      'Privacy by design and by default',
      'Data Protection Impact Assessments (DPIA)'
    ],
    lastAudit: '2024-01-10',
    nextAudit: '2024-07-10'
  },
  {
    name: 'CCPA',
    fullName: 'California Consumer Privacy Act',
    description: 'California state law for consumer privacy rights',
    status: 'compliant',
    icon: Shield,
    features: [
      'Right to know what personal information is collected',
      'Right to delete personal information',
      'Right to opt-out of sale of personal information',
      'Right to non-discrimination',
      'Transparent privacy notices',
      'Data subject access requests'
    ],
    lastAudit: '2024-01-05',
    nextAudit: '2024-07-05'
  },
  {
    name: 'SOC 2 Type II',
    fullName: 'Service Organization Control 2',
    description: 'Security, availability, and confidentiality controls',
    status: 'compliant',
    icon: Lock,
    features: [
      'Security controls and monitoring',
      'Availability and performance monitoring',
      'Confidentiality of customer data',
      'Processing integrity controls',
      'Privacy controls and procedures',
      'Regular security assessments'
    ],
    lastAudit: '2023-12-15',
    nextAudit: '2024-12-15'
  },
  {
    name: 'ISO 27001',
    fullName: 'Information Security Management System',
    description: 'International standard for information security',
    status: 'compliant',
    icon: Database,
    features: [
      'Information security management system',
      'Risk assessment and treatment',
      'Security policies and procedures',
      'Incident management and response',
      'Business continuity planning',
      'Regular management reviews'
    ],
    lastAudit: '2023-11-20',
    nextAudit: '2024-11-20'
  },
  {
    name: 'HIPAA',
    fullName: 'Health Insurance Portability and Accountability Act',
    description: 'US federal law for healthcare data protection',
    status: 'compliant',
    icon: Users,
    features: [
      'Administrative safeguards',
      'Physical safeguards',
      'Technical safeguards',
      'Breach notification requirements',
      'Business associate agreements',
      'Workforce training and awareness'
    ],
    lastAudit: '2024-01-01',
    nextAudit: '2024-07-01'
  },
  {
    name: 'PCI DSS',
    fullName: 'Payment Card Industry Data Security Standard',
    description: 'Security standards for payment card data',
    status: 'compliant',
    icon: FileText,
    features: [
      'Secure network and systems',
      'Protect cardholder data',
      'Vulnerability management',
      'Strong access control measures',
      'Regular network monitoring',
      'Information security policy'
    ],
    lastAudit: '2023-12-01',
    nextAudit: '2024-06-01'
  }
]

const securityMeasures = [
  {
    category: 'Data Protection',
    icon: Shield,
    measures: [
      {
        name: 'End-to-End Encryption',
        description: 'All data is encrypted in transit and at rest using AES-256 encryption',
        status: 'implemented'
      },
      {
        name: 'Data Residency',
        description: 'Customer data is stored in specific geographic regions as required',
        status: 'implemented'
      },
      {
        name: 'Data Anonymization',
        description: 'Personal data is anonymized when used for analytics and research',
        status: 'implemented'
      },
      {
        name: 'Data Retention',
        description: 'Automated data retention policies ensure data is deleted when no longer needed',
        status: 'implemented'
      }
    ]
  },
  {
    category: 'Access Control',
    icon: Lock,
    measures: [
      {
        name: 'Multi-Factor Authentication',
        description: 'Required for all administrative access and sensitive operations',
        status: 'implemented'
      },
      {
        name: 'Role-Based Access Control',
        description: 'Granular permissions based on user roles and responsibilities',
        status: 'implemented'
      },
      {
        name: 'Single Sign-On (SSO)',
        description: 'Enterprise SSO integration with SAML and OAuth 2.0',
        status: 'implemented'
      },
      {
        name: 'Privileged Access Management',
        description: 'Special controls for high-privilege accounts and operations',
        status: 'implemented'
      }
    ]
  },
  {
    category: 'Infrastructure Security',
    icon: Database,
    measures: [
      {
        name: 'Secure Cloud Infrastructure',
        description: 'Hosted on AWS with enterprise-grade security controls',
        status: 'implemented'
      },
      {
        name: 'Network Security',
        description: 'Firewalls, DDoS protection, and intrusion detection systems',
        status: 'implemented'
      },
      {
        name: 'Regular Security Updates',
        description: 'Automated security patches and vulnerability management',
        status: 'implemented'
      },
      {
        name: 'Disaster Recovery',
        description: 'Comprehensive backup and disaster recovery procedures',
        status: 'implemented'
      }
    ]
  },
  {
    category: 'Monitoring & Incident Response',
    icon: Eye,
    measures: [
      {
        name: '24/7 Security Monitoring',
        description: 'Continuous monitoring of security events and anomalies',
        status: 'implemented'
      },
      {
        name: 'Incident Response Plan',
        description: 'Documented procedures for security incident response',
        status: 'implemented'
      },
      {
        name: 'Security Logging',
        description: 'Comprehensive logging of all security-relevant events',
        status: 'implemented'
      },
      {
        name: 'Penetration Testing',
        description: 'Regular third-party security assessments and penetration testing',
        status: 'implemented'
      }
    ]
  }
]

const certifications = [
  {
    name: 'SOC 2 Type II',
    issuer: 'AICPA',
    validUntil: '2024-12-15',
    status: 'valid',
    description: 'Audited controls for security, availability, and confidentiality'
  },
  {
    name: 'ISO 27001:2013',
    issuer: 'ISO',
    validUntil: '2024-11-20',
    status: 'valid',
    description: 'Information security management system certification'
  },
  {
    name: 'GDPR Compliance',
    issuer: 'EU Commission',
    validUntil: 'Ongoing',
    status: 'valid',
    description: 'Full compliance with EU General Data Protection Regulation'
  },
  {
    name: 'CCPA Compliance',
    issuer: 'California AG',
    validUntil: 'Ongoing',
    status: 'valid',
    description: 'Compliance with California Consumer Privacy Act'
  }
]

const dataProcessingActivities = [
  {
    purpose: 'User Authentication',
    dataTypes: ['Email address', 'Password hash', 'Session tokens'],
    legalBasis: 'Contract performance',
    retentionPeriod: 'Account lifetime + 30 days',
    thirdParties: 'None'
  },
  {
    purpose: 'Calendar Integration',
    dataTypes: ['Calendar events', 'Availability data', 'Time zone information'],
    legalBasis: 'Consent',
    retentionPeriod: 'Account lifetime',
    thirdParties: 'Google, Microsoft (via API)'
  },
  {
    purpose: 'Booking Management',
    dataTypes: ['Meeting details', 'Attendee information', 'Scheduling preferences'],
    legalBasis: 'Contract performance',
    retentionPeriod: 'Account lifetime + 7 years',
    thirdParties: 'Email service providers'
  },
  {
    purpose: 'Analytics & Improvement',
    dataTypes: ['Usage statistics', 'Performance metrics', 'Error logs'],
    legalBasis: 'Legitimate interest',
    retentionPeriod: '2 years',
    thirdParties: 'Analytics providers (anonymized)'
  }
]

export default function CompliancePage() {
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
            <Badge variant="secondary" className="mb-4">Compliance & Security</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Compliance</span> & Security
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of security and compliance to protect your data. 
              Our comprehensive approach ensures your information is safe and we meet all regulatory requirements.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 15, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Frameworks */}
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
              Compliance Frameworks
            </h2>
            <p className="text-lg text-gray-600">
              We maintain compliance with major international and regional regulations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <framework.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{framework.name}</h3>
                        <p className="text-sm text-gray-600">{framework.fullName}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{framework.description}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="default" className="text-xs">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Compliant
                      </Badge>
                      <span className="text-xs text-gray-500">
                        Last audit: {framework.lastAudit}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {framework.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {framework.features.length > 3 && (
                          <li className="text-xs text-gray-500">
                            +{framework.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
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
              Security Measures
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive security controls to protect your data
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {securityMeasures.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <category.icon className="w-5 h-5 text-primary" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.measures.map((measure, measureIndex) => (
                        <div key={measureIndex} className="border-l-2 border-gray-200 pl-4">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900 text-sm">{measure.name}</h4>
                            <Badge variant="default" className="text-xs">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              {measure.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{measure.description}</p>
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

      {/* Certifications */}
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
              Certifications & Audits
            </h2>
            <p className="text-lg text-gray-600">
              Third-party verified security and compliance certifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{cert.issuer}</p>
                    <p className="text-xs text-gray-500 mb-4">{cert.description}</p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Status:</span>
                        <Badge variant="default" className="text-xs">Valid</Badge>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Valid until:</span>
                        <span className="text-gray-900">{cert.validUntil}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Processing Activities */}
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
              Data Processing Activities
            </h2>
            <p className="text-lg text-gray-600">
              Transparent overview of how we process your data
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Purpose</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Data Types</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Legal Basis</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Retention</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Third Parties</th>
                </tr>
              </thead>
              <tbody>
                {dataProcessingActivities.map((activity, index) => (
                  <motion.tr
                    key={activity.purpose}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 text-sm text-gray-900 font-medium">{activity.purpose}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{activity.dataTypes.join(', ')}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{activity.legalBasis}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{activity.retentionPeriod}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{activity.thirdParties}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact & Resources */}
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
              Compliance Resources
            </h2>
            <p className="text-lg text-gray-600">
              Access our compliance documentation and contact our security team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">SOC 2 Type II Report</span>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Privacy Policy</span>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Data Processing Agreement</span>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Security Whitepaper</span>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Contact Security Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Security Questions</p>
                      <p className="text-sm text-gray-600">security@punctual.ai</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Privacy Inquiries</p>
                      <p className="text-sm text-gray-600">privacy@punctual.ai</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Compliance Requests</p>
                      <p className="text-sm text-gray-600">compliance@punctual.ai</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Security Incidents</p>
                      <p className="text-sm text-gray-600">incident@punctual.ai</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              Questions about our security?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our security team is here to answer any questions about our compliance and security measures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Shield className="w-5 h-5 mr-2" />
                Contact Security Team
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <FileText className="w-5 h-5 mr-2" />
                Download Reports
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
