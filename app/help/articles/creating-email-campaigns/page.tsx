'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowLeft, Mail, CheckCircle, AlertCircle, ExternalLink, Copy, Zap, Settings, Shield, Users, Star, ThumbsUp, Share2, Bookmark, ChevronRight, Target, BarChart, Send, Edit } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const steps = [
  {
    number: 1,
    title: 'Access Campaign Builder',
    description: 'Navigate to the Campaigns section in your Punctual dashboard.',
    details: 'Click on "Campaigns" in the main navigation menu to access the campaign builder interface.',
    icon: Mail,
  },
  {
    number: 2,
    title: 'Choose Campaign Type',
    description: 'Select the type of email campaign you want to create.',
    details: 'Choose from welcome sequences, follow-up campaigns, reminder emails, or custom campaigns.',
    icon: Target,
  },
  {
    number: 3,
    title: 'Design Your Email',
    description: 'Use the drag-and-drop editor to create your email content.',
    details: 'Add text, images, buttons, and other elements to build your email template.',
    icon: Edit,
  },
  {
    number: 4,
    title: 'Set Up Automation Rules',
    description: 'Define when and how your emails should be sent.',
    details: 'Configure triggers, delays, and conditions for your automated email sequence.',
    icon: Zap,
  },
  {
    number: 5,
    title: 'Test and Launch',
    description: 'Preview your campaign and send it to your audience.',
    details: 'Test your email on different devices and email clients before launching to ensure it looks perfect.',
    icon: Send,
  },
]

const campaignTypes = [
  {
    name: 'Welcome Sequence',
    description: 'Onboard new users with a series of helpful emails',
    icon: Users,
    duration: '3-7 emails',
    bestFor: 'New signups',
  },
  {
    name: 'Follow-up Campaign',
    description: 'Re-engage users who haven\'t booked recently',
    icon: Target,
    duration: '2-5 emails',
    bestFor: 'Inactive users',
  },
  {
    name: 'Reminder Emails',
    description: 'Send appointment reminders and confirmations',
    icon: Mail,
    duration: '1-3 emails',
    bestFor: 'Scheduled appointments',
  },
  {
    name: 'Custom Campaign',
    description: 'Create a completely custom email sequence',
    icon: Edit,
    duration: 'Unlimited',
    bestFor: 'Specific needs',
  },
]

const bestPractices = [
  {
    title: 'Personalize Your Emails',
    description: 'Use recipient names and relevant information to make emails feel personal',
    icon: Users,
  },
  {
    title: 'Keep Subject Lines Clear',
    description: 'Write compelling subject lines that clearly communicate the email content',
    icon: Edit,
  },
  {
    title: 'Include Clear CTAs',
    description: 'Add prominent call-to-action buttons that guide recipients to take action',
    icon: Target,
  },
  {
    title: 'Test Before Sending',
    description: 'Always preview and test your emails before launching campaigns',
    icon: CheckCircle,
  },
  {
    title: 'Monitor Performance',
    description: 'Track open rates, click rates, and conversions to optimize your campaigns',
    icon: BarChart,
  },
  {
    title: 'Respect Unsubscribe Requests',
    description: 'Make it easy for recipients to unsubscribe and honor their requests immediately',
    icon: Shield,
  },
]

export default function CreatingEmailCampaignsPage() {
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
              <Badge className="mb-4 bg-purple-100 text-purple-800">
                Campaigns
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Creating your first email campaign
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Learn how to set up automated email sequences and marketing campaigns to boost engagement
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  5 min read
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  92% helpful
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  980 views
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Updated 1 week ago
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
            {/* Campaign Types */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Campaign Types</h2>
                <p className="text-gray-600 mb-6">
                  Choose the right type of campaign for your goals. Each campaign type is designed for specific use cases and outcomes.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {campaignTypes.map((type, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <type.icon className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{type.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{type.description}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{type.duration}</span>
                            <span>•</span>
                            <span>Best for: {type.bestFor}</span>
                          </div>
                        </div>
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
                          ? 'border-purple-500 bg-purple-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 ${
                          activeStep === index 
                            ? 'bg-purple-500' 
                            : 'bg-gray-400'
                        }`}>
                          {step.number}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                              <step.icon className="w-4 h-4 text-purple-600" />
                            </div>
                          </div>
                          <p className="text-gray-600 mb-3">{step.description}</p>
                          <p className="text-sm text-gray-500">{step.details}</p>
                          
                          {activeStep === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 p-4 bg-purple-50 rounded-lg"
                            >
                              <div className="flex items-center gap-2 text-purple-800 font-medium mb-2">
                                <CheckCircle className="w-4 h-4" />
                                Pro Tip
                              </div>
                              <p className="text-sm text-purple-700">
                                Start with a simple welcome sequence to test your email setup before creating more complex campaigns.
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
                            ? 'bg-purple-500' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Best Practices */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Practices</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {bestPractices.map((practice, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <practice.icon className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{practice.title}</h3>
                        <p className="text-sm text-gray-600">{practice.description}</p>
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
                    <a href="#types" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors">
                      Campaign Types
                    </a>
                    <a href="#steps" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors">
                      Step-by-Step Instructions
                    </a>
                    <a href="#practices" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors">
                      Best Practices
                    </a>
                    <a href="#related" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors">
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
                      <h4 className="font-medium text-gray-900 text-sm">Setting up automated workflows</h4>
                      <p className="text-xs text-gray-500">Create powerful automation rules</p>
                    </a>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-gray-900 text-sm">Email template customization</h4>
                      <p className="text-xs text-gray-500">Design beautiful email templates</p>
                    </a>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-gray-900 text-sm">Campaign analytics</h4>
                      <p className="text-xs text-gray-500">Track your email performance</p>
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

