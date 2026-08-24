# Changelog

Todos los cambios importantes en este proyecto se documentan en este archivo.

Formato:
- Fecha — Versión (opcional)
- Categorías: Added, Changed, Fixed, Deprecated, Removed, Security

---

## 2026-08-24 — 0.2.0

- Added: Endpoint `POST /profile/from-cv/:cvId` que genera y devuelve `extracted` (campos: `fullName`, `email`, `phone`, `summary`, `skills`, `positions`, `experienceYears`, `education`, `languages`, `confidence`).
- Changed: Heurísticas centralizadas en `apps/api/src/lib/heuristics.ts` y usadas por el backend y scripts.
- Added: Tests de Vitest para heurísticas en `apps/api/src/__tests__/heuristics.spec.ts`.
- Changed: Frontend `apps/www/src/components/UploadCV.tsx` ahora consume y muestra `extracted`.
- Fixed: Eliminados archivos `.js` duplicados en `apps/www/src` que causaban errores de JSX (`App.js`, `main.js`, `components/UploadCV.js`).

---

## Notas

- Mantener este archivo actualizado por cada release o cambio significativo.
- Para publicaciones formales, seguir Semantic Versioning y referenciar PRs/Issues cuando aplique.
