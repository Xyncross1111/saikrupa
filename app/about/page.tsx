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
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
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
              We operate a fleet of dedicated 400+ vehicles both owned and contracted for transportation of coal with
              well-experienced manpower to carry out day-to-day movement. We strive for excellence through cost
              efficiency, timely delivery, and customer satisfaction.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The management of the company comprises of 615 highly qualified professionals with years of experience in
              rendering services in the coal sector. The driving force of the company is innovation in the specified
              services of the sector.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl border border-gray-200">
            <h3 className="text-xl font-serif font-semibold text-primary mb-6">Key Highlights</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">15+ years of industry experience</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">10+ million tons transported</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">400+ dedicated vehicles</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">615+ qualified professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">10 subsidiary companies</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Subsidiaries Section */}
        <section className="mb-16 bg-gray-50 p-8 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Our Affiliate Companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-gray-700">Saikrupa Transport</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-gray-700">Saikrupa Coal Suppliers</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-gray-700">Saikrupa Coal Movers</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-gray-700">Saikrupa Bulk Movers</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-gray-700">Saikrupa Green Energy Pvt Ltd</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-gray-700">Saikrupa Service Station</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-gray-700">Vasundhara Coal Carriers Pvt Ltd</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-gray-700">GBS Pvt Ltd</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-gray-700">Truenest Ventures</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-gray-700">Saikrupa Trading</span>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-primary mb-8">Mission, Vision & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border-l-4 border-secondary bg-gradient-to-br from-secondary/5 to-transparent rounded-r-lg">
              <Target className="w-8 h-8 text-secondary mb-3" />
              <h3 className="text-lg font-serif font-semibold text-primary mb-3">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Qualitative & Quantitative (Q2) service to the clients with Excellence, Economy & Efficiency (E3)
              </p>
            </div>
            <div className="p-6 border-l-4 border-accent bg-gradient-to-br from-accent/5 to-transparent rounded-r-lg">
              <Briefcase className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-serif font-semibold text-primary mb-3">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Explore sources across the globe to perform for excellence for the inland clients
              </p>
            </div>
            <div className="p-6 border-l-4 border-primary bg-gradient-to-br from-primary/5 to-transparent rounded-r-lg">
              <Users className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-serif font-semibold text-primary mb-3">Core Values</h3>
              <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
                <li>• Sustainable growth and development</li>
                <li>• Quality assurance and reliability</li>
                <li>• Customer satisfaction</li>
                <li>• Professional work culture and transparency</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-16 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200">
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
