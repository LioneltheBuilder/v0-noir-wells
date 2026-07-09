"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Printer } from 'lucide-react'
import { contact } from "@/lib/config"

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
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

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
                  <Link
                    key={s.label}
                    href={s.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"
                    aria-label={s.label}
                  >
                    <s.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
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
