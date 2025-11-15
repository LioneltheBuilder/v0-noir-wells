import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Primary Care | Noir Well Health",
  description: "Comprehensive adult and pediatric primary care.",
}

export default function PrimaryCare() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-gradient-to-br from-noir-cream/50 to-white">
        <div className="container-custom prose prose-neutral max-w-3xl">
          <h1 className="text-noir-brown">Primary Care</h1>
          <p>Chronic disease management (e.g., hypertension, diabetes), preventive screenings, sick visits & follow-ups, medication management.</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
