import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4 animate-fade-up">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-secondary text-secondary-foreground">
                <span className="text-sm font-serif font-semibold">SK</span>
              </div>
              <div>
                <p className="font-serif text-lg font-semibold">Saikrupa Group</p>
                <p className="text-xs uppercase tracking-[0.35em] text-primary-foreground/70">Established 2011</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Trusted coal mining and logistics partner delivering reliable transportation, mining, crushing, liaison,
              and renewable energy solutions across India.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm animate-fade-up animate-delay-100">
            <div>
              <h4 className="mb-3 font-semibold tracking-wide text-primary-foreground/80">Company</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li>
                  <Link href="/" className="transition hover:text-secondary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="transition hover:text-secondary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="transition hover:text-secondary">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/affiliates" className="transition hover:text-secondary">
                    Affiliates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold tracking-wide text-primary-foreground/80">Capabilities</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li>Coal Transportation</li>
                <li>Surface Mining</li>
                <li>Coal Crushing</li>
                <li>Biomass Pellets</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 text-sm animate-fade-up animate-delay-200">
            <h4 className="font-semibold tracking-wide text-primary-foreground/80">Reach Us</h4>
            <div className="flex items-start gap-3 text-primary-foreground/80">
              <MapPin size={16} className="mt-1" />
              <p>
                Yash Complex, No. G-3, Amravati Road, opposite RBI Quarters, near Ravi Nagar Square, Nagpur 440010,
                India
              </p>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <Mail size={16} />
              <a href="mailto:info@saikrupagroup.com" className="break-all transition hover:text-secondary">
                info@saikrupagroup.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <Phone size={16} />
              <a href="tel:+919876543210" className="transition hover:text-secondary">
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 py-4 text-center text-xs text-primary-foreground/70">
        © {new Date().getFullYear()} Saikrupa Group. All rights reserved.
      </div>
    </footer>
  )
}
