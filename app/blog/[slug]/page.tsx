import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return {
    title: `${params.slug.replace(/-/g, " ")} | Blog | Noir Well Health`,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-gradient-to-br from-noir-cream/40 to-white">
        <div className="container-custom prose prose-neutral max-w-3xl">
          <h1 className="text-noir-brown">{params.slug.replace(/-/g, " ")}</h1>
          <p className="text-noir-mauve">Post content coming soon.</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
