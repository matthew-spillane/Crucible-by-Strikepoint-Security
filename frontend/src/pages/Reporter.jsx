import React from 'react'
import Card, { CardHeader, CardTitle } from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import DataTable from '../components/ui/DataTable'
import { FileText, Construction, Download } from 'lucide-react'

const COLUMNS = [
  { key: 'engagement', label: 'Engagement', render: (v) => <span className="font-body text-sm text-text-primary">{v}</span> },
  { key: 'findings',   label: 'Findings',   render: (v) => <span className="font-mono text-xs text-text-secondary">{v}</span> },
  { key: 'created_at', label: 'Generated',  render: (v) => <span className="font-mono text-xs text-text-muted">{v}</span> },
  { key: 'actions', label: '', render: () => (
    <button disabled className="flex items-center gap-1 font-mono text-[10px] text-text-muted opacity-40 cursor-not-allowed">
      <Download size={11} /> Export PDF
    </button>
  )},
]

export default function Reporter() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 px-4 py-3 bg-surface-2 border border-border rounded">
        <Construction size={14} className="text-text-muted shrink-0" />
        <p className="font-mono text-xs text-text-muted">Report generation engine coming in Segment 2.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader><div className="flex items-center gap-2"><FileText size={14} className="text-accent" /><CardTitle>Generate Report</CardTitle></div></CardHeader>
          <div className="flex flex-col gap-4">
            <Input label="Engagement" placeholder="Select engagement" disabled />
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">Include Sections</span>
              {['Executive Summary', 'Methodology', 'Findings', 'Evidence', 'Remediation', 'Appendix'].map((s) => (
                <label key={s} className="flex items-center gap-2 opacity-50 cursor-not-allowed">
                  <input type="checkbox" disabled defaultChecked className="accent-accent" />
                  <span className="font-body text-sm text-text-secondary">{s}</span>
                </label>
              ))}
            </div>
            <Button disabled className="w-full mt-1">Generate Report</Button>
          </div>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Generated Reports</CardTitle>
            <span className="font-mono text-[10px] text-text-muted">0 REPORTS</span>
          </CardHeader>
          <DataTable columns={COLUMNS} rows={[]} emptyMessage="No reports generated yet." />
        </Card>
      </div>
    </div>
  )
}
