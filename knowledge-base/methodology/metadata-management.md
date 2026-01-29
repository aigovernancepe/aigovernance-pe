# Gestión de Metadatos (Metadata Management)

## Visión General

Metadata Management es una función crítica de Data Governance que proporciona el contexto necesario para entender, usar y gobernar los datos de manera efectiva. Sin metadatos bien gestionados, es imposible lograr transparencia algorítmica, trazabilidad y cumplimiento regulatorio requerido por DS 115-2025-PCM y Ley 31814.

---

## Parte 1: Fundamentos de Metadatos

### ¿Qué son los Metadatos?

**Definición simple:** Metadatos son "datos sobre datos". Proporcionan información que describe, explica y contextualiza los datos.

**Ejemplos cotidianos:**
- En un libro: el índice, el autor, el año de publicación
- En una foto digital: fecha, ubicación, configuración de cámara
- En un archivo: nombre, tamaño, fecha de modificación

**En el contexto empresarial:**
- Nombre de un campo en una base de datos
- Definición de negocio de un KPI
- Origen de los datos (de qué sistema vienen)
- Reglas de transformación aplicadas

### ¿Por Qué son Importantes los Metadatos?

Los metadatos son esenciales para:

1. **Encontrar datos:** Sin metadatos, encontrar los datos correctos es como buscar un libro en una biblioteca sin catálogo
2. **Entender datos:** Los metadatos explican qué significan los datos y cómo se deben usar
3. **Confiar en datos:** Los metadatos documentan la procedencia y calidad de los datos
4. **Gobernar datos:** Sin metadatos, es imposible implementar políticas de manera efectiva
5. **Cumplir regulaciones:** DS 115-2025-PCM requiere transparencia algorítmica, que depende de metadatos

### Tipos de Metadatos

#### 1. Metadatos Técnicos
Describen los aspectos técnicos de los datos.

**Ejemplos:**
- Nombre de tabla/columna
- Tipo de dato (varchar, integer, date)
- Longitud del campo
- Nullable (sí/no)
- Llaves primarias/foráneas
- Índices

**Fuente:** Se extraen automáticamente de sistemas de bases de datos, herramientas ETL, etc.

#### 2. Metadatos de Negocio
Describen el significado y uso de los datos desde perspectiva de negocio.

**Ejemplos:**
- Definición de negocio ("Score crediticio: puntuación numérica que representa la probabilidad de incumplimiento...")
- Propietario del dato (Data Owner)
- Usuarios autorizados
- Reglas de negocio aplicables
- Casos de uso permitidos
- Nivel de sensibilidad

**Fuente:** Deben ser documentados manualmente por usuarios de negocio y Data Stewards.

#### 3. Metadatos Operacionales
Describen cómo se procesan y gestionan los datos.

**Ejemplos:**
- Frecuencia de actualización
- Última fecha de carga
- Estadísticas de calidad
- Métricas de uso
- Registros de acceso
- Historial de cambios

**Fuente:** Se capturan automáticamente de logs, herramientas de monitoreo, etc.

### Comparación de Tipos

| Aspecto | Técnico | Negocio | Operacional |
|---------|---------|---------|-------------|
| **Quién lo usa** | IT, DBAs | Analistas, usuarios | Operations, Governance |
| **Cómo se obtiene** | Automático | Manual | Automático |
| **Ejemplo** | VARCHAR(50) | "Nombre del cliente" | "Actualizado hace 2 horas" |
| **Estabilidad** | Cambia poco | Evoluciona | Cambia constantemente |

---

## Parte 2: Componentes Clave de Metadata Management

### Glosario de Negocio (Business Glossary)

**Definición:** Vocabulario controlado de términos de negocio con sus definiciones estandarizadas.

**Contenido típico:**
- Término
- Definición
- Sinónimos
- Antónimos
- Término relacionados
- Data Owner responsable
- Contexto de uso
- Ejemplos

**Ejemplo:**
```
Término: Cliente
Definición: Persona natural o jurídica que mantiene al menos
            un producto activo con la institución.
Sinónimos: Titular, Usuario
No incluye: Prospectos, Clientes inactivos (>12 meses sin actividad)
Data Owner: Gerencia de Banca Personal
```

**Importancia para IA:** Define qué significa cada variable del modelo, esencial para explicabilidad.

### Diccionario de Datos (Data Dictionary)

**Definición:** Catálogo de elementos de datos técnicos con sus características.

**Contenido típico por elemento:**
- Nombre técnico
- Nombre de negocio (link al glosario)
- Descripción
- Tipo de dato
- Formato
- Valores permitidos
- Reglas de validación
- Sistema fuente
- Tabla/columna

**Ejemplo:**
```
Campo: CLT_INGR_MENSUAL
Nombre de negocio: Ingreso Mensual del Cliente
Descripción: Monto de ingreso mensual declarado por el cliente
             en su última actualización de información
Tipo: DECIMAL(15,2)
Valores: >= 0, <= 10,000,000
Moneda: PEN
Sistema fuente: Core Banking (CBS)
Tabla: TB_CLIENTES
Última actualización: 2026-01-15
```

