create extension if not exists "pgcrypto";

create table if not exists public.reservations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  reservation_date date not null,
  reservation_time time not null,
  people integer not null check (people > 0 and people <= 80),
  reservation_type text not null check (
    reservation_type in ('Mesa', 'Delivery', 'Buffet', 'Consulta general')
  ),
  comments text,
  status text not null default 'pending' check (
    status in ('pending', 'confirmed', 'cancelled')
  ),
  source text not null default 'website',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists reservations_set_updated_at on public.reservations;

create trigger reservations_set_updated_at
before update on public.reservations
for each row
execute function public.set_updated_at();

alter table public.reservations enable row level security;

drop policy if exists "No public read access" on public.reservations;

create policy "No public read access"
on public.reservations
for select
using (false);
