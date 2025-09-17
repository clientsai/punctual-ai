'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowLeft, Clock, CheckCircle, AlertCircle, ExternalLink, Copy, Calendar, Settings, Shield, Zap, Users, Star, ThumbsUp, Share2, Bookmark, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const steps = [
  {
    number: 1,
    title: 'Access Calendar Settings',
    description: 'Navigate to your Punctual dashboard and click on the Settings menu.',
    details: 'In your Punctual dashboard, look for the Settings icon in the top navigation bar. Click on it to access your account settings.',
    icon: Settings,
  },
  {
    number: 2,
    title: 'Select Calendar Integration',
    description: 'Choose Google Calendar from the list of available calendar providers.',
    details: 'You\'ll see a list of supported calendar providers. Click on "Google Calendar" to begin the integration process.',
    icon: Calendar,
  },
  {
    number: 3,
    title: 'Authorize Access',
    description: 'Grant Punctual permission to access your Google Calendar.',
    details: 'You\'ll be redirected to Google\'s authorization page. Sign in with your Google account and click "Allow" to grant Punctual access to your calendar.',
    icon: Shield,
  },
  {
    number: 4,
    title: 'Configure Sync Settings',
    description: 'Choose which calendars to sync and set your preferences.',
    details: 'Select which Google Calendars you want to sync with Punctual. You can choose to sync all calendars or specific ones.',
    icon: Zap,
  },
  {
    number: 5,
    title: 'Test the Integration',
    description: 'Verify that your calendar events are properly syncing.',
    details: 'Create a test event in your Google Calendar and check if it appears in Punctual. This ensures the integration is working correctly.',
    icon: CheckCircle,
  },
]

const troubleshooting = [
  {
    issue: 'Calendar events not syncing',
    solution: 'Check your internet connection and ensure you\'ve granted all necessary permissions. Try disconnecting and reconnecting your Google Calendar.',
    icon: AlertCircle,
  },
  {
    issue: 'Duplicate events appearing',
    solution: 'This usually happens when you have multiple calendar integrations. Disable other calendar apps and keep only Punctual connected.',
    icon: AlertCircle,
  },
  {
    issue: 'Permission denied error',
    solution: 'Go to your Google Account settings and revoke Punctual\'s access, then try connecting again with fresh permissions.',
    icon: AlertCircle,
  },
  {
    issue: 'Sync delays',
    solution: 'Calendar sync can take up to 15 minutes. If it\'s been longer, try refreshing your browser or reconnecting the integration.',
    icon: AlertCircle,
  },
]

const benefits = [
  {
    icon: Clock,
    title: 'Real-time Sync',
    description: 'Your calendar stays up-to-date automatically across all devices',
  },
  {
    icon: Shield,
    title: 'Secure Access',
    description: 'Your calendar data is encrypted and never stored on our servers',
  },
  {
    icon: Zap,
    title: 'Instant Updates',
    description: 'Changes in Google Calendar appear in Punctual within minutes',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Share availability with team members seamlessly',
  },
]

export default function ConnectGoogleCalendarPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [isHelpful, setIsHelpful] = useState<boolean | null>(null)

  const handleHelpful = (helpful: boolean) => {
    setIsHelpful(helpful)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Help Center
            </Button>
          </div>
          
          <div className="flex items-start justify-between">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">
                Getting Started
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                How to connect your Google Calendar
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Step-by-step guide to syncing your Google Calendar with Punctual for seamless scheduling
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  3 min read
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  95% helpful
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  1,250 views
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Updated 2 days ago
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Quick Overview */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Overview</h2>
                <p className="text-gray-600 mb-4">
                  Connecting your Google Calendar to Punctual allows you to automatically sync your availability, 
                  prevent double-bookings, and ensure all your meetings are properly scheduled. This integration 
                  works in real-time and keeps your calendar data secure.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Step-by-Step Guide */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Instructions</h2>
                
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                        activeStep === index 
                          ? 'border-primary bg-primary/5' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 ${
                          activeStep === index 
                            ? 'bg-primary' 
                            : 'bg-gray-400'
                        }`}>
                          {step.number}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <step.icon className="w-4 h-4 text-primary" />
                            </div>
                          </div>
                          <p className="text-gray-600 mb-3">{step.description}</p>
                          <p className="text-sm text-gray-500">{step.details}</p>
                          
                          {activeStep === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 p-4 bg-blue-50 rounded-lg"
                            >
                              <div className="flex items-center gap-2 text-blue-800 font-medium mb-2">
                                <CheckCircle className="w-4 h-4" />
                                Pro Tip
                              </div>
                              <p className="text-sm text-blue-700">
                                Make sure you're signed into the correct Google account before starting the integration process.
                              </p>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <div className="flex gap-2">
                    {steps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeStep === index 
                            ? 'bg-primary' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Troubleshooting */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Troubleshooting</h2>
                <div className="space-y-4">
                  {troubleshooting.map((item, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <item.icon className="w-3 h-3 text-yellow-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{item.issue}</h3>
                          <p className="text-gray-600 text-sm">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Helpful Section */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Was this article helpful?</h2>
                <div className="flex items-center gap-4">
                  <Button
                    variant={isHelpful === true ? "default" : "outline"}
                    onClick={() => handleHelpful(true)}
                    className="flex items-center gap-2"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    Yes
                  </Button>
                  <Button
                    variant={isHelpful === false ? "default" : "outline"}
                    onClick={() => handleHelpful(false)}
                    className="flex items-center gap-2"
                  >
                    <ThumbsUp className="w-4 h-4 rotate-180" />
                    No
                  </Button>
                </div>
                
                {isHelpful !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-50 rounded-lg"
                  >
                    <p className="text-green-800 text-sm">
                      {isHelpful 
                        ? "Thank you for your feedback! We're glad this article was helpful." 
                        : "We're sorry this article wasn't helpful. Please contact support for more assistance."
                      }
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    <a href="#overview" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                      Quick Overview
                    </a>
                    <a href="#steps" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                      Step-by-Step Instructions
                    </a>
                    <a href="#troubleshooting" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                      Troubleshooting
                    </a>
                    <a href="#related" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                      Related Articles
                    </a>
                  </nav>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-3">
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-gray-900 text-sm">Setting up team scheduling</h4>
                      <p className="text-xs text-gray-500">Configure round-robin scheduling</p>
                    </a>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-gray-900 text-sm">Customizing your booking page</h4>
                      <p className="text-xs text-gray-500">Personalize with your brand</p>
                    </a>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-gray-900 text-sm">Managing time zones</h4>
                      <p className="text-xs text-gray-500">Handle global scheduling</p>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Need More Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <Button className="w-full" size="sm">
                    Contact Support
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

