import React from 'react'
import Card, { CardHeader, CardTitle } from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { useAuth } from '../context/AuthContext'
import { Settings as SettingsIcon, Key, User, Cpu } from 'lucide-react'

export default function Settings() {
  const { user } = useAuth()
  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <Card>
        <CardHeader><div className="flex items-center gap-2"><User size={14} className="text-accent" /><CardTitle>Profile</CardTitle></div></CardHeader>
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-1.5">Email</p>
            <p className="font-mono text-sm text-text-primary">{user?.email || '—'}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-1.5">User ID</p>
            <p className="font-mono text-xs text-text-muted">{user?.id || '—'}</p>
          </div>
        </div>
      </Card>

      <Card>
        <CardHeader><div className="flex items-center gap-2"><Key size={14} className="text-accent" /><CardTitle>API Keys</CardTitle></div></CardHeader>
        <div className="flex flex-col gap-4">
          <Input label="Anthropic API Key" type="password" placeholder="sk-ant-••••••••" disabled />
          <Input label="Shodan API Key" type="password" placeholder="••••••••" disabled />
          <Input label="VirusTotal API Key" type="password" placeholder="••••••••" disabled />
          <Button disabled size="sm">Save API Keys</Button>
          <p className="font-mono text-[10px] text-text-muted">API key management available in Segment 2.</p>
        </div>
      </Card>

      <Card>
        <CardHeader><div className="flex items-center gap-2"><Cpu size={14} className="text-accent" /><CardTitle>Backend Connection</CardTitle></div></CardHeader>
        <div className="flex flex-col gap-4">
          <Input label="API URL" placeholder={import.meta.env.VITE_API_URL || 'http://localhost:8000'} disabled mono />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-text-muted" />
            <span className="font-mono text-[11px] text-text-muted">Not connected</span>
          </div>
        </div>
      </Card>

      <Card>
        <CardHeader><div className="flex items-center gap-2"><SettingsIcon size={14} className="text-accent" /><CardTitle>Platform</CardTitle></div></CardHeader>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between py-2 border-b border-border/50">
            <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">Version</span>
            <span className="font-mono text-xs text-text-secondary">1.0.0 — Segment 1</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-border/50">
            <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">Build</span>
            <span className="font-mono text-xs text-text-secondary">Foundation</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">Platform</span>
            <span className="font-mono text-xs text-text-secondary">Strikepoint Crucible</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
