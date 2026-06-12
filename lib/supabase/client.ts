import { createClient } from "@supabase/supabase-js";

import { supabaseConfig } from "@/lib/supabase/config";
import type { Database } from "@/types/database";

export function createBrowserSupabaseClient() {
  return createClient<Database>(supabaseConfig.url, supabaseConfig.anonKey);
}
