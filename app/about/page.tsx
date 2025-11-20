import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { CheckCircle, Users, Briefcase, Target } from "lucide-react"

export default function About() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">About Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            A leading coal handling and transport agency with a rich legacy of excellence and innovation in India's
            energy sector since 2011.
          </p>
        </section>

        {/* Company Overview */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Saikrupa Group was established in the year 2011 as the leading Coal handling and transport agency,
              liaising agent, and supplier of coal. We specialize in the movement of Indian coal by road and rail mode,
              having experience of over 15 years and having transported more than 10 million tons of coal across India.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are one of the leading groups of India undertaking various business activities like coal transportation
              and handling, coal crushing, surface mining, liaising of coal, and bio-pellets manufacturing. Our global
              span of business and expertise of our team give us the unique ability to understand our customers' needs
              and satisfy them with excellence.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We operate a fleet of 400+ vehicles (owned and contracted) for coal transportation with well-experienced
              manpower to carry out day-to-day movement. We strive for excellence through cost efficiency, timely
              delivery, and customer satisfaction.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The management of the company comprises of 615 highly qualified professionals with years of experience in
              rendering services in the coal sector. The driving force of the company is innovation in the specified
              services of the sector.
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
              <div className="relative aspect-[16/9]">
                <img
                  src="/about.jpg"
                  alt="About"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif font-semibold text-primary mb-6">Key Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-gray-700">15+ years of industry experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-gray-700">10+ million tons transported</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-gray-700">615+ qualified professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-gray-700">10 subsidiary companies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Subsidiaries Section */}
        <section className="mb-16 bg-gray-50 p-8 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Our Affiliate Companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/affiliates/saikrupa-transport" className="flex items-center gap-3 transition-colors hover:text-secondary cursor-pointer group">
              <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
              <span className="text-gray-700 group-hover:underline">Saikrupa Transport</span>
            </Link>
            <Link href="/affiliates/saikrupa-coal-supplier" className="flex items-center gap-3 transition-colors hover:text-secondary cursor-pointer group">
              <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
              <span className="text-gray-700 group-hover:underline">Saikrupa Coal Supplier</span>
            </Link>
            <Link href="/affiliates/sai-coal-movers" className="flex items-center gap-3 transition-colors hover:text-secondary cursor-pointer group">
              <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
              <span className="text-gray-700 group-hover:underline">Sai Coal Movers</span>
            </Link>
            <Link href="/affiliates/saikrupa-bulk-movers" className="flex items-center gap-3 transition-colors hover:text-secondary cursor-pointer group">
              <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
              <span className="text-gray-700 group-hover:underline">Sai Bulk Movers</span>
            </Link>
            <Link href="/affiliates/saikrupa-green-energy" className="flex items-center gap-3 transition-colors hover:text-secondary cursor-pointer group">
              <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
              <span className="text-gray-700 group-hover:underline">Saikrupa Green Energy Pvt Ltd</span>
            </Link>
            <Link href="/affiliates/saikrupa-service-stations" className="flex items-center gap-3 transition-colors hover:text-secondary cursor-pointer group">
              <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
              <span className="text-gray-700 group-hover:underline">Saikrupa Service Stations</span>
            </Link>
            <Link href="/affiliates/vasundhara-coal-carriers" className="flex items-center gap-3 transition-colors hover:text-secondary cursor-pointer group">
              <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
              <span className="text-gray-700 group-hover:underline">Vasundhara Coal Carriers Pvt Ltd</span>
            </Link>
            <Link href="/affiliates/gbs-pvt-ltd" className="flex items-center gap-3 transition-colors hover:text-secondary cursor-pointer group">
              <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
              <span className="text-gray-700 group-hover:underline">GBS Pvt Ltd</span>
            </Link>
            <Link href="/affiliates/truenest-ventures" className="flex items-center gap-3 transition-colors hover:text-secondary cursor-pointer group">
              <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
              <span className="text-gray-700 group-hover:underline">Truenest Ventures</span>
            </Link>
            <Link href="/affiliates/saikrupa-trading" className="flex items-center gap-3 transition-colors hover:text-secondary cursor-pointer group">
              <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
              <span className="text-gray-700 group-hover:underline">Saikrupa Traders</span>
            </Link>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-16">
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
            <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <Target className="h-10 w-10 text-secondary sm:h-12 sm:w-12" />
              <h3 className="text-lg font-serif font-semibold text-primary sm:text-xl">Mission</h3>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Qualitative & Quantitative service to clients with Excellence, Economy & Efficiency
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <Briefcase className="h-10 w-10 text-secondary sm:h-12 sm:w-12" />
              <h3 className="text-lg font-serif font-semibold text-primary sm:text-xl">Vision</h3>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Explore sources across the globe to perform for excellence for inland clients
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <Users className="h-10 w-10 text-secondary sm:h-12 sm:w-12" />
              <h3 className="text-lg font-serif font-semibold text-primary sm:text-xl">Core Values</h3>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Sustainable growth, quality assurance, customer satisfaction, and professional transparency
              </p>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-16 bg-linear-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-serif font-bold text-primary mb-8">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-serif font-semibold text-primary mb-2">Shri Dilbag Singh Dhanda</h3>
              <p className="text-secondary font-medium mb-3">Managing Director & Founder</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                A senior and veteran business tycoon of the coal sector and industrial venture, establishing the basic
                concept of trust and excellence since decades. He is leading Saikrupa Transport as Managing Director.
                His vast knowledge of the sector and potential examining various business opportunities are the
                motivation features of his leadership skills. His strategic vision and industry relationships continue
                to drive the company's growth and market reputation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-serif font-semibold text-primary mb-2">Mr. Nikhil Dhanda</h3>
              <p className="text-secondary font-medium mb-3">Executive Director</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                He is the driving force behind the operations of the business including recent developments in the coal
                segment. His activities, vast knowledge and dynamic leadership in the sector are unparalleled. He enjoys
                enviable positions because of his industry relationships and market reputation. His leadership has
                driven the company's operational excellence and expansion into renewable energy sectors.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">Interested in Working With Us?</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-medium"
          >
            Contact Us
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}
