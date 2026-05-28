import type { Metadata } from "next"
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
}
