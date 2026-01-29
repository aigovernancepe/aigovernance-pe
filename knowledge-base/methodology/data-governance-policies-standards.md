# Principios, Políticas y Estándares de Data Governance

## Visión General

Los principios, políticas y estándares forman la base normativa de Data Governance. Establecen las "reglas del juego" que guían cómo la organización gestiona sus datos. Este documento cubre la jerarquía normativa, el desarrollo de políticas y los estándares clave para instituciones financieras peruanas.

---

## Parte 1: Jerarquía Normativa de Data Governance

### La Pirámide de Governance

```
                    ┌─────────────┐
                    │ PRINCIPIOS  │  ← Valores fundamentales
                    │   (5-10)    │     que guían todo
                    └──────┬──────┘
                           │
                    ┌──────┴──────┐
                    │  POLÍTICAS  │  ← Declaraciones de
                    │  (10-20)    │     intención obligatorias
                    └──────┬──────┘
                           │
                    ┌──────┴──────┐
                    │ ESTÁNDARES  │  ← Requisitos específicos
                    │  (20-50+)   │     medibles
                    └──────┬──────┘
                           │
                    ┌──────┴──────┐
                    │PROCEDIMIENTOS│  ← Instrucciones paso
                    │  (50-100+)  │     a paso
                    └─────────────┘
```

### Características de Cada Nivel

| Nivel | Características | Ejemplo |
|-------|----------------|---------|
| **Principios** | Valores fundamentales, estables, guían decisiones | "Los datos son un activo corporativo" |
| **Políticas** | Declaraciones obligatorias, aprobadas por directorio, aplicación amplia | "Política de Calidad de Datos" |
| **Estándares** | Requisitos específicos, medibles, técnicos o de negocio | "Completitud mínima: 99%" |
| **Procedimientos** | Instrucciones operativas, paso a paso, para ejecutar | "Proceso de solicitud de acceso" |

### Relación Entre Niveles

**Ejemplo completo:**

```
PRINCIPIO: Los datos deben ser precisos y confiables
    ↓
POLÍTICA: Política de Calidad de Datos
    ↓
ESTÁNDAR: Datos de clientes deben tener >99% de exactitud
    ↓
PROCEDIMIENTO: Proceso de validación de datos de clientes contra RENIEC
```

---

## Parte 2: Principios de Data Governance

### ¿Qué son los Principios?

Los principios son declaraciones de valores fundamentales que guían todas las decisiones relacionadas con datos. Son:
- **Estables:** No cambian frecuentemente
- **Universales:** Aplican a toda la organización
- **Orientadores:** Ayudan a tomar decisiones ante ambigüedad
- **Pocos:** 5-10 principios son suficientes

### Principios Recomendados

#### 1. Datos como Activo Estratégico
"Los datos son un activo corporativo que tiene valor y debe gestionarse con el mismo rigor que otros activos de la organización."

**Implicaciones:**
- Inventariar y valorar datos
- Asignar responsables (Data Owners)
- Proteger contra pérdida o mal uso
- Invertir en su calidad

#### 2. Accountability Clara
"Cada dato tiene un propietario (Data Owner) identificado que es responsable de su calidad, seguridad y uso apropiado."

**Implicaciones:**
- Definir Data Owners para todos los dominios
- Documentar responsabilidades
- Incluir en evaluaciones de desempeño
- Proceso de escalamiento claro

#### 3. Calidad en el Origen
"La calidad de datos es responsabilidad de quien los crea o captura, y debe asegurarse lo más cercano posible al origen."

**Implicaciones:**
- Validación en punto de entrada
- Capacitación a capturadores
- Feedback inmediato de errores
- No depender de limpieza posterior

#### 4. Única Fuente de Verdad
"Para cada elemento de datos crítico existe una única fuente autoritativa de la cual todos los demás sistemas se alimentan."

**Implicaciones:**
- Definir fuentes autoritativas
- Evitar duplicación de maestros
- Sincronización desde fuente
- Master Data Management

#### 5. Acceso Basado en Necesidad
"El acceso a datos se otorga basado en la necesidad de negocio legítima, siguiendo el principio de mínimo privilegio."

**Implicaciones:**
- Justificación de acceso requerida
- Revisión periódica de permisos
- Roles y perfiles definidos
- Revocación cuando ya no necesario

#### 6. Transparencia
"Los procesos de gestión de datos son documentados, auditables y comprensibles para quienes tienen interés legítimo."

**Implicaciones:**
- Documentar políticas públicamente
- Lineage visible
- Explicar decisiones automatizadas
- Responder a solicitudes de información

