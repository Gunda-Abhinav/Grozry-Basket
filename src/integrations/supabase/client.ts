// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fnynylrejmcpwkunmzqj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZueW55bHJlam1jcHdrdW5tenFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwNjQ0MzEsImV4cCI6MjA2NjY0MDQzMX0.kGRK-8vA3zeEOzHy9gRcmeFrO6AcxFkDr0WAT4BpkB8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);