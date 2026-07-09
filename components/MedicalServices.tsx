"use client"

import { Stethoscope, Heart, Brain, Users, Shield, Calendar } from "lucide-react"
import Link from "next/link"

export default function MedicalServices() {
  const services = [
    {
      icon: Stethoscope,
      title: "Primary Care",
      description:
        "Comprehensive healthcare for adults, focusing on prevention, wellness, and chronic disease management.",
      features: ["Annual physicals", "Chronic disease management", "Preventive screenings", "Health maintenance"],
    },
    {
      icon: Heart,
      title: "Women's Health",
      description: "Specialized care addressing the unique health needs of women throughout all life stages.",
      features: ["Reproductive health", "Hormonal balance", "Menopause management", "Wellness screenings"],
    },
    {
      icon: Brain,
      title: "Behavioral Health",
      description: "Integrated mental health services supporting emotional wellness and psychological resilience.",
      features: ["Mental health assessments", "Therapy referrals", "Medication management", "Crisis intervention"],
    },
    {
      icon: Users,
      title: "Geriatrics",
      description: "Specialized care for older adults, focusing on healthy aging and quality of life.",
      features: ["Age-related health issues", "Medication optimization", "Fall prevention", "Cognitive assessments"],
    },
    {
      icon: Stethoscope,
      title: "Pediatrics (Coming Soon)",
      description: "Pediatric primary care services for children and adolescents, launching soon.",
      features: ["Well-child visits", "Immunizations", "Developmental screenings", "Acute illness care"],
    },
  ]

  return (
    <section id="medical" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-noir-olive mr-3" />
            <span className="text-noir-olive font-medium uppercase tracking-wide">Medical Division</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-noir-brown mb-6">Noir Well Adult Health NP</h2>
          <p className="text-xl text-noir-mauve leading-relaxed">
            Clinical excellence rooted in compassionate, culturally-aware care. Our medical services combine
            evidence-based practice with personalized attention.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-noir-cream to-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-noir-beige/50"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-noir-olive/10 rounded-xl flex items-center justify-center group-hover:bg-noir-olive/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-noir-olive" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-noir-brown mb-3">{service.title}</h3>
                  <p className="text-noir-mauve mb-4 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-noir-brown">
                        <div className="w-2 h-2 bg-noir-olive rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Insurance & Membership Info */}
        <div className="bg-gradient-to-r from-noir-olive to-noir-brown rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Insurance & Payment Options</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                We accept most major insurance plans for covered medical services. For uninsured or underinsured
                patients, our tiered membership options provide accessible care.
              </p>
              <div className="text-sm text-white/80 italic">
                *Memberships do not replace insurance and cannot be used for services billed through your health plan.
              </div>
            </div>

            <div className="space-y-4">
              <Link
                href="#membership"
                className="block bg-white text-noir-olive px-6 py-3 rounded-full font-medium text-center hover:bg-noir-cream transition-colors duration-300"
              >
                View Membership Options
              </Link>
              <Link
                href="#booking"
                className="block border-2 border-white text-white px-6 py-3 rounded-full font-medium text-center hover:bg-white hover:text-noir-olive transition-all duration-300"
              >
                <Calendar className="inline-block mr-2 h-4 w-4" />
                Schedule Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
