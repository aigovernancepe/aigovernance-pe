# Fundamentos de Data Governance (CDGP Body of Knowledge)

## Visión General

Este documento contiene los fundamentos de Data Governance basados en el CDGP (Certified Data Governance Professional) Body of Knowledge, cubriendo los 6 dominios esenciales para implementar gobernanza de datos efectiva.

---

## Dominio 1: Business Drivers para Data Governance

### Definición de Data Governance

Data Governance es el ejercicio de autoridad, control y toma de decisiones compartida sobre la gestión de activos de datos. Establece procesos y responsabilidades que aseguran la calidad y seguridad de los datos utilizados en una organización.

#### Diferencia: Data Governance vs. Data Management

| Aspecto | Data Governance | Data Management |
|---------|-----------------|-----------------|
| **Enfoque** | Supervisión y toma de decisiones | Ejecución técnica |
| **Rol** | Define "qué" y "quién" | Implementa "cómo" |
| **Responsables** | Líderes de negocio, Data Owners | IT, Data Engineers |
| **Alcance** | Políticas, estándares, accountability | Operaciones, herramientas, sistemas |

**Analogía:** Data Governance es como el consejo directivo de una empresa (establece dirección y políticas), mientras que Data Management es como la gerencia operativa (ejecuta las operaciones día a día).

### Impacto Organizacional

#### Beneficios Estratégicos
- **Mejora en toma de decisiones:** Datos confiables → decisiones informadas
- **Reducción de riesgos:** Cumplimiento regulatorio, seguridad
- **Eficiencia operativa:** Menos duplicación, mejor integración
- **Ventaja competitiva:** Insights más rápidos y precisos
- **Confianza del cliente:** Protección de datos personales

#### Consecuencias de No Tener Governance
- Decisiones basadas en datos incorrectos
- Multas regulatorias (DS 115-2025-PCM, SBS, LPDP)
- Pérdida de confianza del cliente
- Ineficiencias operativas
- Incapacidad de escalar iniciativas de datos

### Componentes Clave

#### 1. Personas
- **Data Governance Council:** Órgano de gobierno máximo
- **Data Owners:** Responsables de dominios de datos
- **Data Stewards:** Ejecutores operativos
- **Data Custodians:** Responsables técnicos (IT)

#### 2. Procesos
- Gestión de políticas
- Control de calidad
- Gestión de accesos
- Manejo de incidentes
- Auditoría y monitoreo

#### 3. Tecnología
- Catálogo de datos
- Herramientas de calidad
- Sistemas de lineage
- Plataformas de colaboración

### Business Drivers para Data Governance

#### Drivers Internos
1. **Eficiencia operativa:** Reducir tiempo perdido buscando/limpiando datos
2. **Calidad de datos:** Mejorar precisión de reportes y analytics
3. **Reducción de costos:** Eliminar redundancias y errores
4. **Habilitación de innovación:** Datos listos para IA/ML

#### Drivers Externos
1. **Cumplimiento regulatorio:** DS 115-2025-PCM, SBS, LPDP
2. **Expectativas del cliente:** Privacidad y transparencia
3. **Competencia del mercado:** Empresas data-driven
4. **Transformación digital:** Ecosistemas digitales

#### Análisis PESTEL para Data Governance

| Factor | Consideraciones |
|--------|-----------------|
| **Político** | Regulaciones gubernamentales, políticas de datos abiertos |
| **Económico** | Presupuesto para governance, ROI esperado |
| **Social** | Expectativas de privacidad, alfabetización digital |
| **Tecnológico** | Cloud, IA, big data, IoT |
| **Ecológico** | Sostenibilidad de centros de datos |
| **Legal** | LPDP, DS 115-2025-PCM, regulaciones sectoriales |

### Desarrollo del Business Case

#### Componentes del Business Case
1. **Situación actual:** Problemas, costos, riesgos
2. **Estado deseado:** Objetivos, beneficios esperados
3. **Gap analysis:** Diferencia entre actual y deseado
4. **Solución propuesta:** Framework de governance
5. **Inversión requerida:** Personas, tecnología, procesos
6. **ROI esperado:** Beneficios cuantificados vs. inversión
7. **Riesgos:** De no hacer nada vs. de implementar
8. **Timeline:** Fases y milestones

#### Métricas para el Business Case

