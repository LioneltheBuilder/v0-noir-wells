import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Membership from "@/components/Membership"

export const metadata: Metadata = {
  title: "Membership Plans | Noir Well Health",
  description: "Noir Access Membership tiers and benefits.",
}

export default function MembershipPage() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <Membership />
      <Footer />
    </main>
  )
}
