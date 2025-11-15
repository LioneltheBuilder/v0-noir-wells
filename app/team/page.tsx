import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Meet the Team | Noir Well Health",
  description: "Get to know our providers and staff.",
}

const team = [
  { name: "Annita Taylor, NP", role: "Founder, Nurse Practitioner", photo: "/placeholder.svg?height=400&width=320" },
  { name: "Alex Johnson, RN", role: "Clinical Nurse", photo: "/placeholder.svg?height=400&width=320" },
  { name: "Jordan Smith", role: "Wellness Coach", photo: "/placeholder.svg?height=400&width=320" },
]

export default function TeamPage() {
  redirect("/about#team")

  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-gradient-to-br from-noir-cream/40 to-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-noir-brown text-center mb-12">Meet the Team</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((m) => (
              <div key={m.name} className="bg-white rounded-2xl border border-noir-beige/50 p-6 text-center">
                <Image src={m.photo || "/placeholder.svg"} alt={m.name} width={320} height={400} className="rounded-xl mx-auto mb-4 object-cover" />
                <h2 className="text-xl font-semibold text-noir-brown">{m.name}</h2>
                <p className="text-noir-mauve">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
