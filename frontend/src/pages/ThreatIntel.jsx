import React from 'react'
import Card, { CardHeader, CardTitle } from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import DataTable from '../components/ui/DataTable'
import { Brain, Construction } from 'lucide-react'

const COLUMNS = [
  { key: 'type',      label: 'Type',      render: (v) => <span className="font-mono text-xs text-text-secondary capitalize">{v}</span> },
  { key: 'reference', label: 'Reference', render: (v) => <span className="font-mono text-xs text-accent">{v}</span> },
  { key: 'summary',   label: 'Summary',   render: (v) => <span className="font-body text-sm text-text-primary">{v}</span> },
  { key: 'saved_at',  label: 'Saved',     render: (v) => <span className="font-mono text-xs text-text-muted">{v}</span> },
]

export default function ThreatIntel() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 px-4 py-3 bg-surface-2 border border-border rounded">
        <Construction size={14} className="text-text-muted shrink-0" />
        <p className="font-mono text-xs text-text-muted">Threat Intelligence module coming in Segment 2.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Brain size={14} className="text-accent" />
              <CardTitle>Intel Query</CardTitle>
            </div>
          </CardHeader>
          <div className="flex flex-col gap-4">
            <Input label="CVE / IOC / Domain / Hash" placeholder="CVE-2024-XXXXX" mono disabled />
            <Input label="Context" placeholder="Describe what you're investigating..." disabled />
            <Button disabled className="w-full mt-1">Query Intel</Button>
          </div>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Saved Intelligence</CardTitle>
            <span className="font-mono text-[10px] text-text-muted">0 SAVED</span>
          </CardHeader>
          <DataTable
            columns={COLUMNS}
            rows={[]}
            emptyMessage="No saved intel. Query the threat intelligence engine to populate this list."
          />
        </Card>
      </div>
    </div>
  )
}
