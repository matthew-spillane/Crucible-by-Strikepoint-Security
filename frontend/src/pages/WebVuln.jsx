import React from 'react'
import Card, { CardHeader, CardTitle } from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import DataTable from '../components/ui/DataTable'
import SeverityChip from '../components/ui/SeverityChip'
import { Shield, Construction } from 'lucide-react'

const COLUMNS = [
  { key: 'title',    label: 'Finding',  render: (v) => <span className="font-body text-sm text-text-primary">{v}</span> },
  { key: 'severity', label: 'Severity', render: (v) => <SeverityChip severity={v} /> },
  { key: 'endpoint', label: 'Endpoint', render: (v) => <span className="font-mono text-xs text-text-secondary">{v}</span> },
  { key: 'cve',      label: 'CVE',      render: (v) => <span className="font-mono text-xs text-accent">{v || '—'}</span> },
]

export default function WebVuln() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 px-4 py-3 bg-surface-2 border border-border rounded">
        <Construction size={14} className="text-text-muted shrink-0" />
        <p className="font-mono text-xs text-text-muted">Web Vulnerability Scanner module coming in Segment 2.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader><div className="flex items-center gap-2"><Shield size={14} className="text-accent" /><CardTitle>Scan Configuration</CardTitle></div></CardHeader>
          <div className="flex flex-col gap-4">
            <Input label="Target URL" placeholder="https://target.example.com" mono disabled />
            <Input label="Engagement" placeholder="Select engagement" disabled />
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">Scan Profile</span>
              {['SQLi', 'XSS', 'SSRF', 'IDOR', 'Auth Bypass', 'LFI/RFI', 'CSRF'].map((m) => (
                <label key={m} className="flex items-center gap-2 opacity-50 cursor-not-allowed">
                  <input type="checkbox" disabled className="accent-accent" />
                  <span className="font-body text-sm text-text-secondary">{m}</span>
                </label>
              ))}
            </div>
            <Button disabled className="w-full mt-1">Launch Scan</Button>
          </div>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Findings</CardTitle><span className="font-mono text-[10px] text-text-muted">0 FINDINGS</span></CardHeader>
          <DataTable columns={COLUMNS} rows={[]} emptyMessage="No findings yet. Run a scan to populate this table." />
        </Card>
      </div>
    </div>
  )
}
