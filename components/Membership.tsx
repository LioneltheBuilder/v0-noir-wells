"use client"

import { Check, Star, Crown, Sparkles } from "lucide-react"

export default function Membership() {
  const tiers = [
    {
      name: "Essential",
      icon: Star,
      price: "$49",
      period: "/month",
      description: "Perfect for those starting their wellness journey",
      features: [
        "Access to wellness education library",
        "Virtual content and workshops",
        "Monthly health check-in sessions",
        "Community forum access",
        "Basic nutrition guidance",
        "Wellness newsletter",
      ],
      cta: "Start Essential",
      popular: false,
    },
    {
      name: "Elevated",
      icon: Sparkles,
      price: "$129",
      period: "/month",
      description: "Enhanced wellness with exclusive benefits",
      features: [
        "Everything in Essential",
        "20% discount on yoga classes",
        "15% discount on IV therapy",
        "20% discount on massage therapy",
        "Priority event registration",
        "Quarterly wellness assessments",
        "Personalized wellness plans",
      ],
      cta: "Choose Elevated",
      popular: true,
    },
    {
      name: "Elite",
      icon: Crown,
      price: "$249",
      period: "/month",
      description: "Premium concierge wellness experience",
      features: [
        "Everything in Elevated",
        "Concierge NP access",
        "Private consultation sessions",
        "Financial wellness coaching",
        "Exclusive retreat access",
        "VIP event experiences",
        "Custom supplement protocols",
      ],
      cta: "Go Elite",
      popular: false,
    },
  ]

  return (
    <section id="membership" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-noir-brown mb-6">Membership Tiers</h2>
          <p className="text-xl text-noir-mauve leading-relaxed">
            Choose the membership level that best supports your wellness journey. All tiers include access to our
            community and educational resources.
          </p>
          <div className="mt-6 text-sm text-noir-mauve italic">
            *Memberships complement insurance coverage and provide access to wellness services not typically covered by
            health plans.
          </div>
        </div>

        {/* Membership Cards - with opacity to show they're placeholders */}
        <div className="opacity-60 relative">
          {/* Overlay to indicate placeholder status */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 rounded-2xl pointer-events-none z-10"></div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl ${
                  tier.popular
                    ? "from-noir-olive to-noir-brown text-white scale-105"
                    : "from-noir-cream to-white border border-noir-beige/50 hover:border-noir-olive/30"
                }`}
              >
                {/* Placeholder badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-xs px-2 py-1 rounded-full border border-white/30">
                  Preview
                </div>

                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-noir-beige text-noir-brown px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                      tier.popular ? "bg-white/20" : "bg-noir-olive/10"
                    }`}
                  >
                    <tier.icon className={`h-8 w-8 ${tier.popular ? "text-white" : "text-noir-olive"}`} />
                  </div>

                  <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? "text-white" : "text-noir-brown"}`}>
                    {tier.name}
                  </h3>

                  <div className="flex items-baseline justify-center mb-2">
                    <span className={`text-4xl font-bold ${tier.popular ? "text-white" : "text-noir-brown"}`}>
                      {tier.price}
                    </span>
                    <span className={`text-lg ${tier.popular ? "text-white/80" : "text-noir-mauve"}`}>
                      {tier.period}
                    </span>
                  </div>

                  <p className={`text-sm ${tier.popular ? "text-white/90" : "text-noir-mauve"}`}>{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check
                        className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${tier.popular ? "text-white" : "text-noir-olive"}`}
                      />
                      <span className={`text-sm ${tier.popular ? "text-white/90" : "text-noir-brown"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`block w-full text-center py-3 rounded-full font-medium transition-all duration-300 cursor-not-allowed ${
                    tier.popular
                      ? "bg-white/20 text-white/60 border border-white/30"
                      : "bg-noir-olive/20 text-noir-olive/60 border border-noir-olive/30"
                  }`}
                >
                  Coming Soon
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="bg-noir-cream/50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-noir-brown mb-3">Flexible Membership Options</h4>
            <p className="text-noir-mauve text-sm leading-relaxed">
              All memberships will be month-to-month with no long-term contracts. Upgrade or downgrade your membership
              at any time. Corporate and family plans will be available upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
