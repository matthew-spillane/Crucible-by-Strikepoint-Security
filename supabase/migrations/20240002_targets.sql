-- Targets: individual hosts, domains, IP ranges, or applications
create table if not exists targets (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  engagement_id uuid references engagements(id) on delete set null,
  name          text not null,
  type          text not null default 'domain' check (type in ('domain', 'ip', 'cidr', 'url', 'application', 'other')),
  notes         text,
  created_at    timestamptz not null default now()
);

alter table targets enable row level security;

create policy "Users can manage their own targets"
  on targets for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index idx_targets_user_id       on targets(user_id);
create index idx_targets_engagement_id on targets(engagement_id);