#### 7. Cumplimiento Integrado
"El cumplimiento regulatorio no es un add-on, sino parte integral de la gestión de datos desde el diseño."

**Implicaciones:**
- Privacy by Design
- Requisitos regulatorios en arquitectura
- Auditoría como proceso continuo
- Actualización proactiva ante cambios

#### 8. Mejora Continua
"La gobernanza de datos evoluciona continuamente basada en métricas, feedback y cambios del entorno."

**Implicaciones:**
- Medición regular de efectividad
- Proceso de mejora definido
- Aprendizaje de incidentes
- Benchmarking contra industria

### Alineación con Ley 31814

La Ley 31814 establece principios específicos que deben incorporarse:

| Principio Ley 31814 | Principio de Governance Correspondiente |
|--------------------|-----------------------------------------|
| Estándares de seguridad basados en riesgos | Cumplimiento Integrado |
| Transparencia | Transparencia |
| No discriminación | Calidad en el Origen (datos sin sesgo) |
| Protección de datos personales | Acceso Basado en Necesidad |
| Supervisión humana | Accountability Clara |
| Responsabilidad y rendición de cuentas | Accountability Clara |

---

## Parte 3: Políticas de Data Governance

### Estructura de una Política

Toda política debe incluir:

1. **Título:** Nombre claro de la política
2. **Propósito:** Por qué existe esta política
3. **Alcance:** A quién y qué aplica
4. **Definiciones:** Términos clave
5. **Declaración de política:** El "qué" (no el "cómo")
6. **Roles y responsabilidades:** Quién hace qué
7. **Excepciones:** Cómo manejar casos especiales
8. **Consecuencias:** Qué pasa si no se cumple
9. **Referencias:** Regulaciones, otras políticas
10. **Metadata:** Versión, fecha, aprobador, próxima revisión

### Políticas Core Recomendadas

#### 1. Política Marco de Data Governance

**Propósito:** Establecer el framework general de gobernanza de datos.

**Contenido clave:**
- Definición de Data Governance para la organización
- Principios rectores
- Estructura organizacional (Council, Owners, Stewards)
- Proceso de toma de decisiones
- Relación con otras políticas

**Aprobador:** Directorio/Comité Ejecutivo

#### 2. Política de Calidad de Datos

**Propósito:** Asegurar que los datos cumplan con estándares de calidad definidos.

**Contenido clave:**
- Dimensiones de calidad aplicables
- Roles responsables de calidad
- Proceso de monitoreo
- Umbrales mínimos
- Proceso de remediación
- Escalamiento de issues

**Aprobador:** CDO/CIO

#### 3. Política de Clasificación de Datos

**Propósito:** Categorizar datos según sensibilidad para aplicar controles apropiados.

**Contenido clave:**
- Niveles de clasificación (Público, Interno, Confidencial, Restringido)
- Criterios para clasificar
- Controles por nivel
- Responsable de clasificar
- Proceso de reclasificación

**Aprobador:** CISO/CDO

**Ejemplo de niveles:**

| Nivel | Descripción | Controles Requeridos |
|-------|-------------|---------------------|
| **Público** | Información para público general | Ninguno especial |
| **Interno** | Solo para empleados | Autenticación |
| **Confidencial** | Acceso limitado, impacto si se divulga | Encriptación, logging, need-to-know |
| **Restringido** | Altamente sensible (PII, secretos) | MFA, encriptación, DLP, auditoría |

#### 4. Política de Retención de Datos

**Propósito:** Definir por cuánto tiempo se conservan los datos y cómo se eliminan.

**Contenido clave:**
- Períodos de retención por tipo de dato
- Requisitos regulatorios (SBS: 10 años)
- Proceso de archivo
- Proceso de eliminación segura
- Excepciones (litigios, auditorías)

**Aprobador:** Legal/Compliance

**Ejemplo de períodos:**

| Tipo de Dato | Período de Retención | Base Legal |
|--------------|---------------------|------------|
| Operaciones bancarias | 10 años | SBS |
| Datos de empleados | 5 años post-término | Laboral |
| Logs de sistema | 1-3 años | Seguridad |
| Datos de marketing | Mientras haya consentimiento | LPDP |

#### 5. Política de Acceso a Datos

**Propósito:** Regular quién puede acceder a qué datos y bajo qué condiciones.

**Contenido clave:**
- Principio de mínimo privilegio
- Proceso de solicitud de acceso
- Roles de aprobación
- Revisión periódica
- Revocación
- Acceso de terceros

**Aprobador:** CDO/CISO

#### 6. Política de Privacidad y Protección de Datos

