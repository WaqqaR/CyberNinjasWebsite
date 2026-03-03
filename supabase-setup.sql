-- Run this in the Supabase SQL editor:
-- https://supabase.com/dashboard/project/zzmavkiqnfqbaypbggoj/sql

create table if not exists dojo_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),

  -- Step 1: About You
  first_name text not null,
  last_name text not null,
  email text not null,
  linkedin text,
  job_title text not null,
  location text,

  -- Step 2: Background
  background_type text not null,
  company_name text,
  team_size text,
  corporate_objectives text,

  -- Step 3: Experience
  experience_level text not null,
  certifications text,
  dev_ops_experience text not null,

  -- Step 4: Motivation
  why_dojo text not null,
  success_definition text not null,
  how_heard text,
  cohort_availability text not null
);

-- Allow the anon key to insert (no auth needed for public form submissions)
alter table dojo_applications enable row level security;

create policy "Allow public inserts" on dojo_applications
  for insert with check (true);

-- Optional: only allow admins to read
-- create policy "Admins can read" on dojo_applications
--   for select using (auth.role() = 'authenticated');

-- ── Waitlist ──────────────────────────────────────────────────────────────────

create table if not exists dojo_waitlist (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  first_name text not null,
  email text not null unique
);

alter table dojo_waitlist enable row level security;

create policy "Allow public inserts" on dojo_waitlist
  for insert with check (true);
