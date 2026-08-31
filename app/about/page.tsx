import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { brand, contact, zocdocLink } from "@/lib/config"
import { Heart, Users, Handshake, MapPin, Phone, Mail, ExternalLink, Printer } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Noir Well Health",
  description:
    "A unified care experience: Medical. Wellness. Lifestyle. Learn about our mission, team, partners, and how to get in touch.",
}

export default function UnifiedAboutPage() {
  const team = [
    {
      name: "Annita Taylor-Hall, ANP",
      role: "Founder, Nurse Practitioner",
      img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Annita%20Potrait%203.JPG-Xqb5hWEZCA3YDTX3t5tgCETVkOB0EH.jpeg",
      bio: "Licensed Adult Nurse Practitioner. Master's in Adult Health. Integrative Health Certification (In Progress).",
    },
    {
      name: "Alex Johnson, RN",
      role: "Clinical Nurse",
      img: "/images/patient-consultation.png",
      bio: "Delivering compassionate, evidence-based patient care with a focus on prevention and education.",
    },
    {
      name: "Jordan Smith",
      role: "Wellness Coach",
      img: "/images/fitness-training.png",
      bio: "Guides sustainable lifestyle change through movement, nutrition, and mindset coaching.",
    },
  ]

  const partners = [
    {
      name: "The Well-Ed Project",
      logo: "/placeholder.svg?height=60&width=200",
      blurb: "Community health outreach, SDOH screenings, and patient navigation.",
    },
    {
      name: "Wellness Collaborators",
      logo: "/placeholder.svg?height=60&width=200",
      blurb: "Yoga, massage therapy, and personal training with licensed partners.",
    },
  ]

  return (
    <main id="main" className="min-h-screen">
      <Header />

      {/* Hero / Intro */}
      <section className="relative overflow-hidden bg-gradient-to-br from-noir-cream via-white to-noir-beige">
        {/* Subtle backlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 right-[-10%] h-64 w-64 rounded-full bg-noir-olive/10 blur-3xl"
        />
        <div className="container-custom py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-noir-olive font-medium uppercase tracking-wide">
              <Heart className="h-5 w-5" /> {brand.tagline}
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-noir-brown">Who We Are</h1>
            <p className="mt-6 text-lg md:text-xl text-noir-mauve">
              Culturally rooted. Clinically sound. Unapologetically aligned. At Noir Well Health, we deliver
              whole-person care through intentional, high-touch services that are both culturally competent and
              clinically excellent. We proudly bridge grassroots community care with a luxury-aligned wellness
              experience — offering care that is not only accessible, but deeply intentional in its design and delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-noir-olive/10 text-noir-olive px-4 py-1.5 text-sm font-medium">
                Primary Care
              </span>
              <span className="inline-flex items-center rounded-full bg-noir-olive/10 text-noir-olive px-4 py-1.5 text-sm font-medium">
                Women&apos;s Health
              </span>
              <span className="inline-flex items-center rounded-full bg-noir-olive/10 text-noir-olive px-4 py-1.5 text-sm font-medium">
                Behavioral Health
              </span>
              <span className="inline-flex items-center rounded-full bg-noir-olive/10 text-noir-olive px-4 py-1.5 text-sm font-medium">
                Nutrition & IV Therapy
              </span>
            </div>
          </div>
        </div>

        {/* Local page nav */}
        <div className="border-t border-noir-beige/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
          <nav aria-label="On this page" className="container-custom">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 py-4 text-sm font-medium">
              <li>
                <a href="#who-we-are" className="text-noir-brown hover:text-noir-olive">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#team" className="text-noir-brown hover:text-noir-olive">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#partners" className="text-noir-brown hover:text-noir-olive">
                  Partners & Collaborators
                </a>
              </li>
              <li>
                <a href="#contact" className="text-noir-brown hover:text-noir-olive">
                  Get in Touch
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* WHO WE ARE (anchor target) */}
      <section id="who-we-are" className="section-padding scroll-mt-[calc(var(--banner-height,0px)+6rem)] bg-white">
        <div className="container-custom grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-noir-brown">Our Mission</h2>
            <p className="text-noir-mauve text-lg">
              We unify medical excellence and holistic wellness to deliver measurable outcomes and an elevated care
              experience. Our approach is relationship-driven, culturally aware, and grounded in evidence-based
              practice.
            </p>
            <ul className="space-y-3 text-noir-brown">
              <li className="flex">
                <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-noir-olive" />
                Whole-person care that honors your lived experience and health goals.
              </li>
              <li className="flex">
                <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-noir-olive" />
                Seamless coordination across primary care and wellness services.
              </li>
              <li className="flex">
                <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-noir-olive" />
                Community engagement and education through workshops and outreach.
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <Image
              src="/images/medical-office.png"
              alt="Modern, welcoming medical office with warm design elements"
              width={560}
              height={420}
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="section-padding scroll-mt-[calc(var(--banner-height,0px)+6rem)] bg-gradient-to-br from-noir-cream/50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center justify-center gap-2 text-noir-olive font-medium uppercase tracking-wide">
              <Users className="h-5 w-5" /> Meet the Team
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-noir-brown">People Behind the Care</h2>
            <p className="mt-4 text-noir-mauve text-lg">
              Our clinicians and wellness partners work as one integrated team to guide you from where you are to where
              you want to be.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((m) => (
              <article key={m.name} className="bg-white rounded-2xl border border-noir-beige/60 p-6">
                <Image
                  src={m.img || "/placeholder.svg"}
                  alt={`${m.name} - ${m.role}`}
                  width={340}
                  height={420}
                  className="w-full h-auto rounded-xl object-cover"
                />
                <h3 className="mt-4 text-xl font-semibold text-noir-brown">{m.name}</h3>
                <p className="text-noir-olive">{m.role}</p>
                <p className="mt-3 text-noir-mauve text-sm leading-relaxed">{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="section-padding scroll-mt-[calc(var(--banner-height,0px)+6rem)] bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center justify-center gap-2 text-noir-olive font-medium uppercase tracking-wide">
              <Handshake className="h-5 w-5" /> Partners & Collaborators
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-noir-brown">Stronger Together</h2>
            <p className="mt-4 text-noir-mauve text-lg">
              We collaborate with mission-aligned organizations, licensed providers, and community leaders to expand
              access and impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {partners.map((p) => (
              <div key={p.name} className="p-6 rounded-xl border border-noir-beige/60 bg-noir-cream/30 text-center">
                <Image
                  src={p.logo || "/placeholder.svg"}
                  alt={`${p.name} logo`}
                  width={200}
                  height={60}
                  className="mx-auto h-[60px] w-auto object-contain"
                />
                <div className="mt-3 font-medium text-noir-brown">{p.name}</div>
                <p className="mt-1 text-sm text-noir-mauve">{p.blurb}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Image
              src="/images/community-outreach.png"
              alt="Community health outreach event with diverse participants"
              width={800}
              height={400}
              className="rounded-2xl shadow-xl object-cover mx-auto"
            />
            <p className="mt-4 text-noir-mauve">Community outreach and wellness events</p>
          </div>
        </div>
      </section>

      {/* CONTACT / GET IN TOUCH */}
      <section id="contact" className="section-padding scroll-mt-[calc(var(--banner-height,0px)+6rem)] bg-gradient-to-br from-noir-olive to-noir-brown">
        <div className="container-custom grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
            <p className="mt-3 text-white/90">
              We don&apos;t collect PHI on this site. For appointments, please use ZocDoc. For general questions, reach us by
              phone or email.
            </p>

            <div className="mt-6 space-y-3 text-white/90">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-white/80" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center">
                <Printer className="h-5 w-5 mr-3 text-white/80" />
                <span>{contact.fax}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-white/80" />
                <span>{contact.email}</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-white/80" />
                <span>
                  {contact.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={zocdocLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white text-noir-olive px-6 py-3 font-medium hover:bg-noir-cream transition-colors"
              >
                Book on ZocDoc <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/events"
                className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-6 py-3 font-medium hover:bg-white/10"
              >
                View Events
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/community-event.png"
              alt="Community wellness event with diverse families"
              width={560}
              height={420}
              className="rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Back to top */}
      <div className="bg-white">
        <div className="container-custom py-6 text-center">
          <a href="#main" className="text-noir-olive hover:text-noir-brown font-medium">
            Back to top
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
