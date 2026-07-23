# 05 - Database

## Entidades base

- User
- Resume
- Profile
- Job
- Company
- Connector
- UserJob
- Search
- Ranking

## Consideraciones de diseño

- Los datos del negocio deben residir en el Core y ser la fuente de verdad del sistema.
- La información generada por IA, como análisis, sugerencias o texto auxiliar, debe almacenarse como datos complementarios y no sustituir la autoridad del modelo de negocio principal.
- El almacenamiento debe favorecer la normalización y la trazabilidad de las ofertas, sin depender de la IA para que el flujo funcione.