import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-6 text-sm animate-fade-up">
            <div>
              <h4 className="mb-3 font-semibold tracking-wide text-primary-foreground/80">
                Company
              </h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li>
                  <Link href="/" className="transition hover:text-secondary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="transition hover:text-secondary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="transition hover:text-secondary"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/affiliates"
                    className="transition hover:text-secondary"
                  >
                    Affiliates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold tracking-wide text-primary-foreground/80">
                Capabilities
              </h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li>Coal Transportation</li>
                <li>Surface Mining</li>
                <li>Coal Crushing</li>
                <li>Biomass Pellets</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-2 text-sm">Contact</h4>
            <div className="space-y-1.5 text-xs">
              {/* TODO: Replace with Registered Address once provided */}
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <p>
                  Yash Complex, No. G-3, Amravati Road, opposite RBI Quarters,
                  near Ravi Nagar Square, Nagpur 440010, India
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <a
                  href="mailto:info@saikrupagroup.com"
                  className="hover:text-secondary transition break-all"
                >
                  info@saikrupagroup.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <a
                  href="tel:+919350493093"
                  className="hover:text-secondary transition"
                >
                  +91 93504 93093
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-4 sm:pt-6">
          <p className="text-center text-xs text-gray-300">
            © 2025 Saikrupa Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