**Costos a reducir:**
- Horas de trabajo perdidas en calidad de datos
- Multas regulatorias evitadas
- Errores en reportes y decisiones
- Duplicación de esfuerzos

**Beneficios a ganar:**
- Velocidad de decisiones
- Confianza en analytics
- Time-to-market de productos
- Satisfacción del cliente

### Alineación con Estrategia de Datos

#### Jerarquía Estratégica
```
Estrategia de Negocio
        ↓
Estrategia de Datos
        ↓
Framework de Data Governance
        ↓
Operaciones de Data Management
```

#### Elementos de una Estrategia de Datos
1. **Visión:** Estado futuro deseado
2. **Principios:** Guías para decisiones
3. **Objetivos:** Metas medibles
4. **Capacidades:** Lo que necesitamos poder hacer
5. **Iniciativas:** Proyectos específicos
6. **Métricas:** Cómo mediremos éxito

### Data Literacy (Alfabetización de Datos)

#### Definición
Capacidad de leer, trabajar con, analizar y comunicar con datos. Incluye comprender qué significan los datos, de dónde vienen y cómo usarlos responsablemente.

#### Niveles de Data Literacy

| Nivel | Descripción | Competencias |
|-------|-------------|--------------|
| **Básico** | Consumidor de datos | Leer dashboards, entender KPIs |
| **Intermedio** | Usuario de datos | Crear reportes, análisis básico |
| **Avanzado** | Analista de datos | Análisis complejo, visualización |
| **Experto** | Científico de datos | Modelado, IA/ML, predicción |

#### Programa de Data Literacy
1. Assessment de nivel actual
2. Definición de niveles requeridos por rol
3. Desarrollo de contenido de capacitación
4. Implementación de programa
5. Medición de progreso
6. Mejora continua

---

## Dominio 2: Ética y Data Governance Responsable

### Fundamentos de Ética de Datos

#### Principios Éticos Fundamentales
1. **Beneficencia:** Maximizar beneficios, minimizar daños
2. **No maleficencia:** No causar daño
3. **Autonomía:** Respetar decisiones individuales
4. **Justicia:** Tratar a todos equitativamente
5. **Transparencia:** Ser abierto sobre prácticas de datos

#### Marco Ético para Data Governance
- **Recolección:** ¿Es necesario? ¿Hay consentimiento?
- **Almacenamiento:** ¿Es seguro? ¿Por cuánto tiempo?
- **Uso:** ¿Es el uso previsto? ¿Hay nuevos usos?
- **Compartición:** ¿Con quién? ¿Bajo qué condiciones?
- **Eliminación:** ¿Cuándo? ¿Cómo verificar?

### Dilemas Éticos Comunes

#### 1. Privacidad vs. Innovación
- **Tensión:** Más datos = mejores productos, pero ¿a qué costo?
- **Principio:** Minimización de datos - solo recolectar lo necesario
- **Solución:** Privacy by Design, anonimización, consentimiento

#### 2. Transparencia vs. Confidencialidad
- **Tensión:** Usuarios quieren saber cómo se usan sus datos, pero hay secretos comerciales
- **Principio:** Explicar lo suficiente sin revelar IP
- **Solución:** Explicaciones en lenguaje simple, no revelar algoritmos completos

#### 3. Beneficio Individual vs. Colectivo
- **Tensión:** Análisis de datos beneficia a la sociedad pero puede perjudicar individuos
- **Principio:** Proteger a individuos, buscar beneficio agregado
- **Solución:** Evaluación de impacto, medidas de protección

#### 4. Sesgo Algorítmico
- **Tensión:** Algoritmos reflejan sesgos históricos en los datos
- **Principio:** Fairness - resultados equitativos para todos los grupos
- **Solución:** Testing de sesgo, datos diversos, monitoreo continuo

### Consideraciones Legales

#### Marco Legal en Perú
- **Ley 29733 (LPDP):** Protección de datos personales
- **DS 003-2013-JUS:** Reglamento de LPDP
- **DS 115-2025-PCM:** Regulación de IA
- **Normativa SBS:** Para sector financiero
- **Normativa SMV:** Para mercado de valores

#### Derechos ARCO
- **Acceso:** Saber qué datos tenemos
- **Rectificación:** Corregir datos incorrectos
- **Cancelación:** Eliminar datos
- **Oposición:** Negarse a ciertos tratamientos

### Construyendo Governance Ético

