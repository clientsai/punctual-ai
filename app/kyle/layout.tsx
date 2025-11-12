import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Kyle Campbell - Book a Meeting",
  description: "Schedule time with Kyle Campbell, 7-Figure Clients.AI Founder, Builder, and Dog Dad",
  openGraph: {
    title: "Kyle Campbell - Book a Meeting",
    description: "Schedule time with Kyle Campbell, 7-Figure Clients.AI Founder",
    type: "website",
  },
}

export default function KyleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
