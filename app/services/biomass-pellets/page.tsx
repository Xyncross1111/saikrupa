import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Leaf, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BiomassPellets() {
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
              <Leaf className="w-7 sm:w-8 h-7 sm:h-8 text-secondary" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">
              Biomass Pellets
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Sustainable renewable fuel production for modern energy needs
          </p>
        </section>

        {/* Image Section */}
        <section className="mb-8 sm:mb-12">
          <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/biomass_pilletes.jpg"
              alt="Biomass Pellets"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Content Section */}
        <section className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8 sm:mb-12 items-start">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-4">Overview</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Bio-Pellets, also known as Biopellets or Biological Pellets, are a renewable, high-efficiency fuel used in heating systems, electricity generation, and various industrial processes. These pellets are environmentally friendly, possess high energy density, are easy to store and transport, and significantly reduce dependence on fossil fuels—making them a sustainable alternative for modern energy needs.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Saikrupa Group has recently ventured into the manufacturing of biomass pellets, with operations successfully running for the past 4 months. Our state-of-the-art plant, located in Narwana, District Jind, Haryana, has a production capacity of 75 metric tons per day (MT/day). We are proud to supply M/s Nabha Power Ltd, who utilize our bio-pellets as part of their commitment to sustainable and eco-friendly energy practices.
            </p>
          </div>

          <div className="flex-1 md:pl-50">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-4">Key Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">75 MT/day production capacity</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">State-of-the-art facility in Narwana, District Jind, Haryana</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Eco-friendly manufacturing process</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">High energy density renewable fuel</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Sustainable alternative to fossil fuels</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Supply to major power companies like Nabha Power Ltd</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Easy to store and transport</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Significantly reduces dependence on fossil fuels</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-3">Interested in Our Services?</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your biomass pellet requirements and how we can support your operations.
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
