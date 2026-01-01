-- Create partners table
CREATE TABLE IF NOT EXISTS partners (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  partnership_type TEXT,
  message TEXT NOT NULL
);

-- Create newsletter table
CREATE TABLE IF NOT EXISTS newsletter (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  email TEXT NOT NULL UNIQUE
);

-- Create build_inquiries table
CREATE TABLE IF NOT EXISTS build_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  expertise TEXT,
  message TEXT NOT NULL
);

-- Create contact table
CREATE TABLE IF NOT EXISTS contact (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL
);

-- Enable Row Level Security
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter ENABLE ROW LEVEL SECURITY;
ALTER TABLE build_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact ENABLE ROW LEVEL SECURITY;

-- Create policies to allow inserts from anyone (for form submissions)
CREATE POLICY "Allow public inserts" ON partners FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public inserts" ON newsletter FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public inserts" ON build_inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public inserts" ON contact FOR INSERT WITH CHECK (true);

-- Create policies to allow reads from anyone (for admin panel)
-- Note: In production, you'd want to restrict this to authenticated users only
CREATE POLICY "Allow public reads" ON partners FOR SELECT USING (true);
CREATE POLICY "Allow public reads" ON newsletter FOR SELECT USING (true);
CREATE POLICY "Allow public reads" ON build_inquiries FOR SELECT USING (true);
CREATE POLICY "Allow public reads" ON contact FOR SELECT USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS partners_created_at_idx ON partners(created_at DESC);
CREATE INDEX IF NOT EXISTS newsletter_email_idx ON newsletter(email);
CREATE INDEX IF NOT EXISTS build_inquiries_created_at_idx ON build_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS contact_created_at_idx ON contact(created_at DESC);
