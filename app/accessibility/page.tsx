import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Accessibility Statement | Noir Well Health",
}

export default function AccessibilityPage() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-white">
        <div className="container-custom prose prose-neutral max-w-3xl">
          <h1 className="text-noir-brown">Accessibility Statement</h1>
          <p>
            We strive to adhere to WCAG 2.1 AA. If you experience any issues accessing content on this website, please
            email us for assistance.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
