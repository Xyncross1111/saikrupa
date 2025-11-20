import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SaikrupaTransport() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Saikrupa Transport</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Specialized in coal and bulk material transportation across India with a fleet of 400+ vehicles (owned and contracted)
          </p>
        </section>

        {/* Overview */}
        <section className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Saikrupa Transport is the flagship subsidiary of Saikrupa Group, specializing in the movement of Indian
                coal by road and rail modes. With over 15 years of experience, we have transported more than 10 million
                tons of coal across India.
              </p>
              <p className="text-gray-600 mb-4">
                Our dedicated fleet of 400+ vehicles (owned and contracted) ensures timely delivery and cost-efficient
                operations. We combine modern logistics infrastructure with experienced manpower to deliver excellence
                in every shipment.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Key Highlights</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>400+ fleet vehicles (owned and contracted) for coal transportation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>10+ million tons transported across India</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>15+ years of industry experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Both road and rail transportation capabilities</span>
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
                <p className="text-gray-600 mb-4">
                  Comprehensive coal transportation services via road and rail with fleet management and logistics support.
                </p>
              </div>
            </Link>
            <Link href="/services/coal-liasioning" className="group">
              <div className="border border-gray-200 p-6 rounded-lg h-full transition-all duration-300 hover:border-secondary hover:shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">Coal Liaising</h3>
                <p className="text-gray-600 mb-4">
                  Expert liaison services with coal companies, collieries, and railways for smooth operations and compliance.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 text-center border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary mb-4">Ready to Partner With Us?</h2>
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
