import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Medical Services | Noir Well Health",
  description: "Primary Care, Women’s Health, Behavioral Health.",
}

const pages = [
  { name: "Primary Care", href: "/medical/primary-care", desc: "Chronic disease management, preventive screenings, sick visits, medication management." },
  { name: "Women’s Health", href: "/medical/womens-health", desc: "Pap smears, postpartum care, menstrual health & PCOS support, hormone testing & menopause." },
  { name: "Behavioral Health", href: "/medical/behavioral-health", desc: "Screening for stress, anxiety, depression; referrals; mind-body wellness planning." },
]

export default function MedicalPage() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-noir-brown mb-8">Medical Services</h1>
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
