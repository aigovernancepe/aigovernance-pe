# ISO/IEC 27002:2022 - Controles de Seguridad Relevantes para IA y Data Governance

## Visión General

ISO/IEC 27002:2022 es el código internacional de prácticas para controles de seguridad de la información. La versión 2022 modernizó la guía para cubrir seguridad en la nube, arquitecturas zero-trust, riesgos de cadena de suministro y amenazas emergentes.

### Datos Clave
- **Código:** ISO/IEC 27002:2022
- **Título:** Information Security, Cybersecurity and Privacy Protection
- **Publicación:** Febrero 2022
- **Relación:** Guía de implementación para controles de ISO/IEC 27001

## Nueva Estructura (2022)

La versión 2022 reorganiza los controles en **4 temas** con **93 controles totales**:

| Tema | Cláusula | Controles |
|------|----------|-----------|
| Organizacionales | 5 | 37 |
| Personas | 6 | 8 |
| Físicos | 7 | 14 |
| Tecnológicos | 8 | 34 |

## Sistema de Atributos

ISO 27002:2022 introduce un sistema de atributos para clasificar controles:

### Tipos de Control
- **Preventivo:** Evita incidentes
- **Detectivo:** Identifica incidentes
- **Correctivo:** Responde a incidentes

### Principios de Seguridad
- **Confidencialidad**
- **Integridad**
- **Disponibilidad**

### Conceptos de Ciberseguridad (alineado con NIST CSF)
- **Identificar**
- **Proteger**
- **Detectar**
- **Responder**
- **Recuperar**

### Dominios de Seguridad
- Gobernanza y Ecosistemas
- Protección
- Defensa
- Resiliencia

## 11 Nuevos Controles en 2022

### 5.7 Threat Intelligence
- Recopilar, evaluar y usar inteligencia de amenazas
- Informar prevención y respuesta
- **Relevancia para IA:** Detectar amenazas específicas a modelos de IA

### 5.23 Information Security for Cloud Services
- Seleccionar, onboarding, gobernar y offboarding servicios cloud
- **Relevancia para IA:** Muchos sistemas de IA usan cloud

### 5.30 ICT Readiness for Business Continuity
- Mantener servicios IT/OT resilientes durante disrupciones
- **Relevancia para IA:** Continuidad de sistemas de decisión

### 7.4 Physical Security Monitoring
- Monitorear sitios y áreas sensibles
- **Relevancia para IA:** Protección de infraestructura de ML

### 8.9 Configuration Management
- Gestión de configuraciones de sistemas
- **Relevancia para IA:** Versionamiento de modelos y configuraciones

### 8.10 Information Deletion
- Eliminación segura de información
- **Relevancia para IA:** Datos de entrenamiento, modelos obsoletos

### 8.11 Data Masking
- Enmascaramiento de datos sensibles
- **Relevancia para IA:** Protección de datos en datasets de training

### 8.12 Data Leakage Prevention
- Prevención de fuga de datos
- **Relevancia para IA:** Protección de modelos y datos propietarios

### 8.16 Monitoring Activities
- Monitoreo de actividades en redes y sistemas
- **Relevancia para IA:** Detectar uso anómalo de sistemas de IA

### 8.23 Web Filtering
- Filtrado de contenido web
- **Relevancia para IA:** Control de acceso a recursos externos

### 8.28 Secure Coding
- Prácticas de desarrollo seguro
- **Relevancia para IA:** Seguridad en código de modelos ML

## Controles Relevantes para Data Governance e IA

### Controles Organizacionales (Cláusula 5)

#### 5.1 Policies for Information Security
- **Requisito:** Políticas de seguridad definidas, aprobadas y comunicadas
- **Aplicación a IA:** Política de seguridad para sistemas de IA
- **Entregable:** Política de Seguridad de Sistemas de IA

#### 5.2 Information Security Roles and Responsibilities
- **Requisito:** Roles y responsabilidades definidos
- **Aplicación a IA:** Data Owners, Model Owners, AI Security Officer
- **Entregable:** Matriz RACI para sistemas de IA

#### 5.3 Segregation of Duties
- **Requisito:** Separación de funciones conflictivas
- **Aplicación a IA:** Separar desarrollo de validación de modelos
- **Entregable:** Segregación en pipeline de ML

#### 5.8 Information Security in Project Management
- **Requisito:** Seguridad integrada en proyectos
- **Aplicación a IA:** Security by design en proyectos de IA
- **Entregable:** Checklist de seguridad para proyectos de IA

#### 5.9 Inventory of Information and Other Associated Assets
- **Requisito:** Inventario de activos de información
- **Aplicación a IA:** Inventario de modelos, datasets, APIs
- **Entregable:** Catálogo de activos de IA

#### 5.10 Acceptable Use of Information and Other Associated Assets
- **Requisito:** Uso aceptable definido
- **Aplicación a IA:** Política de uso de sistemas de IA
- **Entregable:** Política de Uso Aceptable de IA

#### 5.12 Classification of Information
- **Requisito:** Clasificación de información
- **Aplicación a IA:** Clasificar datos de training y outputs
- **Entregable:** Esquema de clasificación para datos de IA

#### 5.13 Labelling of Information
- **Requisito:** Etiquetado según clasificación
- **Aplicación a IA:** Labels en datasets y modelos
- **Entregable:** Proceso de etiquetado

#### 5.14 Information Transfer
- **Requisito:** Protección de transferencias
- **Aplicación a IA:** Proteger transfer de modelos y datos
- **Entregable:** Controles de transferencia segura

