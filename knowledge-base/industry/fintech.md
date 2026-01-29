# Sector Fintech - Contexto y Necesidades

## Panorama del Sector en Perú

### Ecosistema Fintech Peruano
- ~200 fintechs activas
- Crecimiento acelerado post-pandemia
- Segmentos principales:
  - Pagos y transferencias
  - Préstamos (lending)
  - Gestión de finanzas personales
  - Inversiones
  - Seguros (insurtech)
  - Criptomonedas

### Regulación
- Ley Fintech (pendiente/en desarrollo)
- Sandbox regulatorio de SBS
- Aplicación de DS 115-2025-PCM si usan IA

### Características del Sector
- Agilidad como ventaja competitiva
- Data-driven por naturaleza
- Recursos limitados vs. bancos
- Alto uso de IA/ML desde inicio
- Crecimiento rápido con riesgos

## Casos de Uso de IA en Fintechs

### Fintechs de Préstamos (Lending)

#### Scoring Alternativo
**Descripción:** Uso de datos alternativos (redes sociales, comportamiento móvil, etc.) para evaluar riesgo crediticio de personas sin historial bancario.

**Riesgos específicos:**
- Mayor potencial de sesgos ocultos
- Datos de fuentes no tradicionales
- Menor explicabilidad
- Privacidad de datos alternativos

**Requisitos de compliance:**
- Validación exhaustiva de datos alternativos
- Documentación de features utilizadas
- Monitoreo de fairness por segmentos
- Explicación de decisiones al usuario

#### Decisiones de Préstamo Automatizadas
**Descripción:** Aprobación/rechazo automático de préstamos sin intervención humana.

**Consideraciones:**
- Umbral de automatización vs. revisión humana
- Proceso de apelación obligatorio
- Logs completos de decisión
- Límites de exposición automatizada

### Fintechs de Pagos

#### Detección de Fraude en Tiempo Real
**Descripción:** Sistemas que evalúan cada transacción instantáneamente.

**Desafíos:**
- Latencia mínima requerida
- Balance precisión vs. fricción
- Adaptación a nuevos patrones
- Explicación de bloqueos

#### KYC Automatizado
**Descripción:** Verificación de identidad usando reconocimiento facial, validación de documentos.

**Consideraciones:**
- Precisión en diferentes condiciones
- Sesgos en reconocimiento facial
- Protección de datos biométricos
- Fallback a verificación manual

### Fintechs de Inversión

#### Robo-Advisors
**Descripción:** Recomendaciones de inversión automatizadas basadas en perfil de riesgo.

**Requisitos:**
- Transparencia en metodología
- Alineación con perfil de riesgo
- Disclaimers claros
- Supervisión humana disponible

#### Trading Algorítmico
**Descripción:** Ejecución automática de operaciones.

**Consideraciones:**
- Controles de riesgo
- Audit trail completo
- Kill switches
- Reportes regulatorios

## Desafíos Específicos de Fintechs

### 1. Velocidad vs. Governance
**Tensión:** Necesidad de moverse rápido vs. compliance riguroso

**Solución:**
- Governance "ligero" pero efectivo
- Automatización de controles
- Integración en CI/CD
- Governance as code

### 2. Recursos Limitados
**Tensión:** No hay presupuesto para equipo de governance dedicado

**Solución:**
- Roles compartidos (CTO como CDO interino)
- Herramientas open source
- Procesos pragmáticos
- Priorización estricta

### 3. Datos Alternativos
**Tensión:** Ventaja competitiva basada en datos no tradicionales vs. riesgos de privacidad y sesgo

**Solución:**
- Validación rigurosa de cada fuente
- Consentimiento explícito
- Monitoreo de sesgos continuo
- Documentación exhaustiva

### 4. Escalamiento Rápido
**Tensión:** Procesos que funcionan en etapa temprana no escalan

**Solución:**
- Diseñar governance escalable desde inicio
- Automatización desde día 1
- Documentación como código
- Cultura de ownership

## Framework de Governance para Fintechs