### Catálogo de Datos (Data Catalog)

**Definición:** Inventario centralizado y buscable de todos los activos de datos de la organización.

**Funcionalidades:**
- Búsqueda por palabras clave
- Navegación por dominios
- Visualización de lineage
- Métricas de uso
- Scores de calidad
- Información de ownership
- Tags y clasificaciones

**Beneficios:**
- Los usuarios encuentran datos rápidamente
- Evita duplicación de datos
- Facilita self-service analytics
- Centraliza documentación
- Habilita governance distribuido

### Data Lineage

**Definición:** Documentación del flujo de datos desde su origen hasta su destino, incluyendo todas las transformaciones.

**Ejemplo de lineage para un modelo de scoring:**
```
Fuentes:
├── Core Banking (CBS) → TB_CLIENTES
│   └── Campos: DNI, Ingreso, Antigüedad
├── CRM → TB_HISTORIAL_CONTACTO
│   └── Campos: Interacciones, Quejas
├── Centrales de Riesgo → API_SENTINEL
│   └── Campos: Score externo, Deudas
    ↓
Transformaciones (ETL):
├── Limpieza de datos → Reglas de calidad
├── Agregación → Métricas por cliente
├── Normalización → Escalado de variables
    ↓
Destino:
└── Modelo de Scoring → Score_Crediticio
```

**Importancia para regulación:**
- DS 115-2025-PCM requiere poder explicar cómo se llega a una decisión
- Sin lineage, es imposible demostrar trazabilidad
- Esencial para auditorías

---

## Parte 3: Metadatos y Data Governance

### El Rol de Metadatos en Governance

Los metadatos son el "sistema nervioso" de Data Governance:

| Función de Governance | Cómo Apoyan los Metadatos |
|----------------------|---------------------------|
| **Accountability** | Documentan quién es responsable de cada dato |
| **Calidad** | Almacenan reglas de calidad y resultados |
| **Seguridad** | Clasifican sensibilidad de datos |
| **Compliance** | Rastrean requisitos regulatorios por dato |
| **Uso** | Registran quién accede y para qué |

### Gobernanza de Metadatos

Los metadatos mismos requieren governance:

**Data Owner de Metadatos:**
- Define estándares de documentación
- Aprueba definiciones de negocio
- Resuelve conflictos de interpretación
- Asegura completitud del catálogo

**Data Steward de Metadatos:**
- Mantiene glosario actualizado
- Documenta nuevos datos
- Valida definiciones con usuarios
- Monitorea calidad de metadatos

**Métricas de Calidad de Metadatos:**
- % de datos documentados en catálogo
- % de datos con definición de negocio
- % de datos con Data Owner asignado
- Completitud de lineage
- Frescura de documentación

---

## Parte 4: Implementación de Metadata Management

### Paso 1: Definir Alcance y Prioridades

**Preguntas clave:**
- ¿Qué datos son más críticos para gobernar?
- ¿Qué metadatos son obligatorios vs. opcionales?
- ¿Quién será responsable de documentar?
- ¿Qué herramientas se usarán?

**Priorización sugerida:**
1. Datos de entrada a modelos de IA de alto riesgo
2. Datos reportados a reguladores
3. Datos compartidos entre múltiples sistemas
4. Datos de clientes (PII)

### Paso 2: Establecer Estándares

**Estándares de nomenclatura:**
- Convenciones para nombres de tablas/campos
- Abreviaturas permitidas
- Idioma (español para negocio, inglés para técnico)

**Estándares de contenido:**
- Plantillas de definición
- Campos obligatorios mínimos
- Formato de descripciones
- Nivel de detalle esperado

**Ejemplo de estándar de definición:**
```
Toda definición de negocio debe:
- Ser comprensible sin conocimiento técnico
- Indicar qué incluye y qué no incluye
- Referenciar el sistema fuente
- Indicar la unidad de medida si aplica
- No exceder 500 caracteres
```

### Paso 3: Seleccionar Herramientas

**Funcionalidades esenciales:**
- Catálogo buscable
- Glosario de negocio
- Lineage visual
- Integración con fuentes de datos
- Workflow de aprobación
- Versionamiento
- API para integración

**Opciones de herramientas:**
Ver: [Herramientas de Data Governance](./data-governance-toolkit.md)

### Paso 4: Poblar Metadatos Iniciales

**Enfoque recomendado:**

1. **Automático primero:** Extraer metadatos técnicos de sistemas fuente
2. **Quick wins:** Documentar definiciones de negocio para datos más usados
3. **Incremental:** Agregar documentación conforme se usan datos
4. **Obligatorio:** Requerir documentación para nuevos datos

**Evitar:**
- Intentar documentar todo de golpe
- Documentación sin validación de usuarios
- Definiciones técnicas sin traducción a negocio

### Paso 5: Mantener y Evolucionar

**Procesos de mantenimiento:**
- Revisión periódica de definiciones (anual)
- Actualización automática de metadatos técnicos
- Proceso de solicitud de cambios
- Eliminación de metadatos obsoletos

