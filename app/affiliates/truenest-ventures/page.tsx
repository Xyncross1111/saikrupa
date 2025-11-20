import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TruenestVenturesPage() {
  return (
    <main>
      <Header />
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <Link href="/affiliates" className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary transition mb-4">
            <ArrowRight size={14} className="rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to Affiliates
          </Link>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">Truenest Ventures</h1>
          <p className="mt-2 text-gray-700 max-w-2xl">
            A forward-looking development arm focusing on urban living solutions and student housing.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900">Upcoming Projects</h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <div>
                    <p className="font-medium">Flat Scheme</p>
                    <p className="text-sm text-gray-600">Thoughtfully planned residential flats with essential amenities.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <div>
                    <p className="font-medium">PG Hostels</p>
                    <p className="text-sm text-gray-600">Safe, affordable student housing with managed services.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <div>
                    <p className="font-medium">Township Planning</p>
                    <p className="text-sm text-gray-600">Integrated community layouts balancing open space and accessibility.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-base font-semibold text-gray-900">Our Approach</h3>
              <p className="mt-3 text-sm text-gray-700 leading-6">
                Truenest Ventures is committed to delivering functional, modern living environments. We prioritize
                location, access, safety, and long-term value to shape projects that are practical and sustainable.
              </p>
              <div className="mt-4 text-xs text-gray-500">
                Timelines and specifications subject to statutory approvals.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
