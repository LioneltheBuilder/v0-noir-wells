"use client"

import Image from "next/image"
import { Award, Heart, Users, Stethoscope } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every interaction is rooted in empathy, respect, and genuine concern for your wellbeing.",
    },
    {
      icon: Users,
      title: "Cultural Awareness",
      description: "We honor diverse backgrounds and provide culturally sensitive healthcare for all communities.",
    },
    {
      icon: Stethoscope,
      title: "Clinical Excellence",
      description: "Evidence-based practice combined with personalized attention for optimal health outcomes.",
    },
    {
      icon: Award,
      title: "Holistic Approach",
      description: "Integrating medical care with wellness services for comprehensive health and lifestyle support.",
    },
  ]

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Patients Served" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Member Support" },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Founder Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div>
              <span className="text-noir-olive font-medium uppercase tracking-wide">Meet Our Founder</span>
              <h2 className="text-4xl md:text-5xl font-bold text-noir-brown mt-2 mb-6">Annita Taylor, NP</h2>
            </div>

            <p className="text-xl text-noir-mauve leading-relaxed">
              With over 15 years of experience in healthcare, Nurse Practitioner Annita Taylor founded Noir Well Health
              to bridge the gap between clinical excellence and holistic wellness.
            </p>

            <p className="text-noir-mauve leading-relaxed">
              Her vision was to create a healthcare experience that honors the whole person—addressing not just
              symptoms, but the underlying factors that contribute to optimal health and wellbeing. Through Noir Well
              Health, she combines evidence-based medical practice with culturally-aware, community-centered care.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-noir-olive rounded-full mr-4"></div>
                <span className="text-noir-brown">Certified & Licensed Nurse Practitioner</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-noir-olive rounded-full mr-4"></div>
                <span className="text-noir-brown">Master&apos;s in Adult Health</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-noir-olive rounded-full mr-4"></div>
                <span className="text-noir-brown">Integrative Health Certification (In Progress)</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Annita%20Potrait%203.JPG-Xqb5hWEZCA3YDTX3t5tgCETVkOB0EH.jpeg"
                alt="Annita Taylor, NP - Founder of Noir Well Health"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-noir-beige/30 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-noir-olive/20 rounded-full"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-noir-brown mb-6">Our Core Values</h3>
            <p className="text-xl text-noir-mauve leading-relaxed">
              These principles guide everything we do, from clinical care to community engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-noir-olive to-noir-brown rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-noir-brown mb-3">{value.title}</h4>
                <p className="text-noir-mauve leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-noir-cream to-noir-beige rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-noir-brown mb-4">Trusted by Our Community</h3>
            <p className="text-noir-mauve max-w-2xl mx-auto">
              Our commitment to excellence is reflected in the trust our patients place in us and the outcomes we
              achieve together.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-noir-olive mb-2">{stat.number}</div>
                <div className="text-noir-brown font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
