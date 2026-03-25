-- Auto runs: agentic Claude Auto Mode execution records
create table if not exists auto_runs (
  id                 uuid primary key default gen_random_uuid(),
  user_id            uuid not null references auth.users(id) on delete cascade,
  target_id          uuid references targets(id) on delete set null,
  engagement_id      uuid references engagements(id) on delete set null,
  status             text not null default 'idle' check (status in ('idle', 'running', 'complete', 'failed')),
  reasoning_log      jsonb default '[]'::jsonb,
  findings_generated integer default 0,
  created_at         timestamptz not null default now(),
  completed_at       timestamptz
);

alter table auto_runs enable row level security;

create policy "Users can manage their own auto runs"
  on auto_runs for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index idx_auto_runs_user_id       on auto_runs(user_id);
create index idx_auto_runs_engagement_id on auto_runs(engagement_id);
create index idx_auto_runs_status        on auto_runs(status);
