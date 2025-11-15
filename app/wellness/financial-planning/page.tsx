import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Financial Planning | Noir Well Health",
  description: "Financial wellness through trusted advisors.",
}

export default function FinancialPlanning() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-gradient-to-br from-noir-cream/50 to-white">
        <div className="container-custom prose prose-neutral max-w-3xl">
          <h1 className="text-noir-brown">Financial Planning</h1>
          <p>Offered through trusted advisors as part of our holistic approach to wellness.</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
