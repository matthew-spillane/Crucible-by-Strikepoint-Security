import React from 'react'

const VARIANTS = {
  primary: 'bg-accent text-surface font-semibold hover:bg-accent-dim active:scale-[0.98] disabled:bg-accent/30 disabled:text-surface/50',
  danger:  'bg-danger text-white font-semibold hover:bg-danger/80 active:scale-[0.98] disabled:bg-danger/30',
  ghost:   'bg-transparent border border-border text-text-secondary hover:bg-surface-2 hover:text-text-primary disabled:opacity-40',
  outline: 'bg-transparent border border-accent text-accent hover:bg-accent/10 disabled:opacity-40',
}

const SIZES = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-2.5 text-sm',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  loading = false,
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded font-body transition-all duration-100 cursor-pointer disabled:cursor-not-allowed
        ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && (
        <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  )
}
