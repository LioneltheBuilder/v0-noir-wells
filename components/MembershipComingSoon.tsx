"use client"

import type React from "react"

import { useState } from "react"
import { Star, Crown, Sparkles, Bell, ArrowRight, CheckCircle, Clock, Users } from "lucide-react"

export default function MembershipComingSoon() {
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
    <div className="relative bg-gradient-to-br from-noir-olive/10 via-noir-beige/20 to-noir-rose/15 rounded-2xl p-8 md:p-12 mb-12 overflow-hidden border border-noir-beige/40">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-6 right-10 w-24 h-24 bg-noir-olive rounded-full blur-3xl"></div>
        <div className="absolute bottom-8 left-8 w-20 h-20 bg-noir-brown rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-noir-olive rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-noir-beige rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10">
        {/* Icon cluster representing membership tiers */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-white to-noir-cream rounded-xl flex items-center justify-center shadow-lg border border-white/60">
            <Star className="h-7 w-7 text-noir-olive" />
          </div>
          <div className="w-18 h-18 bg-gradient-to-br from-white to-noir-beige rounded-xl flex items-center justify-center shadow-xl border border-white/80 transform -translate-y-2">
            <Crown className="h-9 w-9 text-noir-brown" />
          </div>
          <div className="w-14 h-14 bg-gradient-to-br from-white to-noir-cream rounded-xl flex items-center justify-center shadow-lg border border-white/60">
            <Sparkles className="h-7 w-7 text-noir-olive" />
          </div>
        </div>

        {/* Notice badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-noir-olive/15 backdrop-blur-sm text-noir-brown px-5 py-2 rounded-full text-sm font-medium border border-noir-olive/30">
            <Clock className="h-4 w-4 text-noir-olive" />
            <span>Exciting Update</span>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-noir-brown mb-4 leading-tight">
            Our Membership Section is
            <br />
            <span className="text-noir-olive">Coming Soon!</span>
          </h3>
          <p className="text-lg md:text-xl text-noir-mauve max-w-3xl mx-auto leading-relaxed">
            The details you see now are placeholders to give you a glimpse of what's ahead. We're crafting exclusive
            membership tiers with premium benefits, community access, and personalized wellness experiences.
          </p>
        </div>

        {/* Preview membership benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center border border-white/50 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-noir-olive to-noir-brown rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="font-semibold text-noir-brown mb-2">Community Access</div>
            <div className="text-sm text-noir-mauve">Exclusive events, workshops, and member-only experiences</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center border border-white/50 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-noir-olive to-noir-brown rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div className="font-semibold text-noir-brown mb-2">Priority Care</div>
            <div className="text-sm text-noir-mauve">Faster appointments, dedicated support, and premium services</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center border border-white/50 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-noir-olive to-noir-brown rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="font-semibold text-noir-brown mb-2">Wellness Perks</div>
            <div className="text-sm text-noir-mauve">Discounts on services, products, and partner offerings</div>
          </div>
        </div>

        {/* Membership tier preview */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/60">
          <div className="text-center mb-4">
            <h4 className="text-xl font-semibold text-noir-brown mb-2">Preview: Membership Tiers</h4>
            <p className="text-noir-mauve text-sm">Three thoughtfully designed levels to meet your wellness needs</p>
          </div>
          <div className="flex justify-center items-center gap-8">
            <div className="text-center">
              <Star className="h-8 w-8 text-noir-olive mx-auto mb-2" />
              <div className="font-medium text-noir-brown text-sm">Essential</div>
              <div className="text-xs text-noir-mauve">Starting tier</div>
            </div>
            <div className="text-center">
              <Sparkles className="h-10 w-10 text-noir-brown mx-auto mb-2" />
              <div className="font-medium text-noir-brown">Elevated</div>
              <div className="text-xs text-noir-mauve">Most popular</div>
            </div>
            <div className="text-center">
              <Crown className="h-8 w-8 text-noir-olive mx-auto mb-2" />
              <div className="font-medium text-noir-brown text-sm">Elite</div>
              <div className="text-xs text-noir-mauve">Premium experience</div>
            </div>
          </div>
        </div>

        {/* Email signup form */}
        {!isSubmitted ? (
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Be first to access memberships"
                  className="flex-1 px-5 py-4 rounded-full text-noir-brown placeholder-noir-mauve/70 focus:outline-none focus:ring-2 focus:ring-noir-olive/50 bg-white/90 backdrop-blur-sm border border-white/70 shadow-sm"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group bg-gradient-to-r from-noir-olive to-noir-brown text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Bell className="h-4 w-4" />
                      Get Early Access
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
            <p className="text-noir-mauve/80 text-sm mt-4 text-center">
              Join our VIP list for exclusive early access and special launch pricing.
            </p>
          </div>
        ) : (
          <div className="max-w-lg mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/70 text-center shadow-lg">
            <CheckCircle className="h-12 w-12 text-noir-olive mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-noir-brown mb-3">You're on our VIP list!</h4>
            <p className="text-noir-mauve">
              We'll notify you first when memberships launch, plus you'll get exclusive early access pricing.
            </p>
          </div>
        )}

        {/* Additional CTA */}
        <div className="text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.location.reload()}
              className="text-noir-olive hover:text-noir-brown font-medium underline decoration-2 underline-offset-4 hover:decoration-noir-brown transition-colors"
            >
              Check back for updates
            </button>
            <span className="text-noir-mauve/60 text-sm">•</span>
            <a
              href="#about"
              className="text-noir-olive hover:text-noir-brown font-medium underline decoration-2 underline-offset-4 hover:decoration-noir-brown transition-colors"
            >
              Learn more about our mission
            </a>
          </div>
        </div>
      </div>

      {/* Subtle decorative border with gradient */}
      <div className="absolute inset-0 rounded-2xl border border-gradient-to-r from-noir-beige/30 via-white/40 to-noir-rose/30 pointer-events-none"></div>
    </div>
  )
}
