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
    title: "SaiKrupa Traders",
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
    description: "Mobile and semi-mobile coal crushing services engineered for fast on-site deployment",
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
  { name: "Western Coalfields Limited (WCL)", logo: "/logos/wcl.png" },
  { name: "Northern Coalfields Limited (NCL)", logo: "/logos/ncl.png" },
  { name: "South Eastern Coalfields Limited (SECL)", logo: "/logos/secl.png" },
  { name: "Mahanadi Coalfields Limited. (MCL)", logo: "/logos/mcl.png" },
  { name: "Jindal Steel and Power Limited (JSPL)", logo: "/logos/jindal.png" },
  { name: "Adani Power Limited (APL)", logo: "/logos/adani.png" },
  { name: "Gujarat Electricity Corporation Limited (GSECL)", logo: "/logos/gsecl.png" },
  { name: "National Thermal Power Corporation (NTPC Mouda)", logo: "/logos/ntpc.png" },
  { name: "Indian Railway Finance Corporation (IRFC)", logo: "/logos/irfc.png" },
  { name: "Madhya Pradesh Power Generation Company Limited (MPPGCL)", logo: "/logos/mp.png" },
  { name: "Shri Singaji Thermal Power Project (SSTPP)", logo: "/logos/sstpp.png" },
  { name: "Aryan Coal Beneficiation Pvt Ltd.", logo: "/logos/acb.png" },
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
      <section className="w-full animate-subtle-zoom">
        <Carousel slides={carouselSlides} fullScreen />
      </section>

      {/* Stats Section */}
      <StatsCounter />

      {/* Mission, Vision, Values */}
      <section className="border-t border-border/60 bg-white py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">Our Purpose</p>
            <h2 className="mt-3 text-2xl font-serif font-semibold text-primary sm:text-3xl md:text-4xl">
              Mission, Vision & Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
              Guided by a commitment to excellence and responsibility across every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {mvv.map((item, index) => {
              const Icon = item.icon
              const delayClass = index === 0 ? "" : index === 1 ? "animate-delay-100" : "animate-delay-200"
              return (
                <div
                  key={index}
                  className={`flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 animate-fade-up ${delayClass}`}
                >
                  <Icon className="h-10 w-10 text-secondary sm:h-12 sm:w-12" />
                  <h3 className="text-lg font-serif font-semibold text-primary sm:text-xl">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-t border-border/60 bg-white py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 text-center sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">What We Do</p>
            <h2 className="mt-3 text-2xl font-serif font-semibold text-primary sm:text-3xl md:text-4xl">
              Integrated Mining & Logistics Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
              End-to-end capabilities that keep coal supply chains dependable, efficient, and future-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              const delayClass = index % 3 === 1 ? "animate-delay-100" : index % 3 === 2 ? "animate-delay-200" : ""
              return (
                <div
                  key={index}
                  className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-up ${delayClass}`}
                >
                  <div className="relative h-36 overflow-hidden bg-slate-800 sm:h-40">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>
                  </div>
                  <div className="relative flex flex-1 flex-col gap-3 p-5 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-lg bg-secondary/15 text-secondary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="flex-1 text-lg font-serif font-semibold text-primary sm:text-xl">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary transition group-hover:gap-3">
                      Explore
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 text-center sm:mt-14">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-border/60 bg-slate-50 py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="animate-fade-up">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img
                  src="/coal-mining-facility.jpg"
                  alt="Saikrupa Group Facility"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-5 animate-fade-up animate-delay-100">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">Who We Are</p>
              <h2 className="text-2xl font-serif font-semibold text-primary sm:text-3xl md:text-4xl">
                About Saikrupa Group
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Established in 2011, Saikrupa Group has grown into one of India&apos;s most dependable coal handling and
                transport partners. We have moved more than 10 million tons of coal across the country through an
                integrated road and rail logistics network.
              </p>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Our diversified services span transportation, surface mining, coal crushing, biomass pellet
                manufacturing, and bulk fuel supply. A 400+ strong fleet and 615 specialists keep operations precise and
                responsive.
              </p>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Discipline, transparency, and on-time delivery remain the cornerstones that power lasting partnerships
                with India&apos;s leading coal companies, power plants, and industrial enterprises.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Learn More
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section className="border-t border-border/70 bg-primary py-12 text-primary-foreground sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-14">
            <div className="space-y-5 animate-fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">Strategic Focus</p>
              <h2 className="text-2xl font-serif font-semibold sm:text-3xl md:text-4xl">
                Initiatives Driving Sustainable Growth
              </h2>
              <p className="text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
                Technology integration, disciplined execution, and unwavering compliance keep our services dependable
                across every project and partner engagement.
              </p>
              <ul className="space-y-4 text-sm sm:text-base">
                {keyInitiatives.map((initiative, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-secondary/80 shrink-0"></span>
                    <div>
                      <h4 className="font-semibold text-primary-foreground">{initiative.title}</h4>
                      <p className="text-primary-foreground/70 text-sm leading-relaxed">
                        {initiative.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-secondary/90"
              >
                Begin a Conversation
              </Link>
            </div>
            <div className="rounded-3xl border border-secondary/30 bg-white/10 p-6 backdrop-blur-md sm:p-8 animate-fade-up animate-delay-100">
              <div className="space-y-5 sm:space-y-7">
                <div>
                  <p className="text-4xl font-serif font-semibold text-secondary sm:text-5xl">15+</p>
                  <p className="text-sm text-primary-foreground/80 sm:text-base">Years of Industry Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-serif font-semibold text-secondary sm:text-5xl">10M+</p>
                  <p className="text-sm text-primary-foreground/80 sm:text-base">Tons of Coal Transported</p>
                </div>
                <div>
                  <p className="text-4xl font-serif font-semibold text-secondary sm:text-5xl">400+</p>
                  <p className="text-sm text-primary-foreground/80 sm:text-base">Fleet Vehicles (Owned & Contracted)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Grid Section */}
      <section className="border-t border-border/60 bg-white py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">Our Commitment</p>
            <h2 className="mt-3 text-2xl font-serif font-semibold text-primary sm:text-3xl md:text-4xl">
              Safety, Sustainability & Innovation First
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
              Every initiative is designed to protect people, nurture the environment, and advance performance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 sm:gap-8">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon
              const delayClass = index === 1 ? "animate-delay-100" : index === 2 ? "animate-delay-200" : ""
              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-up ${delayClass}`}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={initiative.image || "/placeholder.svg"}
                      alt={initiative.title}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  <div className="space-y-3 p-5 sm:p-6">
                    <div className="grid h-12 w-12 place-items-center rounded-lg bg-secondary/15 text-secondary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-primary sm:text-xl">
                      {initiative.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{initiative.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="border-t border-border/60 bg-slate-50 py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">Leadership</p>
            <h2 className="mt-3 text-2xl font-serif font-semibold text-primary sm:text-3xl md:text-4xl">
              Experience Steering Every Engagement
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
              A hands-on leadership team ensures strategy, execution, and partnerships remain aligned.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {leadership.map((leader, index) => {
              const delayClass = index === 1 ? "animate-delay-100" : ""
              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-up ${delayClass}`}
                >
                  <div className="relative h-48 overflow-hidden sm:h-64">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/15"></div>
                  </div>
                  <div className="space-y-3 p-6 sm:p-8">
                    <h3 className="text-lg font-serif font-semibold text-primary sm:text-xl">{leader.name}</h3>
                    <p className="text-secondary text-sm font-semibold uppercase tracking-[0.25em] sm:text-xs">
                      {leader.role}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{leader.bio}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="border-t border-border/70 bg-primary py-12 text-primary-foreground sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">Why Saikrupa</p>
            <h2 className="mt-3 text-2xl font-serif font-semibold sm:text-3xl md:text-4xl">
              Dependable Partnerships With Measurable Outcomes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-primary-foreground/80 sm:text-base">
              Reliability, technology, and on-ground expertise translate into consistent performance across millions of
              tons transported each year.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              const delayClass = index % 2 === 1 ? "animate-delay-100" : ""
              return (
                <div
                  key={index}
                  className={`group overflow-hidden rounded-2xl border border-primary/40 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl animate-fade-up ${delayClass}`}
                >
                  <div className="relative h-44 overflow-hidden sm:h-52">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-transparent"></div>
                  </div>
                  <div className="space-y-3 p-6 sm:p-8">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground sm:h-14 sm:w-14">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold sm:text-xl">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-primary-foreground/80 sm:text-base">{item.description}</p>
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
      <section className="border-t border-border/70 bg-linear-to-r from-primary to-primary/80 py-12 text-primary-foreground sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-semibold sm:text-3xl md:text-4xl">
            Ready to Partner With Us?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base md:text-lg">
            Let&apos;s align on logistics, mining, or renewable energy requirements and craft a dependable execution plan.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-secondary/90 sm:px-8"
          >
            Start the Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
