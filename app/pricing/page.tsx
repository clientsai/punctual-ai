'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Check, X, Star, Zap, Shield, Users, Calendar, Clock, ArrowRight, Sparkles, Download, ExternalLink, Heart, Globe, Settings, MessageSquare, Phone, Mail, Crown, Rocket, Target, Award } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const pricingPlans = [
  {
    name: 'Free',
    price: 0,
    period: 'month',
    description: 'Stop embarrassing yourself in basic meetings',
    features: [
      '10 intelligence briefs per month',
      'Basic personality profiling',
      'LinkedIn profile analysis',
      'Communication style detection',
      'What NOT to say alerts',
      'Email delivery of briefs',
    ],
    limitations: [
      'Limited to 10 meetings per month',
      'Basic psychological analysis',
      'Standard brief delivery',
    ],
    cta: 'Start Preparing Better',
    popular: false,
    color: 'from-gray-500 to-gray-600',
    gradient: 'bg-gradient-to-br from-gray-50 to-gray-100',
    icon: Users,
  },
  {
    name: 'Pro',
    price: 12,
    period: 'month',
    description: 'Win every conversation with deep intelligence',
    features: [
      'Unlimited intelligence briefs',
      'Advanced psychological profiling',
      'Deep social media analysis',
      'Decision-making pattern mapping',
      'Objection prediction & handling',
      'Conversation strategy roadmaps',
      'Real-time brief updates',
      'Team intelligence sharing',
      'CRM integration for historical context',
      'Custom talking point generation',
    ],
    limitations: [],
    cta: 'Never Lose Again',
    popular: true,
    color: 'from-blue-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
    icon: Star,
  },
  {
    name: 'Enterprise',
    price: 45,
    period: 'month',
    description: 'Arm your entire organization with intelligence',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'Shared intelligence database',
      'Team conversation playbooks',
      'Mistake prevention system',
      'Dedicated intelligence analyst',
      'Custom integration with your tools',
      'Advanced relationship mapping',
      'White-label intelligence reports',
      'Training & strategic consulting',
    ],
    limitations: [],
    cta: 'Talk to Intelligence Team',
    popular: false,
    color: 'from-purple-500 to-purple-600',
    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
    icon: Crown,
  },
]

const addOns = [
  {
    name: 'Additional Team Members',
    description: 'Extend intelligence access across your team',
    price: 5,
    period: 'per user/month',
    icon: Users,
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Conversation Analytics',
    description: 'Track which approaches win and which fail',
    price: 10,
    period: 'per month',
    icon: Target,
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'Custom Intelligence Sources',
    description: 'Pull insights from your proprietary data',
    price: 25,
    period: 'per month',
    icon: Settings,
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'Dedicated Intelligence Analyst',
    description: 'Human expert review of your highest-stakes briefs',
    price: 15,
    period: 'per month',
    icon: Phone,
    color: 'from-orange-500 to-orange-600',
  },
]

const faqs = [
  {
    question: 'How does the intelligence actually help me win?',
    answer: 'Before each meeting, you receive a detailed brief analyzing the attendee\'s personality, communication style, decision-making patterns, and potential objections. You\'ll know exactly what to say, what not to say, and how to build rapport instantly—giving you an unfair advantage your competition doesn\'t have.',
  },
  {
    question: 'What if the brief is wrong?',
    answer: 'Our AI analyzes hundreds of data points from LinkedIn, social media, company context, and your CRM history. While no analysis is perfect, our briefs are accurate enough that customers report 34% higher close rates. You also get a 14-day trial to test the quality yourself.',
  },
  {
    question: 'Can I try it before paying?',
    answer: 'Yes. The Free plan gives you 10 intelligence briefs per month with no credit card required. Upgrade to Pro for unlimited briefs with advanced analysis. All paid plans include a 14-day trial.',
  },
  {
    question: 'What\'s the ROI on this?',
    answer: 'If this prevents one embarrassing mistake, avoids one lost deal, or helps you close one opportunity faster, it pays for itself forever. Most customers report closing 20-40% more deals within the first month.',
  },
  {
    question: 'Is this creepy or unethical?',
    answer: 'We only analyze publicly available information—the same data anyone could research manually. We just do it faster and with psychological expertise. Think of it as having a research assistant who understands human behavior.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, 30-day money-back guarantee on all paid plans. If our intelligence doesn\'t help you win more conversations, we\'ll refund you—no questions asked.',
  },
]

