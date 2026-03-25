import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import {
  LayoutDashboard,
  Briefcase,
  Crosshair,
  Radar,
  Shield,
  Search,
  Terminal,
  Brain,
  FileText,
  Zap,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { label: 'Engagements', icon: Briefcase, path: '/engagements' },
  { label: 'Targets', icon: Crosshair, path: '/targets' },
  { label: 'Recon', icon: Radar, path: '/recon' },
  { label: 'Web Vuln', icon: Shield, path: '/webvuln' },
  { label: 'OSINT', icon: Search, path: '/osint' },
  { label: 'Payload Lab', icon: Terminal, path: '/payload' },
  { label: 'Threat Intel', icon: Brain, path: '/intel' },
  { label: 'Reporter', icon: FileText, path: '/reporter' },
  { label: 'Auto Mode', icon: Zap, path: '/auto', badge: 'BETA' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }

  return (
    <aside
      className={`flex flex-col bg-surface-1 border-r border-border transition-all duration-200 ${
        collapsed ? 'w-[60px]' : 'w-[220px]'
      } shrink-0`}
    >
      <div className={`flex items-center h-14 px-4 border-b border-border ${collapsed ? 'justify-center' : 'gap-2'}`}>
        <div className="w-7 h-7 shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 28 28" fill="none" className="w-full h-full">
            <polygon points="14,2 26,20 2,20" fill="none" stroke="#00C2FF" strokeWidth="2" />
            <polygon points="14,8 21,20 7,20" fill="#00C2FF" opacity="0.15" />
            <line x1="14" y1="8" x2="14" y2="16" stroke="#00C2FF" strokeWidth="1.5" />
            <circle cx="14" cy="17.5" r="1" fill="#00C2FF" />
          </svg>
        </div>
        {!collapsed && (
          <span className="font-heading font-bold text-sm text-text-primary tracking-wide">CRUCIBLE</span>
        )}
      </div>

      <nav className="flex-1 py-3 overflow-y-auto">
        {NAV_ITEMS.map(({ label, icon: Icon, path, badge }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 mx-1.5 rounded transition-all duration-100 group relative
              ${isActive
                ? 'bg-accent/10 text-accent border-r-2 border-accent -mr-0 pr-[calc(1rem-2px)]'
                : 'text-text-secondary hover:bg-surface-2 hover:text-text-primary'
              }`
            }
          >
            <Icon size={16} className="shrink-0" />
            {!collapsed && (
              <span className="font-body text-sm font-medium flex-1 truncate">{label}</span>
            )}
            {!collapsed && badge && (
              <span className="font-mono text-[9px] font-semibold px-1 py-0.5 rounded bg-warning/20 text-warning border border-warning/30 leading-none">
                {badge}
              </span>
            )}
            {collapsed && badge && (
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-warning" />
            )}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-border py-2">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 mx-1.5 rounded transition-all duration-100
            ${isActive ? 'bg-accent/10 text-accent' : 'text-text-secondary hover:bg-surface-2 hover:text-text-primary'}`
          }
        >
          <Settings size={16} className="shrink-0" />
          {!collapsed && <span className="font-body text-sm font-medium">Settings</span>}
        </NavLink>

        {!collapsed && (
          <div className="px-4 py-2 mx-1.5">
            <p className="font-mono text-[10px] text-text-muted truncate">{user?.email}</p>
          </div>
        )}

        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-4 py-2.5 mx-1.5 rounded w-[calc(100%-12px)] text-text-secondary hover:bg-danger/10 hover:text-danger transition-all duration-100"
        >
          <LogOut size={16} className="shrink-0" />
          {!collapsed && <span className="font-body text-sm font-medium">Sign Out</span>}
        </button>
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-center h-8 border-t border-border text-text-muted hover:text-accent hover:bg-surface-2 transition-all duration-100"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>
    </aside>
  )
}
