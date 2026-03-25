import React from 'react'
import Card, { CardHeader, CardTitle } from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { Radar, Construction } from 'lucide-react'

export default function Recon() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 px-4 py-3 bg-surface-2 border border-border rounded">
        <Construction size={14} className="text-text-muted shrink-0" />
        <p className="font-mono text-xs text-text-muted">
          Recon module logic is coming in Segment 2. The interface is ready — wire-up pending.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Radar size={14} className="text-accent" />
              <CardTitle>Recon Configuration</CardTitle>
            </div>
          </CardHeader>
          <div className="flex flex-col gap-4">
            <Input label="Target Domain / IP Range" placeholder="example.com or 10.0.0.0/24" mono disabled />
            <Input label="Engagement" placeholder="Select engagement" disabled />
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">Modules</span>
              {['DNS Enumeration', 'Subdomain Discovery', 'Port Scan', 'Service Fingerprint', 'ASN Lookup'].map((m) => (
                <label key={m} className="flex items-center gap-2 opacity-50 cursor-not-allowed">
                  <input type="checkbox" disabled className="accent-accent" />
                  <span className="font-body text-sm text-text-secondary">{m}</span>
                </label>
              ))}
            </div>
            <Button disabled className="w-full mt-1">Run Recon</Button>
          </div>
        </Card>

        <Card className="lg:col-span-2 flex flex-col min-h-[400px]">
          <CardHeader>
            <CardTitle>Recon Output</CardTitle>
          </CardHeader>
          <div className="flex-1 bg-surface-2 rounded border border-border p-4 font-mono text-xs text-text-muted flex items-center justify-center">
            Output will appear here once a recon scan is launched.
          </div>
        </Card>
      </div>
    </div>
  )
}