### Principios Adaptados
1. **Pragmatismo:** Hacer lo necesario, no más
2. **Automatización:** Si no está automatizado, no escala
3. **Integración:** Governance en el pipeline, no aparte
4. **Proporcionalidad:** Esfuerzo proporcional al riesgo

### Estructura Mínima Viable

#### Roles Esenciales
- **CDO/Data Lead:** Puede ser el CTO inicialmente
- **Model Owner:** Responsable de cada modelo de IA
- **Compliance Lead:** Puede ser externo/part-time inicialmente

#### Comité de Governance
- Reunión mensual (1 hora)
- Agenda fija: nuevos modelos, issues, métricas
- Decisiones documentadas en Notion/Confluence

### Procesos Mínimos

#### 1. Model Registry
- Inventario de todos los modelos
- Owner asignado
- Clasificación de riesgo
- Estado (dev/staging/prod)

#### 2. Model Deployment Checklist
Antes de deploy a producción:
- [ ] Documentación de features
- [ ] Test de sesgo completado
- [ ] Métricas de calidad de datos
- [ ] Aprobación de Model Owner
- [ ] Rollback plan

#### 3. Monitoreo Post-Deploy
- Métricas de performance
- Data drift detection
- Alertas configuradas
- Revisión mensual

### Herramientas Recomendadas (Stack Moderno)

#### Para Data Quality
- **Great Expectations:** Validación de datos en Python
- **dbt:** Tests integrados en transformaciones
- **Soda:** SQL-based quality checks

#### Para Model Registry
- **MLflow:** Open source, popular
- **Weights & Biases:** Si hay presupuesto
- **Neptune.ai:** Alternativa

#### Para Documentación
- **Notion:** Wiki + bases de datos
- **Confluence:** Si ya lo usan
- **GitHub Wiki:** Mínimo viable

#### Para Lineage
- **dbt:** Lineage automático
- **Apache Atlas:** Si escala mucho
- **Diagramas manuales:** Inicio

## Quick Wins para Fintechs

### Semana 1
1. Crear inventario de modelos en Google Sheet
2. Asignar owner a cada modelo
3. Identificar modelo de mayor riesgo

### Semana 2
1. Documentar datos de entrada del modelo crítico
2. Implementar 3-5 validaciones de calidad básicas
3. Crear checklist de deployment

### Semana 3-4
1. Establecer reunión mensual de governance
2. Definir métricas de fairness para modelo crítico
3. Configurar alertas básicas

### Mes 2-3
1. Expandir validaciones de calidad
2. Implementar logging de decisiones
3. Crear proceso de apelación (si aplica)

## Ejemplo: Fintech de Préstamos

### Contexto
- 50 empleados
- 100,000 préstamos/mes
- Modelo de scoring con datos alternativos
- Sin equipo de governance dedicado

### Roadmap Sugerido

#### Fase 1: Fundación (Mes 1)
- CTO asume rol de CDO
- Inventario de modelos (3 identificados)
- Documentación de scoring (más crítico)
- Primeras validaciones de calidad

**Inversión:** ~20 horas internas

#### Fase 2: Compliance Básico (Mes 2)
- Análisis de sesgo en scoring
- Proceso de apelación manual
- Logging de decisiones
- Política de datos v1.0

**Inversión:** ~30 horas internas + posible consultor

#### Fase 3: Automatización (Mes 3)
- Validaciones automáticas en pipeline
- Dashboard de métricas
- Alertas configuradas
- Checklist de deployment automatizado

**Inversión:** ~40 horas de ingeniería

#### Resultado
- Compliance con DS 115-2025-PCM para modelo crítico
- Base para escalar governance
- Reducción de riesgo regulatorio

## Consideraciones de Inversión

### Hacer Internamente
- Inventario de modelos
- Documentación de features
- Reuniones de governance
- Configuración de herramientas

### Considerar Consultor Externo
- Assessment inicial (si no hay experiencia)
- Diseño de framework
- Análisis de sesgo (expertise específica)
- Capacitación de equipo
- Validación pre-regulador
