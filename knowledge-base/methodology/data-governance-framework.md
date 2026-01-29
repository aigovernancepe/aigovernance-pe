# Framework de Data Governance

## Visión General

Framework de gobernanza de datos diseñado para instituciones financieras peruanas, alineado con DS 115-2025-PCM, Ley 31814 y mejores prácticas internacionales. Este documento cubre los fundamentos conceptuales, estructuras organizacionales y modelos operativos para implementar gobernanza de datos efectiva.

---

## Parte 1: Fundamentos Conceptuales

### Definición de Data Governance

Data Governance es el ejercicio de autoridad, control y toma de decisiones compartida sobre la gestión de activos de datos. Establece procesos y responsabilidades que aseguran la calidad, seguridad y uso apropiado de los datos en una organización.

**Definición práctica:** Data Governance es el sistema de derechos de decisión y accountability para procesos relacionados con información, ejecutado de acuerdo a modelos que describen quién puede tomar qué acciones con qué información, y cuándo, bajo qué circunstancias, usando qué métodos.

### Data Governance vs. Data Management

| Aspecto | Data Governance | Data Management |
|---------|-----------------|-----------------|
| **Enfoque** | Supervisión y toma de decisiones | Ejecución técnica |
| **Rol** | Define "qué" y "quién" | Implementa "cómo" |
| **Responsables** | Líderes de negocio, Data Owners | IT, Data Engineers |
| **Alcance** | Políticas, estándares, accountability | Operaciones, herramientas, sistemas |
| **Naturaleza** | Estratégica, orientada al negocio | Táctica, orientada a la tecnología |

**Analogía:** Data Governance es como el consejo directivo de una empresa (establece dirección y políticas), mientras que Data Management es como la gerencia operativa (ejecuta las operaciones día a día).

### Relación con la Gestión de la Información Empresarial

Data Governance debe entenderse en el contexto más amplio de la gestión de información empresarial:

```
Estrategia de Negocio
        ↓
Estrategia de Información/Datos
        ↓
Framework de Data Governance ← (Este documento)
        ↓
Operaciones de Data Management
        ↓
Arquitectura de Datos & Tecnología
```

---

## Parte 2: Construyendo un Framework de Governance

### Los Bloques Fundamentales

Un framework de Data Governance efectivo requiere tres componentes principales:

#### 1. Personas (Organización)
- Roles y responsabilidades claras
- Comités de gobernanza
- Cultura de datos
- Capacitación continua

#### 2. Procesos
- Políticas y estándares
- Procedimientos operativos
- Flujos de trabajo
- Mecanismos de control

#### 3. Tecnología
- Catálogo de datos
- Herramientas de calidad
- Sistemas de metadatos
- Plataformas de colaboración

### Estructura Organizacional

#### Data Governance Council (Comité de Gobernanza de Datos)
**Rol:** Órgano de gobierno máximo para decisiones de datos

**Composición:**
- CDO/CIO (Chair)
- Data Owners de dominios críticos
- Representante de Compliance
- Representante de Legal
- Representante de IT/Arquitectura
- Representante de Riesgos

**Responsabilidades:**
- Aprobar políticas de datos
- Resolver conflictos de propiedad
- Priorizar iniciativas de datos
- Monitorear KPIs de gobernanza
- Aprobar excepciones
- Asegurar alineación con estrategia de negocio

**Frecuencia:** Mensual (mínimo)

#### Data Owners (Propietarios de Datos)
**Rol:** Responsables de dominios de datos específicos

**Ejemplos de dominios:**
- Datos de Clientes
- Datos de Productos
- Datos Financieros
- Datos de Riesgo
- Datos Regulatorios

**Responsabilidades:**
- Definir reglas de negocio para sus datos
- Aprobar accesos a sus dominios
- Asegurar calidad de datos
- Participar en el Data Governance Council
- Establecer prioridades de mejora
- Accountability por la calidad de sus datos

**Perfil recomendado:** Ejecutivos de negocio con autoridad sobre el dominio, no necesariamente técnicos.

