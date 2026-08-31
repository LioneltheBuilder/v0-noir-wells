import type { Metadata } from "next"
import { Calendar } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { contact } from "@/lib/config"

export const metadata: Metadata = {
  title: "Events & Workshops | Noir Well Health",
  description: "Community workshops, retreats, and education.",
}

export default function EventsPage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen bg-gradient-to-br from-noir-cream/30 to-white pt-24">
        <section className="section-padding" aria-labelledby="events-title">
          <div className="container-custom">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
              <Calendar className="h-10 w-10 text-noir-olive" aria-hidden="true" />
              <div className="flex flex-col gap-4">
                <p className="font-medium uppercase tracking-wide text-noir-olive">Community Events</p>
                <h1 id="events-title" className="text-balance text-4xl font-bold text-noir-brown md:text-5xl">
                  Workshops, Retreats & Education
                </h1>
                <p className="text-pretty text-lg leading-relaxed text-noir-mauve">
                  There are no confirmed upcoming events to display right now. Please check back for future workshops and community gatherings.
                </p>
              </div>
              <a className="font-medium text-noir-olive underline underline-offset-4" href={`mailto:${contact.email}`}>
                Contact {contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
