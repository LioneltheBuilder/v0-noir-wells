import Header from "@/components/Header"
import Hero from "@/components/Hero"
import MedicalServices from "@/components/MedicalServices"
import WellnessServices from "@/components/WellnessServices"
import MembershipAnnouncement from "@/components/MembershipAnnouncement"
import Events from "@/components/Events"
import About from "@/components/About"
import Footer from "@/components/Footer"
import MembershipBanner from "@/components/MembershipBanner"

export default async function Home() {
  // New, sales-focused messaging:
  const heading = "A Unified Care Experience"
  const subParts = ["More energy.", "Better labs."]
  const intro = `Culturally rooted. Clinically sound. Unapologetically aligned. At Noir Well Health, we deliver whole-person care through intentional, high-touch services that are both culturally competent and clinically excellent. We proudly bridge grassroots community care with a luxury-aligned wellness experience — offering care that is not only accessible, but deeply intentional in its design and delivery.`

  return (
    <>
      <MembershipBanner />
      <Header />
      <main id="main" className="min-h-screen">
        <Hero heading={heading} subParts={subParts} intro={intro} />
        <MedicalServices />
        <WellnessServices />
        <div id="membership-announcement">
          <MembershipAnnouncement />
        </div>
        <Events />
        <About />
        <section className="section-padding bg-gradient-to-br from-noir-olive to-noir-brown">
          <div className="container-custom text-center text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to book?</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              We use ZocDoc for secure appointment booking. No forms are collected on our site.
            </p>
            <a
              href="/book"
              className="inline-block bg-white text-noir-olive px-8 py-3 rounded-full font-medium hover:bg-noir-cream"
            >
              Book on ZocDoc
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