const testimonials = [
  {
    name: 'Jennifer Martinez',
    role: 'Enterprise Sales',
    company: 'SaaS Startup',
    quote: 'Pro plan paid for itself after one deal. The brief told me the CTO hated being sold to and preferred data-first conversations. I adjusted my pitch accordingly and closed a $180K contract I would have definitely blown.',
    rating: 5,
    plan: 'Pro',
  },
  {
    name: 'David Kim',
    role: 'VP Revenue',
    company: 'Series B Company',
    quote: 'Enterprise plan was a no-brainer. Our entire sales team now shares intelligence on every prospect. We stopped losing deals because someone said something stupid. Close rate up 42%.',
    rating: 5,
    plan: 'Enterprise',
  },
  {
    name: 'Alex Chen',
    role: 'Freelance Consultant',
    company: 'Independent',
    quote: 'Free plan gives me enough briefs for my key meetings. I used to research for hours. Now I get a psychological profile in 2 minutes. My clients think I have ESP.',
    rating: 5,
    plan: 'Free',
  },
]

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')
  }

  const getPrice = (plan: typeof pricingPlans[0]) => {
    if (billingPeriod === 'yearly') {
      return Math.round(plan.price * 12 * 0.8) // 20% discount for yearly
    }
    return plan.price
  }

  const getPeriod = (plan: typeof pricingPlans[0]) => {
    return billingPeriod === 'yearly' ? 'year' : plan.period
  }

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
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Investment in Never Embarrassing Yourself
            </Badge>

            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              How Much Is <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">One Lost Deal</span> Worth?
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              The cost of saying the wrong thing once is far higher than the cost of preparing with intelligence forever. Choose the plan that stops you from losing what you can't afford to lose.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://app.punctual.ai/register">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark">
                  <Rocket className="w-4 h-4 mr-2" />
                  Get First Brief Free
                </Button>
              </Link>
              <Link href="https://punctual.ai/contact">
                <Button variant="outline" size="lg">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Calculate Your ROI
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  billingPeriod === 'yearly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly
                <Badge className="ml-2 bg-green-500 text-white text-xs">
                  Save 20%
                </Badge>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
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
              Invest in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Not Losing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One avoided mistake pays for itself. One closed deal that would have been lost makes this free. Choose your level of protection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className={`h-full ${plan.gradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-white px-4 py-2">
                        <Star className="w-4 h-4 mr-2" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4 pt-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <CardTitle className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-5xl font-bold text-gray-900 mb-2">
                        ${getPrice(plan)}
                        <span className="text-lg text-gray-500 font-normal">/{getPeriod(plan)}</span>
                      </div>
                      {billingPeriod === 'yearly' && (
                        <div className="text-sm text-green-600 font-semibold">
                          Save ${Math.round(plan.price * 12 * 0.2)}/year
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-8 pt-0">
                    <div className="space-y-4 mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-700">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      
                      {plan.limitations.length > 0 && (
                        <div className="pt-4 border-t border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-4">Limitations:</h4>
                          {plan.limitations.map((limitation, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-gray-500">
                              <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                              <span>{limitation}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <Link href={
                      plan.name === 'Free' ? 'https://app.punctual.ai/register' :
                      plan.name === 'Pro' ? 'https://app.punctual.ai/register?plan=pro' :
                      'https://punctual.ai/contact'
                    }>
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? 'bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark'
                            : 'bg-gray-900 hover:bg-gray-800'
                        }`}
                        size="lg"
                      >
                        {plan.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
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
              Add-On <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your plan with additional features and services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addOn, index) => (
              <motion.div
                key={addOn.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${addOn.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <addOn.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{addOn.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{addOn.description}</p>
                    
                    <div className="text-3xl font-bold text-gray-900 mb-4">
                      ${addOn.price}
                      <span className="text-lg text-gray-500 font-normal">/{addOn.period}</span>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      Add to Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from customers using different plans
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
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.plan} Plan
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              Frequently Asked <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our pricing and plans
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-dark to-accent text-white relative overflow-hidden">
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
              Join thousands of professionals who trust Punctual for their scheduling needs. 
              Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="https://app.punctual.ai/register">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="https://punctual.ai/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}