import React from 'react'

export default function Card({ children, className = '', accentTop = false, ...props }) {
  return (
    <div
      className={`bg-surface-1 border border-border rounded p-4 ${accentTop ? 'border-t-accent border-t-2' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`font-heading font-bold text-sm text-text-primary tracking-wide uppercase ${className}`}>
      {children}
    </h3>
  )
}
