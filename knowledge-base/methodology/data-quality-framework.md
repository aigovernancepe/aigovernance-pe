# Framework de Calidad de Datos

## Visión General

La calidad de datos es el fundamento de cualquier sistema de IA confiable y un pilar central de Data Governance. Este documento cubre las dimensiones de calidad, su relación con la gobernanza, y las metodologías para implementar un programa efectivo de calidad de datos.

---

## Parte 1: Calidad de Datos y su Rol en Data Governance

### La Relación Crítica

Data Quality es tanto una **práctica de Data Management** como un **objetivo de Data Governance**. Esta dualidad es fundamental:

- **Como práctica de Data Management:** Involucra las actividades técnicas y operativas para medir, monitorear y mejorar la calidad de los datos
- **Como objetivo de Data Governance:** La organización debe definir QUÉ significa "calidad" para sus datos y establecer políticas para alcanzarla

### El Principio GIGO (Garbage In, Garbage Out)

Este principio es especialmente crítico para sistemas de IA:
- Decisiones sesgadas por datos de mala calidad
- Modelos imprecisos que no reflejan la realidad
- Incapacidad de explicar resultados (requerido por DS 115-2025-PCM)
- Incumplimiento regulatorio
- Pérdida de confianza de usuarios y reguladores

### Data Quality como Objetivo de Governance

#### Definir "Fit for Purpose"
El concepto central de calidad de datos es que los datos sean "aptos para su propósito previsto" (fit for purpose). Esto significa que:

1. **No existe calidad absoluta:** Lo que es "buena calidad" depende del uso
2. **El negocio define los umbrales:** IT implementa, pero el negocio decide qué es aceptable
3. **El contexto importa:** Datos perfectos para un uso pueden ser inadecuados para otro

**Ejemplo en scoring crediticio:**
- Para pre-aprobación: 90% completitud puede ser aceptable
- Para aprobación final: 99.5% completitud es necesaria
- Para auditoría regulatoria: 100% completitud es obligatoria

#### El Rol del Data Owner en Calidad

El Data Owner es responsable de:
- Definir qué significa "calidad" para su dominio
- Establecer umbrales aceptables
- Priorizar esfuerzos de remediación
- Aprobar excepciones
- Responder por la calidad ante el Data Governance Council

#### El Rol del Data Steward en Calidad

El Data Steward es responsable de:
- Monitorear métricas de calidad diariamente
- Investigar causas raíz de problemas
- Coordinar remediación con IT
- Documentar reglas de calidad
- Reportar al Data Owner

---

## Parte 2: Dimensiones de Calidad de Datos

### Las Seis Dimensiones Fundamentales

#### 1. Completitud (Completeness)
**Definición:** Grado en que todos los datos requeridos están presentes.

**Métricas:**
- % de campos obligatorios poblados
- % de registros completos
- Conteo de valores nulos/vacíos

**Ejemplo en scoring crediticio:**
- Ingreso del cliente debe estar presente
- Historial crediticio debe tener mínimo N registros
- Dirección de domicilio no debe estar vacía

**Causas comunes de problemas:**
- Campos opcionales mal diseñados
- Procesos de captura incompletos
- Integraciones que no validan

#### 2. Exactitud (Accuracy)
**Definición:** Grado en que los datos reflejan correctamente la realidad del mundo real.

**Métricas:**
- % de coincidencia con fuente autoritativa
- Tasa de errores detectados
- Validación cruzada con fuentes externas

**Ejemplo:**
- Dirección del cliente coincide con RENIEC
- Monto de transacción coincide con sistema core
- Fecha de nacimiento es la real del documento

**Causas comunes de problemas:**
- Error de captura manual
- Datos desactualizados
- Fuentes conflictivas

#### 3. Consistencia (Consistency)
**Definición:** Grado en que los datos son coherentes entre diferentes sistemas y a lo largo del tiempo.

**Métricas:**
- % de coincidencia entre sistemas
- Detección de contradicciones
- Consistencia temporal

**Ejemplo:**
- Saldo en sistema core = saldo en data warehouse
- Cliente activo en CRM también activo en core
- Estado civil consistente en todos los sistemas

**Causas comunes de problemas:**
- Múltiples fuentes de verdad
- Sincronización fallida
- Falta de master data management

#### 4. Unicidad (Uniqueness)
**Definición:** Ausencia de duplicados no deseados en los datos.

**Métricas:**
- Conteo de duplicados
- Tasa de deduplicación
- % de registros únicos

**Ejemplo:**
- Un cliente no debe aparecer múltiples veces
- Una transacción tiene un ID único
- Un producto no se repite en el catálogo

**Causas comunes de problemas:**
- Múltiples puntos de entrada
- Falta de validación de existencia
- Fusiones de sistemas

#### 5. Oportunidad/Actualidad (Timeliness/Currency)
**Definición:** Datos disponibles cuando se necesitan y suficientemente actuales para su propósito.

**Métricas:**
- Latencia de datos (tiempo desde evento hasta disponibilidad)
- Frecuencia de actualización
- Edad promedio de datos

