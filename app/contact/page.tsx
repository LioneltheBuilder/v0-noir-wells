import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { contact } from "@/lib/config"
import { Phone, Mail, MapPin } from 'lucide-react'
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Contact | Noir Well Health",
  description: "Address, phone number, and email only. No contact form.",
}

export default function ContactPage() {
  redirect("/about#contact")

  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-gradient-to-br from-noir-cream/40 to-white">
        <div className="container-custom max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-noir-brown">Contact</h1>
          <p className="text-noir-mauve">
            We do not collect PHI on this site. For appointments, please use ZocDoc on the Book page.
          </p>
          <div className="space-y-4 text-noir-brown">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-noir-olive" />
              <span>{contact.phone}</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-noir-olive" />
              <span>{contact.email}</span>
            </div>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 mt-1 text-noir-olive" />
              <span>
                {contact.addressLines[0]}
                <br />
                {contact.addressLines[1]}
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
