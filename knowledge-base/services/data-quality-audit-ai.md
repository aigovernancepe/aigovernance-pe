# Auditoría de Calidad de Datos para IA

## Descripción del Servicio

Auditoría especializada en calidad de datos para sistemas de IA/ML, enfocada en prevención de sesgos algorítmicos y validación de datos de entrenamiento según DS 115-2025-PCM.

## Base Legal

### DS 115-2025-PCM
- **Artículo 6.e:** Prevención de sesgos algorítmicos
- **Artículo 7.h:** Validación de calidad de datos para precisión, integridad y representatividad
- **Artículo 29.c:** Auditorías obligatorias antes de implementación y durante operación
- **Artículo 9.5:** Oficial de Gobierno de Datos debe promover calidad de datos

### ISO/IEC 42001 - Controles Relevantes
- A.7.2: Datos para desarrollo
- A.7.3: Adquisición de datos
- A.7.4: Calidad de datos
- A.7.5: Proveniencia de datos
- A.7.6: Preparación de datos

## Duración
2 semanas

## Público Objetivo
- Organizaciones con modelos de ML en producción
- Empresas desarrollando nuevos sistemas de IA
- Instituciones preparando compliance regulatorio
- Data Science teams que necesitan validación independiente

## Diferencia con Data Governance Implementation

| Aspecto | DG Implementation | Data Quality Audit para IA |
|---------|-------------------|---------------------------|
| Enfoque | Framework completo de governance | Específico para datos de IA |
| Alcance | Toda la organización | Datos de sistemas de IA |
| Duración | 3 meses | 2 semanas |
| Entregable | Sistema operativo | Informe de auditoría |
| Propósito | Establecer governance | Validar calidad para IA |

## Entregables

### 1. Informe de Auditoría de Calidad de Datos

#### Sección A: Inventario de Datasets
- Datasets de entrenamiento auditados
- Datasets de validación/testing
- Datos operacionales en producción
- Volúmenes y características
- Fuentes de datos

#### Sección B: Evaluación por Dimensión de Calidad

| Dimensión | Definición | Métrica |
|-----------|-----------|---------|
| **Completitud** | % de campos obligatorios poblados | Target: >95% |
| **Exactitud** | Datos correctos vs. fuente autorizada | Target: >98% |
| **Consistencia** | Coherencia entre sistemas | Target: >99% |
| **Unicidad** | Ausencia de duplicados | Target: >99% |
| **Oportunidad** | Datos actualizados | Target: <30 días antigüedad |
| **Validez** | Conformidad con reglas de negocio | Target: >99% |
| **Representatividad** | Refleja población real | Específico por caso |

#### Sección C: Análisis de Sesgos en Datos
- Distribución por variables protegidas (género, edad, geografía)
- Comparación con población objetivo
- Identificación de sub-representación
- Análisis de correlaciones peligrosas
- Recomendaciones de balanceo

#### Sección D: Evaluación de Proveniencia
- Trazabilidad de origen de datos
- Cadena de transformaciones
- Documentación de lineage
- Cumplimiento de derechos de uso
- Verificación de consentimiento (si aplica PII)

#### Sección E: Hallazgos y Clasificación
- Findings críticos (impacto en modelo)
- Findings mayores (riesgo de sesgo)
- Findings menores (mejoras recomendadas)
- Observaciones (buenas prácticas faltantes)

#### Sección F: Plan de Remediación
- Acciones correctivas priorizadas
- Responsables sugeridos
- Plazos recomendados
- Métricas de éxito

### 2. Scorecard de Calidad por Dataset

Resumen ejecutivo visual:
```
Dataset: scoring_training_v3.2
┌─────────────────────────────────────────┐
│ Completitud    ████████████░░ 85%  ⚠️   │
│ Exactitud      █████████████░░ 92%  ⚠️   │
│ Consistencia   ███████████████ 99%  ✓   │
│ Unicidad       ███████████████ 98%  ✓   │
│ Oportunidad    ████████████░░░ 78%  ⚠️   │
│ Representativ. ██████████░░░░░ 72%  ❌   │
└─────────────────────────────────────────┐
Score Global: 87/100 - REQUIERE ATENCIÓN
```

### 3. Análisis de Sesgo Detallado

