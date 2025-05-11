import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qijhdgjvkhctrxyfmyif.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpamhkZ2p2a2hjdHJ4eWZteWlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5MDAwNDIsImV4cCI6MjA2MTQ3NjA0Mn0.4PdTrpZhlv5tSUmjFwZMDoQBohvwfjlIp4cgfXadT8E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
