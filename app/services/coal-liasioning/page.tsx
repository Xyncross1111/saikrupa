import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CoalLiasioning() {
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
              <Zap className="w-7 sm:w-8 h-7 sm:h-8 text-secondary" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">
              Coal Liasioning
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Complete coal sourcing and linkage services for all sectors
          </p>
        </section>

        {/* Image Section */}
        <section className="mb-8 sm:mb-12">
          <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/coal_liaisoning.jpg"
              alt="Coal Liasioning"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Content Section */}
        <section className="grid md:grid-cols-2 gap-8 mb-8 sm:mb-12">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-4">Overview</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              The coal at notified rates is made available by coal companies to coal consumers having long term coal linkage. The Liaisoning of coal is being provided to the Non-Regulated Sector consumers of various sub sectors through Auction mode only in which source(s) are fixed for the entire FSA period of 5 years at Bid Price (Basic + Premium, if any).
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              The sole purpose of this policy is to provide consistent supply of specified coal to the consumers so as to consumers can assess coal cost for long term basis. Moreover, the consumers can book coal from other sources viz. Spot e-Auction, Forward e-Auction, Special Forward e-Auction & from open market. Such services are provided at nominal charges payable after confirmation of Linkage and first release of coal from Coal Companies.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-4">Key Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Coal linkage arrangements at notified rates</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Non-regulated sector consumer services</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Auction mode coal sourcing</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">5-year FSA period arrangements</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Spot e-Auction services</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Forward e-Auction coordination</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Special Forward e-Auction services</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-sm sm:text-base">Open market coal sourcing</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-3">Interested in Our Services?</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your coal liasioning requirements and how we can support your operations.
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