#### Data Stewards (Administradores de Datos)
**Rol:** Ejecutores operativos de la gobernanza

**Responsabilidades:**
- Implementar políticas en el día a día
- Monitorear calidad de datos
- Documentar metadatos
- Resolver issues de calidad
- Reportar al Data Owner
- Coordinar con IT para implementación técnica
- Mantener documentación actualizada

**Perfil recomendado:** Personas con conocimiento profundo del negocio y de los datos, capacidad analítica.

#### Data Custodians (Custodios de Datos - IT)
**Rol:** Responsables técnicos de los datos

**Responsabilidades:**
- Seguridad técnica
- Backups y recuperación
- Performance de sistemas
- Implementación de controles técnicos
- Administración de bases de datos
- Soporte a herramientas de governance

---

## Parte 3: Modelos de Operación de Governance

### Modelo Centralizado

**Descripción:** Un equipo central de Data Governance toma todas las decisiones y establece todos los estándares para la organización.

**Características:**
- Control centralizado de políticas
- Estándares uniformes en toda la organización
- Equipo dedicado de governance
- Decisiones tomadas a nivel corporativo

**Ventajas:**
- Consistencia en toda la organización
- Claridad en la toma de decisiones
- Economías de escala
- Estándares uniformes

**Desventajas:**
- Puede ser lento y burocrático
- Posible desconexión con necesidades de negocio
- Resistencia de las unidades de negocio
- Difícil escalar en organizaciones grandes

**Mejor para:**
- Organizaciones pequeñas/medianas
- Etapas iniciales de governance
- Industrias altamente reguladas
- Cuando se requiere control estricto

### Modelo Descentralizado

**Descripción:** Cada unidad de negocio o departamento maneja su propia gobernanza de datos con mínima coordinación central.

**Características:**
- Autonomía de unidades de negocio
- Políticas adaptadas a cada área
- Múltiples centros de decisión
- Flexibilidad operativa

**Ventajas:**
- Agilidad y velocidad
- Cercano a las necesidades del negocio
- Mayor ownership local
- Rápida adaptación

**Desventajas:**
- Inconsistencia entre áreas
- Duplicación de esfuerzos
- Silos de datos
- Difícil integración enterprise
- Riesgo de incumplimiento

**Mejor para:**
- Conglomerados diversificados
- Organizaciones con unidades muy autónomas
- Cuando las necesidades varían mucho por área

### Modelo Federado (Recomendado)

**Descripción:** Combina elementos centralizados y descentralizados. Un equipo central establece frameworks, estándares y políticas core, mientras las unidades de negocio implementan y adaptan dentro de esos límites.

**Características:**
- Estándares centrales + ejecución local
- Governance council con representantes de cada área
- Políticas core universales + políticas locales específicas
- Balance entre control y flexibilidad

**Ventajas:**
- Balance entre consistencia y flexibilidad
- Aprovecha conocimiento local
- Escalable
- Fomenta ownership
- Permite innovación controlada

**Desventajas:**
- Requiere madurez organizacional
- Necesita coordinación efectiva
- Puede haber tensiones centro-periferia
- Más complejo de gestionar

**Mejor para:**
- Organizaciones medianas a grandes
- Empresas con múltiples líneas de negocio
- Instituciones financieras (bancos, aseguradoras)
- Cuando se busca balance entre control y agilidad

### Comparación de Modelos

| Factor | Centralizado | Descentralizado | Federado |
|--------|--------------|-----------------|----------|
| Control | Alto | Bajo | Medio-Alto |
| Flexibilidad | Baja | Alta | Media-Alta |
| Consistencia | Alta | Baja | Alta |
| Velocidad de decisión | Lenta | Rápida | Media |
| Costo inicial | Alto | Bajo | Medio |
| Escalabilidad | Limitada | Alta | Alta |
| Riesgo de silos | Bajo | Alto | Bajo |
| Madurez requerida | Baja | Baja | Alta |

### Selección del Modelo Apropiado