**Propósito:** Asegurar cumplimiento de LPDP y protección de datos personales.

**Contenido clave:**
- Derechos ARCO
- Bases legales para tratamiento
- Consentimiento
- Transferencias internacionales
- Brechas de datos
- Rol del DPO

**Aprobador:** DPO/Legal

### Proceso de Gestión de Políticas

#### Ciclo de Vida de una Política

```
┌─────────┐     ┌─────────┐     ┌─────────┐
│ Diseño  │ ──► │Aprobación│ ──►│Publicación│
└─────────┘     └─────────┘     └─────────┘
                                      │
                                      ▼
┌─────────┐     ┌─────────┐     ┌─────────┐
│ Retiro  │ ◄── │ Revisión │ ◄──│Ejecución │
└─────────┘     └─────────┘     └─────────┘
```

#### Frecuencia de Revisión

| Tipo de Política | Frecuencia de Revisión |
|------------------|------------------------|
| Marco/Fundamental | Anual o ante cambios regulatorios |
| Operativa | Semestral |
| Técnica | Trimestral o ante cambios tecnológicos |

---

## Parte 4: Estándares de Data Governance

### Características de Buenos Estándares

- **Específicos:** Claramente definidos, sin ambigüedad
- **Medibles:** Se puede verificar cumplimiento
- **Alcanzables:** Realistas dada la situación actual
- **Relevantes:** Conectados a objetivos de negocio
- **Temporales:** Con fecha de cumplimiento si es nuevo

### Estándares de Calidad de Datos

#### Por Dimensión

| Dimensión | Estándar | Umbral Típico |
|-----------|----------|---------------|
| Completitud | % de campos obligatorios poblados | ≥ 99% |
| Exactitud | % de coincidencia con fuente autoritativa | ≥ 98% |
| Consistencia | % de coincidencia entre sistemas | ≥ 99% |
| Unicidad | % de registros sin duplicados | ≥ 99.5% |
| Oportunidad | Latencia máxima de datos | ≤ 24 horas |
| Validez | % de datos que pasan validación | ≥ 99% |

#### Por Criticidad de Datos

| Criticidad | Umbral de Calidad |
|------------|-------------------|
| Alta (IA de alto riesgo) | ≥ 99% en todas las dimensiones |
| Media (reportes de gestión) | ≥ 95% en dimensiones críticas |
| Baja (analytics exploratorio) | ≥ 90% en dimensiones críticas |

### Estándares de Nomenclatura

#### Para Objetos de Base de Datos

| Objeto | Convención | Ejemplo |
|--------|------------|---------|
| Tablas | TB_[DOMINIO]_[NOMBRE] | TB_CLT_CLIENTES |
| Columnas | [ABREV]_[DESCRIPCION] | CLT_NOMBRE_COMPLETO |
| Índices | IX_[TABLA]_[COLUMNA] | IX_CLIENTES_DNI |
| Vistas | VW_[PROPOSITO]_[NOMBRE] | VW_RPT_CLIENTES_ACTIVOS |
| Procedimientos | SP_[ACCION]_[OBJETO] | SP_INS_CLIENTE |

#### Para Términos de Glosario

- Usar sustantivos, no verbos
- Singular, no plural
- Capitalización consistente (Title Case o sentence case)
- Sin abreviaturas ambiguas
- Definición en español, término técnico puede ser en inglés

### Estándares de Documentación

#### Metadatos Obligatorios

Para cada activo de datos documentar:

| Metadato | Obligatorio | Ejemplo |
|----------|-------------|---------|
| Nombre técnico | Sí | CLT_INGRESO_MENSUAL |
| Nombre de negocio | Sí | Ingreso Mensual del Cliente |
| Definición | Sí | Monto de ingreso mensual declarado... |
| Data Owner | Sí | Gerente de Banca Personal |
| Clasificación | Sí | Confidencial |
| Sistema fuente | Sí | Core Banking |
| Tipo de dato | Sí | DECIMAL(15,2) |
| Reglas de validación | Si aplica | >= 0, <= 10,000,000 |

### Estándares de Seguridad

#### Por Nivel de Clasificación

| Nivel | Encriptación | Acceso | Logging | Retención |
|-------|--------------|--------|---------|-----------|
| Público | No requerida | Abierto | No requerido | Sin límite |
| Interno | En tránsito | Autenticado | Opcional | Según política |
| Confidencial | En tránsito y reposo | Need-to-know | Obligatorio | Según regulación |
| Restringido | End-to-end | MFA + Aprobación | Completo | Mínimo necesario |

### Estándares de Integración

#### Para APIs de Datos

