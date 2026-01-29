# Gestión de Riesgos en Data Governance

## Visión General

La gestión de riesgos de datos es una función crítica de Data Governance que identifica, evalúa y mitiga amenazas relacionadas con la disponibilidad, integridad, confidencialidad y uso apropiado de los datos. En el contexto del DS 115-2025-PCM y Ley 31814, la gestión de riesgos de datos en sistemas de IA es particularmente importante.

---

## Parte 1: Fundamentos de Gestión de Riesgos de Datos

### Definición y Alcance

**Gestión de Riesgos de Datos:** Proceso sistemático de identificar, evaluar, tratar y monitorear riesgos que pueden afectar la capacidad de la organización para gestionar sus datos de manera efectiva y segura.

**Alcance típico:**

```
┌─────────────────────────────────────────────────────┐
│           GESTIÓN DE RIESGOS DE DATOS               │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐       │
│  │ Seguridad │  │ Privacidad │  │ Calidad   │       │
│  │ de Datos  │  │ de Datos   │  │ de Datos  │       │
│  └───────────┘  └───────────┘  └───────────┘       │
│                                                      │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐       │
│  │Compliance │  │ Continuidad│  │ Ética en  │       │
│  │Regulatorio│  │ de Datos   │  │   IA      │       │
│  └───────────┘  └───────────┘  └───────────┘       │
│                                                      │
└─────────────────────────────────────────────────────┘
```

### Categorías de Riesgo de Datos

#### 1. Riesgos de Seguridad

| Riesgo | Descripción | Impacto |
|--------|-------------|---------|
| **Brechas de datos** | Acceso no autorizado a datos sensibles | Multas, reputación, pérdida de clientes |
| **Malware/Ransomware** | Cifrado o destrucción de datos | Interrupción operativa, costos de recuperación |
| **Amenazas internas** | Empleados malintencionados o negligentes | Fuga de datos, fraude |
| **Ataques externos** | Hackers, competidores, estados | Robo de propiedad intelectual, espionaje |

#### 2. Riesgos de Privacidad

| Riesgo | Descripción | Impacto |
|--------|-------------|---------|
| **Uso indebido de PII** | Datos personales usados sin consentimiento | Violación de Ley 29733 |
| **Retención excesiva** | Mantener datos más allá del propósito | Non-compliance, exposición |
| **Transferencias no autorizadas** | Compartir datos sin base legal | Sanciones, demandas |
| **Falta de transparencia** | No informar sobre uso de datos | Pérdida de confianza |

#### 3. Riesgos de Calidad

| Riesgo | Descripción | Impacto |
|--------|-------------|---------|
| **Datos incorrectos** | Errores en datos críticos | Decisiones equivocadas |
| **Datos incompletos** | Información faltante | Análisis sesgado |
| **Datos obsoletos** | Información desactualizada | Acciones sobre realidad pasada |
| **Datos inconsistentes** | Diferentes versiones de la verdad | Confusión, ineficiencia |

#### 4. Riesgos de Compliance

| Riesgo | Descripción | Impacto |
|--------|-------------|---------|
| **Non-compliance regulatorio** | No cumplir DS 115-2025-PCM, Ley 31814 | Multas, sanciones, restricciones |
| **Falta de evidencia** | No poder demostrar cumplimiento | Hallazgos de auditoría |
| **Cambios regulatorios** | No adaptarse a nuevas regulaciones | Exposición legal |
| **Requisitos sectoriales** | No cumplir normas SBS, SMV | Sanciones específicas |

#### 5. Riesgos de IA y Algorítmicos

| Riesgo | Descripción | Impacto |
|--------|-------------|---------|
| **Sesgo algorítmico** | Modelos que discriminan | Violación de Ley 31814, demandas |
| **Falta de explicabilidad** | No poder explicar decisiones | Non-compliance DS 115-2025-PCM |
| **Drift del modelo** | Degradación de performance | Decisiones incorrectas |
| **Datos de entrenamiento sesgados** | Datos históricos con sesgos | Perpetuación de discriminación |

