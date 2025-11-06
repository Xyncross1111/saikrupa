"use client"

import { useEffect, useState } from "react"
import type { ComponentType } from "react"
import { Award, Layers, Truck, Users } from "lucide-react"

interface StatProps {
  value: number
  label: string
  suffix?: string
  icon: ComponentType<{ className?: string }>
  variant?: "light" | "dark"
}

function StatItem({ value, label, suffix = "", icon: Icon, variant = "light" }: StatProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const isDark = variant === "dark"
  const elementId = `stat-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "item"}`

  useEffect(() => {
    const element = document.getElementById(elementId)
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [elementId])

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

  const cardClass = `relative overflow-hidden rounded-2xl border transition-all duration-300 animate-fade-up ${
    isDark
      ? "border-slate-800 bg-primary text-primary-foreground hover:border-secondary/40 hover:shadow-xl"
      : "border-border bg-card text-foreground shadow-sm hover:-translate-y-1 hover:shadow-lg"
  }`

  const iconWrapClass = `grid h-12 w-12 place-items-center rounded-lg sm:h-14 sm:w-14 ${
    isDark ? "bg-secondary/25" : "bg-secondary/10"
  }`

  const valueClass = `font-serif font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl ${
    isDark ? "text-primary-foreground" : "text-primary"
  }`

  const labelClass = `mt-1 text-[11px] uppercase tracking-[0.35em] text-[var(--muted-foreground)] sm:text-xs md:text-sm ${
    isDark ? "text-primary-foreground/70" : "text-slate-500"
  }`

  return (
    <div id={elementId} className={cardClass}>
      <div className="flex items-center gap-4 px-6 py-7 sm:px-8 sm:py-9">
        <div className={iconWrapClass}>
          <Icon className="h-6 w-6 text-secondary" />
        </div>
        <div className="flex-1">
          <div className="flex items-baseline gap-1">
            <span className={valueClass}>{count}</span>
            {suffix && <span className="text-secondary text-xl font-semibold sm:text-2xl md:text-3xl">{suffix}</span>}
          </div>
          <p className={labelClass}>{label}</p>
        </div>
      </div>
    </div>
  )
}

export function StatsCounter() {
  return (
    <section className="border-y border-border/70 bg-slate-50/80 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-4">
          <StatItem value={15} label="Years of Experience" suffix="+" icon={Award} />
          <StatItem value={10} label="Million Tons Transported" suffix="M+" icon={Layers} variant="dark" />
          <StatItem value={400} label="Fleet Vehicles" suffix="+" icon={Truck} />
          <StatItem value={615} label="Professionals" suffix="+" icon={Users} variant="dark" />
        </div>
      </div>
    </section>
  )
}
