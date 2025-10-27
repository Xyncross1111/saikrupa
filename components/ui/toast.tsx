'use client'

import React from 'react'

// Minimal no-op Toast primitives to avoid extra dependencies.
// These components are not used in the app; they exist only to keep exports stable.

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>

export const ToastViewport = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  ),
)
ToastViewport.displayName = 'ToastViewport'

export const Toast = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  ),
)
Toast.displayName = 'Toast'

export const ToastAction = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, ...props }, ref) => (
    <button ref={ref} type="button" {...props}>
      {children}
    </button>
  ),
)
ToastAction.displayName = 'ToastAction'

export const ToastClose = ToastAction

export const ToastTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  ),
)
ToastTitle.displayName = 'ToastTitle'

export const ToastDescription = ToastTitle

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
export type ToastActionElement = React.ReactElement<typeof ToastAction>
