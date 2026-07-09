import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Wellness Services | Noir Well Health",
  description: "Nutrition Counseling, IV Therapy, Personal Training, Financial Planning.",
}

const pages = [
  { name: "Nutrition Counseling", href: "/wellness/nutrition", desc: "PCOS/insulin resistance focus, anti-inflammatory diets, weight management." },
  { name: "IV Therapy & Hydration", href: "/wellness/iv-therapy", desc: "Energy boost, immunity, hydration & detox packages." },
  { name: "Personal Training & Movement", href: "/wellness/training", desc: "Fitness planning, lifestyle & habit coaching, certified referrals." },
  { name: "Financial Planning", href: "/wellness/financial-planning", desc: "Trusted advisors for overall financial wellness." },
]

export default function WellnessPage() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-noir-brown mb-8">Wellness Services</h1>
          <ul className="space-y-6">
            {pages.map((p) => (
              <li key={p.name} className="bg-noir-cream/40 border border-noir-beige/60 p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-noir-brown">
                  <Link href={p.href} className="hover:text-noir-olive">{p.name}</Link>
                </h2>
                <p className="text-noir-mauve">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  )
}
