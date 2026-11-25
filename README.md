# DevSoluciones — Landing Page

Landing page comercial de **DevSoluciones** (`https://devsoluciones.com`) construida con **Astro** y **Tailwind CSS v4**, usando la paleta de colores (modo claro y oscuro) y tipografía (`Fraunces` + `Inter`) de [jesussilvap.github.io](https://jesussilvap.github.io/).

## Servicios incluidos

1. Software a la medida
2. Aplicaciones para Apple (iOS) y Android
3. Tiendas virtuales (E-commerce)
4. Sitios web corporativos
5. Landing pages de conversión
6. Marketing digital
7. Asesorías y capacitaciones en Inteligencia Artificial
8. Automatizaciones de procesos

## Personalización rápida

Todos los textos, servicios, preguntas frecuentes, correo, número de WhatsApp y enlaces de **Facebook, Instagram y WhatsApp** están centralizados en:

- `src/data/siteContent.ts`

Edita `whatsappNumber`, `whatsappDisplay`, `email`, `social.facebook`, `social.instagram`, `social.whatsapp` y opcionalmente `formEndpoint` (Formspree, Web3Forms o webhook de n8n/Make).

## Comandos locales

```bash
npm install
npm run dev      # Servidor de desarrollo local
npm run build    # Compilación de producción en ./dist
npm run preview  # Vista previa local del build de producción
```

## Despliegue en Hostinger (`devsoluciones.com`)

El proyecto incluye `public/.htaccess` (redirección HTTPS + canónico `devsoluciones.com`, caché de assets y página `404.html`) y despliegue automatizado mediante GitHub Actions.

### Opción A — Despliegue automático con GitHub Actions (recomendado)

1. En **Hostinger hPanel → Archivos → Cuentas FTP**, copia:
   - **IP / Servidor FTP**
   - **Nombre de usuario FTP** (apuntando al directorio `public_html` de `devsoluciones.com`)
   - **Contraseña FTP**
2. En **GitHub → Settings → Secrets and variables → Actions → Secrets**, crea estos 3 secretos:
   - `FTP_SERVER`
   - `FTP_USERNAME`
   - `FTP_PASSWORD`
3. *(Opcional)* Si tu usuario FTP apunta a la raíz de la cuenta en lugar de `public_html`, crea la variable en **Actions → Variables**:
   - `HOSTINGER_SERVER_DIR` = `/domains/devsoluciones.com/public_html/` (o `/public_html/`)
4. Cada `git push` a `main` (o ejecución manual desde la pestaña **Actions**) compilará el proyecto y actualizará `devsoluciones.com` automáticamente.

### Opción B — Subida manual en hPanel

1. Ejecuta `npm run build` en tu equipo.
2. Sube todo el contenido de la carpeta `dist/` (incluyendo `.htaccess`) dentro de `public_html` en el **Administrador de Archivos** de Hostinger.
