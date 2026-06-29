# El Bunker de la Tia Karlita

Landing page para restaurante peruano de comida nortena/piurana en Lima Norte / Carabayllo.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Luego abre `http://localhost:3000`.

## Scripts

```bash
npm run lint
npm run build
```

## Reservas

El formulario valida los datos obligatorios, guarda la reserva en Supabase cuando esta configurado y abre WhatsApp con el mensaje prellenado para el numero `51967718480`.

Si Supabase no esta configurado, la web conserva un respaldo local en `localStorage` y WhatsApp sigue funcionando.

## Sistema de reservas

1. Crea un proyecto en Supabase.
2. Ejecuta el SQL de `supabase/schema.sql` en el SQL Editor de Supabase.
3. En Vercel, agrega estas variables de entorno:

```bash
SUPABASE_URL=tu_url_de_supabase
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key
RESERVATIONS_ADMIN_KEY=una_clave_privada_para_el_panel
```

4. Vuelve a desplegar.
5. Entra a `/reservas`, escribe la clave de `RESERVATIONS_ADMIN_KEY` y carga las reservas.
