"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Printer } from 'lucide-react'
import { contact, social } from "@/lib/config"

export default function Footer() {
  const quickLinks = [
    { name: "Medical Services", href: "/medical" },
    { name: "Wellness Services", href: "/wellness" },
    { name: "Membership Plans", href: "/membership" },
    { name: "Events & Workshops", href: "/events" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const policy = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "HIPAA Notice", href: "/hipaa" },
    { name: "Accessibility", href: "/accessibility" },
  ]

  const socialLinks = [
    { icon: Facebook, href: social.facebook, label: "Facebook" },
    { icon: Instagram, href: social.instagram, label: "Instagram" },
    { icon: Twitter, href: social.twitter, label: "Twitter" },
    { icon: Linkedin, href: social.linkedin, label: "LinkedIn" },
  ]

  const [email, setEmail] = useState("")
  const [newsletterError, setNewsletterError] = useState("")
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setNewsletterError("Please enter a valid email address.")
      setNewsletterSuccess(false)
      return
    }
    setNewsletterError("")
    setNewsletterSuccess(true)
    setEmail("")
  }

  return (
    <footer className="bg-noir-brown text-white" role="contentinfo">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="inline-block mb-6" aria-label="Noir Well Health home">
                <Image src="/images/logo-beige.png" alt="Noir Well Health" width={180} height={60} className="h-12 w-auto" />
              </Link>
              <p className="text-white/80 mb-6 leading-relaxed">
                A unified care experience combining medical excellence with holistic wellness. Culturally rooted,
                community-centered healthcare for your whole self.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-white/60" />
                  <span className="text-white/80">{contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Printer className="h-4 w-4 mr-3 text-white/60" />
                  <span className="text-white/80">{contact.fax}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-white/60" />
                  <span className="text-white/80">{contact.email}</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-3 mt-1 text-white/60" />
                  <span className="text-white/80">
                    {contact.addressLines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.name}>
                    <Link href={l.href} className="text-white/80 hover:text-white">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6">Legal</h4>
              <ul className="space-y-3">
                {policy.map((l) => (
                  <li key={l.name}>
                    <Link href={l.href} className="text-white/80 hover:text-white">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"
                    aria-label={s.label}
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              {!newsletterSuccess ? (
                <form onSubmit={handleNewsletterSubmit} className="mb-6">
                  <label htmlFor="footer-newsletter" className="sr-only">
                    Email for newsletter
                  </label>
                  <div className="flex flex-col gap-2">
                    <input
                      id="footer-newsletter"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (newsletterError) setNewsletterError("")
                      }}
                      placeholder="Subscribe to our newsletter"
                      className="w-full px-4 py-2 rounded-full text-noir-brown placeholder:text-noir-mauve/70 focus:outline-none focus:ring-2 focus:ring-white/40"
                    />
                    <button
                      type="submit"
                      className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full font-medium transition-colors"
                    >
                      Subscribe
                    </button>
                  </div>
                  {newsletterError && <p className="mt-2 text-sm text-red-200">{newsletterError}</p>}
                </form>
              ) : (
                <p className="mb-6 text-sm text-white/90">Thank you for subscribing!</p>
              )}
              <div className="text-sm text-white/70">
                © {new Date().getFullYear()} Noir Well Health. All rights reserved.
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 py-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            {policy.map((l) => (
              <Link key={l.name} href={l.href} className="text-white/60 hover:text-white">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
