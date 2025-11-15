import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Terms of Service | Noir Well Health",
}

export default function TermsPage() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-white">
        <div className="container-custom prose prose-neutral max-w-3xl">
          <h1 className="text-noir-brown">Terms of Service</h1>
          <p>This is a placeholder for your Terms of Service. Replace with your legal content.</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
