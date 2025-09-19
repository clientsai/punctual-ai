'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Database, CheckCircle, AlertTriangle, Users, Globe, Award, Sparkles, Zap, TrendingUp, Clock, FileText, Server } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data is encrypted using AES-256 encryption both in transit and at rest, ensuring your information remains secure at all times.',
    color: 'from-blue-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
    features: ['AES-256 Encryption', 'TLS 1.3', 'Perfect Forward Secrecy', 'Key Management'],
    status: 'Active',
  },
  {
    icon: Shield,
    title: 'SOC 2 Type II Certified',
    description: 'We maintain SOC 2 Type II certification, demonstrating our commitment to security, availability, and confidentiality.',
    color: 'from-green-500 to-green-600',
    gradient: 'bg-gradient-to-br from-green-50 to-green-100',
    features: ['Security Controls', 'Availability Monitoring', 'Confidentiality', 'Annual Audits'],
    status: 'Certified',
  },
  {
    icon: Users,
    title: 'Access Controls',
    description: 'Multi-factor authentication and role-based access controls ensure only authorized personnel can access your data.',
    color: 'from-purple-500 to-purple-600',
    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
    features: ['MFA Required', 'RBAC', 'SSO Integration', 'Session Management'],
    status: 'Active',
  },
  {
    icon: Database,
    title: 'Secure Infrastructure',
    description: 'Your data is stored in SOC 2 certified data centers with 24/7 monitoring and redundant security measures.',
    color: 'from-orange-500 to-orange-600',
    gradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
    features: ['SOC 2 Data Centers', '24/7 Monitoring', 'Redundant Systems', 'Geographic Distribution'],
    status: 'Active',
  },
  {
    icon: Eye,
    title: 'Privacy by Design',
    description: 'We implement privacy by design principles, ensuring data protection is built into every aspect of our platform.',
    color: 'from-teal-500 to-teal-600',
    gradient: 'bg-gradient-to-br from-teal-50 to-teal-100',
    features: ['Data Minimization', 'Purpose Limitation', 'Consent Management', 'Right to Deletion'],
    status: 'Active',
  },
  {
    icon: Globe,
    title: 'Global Compliance',
    description: 'We comply with GDPR, CCPA, and other international privacy regulations to protect your data rights.',
    color: 'from-indigo-500 to-indigo-600',
    gradient: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
    features: ['GDPR Compliant', 'CCPA Compliant', 'International Standards', 'Regular Reviews'],
    status: 'Compliant',
  },
]

const securityMeasures = [
  {
    category: 'Data Protection',
    measures: [
      { name: 'AES-256 Encryption', status: 'Active', description: 'Industry-standard encryption for all data' },
      { name: 'TLS 1.3', status: 'Active', description: 'Latest transport layer security protocol' },
      { name: 'Key Management', status: 'Active', description: 'Secure key generation and rotation' },
      { name: 'Data Backup', status: 'Active', description: 'Encrypted backups with geographic distribution' },
    ],
    icon: Lock,
  },
  {
    category: 'Access Security',
    measures: [
      { name: 'Multi-Factor Authentication', status: 'Required', description: 'MFA required for all accounts' },
      { name: 'Single Sign-On', status: 'Available', description: 'SSO integration with major providers' },
      { name: 'Role-Based Access', status: 'Active', description: 'Granular permission controls' },
      { name: 'Session Management', status: 'Active', description: 'Secure session handling and timeout' },
    ],
    icon: Users,
  },
  {
    category: 'Infrastructure',
    measures: [
      { name: 'SOC 2 Data Centers', status: 'Certified', description: 'Tier 3+ data centers with SOC 2 certification' },
      { name: '24/7 Monitoring', status: 'Active', description: 'Continuous security monitoring and alerting' },
      { name: 'DDoS Protection', status: 'Active', description: 'Advanced DDoS mitigation and protection' },
      { name: 'Redundant Systems', status: 'Active', description: 'High availability and disaster recovery' },
    ],
    icon: Server,
  },
  {
    category: 'Compliance',
    measures: [
      { name: 'GDPR Compliance', status: 'Certified', description: 'Full compliance with EU data protection laws' },
      { name: 'CCPA Compliance', status: 'Certified', description: 'California Consumer Privacy Act compliance' },
      { name: 'Regular Audits', status: 'Active', description: 'Quarterly security assessments and penetration testing' },
      { name: 'Vulnerability Management', status: 'Active', description: 'Continuous vulnerability scanning and patching' },
    ],
    icon: Award,
  },
]

const complianceStandards = [
  { name: 'SOC 2 Type II', status: 'Certified', description: 'Security, availability, and confidentiality', icon: Shield, date: '2024' },
  { name: 'GDPR', status: 'Compliant', description: 'General Data Protection Regulation', icon: Globe, date: '2018' },
  { name: 'CCPA', status: 'Compliant', description: 'California Consumer Privacy Act', icon: FileText, date: '2020' },
  { name: 'ISO 27001', status: 'In Progress', description: 'Information security management', icon: Award, date: '2024' },
  { name: 'HIPAA', status: 'Available', description: 'Healthcare data protection', icon: Database, date: '2024' },
]

