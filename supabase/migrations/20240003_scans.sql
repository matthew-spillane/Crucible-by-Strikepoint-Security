-- Scans: individual module run against a target
create table if not exists scans (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid not null references auth.users(id) on delete cascade,
  target_id        uuid references targets(id) on delete set null,
  engagement_id    uuid references engagements(id) on delete set null,
  module           text not null check (module in ('recon', 'webvuln', 'osint', 'payload', 'intel', 'auto')),
  status           text not null default 'pending' check (status in ('pending', 'running', 'complete', 'failed')),
  created_at       timestamptz not null default now(),
  completed_at     timestamptz,
  raw_output       jsonb,
  parsed_findings  jsonb,
  severity_counts  jsonb default '{"critical":0,"high":0,"medium":0,"low":0}'::jsonb
);

alter table scans enable row level security;

create policy "Users can manage their own scans"
  on scans for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index idx_scans_user_id       on scans(user_id);
create index idx_scans_target_id     on scans(target_id);
create index idx_scans_engagement_id on scans(engagement_id);
create index idx_scans_status        on scans(status);
create index idx_scans_created_at    on scans(created_at desc);
