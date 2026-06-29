import { createClient } from "@supabase/supabase-js";
import type { ReservationRecord } from "@/lib/reservations";

type Database = {
  public: {
    Tables: {
      reservations: {
        Row: ReservationRecord;
        Insert: {
          id?: string;
          name: string;
          phone: string;
          reservation_date: string;
          reservation_time: string;
          people: number;
          reservation_type: string;
          comments?: string | null;
          status?: ReservationRecord["status"];
          source?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Omit<ReservationRecord, "id" | "created_at" | "updated_at">>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export function hasSupabaseConfig() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export function getSupabaseAdmin() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase is not configured.");
  }

  return createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}

export function isValidAdminKey(key: string | null) {
  const expected = process.env.RESERVATIONS_ADMIN_KEY;
  return Boolean(expected && key && key === expected);
}
