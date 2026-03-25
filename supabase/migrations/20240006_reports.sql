-- Reports: generated pentest reports
create table if not exists reports (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid not null references auth.users(id) on delete cascade,
  engagement_id   uuid references engagements(id) on delete set null,
  finding_ids     uuid[] default array[]::uuid[],
  content_md      text,
  content_pdf_url text,
  created_at      timestamptz not null default now()
);

alter table reports enable row level security;

create policy "Users can manage their own reports"
  on reports for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index idx_reports_user_id       on reports(user_id);
create index idx_reports_engagement_id on reports(engagement_id);
