import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Contact | Noir Well Health",
  description: "Address, phone number, and email only. No contact form.",
}

export default function ContactPage() {
  redirect("/about#contact")
}
