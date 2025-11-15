import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { zocdocLink } from "@/lib/config"
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: "Book Appointment | Noir Well Health",
  description: "Book your appointment securely via ZocDoc.",
}

export default function BookPage() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-gradient-to-br from-noir-cream to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-noir-brown">Book an Appointment</h1>
            <p className="text-noir-mauve text-lg">
              For privacy and security, all appointments are booked through ZocDoc. We do not collect medical
              information or PHI on this website.
            </p>
            <a
              href={zocdocLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-noir-olive text-white px-8 py-3 rounded-full font-medium hover:bg-noir-brown"
            >
              Go to ZocDoc
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
