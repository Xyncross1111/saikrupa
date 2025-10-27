import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function VasundharaCoalCarriers() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <Link href="/affiliates" className="text-secondary hover:text-secondary/80 mb-4 inline-block">
            ← Back to Affiliates
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Vasundhara Coal Carriers Pvt Ltd</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Specialized coal carrier services with dedicated fleet and expert operations
          </p>
        </section>

        {/* Overview */}
        <section className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Vasundhara Coal Carriers Pvt Ltd is a specialized subsidiary focused on coal carrier services. With a
                dedicated fleet of modern coal carriers, we provide reliable and efficient coal transportation
                solutions.
              </p>
              <p className="text-gray-600 mb-4">
                Our expertise in coal handling and transportation ensures safe, timely, and cost-effective delivery of
                coal to power plants, industrial facilities, and other end-users.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Key Highlights</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Dedicated coal carrier fleet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Modern and well-maintained vehicles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Expert coal handling expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Reliable and timely delivery</span>
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
              <h3 className="text-xl font-bold text-primary mb-3">Coal Transportation</h3>
              <p className="text-gray-600">
                Specialized transportation of coal from mines to power plants and industrial facilities with proper
                handling and documentation.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Fleet Management</h3>
              <p className="text-gray-600">
                Professional management of coal carrier fleet with regular maintenance and compliance with all
                regulations.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Route Optimization</h3>
              <p className="text-gray-600">
                Efficient route planning and optimization to ensure timely delivery and cost-effective operations.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Comprehensive quality checks and documentation to ensure coal quality throughout transportation.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 text-center border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary mb-4">Need Coal Carrier Services?</h2>
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
