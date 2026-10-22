// La URL y la publishable key son públicas en una app de navegador.
// Nunca pongas una service_role key ni una clave secreta en este archivo.
export const SUPABASE_URL = "https://yzslnshnaxumcnlszdqy.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_CtokviUCRghk7SqwLBO4Vg_0huiAnp-";
export const isSupabaseConfigured = () =>
  SUPABASE_URL.startsWith("https://") &&
  !SUPABASE_URL.includes("TU-PROYECTO") &&
  SUPABASE_PUBLISHABLE_KEY !== "TU_CLAVE_PUBLICA" &&
  SUPABASE_PUBLISHABLE_KEY.length > 20;
