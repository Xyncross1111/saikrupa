import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function SaikrupaServiceStation() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <Link href="/subsidiaries" className="text-secondary hover:text-secondary/80 mb-4 inline-block">
            ← Back to Subsidiaries
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Saikrupa Service Station</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Fuel supply and service station operations supporting logistics and industrial operations
          </p>
        </section>

        {/* Overview */}
        <section className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Saikrupa Service Station operates a dedicated fuel station located at Village Tulana, Taluka Rajura,
                District Chandrapur, Maharashtra. We provide uninterrupted fuel availability for our logistics fleet and
                regional customers.
              </p>
              <p className="text-gray-600 mb-4">
                Our fuel operations support our integrated supply chain capabilities and enhance service efficiency
                across our transport and mining services.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Key Highlights</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Dedicated fuel station in Chandrapur, Maharashtra</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Bulk fuel supply capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>24/7 fuel availability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Integrated with logistics operations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Retail Fuel Supply</h3>
              <p className="text-gray-600">
                Quality fuel supply for commercial vehicles, industrial equipment, and personal vehicles at competitive
                rates.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Bulk Fuel Supply</h3>
              <p className="text-gray-600">
                High-volume fuel supply for industrial and commercial clients with flexible delivery arrangements.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Fleet Fueling</h3>
              <p className="text-gray-600">
                Dedicated fueling solutions for commercial fleets with priority service and competitive pricing.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Certified fuel quality with proper testing and documentation for all supplies.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 text-center border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary mb-4">Need Fuel Supply?</h2>
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
