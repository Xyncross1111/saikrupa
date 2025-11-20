import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SaikrupaCoalMovers() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Sai Coal Movers</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Expert in coal handling and movement operations with specialized equipment and trained personnel
          </p>
        </section>

        {/* Overview */}
        <section className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Sai Coal Movers specializes in expert coal handling and movement operations. We provide
                comprehensive solutions for loading, unloading, and movement of coal at mining sites, power plants, and
                industrial facilities.
              </p>
              <p className="text-gray-600 mb-4">
                Our experienced team and modern equipment ensure safe, efficient, and cost-effective coal handling
                operations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Key Highlights</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Expert coal handling operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Loading and unloading services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Modern equipment and machinery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Safety and efficiency focused</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/services/coal-transportation" className="group">
              <div className="border border-gray-200 p-6 rounded-lg h-full transition-all duration-300 hover:border-secondary hover:shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">Coal Transportation</h3>
                <p className="text-gray-600">
                  Efficient transportation of coal with fleet management and delivery coordination.
                </p>
              </div>
            </Link>
            <Link href="/services/coal-crushing" className="group">
              <div className="border border-gray-200 p-6 rounded-lg h-full transition-all duration-300 hover:border-secondary hover:shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">Coal Crushing</h3>
                <p className="text-gray-600">
                  Professional coal crushing and sizing services with modern equipment.
                </p>
              </div>
            </Link>
            <Link href="/services/surface-mining" className="group">
              <div className="border border-gray-200 p-6 rounded-lg h-full transition-all duration-300 hover:border-secondary hover:shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">Surface Mining</h3>
                <p className="text-gray-600">
                  Comprehensive mining operations including excavation and material handling.
                </p>
              </div>
            </Link>
            <Link href="/services/coal-liasioning" className="group">
              <div className="border border-gray-200 p-6 rounded-lg h-full transition-all duration-300 hover:border-secondary hover:shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">Coal Liaising</h3>
                <p className="text-gray-600">
                  Expert liaison services for regulatory compliance and coordination.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 text-center border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary mb-4">Need Coal Handling Services?</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
          >
            Get in Touch
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}
