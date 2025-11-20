import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Wrench, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CoalCrushing() {
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
              <Wrench className="w-7 sm:w-8 h-7 sm:h-8 text-secondary" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">
              Coal Crushing
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Coal crushing services with mobile and semi-mobile equipment
          </p>
        </section>

        {/* Image Section */}
        <section className="mb-8 sm:mb-12">
          <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/coal_crushing.jpg"
              alt="Coal Crushing"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Content Section */}
        <section className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8 sm:mb-12 items-start">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-4">Overview</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Coal crushing is the process of breaking down large chunks of coal into smaller, manageable sizes to make it suitable for combustion, processing, or further handling. It is a critical operation in Coal Preparation Plants (CPPs) and thermal power stations, ensuring efficient fuel use and smooth operations.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our coal crushing services leverage mobile and semi-mobile crushers that can be quickly deployed and installed on-site as per project requirements, ensuring high efficiency, consistent output, and timely supply to meet the demands of power plants and industrial clients.
            </p>
          </div>

          <div className="flex-1 md:pl-50">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-4">Key Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">2 mobile crushers (fully operational)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">6 semi-mobile crushers (fully operational)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Portable crushing units for flexible deployment</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Quick installation on-site as per requirements</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Suitable for long-term mining projects</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">High efficiency and consistent output</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Timely supply to power plants and industrial clients</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-3">Interested in Our Services?</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your coal crushing requirements and how we can support your operations.
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
