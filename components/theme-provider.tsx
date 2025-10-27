'use client'

import React from 'react'

// Minimal passthrough ThemeProvider to remove next-themes dependency
export type ThemeProviderProps = { children: React.ReactNode }

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <>{children}</>
}
