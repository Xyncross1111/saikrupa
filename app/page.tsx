import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Carousel } from "@/components/carousel"
import { StatsCounter } from "@/components/stats-counter"
import { Marquee } from "@/components/marquee"
import Link from "next/link"
import {
  Truck,
  Pickaxe,
  Zap,
  Leaf,
  Wrench,
  Fuel,
  Award,
  Globe,
  TrendingUp,
  Users,
  Shield,
  CloudLightning as Lightning,
  Clock,
  ArrowRight,
  LeafIcon,
  Heart,
  Lightbulb,
} from "lucide-react"

const carouselSlides = [
  {
    id: 1,
    title: "Coal Transportation Excellence",
    subtitle: "Reliable logistics for India's energy sector",
    image: "/coal-mining-operation.jpg",
  },
  {
    id: 2,
    title: "Surface Mining Services",
    subtitle: "Efficient extraction with safety first",
    image: "/mining-equipment.png",
  },
  {
    id: 3,
    title: "Sustainable Energy Solutions",
    subtitle: "Biomass pellets for a greener future",
    image: "/renewable-energy-landscape.jpg",
  },
  {
    id: 4,
    title: "Truenest Ventures",
    subtitle: "Innovation-focused affiliate driving new growth",
    image: "/industrial-innovation-technology.jpg",
  },
  {
    id: 5,
    title: "Sai Coal Movers",
    subtitle: "Specialized bulk movement with safety and speed",
    image: "/coal-transportation-trucks-logistics-fleet.jpg",
  },
]

const services = [
  {
    icon: Truck,
    title: "Coal Transportation",
    description: "Road and rail transportation of coal with 400+ fleet vehicles (owned and contracted) and real-time tracking",
    image: "/coal-transportation-trucks-logistics.jpg",
  },
  {
    icon: Pickaxe,
    title: "Surface Mining",
    description: "Expert overburden removal and coal extraction services with proven track record",
    image: "/surface-mining-excavation-equipment.jpg",
  },
  {
    icon: Wrench,
    title: "Coal Crushing",
    description: "@ Mobile and 6 semi-mobile coal crushing services for on-site deployment",
    image: "/coal-crushing-equipment-machinery.jpg",
  },
  {
    icon: Leaf,
    title: "Biomass Pellets",
    description: "Eco-friendly renewable fuel production at 75 MT/day capacity",
    image: "/biomass-pellets-renewable-energy.jpg",
  },
  {
    icon: Zap,
    title: "Coal Liaison",
    description: "Comprehensive coal linkage and sourcing services for all sectors",
    image: "/coal-liaison-sourcing-supply-chain.jpg",
  },
  {
    icon: Fuel,
    title: "Fuel Station",
    description: "Bulk fuel supply for industrial and commercial clients",
    image: "/fuel-station-industrial-supply.jpg",
  },
]

const clients = [
  "Western Coalfields Limited",
  "Northern Coalfields Limited",
  "South Eastern Coalfields Limited",
  "Mahanadi Coalfields Limited",
  "Jindal Steel and Power",
  "Adani Power Limited",
  "NTPC",
  "Nabha Power Limited",
  "Gujarat Electricity Corporation",
  "Madhya Pradesh Power Generation",
  "Aryan Coal Beneficiation",
  "Fuelco Coal India",
]

const mvv = [
  {
    icon: Award,
    title: "Mission",
    description: "Qualitative & Quantitative service to clients with Excellence, Economy & Efficiency",
  },
  {
    icon: Globe,
    title: "Vision",
    description: "Explore sources across the globe to perform for excellence for inland clients",
  },
  {
    icon: TrendingUp,
    title: "Core Values",
    description: "Sustainable growth, quality assurance, customer satisfaction, and professional transparency",
  },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: "Proven Reliability",
    description: "15+ years of consistent service with 10+ million tons transported across India",
    image: "/professional-team-reliability-trust.jpg",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Dedicated fleet of 400+ vehicles (owned and contracted) ensuring on-time delivery every time",
    image: "/logistics-fleet-delivery-trucks.jpg",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "615+ highly qualified professionals with deep industry expertise",
    image: "/professional-team-expertise-workers.jpg",
  },
  {
    icon: Lightning,
    title: "Advanced Equipment",
    description: "State-of-the-art crushing and mining equipment with latest technology",
    image: "/advanced-mining-equipment-technology.jpg",
  },
]

const leadership = [
  {
    name: "Shri Dilbag Singh Dhanda",
    role: "Managing Director & Co-Founder",
    bio: "A veteran entrepreneur with decades of experience in the coal and industrial sectors, Shri Dilbag Singh Dhanda has been the driving force behind the growth and success of Saikrupa Group. His deep industry knowledge, strong leadership, and strategic vision have transformed the group into a trusted name and an industry leader. Under his guidance, the company continues to expand its presence with a commitment to excellence, integrity, and innovation.",
    image: "/professional-businessman.png",
  },
  {
    name: "Mr. Nikhil Dhanda",
    role: "Executive Director",
    bio: "An MBA in Human Resource and Marketing, Mr. Nikhil Dhanda brings a modern, result-driven approach to the Saikrupa Group. His dynamic leadership, strategic vision, and strong industry relationships contribute to operational excellence and continuous business growth. With a keen focus on innovation and diversification, he is leading the group's expansion into emerging sectors, including renewable energy and sustainable development.",
    image: "/professional-executive.jpg",
  },
  {
    name: "Mr. Pardeep Mor",
    role: "Managing Director & Co-Founder",
    bio: "A visionary entrepreneur and co-founder of Saikrupa Group, Mr. Pardeep Mor has been an integral part of the company's journey since its inception. With decades of experience in the coal and transportation industries, he has contributed immensely to the group's growth and diversification. His strong leadership, operational expertise, and strategic foresight have helped establish Saikrupa Group as a trusted and reputed name across multiple sectors. He continues to guide the organization toward sustained success and excellence.",
    image: "/professional-businessman.png",
  },
]

