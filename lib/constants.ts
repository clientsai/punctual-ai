export const BRAND_COLORS = {
  primary: '#5B4EF6',
  primaryDark: '#4A3ED5',
  secondary: '#0F172A',
  accent: '#10B981',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
}

export const NAVIGATION_ITEMS = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Integrations', href: '/integrations' },
  {
    label: 'Resources',
    href: '#',
    children: [
      { label: 'Blog', href: '/blog' },
      { label: 'Help Center', href: '/help' },
      { label: 'FAQ', href: '/faq' },
      { label: 'API Docs', href: '/api' },
      { label: 'Status', href: '/status' },
    ],
  },
  {
    label: 'Company',
    href: '#',
    children: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Integrations', href: '/integrations' },
    { label: "What's new", href: '/changelog' },
    { label: 'API', href: '/api' },
  ],
  solutions: [
    { label: 'Sales teams', href: '/solutions/sales' },
    { label: 'Recruiting', href: '/solutions/recruiting' },
    { label: 'Education', href: '/solutions/education' },
    { label: 'Consultants', href: '/solutions/consultants' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Help center', href: '/help' },
    { label: 'FAQ', href: '/faq' },
    { label: 'API docs', href: '/api' },
    { label: 'Webhooks', href: '/webhooks' },
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'Status page', href: '/status' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Security', href: '/security' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
}

export const TRUST_LOGOS = [
  { name: 'Notion', logo: '/images/logos/notion.svg' },
  { name: 'Linear', logo: '/images/logos/linear.svg' },
  { name: 'Vercel', logo: '/images/logos/vercel.svg' },
  { name: 'Stripe', logo: '/images/logos/stripe.svg' },
  { name: 'Figma', logo: '/images/logos/figma.svg' },
]

export const TESTIMONIALS = [
  {
    quote: 'Cut our scheduling time by 70%. Game-changer for our sales team.',
    author: 'Sarah Chen',
    role: 'Head of Sales',
    company: 'TechCorp',
    avatar: '/images/avatars/sarah.jpg',
  },
  {
    quote: "Punctual's team features transformed how we coordinate client meetings.",
    author: 'Michael Rodriguez',
    role: 'CEO',
    company: 'ConsultPro',
    avatar: '/images/avatars/michael.jpg',
  },
  {
    quote: 'Finally, a scheduling tool that respects everyone\'s time zones perfectly.',
    author: 'Emma Watson',
    role: 'Product Manager',
    company: 'GlobalSync',
    avatar: '/images/avatars/emma.jpg',
  },
  {
    quote: 'The integration with our existing tools was seamless. Highly recommend!',
    author: 'David Park',
    role: 'Operations Director',
    company: 'ScaleUp',
    avatar: '/images/avatars/david.jpg',
  },
]

export const PRICING_TIERS = {
  free: {
    name: 'Basic',
    price: 0,
    period: 'Free forever',
    description: 'Perfect for individuals',
    features: [
      '1 calendar connection',
      'Unlimited bookings',
      'Custom booking page',
      'Email notifications',
      'Basic integrations',
    ],
  },
  pro: {
    name: 'Professional',
    price: 12,
    period: 'per user/month',
    description: 'For professionals and teams',
    featured: true,
    features: [
      'Everything in Basic',
      'Unlimited calendars',
      'Team scheduling',
      'Video conferencing',
      'Custom branding',
      'Analytics dashboard',
      'Priority support',
    ],
  },
  enterprise: {
    name: 'Enterprise',
    price: 'Custom',
    period: "Let's talk",
    description: 'For large organizations',
    features: [
      'Everything in Professional',
      'SSO/SAML',
      'Advanced security',
      'Custom workflows',
      'API access',
      'Dedicated support',
      'SLA guarantee',
    ],
  },
}

export const INTEGRATIONS = {
  calendar: [
    'Google Calendar',
    'Outlook',
    'Apple Calendar',
    'Office 365',
  ],
  video: [
    'Zoom',
    'Google Meet',
    'Microsoft Teams',
    'Webex',
  ],
  crm: [
    'Salesforce',
    'HubSpot',
    'Pipedrive',
    'Close',
  ],
  productivity: [
    'Slack',
    'Notion',
    'Linear',
    'Asana',
  ],
}