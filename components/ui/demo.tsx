"use client"

import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Projects", url: "/partners", icon: Briefcase },
    { name: "Resume", url: "/blog", icon: FileText },
  ]
  return <NavBar items={navItems} />
}