**Considerar:**
1. Tamaño de la organización
2. Diversidad de líneas de negocio
3. Madurez actual en gestión de datos
4. Cultura organizacional
5. Requisitos regulatorios
6. Recursos disponibles
7. Urgencia de implementación

**Recomendación para instituciones financieras peruanas:**
El modelo federado es generalmente el más apropiado, dado:
- Requisitos regulatorios uniformes (DS 115-2025-PCM, SBS)
- Necesidad de flexibilidad operativa por líneas de negocio
- Importancia de ownership local para efectividad
- Balance entre control de riesgos y agilidad comercial

---

## Parte 4: Mejores Prácticas de Data Governance

### Factores Críticos de Éxito

#### 1. Patrocinio Ejecutivo
- Compromiso visible del liderazgo senior
- Asignación de recursos adecuados
- Comunicación consistente de importancia
- Accountability a nivel directivo

#### 2. Alineación con Objetivos de Negocio
- Governance como habilitador, no como obstáculo
- Métricas vinculadas a resultados de negocio
- Quick wins que demuestren valor
- Casos de uso relevantes para cada área

#### 3. Enfoque Incremental
- Comenzar con dominios prioritarios (ej: scoring crediticio)
- Expandir gradualmente
- Aprender y ajustar
- No buscar perfección desde el inicio

#### 4. Comunicación y Capacitación
- Plan de comunicación multi-nivel
- Capacitación adaptada por rol
- Champions en cada área
- Celebración de éxitos

#### 5. Métricas y Accountability
- KPIs claros y medibles
- Reporting regular
- Responsabilidades en evaluaciones de desempeño
- Consecuencias por incumplimiento

### Antipatrones a Evitar

1. **Data Governance como proyecto de IT:** Es un programa de negocio, no de tecnología
2. **Scope demasiado amplio:** Intentar gobernar todo desde el inicio
3. **Foco solo en políticas:** Sin ejecución ni enforcement
4. **Governance sin valor:** Burocracia sin beneficios tangibles
5. **Ignorar la cultura:** No abordar resistencia al cambio
6. **Herramientas antes que procesos:** Comprar software sin definir necesidades

### Medición del Éxito

#### Métricas de Proceso
- % de datos con Data Owner asignado
- % de dominios con políticas documentadas
- % de personal capacitado
- Adopción de herramientas de governance

#### Métricas de Calidad
- Score de calidad por dominio
- Reducción de issues críticos
- Tiempo de resolución de incidentes
- Cumplimiento de SLAs de datos

#### Métricas de Valor
- Reducción de tiempo en preparación de datos
- Mejora en time-to-market de iniciativas
- Reducción de errores en reportes
- Cumplimiento regulatorio (cero hallazgos)

---

## Parte 5: Dominios de Gobernanza

### 1. Estrategia y Políticas
- Visión y objetivos de datos
- Políticas corporativas
- Estándares y guías
- Cumplimiento regulatorio (DS 115-2025-PCM, Ley 31814, SBS)

### 2. Calidad de Datos
- Definición de dimensiones de calidad
- Reglas de validación
- Monitoreo y reportes
- Remediación de issues

Ver: [Framework de Calidad de Datos](./data-quality-framework.md)

### 3. Arquitectura de Datos
- Modelos de datos
- Flujos de información
- Integración de sistemas
- Tecnologías de datos

### 4. Metadatos
- Diccionario de datos
- Catálogo de datos
- Lineage
- Glosario de negocio

Ver: [Gestión de Metadatos](./metadata-management.md)

### 5. Seguridad y Privacidad
- Clasificación de datos
- Control de acceso
- Protección de datos personales
- Cumplimiento LPDP

### 6. Ciclo de Vida
- Creación/Captura
- Almacenamiento
- Uso
- Retención
- Eliminación

---

## Parte 6: Políticas Core

### Política de Gobernanza de Datos
Define el framework general, roles, responsabilidades y principios que rigen la gestión de datos en la organización.

**Elementos clave:**
- Alcance y aplicabilidad
- Principios rectores
- Estructura de governance
- Mecanismos de enforcement
- Proceso de excepciones

