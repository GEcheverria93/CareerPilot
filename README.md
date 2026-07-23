# CareerPilot

Proyecto piloto para carga y almacenamiento de CVs con backend Express + Prisma y frontend React.

La implementación actual sigue las decisiones técnicas principales del proyecto:

- Frontend: React + Vite + TypeScript
- Backend: Node.js + Express + TypeScript
- Base de datos de prototipo: SQLite con Prisma
- Validación futura: Zod
- Gestión de paquetes: npm en este entorno local (el proyecto usa `pnpm` como decisión técnica establecida)

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
