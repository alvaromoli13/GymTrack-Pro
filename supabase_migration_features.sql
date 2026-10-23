-- GymTrack Pro: campos para fotos y objetivos de rutina
alter table public.exercises add column if not exists image_url text;
alter table public.routine_exercises add column if not exists target_sets integer not null default 3;
alter table public.routine_exercises add column if not exists target_reps integer not null default 10;
alter table public.routine_exercises add column if not exists rest_seconds integer not null default 90;
