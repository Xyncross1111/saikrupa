import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function SaikrupaTradingPage() {
  return (
    <main>
      <Header />
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav className="text-xs text-gray-500 mb-4">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/affiliates" className="hover:text-primary">Affiliates</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Saikrupa Traders</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">Saikrupa Traders</h1>
          <p className="mt-2 text-gray-700 max-w-2xl">
            Commerce-focused unit handling coal and multi-sector trading activities with a compliance-first approach.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900">Focus Areas</h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <div>
                    <p className="font-medium">Coal Trading</p>
                    <p className="text-sm text-gray-600">Sourcing and supply of coal with transparent pricing and logistics coordination.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <div>
                    <p className="font-medium">Trading Related Activities</p>
                    <p className="text-sm text-gray-600">Documentation, quality checks, and end-to-end delivery support.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <div>
                    <p className="font-medium">Trading in All Sectors</p>
                    <p className="text-sm text-gray-600">Opportunity-driven multi-sector trading built on reliable networks.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-base font-semibold text-gray-900">Operating Principles</h3>
              <p className="mt-3 text-sm text-gray-700 leading-6">
                Saikrupa Traders emphasizes compliance, documentation accuracy, and timely execution. We aim to create
                repeatable value through dependable sourcing and partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
