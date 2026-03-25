-- Findings: individual vulnerability or intelligence finding
create table if not exists findings (
  id            uuid primary key default gen_random_uuid(),
  scan_id       uuid references scans(id) on delete cascade,
  target_id     uuid references targets(id) on delete set null,
  engagement_id uuid references engagements(id) on delete set null,
  title         text not null,
  severity      text not null default 'info' check (severity in ('critical', 'high', 'medium', 'low', 'info')),
  description   text,
  evidence      text,
  remediation   text,
  cve_id        text,
  created_at    timestamptz not null default now()
);

alter table findings enable row level security;

-- findings inherit access via scan ownership — join check via scan_id
create policy "Users can access findings from their scans"
  on findings for all
  using (
    scan_id in (
      select id from scans where user_id = auth.uid()
    )
  );

create index idx_findings_scan_id       on findings(scan_id);
create index idx_findings_target_id     on findings(target_id);
create index idx_findings_engagement_id on findings(engagement_id);
create index idx_findings_severity      on findings(severity);
