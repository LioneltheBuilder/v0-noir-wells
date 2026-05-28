"use client"

import { useState, useEffect } from "react"
import { X, MapPin, Clock, Phone } from "lucide-react"
import { contact } from "@/lib/config"

export default function OpenAnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Update CSS variable when banner visibility changes
    document.documentElement.style.setProperty("--banner-height", isVisible ? "84px" : "0px")
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div data-announcement-banner className="fixed top-0 left-0 right-0 z-[60] shadow-xl">
      {/* Main Banner - Using brand colors */}
      <div className="relative bg-gradient-to-r from-noir-olive via-noir-brown to-noir-olive text-white overflow-hidden">
        {/* Subtle animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-noir-cream rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-0 right-1/4 w-40 h-40 bg-noir-beige rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        <div className="container-custom relative">
          <div className="flex items-center justify-between py-3 md:py-4 gap-4">
            {/* Left: We're Open Badge with Address */}
            <div className="flex items-center gap-3 md:gap-6 flex-1">
              {/* Open Badge */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-noir-cream rounded-full blur-md opacity-50 animate-ping"></div>
                <div className="relative bg-gradient-to-br from-noir-cream to-noir-beige text-noir-brown px-4 md:px-6 py-2 md:py-2.5 rounded-full font-black text-base md:text-xl shadow-2xl border-2 border-white/50">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></span>
                    WE&apos;RE OPEN
                  </span>
                </div>
              </div>

              {/* Vertical Divider - Desktop only */}
              <div className="hidden lg:block h-12 w-px bg-white/30"></div>

              {/* Address & Info - Desktop */}
              <div className="hidden lg:flex flex-col gap-1.5">
                <div className="flex items-center gap-2 font-bold text-base">
                  <MapPin className="h-5 w-5 text-noir-cream flex-shrink-0" />
                  <span>
                    {contact.addressLines[0]}, {contact.addressLines[1]}
                  </span>
                </div>
                <div className="flex items-center gap-5 text-sm text-white/95 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-noir-beige" />
                    Mon-Fri: 8AM-6PM • Sat: 9AM-2PM
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="h-4 w-4 text-noir-beige" />
                    {contact.phone}
                  </span>
                </div>
              </div>

              {/* Mobile: Just show location icon + city */}
              <div className="lg:hidden flex items-center gap-2 text-sm font-semibold">
                <MapPin className="h-4 w-4 text-noir-cream" />
                <span>Brooklyn, NY</span>
              </div>
            </div>

            {/* Right: CTA + Close */}
            <div className="flex items-center gap-2 md:gap-3">
              <a
                href="/book"
                className="inline-flex items-center justify-center bg-noir-cream text-noir-brown px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-sm md:text-base hover:bg-white transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
              >
                Book Now
              </a>

              <button
                onClick={() => setIsVisible(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
                aria-label="Close announcement"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile-only Full Address Section */}
          <div className="lg:hidden pb-3 border-t border-white/20 pt-3 space-y-2">
            <div className="flex items-start gap-2 text-sm font-medium">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-noir-cream" />
              <span>
                {contact.addressLines[0]}
                <br />
                {contact.addressLines[1]}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-white/95">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-noir-beige" />
                Mon-Fri: 8AM-6PM • Sat: 9AM-2PM
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-noir-beige" />
                {contact.phone}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom shadow for depth */}
      <div className="h-1 bg-gradient-to-b from-black/20 to-transparent"></div>
    </div>
  )
}
