import { createClient } from '@supabase/supabase-js'
const URL = 'https://jjscuzhupalgzcetojkc.supabase.co';
const API_KEY = '';

export const supabase = createClient(URL, API_KEY);