const securityStats = [
  { icon: Shield, label: 'Security Score', value: 'A+', color: 'text-green-600' },
  { icon: Clock, label: 'Uptime', value: '99.99%', color: 'text-blue-600' },
  { icon: Lock, label: 'Encryption', value: 'AES-256', color: 'text-purple-600' },
  { icon: Users, label: 'Audits', value: 'Quarterly', color: 'text-orange-600' },
]

const incidentResponse = [
  {
    phase: 'Detection',
    description: 'Automated monitoring systems detect potential security incidents in real-time',
    duration: '< 1 minute',
    icon: Eye,
  },
  {
    phase: 'Assessment',
    description: 'Security team assesses the scope and impact of the incident',
    duration: '< 15 minutes',
    icon: AlertTriangle,
  },
  {
    phase: 'Containment',
    description: 'Immediate measures to contain and prevent further damage',
    duration: '< 30 minutes',
    icon: Lock,
  },
  {
    phase: 'Recovery',
    description: 'Restore services and implement additional security measures',
    duration: '< 2 hours',
    icon: CheckCircle,
  },
]

export default function SecurityPage() {
  return (
    <div>
      {/* Hero Section with Animated Background */}
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
                Security & Compliance
              </Badge>
            </motion.div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Enterprise-Grade <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Security</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Your data security is our top priority. We implement industry-leading security measures, 
              maintain strict compliance standards, and continuously monitor our systems to protect your information.
            </p>
            
            {/* Security Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            >
              {securityStats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-2`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Security Features with Enhanced Design */}
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
              Security Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive security measures that protect your data at every level
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className={`h-full ${feature.gradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}>
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-5 rounded-full -translate-y-16 translate-x-16`} />
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                      <Badge 
                        variant={feature.status === 'Active' || feature.status === 'Certified' || feature.status === 'Compliant' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {feature.status}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <div className="space-y-2">
                      {feature.features.map((item) => (
                        <Badge key={item} variant="outline" className="text-xs mr-1 mb-1">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures by Category */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Security Measures
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed breakdown of our security controls and protective measures
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityMeasures.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.measures.map((measure, measureIndex) => (
                        <div key={measureIndex} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-gray-900">{measure.name}</h4>
                              <Badge 
                                variant={measure.status === 'Active' || measure.status === 'Required' || measure.status === 'Certified' ? 'default' : 'secondary'}
                                className="text-xs"
                              >
                                {measure.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">{measure.description}</p>
                          </div>
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

      {/* Compliance Standards */}
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
              Compliance & Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We meet the highest industry standards for security and compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <standard.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{standard.name}</h3>
                    <Badge 
                      variant={standard.status === 'Certified' || standard.status === 'Compliant' ? 'default' : 'secondary'}
                      className="mb-3"
                    >
                      {standard.status}
                    </Badge>
                    <p className="text-gray-600 text-sm mb-2">{standard.description}</p>
                    <div className="text-xs text-gray-500">Since {standard.date}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Incident Response Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our structured approach to detecting, assessing, and responding to security incidents
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {incidentResponse.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <phase.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                    <p className="text-gray-600 text-sm mb-4">{phase.description}</p>
                    <Badge className="bg-primary/10 text-primary">
                      {phase.duration}
                    </Badge>
                  </CardContent>
                </Card>
                
                {/* Connection Line */}
                {index < incidentResponse.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Security Best Practices
            </h2>
            <p className="text-lg text-gray-600">
              How we maintain the highest security standards
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Regular Security Audits</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We conduct quarterly security audits and penetration testing to identify and address potential vulnerabilities. Our security team works with third-party experts to ensure comprehensive coverage and unbiased assessment of our security posture.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Employee Security Training</h3>
                      <p className="text-gray-600 leading-relaxed">
                        All employees undergo comprehensive security training and regular updates on best practices. We maintain a security-first culture where every team member understands their role in protecting customer data and maintaining system integrity.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Monitoring</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our 24/7 security operations center monitors all systems for suspicious activity, unauthorized access attempts, and potential threats. Advanced threat detection systems provide real-time alerts and automated response capabilities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Certifications</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We maintain multiple industry certifications including SOC 2 Type II, GDPR compliance, and CCPA compliance. These certifications are regularly renewed and audited to ensure continued adherence to the highest security standards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Design */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-accent text-white relative overflow-hidden">
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
              Questions About Security?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Our security team is available to discuss our security measures, compliance standards, 
              and how we protect your data. Contact us for a detailed security briefing.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:security@punctual.ai" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <Shield className="w-5 h-5 mr-2" />
                Contact Security Team
              </a>
              <a href="/privacy" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
                <FileText className="w-5 h-5 mr-2" />
                Read Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}