'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Clock, User, Mail, Phone, Building, MessageSquare, CheckCircle, ArrowRight, Sparkles, Zap, Shield, Globe, Users, Star, Video, PhoneCall, Mail as MailIcon, MapPin, ExternalLink } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const demoTypes = [
  {
    id: 'overview',
    title: 'Product Overview',
    description: 'Get a comprehensive overview of Punctual\'s core features and capabilities',
    duration: '30 minutes',
    icon: Video,
    color: 'from-blue-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
    features: ['Core Features', 'User Interface', 'Basic Workflow', 'Q&A Session'],
  },
  {
    id: 'technical',
    title: 'Technical Deep Dive',
    description: 'Explore APIs, integrations, and advanced technical capabilities',
    duration: '45 minutes',
    icon: Zap,
    color: 'from-purple-500 to-purple-600',
    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
    features: ['API Integration', 'Webhooks', 'Custom Development', 'Security'],
  },
  {
    id: 'enterprise',
    title: 'Enterprise Solution',
    description: 'Learn about enterprise features, security, and scalability options',
    duration: '60 minutes',
    icon: Shield,
    color: 'from-green-500 to-green-600',
    gradient: 'bg-gradient-to-br from-green-50 to-green-100',
    features: ['Enterprise Features', 'Security & Compliance', 'Scalability', 'Custom Solutions'],
  },
  {
    id: 'team',
    title: 'Team Collaboration',
    description: 'Discover how Punctual can improve your team\'s scheduling and collaboration',
    duration: '30 minutes',
    icon: Users,
    color: 'from-orange-500 to-orange-600',
    gradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
    features: ['Team Scheduling', 'Shared Calendars', 'Collaboration Tools', 'Workflow Optimization'],
  },
]

const timeSlots = [
  { time: '9:00 AM', available: true, timezone: 'PST' },
  { time: '10:00 AM', available: true, timezone: 'PST' },
  { time: '11:00 AM', available: false, timezone: 'PST' },
  { time: '1:00 PM', available: true, timezone: 'PST' },
  { time: '2:00 PM', available: true, timezone: 'PST' },
  { time: '3:00 PM', available: false, timezone: 'PST' },
  { time: '4:00 PM', available: true, timezone: 'PST' },
  { time: '5:00 PM', available: true, timezone: 'PST' },
]

const benefits = [
  {
    icon: CheckCircle,
    title: 'Personalized Demo',
    description: 'Tailored to your specific use case and requirements',
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Learn from our product specialists and implementation experts',
  },
  {
    icon: Zap,
    title: 'Live Q&A',
    description: 'Get immediate answers to your questions during the demo',
  },
  {
    icon: Shield,
    title: 'No Commitment',
    description: 'Free demo with no obligation to purchase or sign up',
  },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechCorp Inc.',
    role: 'Operations Manager',
    content: 'The demo was incredibly helpful. We were able to see exactly how Punctual would fit into our workflow and got all our questions answered.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    company: 'StartupXYZ',
    role: 'CEO',
    content: 'Our sales team loved the personalized demo. It showed us features we didn\'t even know existed and saved us weeks of trial and error.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    company: 'Global Solutions',
    role: 'IT Director',
    content: 'The technical deep dive was exactly what we needed. We could see how it would integrate with our existing systems seamlessly.',
    rating: 5,
  },
]

export default function DemoPage() {
  const [selectedDemo, setSelectedDemo] = useState('overview')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    teamSize: '',
    useCase: '',
    additionalInfo: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    // Handle form submission here
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const selectedDemoType = demoTypes.find(demo => demo.id === selectedDemo)

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
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Demo
              </Badge>
            </motion.div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              See <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Punctual</span> in Action
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Book a personalized demo to see how Punctual can transform your scheduling workflow. 
              Our experts will show you exactly how it works for your specific use case.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark">
                <Calendar className="w-4 h-4 mr-2" />
                Book Demo Now
              </Button>
              <Button variant="outline" size="lg">
                <Video className="w-4 h-4 mr-2" />
                Watch Video Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Types */}
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
              Choose Your Demo Type
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the demo that best fits your needs and interests
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoTypes.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card 
                  className={`h-full cursor-pointer transition-all duration-300 ${
                    selectedDemo === demo.id 
                      ? 'ring-2 ring-primary shadow-xl scale-105' 
                      : 'hover:shadow-lg group-hover:scale-105'
                  }`}
                  onClick={() => setSelectedDemo(demo.id)}
                >
                  <CardContent className={`p-8 text-center ${demo.gradient}`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${demo.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <demo.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{demo.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{demo.description}</p>
                    
                    <div className="space-y-3">
                      <div className="text-lg font-semibold text-primary">{demo.duration}</div>
                      
                      <div className="space-y-2">
                        {demo.features.map((feature) => (
                          <div key={feature} className="flex items-center justify-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Booking Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Book Your Demo
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll send you a calendar invite
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Selected Demo Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${selectedDemoType?.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <selectedDemoType?.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedDemoType?.title}</h3>
                    <p className="text-gray-600 mb-4">{selectedDemoType?.description}</p>
                    <Badge className="bg-primary text-white">
                      {selectedDemoType?.duration}
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 mb-3">What you'll learn:</h4>
                    {selectedDemoType?.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 text-blue-800 font-medium mb-2">
                      <Sparkles className="w-5 h-5" />
                      What to expect
                    </div>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Personalized demo based on your needs</li>
                      <li>• Live Q&A with our product experts</li>
                      <li>• Follow-up resources and next steps</li>
                      <li>• No sales pressure, just helpful information</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                          Company *
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Enter your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                          Role *
                        </label>
                        <select
                          id="role"
                          name="role"
                          required
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select your role</option>
                          <option value="ceo">CEO/Founder</option>
                          <option value="cto">CTO</option>
                          <option value="operations">Operations Manager</option>
                          <option value="it">IT Director</option>
                          <option value="sales">Sales Manager</option>
                          <option value="admin">Administrator</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="teamSize" className="block text-sm font-semibold text-gray-700 mb-2">
                        Team Size
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select team size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="500+">500+ employees</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="useCase" className="block text-sm font-semibold text-gray-700 mb-2">
                        Primary Use Case
                      </label>
                      <select
                        id="useCase"
                        name="useCase"
                        value={formData.useCase}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select your primary use case</option>
                        <option value="appointments">Appointment Scheduling</option>
                        <option value="meetings">Meeting Scheduling</option>
                        <option value="team">Team Scheduling</option>
                        <option value="events">Event Booking</option>
                        <option value="consultations">Consultations</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-700 mb-2">
                        Additional Information
                      </label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        className="w-full min-h-[100px]"
                        placeholder="Tell us about your specific needs or questions..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Scheduling Demo...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule Demo
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Book a Demo?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get the most out of your demo experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from teams who've experienced our demos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-dark to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-pattern"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Ready to Transform Your Scheduling?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Book your personalized demo today and see how Punctual can revolutionize 
              your team's scheduling workflow. No commitment required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                Book Demo Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                <PhoneCall className="w-5 h-5 mr-2" />
                Call Us: (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

