import React from 'react'
import Card, { CardHeader, CardTitle } from '../components/ui/Card'
import Button from '../components/ui/Button'
import DataTable from '../components/ui/DataTable'
import StatusBadge from '../components/ui/StatusBadge'
import { Plus } from 'lucide-react'

const COLUMNS = [
  { key: 'name',       label: 'Engagement Name', render: (v) => <span className="font-body text-sm text-text-primary font-medium">{v}</span> },
  { key: 'scope',      label: 'Scope',            render: (v) => <span className="font-mono text-xs text-text-secondary">{v}</span> },
  { key: 'status',     label: 'Status',           render: (v) => <StatusBadge status={v} /> },
  { key: 'start_date', label: 'Start Date',       render: (v) => <span className="font-mono text-xs text-text-muted">{v}</span> },
]

export default function Engagements() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="font-body text-sm text-text-secondary">Manage your authorized testing engagements and scopes.</p>
        <Button size="sm" disabled>
          <Plus size={13} />
          New Engagement
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Engagements</CardTitle>
          <span className="font-mono text-[10px] text-text-muted">0 TOTAL</span>
        </CardHeader>
        <DataTable
          columns={COLUMNS}
          rows={[]}
          emptyMessage="No engagements yet. Create your first engagement to get started."
        />
      </Card>
    </div>
  )
}
