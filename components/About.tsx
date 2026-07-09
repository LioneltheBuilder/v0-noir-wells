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

  const credentials = [
    "Licensed Adult Nurse Practitioner",
    "Master's in Adult Health",
    "Integrative Health Certification (In Progress)",
  ]

  const professionalHighlights = [
    "Founder & Medical Director, Noir Well Adult Health NP, P.C.",
    "Healthcare Executive",
    "Published Author",
    "15+ Years of Healthcare Experience",
    "Community Health Leader",
    "Multi-Award Recipient",
    "Featured on NY1 News – New Yorker of the Week",
    "Interviewed by FOX 5 New York",
    "Featured in the Brooklyn Eagle",
    "Two-Time Schneps Media Award Recipient",
    "Brooklyn Chamber of Commerce / Fiserv / Clover Small Business Award Recipient",
    "Recipient of New York State Senate and New York City Council Citations",
  ]

  const teamMembers = [
    {
      name: "Richard C.",
      role: "Billing Specialist & Practice Coordinator"
    },
    {
      name: "Haydee N.",
      role: "Medical Assistant"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">

        {/* Leadership Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <div>
              <span className="text-noir-olive font-medium uppercase tracking-wide">Leadership</span>
              <h2 className="text-4xl md:text-5xl font-bold text-noir-brown mt-2 mb-2">Annita Taylor-Hall, ANP</h2>
              <h3 className="text-2xl font-semibold text-noir-olive mb-6">Founder & Medical Director</h3>
            </div>

            <p className="text-xl text-noir-mauve leading-relaxed">
              Annita Taylor-Hall is a Licensed Adult Nurse Practitioner, healthcare executive, published author, and entrepreneur with more than 15 years of healthcare experience. As the Founder and Medical Director of Noir Well Adult Health NP, P.C., she is committed to delivering evidence-based primary care that is compassionate, culturally responsive, and centered on the whole person.
            </p>

            <p className="text-noir-mauve leading-relaxed">
              Her vision for Noir Well Health is to bridge clinical excellence with prevention, education, and community engagement—creating a healthcare experience that empowers patients to take an active role in their long-term health and wellness while improving health outcomes throughout the communities we serve.
            </p>

            <p className="text-noir-mauve leading-relaxed">
              Recognized for her leadership in healthcare, entrepreneurship, and community service, Annita has received numerous professional and civic honors and has been featured by multiple media outlets for her contributions to healthcare and public service. Today, she continues to lead Noir Well Health’s mission of delivering accessible, high-quality primary care while advancing community wellness through prevention, education, and collaborative partnerships.
            </p>

            <div className="pt-4">
              <h4 className="text-xl font-bold text-noir-brown mb-4">Credentials</h4>
              <div className="space-y-3 mb-8">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-noir-olive rounded-full mr-4 mt-2 shrink-0"></div>
                    <span className="text-noir-brown">{credential}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-xl font-bold text-noir-brown mb-4">Professional Highlights</h4>
              <div className="space-y-3">
                {professionalHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-noir-olive rounded-full mr-4 mt-2 shrink-0"></div>
                    <span className="text-noir-brown">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-full flex items-start">
            <div className="relative z-10 w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Annita%20Potrait%203.JPG-Xqb5hWEZCA3YDTX3t5tgCETVkOB0EH.jpeg"
                alt="Annita Taylor-Hall - Founder & Medical Director of Noir Well Health"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl object-cover w-full"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-noir-beige/30 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-noir-olive/20 rounded-full"></div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-noir-brown mb-6">Meet Our Team</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-noir-cream to-noir-beige rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="text-2xl font-bold text-noir-brown mb-2">{member.name}</h4>
                <p className="text-lg text-noir-olive font-medium">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-noir-mauve italic">
              As our practice continues to grow, we’ll continue adding providers, specialists, and administrative team members as they complete onboarding.
            </p>
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
