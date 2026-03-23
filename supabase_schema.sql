-- Run this script in the Supabase SQL Editor to initialize your database tables

-- 1. Create Users Table
CREATE TABLE IF NOT EXISTS "Users" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ DEFAULT now()
);

-- 2. Create Prescriptions Table
CREATE TABLE IF NOT EXISTS "Prescriptions" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "userId" UUID NOT NULL REFERENCES "Users"(id) ON DELETE CASCADE,
    summary TEXT,
    diagnosis TEXT,
    medications JSONB DEFAULT '[]'::jsonb,
    "side_effects" JSONB DEFAULT '[]'::jsonb,
    "follow_up" JSONB DEFAULT '[]'::jsonb,
    "rawText" TEXT,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ DEFAULT now()
);

-- Note: Ensure Row Level Security (RLS) is either configured or temporarily disabled for testing.
-- For local Node.js testing with a Service Role Key, RLS policies will be bypassed automatically.
-- If using an Anon Key, you must establish appropriate RLS policies for read/write access.
