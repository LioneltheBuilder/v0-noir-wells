"use client"

import type React from "react"

import { useState } from "react"
import { Users, Heart, Sparkles, Bell, ArrowRight, CheckCircle } from "lucide-react"

export default function MembershipAnnouncement() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-noir-olive via-noir-brown to-noir-olive">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-noir-beige rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon cluster */}
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="w-20 h-20 bg-white/30 rounded-2xl flex items-center justify-center backdrop-blur-sm transform -translate-y-2">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Announcement badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Bell className="h-4 w-4" />
              <span>Exciting News</span>
            </div>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Membership Services
              <br />
              <span className="text-noir-beige">Launching Soon!</span>
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our exclusive wellness community and unlock premium benefits, priority access, and personalized care
              experiences designed just for you.
            </p>

            {/* Features preview */}
            <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <Users className="h-6 w-6 mx-auto mb-2 text-noir-beige" />
                <div className="font-medium">Community Access</div>
                <div className="text-sm text-white/80">Exclusive events & workshops</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <Heart className="h-6 w-6 mx-auto mb-2 text-noir-beige" />
                <div className="font-medium">Priority Care</div>
                <div className="text-sm text-white/80">Faster appointments & support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <Sparkles className="h-6 w-6 mx-auto mb-2 text-noir-beige" />
                <div className="font-medium">Wellness Perks</div>
                <div className="text-sm text-white/80">Discounts on services & products</div>
              </div>
            </div>

            {/* Email signup form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for updates"
                    className="flex-1 px-6 py-4 rounded-full text-noir-brown placeholder-noir-mauve focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/95 backdrop-blur-sm"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group bg-white text-noir-olive px-8 py-4 rounded-full font-semibold hover:bg-noir-cream transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-noir-olive border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Get Updates
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
                <p className="text-white/70 text-sm mt-3">
                  Be the first to know when memberships launch. No spam, just wellness updates.
                </p>
              </form>
            ) : (
              <div className="max-w-md mx-auto bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <CheckCircle className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">You&apos;re on the list!</h3>
                <p className="text-white/80">We&apos;ll notify you as soon as membership services are available.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto text-white">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="currentColor" fillOpacity="0.1" />
        </svg>
      </div>
    </section>
  )
}
