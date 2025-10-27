import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function SaikrupaTransport() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <Link href="/affiliates" className="text-secondary hover:text-secondary/80 mb-4 inline-block">
            ← Back to Affiliates
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Saikrupa Transport</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Specialized in coal and bulk material transportation across India with a fleet of 400+ vehicles
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
                Our dedicated fleet of 400 vehicles (both owned and contracted) ensures timely delivery and
                cost-efficient operations. We combine modern logistics infrastructure with experienced manpower to
                deliver excellence in every shipment.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Key Highlights</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>400+ dedicated vehicles for coal transportation</span>
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
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Road Transportation</h3>
              <p className="text-gray-600 mb-4">
                Saikrupa Transport operates a large network of vehicles for transporting coal with excellent goodwill
                among customers for timely delivery. We arrange coal cost payments on behalf of clients and liaise with
                colliery authorities for fast loading and complaint resolution.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Rail Transportation</h3>
              <p className="text-gray-600 mb-4">
                We maintain a well-established network of efficient personnel to ensure dispatch of proper quality and
                quantity to clients. Our liaison with Railways ensures wagon placement at various sidings for timely
                dispatch, and we arrange railway freight on behalf of clients.
              </p>
            </div>
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
