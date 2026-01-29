# Evaluación y Remediación de Sesgo Algorítmico

## Descripción del Servicio

Evaluación especializada para detectar, medir y remediar sesgos en sistemas de IA/ML, asegurando fairness (equidad) en decisiones automatizadas según DS 115-2025-PCM.

## Base Legal

### DS 115-2025-PCM
- **Artículo 6.e:** Prevención de sesgos algorítmicos
- **Artículo 6.c:** No discriminación en uso de IA
- **Artículo 7.d:** Supervisión humana para garantizar no discriminación
- **Artículo 7.h:** Validación de precisión y representatividad de datos

### Variables Protegidas en Perú
Según Constitución y normativa anti-discriminación:
- Género/Sexo
- Raza/Etnia
- Edad
- Religión
- Opinión política
- Condición económica
- Discapacidad
- Orientación sexual
- Origen geográfico
- Idioma materno

## Duración
2-4 semanas (dependiendo de complejidad del sistema)

## Público Objetivo
- Bancos con modelos de scoring crediticio
- Aseguradoras con pricing y underwriting automatizado
- Fintechs con decisiones de préstamo
- Empresas con sistemas de selección de personal
- Plataformas con algoritmos de recomendación

## Tipos de Sesgo Evaluados

### 1. Sesgo en Datos (Data Bias)
| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **Representación** | Datos no reflejan población | Dataset 70% hombres para producto unisex |
| **Histórico** | Datos reflejan discriminación pasada | Menos aprobaciones históricas a mujeres |
| **Medición** | Variables medidas de forma desigual | Ingreso formal vs. informal |
| **Selección** | Muestra sesgada | Solo clientes actuales, no rechazados |
| **Agregación** | Agrupación inapropiada | Promediar sin segmentar |

### 2. Sesgo en Algoritmo (Algorithmic Bias)
| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **Proxy** | Variable correlaciona con protegida | Código postal como proxy de raza |
| **Amplificación** | Modelo amplifica sesgos pequeños | Feedback loop refuerza patrón |
| **Optimización** | Objetivo optimiza contra grupo | Maximizar precisión general perjudica minoría |
| **Interacción** | Combinación de features crea sesgo | Edad × género genera discriminación |

### 3. Sesgo en Implementación (Deployment Bias)
| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **Drift** | Cambio en población vs. entrenamiento | Nuevos segmentos no representados |
| **Uso** | Aplicación fuera de contexto diseñado | Modelo urbano aplicado a rural |
| **Interpretación** | Mal uso de outputs | Usar score como absoluto sin contexto |

## Entregables

### 1. Informe de Evaluación de Sesgo

#### Sección A: Análisis de Datos
- Distribución de variables protegidas en training
- Comparación con población objetivo
- Identificación de gaps de representación
- Análisis de variables proxy

#### Sección B: Métricas de Fairness

**Métricas Evaluadas:**

| Métrica | Definición | Fórmula | Target |
|---------|-----------|---------|--------|
| **Demographic Parity** | Tasa de decisión positiva igual entre grupos | P(Y=1\|A=0) = P(Y=1\|A=1) | Ratio 0.8-1.25 |
| **Equalized Odds** | TPR y FPR iguales entre grupos | TPR₀ = TPR₁, FPR₀ = FPR₁ | Ratio 0.8-1.25 |
| **Equal Opportunity** | TPR igual entre grupos | TPR₀ = TPR₁ | Ratio 0.8-1.25 |
| **Predictive Parity** | PPV igual entre grupos | PPV₀ = PPV₁ | Ratio 0.8-1.25 |
| **Calibration** | Scores calibrados por grupo | E[Y\|S=s,A] igual | Desviación <5% |

**Ejemplo de Resultados:**
```
Variable Protegida: Género
┌───────────────────────────────────────────────────┐
│ Métrica              │ Hombres │ Mujeres │ Ratio │
├───────────────────────────────────────────────────┤
│ Tasa de Aprobación   │ 65%     │ 57%     │ 0.88  │ ⚠️
│ True Positive Rate   │ 72%     │ 68%     │ 0.94  │ ✓
│ False Positive Rate  │ 12%     │ 18%     │ 1.50  │ ❌
│ Precision            │ 85%     │ 79%     │ 0.93  │ ✓
└───────────────────────────────────────────────────┘
Hallazgo: FPR significativamente mayor para mujeres
```

#### Sección C: Análisis de Causa Raíz
- Variables que más contribuyen al sesgo
- Interacciones problemáticas
- Patrones en datos históricos
- Diseño de features sesgado

#### Sección D: Impacto de Negocio
- Número de decisiones afectadas
- Impacto financiero estimado
- Riesgo regulatorio
- Riesgo reputacional

### 2. Plan de Remediación

#### Estrategias de Mitigación

**Pre-procesamiento (en datos):**
| Técnica | Descripción | Cuándo Usar |
|---------|-------------|-------------|
| **Re-sampling** | Balancear representación | Sub-representación clara |
| **Re-weighting** | Ajustar pesos por grupo | No se puede modificar datos |
| **Disparate Impact Removal** | Transformar features | Proxies identificados |
| **Data Augmentation** | Generar datos sintéticos | Datos escasos de grupo |

**In-procesamiento (en algoritmo):**
| Técnica | Descripción | Cuándo Usar |
|---------|-------------|-------------|
| **Fairness Constraints** | Restricciones en optimización | Trade-off aceptable |
| **Adversarial Debiasing** | Modelo no puede predecir grupo | Sesgo estructural |
| **Regularization** | Penalizar disparidad | Ajuste fino |

