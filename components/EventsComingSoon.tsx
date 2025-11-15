"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Users, Heart, Sparkles, Bell, ArrowRight, CheckCircle, Clock } from "lucide-react"

export default function EventsComingSoon() {
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
    <div className="relative bg-gradient-to-br from-noir-beige/40 via-noir-cream/60 to-noir-rose/40 rounded-2xl p-8 md:p-12 mb-12 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 right-8 w-20 h-20 bg-noir-olive rounded-full blur-2xl"></div>
        <div className="absolute bottom-6 left-6 w-16 h-16 bg-noir-brown rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-noir-olive rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10">
        {/* Icon cluster */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
            <Calendar className="h-7 w-7 text-noir-olive" />
          </div>
          <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transform -translate-y-1">
            <Users className="h-8 w-8 text-noir-brown" />
          </div>
          <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
            <Heart className="h-7 w-7 text-noir-olive" />
          </div>
        </div>

        {/* Notice badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-noir-olive/10 backdrop-blur-sm text-noir-brown px-4 py-2 rounded-full text-sm font-medium border border-noir-olive/20">
            <Clock className="h-4 w-4 text-noir-olive" />
            <span>Coming Soon</span>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center mb-6">
          <h3 className="text-3xl md:text-4xl font-bold text-noir-brown mb-4">
            Stay Tuned: Our Events Section is Coming Soon!
          </h3>
          <p className="text-lg md:text-xl text-noir-mauve max-w-3xl mx-auto leading-relaxed">
            The events you see now are just placeholders to give you a glimpse of what's to come. We're crafting
            meaningful workshops, wellness retreats, and community gatherings designed to support your health journey.
          </p>
        </div>

        {/* Preview features */}
        <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center border border-white/40">
            <Calendar className="h-6 w-6 mx-auto mb-2 text-noir-olive" />
            <div className="font-medium text-noir-brown text-sm">Wellness Workshops</div>
            <div className="text-xs text-noir-mauve">Educational sessions</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center border border-white/40">
            <Users className="h-6 w-6 mx-auto mb-2 text-noir-olive" />
            <div className="font-medium text-noir-brown text-sm">Community Events</div>
            <div className="text-xs text-noir-mauve">Connect & engage</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center border border-white/40">
            <Sparkles className="h-6 w-6 mx-auto mb-2 text-noir-olive" />
            <div className="font-medium text-noir-brown text-sm">Wellness Retreats</div>
            <div className="text-xs text-noir-mauve">Transformative experiences</div>
          </div>
        </div>

        {/* Email signup form */}
        {!isSubmitted ? (
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Get notified when events launch"
                  className="flex-1 px-4 py-3 rounded-full text-noir-brown placeholder-noir-mauve/70 focus:outline-none focus:ring-2 focus:ring-noir-olive/50 bg-white/80 backdrop-blur-sm border border-white/60"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group bg-noir-olive text-white px-6 py-3 rounded-full font-medium hover:bg-noir-brown transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Bell className="h-4 w-4" />
                      Notify Me
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
            <p className="text-noir-mauve/80 text-sm mt-3 text-center">
              Be the first to join our wellness community events.
            </p>
          </div>
        ) : (
          <div className="max-w-md mx-auto bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/60 text-center">
            <CheckCircle className="h-10 w-10 text-noir-olive mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-noir-brown mb-2">You're on our events list!</h4>
            <p className="text-noir-mauve text-sm">We'll let you know as soon as our community events are ready.</p>
          </div>
        )}

        {/* Additional CTA */}
        <div className="text-center mt-6">
          <button
            onClick={() => window.location.reload()}
            className="text-noir-olive hover:text-noir-brown font-medium text-sm underline decoration-2 underline-offset-4 hover:decoration-noir-brown transition-colors"
          >
            Check back soon for updates
          </button>
        </div>
      </div>

      {/* Subtle decorative border */}
      <div className="absolute inset-0 rounded-2xl border border-white/30 pointer-events-none"></div>
    </div>
  )
}
