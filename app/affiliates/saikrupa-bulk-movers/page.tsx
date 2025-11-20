import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SaikrupaBulkMovers() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">sai Bulk Movers</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Comprehensive bulk material transportation and logistics solutions
          </p>
        </section>

        {/* Overview */}
        <section className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Sai Bulk Movers provides comprehensive bulk material transportation and logistics solutions. Beyond
                coal, we handle various bulk materials including minerals, ores, and industrial commodities.
              </p>
              <p className="text-gray-600 mb-4">
                Our extensive network and specialized equipment enable us to move bulk materials efficiently and
                cost-effectively across India.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Key Highlights</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Multi-commodity bulk transportation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Specialized equipment for various materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Pan-India logistics network</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Cost-effective solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary mb-6">Materials We Transport</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Minerals & Ores</h3>
              <p className="text-gray-600">
                Transportation of iron ore, manganese ore, and other mineral commodities with specialized handling.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Industrial Materials</h3>
              <p className="text-gray-600">
                Bulk transportation of limestone, aggregates, and other industrial materials for construction and
                manufacturing.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Agricultural Products</h3>
              <p className="text-gray-600">
                Logistics solutions for bulk agricultural commodities and processed materials.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored transportation solutions for specialized bulk materials and unique requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 text-center border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary mb-4">Need Bulk Transportation?</h2>
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
