import { redirect } from "next/navigation"
import { zocdocLink } from "@/lib/config"

export default function BookPage() {
  redirect(zocdocLink)
}
