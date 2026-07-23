# 04 - Architecture

## Principios de arquitectura

- El Core contiene la lógica de negocio de CareerPilot.
- El Core nunca conocerá ningún portal de empleo.
- El Core únicamente conoce entidades internas de CareerPilot.
- Toda integración externa será realizada mediante Connectors.
- La IA será una capa de apoyo opcional. No decidirá ni reemplazará decisiones críticas del producto.
- Toda decisión de negocio crítica debe resolverse en el Backend y mantenerse bajo el control del Core.

## Capas de la solución

1. Frontend
   - Interfaz de usuario, navegación y experiencia de búsqueda.

2. Backend / Core
   - Servicios de dominio.
   - Reglas de negocio.
   - Gestión de perfil, CV, ofertas, ranking y filtros.

3. Connectors
   - Adaptadores para fuentes externas.
   - Recopilan datos sin contaminar la lógica del Core con reglas específicas de un portal.

4. AI Support Layer
   - Capa opcional para análisis de CV, sugerencias de matching, generación de texto o resúmenes.
   - Solo complementa el flujo principal.
   - Nunca controla el flujo ni sustituye decisiones críticas.

5. Data Layer
   - PostgreSQL + Prisma como capa de persistencia.
   - Almacena entidades internas normalizadas.

## Regla de diseño clave

El flujo principal del producto debe funcionar sin IA. La IA puede mejorar la experiencia, pero no puede ser condición necesaria para que el sistema cumpla su propósito principal.