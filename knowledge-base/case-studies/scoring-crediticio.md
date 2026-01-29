# Caso de Uso: Scoring Crediticio con Data Governance

## Contexto del Caso

### Cliente
- **Tipo:** Banco mediano
- **Tamaño:** 500+ empleados
- **Ubicación:** Lima, Perú
- **Productos:** Banca retail, préstamos personales, tarjetas de crédito

### Sistema de IA
- **Nombre:** Modelo de Scoring Crediticio
- **Propósito:** Evaluar riesgo crediticio de solicitantes de préstamos
- **Volumen:** ~50,000 evaluaciones mensuales
- **Decisiones:** Aprobación/Rechazo automático + monto de línea

### Duración del Proyecto
4 meses

## Situación Inicial (Sin Data Governance)

### Problemas Identificados

#### 1. Calidad de Datos
- **Datos duplicados:** 15% de clientes con múltiples registros
- **Datos incompletos:** 25% de solicitudes sin ingreso verificado
- **Datos desactualizados:** Direcciones con más de 3 años de antigüedad
- **Inconsistencias:** Saldos en core vs. data warehouse no coincidían

#### 2. Sesgos Algorítmicos
- **Por género:** Mujeres con tasa de rechazo 8% mayor (sin justificación)
- **Por geografía:** Distritos periféricos penalizados injustamente
- **Por edad:** Jóvenes sin historial rechazados automáticamente

#### 3. Falta de Explicabilidad
- Imposible explicar a clientes por qué fueron rechazados
- Reclamos en INDECOPI sin respuesta técnica
- Auditoría interna no podía revisar decisiones

#### 4. Riesgo Regulatorio
- SBS había solicitado documentación de modelo
- No existía documentación formal
- Lineage de datos desconocido

#### 5. Impacto en Negocio
- 30% de rechazos potencialmente erróneos
- Pérdida de buenos clientes
- Mora mayor a la esperada en segmentos aprobados
- Auditorías tomaban 3+ meses

### Métricas de Línea Base
| Métrica | Valor Inicial |
|---------|---------------|
| Madurez de Governance | 1.5/5 |
| Rechazos por datos incorrectos | 30% |
| Tiempo de auditoría | 3+ meses |
| Documentación de modelo | 0% |
| Explicabilidad | Ninguna |

## Solución Implementada

### Fase 1: Assessment y Planificación (Semanas 1-2)

#### Actividades
- Entrevistas con stakeholders (Riesgos, IT, Negocio, Compliance)
- Inventario de sistemas y flujos de datos
- Evaluación de madurez de governance
- Gap analysis vs. regulación
- Desarrollo de roadmap

#### Entregables
- Diagnóstico de madurez: 1.5/5
- Inventario de 3 modelos de IA
- Roadmap priorizado
- Presentación a Directorio

### Fase 2: Governance Foundation (Semanas 3-6)

#### Estructura Organizacional
- **Data Governance Council** establecido
  - Gerente de Riesgos (Chair)
  - Gerente de IT
  - Oficial de Compliance
  - Representante de Negocio
  - Reuniones quincenales

- **Data Owners** designados
  - Datos de Clientes: Gerencia Comercial
  - Datos de Scoring: Gerencia de Riesgos
  - Datos Transaccionales: Operaciones

- **Data Stewards** nombrados
  - 3 analistas asignados part-time
  - Capacitación de 8 horas completada

#### Políticas Desarrolladas
- Política de Gobernanza de Datos (aprobada por Directorio)
- Política de Calidad de Datos
- Procedimiento de Acceso a Datos
- Procedimiento de Gestión de Issues

### Fase 3: Data Quality para Scoring (Semanas 7-12)

#### Framework de Calidad Implementado

**Dimensiones monitoreadas:**
1. **Completitud:** % de campos obligatorios poblados
2. **Exactitud:** Validación cruzada con RENIEC
3. **Consistencia:** Core vs. data warehouse
4. **Unicidad:** Detección de duplicados
5. **Oportunidad:** Antigüedad de datos

**Reglas implementadas (ejemplo):**
```
IF ingreso_mensual IS NULL THEN flag_calidad = 'CRITICO'
IF edad < 18 OR edad > 100 THEN flag_calidad = 'ERROR'
IF dni NOT MATCH formato_reniec THEN flag_calidad = 'ERROR'
IF saldo_core != saldo_dw THEN flag_calidad = 'INCONSISTENTE'
```

**Umbrales definidos:**
| Dimensión | Umbral Mínimo | Resultado Mes 1 | Resultado Mes 3 |
|-----------|---------------|-----------------|-----------------|
| Completitud | 95% | 75% | 97% |
| Exactitud | 98% | 88% | 99% |
| Consistencia | 99% | 82% | 99.5% |
| Unicidad | 99% | 85% | 99.8% |

