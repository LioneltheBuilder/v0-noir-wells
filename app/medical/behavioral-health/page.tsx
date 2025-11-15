import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Behavioral Health | Noir Well Health",
  description: "Screening, referrals, and mind-body wellness planning.",
}

export default function BehavioralHealth() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-gradient-to-br from-noir-cream/50 to-white">
        <div className="container-custom prose prose-neutral max-w-3xl">
          <h1 className="text-noir-brown">Behavioral Health</h1>
          <ul>
            <li>Stress, anxiety, and depression screening</li>
            <li>Referrals for therapy or psychiatric services</li>
            <li>Wellness planning (mind-body integration)</li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  )
}
