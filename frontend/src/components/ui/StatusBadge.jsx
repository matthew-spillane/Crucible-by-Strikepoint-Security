import React from 'react'

const STATUS_CONFIG = {
  running: {
    label: 'RUNNING',
    classes: 'bg-[#00C2FF]/10 text-[#00C2FF] border-[#00C2FF]/30',
    pulse: true,
  },
  complete: {
    label: 'COMPLETE',
    classes: 'bg-[#00E087]/10 text-[#00E087] border-[#00E087]/30',
    pulse: false,
  },
  completed: {
    label: 'COMPLETE',
    classes: 'bg-[#00E087]/10 text-[#00E087] border-[#00E087]/30',
    pulse: false,
  },
  failed: {
    label: 'FAILED',
    classes: 'bg-[#FF3B3B]/10 text-[#FF3B3B] border-[#FF3B3B]/30',
    pulse: false,
  },
  pending: {
    label: 'PENDING',
    classes: 'bg-white/5 text-text-secondary border-border',
    pulse: false,
  },
  idle: {
    label: 'IDLE',
    classes: 'bg-white/5 text-text-muted border-border',
    pulse: false,
  },
  active: {
    label: 'ACTIVE',
    classes: 'bg-[#00E087]/10 text-[#00E087] border-[#00E087]/30',
    pulse: false,
  },
  archived: {
    label: 'ARCHIVED',
    classes: 'bg-white/5 text-text-muted border-border',
    pulse: false,
  },
}

export default function StatusBadge({ status = 'pending' }) {
  const key = status.toLowerCase()
  const config = STATUS_CONFIG[key] || STATUS_CONFIG.pending

  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold px-2 py-0.5 rounded border ${config.classes}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.classes.includes('00C2FF') ? 'bg-[#00C2FF]' : config.classes.includes('00E087') ? 'bg-[#00E087]' : config.classes.includes('FF3B3B') ? 'bg-[#FF3B3B]' : 'bg-text-muted'} ${config.pulse ? 'animate-pulse' : ''}`} />
      {config.label}
    </span>
  )
}
