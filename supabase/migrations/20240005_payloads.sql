-- Payloads: generated payload records
create table if not exists payloads (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  type       text not null,
  language   text not null,
  options    jsonb default '{}'::jsonb,
  output     text,
  created_at timestamptz not null default now()
);

alter table payloads enable row level security;

create policy "Users can manage their own payloads"
  on payloads for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index idx_payloads_user_id    on payloads(user_id);
create index idx_payloads_created_at on payloads(created_at desc);
