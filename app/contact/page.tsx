import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <>
      <Header />

      {/* Solid navy hero */}
      <section className="w-full bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-white/90 max-w-3xl">
            Get in touch with Saikrupa Group for any inquiries about our services or to discuss partnership opportunities.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Contact Info & Form simplified */}
        <section className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-8">Get in Touch</h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Address</h3>
                  <p className="text-gray-600">
                    Yash Complex, No. G-3, Amravati Rd
                    <br />
                    opposite R.B.I Quarters, near Ravi Nagar Square
                    <br />
                    Bharatnagar, Nagpur
                    <br />
                    Maharashtra 440010, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+917350125348" className="hover:text-primary transition block">
                      +91 73501 25348
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@saikrupagroup.com" className="hover:text-primary transition">
                      info@saikrupagroup.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-xl border border-gray-200 bg-gray-50">
              <h3 className="font-semibold text-primary mb-4">Business Hours</h3>
              <p className="text-gray-600 text-sm">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
