import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function SaikrupaGreenEnergy() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <Link href="/affiliates" className="text-secondary hover:text-secondary/80 mb-4 inline-block">
            ← Back to Affiliates
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Saikrupa Green Energy Pvt Ltd</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Renewable energy solutions including biomass pellet production and sustainable energy practices
          </p>
        </section>

        {/* Overview */}
        <section className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Saikrupa Green Energy Pvt Ltd represents our commitment to sustainable and renewable energy solutions.
                We have recently ventured into the manufacturing of biomass pellets with state-of-the-art operations.
              </p>
              <p className="text-gray-600 mb-4">
                Our biomass pellet plant, located in Narwana, District Jind, Haryana, has a production capacity of 75
                metric tons per day, providing eco-friendly fuel alternatives for power generation and industrial
                heating.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Key Highlights</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>75 MT/day biomass pellet production capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>State-of-the-art manufacturing facility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Eco-friendly renewable energy solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Supply to major power generation companies</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Biomass Pellets */}
        <section className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary mb-6">Biomass Pellets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Bio-Pellets, also known as Biopellets or Biological Pellets, are a renewable, high-efficiency fuel used
                in heating systems, electricity generation, and various industrial processes. These pellets are
                environmentally friendly, possess high energy density, are easy to store and transport, and
                significantly reduce dependence on fossil fuels.
              </p>
              <p className="text-gray-600">
                We are proud to supply M/s Nabha Power Ltd, who utilize our bio-pellets as part of their commitment to
                sustainable and eco-friendly energy practices.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Benefits of Biomass Pellets</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">✓</span>
                  <span>Renewable and sustainable energy source</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">✓</span>
                  <span>High energy density and efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">✓</span>
                  <span>Easy storage and transportation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">✓</span>
                  <span>Reduces carbon footprint</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">✓</span>
                  <span>Cost-effective alternative to fossil fuels</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 text-center border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary mb-4">Interested in Renewable Energy Solutions?</h2>
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
