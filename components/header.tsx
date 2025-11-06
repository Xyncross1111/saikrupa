"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinkClass =
    "relative text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/95 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logos/skgroup.png" alt="Saikrupa Group" className="w-8 h-8 object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-base font-serif font-semibold text-primary">Saikrupa Group</h1>
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Mining & Logistics</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className={navLinkClass}>
              Home
            </Link>
            <Link href="/about" className={navLinkClass}>
              About
            </Link>
            <Link href="/services" className={navLinkClass}>
              Services
            </Link>
            <Link href="/affiliates" className={navLinkClass}>
              Affiliates
            </Link>
            <Link href="/contact" className={navLinkClass}>
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/80 text-slate-600 transition hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden origin-top overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-64" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-2 pb-4 pt-2 text-sm text-slate-600">
            <Link href="/" className="rounded-md px-2 py-2 transition hover:bg-muted/60">
              Home
            </Link>
            <Link href="/about" className="rounded-md px-2 py-2 transition hover:bg-muted/60">
              About
            </Link>
            <Link href="/services" className="rounded-md px-2 py-2 transition hover:bg-muted/60">
              Services
            </Link>
            <Link href="/affiliates" className="rounded-md px-2 py-2 transition hover:bg-muted/60">
              Affiliates
            </Link>
            <Link href="/contact" className="rounded-md px-2 py-2 transition hover:bg-muted/60">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