**Ejemplo:**
- Datos de scoring no mayores a 24 horas
- Información de riesgo actualizada diariamente
- Saldos en tiempo real para operaciones críticas

**Causas comunes de problemas:**
- Procesos batch vs. requisitos real-time
- Cadenas de integración lentas
- Falta de triggers de actualización

#### 6. Validez (Validity)
**Definición:** Datos conformes a formatos, rangos y reglas de negocio definidas.

**Métricas:**
- % de datos que cumplen formato
- Valores dentro de rangos aceptables
- Cumplimiento de reglas de negocio

**Ejemplo:**
- DNI tiene 8 dígitos
- Monto de crédito > 0
- Fecha de nacimiento < fecha actual
- Correo electrónico tiene formato válido

**Causas comunes de problemas:**
- Validación insuficiente en entrada
- Cambios de reglas no propagados
- Datos legacy sin migración

### Dimensiones Adicionales

Dependiendo del contexto, otras dimensiones pueden ser relevantes:

| Dimensión | Definición | Cuándo es crítica |
|-----------|------------|-------------------|
| **Integridad referencial** | Relaciones entre datos son válidas | Data warehouses, reportes |
| **Accesibilidad** | Datos disponibles para quienes los necesitan | Self-service analytics |
| **Conformidad** | Datos cumplen estándares externos | Reportes regulatorios |
| **Confianza** | Usuarios confían en los datos | Adopción de BI/Analytics |

---

## Parte 3: Framework de Implementación

### Paso 1: Identificar Datos Críticos

**Preguntas clave:**
- ¿Qué datos alimentan sistemas de IA?
- ¿Qué datos impactan decisiones de negocio?
- ¿Qué datos son regulados?
- ¿Qué datos afectan al cliente?

**Priorización recomendada:**
1. Datos de entrada a modelos de IA de alto riesgo (scoring crediticio)
2. Datos reportados a reguladores (SBS, SMV)
3. Datos de clientes (PII)
4. Datos financieros

### Paso 2: Definir Reglas de Calidad

Por cada dato crítico, definir:
- Dimensiones relevantes
- Umbrales aceptables
- Método de validación
- Frecuencia de chequeo
- Responsable

**Ejemplo de regla documentada:**
```
Dato: Ingreso mensual del cliente
Dominio: Clientes
Data Owner: Gerente de Banca Personal
Dimensión: Validez
Regla: Ingreso >= 0 AND Ingreso <= 10,000,000
Umbral: 99.5% de registros deben cumplir
Frecuencia: Diaria
Acción si falla: Alerta a Data Steward, escalamiento si >0.5% de fallas
```

### Paso 3: Implementar Monitoreo

**Componentes del monitoreo:**
- Validaciones automatizadas
- Dashboard de calidad
- Sistema de alertas
- Proceso de escalamiento
- Registro de incidentes

**Frecuencia recomendada:**
| Tipo de dato | Frecuencia de monitoreo |
|--------------|------------------------|
| Transaccional crítico | Real-time o cada hora |
| Maestros (clientes, productos) | Diaria |
| Reportes regulatorios | Pre-cierre (según calendario) |
| Data warehouse | Post-carga de ETL |

### Paso 4: Proceso de Remediación

**Flujo de remediación:**
1. **Detección:** Alerta automática o reporte manual
2. **Registro:** Crear ticket en sistema de gestión
3. **Clasificación:** Severidad y urgencia
4. **Análisis:** Determinar causa raíz
5. **Remediación:** Corregir datos y/o proceso
6. **Verificación:** Confirmar corrección
7. **Prevención:** Implementar control para evitar recurrencia
8. **Documentación:** Registrar lecciones aprendidas

**SLAs de remediación sugeridos:**
| Severidad | Descripción | SLA |
|-----------|-------------|-----|
| Crítica | Impacto en decisiones de crédito o regulatorio | 4 horas |
| Alta | Impacto en reportes de gestión | 24 horas |
| Media | Impacto en eficiencia operativa | 72 horas |
| Baja | Sin impacto inmediato | 1 semana |

### Paso 5: Mejora Continua

- Revisar reglas periódicamente (trimestral)
- Ajustar umbrales según comportamiento real
- Agregar nuevas validaciones según necesidad
- Documentar lecciones aprendidas
- Benchmark contra industria

---

## Parte 4: Métricas y KPIs de Calidad

### Score de Calidad General

**Fórmula:**
```
Score = Σ (Peso_dimensión × Score_dimensión) / Σ Pesos
```

**Ejemplo de cálculo:**
| Dimensión | Peso | Score | Contribución |
|-----------|------|-------|--------------|
| Completitud | 20% | 95% | 19.0 |
| Exactitud | 25% | 92% | 23.0 |
| Consistencia | 20% | 88% | 17.6 |
| Unicidad | 10% | 99% | 9.9 |
| Oportunidad | 15% | 97% | 14.55 |
| Validez | 10% | 96% | 9.6 |
| **Total** | **100%** | - | **93.65%** |

