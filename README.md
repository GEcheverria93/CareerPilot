# CareerPilot

Proyecto piloto para carga y almacenamiento de CVs con backend Express + Prisma y frontend React.

La implementación actual sigue las decisiones técnicas principales del proyecto:

- Frontend: React + Vite + TypeScript
- Backend: Node.js + Express + TypeScript
- Base de datos de prototipo: SQLite con Prisma
- Validación futura: Zod
- Gestión de paquetes: npm en este entorno local (el proyecto usa `pnpm` como decisión técnica establecida)

## Historial de cambios

### 2026-08-24 — Instrucciones dev y cambios recientes

He mantenido el contenido anterior intacto. Debajo tienes instrucciones adicionales, comandos reproducibles para Windows y un breve changelog con las correcciones aplicadas el 2026-08-24.

**Resumen de cambios**
- Se centralizaron las heurísticas en `apps/api/src/lib/heuristics.ts`.
- Los endpoints `POST /profile/from-cv/:cvId` y `GET /profile/:cvId` ahora devuelven un objeto `extracted` con: `fullName`, `email`, `phone`, `summary`, `skills`, `positions`, `experienceYears`, `education`, `languages`, `confidence`.
- Se añadieron tests de Vitest para heurísticas: `apps/api/src/__tests__/heuristics.spec.ts`.
- UI: `apps/www/src/components/UploadCV.tsx` ahora consume `extracted` y muestra `fullName`, `email`, `phone`, `languages` y `confidence`.
- Se eliminaron archivos `.js` duplicados en `apps/www/src` que causaban errores de JSX (`App.js`, `main.js`, `components/UploadCV.js`).

**Prerrequisitos**
- Node >= 18
- npm (o `pnpm` si sigues la decisión técnica)

**Instalación (rápida)**

Backend
```bash
cd apps/api
npm install
```

Frontend
```bash
cd apps/www
npm install
```

**Inicializar DB (backend)**
```bash
cd apps/api
npx prisma generate
npx prisma db push
# dev DB: apps/api/prisma/dev.db
```

**Ejecutar en desarrollo (Windows)**

PowerShell (backend, con watcher):
```powershell
cd apps/api
$env:PORT=4001; npx ts-node-dev --respawn --transpile-only src/index.ts
```

CMD (backend, compilado):
```cmd
cd apps/api
npx tsc -p tsconfig.json
set PORT=4001 && node dist/index.js
```

Frontend (Vite):
```bash
cd apps/www
npm run dev
# Abre http://localhost:5173 (o el puerto que Vite asigne)
```

**Ejecutar tests (backend)**
```bash
cd apps/api
npm run test
```

**Troubleshooting (problemas ja vistos)**
- Puerto ocupado (ejemplo para 4001):
```bash
npx kill-port 4001
```
- Error de JSX por archivos `.js` duplicados en el frontend: elimina las versiones `.js` que coexistan con `.tsx` en `apps/www/src` (ya aplicado en este repo).
- Si Vite/Esbuild indica que el loader no tiene JSX, asegura que `apps/www/tsconfig.json` contiene `jsx: "react-jsx"` y que no existan archivos `.js` con JSX sin el loader correcto.

**Archivos relevantes (cambios principales)**
- `apps/api/src/lib/heuristics.ts`
- `apps/api/src/routes/profile.ts` (POST `/from-cv/:cvId`, GET `/profile/:cvId`)
- `apps/api/src/__tests__/heuristics.spec.ts`
- `apps/www/src/components/UploadCV.tsx`


## Requisitos

- Node.js 18 o superior
- npm

> Nota: el proyecto contiene scripts de workspace `pnpm`, pero en este entorno usamos `npm` para compatibilidad local.

## Instalación

1. Instalar dependencias del backend:

```bash
cd apps/api
npm install
```

2. Instalar dependencias del frontend:

```bash
cd ../www
npm install
```

## Inicializar la base de datos

1. Generar el cliente Prisma y aplicar el esquema SQLite:

```bash
cd ../api
npx prisma generate
npx prisma db push
```

2. Verificar que `apps/api/prisma/dev.db` existe.

## Ejecutar localmente

### Backend

```bash
cd apps/api
npm run dev
```

El backend se espera en `http://localhost:4000`.

Endpoints principales:

- `GET /health` → salud de la API
- `POST /cv/upload` → subir un CV
- `GET /cv/list` → listar CVs guardados

### Frontend

```bash
cd apps/www
npm run dev
```

El frontend se ejecuta en el puerto que configure Vite, normalmente `http://localhost:5173`.

## Comandos rápidos para Windows

```powershell
cd "C:\Users\PC\OneDrive\Escritorio\dev\CareerPilot\apps\api"
npm install
npx prisma generate
npx prisma db push
npm run dev
```

En otra terminal:

```powershell
cd "C:\Users\PC\OneDrive\Escritorio\dev\CareerPilot\apps\www"
npm install
npm run dev
```

## Flujo funcional recomendado

1. Abrir el frontend.
2. Seleccionar un archivo CV.
3. Enviar al backend.
4. Ver el CV listado en la sección de CVs subidos.

## Problemas comunes

- Si el puerto `4000` ya está ocupado, cierra el proceso que lo usa o cambia `PORT` en `apps/api/.env`.
- Si `npx prisma` no se encuentra, ejecuta `npm install` nuevamente en `apps/api`.

## Observaciones

- La base de datos actual es SQLite y está en `apps/api/prisma/dev.db`.
- El primer flujo funcional ya está implementado: archivo físico en `apps/api/uploads` + registro en la tabla `CV`.
---

Si quieres, puedo: 1) añadir esta sección al comienzo del README como un encabezado de historial en vez de al final, 2) generar un `CHANGELOG.md` separado con más detalle, o 3) commitear estos cambios y crear un breve mensaje de commit. ¿Cuál prefieres?
