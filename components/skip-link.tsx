"use client"

export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[9999] bg-noir-olive text-white px-4 py-2 rounded"
    >
      Skip to content
    </a>
  )
}
