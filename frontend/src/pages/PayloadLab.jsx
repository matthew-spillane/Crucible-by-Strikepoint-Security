import React, { useState } from 'react'
import Card, { CardHeader, CardTitle } from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { Terminal, Construction } from 'lucide-react'

const PAYLOAD_TYPES = ['Reverse Shell', 'Web Shell', 'SQL Injection', 'XSS', 'SSRF', 'XXE', 'Deserialization', 'Command Injection']
const LANGUAGES = ['Bash', 'Python', 'PowerShell', 'PHP', 'Java', 'Ruby', 'Node.js']

export default function PayloadLab() {
  const [type, setType] = useState('')
  const [lang, setLang] = useState('')

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 px-4 py-3 bg-surface-2 border border-border rounded">
        <Construction size={14} className="text-text-muted shrink-0" />
        <p className="font-mono text-xs text-text-muted">Payload Lab generation engine coming in Segment 2.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader><div className="flex items-center gap-2"><Terminal size={14} className="text-accent" /><CardTitle>Generator Config</CardTitle></div></CardHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">Payload Type</span>
              <select className="bg-surface-2 border border-border rounded px-3 py-2 text-sm font-body text-text-primary focus:outline-none focus:border-accent opacity-50 cursor-not-allowed" disabled value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">Select type...</option>
                {PAYLOAD_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">Language</span>
              <select className="bg-surface-2 border border-border rounded px-3 py-2 text-sm font-body text-text-primary focus:outline-none focus:border-accent opacity-50 cursor-not-allowed" disabled value={lang} onChange={(e) => setLang(e.target.value)}>
                <option value="">Select language...</option>
                {LANGUAGES.map((l) => <option key={l}>{l}</option>)}
              </select>
            </div>
            <Input label="LHOST" placeholder="10.0.0.1" mono disabled />
            <Input label="LPORT" placeholder="4444" mono disabled />
            <Button disabled className="w-full mt-1">Generate Payload</Button>
          </div>
        </Card>
        <Card className="lg:col-span-2 flex flex-col min-h-[400px]">
          <CardHeader><CardTitle>Generated Output</CardTitle></CardHeader>
          <div className="flex-1 bg-surface-2 rounded border border-border p-4 font-mono text-xs text-text-muted flex items-center justify-center">
            Generated payload will appear here.
          </div>
        </Card>
      </div>
    </div>
  )
}