#### Comité de Ética de Datos
- Revisar casos complejos
- Establecer precedentes
- Actualizar políticas
- Capacitar a la organización

#### Evaluación de Impacto Ético
1. Identificar stakeholders afectados
2. Mapear beneficios y riesgos
3. Evaluar alternativas
4. Documentar decisiones
5. Monitorear resultados

#### Código de Ética de Datos
- Principios claros
- Ejemplos prácticos
- Proceso de consulta
- Mecanismo de reporte

---

## Dominio 3: Privacidad, Seguridad y Compliance

### Principios Core de Privacidad

#### Privacy by Design
1. **Proactivo, no reactivo:** Prevenir, no remediar
2. **Privacidad como default:** Configuración más privada por defecto
3. **Privacidad embebida:** Integrada en diseño, no agregada después
4. **Funcionalidad completa:** Privacidad sin sacrificar funcionalidad
5. **Seguridad end-to-end:** Protección durante todo el ciclo de vida
6. **Visibilidad y transparencia:** Verificable por usuarios y auditores
7. **Respeto al usuario:** Centrado en el individuo

#### Principios de Minimización
- **Minimización de datos:** Solo recolectar lo necesario
- **Minimización de retención:** Solo guardar lo necesario
- **Minimización de acceso:** Solo dar acceso a quien lo necesita
- **Minimización de uso:** Solo usar para propósitos declarados

### Clasificación de Datos

#### Por Sensibilidad
| Nivel | Descripción | Ejemplos | Controles |
|-------|-------------|----------|-----------|
| **Público** | Sin restricciones | Web pública, marketing | Ninguno especial |
| **Interno** | Solo empleados | Procedimientos, organigramas | Autenticación básica |
| **Confidencial** | Necesidad de saber | Financieros, estrategia | Encriptación, logs |
| **Restringido** | Altamente sensible | PII, secretos comerciales | MFA, DLP, auditoría |

#### Por Tipo de Dato Personal
| Categoría | Descripción | Ejemplos |
|-----------|-------------|----------|
| **No personal** | No identifica individuos | Estadísticas agregadas |
| **PII** | Datos personales identificables | Nombre, DNI, dirección |
| **SPI** | Datos personales sensibles | Salud, religión, orientación |

### Responsabilidades de Seguridad

#### Roles y Responsabilidades
- **CISO:** Estrategia de seguridad, gestión de riesgos
- **DPO:** Cumplimiento de privacidad, derechos ARCO
- **Data Owners:** Clasificación, control de acceso
- **IT Security:** Implementación técnica
- **Todos:** Cumplir políticas, reportar incidentes

#### Controles de Seguridad para Datos
1. **Preventivos:** Encriptación, control de acceso, DLP
2. **Detectivos:** Logging, monitoreo, alertas
3. **Correctivos:** Respuesta a incidentes, recuperación

### Procesos de Compliance

#### Ciclo de Compliance
```
1. Identificar requisitos regulatorios
        ↓
2. Evaluar estado actual (gap analysis)
        ↓
3. Implementar controles
        ↓
4. Monitorear cumplimiento
        ↓
5. Remediar hallazgos
        ↓
6. Reportar a reguladores
        ↓
(Repetir)
```

#### Gestión de Incidentes de Datos
1. **Detección:** Identificar brecha o incidente
2. **Contención:** Limitar impacto
3. **Análisis:** Determinar causa y alcance
4. **Notificación:** Informar a afectados y reguladores (72 hrs LPDP)
5. **Remediación:** Corregir vulnerabilidad
6. **Lecciones aprendidas:** Prevenir recurrencia

### Tendencias Futuras

#### Tecnologías Emergentes
- **Computación confidencial:** Procesamiento en enclaves seguros
- **Privacidad diferencial:** Análisis sin revelar individuos
- **Federated Learning:** ML sin centralizar datos
- **Zero Knowledge Proofs:** Verificar sin revelar

#### Regulación Evolutiva
- Convergencia hacia estándares globales
- Mayor énfasis en IA y automatización
- Portabilidad de datos entre servicios
- Derechos de explicación algorítmica

---

## Dominio 4: Comunicación y Engagement con Stakeholders

### Identificación de Stakeholders