### Política de Calidad de Datos
Define dimensiones de calidad, umbrales aceptables y proceso de remediación.

**Elementos clave:**
- Dimensiones de calidad aplicables
- Umbrales mínimos por criticidad de datos
- Responsabilidades de monitoreo
- Proceso de escalamiento
- SLAs de remediación

### Política de Clasificación de Datos
Define niveles de sensibilidad y controles asociados.

**Niveles típicos:**
- Público
- Interno
- Confidencial
- Restringido

### Política de Retención de Datos
Define períodos de retención por tipo de dato y proceso de eliminación.

**Consideraciones:**
- Requisitos legales (SBS: 10 años)
- Requisitos de negocio
- Costos de almacenamiento
- Proceso de purga segura

### Política de Acceso a Datos
Define proceso de solicitud, aprobación y revocación de accesos.

**Elementos:**
- Principio de mínimo privilegio
- Proceso de solicitud y aprobación
- Revisión periódica de accesos
- Revocación por cambio de rol

Ver: [Principios, Políticas y Estándares](./data-governance-policies-standards.md)

---

## Parte 7: Procesos Clave

### Proceso de Onboarding de Nuevos Datos
1. Identificación de necesidad
2. Evaluación de fuente
3. Definición de ownership
4. Clasificación de sensibilidad
5. Documentación de metadatos
6. Implementación de controles
7. Alta en catálogo

### Proceso de Gestión de Issues de Calidad
1. Detección (automática o manual)
2. Registro en sistema de tickets
3. Clasificación de severidad
4. Asignación a responsable
5. Análisis de causa raíz
6. Remediación
7. Verificación
8. Cierre y documentación

### Proceso de Solicitud de Acceso
1. Usuario solicita acceso
2. Data Owner evalúa necesidad
3. Verificación de cumplimiento
4. Aprobación/Rechazo
5. Implementación técnica
6. Confirmación al usuario
7. Auditoría periódica

---

## Parte 8: Integración con Regulación Peruana

### Alineación con DS 115-2025-PCM

| Obligación Regulatoria | Componente de Governance |
|------------------------|--------------------------|
| Políticas institucionales de IA | Política de Gobernanza + Política de IA |
| Educación y concientización | Programa de Data Literacy |
| Estándares y auditorías | Políticas + Proceso de Auditoría |
| Supervisión humana | Roles de Data Owners y Stewards |
| Transparencia algorítmica | Documentación de Metadatos + Lineage |
| Clasificación de riesgo | Política de Clasificación de Datos |

### Alineación con Ley 31814

La Ley 31814 establece principios que requieren capacidades de Data Governance:

| Principio de Ley 31814 | Capacidad de Governance |
|------------------------|-------------------------|
| Transparencia | Catálogo de datos, documentación |
| No discriminación | Monitoreo de sesgo, calidad de datos |
| Protección de datos | Clasificación, controles de acceso |
| Supervisión humana | Procesos de revisión, escalamiento |
| Rendición de cuentas | Lineage, trazabilidad, auditoría |

### Roadmap de Cumplimiento

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

## Artículos Relacionados

- [Fundamentos de Data Governance (CDGP)](./data-governance-fundamentals.md)
- [Framework de Calidad de Datos](./data-quality-framework.md)
- [Gestión de Metadatos](./metadata-management.md)
- [Herramientas de Data Governance](./data-governance-toolkit.md)
- [Principios, Políticas y Estándares](./data-governance-policies-standards.md)
- [Data Governance para Iniciativas de Datos](./data-governance-initiatives.md)
- [Modelo de Madurez](./maturity-model.md)
- [ISO 42001 - AI Management System](./iso-42001-aims.md)
- [DS 115-2025-PCM](../regulations/ds-115-2025-pcm.md)
- [Ley 31814](../regulations/ley-31814.md)

---

*Última actualización: Enero 2026*
*Fuente: DAMA DMBOK, EDM Council DCAM, Mejores Prácticas de la Industria*
