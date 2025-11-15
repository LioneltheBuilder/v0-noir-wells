import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Partners & Press | Noir Well Health",
  description: "Partners, sponsors, media features, and recognitions.",
}

const partners = [
  { name: "Well-Ed Project", logo: "/placeholder.svg?height=60&width=180" },
  { name: "DOE Partnership", logo: "/placeholder.svg?height=60&width=180" },
]

export default function PartnersPage() {
  redirect("/about#partners")

  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-noir-brown text-center mb-12">Partners & Press</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
            {partners.map((p) => (
              <div key={p.name} className="p-6 rounded-xl border border-noir-beige/60 bg-noir-cream/30 w-full text-center">
                <Image src={p.logo || "/placeholder.svg"} alt={`${p.name} logo`} width={180} height={60} className="mx-auto" />
                <div className="mt-4 font-medium text-noir-brown">{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
