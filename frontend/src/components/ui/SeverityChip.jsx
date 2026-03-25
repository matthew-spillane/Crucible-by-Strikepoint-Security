import React from 'react'

const SEVERITY_CONFIG = {
  critical: {
    label: 'CRITICAL',
    classes: 'bg-[#FF3B3B]/15 text-[#FF3B3B] border-[#FF3B3B]/40',
    dot: 'bg-[#FF3B3B]',
  },
  high: {
    label: 'HIGH',
    classes: 'bg-[#F5A623]/15 text-[#F5A623] border-[#F5A623]/40',
    dot: 'bg-[#F5A623]',
  },
  medium: {
    label: 'MEDIUM',
    classes: 'bg-[#FFD166]/15 text-[#FFD166] border-[#FFD166]/40',
    dot: 'bg-[#FFD166]',
  },
  low: {
    label: 'LOW',
    classes: 'bg-[#00C2FF]/15 text-[#00C2FF] border-[#00C2FF]/40',
    dot: 'bg-[#00C2FF]',
  },
  info: {
    label: 'INFO',
    classes: 'bg-white/5 text-text-secondary border-border',
    dot: 'bg-text-muted',
  },
}

export default function SeverityChip({ severity = 'info', showDot = true }) {
  const key = severity.toLowerCase()
  const config = SEVERITY_CONFIG[key] || SEVERITY_CONFIG.info

  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold px-2 py-0.5 rounded border ${config.classes}`}>
      {showDot && <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />}
      {config.label}
    </span>
  )
}
