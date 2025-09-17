'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowLeft, BarChart, CheckCircle, AlertCircle, ExternalLink, Copy, TrendingUp, Settings, Shield, Users, Star, ThumbsUp, Share2, Bookmark, ChevronRight, Target, PieChart, Activity, Download, DollarSign, Clock, FileText, Table, Code } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const metrics = [
  {
    name: 'Total Bookings',
    value: '1,247',
    change: '+12%',
    trend: 'up',
    description: 'Total number of appointments booked',
    icon: Target,
  },
  {
    name: 'Conversion Rate',
    value: '23.4%',
    change: '+2.1%',
    trend: 'up',
    description: 'Percentage of visitors who book',
    icon: TrendingUp,
  },
  {
    name: 'Average Booking Value',
    value: '$127',
    change: '+8%',
    trend: 'up',
    description: 'Average revenue per booking',
    icon: DollarSign,
  },
  {
    name: 'Peak Hours',
    value: '2-4 PM',
    change: 'Stable',
    trend: 'stable',
    description: 'Most popular booking times',
    icon: Clock,
  },
]

const dashboardSections = [
  {
    title: 'Overview Dashboard',
    description: 'Get a high-level view of your scheduling performance',
    features: ['Key metrics', 'Recent activity', 'Quick insights'],
    icon: BarChart,
  },
  {
    title: 'Booking Analytics',
    description: 'Detailed analysis of your booking patterns and trends',
    features: ['Booking volume', 'Time analysis', 'Source tracking'],
    icon: Target,
  },
  {
    title: 'Revenue Reports',
    description: 'Track your revenue and financial performance',
    features: ['Revenue trends', 'Payment analytics', 'Profit margins'],
    icon: DollarSign,
  },
  {
    title: 'Team Performance',
    description: 'Monitor individual and team scheduling performance',
    features: ['Team metrics', 'Individual stats', 'Productivity insights'],
    icon: Users,
  },
]

const chartTypes = [
  {
    name: 'Line Charts',
    description: 'Track trends over time',
    useCase: 'Booking volume, revenue trends, user growth',
    icon: TrendingUp,
  },
  {
    name: 'Bar Charts',
    description: 'Compare different categories',
    useCase: 'Monthly comparisons, team performance, service types',
    icon: BarChart,
  },
  {
    name: 'Pie Charts',
    description: 'Show distribution and proportions',
    useCase: 'Booking sources, service categories, payment methods',
    icon: PieChart,
  },
  {
    name: 'Heat Maps',
    description: 'Visualize patterns and density',
    useCase: 'Peak hours, popular days, geographic distribution',
    icon: Activity,
  },
]

const exportOptions = [
  {
    name: 'PDF Report',
    description: 'Generate comprehensive PDF reports',
    icon: FileText,
    format: 'PDF',
  },
  {
    name: 'CSV Export',
    description: 'Export raw data for analysis',
    icon: Download,
    format: 'CSV',
  },
  {
    name: 'Excel Spreadsheet',
    description: 'Create detailed Excel workbooks',
    icon: Table,
    format: 'XLSX',
  },
  {
    name: 'API Access',
    description: 'Access data programmatically',
    icon: Code,
    format: 'JSON',
  },
]

export default function UnderstandingAnalyticsDashboardPage() {
  const [activeSection, setActiveSection] = useState(0)
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
              <Badge className="mb-4 bg-green-100 text-green-800">
                Analytics
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Understanding your analytics dashboard
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Navigate through key metrics, reports, and insights to optimize your scheduling performance
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <BarChart className="w-4 h-4" />
                  4 min read
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  88% helpful
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  1,100 views
                </div>
                <div className="flex items-center gap-2">
                  <BarChart className="w-4 h-4" />
                  Updated 3 days ago
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
            {/* Key Metrics */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Metrics Overview</h2>
                <p className="text-gray-600 mb-6">
                  These are the most important metrics to track for your scheduling business. Monitor these regularly to understand your performance.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {metrics.map((metric, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <metric.icon className="w-4 h-4 text-green-600" />
                        </div>
                        <span className={`text-sm font-medium ${
                          metric.trend === 'up' ? 'text-green-600' : 
                          metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                        }`}>
                          {metric.change}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-600 mb-1">{metric.name}</div>
                      <div className="text-xs text-gray-500">{metric.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Dashboard Sections */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Sections</h2>
                
                <div className="space-y-6">
                  {dashboardSections.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                        activeSection === index 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          activeSection === index 
                            ? 'bg-green-500' 
                            : 'bg-gray-100'
                        }`}>
                          <section.icon className={`w-6 h-6 ${
                            activeSection === index ? 'text-white' : 'text-gray-600'
                          }`} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h3>
                          <p className="text-gray-600 mb-3">{section.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {section.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <div className="flex gap-2">
                    {dashboardSections.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSection(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeSection === index 
                            ? 'bg-green-500' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chart Types */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Chart Types</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {chartTypes.map((chart, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <chart.icon className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{chart.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{chart.description}</p>
                          <p className="text-xs text-gray-500">Use for: {chart.useCase}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Export Options */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Exporting Your Data</h2>
                <p className="text-gray-600 mb-6">
                  Export your analytics data in various formats for further analysis or sharing with your team.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {exportOptions.map((option, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <option.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{option.name}</h3>
                          <p className="text-sm text-gray-600">{option.description}</p>
                          <Badge variant="outline" className="text-xs mt-1">
                            {option.format}
                          </Badge>
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
                    <a href="#metrics" className="block text-sm text-gray-600 hover:text-green-600 transition-colors">
                      Key Metrics Overview
                    </a>
                    <a href="#sections" className="block text-sm text-gray-600 hover:text-green-600 transition-colors">
                      Dashboard Sections
                    </a>
                    <a href="#charts" className="block text-sm text-gray-600 hover:text-green-600 transition-colors">
                      Chart Types
                    </a>
                    <a href="#export" className="block text-sm text-gray-600 hover:text-green-600 transition-colors">
                      Export Options
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
                      <h4 className="font-medium text-gray-900 text-sm">Exporting and sharing reports</h4>
                      <p className="text-xs text-gray-500">Learn how to export your data</p>
                    </a>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-gray-900 text-sm">Setting up custom metrics</h4>
                      <p className="text-xs text-gray-500">Create personalized dashboards</p>
                    </a>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-gray-900 text-sm">Analytics best practices</h4>
                      <p className="text-xs text-gray-500">Optimize your data analysis</p>
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