---

## Parte 2: Framework de Gestión de Riesgos

### Proceso de Gestión de Riesgos

```
┌─────────────────────────────────────────────────────┐
│                                                      │
│    ┌──────────┐      ┌──────────┐      ┌──────────┐│
│    │IDENTIFICAR│ ──▶ │ EVALUAR  │ ──▶ │  TRATAR  ││
│    └──────────┘      └──────────┘      └──────────┘│
│          ▲                                    │     │
│          │           ┌──────────┐            │     │
│          └────────── │MONITOREAR│ ◀──────────┘     │
│                      └──────────┘                   │
│                                                      │
└─────────────────────────────────────────────────────┘
```

### Paso 1: Identificación de Riesgos

#### Métodos de Identificación

| Método | Descripción | Frecuencia |
|--------|-------------|------------|
| **Inventario de datos** | Identificar datos críticos y sus riesgos inherentes | Continuo |
| **Threat modeling** | Analizar amenazas potenciales por sistema | Por proyecto/anual |
| **Assessment de vulnerabilidades** | Identificar debilidades en controles | Trimestral |
| **Análisis de incidentes** | Aprender de issues pasados | Post-incidente |
| **Regulatory scanning** | Identificar nuevos requisitos regulatorios | Continuo |
| **Workshops de riesgo** | Sesiones con stakeholders para identificar riesgos | Semestral |

#### Inventario de Riesgos

**Formato de registro de riesgos:**

| Campo | Descripción |
|-------|-------------|
| ID | Identificador único |
| Nombre | Descripción corta del riesgo |
| Categoría | Seguridad, Privacidad, Calidad, Compliance, IA |
| Descripción | Detalle del riesgo y cómo puede materializarse |
| Activos afectados | Datos, sistemas, procesos impactados |
| Causa raíz | Origen del riesgo |
| Impacto | Consecuencias si se materializa |
| Probabilidad | Likelihood de ocurrencia |
| Owner | Responsable de gestionar el riesgo |
| Controles existentes | Mitigaciones ya implementadas |
| Riesgo residual | Nivel de riesgo después de controles |

### Paso 2: Evaluación de Riesgos

#### Matriz de Riesgo

```
              IMPACTO
         Bajo  Medio  Alto  Crítico
        ┌─────┬─────┬─────┬─────┐
  Alto  │  M  │  A  │  A  │  C  │
        ├─────┼─────┼─────┼─────┤
P Medio │  B  │  M  │  A  │  A  │
R       ├─────┼─────┼─────┼─────┤
O Bajo  │  B  │  B  │  M  │  A  │
B       ├─────┼─────┼─────┼─────┤
  Raro  │  B  │  B  │  B  │  M  │
        └─────┴─────┴─────┴─────┘

B = Bajo (Aceptar/Monitorear)
M = Medio (Mitigar según prioridad)
A = Alto (Mitigar activamente)
C = Crítico (Acción inmediata)
```

#### Criterios de Evaluación

**Probabilidad:**

| Nivel | Descripción | Frecuencia estimada |
|-------|-------------|---------------------|
| Raro | Muy improbable que ocurra | < 1 vez en 10 años |
| Bajo | Podría ocurrir ocasionalmente | 1 vez en 5-10 años |
| Medio | Probable que ocurra | 1 vez en 1-5 años |
| Alto | Muy probable que ocurra | > 1 vez por año |

**Impacto:**

| Nivel | Financiero | Reputacional | Operativo | Regulatorio |
|-------|------------|--------------|-----------|-------------|
| Bajo | < $10K | Interno | Horas | Observación menor |
| Medio | $10K-$100K | Local | Días | Hallazgo moderado |
| Alto | $100K-$1M | Nacional | Semanas | Hallazgo significativo |
| Crítico | > $1M | Internacional | Meses | Sanción grave |

### Paso 3: Tratamiento de Riesgos

#### Opciones de Tratamiento

