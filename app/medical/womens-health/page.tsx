import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Women’s Health | Noir Well Health",
  description: "Pap smears, postpartum care, PCOS support, hormone testing & menopause.",
}

export default function WomensHealth() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-gradient-to-br from-noir-cream/50 to-white">
        <div className="container-custom prose prose-neutral max-w-3xl">
          <h1 className="text-noir-brown">Women’s Health</h1>
          <ul>
            <li>Pap smears & pelvic exams, postpartum care</li>
            <li>Birth control consultations, menstrual health & PCOS support</li>
            <li>Hormone testing & menopause support</li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  )
}
