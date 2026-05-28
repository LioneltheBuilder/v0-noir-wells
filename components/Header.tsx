"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

function classNames(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [bannerHeight, setBannerHeight] = useState(84)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    // Watch for banner height changes
    const checkBannerHeight = () => {
      const banner = document.querySelector("[data-announcement-banner]")
      if (banner) {
        setBannerHeight(banner.getBoundingClientRect().height)
      } else {
        setBannerHeight(0)
      }
    }

    checkBannerHeight()
    const interval = setInterval(checkBannerHeight, 100)

    return () => clearInterval(interval)
  }, [])

  const nav = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      children: [
        { name: "Overview", href: "/about#who-we-are" },
        { name: "Team", href: "/about#team" },
        { name: "Partners", href: "/about#partners" },
        { name: "Get in touch", href: "/about#contact" },
      ],
    },
    {
      name: "Medical",
      href: "/medical",
      children: [
        { name: "Primary Care", href: "/medical/primary-care" },
        { name: "Women's Health", href: "/medical/womens-health" },
        { name: "Behavioral", href: "/medical/behavioral-health" },
      ],
    },
    {
      name: "Wellness",
      href: "/wellness",
      children: [
        { name: "Nutrition", href: "/wellness/nutrition" },
        { name: "IV Therapy", href: "/wellness/iv-therapy" },
        { name: "Training", href: "/wellness/training" },
        { name: "Financial", href: "/wellness/financial-planning" },
      ],
    },
    { name: "Membership", href: "/membership" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <header
      role="banner"
      style={{ top: `${bannerHeight}px` }}
      className={classNames(
        "fixed inset-x-0 z-50 border-b transition-all duration-300",
        "bg-[linear-gradient(to_right,_#EADEC6_0%,_#FFFFFF_40%,_#CEC4A0_100%)]",
        scrolled ? "border-noir-beige/70 shadow-lg" : "border-noir-cream",
      )}
    >
      <nav className={classNames("container-custom", "supports-[backdrop-filter]:backdrop-blur-md")} aria-label="Main">
        <div
          className={classNames(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16" : "h-20",
          )}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Noir Well Health home">
            <Image
              src="/images/logo-green.png"
              alt="Noir Well Health"
              width={160}
              height={48}
              className="h-10 w-auto md:h-12"
              priority
            />
            <span className="hidden xl:block leading-tight text-noir-brown">
              <span className="block text-sm tracking-wide">healthcare. wellness. lifestyle.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden 2xl:flex items-center gap-7">
            {nav.map((item) => {
              const active = pathname === item.href || (item.href === "/about" && pathname.startsWith("/about"))
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={classNames(
                      "whitespace-nowrap text-[15px] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-olive/40 rounded-md px-1 py-1",
                      active ? "text-noir-olive" : "text-noir-brown hover:text-noir-olive",
                    )}
                    aria-haspopup={item.children ? "menu" : undefined}
                    aria-expanded={openDropdown === item.name}
                  >
                    <span className="align-middle">{item.name}</span>
                    {item.children && (
                      <ChevronDown className="ml-1 inline-block h-4 w-4 align-middle" aria-hidden="true" />
                    )}
                  </Link>

                  {item.children && openDropdown === item.name && (
                    <div
                      role="menu"
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-noir-cream py-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          role="menuitem"
                          className="block px-4 py-2 text-noir-brown hover:bg-noir-cream hover:text-noir-olive"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden 2xl:flex">
            <Link
              href="/book"
              className={classNames(
                "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors",
                "bg-noir-olive text-white hover:bg-noir-brown",
              )}
              aria-label="Book appointment on ZocDoc"
            >
              Book
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            className="2xl:hidden p-2 text-noir-brown hover:text-noir-olive focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-olive/40 rounded-md"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="2xl:hidden py-4 border-t border-noir-cream bg-white/95 backdrop-blur">
            <div className="grid gap-1">
              {nav.map((item) => (
                <div key={item.name} className="py-1">
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={classNames(
                      "block px-1 py-2 text-base font-medium",
                      pathname === item.href ? "text-noir-olive" : "text-noir-brown hover:text-noir-olive",
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((c) => (
                        <Link
                          key={c.name}
                          href={c.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-sm text-noir-mauve hover:text-noir-olive"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-noir-cream mt-4">
              <Link
                href="/book"
                className="btn-primary w-full text-center block"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Book appointment on ZocDoc"
              >
                Book
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
