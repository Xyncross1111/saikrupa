"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  slides: Array<{
    id: number
    title: string
    subtitle: string
    image: string
  }>
  fullScreen?: boolean
}

export function Carousel({ slides, fullScreen = false }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  const next = () => setCurrent((prev) => (prev + 1) % slides.length)

  return (
    <div
      className={
        `relative overflow-hidden ` +
        (fullScreen
          ? "w-screen h-svh rounded-none"
          : "w-full h-56 sm:h-80 md:h-96 lg:h-[500px] rounded-lg")
      }
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-balance">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-1.5 sm:p-2 rounded-full transition"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-1.5 sm:p-2 rounded-full transition"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition ${index === current ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}
