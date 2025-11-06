import type React from "react"
import type { Metadata } from "next"
import { Sora, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const sora = Sora({ subsets: ["latin"], variable: "--font-serif" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Saikrupa Group - Coal Mining & Logistics",
  description: "Leading coal handling, transportation, and mining services provider in India",
  generator: "v0.app",
  icons: {
    icon: '/logos/skgroup.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${sora.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
