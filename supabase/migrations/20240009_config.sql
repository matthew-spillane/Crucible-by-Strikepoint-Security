-- Config: per-user key-value configuration store (API keys, preferences)
create table if not exists config (
  key        text not null,
  value      text,
  user_id    uuid not null references auth.users(id) on delete cascade,
  primary key (key, user_id)
);

alter table config enable row level security;

create policy "Users can manage their own config"
  on config for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index idx_config_user_id on config(user_id);
