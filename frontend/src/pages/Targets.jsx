import React from 'react'
import Card, { CardHeader, CardTitle } from '../components/ui/Card'
import Button from '../components/ui/Button'
import DataTable from '../components/ui/DataTable'
import { Plus } from 'lucide-react'

const COLUMNS = [
  { key: 'name',       label: 'Target',      render: (v) => <span className="font-mono text-xs text-text-primary">{v}</span> },
  { key: 'type',       label: 'Type',        render: (v) => <span className="font-body text-sm text-text-secondary capitalize">{v}</span> },
  { key: 'engagement', label: 'Engagement',  render: (v) => <span className="font-body text-sm text-text-muted">{v}</span> },
  { key: 'created_at', label: 'Added',       render: (v) => <span className="font-mono text-xs text-text-muted">{v}</span> },
]

export default function Targets() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="font-body text-sm text-text-secondary">Define and manage targets across all engagements.</p>
        <Button size="sm" disabled>
          <Plus size={13} />
          Add Target
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Targets</CardTitle>
          <span className="font-mono text-[10px] text-text-muted">0 TOTAL</span>
        </CardHeader>
        <DataTable
          columns={COLUMNS}
          rows={[]}
          emptyMessage="No targets defined. Add a target to begin scanning."
        />
      </Card>
    </div>
  )
}
