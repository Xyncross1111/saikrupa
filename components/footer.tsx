import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-2 text-sm">Quick Links</h4>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/" className="hover:text-secondary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/affiliates" className="hover:text-secondary transition">
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-2 text-sm">Services</h4>
            <ul className="space-y-1 text-xs">
              <li>
                <a href="#" className="hover:text-secondary transition">
                  Coal Transportation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition">
                  Surface Mining
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition">
                  Coal Crushing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition">
                  Biomass Pellets
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-2 text-sm">Contact</h4>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <p>
                  <span className="font-semibold">Head Office:</span> Yash Complex, Nagpur, Maharashtra 440010
                </p>
              </div>
              {/* TODO: Replace with Registered Address once provided */}
              {/* <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <p><span className="font-semibold">Registered Address:</span> ...</p>
              </div> */}
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <a href="mailto:info@saikrupagroup.com" className="hover:text-secondary transition break-all">
                  info@saikrupagroup.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <a href="tel:+917350125348" className="hover:text-secondary transition">
                  +91 73501 25348
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-4 sm:pt-6">
          <p className="text-center text-xs text-gray-300">© 2025 Saikrupa Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