| Estrategia | Descripción | Cuándo Usar |
|------------|-------------|-------------|
| **Mitigar** | Implementar controles para reducir probabilidad o impacto | Riesgos que pueden ser gestionados |
| **Transferir** | Pasar riesgo a tercero (seguro, outsourcing) | Riesgos con alto impacto, baja frecuencia |
| **Evitar** | Eliminar la actividad que genera el riesgo | Riesgos inaceptables sin mitigación viable |
| **Aceptar** | Reconocer y monitorear sin acción adicional | Riesgos bajos o donde costo de mitigación > beneficio |

#### Plan de Tratamiento

**Formato de plan:**

| Campo | Contenido |
|-------|-----------|
| Riesgo | ID y nombre del riesgo |
| Estrategia | Mitigar/Transferir/Evitar/Aceptar |
| Controles propuestos | Acciones específicas de mitigación |
| Responsable | Quien implementará controles |
| Fecha objetivo | Cuando deben estar implementados |
| Recursos | Budget, personal, herramientas necesarias |
| Riesgo residual esperado | Nivel de riesgo post-implementación |
| Indicadores | Métricas para monitorear efectividad |

### Paso 4: Monitoreo y Revisión

#### Indicadores de Riesgo (KRIs)

**Key Risk Indicators para datos:**

| Indicador | Descripción | Umbral de Alerta |
|-----------|-------------|------------------|
| Intentos de acceso no autorizado | # de intentos fallidos de acceso | > 10 por día |
| Datos sin clasificar | % de datos no clasificados | > 20% |
| Vulnerabilidades abiertas | # de vulnerabilidades sin remediar | > 5 críticas |
| Issues de calidad | # de issues de calidad no resueltos | Creciente |
| Tiempo de respuesta a incidentes | Horas desde detección a contención | > 4 horas |
| Compliance gaps | # de requisitos no cumplidos | > 0 críticos |

#### Frecuencia de Revisión

| Tipo de Riesgo | Frecuencia de Revisión |
|----------------|------------------------|
| Crítico | Semanal |
| Alto | Mensual |
| Medio | Trimestral |
| Bajo | Semestral |

---

## Parte 3: Riesgos Específicos de IA

### Contexto Regulatorio Peruano

**DS 115-2025-PCM y Ley 31814** establecen requisitos específicos para gestión de riesgos en sistemas de IA:

- Evaluación de impacto para sistemas de alto riesgo
- Transparencia algorítmica
- Supervisión humana
- No discriminación
- Rendición de cuentas

### Categorización de Riesgo de IA

#### Niveles de Riesgo según DS 115-2025-PCM

| Nivel | Descripción | Ejemplos | Requisitos |
|-------|-------------|----------|------------|
| **Alto** | Afecta derechos fundamentales, decisiones significativas | Scoring crediticio, selección de personal | Evaluación de impacto, auditoría, supervisión humana |
| **Medio** | Afecta operaciones importantes pero no derechos | Pricing dinámico, optimización logística | Documentación, monitoreo |
| **Bajo** | Impacto limitado | Chatbots informativos, recomendaciones | Buenas prácticas |

### Riesgos Específicos de IA y Mitigaciones

#### 1. Sesgo Algorítmico

**Descripción:** Modelos que producen resultados sistemáticamente desfavorables para ciertos grupos.

**Causas:**
- Datos de entrenamiento históricos con sesgos
- Variables proxy que correlacionan con grupos protegidos
- Subrepresentación de grupos en datos
- Definición sesgada de variable objetivo

**Mitigaciones:**
| Control | Descripción |
|---------|-------------|
| Análisis de sesgo pre-entrenamiento | Examinar datos para detectar desbalances |
| Fairness metrics | Medir disparate impact, equal opportunity |
| Eliminación de variables proxy | Identificar y remover correlaciones indirectas |
| Técnicas de debiasing | Rebalanceo, regularización, post-processing |
| Auditoría externa | Validación independiente de fairness |

#### 2. Falta de Explicabilidad

**Descripción:** Incapacidad de explicar cómo el modelo llegó a una decisión.

