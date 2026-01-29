# Evaluación de Impacto de Sistemas de IA

## Descripción del Servicio

Evaluación de impacto obligatoria para sistemas de IA de alto riesgo según DS 115-2025-PCM (Artículos 30 y 32). Documento formal que debe conservarse por mínimo 3 años.

## Base Legal

### DS 115-2025-PCM
- **Artículo 30:** Evaluación previa de sistemas de IA de alto riesgo
- **Artículo 32:** Requisitos de documentación y conservación
- **Artículo 31.1:** Registro actualizado y accesible sobre funcionamiento

### Sistemas que Requieren Evaluación (Alto Riesgo)
- Evaluación crediticia de personas
- Decisiones de acceso a crédito
- Determinación de condiciones de productos financieros
- Underwriting de seguros
- Evaluaciones médicas con impacto en tratamiento
- Evaluación de estudiantes para acceso educativo
- Decisiones laborales (contratación, promoción)

**Excepción:** Detección de fraude NO se considera alto riesgo.

## Duración
2-3 semanas por sistema (dependiendo de complejidad)

## Público Objetivo
- Bancos con modelos de scoring crediticio
- Aseguradoras con underwriting automatizado
- Fintechs con decisiones de préstamo
- Empresas de salud con diagnóstico asistido por IA
- Instituciones educativas con evaluación automatizada

## Entregables

### 1. Informe de Evaluación de Impacto
Documento formal que incluye:

#### Sección A: Descripción del Sistema
- Nombre y versión del sistema
- Propósito y funcionalidad
- Tipo de IA/ML utilizado
- Alcance de decisiones automatizadas
- Volumen de decisiones (mensual/anual)
- Stakeholders afectados

#### Sección B: Análisis de Datos
- Fuentes de datos utilizadas
- Tipos de datos (personales, sensibles, agregados)
- Proceso de adquisición de datos
- Calidad de datos de entrenamiento
- Representatividad de datasets
- Proveniencia documentada

#### Sección C: Análisis de Riesgos
- Identificación de riesgos potenciales
- Probabilidad e impacto por riesgo
- Riesgos a individuos (discriminación, privacidad)
- Riesgos a grupos (sesgo sistémico)
- Riesgos sociales (amplificación de desigualdades)
- Matriz de riesgos priorizada

#### Sección D: Evaluación de Impactos
- **Fairness (Equidad):** Análisis de sesgo por género, edad, geografía, etc.
- **Accountability:** Claridad de responsabilidades
- **Transparencia:** Capacidad de explicar decisiones
- **Privacidad:** Cumplimiento LPDP, protección de datos
- **Seguridad:** Vulnerabilidades identificadas
- **Accesibilidad:** Impacto en poblaciones vulnerables
- **Derechos humanos:** Potencial afectación

#### Sección E: Medidas de Mitigación
- Controles implementados por riesgo
- Supervisión humana definida
- Mecanismos de apelación
- Monitoreo continuo
- Plan de contingencia

#### Sección F: Conclusiones y Recomendaciones
- Resumen ejecutivo de impactos
- Riesgos residuales aceptados
- Recomendaciones de mejora
- Condiciones para operación
- Frecuencia de re-evaluación

### 2. Ficha Técnica del Sistema
Documento resumido para reguladores:
- Datos clave del sistema
- Clasificación de riesgo
- Controles principales
- Responsable designado
- Fecha de evaluación
- Próxima revisión programada

### 3. Plan de Monitoreo Continuo
- KPIs de performance del modelo
- Métricas de fairness a monitorear
- Frecuencia de revisión
- Umbrales de alerta
- Proceso de escalamiento

### 4. Registro para Conservación (3 años)
- Versión archivable del informe
- Evidencia de aprobaciones
- Histórico de cambios
- Formato compatible con archivo digital

## Metodología

### Fase 1: Preparación (Días 1-3)
- Kick-off con stakeholders
- Recopilación de documentación técnica
- Entrevistas iniciales
- Definición de alcance específico

### Fase 2: Análisis Técnico (Días 4-8)
- Revisión de arquitectura del sistema
- Análisis de datos de entrenamiento
- Evaluación de algoritmo y lógica
- Testing de sesgo preliminar
- Revisión de controles existentes

