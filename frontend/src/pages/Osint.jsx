import React from 'react'
import Card, { CardHeader, CardTitle } from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { Search, Construction } from 'lucide-react'

export default function Osint() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 px-4 py-3 bg-surface-2 border border-border rounded">
        <Construction size={14} className="text-text-muted shrink-0" />
        <p className="font-mono text-xs text-text-muted">OSINT module coming in Segment 2.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader><div className="flex items-center gap-2"><Search size={14} className="text-accent" /><CardTitle>OSINT Query</CardTitle></div></CardHeader>
          <div className="flex flex-col gap-4">
            <Input label="Target (Domain / Email / Company / Person)" placeholder="example.com" disabled />
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">Sources</span>
              {['Shodan', 'VirusTotal', 'HaveIBeenPwned', 'Hunter.io', 'LinkedIn', 'WHOIS', 'Cert Transparency'].map((m) => (
                <label key={m} className="flex items-center gap-2 opacity-50 cursor-not-allowed">
                  <input type="checkbox" disabled className="accent-accent" />
                  <span className="font-body text-sm text-text-secondary">{m}</span>
                </label>
              ))}
            </div>
            <Button disabled className="w-full mt-1">Run OSINT</Button>
          </div>
        </Card>
        <Card className="lg:col-span-2 flex flex-col min-h-[400px]">
          <CardHeader><CardTitle>Intelligence Results</CardTitle></CardHeader>
          <div className="flex-1 bg-surface-2 rounded border border-border p-4 font-mono text-xs text-text-muted flex items-center justify-center">
            OSINT results will appear here once a query is executed.
          </div>
        </Card>
      </div>
    </div>
  )
}
