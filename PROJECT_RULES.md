# AI Job Automation Platform

## Objetivo del proyecto

Construir una plataforma piloto capaz de analizar el CV del usuario, identificar oportunidades laborales compatibles y facilitar su postulación de forma automática o asistida.

El sistema NO debe diseñarse únicamente como un bot que envía CVs.

Debe ser una plataforma modular capaz de:

- Analizar un CV.
- Extraer información profesional relevante.
- Buscar oportunidades compatibles.
- Calcular el porcentaje de compatibilidad con base en el CV.
- Preparar o enviar la postulación de forma asistida o automática cuando sea viable.
- Registrar resultados básicos del proceso.

La arquitectura debe permitir agregar nuevos portales de empleo sin modificar el núcleo del sistema.

En el MVP piloto, la IA será complementaria y opcional. Su rol será apoyar tareas concretas como el análisis de CV, sugerencias de matching o generación de textos, pero nunca reemplazar decisiones críticas ni convertirse en el eje central del producto.

---

#  Filosofía de desarrollo

CareerPilot se desarrollará de forma incremental.

Cada nueva funcionalidad deberá aportar valor real al usuario antes de aumentar la complejidad del sistema.

La prioridad será siempre:

1. Funcionalidad.
2. Estabilidad.
3. Automatización.
4. Optimización.

Nunca se implementará una solución más compleja si existe una alternativa más simple que resuelva el mismo problema.

## Simplicidad

Siempre elegir la solución más simple.

Nunca agregar complejidad innecesaria.

---

## Escalabilidad

Todo módulo debe poder crecer sin romper el resto del sistema.

---

## Modularidad

Cada responsabilidad pertenece a un módulo.

No mezclar responsabilidades.

---

## Reutilización

Evitar código duplicado.

Toda lógica reutilizable debe abstraerse.

---

## Código limpio

Seguir principios SOLID.

Funciones pequeñas.

Componentes pequeños.

Archivos pequeños.

---

## Tipado estricto

Todo el proyecto utilizará TypeScript.

No utilizar "any".

---

## Dependencias

Agregar dependencias únicamente cuando exista una justificación técnica.

Antes de instalar una dependencia, verificar si el problema puede resolverse con herramientas existentes.

---

# Objetivos del MVP piloto

El MVP piloto deberá demostrar que CareerPilot es capaz de analizar el CV del usuario, encontrar ofertas compatibles y facilitar la postulación con la menor intervención posible.

El MVP incluirá:

1. Gestión del CV.
2. Análisis del CV para construir un perfil profesional básico.
3. Integración con uno o varios Connectors.
4. Centralización de ofertas compatibles.
5. Ranking básico por compatibilidad.
6. Búsqueda manual y búsqueda automática sencilla.
7. Apertura de la oferta original (Modo Asistido).
8. Postulación asistida o automática en un alcance limitado.

Quedan fuera del MVP piloto:

- IA avanzada.
- Optimización automática del CV.
- Dashboard analítico.
- Automatización masiva de postulaciones.
- Multiusuario.

---

# Arquitectura

El sistema estará dividido en módulos independientes.

## Authentication

Usuarios

Sesiones

Permisos

---

## Profile

Información del usuario

Experiencia

Tecnologías

Idiomas

Certificaciones

---

## Resume

Gestión de CV

Versiones

Plantillas

Optimización

---

## Jobs

Obtención de ofertas

Normalización

Clasificación

---

## AI

Análisis

Matching

Optimización

Generación de cartas

Clasificación

---

## Automation

Automatización de tareas

Integraciones

Flujos

---

## Dashboard

Estadísticas

Métricas

Seguimiento

---

# Arquitectura Backend

Seguir arquitectura por capas.

Controllers

↓

Services

↓

Repositories

↓

Database

Nunca acceder a la base de datos desde un Controller.

Nunca colocar lógica de negocio en las rutas.

---

# Arquitectura Frontend

Feature First.

Cada módulo posee:

components/

hooks/

services/

pages/

types/

utils/

No crear carpetas genéricas gigantes.

---

# Convenciones

Variables en inglés.

Funciones descriptivas.

Interfaces separadas.

Nada de nombres como:

data

temp

obj

test

---

# IA

La IA debe ayudar, no reemplazar.

Nunca controlar la lógica del sistema.

Toda decisión crítica debe pasar por el Backend.

En el MVP se utilizará solo para tareas auxiliares y de apoyo, como análisis de texto, sugerencias de compatibilidad o generación de contenido. El flujo principal del producto debe seguir funcionando sin depender de la IA.

---

# Automatización

Toda automatización debe ser desacoplada del núcleo.

Cada portal será un conector independiente.

Ejemplo

connectors/

linkedin/

computrabajo/

bumeran/

indeed/

etc

Nunca escribir lógica específica de un portal dentro del core.

---

# Base de datos

Modelo normalizado.

Evitar duplicación.

No almacenar información derivada salvo por rendimiento.

---

# Performance

Evitar consultas innecesarias.

Utilizar índices.

Lazy Loading cuando corresponda.

Cache solamente donde sea útil.

---

# Testing

Toda lógica importante debe ser testeable.

Separar lógica de presentación.

---

# Seguridad

Nunca almacenar contraseñas en texto plano.

Variables sensibles únicamente mediante .env.

Validar todos los datos de entrada.

---

# Reglas para la IA

Antes de escribir código:

1. Analizar el contexto.

2. Verificar si existe una implementación similar.

3. Reutilizar código existente.

4. No crear archivos innecesarios.

5. No instalar dependencias innecesarias.

6. Explicar brevemente la solución antes de implementarla.

7. Mantener la arquitectura establecida.

8. No modificar módulos existentes sin justificación.

9. Documentar cambios importantes.

10. Priorizar mantenibilidad sobre rapidez.

---

# Roadmap

Fase 1

Infraestructura

Fase 2

Usuarios

Fase 3

CV

Fase 4

Matching

Fase 5

Dashboard

Fase 6

Automatización

Fase 7

IA Avanzada

Fase 8

Múltiples usuarios

Fase 9

SaaS

---

# Objetivo final

Construir una plataforma SaaS escalable que permita automatizar y optimizar el proceso de búsqueda laboral utilizando IA y una arquitectura modular, mantenible y extensible.