#### 5.19 Information Security in Supplier Relationships
- **Requisito:** Seguridad con proveedores
- **Aplicación a IA:** Evaluación de proveedores de IA (cloud ML, APIs)
- **Entregable:** Checklist de evaluación de proveedores de IA

#### 5.31 Legal, Statutory, Regulatory and Contractual Requirements
- **Requisito:** Cumplimiento de requisitos legales
- **Aplicación a IA:** Cumplimiento DS 115-2025-PCM
- **Entregable:** Matriz de cumplimiento regulatorio

#### 5.33 Protection of Records
- **Requisito:** Protección de registros
- **Aplicación a IA:** Logs de decisiones de IA, registros de training
- **Entregable:** Política de retención de registros de IA

#### 5.34 Privacy and Protection of PII
- **Requisito:** Protección de datos personales
- **Aplicación a IA:** PII en datasets de training y outputs
- **Entregable:** Privacy Impact Assessment para IA

### Controles de Personas (Cláusula 6)

#### 6.3 Information Security Awareness, Education and Training
- **Requisito:** Concientización y capacitación
- **Aplicación a IA:** Training en riesgos de IA para empleados
- **Entregable:** Programa de awareness de IA

#### 6.5 Responsibilities After Termination or Change of Employment
- **Requisito:** Responsabilidades post-empleo
- **Aplicación a IA:** Protección de conocimiento de modelos propietarios
- **Entregable:** Proceso de offboarding para roles de IA

### Controles Tecnológicos (Cláusula 8)

#### 8.2 Privileged Access Rights
- **Requisito:** Gestión de accesos privilegiados
- **Aplicación a IA:** Control de acceso a modelos y datos de training
- **Entregable:** Matriz de accesos a sistemas de IA

#### 8.3 Information Access Restriction
- **Requisito:** Restricción de acceso a información
- **Aplicación a IA:** Control de acceso a datasets sensibles
- **Entregable:** Controles de acceso por clasificación

#### 8.4 Access to Source Code
- **Requisito:** Control de acceso a código fuente
- **Aplicación a IA:** Protección de código de modelos ML
- **Entregable:** Política de acceso a código de ML

#### 8.8 Management of Technical Vulnerabilities
- **Requisito:** Gestión de vulnerabilidades técnicas
- **Aplicación a IA:** Vulnerabilidades en modelos (adversarial attacks)
- **Entregable:** Proceso de gestión de vulnerabilidades de IA

#### 8.15 Logging
- **Requisito:** Logging de eventos
- **Aplicación a IA:** Logs de inferencias, decisiones, cambios
- **Entregable:** Estándar de logging para sistemas de IA

#### 8.24 Use of Cryptography
- **Requisito:** Uso de criptografía
- **Aplicación a IA:** Encriptación de modelos y datos
- **Entregable:** Estándares criptográficos para IA

#### 8.25 Secure Development Lifecycle
- **Requisito:** Ciclo de desarrollo seguro
- **Aplicación a IA:** ML Security Development Lifecycle
- **Entregable:** MLSecOps pipeline

#### 8.26 Application Security Requirements
- **Requisito:** Requisitos de seguridad de aplicaciones
- **Aplicación a IA:** Requisitos de seguridad para apps de IA
- **Entregable:** Checklist de seguridad de aplicaciones de IA

#### 8.29 Security Testing in Development and Acceptance
- **Requisito:** Testing de seguridad
- **Aplicación a IA:** Testing de robustez de modelos
- **Entregable:** Plan de testing de seguridad de IA

#### 8.31 Separation of Development, Test and Production Environments
- **Requisito:** Separación de ambientes
- **Aplicación a IA:** Ambientes separados para ML pipeline
- **Entregable:** Arquitectura de ambientes de ML

## Integración ISO 27002 + ISO 42001

### Complementariedad
- ISO 27002 proporciona controles de seguridad base
- ISO 42001 agrega controles específicos de IA
- Juntos ofrecen cobertura completa

### Mapeo de Controles
| Área | ISO 27002 | ISO 42001 |
|------|-----------|-----------|
| Políticas | 5.1 | A.1 |
| Roles | 5.2 | A.2 |
| Clasificación | 5.12 | A.6 |
| Proveedores | 5.19 | A.9 |
| Desarrollo | 8.25-8.31 | A.5 |
| Datos | 5.33, 5.34 | A.6 |

### Implementación Conjunta
Para organizaciones con ISMS existente:
1. Usar ISO 27001/27002 como base
2. Agregar controles de ISO 42001
3. Crear Statement of Applicability unificado
4. Auditar de forma integrada

## Implicaciones para DS 115-2025-PCM

### Controles Directamente Relevantes
- **5.31:** Cumplimiento regulatorio
- **5.34:** Protección de datos personales
- **8.15:** Logging (trazabilidad)
- **5.9:** Inventario de sistemas
- **5.12:** Clasificación de riesgo

### Gap Analysis Recomendado
1. Mapear controles ISO 27002 existentes
2. Identificar gaps para sistemas de IA
3. Agregar controles de ISO 42001
4. Priorizar según clasificación de riesgo

## Recursos

- [ISO/IEC 27002:2022](https://www.iso.org/standard/27002)
- [ISMS.online - Complete Guide](https://www.isms.online/iso-27002/)
- [Advisera - New Controls Explained](https://advisera.com/27001academy/explanation-of-11-new-iso-27001-2022-controls/)
- [IT Governance - AI Security with ISO 27001](https://www.itgovernance.co.uk/blog/how-to-address-ai-security-risks-with-iso-27001/)
- [Reliance Cyber - Managing AI Risks](https://www.reliancecyber.com/research/managing-ai-risks-with-iso-27001/)