#### Mapeo de Stakeholders
| Categoría | Stakeholders | Interés en Data Governance |
|-----------|--------------|---------------------------|
| **Ejecutivos** | CEO, CFO, COO | ROI, riesgo, cumplimiento |
| **Tecnología** | CIO, CDO, IT | Arquitectura, herramientas |
| **Negocio** | Gerentes de área | Calidad, acceso a datos |
| **Compliance** | Legal, Riesgos, Auditoría | Cumplimiento, controles |
| **Operaciones** | Analistas, usuarios | Usabilidad, disponibilidad |
| **Externos** | Reguladores, clientes | Transparencia, protección |

#### Matriz Poder-Interés
```
Alto Poder + Alto Interés  → Gestionar de cerca (Executives, CDO)
Alto Poder + Bajo Interés  → Mantener satisfechos (Board, Reguladores)
Bajo Poder + Alto Interés  → Mantener informados (Analistas, Users)
Bajo Poder + Bajo Interés  → Monitorear (General)
```

### Estrategias de Comunicación

#### Principios de Comunicación Efectiva
1. **Adaptar el mensaje:** Diferentes audiencias, diferentes lenguajes
2. **Ser consistente:** Mensajes alineados en toda la organización
3. **Ser transparente:** Compartir desafíos además de éxitos
4. **Ser oportuno:** Comunicar en el momento correcto
5. **Escuchar activamente:** Feedback como input valioso

#### Canales de Comunicación
| Audiencia | Canal | Frecuencia | Contenido |
|-----------|-------|------------|-----------|
| Ejecutivos | Steering Committee | Mensual | KPIs, riesgos, decisiones |
| Gerentes | Newsletter, townhall | Quincenal | Avances, casos de éxito |
| Usuarios | Intranet, email | Semanal | Tips, actualizaciones |
| Técnicos | Wiki, Slack | Continuo | Documentación, soporte |

#### Comunicación para Diferentes Audiencias

**Para Ejecutivos:**
- Hablar de valor de negocio, no de datos técnicos
- Enfocarse en riesgos y oportunidades
- Usar métricas financieras (ROI, costo de no-compliance)
- Ser conciso, ir al punto

**Para Técnicos:**
- Ser específico sobre estándares y herramientas
- Explicar el "cómo", no solo el "qué"
- Involucrar en diseño de soluciones
- Reconocer su expertise

**Para Usuarios de Negocio:**
- Enfocarse en beneficios para su trabajo diario
- Usar ejemplos concretos de su área
- Simplificar conceptos técnicos
- Mostrar quick wins

### Construyendo Compromiso

#### Espectro de Participación (IAP2)
1. **Informar:** Comunicación unidireccional
2. **Consultar:** Obtener feedback
3. **Involucrar:** Trabajar directamente con stakeholders
4. **Colaborar:** Asociarse en cada aspecto
5. **Empoderar:** Decisión final en manos de stakeholders

#### Tácticas para Generar Compromiso
- **Patrocinio ejecutivo:** Visibilidad y respaldo de liderazgo
- **Quick wins:** Demostrar valor temprano
- **Campeones de datos:** Embajadores en cada área
- **Reconocimiento:** Celebrar contribuciones
- **Capacitación:** Empoderar con conocimiento

### Medición del Engagement

#### Métricas de Engagement
- Asistencia a reuniones de governance
- Participación en capacitaciones
- Uso del catálogo de datos
- Issues de calidad reportados
- Feedback recibido
- Adopción de políticas

#### Encuestas de Stakeholders
- Satisfacción con procesos de governance
- Percepción de valor
- Barreras percibidas
- Sugerencias de mejora

---

## Dominio 5: Medición de ROI y Valor de Negocio

### Definición de Valor de Negocio

#### Tipos de Valor
1. **Valor financiero:** Reducción de costos, incremento de ingresos
2. **Valor operativo:** Eficiencia, velocidad, calidad
3. **Valor de riesgo:** Reducción de exposición, compliance
4. **Valor estratégico:** Capacidades, innovación, competitividad

#### Framework de Valor de Datos
```
Datos de Calidad
      ↓
Información Confiable
      ↓
Insights Accionables
      ↓
Decisiones Informadas
      ↓
Resultados de Negocio
      ↓
Valor Medible
```

### Cuantificación de Valor

#### Métodos de Cuantificación

**1. Costo de la Pobre Calidad de Datos (CDPQ)**
- Tiempo de empleados corrigiendo errores
- Decisiones incorrectas por datos malos
- Oportunidades perdidas
- Multas y penalidades

