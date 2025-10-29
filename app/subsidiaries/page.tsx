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
    name: "Sai Coal Suppliers",
    description: "Direct coal supply and sourcing services for industrial clients",
    focus: "Coal Supply",
    href: "/subsidiaries/saikrupa-coal-suppliers",
  },
  {
    name: "Sai Coal Movers",
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

      {/* Solid navy hero */}
      <section className="w-full bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Affiliate Companies</h1>
          <p className="text-white/90 max-w-3xl">
            Saikrupa Group operates through {subsidiaries.length} specialized affiliate companies, each focused on
            delivering excellence in their respective domains.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

  {/* Affiliates Grid (navy section similar to Our Services) */}
        <section className="p-0 bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {subsidiaries.map((subsidiary, index) => (
              <Link key={index} href={subsidiary.href}>
                <div className="group bg-white rounded-xl border border-gray-200 hover:border-secondary hover:shadow-md transition-all duration-300 cursor-pointer h-full p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
                    <h2 className="text-base sm:text-lg font-serif font-bold text-primary flex-1 group-hover:text-secondary transition-colors">
                      {subsidiary.name}
                    </h2>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-secondary/10 text-secondary whitespace-nowrap">
                      {subsidiary.focus}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{subsidiary.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Additional Info */}
        <section className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-xl border border-gray-200 bg-gray-50">
          <h2 className="text-2xl font-bold text-primary mb-3 sm:mb-4">Integrated Operations</h2>
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