**Post-procesamiento (en outputs):**
| Técnica | Descripción | Cuándo Usar |
|---------|-------------|-------------|
| **Threshold Adjustment** | Umbrales diferentes por grupo | Calibración necesaria |
| **Reject Option** | Revisión humana en zona gris | Decisiones de alto impacto |
| **Equalized Odds Post** | Ajustar predicciones | Modelo no modificable |

### 3. Dashboard de Monitoreo de Fairness

Especificaciones para implementación:
- Métricas de fairness en tiempo real
- Alertas por desviación
- Drill-down por variable protegida
- Tendencias históricas
- Comparación con baselines

### 4. Política de Fairness

Documento para aprobación por governance:
- Definición de fairness adoptada
- Métricas y umbrales oficiales
- Proceso de evaluación
- Roles y responsabilidades
- Frecuencia de revisión
- Proceso de escalamiento

### 5. Reporte para Regulador

Formato estructurado:
- Metodología de evaluación
- Resultados por variable protegida
- Acciones correctivas implementadas
- Plan de monitoreo continuo
- Compromisos de mejora

## Metodología

### Fase 1: Preparación (Días 1-3)
- Definición de variables protegidas relevantes
- Identificación de fuentes de datos demográficos
- Recopilación de datos de modelo
- Definición de métricas de fairness

### Fase 2: Análisis de Datos (Días 4-7)
- Análisis de representación en training
- Identificación de variables proxy
- Correlación con variables protegidas
- Análisis de datos históricos

### Fase 3: Evaluación de Modelo (Días 8-12)
- Cálculo de métricas de fairness
- Testing por subgrupos
- Análisis de interseccionalidad
- Evaluación de trade-offs

### Fase 4: Remediación (Días 13-18)
- Diseño de estrategias de mitigación
- Implementación de técnicas seleccionadas
- Re-evaluación de métricas
- Validación de mejoras

### Fase 5: Documentación (Días 19-20)
- Elaboración de informes
- Preparación de dashboard
- Desarrollo de política
- Presentación de resultados

## Trade-offs en Fairness

### Fairness vs. Performance
```
┌────────────────────────────────────────┐
│         Trade-off típico               │
│                                        │
│  Accuracy │ █████████████████ 95%      │
│  (antes)  │                            │
│                                        │
│  Accuracy │ ███████████████░░ 91%      │
│  (después)│                            │
│                                        │
│  Fairness │ █████████░░░░░░░░ 0.72     │
│  (antes)  │        (fuera de rango)    │
│                                        │
│  Fairness │ █████████████████ 0.95     │
│  (después)│        (dentro de rango)   │
└────────────────────────────────────────┘
```

### Consideraciones
- No existe fairness "perfecta" (teorema de imposibilidad)
- Diferentes métricas pueden conflictuar
- Decisión de negocio sobre trade-offs
- Documentar justificación de elecciones

## Herramientas Utilizadas

### Open Source
- **Fairlearn** (Microsoft): Evaluación y mitigación
- **AI Fairness 360** (IBM): Suite completa
- **Aequitas** (U. Chicago): Auditoría de sesgos
- **What-If Tool** (Google): Exploración interactiva
- **Themis-ML**: Testing de fairness

### Comerciales
- **Arthur AI**: Monitoreo en producción
- **Fiddler AI**: Explicabilidad y fairness
- **Weights & Biases**: MLOps con fairness

## Requisitos del Cliente

### Antes de Iniciar
- Acceso a datos de entrenamiento
- Predicciones del modelo
- Datos demográficos (o proxies)
- Documentación del modelo
- Definición de población objetivo

### Durante el Proyecto
- Disponibilidad de Data Scientists
- Acceso a ambiente de desarrollo
- Capacidad de re-entrenar modelo (si aplica)
- Aprobación de stakeholders para trade-offs

## Precio Referencial
- Evaluación básica (1 variable protegida): USD 6,000-8,000
- Evaluación completa (3+ variables): USD 10,000-15,000
- Con remediación incluida: USD 15,000-25,000
- Monitoreo continuo: Retainer mensual

## Frecuencia Recomendada

### Evaluación Completa
- Antes de puesta en producción
- Anualmente
- Post-cambios significativos en modelo o datos

### Monitoreo Continuo
- Métricas de fairness: Semanal
- Reportes ejecutivos: Mensual
- Auditoría profunda: Trimestral

## Casos de Éxito Típicos

### Scoring Crediticio
- **Antes:** Tasa de aprobación mujeres 57% vs. hombres 65%
- **Después:** Tasa equilibrada 62% ambos géneros
- **Impacto:** +15% clientes mujeres sin aumento de mora

### Underwriting Seguros
- **Antes:** Prima 18% mayor para ciertos distritos
- **Después:** Prima basada en riesgo real, no geografía
- **Impacto:** Reducción de reclamos por discriminación

## Valor Agregado

### Para Compliance
- Cumplimiento DS 115-2025-PCM Art. 6.e
- Evidencia de due diligence
- Documentación para reguladores

### Para el Negocio
- Acceso a nuevos segmentos
- Reducción de reclamos
- Protección reputacional
- Decisiones más justas

### Para la Sociedad
- Inclusión financiera
- Reducción de discriminación
- Confianza en IA
