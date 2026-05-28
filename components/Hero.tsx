"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, Stethoscope, Leaf } from "lucide-react"
import AnimatedHeading from "./animated-heading"

type HeroProps = {
  heading?: string
  subParts?: string[]
  intro?: string
}

export default function Hero({
  heading = "A Unified Care Experience",
  subParts = ["More energy.", "Better labs."],
  intro = `Culturally rooted. Clinically sound. Unapologetically aligned. At Noir Well Health, we deliver whole-person care through intentional, high-touch services that are both culturally competent and clinically excellent. We proudly bridge grassroots community care with a luxury-aligned wellness experience — offering care that is not only accessible, but deeply intentional in its design and delivery.`,
}: HeroProps) {
  const [topPadding, setTopPadding] = useState(192)

  useEffect(() => {
    const calculatePadding = () => {
      const banner = document.querySelector("[data-announcement-banner]")
      const header = document.querySelector("header")

      const bannerHeight = banner ? banner.getBoundingClientRect().height : 0
      const headerHeight = header ? header.getBoundingClientRect().height : 80

      setTopPadding(bannerHeight + headerHeight + 24)
    }

    calculatePadding()
    const interval = setInterval(calculatePadding, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      style={{ paddingTop: `${topPadding}px` }}
      className="
        relative min-h-screen flex items-center
        bg-gradient-to-br from-noir-cream via-white to-noir-beige
        transition-all duration-300
      "
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-5">
              <AnimatedHeading text={heading} className="text-4xl md:text-5xl lg:text-6xl" />

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-8 border-t border-noir-cream">
                <div className="text-center">
                  <div className="text-2xl font-bold text-noir-brown">500+</div>
                  <div className="text-sm text-noir-mauve">Patients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-noir-brown">15+</div>
                  <div className="text-sm text-noir-mauve">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-noir-brown">98%</div>
                  <div className="text-sm text-noir-mauve">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            <p className="text-base md:text-lg text-noir-mauve leading-relaxed max-w-2xl">{intro}</p>

            {/* Split CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/medical"
                className="group flex items-center justify-center bg-noir-olive text-white px-10 py-5 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <Stethoscope className="mr-2 h-5 w-5" />
                Medical Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/wellness"
                className="group flex items-center justify-center border-2 border-noir-olive text-noir-olive px-10 py-5 rounded-full font-semibold text-lg hover:bg-noir-olive hover:text-white transition-all"
              >
                <Leaf className="mr-2 h-5 w-5" />
                Wellness Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/hero-main.png"
                alt="Diverse healthcare professionals and patients in welcoming medical office"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl object-cover"
              />
            </div>

            {/* Floating decorative elements (very subtle) */}
            <div
              aria-hidden="true"
              className="absolute -top-4 -right-4 w-24 h-24 bg-noir-olive/10 rounded-full flex items-center justify-center motion-safe:animate-nw-float"
            >
              <Heart className="h-8 w-8 text-noir-olive" />
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-noir-beige/50 rounded-full flex items-center justify-center motion-safe:animate-nw-float"
              style={{ animationDuration: "10s" }}
            >
              <Leaf className="h-10 w-10 text-noir-olive" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