#### Por Variable Protegida
| Variable | Distribución Dataset | Distribución Población | Gap | Riesgo |
|----------|---------------------|------------------------|-----|--------|
| Género M | 68% | 49% | +19% | Alto |
| Género F | 32% | 51% | -19% | Alto |
| Edad <25 | 8% | 22% | -14% | Medio |
| Lima | 72% | 32% | +40% | Crítico |

#### Recomendaciones de Mitigación
- Técnicas de re-balanceo (oversampling, undersampling)
- Ajuste de pesos en entrenamiento
- Recolección de datos adicionales
- Variables proxy a eliminar

### 4. Checklist de Cumplimiento DS 115-2025-PCM

| Requisito | Estado | Evidencia | Acción |
|-----------|--------|-----------|--------|
| Datos precisos | Parcial | Score 92% | Mejorar validación |
| Datos íntegros | Cumple | Logs ETL | Mantener |
| Datos representativos | No cumple | Gap análisis | Rebalancear |
| Prevención de sesgo | Parcial | Análisis inicial | Implementar monitoreo |

### 5. Roadmap de Mejora de Calidad

Cronograma priorizado:
- **Inmediato (0-30 días):** Corrección de datos críticos
- **Corto plazo (1-3 meses):** Implementación de controles
- **Mediano plazo (3-6 meses):** Automatización de calidad
- **Continuo:** Monitoreo y mejora

## Metodología

### Semana 1: Análisis

#### Días 1-2: Preparación
- Kick-off y definición de alcance
- Identificación de datasets a auditar
- Recopilación de documentación
- Definición de reglas de calidad

#### Días 3-5: Evaluación Técnica
- Perfilado de datos (data profiling)
- Aplicación de reglas de calidad
- Análisis de distribuciones
- Identificación de anomalías
- Testing de sesgo estadístico

### Semana 2: Documentación y Entrega

#### Días 6-8: Análisis Profundo
- Investigación de hallazgos
- Análisis de causa raíz
- Evaluación de impacto
- Desarrollo de recomendaciones

#### Días 9-10: Informe y Presentación
- Elaboración de informe completo
- Preparación de scorecards
- Presentación a stakeholders
- Sesión de Q&A

## Herramientas Utilizadas

### Para Data Profiling
- Great Expectations (open source)
- Pandas Profiling
- Apache Griffin
- Herramientas propias del cliente

### Para Análisis de Sesgo
- Fairlearn (Microsoft)
- AI Fairness 360 (IBM)
- What-If Tool (Google)
- Análisis estadístico custom

### Para Documentación
- Templates estandarizados
- Dashboards de calidad
- Reportes automatizados

## Métricas de Calidad Específicas para IA

### Calidad de Datos de Entrenamiento
- **Label quality:** Precisión de etiquetas
- **Feature completeness:** Completitud de features
- **Data drift:** Cambio en distribuciones
- **Concept drift:** Cambio en relación target-features

### Calidad de Datos de Producción
- **Input validation:** Datos de entrada válidos
- **Missing data handling:** Gestión de nulos
- **Outlier detection:** Identificación de anomalías
- **Consistency with training:** Coherencia con entrenamiento

## Requisitos del Cliente

### Antes de la Auditoría
- Acceso a datasets (read-only)
- Documentación de esquemas
- Descripción de pipeline de datos
- Reglas de negocio documentadas
- Información sobre población objetivo

### Durante la Auditoría
- Disponibilidad de equipos técnicos
- Acceso a logs de transformación
- Clarificación de reglas de negocio
- Contexto sobre casos de uso

## Precio Referencial
- 1-2 datasets: USD 5,000-7,000
- 3-5 datasets: USD 8,000-12,000
- 6+ datasets: Precio por volumen

## Frecuencia Recomendada

### Auditoría Completa
- Antes de puesta en producción
- Anualmente para sistemas críticos
- Post-cambios significativos en datos

### Monitoreo Continuo
- Métricas de calidad: Diario
- Análisis de sesgo: Mensual
- Reportes ejecutivos: Trimestral

## Valor Agregado

### Para Compliance
- Evidencia de validación de datos para DS 115-2025-PCM
- Documentación para auditorías regulatorias
- Demostración de prevención de sesgos

### Para el Negocio
- Mejora de performance de modelos
- Reducción de decisiones incorrectas
- Menor exposición a reclamos
- Datos confiables para decisiones

### Para Data Science
- Datasets validados y documentados
- Identificación de áreas de mejora
- Baseline de calidad establecido
- Mejores prácticas implementadas
