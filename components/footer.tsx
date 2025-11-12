import Link from 'next/link'
import { FOOTER_LINKS } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold">Punctual.ai</span>
            </div>
            <p className="text-gray-400 text-sm">
              Modern scheduling for teams. Eliminate back-and-forth emails.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} Punctual.AI. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms
                </Link>
                <Link href="/security" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Security
                </Link>
              </div>

              {/* Powered by Clients.ai */}
              <div className="border-l border-gray-700 pl-6">
                <a
                  href="https://clients.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity duration-300 cursor-pointer group"
                >
                  <span className="text-xs font-light text-gray-400 tracking-tight">Powered by</span>
                  <img
                    src="/clients-ai-logo.png"
                    alt="Clients.ai"
                    className="h-4 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}