const keyInitiatives = [
  {
    title: "Operational Excellence",
    description: "Optimized fleet management and logistics infrastructure ensuring maximum efficiency and reliability",
  },
  {
    title: "Technology Integration",
    description: "Advanced tracking systems and real-time monitoring across all operations for transparency",
  },
  {
    title: "Safety & Compliance",
    description: "Rigorous safety protocols and environmental compliance standards across all business units",
  },
]

const initiatives = [
  {
    icon: Heart,
    title: "Health & Safety",
    description:
      "Safety is our highest priority. We maintain rigorous protocols ensuring the wellbeing of our team and stakeholders.",
    image: "/workplace-safety-training.png",
  },
  {
    icon: LeafIcon,
    title: "Environment",
    description:
      "Committed to sustainable practices. Our biomass pellet production reduces dependence on fossil fuels.",
    image: "/renewable-energy-landscape.jpg",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuous improvement through technology adoption and process optimization in all operations.",
    image: "/industrial-innovation-technology.jpg",
  },
]

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Carousel */}
      <section className="w-full">
        <Carousel slides={carouselSlides} fullScreen />
      </section>

      {/* Stats Section */}
      <StatsCounter />

      {/* Mission, Vision, Values */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-3 sm:mb-4">
              Our Purpose
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Guided by our mission, vision, and core values to deliver excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {mvv.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="p-6 sm:p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-secondary transition-all duration-300"
                >
                  <Icon className="w-10 sm:w-12 h-10 sm:h-12 text-secondary mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-primary mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              Comprehensive coal handling and logistics solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-secondary hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-32 sm:h-40 overflow-hidden bg-gray-700">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  </div>
                  <div className="p-4 sm:p-6 relative">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                      <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-secondary" />
                    </div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-secondary text-primary rounded-lg hover:bg-secondary/90 transition font-medium text-sm sm:text-base"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <img src="/coal-mining-facility.jpg" alt="Saikrupa Group Facility" className="rounded-xl shadow-lg" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-4 sm:mb-6">
                About Saikrupa Group
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Established in 2011, Saikrupa Group has emerged as a leading coal handling and transport agency with
                over 15 years of industry experience. We specialize in the movement of Indian coal by road and rail,
                having transported more than 10 million tons across India.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Our integrated business model encompasses coal transportation, surface mining, coal crushing, biomass
                pellet manufacturing, and fuel supply. We operate a fleet of 400+ vehicles (owned and contracted) and
                employ 615 highly qualified professionals.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Our commitment to excellence, cost efficiency, timely delivery, and customer satisfaction has made us a
                trusted partner for major coal companies, power plants, and industrial clients across the nation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/about"
                  className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-medium text-sm sm:text-base text-center"
                >
                  Learn More
                </Link>
                <Link
                  href="/services"
                  className="inline-block px-4 sm:px-6 py-2 sm:py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition font-medium text-sm sm:text-base text-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 sm:mb-6">
                Key Initiatives That Drive Our Growth
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                We are committed to continuous improvement and operational excellence across all our business units.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {keyInitiatives.map((initiative, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base mb-1">{initiative.title}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">{initiative.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-secondary text-primary rounded-lg hover:bg-secondary/90 transition font-semibold text-sm sm:text-base"
              >
                Get Started Today
              </Link>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm border border-gray-700">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-secondary mb-2">15+</div>
                  <p className="text-sm sm:text-base text-gray-300">Years of Industry Experience</p>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-secondary mb-2">10M+</div>
                  <p className="text-sm sm:text-base text-gray-300">Tons of Coal Transported</p>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-secondary mb-2">400+</div>
                  <p className="text-sm sm:text-base text-gray-300">Fleet vehicles (owned and contracted)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Grid Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-3 sm:mb-4">
              Our Commitment
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              We are dedicated to health, safety, environmental sustainability, and continuous innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon
              return (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={initiative.image || "/placeholder.svg"}
                    alt={initiative.title}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="p-4 sm:p-6">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-primary mb-2 sm:mb-3">
                      {initiative.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{initiative.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-3 sm:mb-4">
              Leadership & Expertise
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Guided by visionary leaders with decades of industry experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-primary mb-1">{leader.name}</h3>
                  <p className="text-secondary font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{leader.role}</p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-3 sm:mb-4">
              Why Choose Saikrupa Group
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              We deliver excellence through reliability, expertise, and cutting-edge solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-secondary transition-all duration-300"
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-700">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  </div>
                  <div className="p-6 sm:p-8 relative">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 bg-secondary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Clients Section - Marquee */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-3 sm:mb-4">
              Our Clients
            </h2>
            <p className="text-sm sm:text-base text-gray-600">Trusted by India's leading coal and power companies</p>
          </div>

          <Marquee items={clients} speed={30} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 sm:mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us today to discuss how Saikrupa Group can support your coal and logistics needs
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-secondary text-primary rounded-lg hover:bg-secondary/90 transition font-semibold text-sm sm:text-base"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
