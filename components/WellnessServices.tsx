"use client"

import { Leaf, Dumbbell, Droplets, GiftIcon as Massage, Utensils, DollarSign } from "lucide-react"
import Link from "next/link"

export default function WellnessServices() {
  const services = [
    {
      icon: Utensils,
      title: "Nutrition & Weight Management",
      description: "Personalized nutrition counseling and sustainable weight management strategies.",
      type: "In-House",
      features: ["Custom meal planning", "Metabolic assessments", "Lifestyle coaching", "Progress monitoring"],
    },
    {
      icon: Dumbbell,
      title: "Personal Training & Movement",
      description: "Tailored fitness programs designed to meet your individual goals and abilities.",
      type: "Certified Partners",
      features: ["One-on-one training", "Group fitness classes", "Movement therapy", "Injury prevention"],
    },
    {
      icon: Droplets,
      title: "IV Drip & Vitamin Infusions",
      description: "Targeted nutrient therapy to boost energy, immunity, and overall wellness.",
      type: "Licensed Nurse Provider",
      features: ["Hydration therapy", "Vitamin B12 shots", "Immune boosters", "Energy enhancement"],
    },
    {
      icon: Massage,
      title: "Massage Therapy",
      description: "Therapeutic massage services to reduce stress and promote physical wellness.",
      type: "Licensed Partner",
      features: ["Deep tissue massage", "Relaxation therapy", "Sports massage", "Stress relief"],
    },
  ]

  const additionalServices = [
    { icon: Leaf, title: "Yoga & Mindfulness", type: "Partner Program" },
    { icon: DollarSign, title: "Financial Wellness", type: "Trusted Advisors" },
  ]

  return (
    <section id="wellness" className="section-padding bg-gradient-to-br from-noir-beige/30 to-noir-cream/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-8 w-8 text-noir-olive mr-3" />
            <span className="text-noir-olive font-medium uppercase tracking-wide">Wellness Division</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-noir-brown mb-6">Noir Well Health</h2>
          <p className="text-xl text-noir-mauve leading-relaxed">
            Holistic wellness services that complement your medical care. Our integrated approach supports your journey
            to optimal health and vitality.
          </p>
          <Link
            href="/wellness"
            className="inline-flex items-center justify-center mt-6 bg-noir-olive text-white px-8 py-3 rounded-full font-medium hover:bg-noir-brown transition-colors duration-300"
          >
            View All Wellness Services
          </Link>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-noir-beige/50"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-noir-beige/30 rounded-xl flex items-center justify-center group-hover:bg-noir-beige/50 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-noir-olive" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-noir-brown">{service.title}</h3>
                    <span className="text-xs bg-noir-olive/10 text-noir-olive px-2 py-1 rounded-full">
                      {service.type}
                    </span>
                  </div>

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

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="bg-white/70 p-6 rounded-xl border border-noir-beige/50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-noir-beige/30 rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-noir-olive" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-noir-brown">{service.title}</h4>
                  <span className="text-sm text-noir-mauve">{service.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Events & Education */}
        <div className="bg-gradient-to-r from-noir-beige to-noir-rose rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-noir-brown mb-4">Community Events & Education</h3>
            <p className="text-noir-mauve mb-8 leading-relaxed">
              Join our wellness community through workshops, retreats, and educational events. Connect with others on
              similar health journeys while learning from our expert team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events"
                className="bg-noir-olive text-white px-8 py-3 rounded-full font-medium hover:bg-noir-brown transition-colors duration-300"
              >
                View Upcoming Events
              </Link>
              <Link
                href="/membership"
                className="border-2 border-noir-olive text-noir-olive px-8 py-3 rounded-full font-medium hover:bg-noir-olive hover:text-white transition-all duration-300"
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
