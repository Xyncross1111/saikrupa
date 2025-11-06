"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

interface MarqueeItem {
  name: string
  logo: string
}

interface MarqueeProps {
  items: MarqueeItem[]
  speed?: number
}

// Helper to split names into two lines
function splitName(name: string) {
  const parenIdx = name.indexOf("(");
  if (parenIdx > 0) {
    return name.slice(0, parenIdx).trim() + "\n" + name.slice(parenIdx).trim();
  }
  const words = name.split(" ");
  if (words.length > 3) {
    return words.slice(0, 3).join(" ") + "\n" + words.slice(3).join(" ");
  }
  return name;
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
  <div ref={marqueeRef} className="flex gap-2 sm:gap-4 md:gap-6 py-6 sm:py-8 whitespace-nowrap">
        {[...items, ...items].map((item, index) => {
          const isDuplicate = index >= items.length
          return (
            <div
              key={index}
              className="shrink-0 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:px-6 sm:py-4 md:px-8 bg-transparent"
              aria-hidden={isDuplicate}
            >
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="relative h-16 w-32 sm:h-20 sm:w-40 md:h-24 md:w-48">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                  />
                </div>
                <p className="font-semibold text-gray-700 text-xs sm:text-sm md:text-base text-center mt-2 whitespace-pre-line">{splitName(item.name)}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