### Fase 3: Evaluación de Impactos (Días 9-12)
- Workshops con áreas afectadas
- Análisis de casos de uso
- Evaluación de impactos por dimensión
- Identificación de poblaciones afectadas
- Documentación de evidencia

### Fase 4: Documentación (Días 13-15)
- Elaboración de informe completo
- Desarrollo de recomendaciones
- Preparación de ficha técnica
- Revisión interna de calidad
- Presentación de resultados

## Áreas de Impacto Evaluadas

### Impacto en Individuos
| Área | Preguntas Clave |
|------|-----------------|
| Discriminación | ¿Hay diferencias injustificadas por grupo protegido? |
| Privacidad | ¿Se usa PII de forma proporcional? |
| Autonomía | ¿El individuo puede cuestionar decisiones? |
| Dignidad | ¿El tratamiento es respetuoso? |
| Acceso | ¿Se limita injustamente acceso a servicios? |

### Impacto en Grupos
| Área | Preguntas Clave |
|------|-----------------|
| Sesgo sistémico | ¿Hay patrones de exclusión? |
| Representación | ¿Los datos reflejan diversidad real? |
| Amplificación | ¿Se amplifican desigualdades existentes? |
| Vulnerabilidad | ¿Grupos vulnerables son más afectados? |

### Impacto Social
| Área | Preguntas Clave |
|------|-----------------|
| Confianza | ¿El sistema genera confianza pública? |
| Inclusión | ¿Promueve o limita inclusión financiera? |
| Mercado | ¿Afecta competencia de mercado? |
| Empleo | ¿Impacta empleos o roles humanos? |

## Framework de Riesgo

### Matriz de Clasificación
```
Alto Impacto + Alta Probabilidad    → Crítico (acción inmediata)
Alto Impacto + Baja Probabilidad    → Mayor (plan de mitigación)
Bajo Impacto + Alta Probabilidad    → Menor (monitoreo)
Bajo Impacto + Baja Probabilidad    → Aceptable (documentar)
```

### Criterios de Aceptabilidad
- Riesgos críticos: No se puede operar sin mitigación
- Riesgos mayores: Requieren plan de acción con plazos
- Riesgos menores: Aceptables con monitoreo
- Riesgos aceptables: Documentados para referencia

## Alineación con Estándares

### ISO/IEC 42001
- Control A.5.2: Proceso de evaluación de impacto
- Control A.5.3: Documentación de evaluaciones
- Control A.5.4: Impacto en individuos/grupos
- Control A.5.5: Impactos sociales

### NIST AI RMF
- Govern: Estructuras de gobernanza
- Map: Identificación de contexto y riesgos
- Measure: Métricas de impacto
- Manage: Mitigación y monitoreo

## Precio Referencial
- Sistema simple: USD 6,000-8,000
- Sistema complejo: USD 10,000-15,000
- Evaluación múltiple (3+ sistemas): Precio por volumen

## Requisitos del Cliente

### Antes de Iniciar
- Documentación técnica del sistema
- Datos de entrenamiento o descripción
- Métricas de performance actuales
- Políticas de uso de IA existentes
- Acceso a responsables técnicos

### Durante la Evaluación
- Disponibilidad para entrevistas
- Acceso a datos de testing
- Participación en workshops
- Aprobación de stakeholders

## Frecuencia de Re-evaluación

### Obligatoria
- Cambios significativos en el modelo
- Cambios en datos de entrenamiento
- Nuevos casos de uso
- Hallazgos de monitoreo anómalo
- Cambios regulatorios

### Recomendada
- Anualmente para sistemas de alto riesgo
- Bianualmente para sistemas de riesgo medio
- Post-incidentes significativos

## Valor Agregado

### Para Compliance
- Documento formal para reguladores
- Evidencia de due diligence
- Cumplimiento demostrable con DS 115-2025-PCM

### Para el Negocio
- Identificación de riesgos ocultos
- Mejora de modelos
- Reducción de reclamos
- Protección reputacional

### Para Clientes
- Transparencia sobre decisiones
- Mecanismos de apelación claros
- Protección de derechos
