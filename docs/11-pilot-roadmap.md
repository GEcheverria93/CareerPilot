# 11 - Pilot Roadmap

## Objetivo del piloto

Validar si CareerPilot puede ayudar a una persona a subir su CV, encontrar ofertas compatibles y avanzar hacia una postulación de forma sencilla y útil.

El enfoque del piloto no es construir una plataforma completa ni ambiciosa. El objetivo es demostrar valor real con una experiencia mínima, funcional y verificable.

---

## Principios del piloto

- Priorizar funcionalidad útil sobre complejidad.
- Construir primero el flujo principal.
- Mantener una arquitectura modular aunque simple.
- Usar IA solo como apoyo opcional.
- Validar con usuarios reales lo antes posible.
- Evitar funciones que no aporten valor inmediato al piloto.
- Trabajar en ciclos cortos y adaptativos.
- Aceptar que algunas ideas no funcionarán y corregirlas sin perder tiempo.

---

## Metodología recomendada

### Formato semanal

Cada semana debe tener:

1. una meta concreta,
2. 3 a 5 tareas claras,
3. un entregable mínimo,
4. una prueba simple,
5. y una decisión de ajuste para la semana siguiente.

### Regla de prueba y error

No se debe asumir que una idea funciona solo porque suena bien. Cada semana debe probarse con uso real o con una revisión simple y, si algo falla, ajustarse.

---

## Plan semanal concreto

### Semana 1 - Preparar la base del proyecto

#### Tareas

- crear la estructura inicial del repositorio,
- configurar frontend base,
- configurar backend base,
- preparar la base de datos mínima,
- definir los módulos iniciales: CV, perfil, ofertas y matching.

#### Entregable

Un proyecto base que pueda ejecutarse y recibir un CV.

#### Prueba

Verificar que el sistema inicia correctamente y que el flujo de carga de CV funciona.

---

### Semana 2 - Subida y almacenamiento del CV

#### Tareas

- crear la pantalla para subir un CV,
- guardar el archivo en el sistema,
- almacenar metadatos básicos del CV,
- preparar la ruta para mostrar el CV cargado.

#### Entregable

El usuario puede subir un CV y verlo registrado en la app.

#### Prueba

Probar con un CV real y confirmar que se carga correctamente.

---

### Semana 3 - Extraer perfil profesional básico

#### Tareas

- extraer datos clave del CV,
- identificar experiencia, tecnologías y datos relevantes,
- crear un perfil profesional simple,
- permitir editar ese perfil manualmente.

#### Entregable

Un perfil profesional básico generado a partir del CV.

#### Prueba

Revisar si los datos son útiles y si el usuario puede corregirlos fácilmente.

---

### Semana 4 - Crear la primera búsqueda de ofertas

#### Tareas

- definir una fuente inicial de ofertas,
- crear el flujo para consultar ofertas,
- implementar matching simple por palabras clave,
- mostrar una lista inicial de ofertas compatibles.

#### Entregable

Una lista de ofertas compatibles visible para el usuario.

#### Prueba

Verificar si las ofertas parecen relevantes y si el ranking básico tiene sentido.

---

### Semana 5 - Mejorar la experiencia de resultados

#### Tareas

- agregar detalle de oferta,
- mostrar información clave de cada oferta,
- mejorar la vista de resultados,
- permitir pasar de una oferta a su detalle de forma simple.

#### Entregable

Una experiencia de resultados más clara y usable.

#### Prueba

Pedir que alguien pruebe la app y comprobar si entiende qué hacer con las ofertas.

---

### Semana 6 - Añadir postulación asistida mínima

#### Tareas

- permitir abrir la oferta original,
- preparar un flujo guiado para postular,
- o pre-cargar información básica si aplica.

#### Entregable

El usuario puede dar un siguiente paso desde la oferta.

#### Prueba

Verificar que esa acción aporta valor y no es innecesaria.

---

### Semana 7 - Validación con usuarios reales

#### Tareas

- invitar a personas a probar el piloto,
- observar cómo lo usan,
- recoger feedback sobre utilidad y claridad,
- anotar qué partes les resultan confusas o poco útiles.

#### Entregable

Un listado de mejoras priorizadas.

#### Prueba

Reconocer qué partes del piloto son realmente útiles y qué debe simplificarse o eliminarse.

---

### Semana 8 - Ajustes y decisión final

#### Tareas

- corregir los puntos más problemáticos,
- simplificar lo que sea innecesario,
- reforzar lo que demostró valor,
- decidir si el piloto merece seguir creciendo.

#### Entregable

Una versión más refinada del piloto y una decisión clara sobre continuidad.

#### Prueba

Comprobar si el flujo general es suficiente para seguir adelante o si hay que replantearlo.

---

## Qué evitar durante el piloto

- construir demasiadas funcionalidades a la vez,
- diseñar una arquitectura enorme desde el inicio,
- cubrir todos los portales desde la primera semana,
- integrar IA avanzada demasiado pronto,
- añadir funciones ornamentales que no ayuden al usuario.

---

## Qué priorizar siempre

- claridad,
- utilidad,
- progreso real,
- feedback temprano,
- y adaptaciones rápidas.

---

## Resumen ejecutivo

La idea es avanzar en bloques pequeños, cada semana con una meta concreta y una prueba simple. Si algo no funciona, se corrige. Si algo sí funciona, se refuerza. El objetivo no es hacer todo perfecto desde el inicio, sino construir un piloto útil, verificable y adaptable.