**Impacto regulatorio:**
- DS 115-2025-PCM requiere transparencia algorítmica
- Ley 31814 requiere que afectados puedan entender decisiones

**Mitigaciones:**
| Control | Descripción |
|---------|-------------|
| Modelos interpretables | Preferir modelos explicables para alto riesgo |
| Técnicas de XAI | SHAP, LIME para explicar modelos complejos |
| Documentación de features | Explicar qué factores influyen en decisiones |
| Explicaciones para usuarios | Generar explicaciones comprensibles |
| Lineage de datos | Documentar origen de cada variable |

#### 3. Drift del Modelo

**Descripción:** Degradación del performance del modelo debido a cambios en datos o contexto.

**Tipos de drift:**
- **Data drift:** Cambio en distribución de datos de entrada
- **Concept drift:** Cambio en relación entre inputs y outputs
- **Label drift:** Cambio en distribución de variable objetivo

**Mitigaciones:**
| Control | Descripción |
|---------|-------------|
| Monitoreo de performance | Tracking continuo de métricas del modelo |
| Detección de drift | Alertas automáticas por cambios en distribuciones |
| Reentrenamiento periódico | Actualización regular del modelo |
| Modelo challenger | Comparación continua con modelo alternativo |
| Circuit breakers | Reglas para pausar modelo si performance degrada |

#### 4. Datos de Entrenamiento de Baja Calidad

**Descripción:** Modelos entrenados con datos incorrectos, incompletos o no representativos.

**Mitigaciones:**
| Control | Descripción |
|---------|-------------|
| Validación de datos pre-entrenamiento | Checks de calidad antes de usar datos |
| Documentación de limitaciones | Registrar conocimientos sobre sesgos/gaps |
| Versionamiento de datasets | Rastrear qué datos se usaron en cada versión |
| Métricas de calidad | Scores de calidad para datos de entrenamiento |
| Data governance integration | Usar datos gobernados y documentados |

### Data Protection Impact Assessment (DPIA) para IA

#### Cuándo Realizar DPIA

Obligatorio cuando:
- El sistema es de alto riesgo según DS 115-2025-PCM
- Procesa datos personales a escala
- Toma decisiones automatizadas que afectan significativamente a personas
- Usa datos sensibles (salud, finanzas, biometría)

#### Contenido del DPIA

| Sección | Contenido |
|---------|-----------|
| **Descripción del sistema** | Propósito, funcionamiento, datos usados |
| **Necesidad y proporcionalidad** | Justificación de por qué es necesario |
| **Identificación de riesgos** | Riesgos para derechos de afectados |
| **Medidas de mitigación** | Controles para cada riesgo identificado |
| **Evaluación de riesgo residual** | Nivel de riesgo después de mitigaciones |
| **Aprobación** | Sign-off de Data Protection Officer, Legal |

#### Template de DPIA para IA

```
EVALUACIÓN DE IMPACTO - SISTEMA DE IA
=====================================

1. INFORMACIÓN GENERAL
   - Nombre del sistema: [nombre]
   - Propósito: [descripción]
   - Clasificación de riesgo: [Alto/Medio/Bajo]
   - Data Owner: [nombre]
   - Fecha de evaluación: [fecha]

2. DATOS PROCESADOS
   - Tipos de datos: [lista]
   - Volumen: [cantidad]
   - Fuentes: [sistemas]
   - Retención: [período]
   - Datos sensibles: [sí/no, cuáles]

3. PROCESAMIENTO
   - Tipo de modelo: [descripción]
   - Decisiones automatizadas: [sí/no]
   - Supervisión humana: [descripción]
   - Explicabilidad: [nivel]

4. RIESGOS IDENTIFICADOS
   [Para cada riesgo:]
   - Descripción:
   - Probabilidad:
   - Impacto:
   - Grupos afectados:
   - Mitigación propuesta:
   - Riesgo residual:

5. CUMPLIMIENTO REGULATORIO
   - DS 115-2025-PCM: [estado]
   - Ley 31814: [estado]
   - Ley 29733: [estado]
   - Normativa SBS: [si aplica]

6. CONCLUSIÓN Y RECOMENDACIÓN
   [Aprobar/Aprobar con condiciones/Rechazar]

7. FIRMAS
   - Data Owner: _______________
   - DPO: _______________
   - Legal: _______________
   - Fecha: _______________
```

