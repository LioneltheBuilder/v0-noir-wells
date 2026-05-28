import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Meet the Team | Noir Well Health",
  description: "Get to know our providers and staff.",
}

const team = [
  { name: "Annita Taylor, NP", role: "Founder, Nurse Practitioner", photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Annita%20Potrait%203.JPG-Xqb5hWEZCA3YDTX3t5tgCETVkOB0EH.jpeg" },
  { name: "Alex Johnson, RN", role: "Clinical Nurse", photo: "/images/patient-consultation.png" },
  { name: "Jordan Smith", role: "Wellness Coach", photo: "/images/fitness-training.png" },
]

export default function TeamPage() {
  redirect("/about#team")
}
