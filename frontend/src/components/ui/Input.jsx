import React from 'react'

export default function Input({
  label,
  error,
  className = '',
  mono = false,
  ...props
}) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="font-mono text-[11px] text-text-muted uppercase tracking-widest font-medium">
          {label}
        </label>
      )}
      <input
        className={`w-full bg-surface-2 border ${error ? 'border-danger' : 'border-border'} rounded px-3 py-2
          text-sm text-text-primary placeholder-text-muted
          ${mono ? 'font-mono' : 'font-body'}
          focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
          transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
        {...props}
      />
      {error && (
        <span className="font-mono text-[10px] text-danger">{error}</span>
      )}
    </div>
  )
}

export function Textarea({ label, error, className = '', mono = false, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="font-mono text-[11px] text-text-muted uppercase tracking-widest font-medium">
          {label}
        </label>
      )}
      <textarea
        className={`w-full bg-surface-2 border ${error ? 'border-danger' : 'border-border'} rounded px-3 py-2
          text-sm text-text-primary placeholder-text-muted resize-none
          ${mono ? 'font-mono' : 'font-body'}
          focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
          transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
        {...props}
      />
      {error && (
        <span className="font-mono text-[10px] text-danger">{error}</span>
      )}
    </div>
  )
}
