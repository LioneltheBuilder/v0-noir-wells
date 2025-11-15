import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Nutrition Counseling | Noir Well Health",
  description: "Holistic nutrition guidance focused on PCOS, insulin resistance, and anti-inflammatory diets.",
}

export default function Nutrition() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-gradient-to-br from-noir-cream/50 to-white">
        <div className="container-custom prose prose-neutral max-w-3xl">
          <h1 className="text-noir-brown">Nutrition Counseling</h1>
          <ul>
            <li>PCOS and insulin resistance-focused</li>
            <li>Anti-inflammatory diets</li>
            <li>Weight management</li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  )
}