---

## Parte 4: Roles y Responsabilidades

### Matriz RACI de Gestión de Riesgos

| Actividad | Data Owner | Data Steward | CISO/DPO | Risk Manager | IT |
|-----------|------------|--------------|----------|--------------|-----|
| Identificar riesgos de datos | A/R | C | C | R | C |
| Evaluar riesgos | A | R | C | R | C |
| Definir controles | A | R | C | C | R |
| Implementar controles | I | R | C | I | R |
| Monitorear riesgos | A | R | R | R | R |
| Reportar a ejecutivos | C | I | R | A/R | I |
| Responder a incidentes | C | R | R | C | R |
| Realizar DPIA | A | R | R | C | C |

**Leyenda:** R=Responsible, A=Accountable, C=Consulted, I=Informed

### Responsabilidades Específicas

#### Data Owner
- Aceptar riesgos residuales de sus datos
- Aprobar planes de tratamiento
- Asegurar recursos para mitigación
- Escalar riesgos críticos

#### Data Steward
- Identificar y documentar riesgos operacionales
- Implementar controles del día a día
- Monitorear indicadores de riesgo
- Reportar issues y excepciones

#### Chief Information Security Officer (CISO)
- Definir políticas de seguridad de datos
- Supervisar controles técnicos
- Liderar respuesta a incidentes de seguridad
- Reportar estado de riesgos de seguridad

#### Data Protection Officer (DPO)
- Supervisar cumplimiento de privacidad
- Liderar DPIAs
- Asesorar sobre riesgos de privacidad
- Interface con reguladores

#### Risk Manager
- Coordinar proceso de gestión de riesgos
- Mantener registro de riesgos consolidado
- Facilitar evaluaciones de riesgo
- Reportar a comités ejecutivos

---

## Parte 5: Controles de Governance para Mitigación

### Controles Preventivos

| Control | Descripción | Riesgos Mitigados |
|---------|-------------|-------------------|
| Clasificación de datos | Categorizar datos por sensibilidad | Acceso no autorizado, fuga |
| Control de acceso | Permisos basados en roles y need-to-know | Acceso no autorizado |
| Encriptación | Proteger datos en reposo y tránsito | Brechas, intercepción |
| Validación de datos | Reglas de calidad en ingesta | Datos incorrectos |
| Políticas de retención | Eliminar datos cuando no se necesitan | Retención excesiva |
| Capacitación | Educar usuarios sobre manejo de datos | Errores humanos |

### Controles Detectivos

| Control | Descripción | Riesgos Mitigados |
|---------|-------------|-------------------|
| Monitoreo de acceso | Auditar quién accede a qué datos | Acceso no autorizado |
| Monitoreo de calidad | Alertas por degradación de calidad | Datos incorrectos |
| Detección de anomalías | Identificar patrones inusuales | Fraude, brechas |
| Auditorías periódicas | Revisar controles y compliance | Gaps de control |
| Monitoreo de modelo | Tracking de performance de IA | Drift, sesgo |

### Controles Correctivos

| Control | Descripción | Riesgos Mitigados |
|---------|-------------|-------------------|
| Proceso de respuesta a incidentes | Pasos para contener y remediar | Todos |
| Backup y recovery | Restaurar datos ante pérdida | Pérdida de datos |
| Proceso de corrección de datos | Corregir errores identificados | Calidad |
| Reentrenamiento de modelos | Actualizar modelos con drift | Drift, sesgo |
| Remediación de compliance | Cerrar gaps identificados | Non-compliance |

---

## Parte 6: Integración con Governance

### Governance Habilitando Gestión de Riesgos

