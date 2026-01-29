# Framework de Calidad de Datos

## Importancia para IA

La calidad de datos es el fundamento de cualquier sistema de IA confiable. El principio "garbage in, garbage out" aplica especialmente a modelos de machine learning.

**Impactos de mala calidad de datos en IA:**
- Decisiones sesgadas
- Modelos imprecisos
- Incapacidad de explicar resultados
- Incumplimiento regulatorio
- Pérdida de confianza de usuarios

## Dimensiones de Calidad de Datos

### 1. Completitud (Completeness)
**Definición:** Grado en que todos los datos requeridos están presentes.

**Métricas:**
- % de campos obligatorios poblados
- % de registros completos
- Conteo de valores nulos

**Ejemplo en scoring crediticio:**
- Ingreso del cliente debe estar presente
- Historial crediticio debe tener mínimo N registros

### 2. Exactitud (Accuracy)
**Definición:** Grado en que los datos reflejan correctamente la realidad.

**Métricas:**
- % de coincidencia con fuente autoritativa
- Tasa de errores detectados
- Validación cruzada con fuentes externas

**Ejemplo:**
- Dirección del cliente coincide con RENIEC
- Monto de transacción coincide con sistema core

### 3. Consistencia (Consistency)
**Definición:** Grado en que los datos son coherentes entre diferentes sistemas y a lo largo del tiempo.

**Métricas:**
- % de coincidencia entre sistemas
- Detección de contradicciones
- Consistencia temporal

**Ejemplo:**
- Saldo en sistema core = saldo en data warehouse
- Cliente activo en CRM también activo en core

### 4. Unicidad (Uniqueness)
**Definición:** Ausencia de duplicados no deseados.

**Métricas:**
- Conteo de duplicados
- Tasa de deduplicación
- % de registros únicos

**Ejemplo:**
- Un cliente no debe aparecer múltiples veces
- Una transacción tiene un ID único

### 5. Oportunidad (Timeliness)
**Definición:** Datos disponibles cuando se necesitan y suficientemente actuales.

**Métricas:**
- Latencia de datos
- Frecuencia de actualización
- Edad promedio de datos

**Ejemplo:**
- Datos de scoring no mayores a 24 horas
- Información de riesgo actualizada diariamente

### 6. Validez (Validity)
**Definición:** Datos conformes a formatos, rangos y reglas de negocio definidas.

**Métricas:**
- % de datos que cumplen formato
- Valores dentro de rangos aceptables
- Cumplimiento de reglas de negocio

**Ejemplo:**
- DNI tiene 8 dígitos
- Monto de crédito > 0
- Fecha de nacimiento < fecha actual

## Framework de Implementación

### Paso 1: Identificar Datos Críticos
- ¿Qué datos alimentan sistemas de IA?
- ¿Qué datos impactan decisiones de negocio?
- ¿Qué datos son regulados?

**Priorización:**
1. Datos de entrada a modelos de IA de alto riesgo
2. Datos reportados a reguladores
3. Datos de clientes (PII)
4. Datos financieros

### Paso 2: Definir Reglas de Calidad
Por cada dato crítico, definir:
- Dimensiones relevantes
- Umbrales aceptables
- Método de validación
- Frecuencia de chequeo

**Ejemplo de regla:**
```
Dato: Ingreso mensual del cliente
Dimensión: Validez
Regla: Ingreso >= 0 AND Ingreso <= 10,000,000
Umbral: 99.5% de registros deben cumplir
Frecuencia: Diaria
```

### Paso 3: Implementar Monitoreo
- Automatizar validaciones
- Configurar alertas
- Crear dashboard de calidad
- Definir proceso de escalamiento

### Paso 4: Proceso de Remediación
1. Detección de issue
2. Registro y clasificación
3. Análisis de causa raíz
4. Remediación
5. Verificación
6. Prevención futura

### Paso 5: Mejora Continua
- Revisar reglas periódicamente
- Ajustar umbrales según comportamiento
- Agregar nuevas validaciones
- Documentar lecciones aprendidas

## KPIs de Calidad de Datos

### Score de Calidad General
Promedio ponderado de todas las dimensiones por dominio.

**Fórmula:**
```
Score = Σ (Peso_dimensión × Score_dimensión) / Σ Pesos
```

**Ejemplo:**
- Completitud (20%): 95%
- Exactitud (25%): 92%
- Consistencia (20%): 88%
- Unicidad (10%): 99%
- Oportunidad (15%): 97%
- Validez (10%): 96%

**Score = 94.1%**

### Umbrales Recomendados

| Nivel | Score | Interpretación |
|-------|-------|----------------|
| Excelente | > 95% | Datos listos para IA de alto riesgo |
| Bueno | 90-95% | Aceptable para la mayoría de usos |
| Regular | 80-90% | Requiere mejora antes de usar en IA |
| Deficiente | < 80% | No apto para decisiones automatizadas |

## Calidad de Datos para IA

### Requisitos Específicos

#### Para Datos de Entrenamiento
- Representatividad de la población
- Balance de clases
- Ausencia de sesgos históricos
- Documentación de fuente y fecha
- Versionamiento

#### Para Datos de Inferencia
- Misma distribución que entrenamiento
- Validación antes de pasar al modelo
- Monitoreo de data drift
- Logs de entrada/salida

### Detección de Sesgos
- Análisis de distribución por grupos protegidos
- Comparación de outcomes por segmentos
- Métricas de fairness:
  - Demographic parity
  - Equalized odds
  - Predictive parity

### Data Lineage para Modelos
Documentar para cada modelo:
- Fuentes de datos de entrenamiento
- Transformaciones aplicadas
- Features utilizadas
- Fecha de entrenamiento
- Versión de datos usada

## Dashboard de Calidad

### Vistas Recomendadas

#### Vista Ejecutiva
- Score general de la organización
- Tendencia últimos 12 meses
- Top 5 issues críticos
- Dominios con mayor riesgo

#### Vista por Dominio
- Score por dimensión
- Issues abiertos
- Tendencia
- Comparación con umbral

#### Vista Operativa
- Detalle de reglas fallidas
- Registros afectados
- Responsable
- Estado de remediación

## Herramientas Open Source

### Great Expectations
- Framework de validación de datos en Python
- Definición de expectations como código
- Integración con pipelines de datos
- Documentación automática

### dbt (data build tool)
- Tests de datos integrados
- Documentación automática
- Lineage visual
- CI/CD para datos

### Apache Griffin
- Data quality at scale
- Streaming y batch
- Anomaly detection

### Soda SQL
- Checks de calidad como YAML
- Integración con warehouses
- Alertas configurables
