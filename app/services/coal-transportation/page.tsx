import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Truck, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CoalTransportation() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <section className="mb-8 sm:mb-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-secondary hover:underline mb-4 text-sm">
            ← Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 sm:w-16 h-14 sm:h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Truck className="w-7 sm:w-8 h-7 sm:h-8 text-secondary" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">
              Coal Transportation
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Comprehensive coal transportation services via road and rail
          </p>
        </section>

        {/* Image Section */}
        <section className="mb-8 sm:mb-12">
          <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/coal_transportation.jpg"
              alt="Coal Transportation"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Content Section */}
        <section className="grid md:grid-cols-2 gap-8 mb-8 sm:mb-12">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-4">Overview</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Saikrupa Group operates a large network of 400+ vehicles (owned and contracted) for transporting coal with excellent goodwill among customers for timely delivery. We provide excellent logistics support managed by efficient and qualified personnel.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our services include arrangements of coal cost payments on behalf of clients to be reimbursed later, and liaison with colliery authority for fast loading and redressal of complaints.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-4">Key Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Fleet of 400+ vehicles (owned and contracted)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Road and rail transportation modes</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Timely delivery guaranteed with real-time tracking</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Experienced logistics team with 15+ years expertise</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Arrangements of coal cost payments on behalf of clients</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Liaison with colliery authority for fast loading</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Liaison with railways for wagon placement at sidings</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Quick redressal of complaints and issues</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-3">Interested in Our Services?</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your coal transportation requirements and how we can support your operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}
