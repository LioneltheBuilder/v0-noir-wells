import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Events from "@/components/Events"

export const metadata: Metadata = {
  title: "Events & Workshops | Noir Well Health",
  description: "Community workshops, retreats, and education.",
}

export default function EventsPage() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <Events />
      <Footer />
    </main>
  )
}
