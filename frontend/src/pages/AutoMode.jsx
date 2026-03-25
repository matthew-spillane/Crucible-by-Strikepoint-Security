import React, { useState } from 'react'
import Card, { CardHeader, CardTitle } from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input, { Textarea } from '../components/ui/Input'
import { Zap, Radio, Clock } from 'lucide-react'

const STATUS_CONFIG = {
  idle:     { label: 'IDLE',     color: 'text-text-muted', dot: 'bg-text-muted', pulse: false },
  running:  { label: 'RUNNING',  color: 'text-accent',     dot: 'bg-accent',     pulse: true  },
  complete: { label: 'COMPLETE', color: 'text-success',    dot: 'bg-success',    pulse: false },
}

export default function AutoMode() {
  const [target, setTarget] = useState('')
  const [scopeNotes, setScopeNotes] = useState('')
  const [runStatus] = useState('idle')
  const config = STATUS_CONFIG[runStatus]

  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex items-center gap-3 px-4 py-3 bg-warning/5 border border-warning/25 rounded">
        <Zap size={14} className="text-warning shrink-0" />
        <p className="font-mono text-xs text-warning">
          Auto Mode is coming in Segment 2. Configure your target and scope below — launch will be enabled once the agentic engine is wired up.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader><CardTitle>Target Configuration</CardTitle></CardHeader>
            <div className="flex flex-col gap-4">
              <Input label="Target" placeholder="https://target.com or 10.0.0.0/24" value={target} onChange={(e) => setTarget(e.target.value)} mono />
              <Textarea label="Scope Notes / Rules of Engagement" placeholder="Describe in-scope assets, out-of-scope paths, rate limits, authorized windows..." value={scopeNotes} onChange={(e) => setScopeNotes(e.target.value)} rows={6} />
              <Button disabled className="w-full" title="Coming in Segment 2">
                <Zap size={14} />Launch Auto Scan
              </Button>
              <p className="font-mono text-[10px] text-text-muted text-center">Available in Segment 2</p>
            </div>
          </Card>

          <Card>
            <CardHeader><CardTitle>Run Status</CardTitle></CardHeader>
            <div className="flex items-center gap-3">
              <span className={`w-3 h-3 rounded-full ${config.dot} ${config.pulse ? 'animate-pulse' : ''}`} />
              <span className={`font-mono text-sm font-semibold ${config.color}`}>{config.label}</span>
            </div>
            <div className="flex items-center gap-2 mt-3 text-text-muted">
              <Clock size={12} />
              <span className="font-mono text-[10px]">No runs yet</span>
            </div>
          </Card>
        </div>

        <Card className="lg:col-span-2 flex flex-col min-h-[500px]">
          <CardHeader>
            <div className="flex items-center gap-2"><Radio size={14} className="text-accent" /><CardTitle>Agentic Reasoning Stream</CardTitle></div>
            <span className="font-mono text-[10px] text-text-muted uppercase">Real-time output</span>
          </CardHeader>
          <div className="flex-1 bg-surface-2 rounded border border-border p-4 overflow-y-auto font-mono text-xs">
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                <Zap size={16} className="text-text-muted" />
              </div>
              <p className="text-text-muted">Reasoning stream will appear here once Auto Mode is active.</p>
              <p className="text-text-muted/60 text-[10px]">Claude's step-by-step analysis, tool calls, and findings will stream in real time.</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
            <span className="font-mono text-[10px] text-text-muted">claude-opus-4-6 · Auto Mode Engine</span>
            <span className="font-mono text-[10px] text-text-muted">0 steps · 0 findings</span>
          </div>
        </Card>
      </div>
    </div>
  )
}
