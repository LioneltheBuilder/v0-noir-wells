import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { NavBarDemo } from "@/components/ui/demo"

export default function NavBarExamplePage() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-gradient-to-br from-noir-cream via-white to-noir-beige">
        <div className="container-custom prose prose-neutral max-w-3xl">
          <h1 className="text-noir-brown">Tubelight NavBar Demo</h1>
          <p className="text-noir-mauve">
            This page demonstrates the tubelight-style floating navigation. On mobile it docks at the bottom; on larger
            screens it sits near the top center. The active tab displays a subtle backlit “lamp” effect.
          </p>
          <p className="text-noir-brown">
            Scroll to see how the floating bar overlays content. We added extra bottom padding so it doesn&apos;t cover
            the last bits of content on mobile.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl space-y-4">
          <p className="text-noir-brown">
            You can replace the demo nav items with your site routes. The component accepts an array of items with
            name, url, and a Lucide icon.
          </p>
          <ul className="list-disc pl-6 text-noir-mauve">
            <li>Compact icon-only mode on small screens</li>
            <li>Animated active highlight with framer-motion</li>
            <li>Glassmorphism background with Tailwind tokens</li>
          </ul>
        </div>
      </section>

      <div className="pb-28 sm:pb-0" />
      <Footer />
      {/* Floating demo nav */}
      <NavBarDemo />
    </main>
  )
}
