// La URL y la publishable/anon key son públicas en una app de navegador.
// NUNCA pegues aquí una service_role key o una clave secreta.
export const SUPABASE_URL = "https://TU-PROYECTO.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "TU_CLAVE_PUBLICA";
export const isSupabaseConfigured = () =>
  SUPABASE_URL.startsWith("https://") &&
  !SUPABASE_URL.includes("TU-PROYECTO") &&
  SUPABASE_PUBLISHABLE_KEY !== "TU_CLAVE_PUBLICA" &&
  SUPABASE_PUBLISHABLE_KEY.length > 20;