**2. ROI de Iniciativas de Governance**
```
ROI = (Beneficios - Inversión) / Inversión × 100%
```

**3. Total Cost of Ownership (TCO)**
- Costos directos: licencias, infraestructura
- Costos indirectos: personal, capacitación
- Costos ocultos: downtime, errores

#### Métricas de Valor

| Categoría | Métrica | Fórmula/Medición |
|-----------|---------|------------------|
| **Eficiencia** | Tiempo ahorrado | Horas antes - Horas después |
| **Calidad** | Reducción de errores | % errores antes - % errores después |
| **Velocidad** | Time-to-insight | Días para generar reporte |
| **Riesgo** | Incidentes evitados | # incidentes × costo promedio |
| **Compliance** | Multas evitadas | Costo potencial de multas |

### Establecimiento de Objetivos

#### Framework SMART
- **S**pecífico: ¿Qué exactamente queremos lograr?
- **M**edible: ¿Cómo sabremos si lo logramos?
- **A**lcanzable: ¿Es realista?
- **R**elevante: ¿Importa para el negocio?
- **T**emporal: ¿Para cuándo?

**Ejemplo:**
- ❌ "Mejorar la calidad de datos"
- ✅ "Incrementar el score de completitud del dominio Clientes de 75% a 95% para Q3 2026"

#### Framework OKR (Objectives and Key Results)

**Objetivo:** Establecer data governance de clase mundial

**Key Results:**
1. Alcanzar nivel 4 de madurez en modelo de 5 niveles
2. Reducir tiempo de preparación de datos en 50%
3. Lograr 0 hallazgos críticos en auditoría regulatoria
4. Capacitar al 100% de Data Owners y Stewards

### Mecanismos de Reporte

#### Dashboard de Data Governance
**KPIs Ejecutivos:**
- Score de madurez de governance
- % de datos con ownership asignado
- % de compliance con políticas
- ROI de iniciativas de datos

**KPIs Operativos:**
- Score de calidad por dominio
- # de issues abiertos vs. cerrados
- Tiempo promedio de resolución
- Uso del catálogo de datos

#### Reporte Mensual de Governance
1. **Resumen ejecutivo:** Logros, desafíos, próximos pasos
2. **Métricas clave:** KPIs con tendencia
3. **Iniciativas:** Estado de proyectos
4. **Issues:** Problemas críticos y mitigación
5. **Próximo período:** Plan y prioridades

#### Comunicación de Valor
- Traducir métricas técnicas a impacto de negocio
- Usar storytelling con casos concretos
- Mostrar antes/después
- Conectar con objetivos estratégicos

---

## Dominio 6: Change Management para Data Governance

### Fundamentos de Change Management

#### ¿Por Qué Falla el Cambio?
1. Falta de patrocinio ejecutivo
2. Resistencia de empleados
3. Comunicación inadecuada
4. Capacitación insuficiente
5. No medir el progreso
6. Cambio demasiado rápido
7. No abordar cultura organizacional

#### Modelo de Kotter (8 Pasos)

| Paso | Acción | Aplicación a Data Governance |
|------|--------|------------------------------|
| 1 | Crear urgencia | Comunicar riesgos de DS 115-2025-PCM |
| 2 | Formar coalición | Establecer Data Governance Council |
| 3 | Crear visión | Definir estado futuro de governance |
| 4 | Comunicar visión | Campaña de comunicación multi-canal |
| 5 | Empoderar acción | Capacitar Data Owners y Stewards |
| 6 | Quick wins | Implementar en dominio piloto |
| 7 | Consolidar ganancias | Expandir a otros dominios |
| 8 | Anclar en cultura | Integrar en evaluaciones de desempeño |

### Construyendo Estrategia de OCM

#### Assessment de Preparación
1. **Cultura actual:** ¿Resistente o abierta al cambio?
2. **Historial de cambios:** ¿Éxitos o fracasos previos?
3. **Capacidad de cambio:** ¿Recursos disponibles?
4. **Patrocinio:** ¿Hay apoyo ejecutivo?
5. **Impacto:** ¿Qué tan grande es el cambio?

#### Plan de Change Management
1. **Análisis de impacto:** ¿Quién es afectado y cómo?
2. **Análisis de stakeholders:** ¿Quién apoya/resiste?
3. **Plan de comunicación:** ¿Qué, a quién, cuándo, cómo?
4. **Plan de capacitación:** ¿Qué habilidades se necesitan?
5. **Plan de soporte:** ¿Cómo ayudar durante transición?

