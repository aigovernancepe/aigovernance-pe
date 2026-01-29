# Sector Seguros - Contexto y Necesidades

## Panorama del Sector en Perú

### Principales Actores
- **Aseguradoras grandes:** Rímac, Pacífico, La Positiva, Mapfre
- **Aseguradoras medianas:** Interseguro, Protecta, BNP Paribas Cardif
- **Insurtechs emergentes:** Comparadores, microseguros digitales

### Regulador Principal
Superintendencia de Banca, Seguros y AFP (SBS)

### Características del Sector
- Industria tradicional en transformación digital
- Uso creciente de telemática y datos alternativos
- Presión por personalización de productos
- Competencia de insurtechs

## Casos de Uso de IA en Seguros

### Alto Riesgo (Prioridad 1)

#### 1. Suscripción Automatizada (Underwriting)
**Descripción:** Evaluación de riesgo para determinar prima y condiciones de póliza.

**Riesgos sin governance:**
- Discriminación en pricing
- Rechazo injustificado de cobertura
- Uso de variables proxy para características protegidas
- Falta de explicabilidad en decisiones

**Requisitos de compliance:**
- Transparencia en factores de pricing
- No discriminación verificable
- Explicación de rechazos
- Auditoría de modelo

#### 2. Procesamiento de Reclamos (Claims)
**Descripción:** Automatización de evaluación y aprobación/rechazo de siniestros.

**Riesgos sin governance:**
- Rechazos injustificados
- Retrasos en pagos legítimos
- Inconsistencia en decisiones
- Incapacidad de explicar rechazos

**Requisitos de compliance:**
- Documentación de criterios
- Proceso de apelación
- Tiempos de respuesta monitoreados
- Supervisión humana para casos complejos

#### 3. Detección de Fraude en Seguros
**Descripción:** Identificación de reclamos fraudulentos.

**Consideraciones:**
- Balance entre detección y falsos positivos
- Impacto en clientes legítimos
- Documentación para casos legales
- Actualización continua de patrones

### Medio Riesgo (Prioridad 2)

#### 4. Pricing Dinámico
**Descripción:** Personalización de primas basada en comportamiento (telemática en autos, wearables en salud).

**Consideraciones:**
- Transparencia con asegurado
- Opt-in explícito
- Privacidad de datos de comportamiento
- No penalización excesiva

#### 5. Chatbots y Asistentes
**Descripción:** Atención al cliente automatizada para consultas y primeros avisos de siniestro.

**Consideraciones:**
- Transparencia sobre naturaleza artificial
- Escalamiento a humanos
- Precisión en información de coberturas
- Registro de conversaciones

#### 6. Predicción de Abandono (Churn)
**Descripción:** Identificar clientes con riesgo de no renovar.

**Consideraciones:**
- Uso ético de insights
- No targeting discriminatorio
- Privacidad de datos

### Bajo Riesgo (Prioridad 3)

#### 7. Optimización de Siniestros
**Descripción:** Asignación eficiente de ajustadores, estimación de costos.

#### 8. Análisis de Documentos
**Descripción:** OCR y procesamiento de pólizas, facturas médicas, etc.

## Datos Críticos en Seguros

### Datos de Asegurados
- Información personal y demográfica
- Historial de salud (seguros de vida/salud)
- Historial de conducción (autos)
- Historial de siniestros

### Datos de Riesgo
- Características del bien asegurado
- Ubicación geográfica
- Factores de riesgo específicos
- Score de siniestralidad

### Datos de Siniestros
- Detalles del evento
- Documentación de soporte
- Evaluaciones de ajustadores
- Pagos realizados

### Datos Actuariales
- Tablas de mortalidad
- Estadísticas de siniestralidad
- Modelos de reservas
- Precios de mercado

## Desafíos Específicos

### 1. Datos de Salud
- Alta sensibilidad (datos especiales bajo LPDP)
- Restricciones de uso
- Necesidad de anonimización
- Consentimientos específicos

### 2. Discriminación en Pricing
- Uso de variables correlacionadas con características protegidas
- Desbalance histórico en datos
- Necesidad de auditorías de fairness
- Regulación específica de pricing

### 3. Explicabilidad en Reclamos
- Clientes exigen entender rechazos
- Potenciales disputas legales
- Requisitos regulatorios de transparencia

### 4. Datos Telemáticos
- Volumen masivo de datos
- Privacidad del comportamiento
- Consentimiento informado
- Retención de datos

## Quick Wins para Aseguradoras

### Inmediatos (0-30 días)
1. Inventariar modelos de IA en uso
2. Identificar modelo de underwriting como prioridad
3. Revisar proceso actual de apelación de reclamos
4. Designar Data Owner para datos de asegurados

### Corto Plazo (1-3 meses)
1. Documentar lineage de datos para underwriting
2. Implementar monitoreo básico de fairness
3. Formalizar proceso de apelación
4. Capacitar equipo de suscripción

### Mediano Plazo (3-6 meses)
1. Establecer Data Governance Council
2. Crear framework de calidad para datos actuariales
3. Automatizar validaciones en proceso de claims
4. Dashboard de gobernanza

## Métricas Específicas de Seguros

### Para Underwriting
- Tasa de aprobación por segmento
- Dispersión de primas por características
- Tiempo de decisión
- Tasa de apelaciones exitosas

### Para Claims
- Tiempo de resolución
- Tasa de rechazo por tipo
- Tasa de apelación
- Satisfacción del cliente

### Para Fraude
- Tasa de detección vs. falsos positivos
- Valor recuperado
- Tiempo de detección
- Casos enviados a legal

## Consideraciones Regulatorias Específicas

### SBS
- Normas de solvencia que afectan reservas
- Reportes de siniestralidad
- Regulación de canales digitales
- Protección al consumidor de seguros

### INDECOPI
- Prácticas comerciales
- Publicidad
- Contratos de adhesión

### Protección de Datos
- Datos de salud como categoría especial
- Consentimiento explícito requerido
- Limitación de finalidad
- Derechos ARCO
