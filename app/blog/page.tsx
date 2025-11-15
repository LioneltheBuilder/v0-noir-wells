import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog | Noir Well Health",
  description: "Health education, lifestyle, and community wellness content.",
}

const posts = [
  { title: "Understanding PCOS: Care Beyond the Clinic", slug: "pcos-care-beyond", excerpt: "How nutrition and lifestyle support clinical outcomes." },
  { title: "Building Sustainable Wellness Habits", slug: "sustainable-habits", excerpt: "Small changes that compound over time." },
]

export default function BlogPage() {
  return (
    <main id="main" className="min-h-screen">
      <Header />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-noir-brown mb-8">Blog</h1>
          <ul className="space-y-6">
            {posts.map((p) => (
              <li key={p.slug} className="p-6 border border-noir-beige/60 rounded-xl">
                <h2 className="text-2xl font-semibold text-noir-brown">
                  <Link href={`/blog/${p.slug}`} className="hover:text-noir-olive">{p.title}</Link>
                </h2>
                <p className="text-noir-mauve">{p.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  )
}
