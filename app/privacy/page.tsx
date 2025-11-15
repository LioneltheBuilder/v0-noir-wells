import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Noir Well Health",
}

export default function PrivacyPage() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-white">
        <div className="container-custom prose prose-neutral max-w-3xl">
          <h1 className="text-noir-brown">Privacy Policy</h1>
          <p>This is a placeholder for your Privacy Policy. Replace with your legal content.</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
