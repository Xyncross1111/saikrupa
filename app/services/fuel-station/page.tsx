import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Fuel, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FuelStation() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <section className="mb-8 sm:mb-12">
          <Link href="/services" className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary transition mb-4">
            <ArrowRight size={14} className="rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 sm:w-16 h-14 sm:h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Fuel className="w-7 sm:w-8 h-7 sm:h-8 text-secondary" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">
              Fuel Station
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Bulk fuel supply for industrial and commercial clients
          </p>
        </section>

        {/* Image Section */}
        <section className="mb-8 sm:mb-12">
          <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/fuel-station-industrial-supply.jpg"
              alt="Fuel Station"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Content Section */}
        <section className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8 sm:mb-12 items-start">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-4">Overview</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              In addition to our core operations, Saikrupa Group is actively involved in the bulk supply of fuel to meet the high-volume requirements of industrial and commercial clients. We operate a dedicated fuel station located at Village Tulana, Taluka Rajura, District Chandrapur, Maharashtra.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our fuel station ensures uninterrupted fuel availability for our logistics fleet and regional customers. Our fuel operations further support our integrated supply chain capabilities and enhance service efficiency across our transport and mining services.
            </p>
          </div>

          <div className="flex-1 md:pl-50">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-4">Key Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Bulk fuel supply operations</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Dedicated fuel station in Chandrapur, Maharashtra</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Village Tulana, Taluka Rajura location</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Industrial and commercial client support</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Reliable supply chain</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Uninterrupted fuel availability</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Support for logistics fleet</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Integrated supply chain capabilities</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-3">Interested in Our Services?</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your fuel supply requirements and how we can support your operations.
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
