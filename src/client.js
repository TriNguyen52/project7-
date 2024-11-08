import { createClient } from '@supabase/supabase-js'
const URL = 'https://jjscuzhupalgzcetojkc.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqc2N1emh1cGFsZ3pjZXRvamtjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMDY0MjY5OSwiZXhwIjoyMDQ2MjE4Njk5fQ.RiY5dLYxD7dLQ8gYMFrOJqPZmyxnxSzX_BWh7J4pczo';

export const supabase = createClient(URL, API_KEY);
