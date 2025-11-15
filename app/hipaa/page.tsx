import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "HIPAA Notice | Noir Well Health",
}

export default function HipaaPage() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-white">
        <div className="container-custom prose prose-neutral max-w-3xl">
          <h1 className="text-noir-brown">HIPAA Notice</h1>
          <p>
            Noir Well Health uses ZocDoc for appointment booking and does not collect PHI on this site. This page is a
            placeholder for your HIPAA Notice.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
