-- Engagements: top-level container for a pentesting engagement
create table if not exists engagements (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  name        text not null,
  scope       text,
  roe_notes   text,
  status      text not null default 'active' check (status in ('active', 'paused', 'complete', 'archived')),
  start_date  date,
  created_at  timestamptz not null default now()
);

alter table engagements enable row level security;

create policy "Users can manage their own engagements"
  on engagements for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index idx_engagements_user_id on engagements(user_id);
create index idx_engagements_status  on engagements(status);