- Versionamiento obligatorio (v1, v2)
- Documentación OpenAPI/Swagger
- Autenticación OAuth2
- Rate limiting configurado
- Logging de todas las llamadas
- Formato JSON para respuestas

#### Para ETL/ELT

- Documentar lineage en herramienta de catálogo
- Validación de calidad post-carga
- Manejo de errores definido
- Notificación de fallas
- Idempotencia de procesos

---

## Parte 5: Desarrollo y Aprobación

### Proceso de Desarrollo de Políticas

#### Fase 1: Iniciación
- Identificar necesidad (gap, regulación, incidente)
- Definir alcance preliminar
- Asignar responsable de desarrollo
- Establecer timeline

#### Fase 2: Desarrollo
- Investigar mejores prácticas
- Consultar stakeholders
- Redactar borrador
- Revisión legal/compliance
- Iteraciones

#### Fase 3: Consulta
- Distribución a stakeholders clave
- Recolección de feedback
- Incorporación de comentarios
- Resolución de conflictos

#### Fase 4: Aprobación
- Presentación a Data Governance Council
- Discusión y ajustes finales
- Aprobación formal
- Registro de decisión

#### Fase 5: Publicación
- Comunicación a toda la organización
- Publicación en repositorio central
- Capacitación si necesario
- Plan de implementación

### Roles en el Proceso

| Rol | Responsabilidad |
|-----|-----------------|
| **Sponsor** | Aprobar necesidad, recursos |
| **Autor** | Redactar política |
| **Revisor legal** | Verificar cumplimiento legal |
| **Revisor técnico** | Verificar viabilidad técnica |
| **Data Governance Council** | Aprobar formalmente |
| **Comunicaciones** | Difundir y capacitar |

---

## Parte 6: Cumplimiento y Enforcement

### Mecanismos de Cumplimiento

#### 1. Prevención
- Capacitación obligatoria
- Controles técnicos (validaciones)
- Proceso de onboarding
- Comunicación continua

#### 2. Detección
- Auditorías periódicas
- Monitoreo automatizado
- Reporting de usuarios
- Revisiones de acceso

#### 3. Corrección
- Proceso de remediación
- Planes de acción
- Seguimiento de issues
- Escalamiento

#### 4. Consecuencias
- Feedback al área responsable
- Inclusión en evaluaciones de desempeño
- Reportes a management
- Acciones disciplinarias si aplica

### Proceso de Excepciones

Toda política debe contemplar excepciones controladas:

```
1. Solicitud de excepción documentada
   └─► Justificación de negocio
   └─► Riesgos identificados
   └─► Controles compensatorios
   └─► Período de vigencia

2. Evaluación por Data Owner

3. Aprobación por Data Governance Council (si material)

4. Documentación y registro

5. Revisión periódica de excepciones vigentes
```

---

## Parte 7: Integración con Regulación Peruana

### Mapeo con DS 115-2025-PCM

| Requisito Regulatorio | Política/Estándar Necesario |
|----------------------|----------------------------|
| Políticas institucionales sobre uso de IA | Política Marco de Data Governance |
| Procedimientos de seguridad, transparencia y privacidad | Políticas de Clasificación, Acceso, Privacidad |
| Estándares internacionales | Estándares basados en ISO, NIST |
| Auditorías de seguridad | Estándares de Auditoría, Procedimientos de Revisión |
| Supervisión humana | Política de Roles (Data Owners) |

### Mapeo con Ley 31814

| Principio de Ley | Política/Estándar de Soporte |
|------------------|------------------------------|
| Estándares de seguridad basados en riesgos | Política de Clasificación de Datos |
| Transparencia | Estándares de Documentación, Política de Acceso |
| No discriminación | Estándares de Calidad (sesgo) |
| Protección de datos personales | Política de Privacidad |
| Supervisión humana | Procedimientos de Revisión |
| Responsabilidad y rendición de cuentas | Política de Roles y Responsabilidades |

---

## Artículos Relacionados

- [Framework de Data Governance](./data-governance-framework.md)
- [Fundamentos de Data Governance (CDGP)](./data-governance-fundamentals.md)
- [Framework de Calidad de Datos](./data-quality-framework.md)
- [Gestión de Metadatos](./metadata-management.md)
- [Herramientas de Data Governance](./data-governance-toolkit.md)
- [DS 115-2025-PCM](../regulations/ds-115-2025-pcm.md)
- [Ley 31814](../regulations/ley-31814.md)

---

*Última actualización: Enero 2026*
*Fuente: DAMA DMBOK, ISO/IEC 38505, Mejores Prácticas de la Industria*
