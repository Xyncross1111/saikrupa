import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

const subsidiaries = [
  {
    name: "Saikrupa Transport",
    description: "Specialized in coal and bulk material transportation across India",
    focus: "Road & Rail Transport",
    href: "/subsidiaries/saikrupa-transport",
  },
  {
    name: "Saikrupa Coal Suppliers",
    description: "Direct coal supply and sourcing services for industrial clients",
    focus: "Coal Supply",
    href: "/subsidiaries/saikrupa-coal-suppliers",
  },
  {
    name: "Saikrupa Coal Movers",
    description: "Expert in coal handling and movement operations",
    focus: "Coal Handling",
    href: "/subsidiaries/saikrupa-coal-movers",
  },
  {
    name: "Saikrupa Bulk Movers",
    description: "Comprehensive bulk material transportation and logistics",
    focus: "Bulk Logistics",
    href: "/subsidiaries/saikrupa-bulk-movers",
  },
  {
    name: "Saikrupa Green Energy Pvt Ltd",
    description: "Renewable energy solutions including biomass pellet production",
    focus: "Green Energy",
    href: "/subsidiaries/saikrupa-green-energy",
  },
  {
    name: "Saikrupa Service Station",
    description: "Fuel supply and service station operations",
    focus: "Fuel Services",
    href: "/subsidiaries/saikrupa-service-station",
  },
  {
    name: "Vasundhara Coal Carriers Pvt Ltd",
    description: "Specialized coal carrier services with dedicated fleet",
    focus: "Coal Carriers",
    href: "/subsidiaries/vasundhara-coal-carriers",
  },
  {
    name: "GBS Pvt Ltd",
    description: "General business services supporting group operations",
    focus: "Support Services",
    href: "/subsidiaries/gbs-pvt-ltd",
  },
  {
    name: "Truenest Ventures",
    description: "Development arm for residential schemes, PG hostels and township planning",
    focus: "Urban Development",
    href: "/subsidiaries/truenest-ventures",
  },
  {
    name: "Saikrupa Trading",
    description: "Coal trading and multi-sector commerce with a compliance-first approach",
    focus: "Trading",
    href: "/subsidiaries/saikrupa-trading",
  },
]

export default function Subsidiaries() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Affiliate Companies</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Saikrupa Group operates through {subsidiaries.length} specialized affiliate companies, each focused on
            delivering excellence in their respective domains.
          </p>
        </section>

  {/* Affiliates Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subsidiaries.map((subsidiary, index) => (
            <Link key={index} href={subsidiary.href}>
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-secondary transition cursor-pointer h-full">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-xl font-bold text-primary flex-1">{subsidiary.name}</h2>
                  <span className="ml-4 px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full whitespace-nowrap">
                    {subsidiary.focus}
                  </span>
                </div>
                <p className="text-gray-600">{subsidiary.description}</p>
              </div>
            </Link>
          ))}
        </section>

        {/* Additional Info */}
        <section className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">Integrated Operations</h2>
          <p className="text-gray-600 mb-4">
            Our subsidiary structure allows us to provide integrated, end-to-end solutions for coal mining, handling,
            and logistics. Each subsidiary specializes in its domain while working seamlessly with others to deliver
            comprehensive services to our clients.
          </p>
          <p className="text-gray-600">
            This diversified approach ensures we can handle every aspect of your coal and logistics needs, from sourcing
            and extraction to transportation and delivery.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Want to Learn More?</h2>
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