### Umbrales Recomendados

| Nivel | Score | Interpretación | Acción |
|-------|-------|----------------|--------|
| Excelente | > 95% | Datos listos para IA de alto riesgo | Mantener |
| Bueno | 90-95% | Aceptable para la mayoría de usos | Mejorar selectivamente |
| Regular | 80-90% | Requiere mejora antes de usar en IA | Plan de remediación |
| Deficiente | < 80% | No apto para decisiones automatizadas | Acción urgente |

### Dashboard de Calidad

#### Vista Ejecutiva
- Score general de la organización
- Tendencia últimos 12 meses
- Top 5 issues críticos
- Dominios con mayor riesgo

#### Vista por Dominio
- Score por dimensión
- Issues abiertos vs. cerrados
- Tendencia mensual
- Comparación con umbral

#### Vista Operativa
- Detalle de reglas fallidas
- Registros afectados
- Responsable asignado
- Estado de remediación

---

## Parte 5: Calidad de Datos para IA

### Requisitos Específicos para Sistemas de IA

#### Para Datos de Entrenamiento
- **Representatividad:** Datos deben representar la población objetivo
- **Balance:** Distribución adecuada de clases/segmentos
- **Ausencia de sesgos:** Sin sesgos históricos que perpetúen discriminación
- **Documentación:** Fuente, fecha, transformaciones aplicadas
- **Versionamiento:** Control de versiones de datasets

#### Para Datos de Inferencia
- **Misma distribución:** Consistente con datos de entrenamiento
- **Validación previa:** Chequeo antes de pasar al modelo
- **Monitoreo de drift:** Detectar cambios en distribución
- **Logging:** Registro de entrada/salida para auditoría

### Detección de Sesgos

Alineado con el principio de no discriminación de la Ley 31814:

**Análisis requeridos:**
- Distribución por grupos protegidos (género, edad, ubicación)
- Comparación de outcomes por segmentos
- Métricas de fairness:
  - **Demographic parity:** Misma tasa de aprobación por grupo
  - **Equalized odds:** Mismas tasas de error por grupo
  - **Predictive parity:** Mismo valor predictivo por grupo

### Data Lineage para Modelos

Documentar para cada modelo:
- Fuentes de datos de entrenamiento
- Transformaciones aplicadas
- Features utilizadas
- Fecha de entrenamiento
- Versión de datos usada
- Métricas de calidad al momento del entrenamiento

Esto es obligatorio según DS 115-2025-PCM para transparencia algorítmica.

---

## Parte 6: Herramientas de Calidad de Datos

### Herramientas Enterprise

| Herramienta | Fortaleza | Consideraciones |
|-------------|-----------|-----------------|
| Informatica Data Quality | Funcionalidad completa | Costo alto |
| Talend Data Quality | Integración con ETL | Requiere expertise |
| IBM InfoSphere | Enterprise-grade | Complejidad |
| Microsoft Purview | Integración Azure | Ecosistema Microsoft |

### Herramientas Open Source

#### Great Expectations
- Framework de validación de datos en Python
- Definición de expectations como código
- Integración con pipelines de datos
- Documentación automática

#### dbt (data build tool)
- Tests de datos integrados
- Documentación automática
- Lineage visual
- CI/CD para datos

#### Apache Griffin
- Data quality at scale
- Streaming y batch
- Anomaly detection

#### Soda SQL
- Checks de calidad como YAML
- Integración con warehouses
- Alertas configurables

### Selección de Herramienta

**Considerar:**
1. Volumen de datos a validar
2. Frecuencia de validación requerida
3. Integración con stack existente
4. Capacidades del equipo
5. Presupuesto disponible
6. Requisitos de reporting

---

## Parte 7: Integración con Regulación

### Requisitos de DS 115-2025-PCM

| Requisito Regulatorio | Implicación para Calidad |
|-----------------------|--------------------------|
| Transparencia algorítmica | Documentar calidad de datos de entrenamiento |
| Supervisión humana | Proceso de revisión de issues críticos |
| No discriminación | Monitoreo de sesgo en datos |
| Evaluación de impacto | Incluir assessment de calidad |

### Requisitos de SBS

Para instituciones financieras supervisadas:
- Datos para cálculo de provisiones deben ser exactos
- Información de centrales de riesgo debe ser oportuna
- Datos de clientes deben ser completos
- Auditoría de calidad de datos crediticios

---

## Artículos Relacionados

- [Framework de Data Governance](./data-governance-framework.md)
- [Fundamentos de Data Governance (CDGP)](./data-governance-fundamentals.md)
- [Gestión de Metadatos](./metadata-management.md)
- [Herramientas de Data Governance](./data-governance-toolkit.md)
- [Evaluación de Sesgo Algorítmico](../services/algorithmic-bias-assessment.md)
- [DS 115-2025-PCM](../regulations/ds-115-2025-pcm.md)

---

*Última actualización: Enero 2026*
*Fuente: DAMA DMBOK, ISO 8000, Mejores Prácticas de la Industria*