#### Dashboard de Calidad
- Power BI dashboard implementado
- Actualización diaria
- Alertas por email cuando umbral no se cumple
- Drill-down hasta registro individual

### Fase 4: Documentación y Lineage (Semanas 13-14)

#### Catálogo de Datos
- 150 campos documentados
- Diccionario de datos completo
- Ownership asignado a cada campo
- Clasificación de sensibilidad

#### Lineage de Datos
Documentación completa de flujo:
```
Fuentes → ETL → Data Warehouse → Feature Engineering → Modelo → Decisión
```

Cada paso documentado:
- Transformaciones aplicadas
- Validaciones en cada etapa
- Responsable
- Frecuencia de actualización

#### Documentación del Modelo
- Metodología (random forest + rules)
- Features utilizadas (25 variables)
- Proceso de entrenamiento
- Métricas de performance
- Umbrales de decisión

### Fase 5: Monitoreo de Sesgo y Fairness (Semanas 15-16)

#### Análisis de Sesgo
**Por género:**
- Tasa de aprobación hombres: 65%
- Tasa de aprobación mujeres: 57%
- Diferencia identificada: 8 puntos
- Causa raíz: Variable "antigüedad laboral" sesgada
- Acción: Reentrenar modelo sin esta variable

**Por geografía:**
- Identificados 5 distritos con penalización injustificada
- Causa: Datos históricos sesgados
- Acción: Remover código postal como feature

**Por edad:**
- Jóvenes 18-25 con 90% de rechazo
- Causa: Sin historial crediticio = automáticamente rechazados
- Acción: Implementar scoring alternativo para segmento

#### Monitoreo Continuo
- Dashboard de fairness implementado
- Alertas por desvíos significativos
- Revisión mensual obligatoria

### Fase 6: Proceso de Apelación (Semana 16)

#### Proceso Implementado
1. Cliente solicita revisión (presencial o digital)
2. Caso registrado en sistema
3. Revisión manual por analista de riesgos
4. Explicación de decisión al cliente
5. Re-evaluación si hay nuevos datos
6. Respuesta en máximo 5 días hábiles

#### Métricas
- Tiempo promedio de respuesta: 3 días
- Tasa de reversión de decisiones: 15%
- Satisfacción del cliente post-apelación: 72%

## Resultados Obtenidos

### Métricas Finales
| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Madurez de Governance | 1.5/5 | 3.8/5 | +153% |
| Rechazos por datos incorrectos | 30% | 5% | -83% |
| Tiempo de auditoría | 3+ meses | 2 semanas | -85% |
| Trazabilidad de decisiones | 0% | 100% | +100% |
| Score de calidad de datos | 65% | 97% | +49% |
| Sesgo por género | 8 puntos | 1 punto | -87% |

### Beneficios de Negocio
- **Más aprobaciones correctas:** +12% en aprobaciones sin aumento de mora
- **Menos reclamos:** -40% en reclamos a INDECOPI
- **Auditorías más rápidas:** De 3 meses a 2 semanas
- **Mejor relación con SBS:** Documentación completa disponible

### Beneficios Cualitativos
- Equipo capacitado y autónomo
- Cultura de calidad de datos emergente
- Procesos documentados y repetibles
- Base para expandir governance a otros sistemas

## Lecciones Aprendidas

### Qué Funcionó
1. Involucrar a alta dirección desde el inicio
2. Quick wins para mantener momentum
3. Dashboard visible para todos los stakeholders
4. Capacitación hands-on, no solo teórica
5. Enfoque pragmático, no perfeccionista

### Desafíos Superados
1. Resistencia inicial de IT → Mostrar valor de governance para ellos
2. Falta de ownership → Formalizar en evaluaciones de desempeño
3. Datos históricos malos → Enfoque en datos nuevos primero
4. Modelo legacy → Documentar sin reconstruir completamente

### Recomendaciones
1. Empezar con el sistema de mayor riesgo (no el más fácil)
2. No subestimar el esfuerzo de calidad de datos
3. Automatizar desde el inicio
4. Involucrar a Compliance temprano
5. Celebrar quick wins para mantener apoyo

## Aplicabilidad a Otros Casos

### Similar en Banca
- Detección de fraude
- Evaluación AML
- Pre-aprobación de productos

### Adaptable a Seguros
- Underwriting
- Claims processing
- Pricing

### Adaptable a Fintechs
- Scoring alternativo
- Decisiones de préstamo
- KYC automatizado
