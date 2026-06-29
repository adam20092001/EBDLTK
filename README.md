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

## Cambiar fotos y logo

Las imagenes principales se cambian desde `data/site.ts`.

Puedes usar URLs externas o subir archivos a `public/images` y referenciarlos asi:

```ts
src: "/images/logo.png"
src: "/images/hero.jpg"
src: "/images/seco-cabrito.jpg"
```

El logo esta configurado en `siteAssets.logo`. Si `logo.src` esta vacio, la web muestra el circulo con las iniciales `TK`. Para usar un logo real, sube el archivo a `public/images/logo.png` y cambia `logo.src` a `"/images/logo.png"`.
