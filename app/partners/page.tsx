import type { Metadata } from "next"
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
}
