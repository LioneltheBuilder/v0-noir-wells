"use client"

import { useState } from "react"
import { X, Sparkles, ArrowRight } from "lucide-react"

export default function MembershipBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-gradient-to-r from-noir-olive to-noir-brown text-white">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-noir-beige animate-pulse" />
              <span className="font-medium text-sm md:text-base">
                Exciting News: Membership Services Launching Soon!
              </span>
            </div>
            <a
              href="#membership-announcement"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-white/90 hover:text-white transition-colors"
            >
              Learn More
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
