# GymTrack Pro

Aplicación web responsive para registrar entrenamientos de gimnasio con HTML, CSS y JavaScript vanilla. Preparada para GitHub Pages y Supabase.

## Funciones
- Interfaz oscura responsive en español.
- Registro de cuenta e inicio de sesión con Supabase Auth.
- Biblioteca de ejercicios personalizados.
- Creación de rutinas.
- Registro de sesiones, series, repeticiones y peso.
- Resumen de sesiones, series y volumen.

## Configuración
1. Crea un proyecto en https://supabase.com/dashboard.
2. Ejecuta `supabase/schema.sql` en el SQL Editor.
3. Copia la URL del proyecto y la publishable key (o anon key heredada) en `js/config.js`.
4. En Authentication → URL Configuration, añade la URL de GitHub Pages como Site URL y Redirect URL.
5. En GitHub: Settings → Pages → Deploy from a branch → `main` → `/(root)`.

Nunca uses la `service_role` key en el navegador. La URL y la publishable/anon key son públicas por diseño; la seguridad depende de Auth y RLS.

La aplicación no necesita build ni Node.js. Para probarla localmente usa un servidor estático (por ejemplo, Live Server), no `file://`.
