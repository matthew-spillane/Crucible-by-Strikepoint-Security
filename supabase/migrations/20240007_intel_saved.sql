-- Intel saved: bookmarked threat intelligence records
create table if not exists intel_saved (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  target_id    uuid references targets(id) on delete set null,
  type         text not null check (type in ('cve', 'ioc', 'domain', 'hash', 'actor', 'general')),
  reference_id text,
  data         jsonb default '{}'::jsonb,
  created_at   timestamptz not null default now()
);

alter table intel_saved enable row level security;

create policy "Users can manage their own saved intel"
  on intel_saved for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index idx_intel_saved_user_id   on intel_saved(user_id);
create index idx_intel_saved_target_id on intel_saved(target_id);
create index idx_intel_saved_type      on intel_saved(type);
