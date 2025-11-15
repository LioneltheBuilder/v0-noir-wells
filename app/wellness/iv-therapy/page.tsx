import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "IV Therapy & Hydration | Noir Well Health",
  description: "Targeted IV drips for energy, immunity, and hydration.",
}

export default function IVTherapy() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-gradient-to-br from-noir-cream/50 to-white">
        <div className="container-custom prose prose-neutral max-w-3xl">
          <h1 className="text-noir-brown">IV Therapy & Hydration</h1>
          <ul>
            <li>Energy boost</li>
            <li>Immunity</li>
            <li>Hydration and detox packages</li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  )
}