**Gobernanza del cambio:**
- Cambios a definiciones requieren aprobación del Data Owner
- Cambios técnicos se reflejan automáticamente
- Historial de versiones para auditoría

---

## Parte 5: Metadatos para Cumplimiento Regulatorio

### Requisitos de DS 115-2025-PCM

| Requisito | Metadatos Necesarios |
|-----------|---------------------|
| **Transparencia algorítmica** | Definiciones de variables, lineage completo |
| **Explicabilidad** | Descripciones de negocio comprensibles |
| **Trazabilidad** | Lineage de datos de entrada a decisión |
| **Documentación** | Catálogo completo de sistemas de IA |
| **Auditoría** | Metadatos operacionales (quién, cuándo, qué) |

### Requisitos de Ley 31814

| Principio | Metadatos de Soporte |
|-----------|---------------------|
| **No discriminación** | Documentación de variables protegidas |
| **Supervisión humana** | Registro de intervenciones humanas |
| **Rendición de cuentas** | Ownership documentado por sistema |

### Checklist de Metadatos para IA

Para cada sistema de IA, documentar:

**Metadatos del Modelo:**
- [ ] Nombre y versión del modelo
- [ ] Propósito y alcance
- [ ] Data Owner responsable
- [ ] Fecha de entrenamiento
- [ ] Fecha de última validación

**Metadatos de Datos de Entrada:**
- [ ] Lista completa de variables
- [ ] Definición de negocio de cada variable
- [ ] Sistema fuente de cada variable
- [ ] Lineage de cada variable
- [ ] Métricas de calidad

**Metadatos de Salida:**
- [ ] Definición del score/predicción
- [ ] Rangos y umbrales
- [ ] Interpretación de resultados
- [ ] Usuarios autorizados

**Metadatos Operacionales:**
- [ ] Frecuencia de ejecución
- [ ] Métricas de performance
- [ ] Logs de decisiones
- [ ] Alertas configuradas

---

## Parte 6: Métricas de Metadata Management

### KPIs de Cobertura

| Métrica | Fórmula | Meta Sugerida |
|---------|---------|---------------|
| % Datos catalogados | Datos en catálogo / Total datos | > 90% |
| % Datos con definición de negocio | Datos con definición / Total datos | > 80% |
| % Datos con Data Owner | Datos con owner / Total datos | > 95% |
| % Lineage documentado | Flujos documentados / Total flujos | > 80% |

### KPIs de Calidad

| Métrica | Descripción | Meta Sugerida |
|---------|-------------|---------------|
| Frescura de metadatos | Días desde última actualización | < 90 días |
| Completitud de documentación | % campos obligatorios poblados | > 95% |
| Consistencia de definiciones | % términos con definición única | 100% |
| Satisfacción de usuarios | Encuesta de utilidad del catálogo | > 4/5 |

### KPIs de Uso

| Métrica | Descripción | Interpretación |
|---------|-------------|----------------|
| Búsquedas en catálogo | # búsquedas por mes | Adopción del catálogo |
| Usuarios activos | # usuarios que acceden | Penetración en organización |
| Datos más vistos | Top 10 datasets | Prioridad de documentación |
| Términos más buscados | Top queries | Gaps de documentación |

---

## Parte 7: Casos de Uso de Metadatos

### Caso 1: Onboarding de Nuevo Analista

**Sin metadatos:**
- Semanas preguntando a colegas qué significa cada campo
- Errores por malentender datos
- Frustración y baja productividad

**Con metadatos:**
- Busca en catálogo, encuentra definiciones
- Entiende lineage y confiabilidad
- Productivo en días, no semanas

### Caso 2: Auditoría Regulatoria

**Sin metadatos:**
- Semanas armando documentación ad-hoc
- Inconsistencias entre lo que se dice y lo que es
- Riesgo de hallazgos por falta de documentación

**Con metadatos:**
- Catálogo listo para presentar
- Lineage demuestra trazabilidad
- Auditoría eficiente y sin sorpresas

### Caso 3: Nuevo Modelo de IA

**Sin metadatos:**
- Data scientists piden acceso a múltiples equipos
- Meses entendiendo qué datos existen
- Descubrimiento ad-hoc, posible uso de datos incorrectos

**Con metadatos:**
- Buscan en catálogo variables relevantes
- Entienden calidad y limitaciones
- Decisión informada de qué datos usar

---

## Artículos Relacionados

- [Framework de Data Governance](./data-governance-framework.md)
- [Framework de Calidad de Datos](./data-quality-framework.md)
- [Herramientas de Data Governance](./data-governance-toolkit.md)
- [Fundamentos de Data Governance (CDGP)](./data-governance-fundamentals.md)
- [DS 115-2025-PCM](../regulations/ds-115-2025-pcm.md)
- [Ley 31814](../regulations/ley-31814.md)

---

*Última actualización: Enero 2026*
*Fuente: DAMA DMBOK, Data Management Body of Knowledge*
