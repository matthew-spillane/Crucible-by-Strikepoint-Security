import React from 'react'
import Card, { CardHeader, CardTitle } from '../components/ui/Card'
import SeverityChip from '../components/ui/SeverityChip'
import StatusBadge from '../components/ui/StatusBadge'
import DataTable from '../components/ui/DataTable'
import { format } from 'date-fns'
import { AlertTriangle, Target, Briefcase, Activity } from 'lucide-react'

// ── Mock data ──────────────────────────────────────────────────────────────────

const SEVERITY_COUNTS = [
  { severity: 'critical', count: 4,  delta: '+1', color: '#FF3B3B' },
  { severity: 'high',     count: 11, delta: '+3', color: '#F5A623' },
  { severity: 'medium',   count: 27, delta: '+5', color: '#FFD166' },
  { severity: 'low',      count: 38, delta: '+2', color: '#00C2FF' },
]

const RECENT_SCANS = [
  { id: '1', target: 'api.example.com',    module: 'Web Vuln',  status: 'complete', timestamp: new Date(Date.now() - 1000 * 60 * 12) },
  { id: '2', target: '10.0.0.0/24',        module: 'Recon',     status: 'running',  timestamp: new Date(Date.now() - 1000 * 60 * 3)  },
  { id: '3', target: 'corp.example.com',   module: 'OSINT',     status: 'complete', timestamp: new Date(Date.now() - 1000 * 60 * 45) },
  { id: '4', target: 'app.example.com',    module: 'Web Vuln',  status: 'failed',   timestamp: new Date(Date.now() - 1000 * 60 * 90) },
  { id: '5', target: 'mail.example.com',   module: 'Recon',     status: 'complete', timestamp: new Date(Date.now() - 1000 * 60 * 120) },
]

const ACTIVITY_FEED = [
  { ts: new Date(Date.now() - 1000 * 30),  type: 'scan',    msg: 'Recon scan completed for 10.0.0.0/24 — 12 hosts discovered' },
  { ts: new Date(Date.now() - 1000 * 60 * 2),  type: 'finding', msg: 'HIGH — SQLi identified on /api/v2/search endpoint' },
  { ts: new Date(Date.now() - 1000 * 60 * 5),  type: 'finding', msg: 'CRITICAL — RCE via deserialization on port 8443' },
  { ts: new Date(Date.now() - 1000 * 60 * 12), type: 'scan',    msg: 'Web Vuln scan completed for api.example.com' },
  { ts: new Date(Date.now() - 1000 * 60 * 18), type: 'info',    msg: 'Engagement "Q1 External Assessment" created' },
]

const SCAN_COLUMNS = [
  { key: 'target', label: 'Target', render: (v) => <span className="font-mono text-xs text-text-primary">{v}</span> },
  { key: 'module', label: 'Module', render: (v) => <span className="font-body text-sm text-text-secondary">{v}</span> },
  { key: 'status', label: 'Status', render: (v) => <StatusBadge status={v} /> },
  {
    key: 'timestamp',
    label: 'Time',
    render: (v) => <span className="font-mono text-xs text-text-muted">{format(v, 'HH:mm:ss')}</span>,
  },
]

// ── Activity item type styling ─────────────────────────────────────────────────
const FEED_TYPE = {
  finding: 'text-warning',
  scan:    'text-accent',
  info:    'text-text-muted',
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      {/* Severity stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {SEVERITY_COUNTS.map(({ severity, count, delta, color }) => (
          <Card key={severity} className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <SeverityChip severity={severity} showDot={false} />
              <span className="font-mono text-[10px] text-text-muted">{delta} today</span>
            </div>
            <div className="flex items-end gap-2">
              <span className="font-heading font-bold text-4xl" style={{ color }}>{count}</span>
              <span className="font-mono text-xs text-text-muted mb-1">findings</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Middle row: stats + activity feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Stat cards column */}
        <div className="flex flex-col gap-4">
          <Card className="flex items-center gap-4">
            <div className="w-10 h-10 rounded flex items-center justify-center bg-accent/10 shrink-0">
              <Briefcase size={18} className="text-accent" />
            </div>
            <div>
              <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Active Engagements</p>
              <p className="font-heading font-bold text-2xl text-text-primary mt-0.5">3</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4">
            <div className="w-10 h-10 rounded flex items-center justify-center bg-accent/10 shrink-0">
              <Target size={18} className="text-accent" />
            </div>
            <div>
              <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Total Targets</p>
              <p className="font-heading font-bold text-2xl text-text-primary mt-0.5">14</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4">
            <div className="w-10 h-10 rounded flex items-center justify-center bg-warning/10 shrink-0">
              <AlertTriangle size={18} className="text-warning" />
            </div>
            <div>
              <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Open Findings</p>
              <p className="font-heading font-bold text-2xl text-text-primary mt-0.5">80</p>
            </div>
          </Card>
        </div>

        {/* Live activity feed */}
        <Card className="lg:col-span-2 flex flex-col min-h-[240px]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Activity size={14} className="text-accent" />
              <CardTitle>Live Activity Feed</CardTitle>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              <span className="font-mono text-[10px] text-success uppercase">Live</span>
            </div>
          </CardHeader>

          <div className="flex-1 flex flex-col gap-0 overflow-y-auto">
            {ACTIVITY_FEED.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 px-2 py-2.5 border-b border-border/50 last:border-0 hover:bg-surface-2/40 transition-colors"
              >
                <span className="font-mono text-[10px] text-text-muted shrink-0 mt-0.5 w-16">
                  {format(item.ts, 'HH:mm:ss')}
                </span>
                <span className={`font-mono text-xs leading-relaxed ${FEED_TYPE[item.type] || 'text-text-secondary'}`}>
                  {item.msg}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent scans table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Scans</CardTitle>
          <span className="font-mono text-[10px] text-text-muted">LAST 24 HOURS</span>
        </CardHeader>
        <DataTable columns={SCAN_COLUMNS} rows={RECENT_SCANS} />
      </Card>
    </div>
  )
}
