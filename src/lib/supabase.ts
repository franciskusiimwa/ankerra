import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface PartnerSubmission {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  partnership_type?: string;
}

export interface NewsletterSubscription {
  id?: string;
  created_at?: string;
  email: string;
}

export interface BuildInquiry {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  expertise?: string;
  message: string;
}

export interface ContactSubmission {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
}
