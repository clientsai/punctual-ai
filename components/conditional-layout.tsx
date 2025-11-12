'use client'

import { usePathname } from 'next/navigation'
import { Navigation } from './navigation'
import { Footer } from './footer'

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Pages that should NOT have navigation and footer
  const hideLayout = pathname === '/kyle'

  if (hideLayout) {
    return <>{children}</>
  }

  return (
    <>
      <Navigation />
      <main className="pt-16 min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}
