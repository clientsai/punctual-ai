'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function KyleBookingPage() {
  useEffect(() => {
    // Load Calendly script - force deployment
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
      {/* Pure Minimalist Header - Jony: "Simplicity is not the absence of clutter" */}
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-3xl border-b border-gray-100/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
            {/* Intentional emptiness speaks volumes */}
          </div>
        </div>
      </header>

      {/* Hero Section - Jony: Person first, everything else follows naturally */}
      <section className="pt-28 sm:pt-36 pb-20 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center space-y-12 sm:space-y-14 animate-fade-in">
            {/* Profile Image - Perfect precision, subtle depth */}
            <div className="relative inline-block">
              {/* Ambient glow - felt, not seen */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] via-transparent to-indigo-500/[0.04] rounded-full blur-3xl scale-125" />

              <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto">
                {/* Layered depth */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-50 to-white shadow-2xl shadow-gray-300/20" />
                <Image
                  src="/kyle-profile.jpeg"
                  alt="Kyle Campbell"
                  width={176}
                  height={176}
                  className="relative rounded-full object-cover w-full h-full ring-[0.5px] ring-gray-200/60"
                  priority
                />
              </div>
            </div>

            {/* Typography - Jony: Every letter matters */}
            <div className="space-y-8 sm:space-y-10">
              {/* Name - Monumental yet weightless */}
              <div className="space-y-5">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extralight text-gray-950 tracking-[-0.04em] leading-[0.95]">
                  Kyle Campbell
                </h1>

                {/* Minimal separator - breath between sections */}
                <div className="flex items-center justify-center space-x-2.5 py-2">
                  <div className="w-1 h-1 rounded-full bg-gray-300/80" />
                  <div className="w-1 h-1 rounded-full bg-gray-300/80" />
                  <div className="w-1 h-1 rounded-full bg-gray-300/80" />
                </div>
              </div>

              {/* Credentials - Nonchalant, no big deal */}
              <div className="space-y-5">
                {/* Badge containers - casual confidence */}
                <div className="flex items-center justify-center gap-2.5 flex-wrap px-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-50 to-gray-100/80 border border-gray-200/40 backdrop-blur-sm">
                    <span className="text-sm font-light text-gray-700 tracking-tight">7-Figure Founder</span>
                  </span>

                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50/60 to-indigo-50/60 border border-blue-100/30 backdrop-blur-sm">
                    <span className="text-sm font-light text-gray-700 tracking-tight">Clients.AI</span>
                  </span>

                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-50 to-gray-100/80 border border-gray-200/40 backdrop-blur-sm">
                    <span className="text-sm font-light text-gray-700 tracking-tight">Builder</span>
                  </span>

                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-50 to-gray-100/80 border border-gray-200/40 backdrop-blur-sm">
                    <span className="text-sm font-light text-gray-700 tracking-tight">Dog Dad</span>
                  </span>
                </div>
              </div>

              {/* Divider - the smallest details matter most */}
              <div className="w-20 h-[0.5px] bg-gradient-to-r from-transparent via-gray-200/60 to-transparent mx-auto" />

              {/* Invitation - warmth through simplicity */}
              <p className="text-xl sm:text-2xl font-light text-gray-600/90 max-w-2xl mx-auto leading-relaxed tracking-[-0.01em] px-6">
                Let&apos;s connect and explore what we can build together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section - Form follows function, beauty emerges */}
      <section className="pb-28 sm:pb-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="relative group">
            {/* Ambient light - barely perceptible transition */}
            <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/[0.015] via-transparent to-indigo-500/[0.015] rounded-[48px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-[1400ms]" />

            {/* Main container - Precision engineering */}
            <div className="relative bg-white/98 backdrop-blur-2xl rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100/60 overflow-hidden transition-all duration-[800ms] hover:shadow-[0_20px_60px_rgb(0,0,0,0.1)]">
              {/* Light reflection - Apple's signature */}
              <div className="absolute top-0 inset-x-0 h-[0.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent" />

              {/* Inner ring - layered refinement */}
              <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-gray-100/40 pointer-events-none" />

              {/* Calendly Widget */}
              <div className="relative p-0">
                <div
                  className="calendly-inline-widget transition-opacity duration-[600ms]"
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

          {/* Attribution - respectful, unassuming */}
          <div className="mt-14 sm:mt-18 text-center space-y-3.5">
            <div className="w-8 h-[0.5px] bg-gradient-to-r from-transparent via-gray-200/50 to-transparent mx-auto" />
            <p className="text-[11px] sm:text-xs font-light text-gray-400/80 tracking-[0.1em] uppercase">
              Scheduling by Calendly
            </p>
          </div>
        </div>
      </section>

      {/* Footer - The final detail */}
      <footer className="py-12 sm:py-14 border-t border-gray-100/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <a
              href="https://clients.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 hover:opacity-70 transition-opacity duration-300 cursor-pointer group"
            >
              <span className="text-xs font-light text-gray-400/90 tracking-tight">Powered by</span>
              <img
                src="/clients-ai-logo.png"
                alt="Clients.ai"
                className="h-5 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
