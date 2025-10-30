"use client"

import { useEffect, useRef } from "react"

interface MarqueeProps {
  items: string[]
  speed?: number
}

export function Marquee({ items, speed = 40 }: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const scrollWidth = marquee.scrollWidth
    const clientWidth = marquee.clientWidth

    let animationId: number
    let position = 0

    const animate = () => {
      position -= speed / 60
      if (position < -scrollWidth / 2) {
        position = 0
      }
      marquee.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [speed])

  return (
    <div className="overflow-hidden bg-white">
      <div ref={marqueeRef} className="flex gap-6 sm:gap-8 md:gap-12 py-6 sm:py-8 whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="shrink-0 rounded-lg border border-border bg-linear-to-br from-white to-muted px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:shadow-md sm:px-6 sm:py-4 md:px-8"
          >
            <p className="font-semibold text-gray-700 text-center text-xs sm:text-sm md:text-base">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
