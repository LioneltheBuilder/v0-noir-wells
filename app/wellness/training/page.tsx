import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Personal Training | Noir Well Health",
  description: "Fitness planning, habit coaching, and referrals to certified professionals.",
}

export default function Training() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-gradient-to-br from-noir-cream/50 to-white">
        <div className="container-custom prose prose-neutral max-w-3xl">
          <h1 className="text-noir-brown">Personal Training & Wellness Coaching</h1>
          <ul>
            <li>Fitness planning</li>
            <li>Lifestyle & habit coaching</li>
            <li>Referrals to certified professionals</li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  )
}
