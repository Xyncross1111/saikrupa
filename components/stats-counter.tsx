"use client"

import { useEffect, useState } from "react"
import { Award, Layers, Truck, Users } from "lucide-react"

interface StatProps {
  value: number
  label: string
  suffix?: string
  icon: React.ComponentType<{ className?: string }>
  variant?: "light" | "dark"
}

function StatItem({ value, label, suffix = "", icon: Icon, variant = "light" }: StatProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`stat-${label}`)
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [isVisible, label])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const increment = value / 60
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 20)
    return () => clearInterval(timer)
  }, [isVisible, value])

  const isDark = variant === "dark"

  return (
    <div
      id={`stat-${label}`}
      className={[
        "relative overflow-hidden rounded-xl p-6 sm:p-7 md:p-8 transition-all duration-300",
        isDark
          ? "bg-gray-900 text-white border border-gray-800 hover:shadow-xl hover:border-secondary/40"
          : "bg-white text-gray-900 border border-gray-300 shadow-sm hover:shadow-md hover:border-secondary/50",
      ].join(" ")}
    >
      <div className="flex items-center gap-4 sm:gap-5">
        <div
          className={[
            "shrink-0 grid place-items-center rounded-md w-12 h-12 sm:w-14 sm:h-14",
            isDark ? "bg-secondary/20" : "bg-secondary",
          ].join(" ")}
        >
          <Icon className={isDark ? "w-6 h-6 text-secondary" : "w-6 h-6 text-white"} />
        </div>
        <div className="flex-1">
          <div className="flex items-baseline gap-1">
            <div className={
              [
                "font-serif font-bold tracking-tight",
                "text-4xl sm:text-5xl md:text-6xl",
                isDark ? "text-white" : "text-black",
              ].join(" ")
            }>
              {count}
            </div>
            {suffix && (
              <span className={"text-secondary text-2xl sm:text-3xl md:text-4xl font-extrabold"}>{suffix}</span>
            )}
          </div>
          <p className={[
            "mt-1 uppercase tracking-widest",
            "text-[11px] sm:text-xs md:text-sm font-semibold",
            isDark ? "text-gray-300" : "text-gray-800",
          ].join(" ")}>{label}</p>
        </div>
      </div>
    </div>
  )
}

export function StatsCounter() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-linear-to-r from-gray-50 via-white to-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <StatItem value={15} label="Years of Experience" suffix="+" icon={Award} variant="light" />
          <StatItem value={10} label="Million Tons Transported" suffix="M+" icon={Layers} variant="dark" />
          <StatItem value={400} label="Fleet Vehicles" suffix="+" icon={Truck} variant="light" />
          <StatItem value={615} label="Professionals" suffix="+" icon={Users} variant="dark" />
        </div>
      </div>
    </section>
  )
}
