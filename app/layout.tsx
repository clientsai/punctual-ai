import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://punctual-ai-website.vercel.app'),
  title: "Punctual.ai - Modern Scheduling for Teams",
  description: "Eliminate back-and-forth emails with Punctual.ai. Schedule meetings instantly with our modern scheduling platform trusted by 50,000+ professionals.",
  keywords: "scheduling, calendar, meetings, appointment booking, team scheduling",
  authors: [{ name: "Punctual.AI" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: {
    title: "Punctual.ai - Modern Scheduling for Teams",
    description: "Eliminate back-and-forth emails. Schedule meetings instantly.",
    url: "https://punctual.ai",
    siteName: "Punctual",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Punctual - Modern Scheduling Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Punctual.ai - Modern Scheduling for Teams",
    description: "Eliminate back-and-forth emails. Schedule meetings instantly.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
