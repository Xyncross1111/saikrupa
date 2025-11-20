import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SaikrupaCoalSupplier() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <section className="mb-8 sm:mb-12">
          <Link href="/affiliates" className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary transition mb-4">
            <ArrowRight size={14} className="rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to Affiliates
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Saikrupa Coal Supplier</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Direct coal supply and sourcing services for industrial clients across India
          </p>
        </section>

        {/* Overview */}
        <section className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Saikrupa Coal Suppliers specializes in direct coal supply and sourcing services for industrial clients.
                We provide consistent supply of specified coal to consumers through various sourcing channels including
                long-term linkages and spot auctions.
              </p>
              <p className="text-gray-600 mb-4">
                Our expertise in coal liaison and sourcing ensures that clients receive quality coal at competitive
                rates with reliable delivery schedules.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Key Highlights</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Direct coal supply from multiple sources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Long-term linkage arrangements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Spot and forward auction sourcing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Quality assurance and timely delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary mb-6">Sourcing Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Long-Term Linkage</h3>
              <p className="text-gray-600">
                Coal at notified rates made available by coal companies to consumers with long-term coal linkage
                arrangements, ensuring consistent supply over extended periods.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Auction & Spot Sourcing</h3>
              <p className="text-gray-600">
                Access to spot e-auctions, forward e-auctions, and special forward auctions for flexible coal
                procurement based on immediate requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 text-center border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary mb-4">Need Coal Supply?</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
          >
            Contact Us
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}
