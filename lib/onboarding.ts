"use server"

import Papa from "papaparse"

type OnboardingRow = {
  Timestamp?: string
  "What’s the name of your brand or business?"?: string
  "Do you have a tagline or mission statement?"?: string
  "What are 3 words you want people to feel when they land on your site?"?: string
  "What main pages do you want on your website? (e.g., Home, About, Services, Portfolio, Blog, Contact)"?: string
}

const CSV_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Client%20Onboarding%20Questionnaire%20%281%29-z1fgwvtjCHqLex10IRQFT2Z8UPHLhJ.csv"

export async function getOnboardingData(): Promise<{
  brandName?: string
  tagline?: string
  words?: string[]
  mainPages?: string
}> {
  const res = await fetch(CSV_URL, { cache: "no-store" })
  if (!res.ok) {
    // Return safe fallbacks
    return { words: ["Intentional", "Empowered", "Grounded"] }
  }
  const csv = await res.text()
  const parsed = Papa.parse<OnboardingRow>(csv, { header: true, skipEmptyLines: true })
  const rows = parsed.data.filter(Boolean)
  if (!rows.length) {
    return { words: ["Intentional", "Empowered", "Grounded"] }
  }
  const last = rows[rows.length - 1] || rows[0]
  const words = (last["What are 3 words you want people to feel when they land on your site?"] || "")
    .split(/[.,;|\n]\s*/g)
    .map((w) => w.replace(/^[\-\u2022•\s]+/, "").trim())
    .filter(Boolean)
  return {
    brandName: last["What’s the name of your brand or business?"]?.trim(),
    tagline: last["Do you have a tagline or mission statement?"]?.trim(),
    words: words.length ? words : ["Intentional", "Empowered", "Grounded"],
    mainPages:
      last[
        "What main pages do you want on your website? (e.g., Home, About, Services, Portfolio, Blog, Contact)"
      ],
  }
}
