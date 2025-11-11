'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function KyleBookingPage() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Pure Minimalist Header - removed for cleaner look */}
      <header className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-3xl border-b border-gray-100/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-center">
            {/* Intentionally minimal - no branding */}
          </div>
        </div>
      </header>

      {/* Hero Section - Jony Ive: Person first, credentials naturally follow */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center space-y-10 sm:space-y-12 animate-fade-in">
            {/* Profile Image - Perfect circle, subtle shadow, Jony's signature depth */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 rounded-full blur-2xl scale-110" />
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100/50 to-white shadow-2xl shadow-gray-300/30" />
                <Image
                  src="/kyle-profile.jpeg"
                  alt="Kyle"
                  width={160}
                  height={160}
                  className="relative rounded-full object-cover w-full h-full ring-1 ring-gray-100/50"
                  priority
                />
              </div>
            </div>

            {/* Typography Hierarchy - Jony style: Natural, effortless authority */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-gray-950 tracking-[-0.03em] leading-[1.05]">
                  Kyle
                </h1>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-1 h-1 rounded-full bg-gray-300" />
                  <div className="w-1 h-1 rounded-full bg-gray-300" />
                  <div className="w-1 h-1 rounded-full bg-gray-300" />
                </div>
              </div>

              {/* Credentials - Understated confidence, Jony never shouts */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <p className="text-xl sm:text-2xl font-light text-gray-900 tracking-tight leading-relaxed">
                    7-Figure Clients.AI Founder
                  </p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50">
                    <span className="text-xs font-light text-blue-600 tracking-wide">and counting</span>
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-base sm:text-lg font-light text-gray-500">
                  <span>AI Innovator</span>
                  <span className="text-gray-300">·</span>
                  <span>Dog Lover</span>
                </div>
              </div>

              {/* Subtle divider */}
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-auto" />

              {/* Invitation - Warm, simple, purposeful */}
              <p className="text-lg sm:text-xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                Let&apos;s connect and explore what we can build together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section - The tool serves the purpose, never dominates */}
      <section className="pb-24 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="relative group animate-slide-up">
            {/* Ambient glow - barely perceptible, felt not seen */}
            <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-indigo-500/[0.02] rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms]" />

            {/* Main container - Pure, elevated, glass-like */}
            <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl sm:rounded-[32px] shadow-2xl shadow-gray-200/30 border border-gray-100/70 overflow-hidden transition-all duration-700 hover:shadow-3xl hover:shadow-gray-200/40">
              {/* Top light reflection - Jony's signature touch */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

              {/* Inner subtle border */}
              <div className="absolute inset-0 rounded-3xl sm:rounded-[32px] ring-1 ring-inset ring-gray-100/50 pointer-events-none" />

              {/* Calendly Widget Container */}
              <div className="relative p-0">
                <div
                  className="calendly-inline-widget transition-opacity duration-500"
                  data-url="https://calendly.com/kyle-9lw/new-meeting"
                  style={{
                    minWidth: '320px',
                    height: '700px',
                    width: '100%',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Minimal attribution - Respectful, unobtrusive */}
          <div className="mt-12 sm:mt-16 text-center space-y-3">
            <div className="w-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-auto" />
            <p className="text-[10px] sm:text-xs font-light text-gray-400 tracking-[0.08em] uppercase">
              Scheduling by Calendly
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Powered by Clients.ai */}
      <footer className="py-10 sm:py-12 border-t border-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <a
              href="https://clients.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <span className="text-xs font-light text-gray-400">Powered by</span>
              <img
                src="/clients-ai-logo.png"
                alt="Clients.ai"
                className="h-5 object-contain"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
