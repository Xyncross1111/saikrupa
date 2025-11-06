"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logos/skgroup.png" alt="Saikrupa Group" className="w-8 h-8 object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-base font-serif font-bold text-primary">Saikrupa Group</h1>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-primary transition font-medium text-sm">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition font-medium text-sm">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary transition font-medium text-sm">
              Services
            </Link>
            <Link href="/affiliates" className="text-gray-700 hover:text-primary transition font-medium text-sm">
              Affiliates
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition font-medium text-sm">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-3 flex flex-col gap-3">
            <Link href="/" className="text-gray-700 hover:text-primary transition font-medium text-sm">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition font-medium text-sm">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary transition font-medium text-sm">
              Services
            </Link>
            <Link href="/affiliates" className="text-gray-700 hover:text-primary transition font-medium text-sm">
              Affiliates
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition font-medium text-sm">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