### Gestión de Resistencia

#### Fuentes de Resistencia
- **Miedo:** A lo desconocido, a perder control
- **Inercia:** "Siempre lo hemos hecho así"
- **Sobrecarga:** Ya tengo mucho trabajo
- **Desconfianza:** No creo que funcione
- **Pérdida percibida:** De autonomía, estatus, expertise

#### Tácticas para Superar Resistencia
| Fuente | Táctica |
|--------|---------|
| Miedo | Comunicación clara, quick wins |
| Inercia | Mostrar beneficios concretos |
| Sobrecarga | Simplificar, automatizar |
| Desconfianza | Involucrar en diseño |
| Pérdida | Reconocer, crear nuevas oportunidades |

### Alineación con Gestión de Riesgos

#### Riesgos del Cambio
- Resistencia mayor a la esperada
- Falta de recursos
- Cambio de prioridades
- Pérdida de patrocinio
- Fatiga de cambio

#### Mitigación de Riesgos
- Comunicación continua y transparente
- Flexibilidad en approach
- Múltiples patrocinadores
- Quick wins para mantener momentum
- Celebrar logros

### Tipos de Cambio en Data Governance

#### Cambios que Requieren Oversight

**Cambios de Políticas:**
- Nueva política de clasificación
- Actualización de retención
- Cambio en proceso de acceso

**Cambios Organizacionales:**
- Nuevo Data Owner
- Reestructuración de dominios
- Cambio en comité de governance

**Cambios Técnicos:**
- Nueva herramienta de catálogo
- Migración de datos
- Nuevo sistema fuente

**Cambios Regulatorios:**
- DS 115-2025-PCM (entrada en vigencia)
- Nueva normativa SBS
- Actualización de LPDP

#### Proceso de Gestión de Cambios
1. Solicitud de cambio
2. Evaluación de impacto
3. Aprobación por Data Governance Council
4. Plan de implementación
5. Comunicación a afectados
6. Implementación
7. Verificación
8. Documentación

---

## Integración con DS 115-2025-PCM

### Alineación con Obligaciones Regulatorias

| Obligación DS 115-2025-PCM | Dominio CDGP Relevante |
|---------------------------|------------------------|
| Políticas institucionales de IA | D1: Business Drivers, D3: Compliance |
| Educación y concientización | D4: Stakeholder Communication |
| Estándares y auditorías | D3: Compliance, D5: ROI |
| Supervisión humana | D2: Ethics |
| Transparencia algorítmica | D2: Ethics, D3: Privacy |
| Clasificación de riesgo | D3: Security, D2: Ethics |

### Roadmap de Implementación

**Fase 1: Assessment (Meses 1-2)**
- Inventario de sistemas de IA
- Gap analysis vs. regulación
- Identificación de stakeholders
- Desarrollo de business case

**Fase 2: Foundation (Meses 3-4)**
- Establecer governance council
- Designar Data Owners
- Desarrollar políticas core
- Plan de comunicación

**Fase 3: Implementación (Meses 5-8)**
- Implementar controles de calidad
- Documentar lineage
- Capacitar equipos
- Quick wins en dominio piloto

**Fase 4: Maduración (Meses 9-12)**
- Expandir a todos los sistemas
- Automatizar monitoreo
- Auditoría interna
- Preparación para compliance externo

---

## Recursos y Referencias

### Certificaciones Relevantes
- **CDGP:** Certified Data Governance Professional (DAMA)
- **CDMP:** Certified Data Management Professional (DAMA)
- **DGSP:** Data Governance and Stewardship Professional (EDM Council)

### Frameworks de Referencia
- **DAMA DMBOK:** Data Management Body of Knowledge
- **EDM Council DCAM:** Data Management Capability Assessment Model
- **COBIT:** Control Objectives for IT
- **NIST CSF:** Cybersecurity Framework

### Bibliografía Recomendada
- "Data Governance: How to Design, Deploy, and Sustain an Effective Data Governance Program" - John Ladley
- "Non-Invasive Data Governance" - Robert Seiner
- "DAMA-DMBOK: Data Management Body of Knowledge" - DAMA International
- "The Data Governance Imperative" - Steve Sarsfield
