import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Truck, Pickaxe, Zap, Leaf, Wrench, Fuel, ArrowRight } from "lucide-react"

const serviceDetails = [
  {
    icon: Truck,
    title: "Coal Transportation",
    description: "Comprehensive coal transportation services via road and rail",
    image: "/coal-transportation-trucks-logistics-fleet.jpg",
    details: [
      "Fleet of 400+ dedicated vehicles (owned and contracted)",
      "Road and rail transportation modes",
      "Timely delivery guaranteed with real-time tracking",
      "Experienced logistics team with 15+ years expertise",
      "Arrangements of coal cost payments on behalf of clients",
      "Liaison with colliery authority for fast loading",
      "Liaison with railways for wagon placement at sidings",
      "Quick redressal of complaints and issues",
    ],
    fullDescription:
      "Saikrupa Group operates a large network of 400+ vehicles for transporting coal with excellent goodwill among customers for timely delivery. We provide excellent logistics support managed by efficient and qualified personnel. Our services include arrangements of coal cost payments on behalf of clients to be reimbursed later, and liaison with colliery authority for fast loading and redressal of complaints.",
  },
  {
    icon: Pickaxe,
    title: "Surface Mining",
    description: "Expert surface mining and overburden removal services",
    image: "/surface-mining-excavation-equipment-coal-extractio.jpg",
    details: [
      "Overburden removal expertise",
      "Coal extraction services",
      "Safety-first operations",
      "Environmental compliance",
      "2 years proven track record in SECL region",
      "Operations in Raigad and Gevra Mines",
      "High-quality coal extraction",
      "Operational excellence and industry standards",
    ],
    fullDescription:
      "Surface mining is a widely used method for extracting minerals and natural resources located close to the Earth's surface. Unlike underground mining, it does not require deep tunneling and allows for efficient removal of overburden to access the desired material. This method is especially suitable for coal extraction and is known for its cost-effectiveness, operational safety, and high production capacity. We have successfully provided surface mining services for two years in the South Eastern Coalfields Limited (SECL) region, specifically in the Raigad and Gevra Mines, extracting high-quality coal while ensuring operational excellence and adherence to industry standards.",
  },
  {
    icon: Wrench,
    title: "Coal Crushing",
    description: "Coal crushing services with mobile and semi-mobile equipment",
    image: "/coal-crushing-equipment-machinery-industrial.jpg",
    details: [
      "2 mobile crushers (fully operational)",
      "6 semi-mobile crushers (fully operational)",
      "Portable crushing units for flexible deployment",
      "Quick installation on-site as per requirements",
      "Suitable for long-term mining projects",
      "High efficiency and consistent output",
      "Timely supply to power plants and industrial clients",
    ],
    fullDescription:
      "Coal crushing is the process of breaking down large chunks of coal into smaller, manageable sizes to make it suitable for combustion, processing, or further handling. It is a critical operation in Coal Preparation Plants (CPPs) and thermal power stations, ensuring efficient fuel use and smooth operations. Our coal crushing services leverage mobile and semi-mobile crushers that can be quickly deployed and installed on-site as per project requirements, ensuring high efficiency, consistent output, and timely supply to meet the demands of power plants and industrial clients.",
  },
  {
    icon: Leaf,
    title: "Biomass Pellets",
    description: "Sustainable renewable fuel production for modern energy needs",
    image: "/biomass-pellets-renewable-energy-sustainable-fuel.jpg",
    details: [
      "75 MT/day production capacity",
      "State-of-the-art facility in Narwana, District Jind, Haryana",
      "Eco-friendly manufacturing process",
      "High energy density renewable fuel",
      "Sustainable alternative to fossil fuels",
      "Supply to major power companies like Nabha Power Ltd",
      "Easy to store and transport",
      "Significantly reduces dependence on fossil fuels",
    ],
    fullDescription:
      "Bio-Pellets, also known as Biopellets or Biological Pellets, are a renewable, high-efficiency fuel used in heating systems, electricity generation, and various industrial processes. These pellets are environmentally friendly, possess high energy density, are easy to store and transport, and significantly reduce dependence on fossil fuels—making them a sustainable alternative for modern energy needs. Saikrupa Group has recently ventured into the manufacturing of biomass pellets, with operations successfully running for the past 4 months. Our state-of-the-art plant, located in Narwana, District Jind, Haryana, has a production capacity of 75 metric tons per day (MT/day). We are proud to supply M/s Nabha Power Ltd, who utilize our bio-pellets as part of their commitment to sustainable and eco-friendly energy practices.",
  },
  {
    icon: Zap,
    title: "Coal Liaison",
    description: "Complete coal sourcing and linkage services for all sectors",
    image: "/coal-liaison-sourcing-supply-chain-management.jpg",
    details: [
      "Coal linkage arrangements at notified rates",
      "Non-regulated sector consumer services",
      "Auction mode coal sourcing",
      "5-year FSA period arrangements",
      "Spot e-Auction services",
      "Forward e-Auction coordination",
      "Special Forward e-Auction services",
      "Open market coal sourcing",
    ],
    fullDescription:
      "The coal at notified rates is made available by coal companies to coal consumers having long term coal linkage. The Liaisoning of coal is being provided to the Non-Regulated Sector consumers of various sub sectors through Auction mode only in which source(s) are fixed for the entire FSA period of 5 years at Bid Price (Basic + Premium, if any). The sole purpose of this policy is to provide consistent supply of specified coal to the consumers so as to consumers can assess coal cost for long term basis. Moreover, the consumers can book coal from other sources viz. Spot e-Auction, Forward e-Auction, Special Forward e-Auction & from open market. Such services are provided at nominal charges payable after confirmation of Linkage and first release of coal from Coal Companies.",
  },
  {
    icon: Fuel,
    title: "Fuel Station",
    description: "Bulk fuel supply for industrial and commercial clients",
    image: "/placeholder.svg?height=300&width=600",
    details: [
      "Bulk fuel supply operations",
      "Dedicated fuel station in Chandrapur, Maharashtra",
      "Village Tulana, Taluka Rajura location",
      "Industrial and commercial client support",
      "Reliable supply chain",
      "Uninterrupted fuel availability",
      "Support for logistics fleet",
      "Integrated supply chain capabilities",
    ],
    fullDescription:
      "In addition to our core operations, Saikrupa Group is actively involved in the bulk supply of fuel to meet the high-volume requirements of industrial and commercial clients. We operate a dedicated fuel station located at Village Tulana, Taluka Rajura, District Chandrapur, Maharashtra, ensuring uninterrupted fuel availability for our logistics fleet and regional customers. Our fuel operations further support our integrated supply chain capabilities and enhance service efficiency across our transport and mining services.",
  },
]

export default function Services() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Comprehensive coal handling, mining, and logistics solutions designed to meet the diverse needs of India's
            energy sector. From transportation to renewable energy, we deliver excellence across all operations.
          </p>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-secondary transition-all duration-300 bg-white"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-200">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 sm:w-7 h-6 sm:h-7 text-secondary" />
                    </div>
                    <ArrowRight className="w-4 sm:w-5 h-4 sm:w-5 text-gray-300 group-hover:text-secondary transition" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-primary mb-2 sm:mb-3">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed italic">
                    {service.fullDescription}
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 sm:gap-3 text-gray-700">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full flex-shrink-0"></span>
                        <span className="text-xs sm:text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </section>
      </main>

      <Footer />
    </>
  )
}
