import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { SkipLink } from "@/components/skip-link"
import OpenAnnouncementBanner from "@/components/OpenAnnouncementBanner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Noir Well Health - A Unified Care Experience",
  description:
    "Medical. Wellness. Lifestyle. Culturally rooted, community-centered healthcare combining clinical excellence with holistic wellness.",
  keywords:
    "healthcare, wellness, medical services, nutrition, IV therapy, primary care, women's health, behavioral health, Brooklyn",
  metadataBase: new URL("https://www.noirwellhealth.com"),
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <OpenAnnouncementBanner />
        <SkipLink />
        {children}
      </body>
    </html>
  )
}