| Capacidad de Governance | Cómo Reduce Riesgos |
|-------------------------|---------------------|
| **Catálogo de datos** | Visibilidad de qué datos existen y dónde |
| **Clasificación** | Controles apropiados por sensibilidad |
| **Lineage** | Trazabilidad para investigación de incidentes |
| **Calidad de datos** | Detección temprana de issues |
| **Ownership** | Accountability clara para decisiones de riesgo |
| **Políticas** | Estándares que previenen riesgos |
| **Metadatos** | Contexto para evaluar riesgos |

### Métricas de Riesgo en Dashboard de Governance

**KPIs de riesgo para incluir:**

| Métrica | Descripción | Meta |
|---------|-------------|------|
| % datos clasificados | Datos con clasificación de sensibilidad | > 95% |
| Riesgos críticos abiertos | # de riesgos críticos sin mitigación | 0 |
| Tiempo medio de remediación | Días desde identificación a cierre | < 30 días |
| Cobertura de DPIA | % de sistemas de alto riesgo con DPIA | 100% |
| Incidentes de datos | # de incidentes por período | Decreciente |
| Compliance gaps | # de requisitos no cumplidos | 0 críticos |

---

## Parte 7: Alineación con Regulación Peruana

### Requisitos de DS 115-2025-PCM

| Requisito | Implicación para Gestión de Riesgos |
|-----------|-------------------------------------|
| **Evaluación de impacto** | DPIA obligatorio para sistemas de alto riesgo |
| **Transparencia** | Riesgo de no explicabilidad debe ser mitigado |
| **Supervisión humana** | Controles para intervención humana en decisiones |
| **No discriminación** | Evaluación y mitigación de sesgo algorítmico |
| **Seguridad** | Controles de ciberseguridad para sistemas de IA |

### Requisitos de Ley 31814

| Principio | Implicación para Riesgos |
|-----------|--------------------------|
| **Beneficencia** | Evaluar riesgos de daño vs. beneficio |
| **No maleficencia** | Identificar y mitigar potencial de daño |
| **Autonomía** | Proteger capacidad de decisión de afectados |
| **Justicia** | Evaluar equidad de resultados |
| **Explicabilidad** | Mitigar riesgo de "caja negra" |
| **Responsabilidad** | Asignar accountability por riesgos |

### Checklist de Cumplimiento

**Para cada sistema de IA, verificar:**

- [ ] Clasificación de nivel de riesgo completada
- [ ] DPIA realizado (si aplica)
- [ ] Riesgos de sesgo evaluados
- [ ] Controles de explicabilidad implementados
- [ ] Supervisión humana establecida
- [ ] Plan de monitoreo activo
- [ ] Ownership de riesgos asignado
- [ ] Documentación para auditoría disponible

---

## Glosario de Términos de Riesgo

| Término | Definición |
|---------|------------|
| **Riesgo inherente** | Nivel de riesgo antes de aplicar controles |
| **Riesgo residual** | Nivel de riesgo después de aplicar controles |
| **Apetito de riesgo** | Cantidad de riesgo que la organización está dispuesta a aceptar |
| **Tolerancia de riesgo** | Variación aceptable alrededor del apetito de riesgo |
| **KRI** | Key Risk Indicator - métrica que señala cambios en nivel de riesgo |
| **DPIA** | Data Protection Impact Assessment |
| **Sesgo algorítmico** | Resultado sistemáticamente desfavorable para ciertos grupos |
| **Drift** | Degradación de performance de modelo por cambios en datos |
| **XAI** | Explainable AI - técnicas para hacer modelos interpretables |
| **Fairness metrics** | Métricas para medir equidad de modelos |

---

## Artículos Relacionados

- [Framework de Data Governance](./data-governance-framework.md)
- [Implementación y Revitalización](./data-governance-implementation.md)
- [Data Governance Habilitando Iniciativas](./data-governance-initiatives.md)
- [DS 115-2025-PCM](../regulations/ds-115-2025-pcm.md)
- [Ley 31814](../regulations/ley-31814.md)

---

*Última actualización: Enero 2026*
*Fuente: CDGP Body of Knowledge, NIST RMF, ISO 31000, mejores prácticas de la industria*
