import React from 'react'
import { useLocation } from 'react-router-dom'
import { Bell, Activity } from 'lucide-react'

const PAGE_TITLES = {
  '/': 'Dashboard',
  '/engagements': 'Engagements',
  '/targets': 'Targets',
  '/recon': 'Recon',
  '/webvuln': 'Web Vulnerability Scanner',
  '/osint': 'OSINT',
  '/payload': 'Payload Lab',
  '/intel': 'Threat Intelligence',
  '/reporter': 'Reporter',
  '/auto': 'Auto Mode',
  '/settings': 'Settings',
}

export default function TopBar() {
  const location = useLocation()
  const title = PAGE_TITLES[location.pathname] || 'Crucible'

  return (
    <header className="flex items-center justify-between h-14 px-6 bg-surface-1 border-b border-border shrink-0">
      <div className="flex items-center gap-3">
        <h1 className="font-heading font-bold text-base text-text-primary tracking-wide">{title}</h1>
        {location.pathname === '/auto' && (
          <span className="font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded bg-warning/20 text-warning border border-warning/30">
            BETA
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        {/* System status indicator */}
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-surface-2 border border-border">
          <Activity size={11} className="text-success" />
          <span className="font-mono text-[10px] text-success">SYSTEMS NOMINAL</span>
        </div>

        <button className="relative flex items-center justify-center w-8 h-8 rounded hover:bg-surface-2 text-text-secondary hover:text-text-primary transition-colors">
          <Bell size={15} />
        </button>
      </div>
    </header>
  )
}
