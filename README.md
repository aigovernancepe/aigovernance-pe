# aigovernance.pe - Landing Page

Landing page profesional para servicios de Data Governance y Compliance de IA para el sector financiero en Perú.

## 🚀 Stack Tecnológico

- **HTML5** - Estructura semántica y SEO optimizado
- **CSS3** - Diseño moderno con variables CSS y gradientes
- **JavaScript Vanilla** - Interacciones sin dependencias
- **GitHub Pages** - Hosting gratuito y confiable

## 🎨 Características de Diseño

- ✅ Diseño responsive (mobile-first)
- ✅ Paleta de colores: Azul oscuro (#1e3a8a) + Verde (#10b981)
- ✅ Animaciones suaves al scroll
- ✅ Formulario de contacto funcional
- ✅ SEO optimizado para Google
- ✅ Performance optimizado (carga rápida)

## 📁 Estructura del Proyecto

```
aigovernance-landing/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos completos
├── js/
│   └── main.js        # JavaScript interactivo
├── assets/
│   └── images/        # (Crear si necesitas logos/fotos)
└── README.md          # Este archivo
```

## 🔧 Instalación en GitHub Pages

### Paso 1: Crear Repositorio en GitHub

1. Ve a [GitHub.com](https://github.com) y haz login
2. Click en el botón **"+"** (arriba derecha) → **"New repository"**
3. Configuración del repositorio:
   - **Repository name:** `aigovernance-pe` (o el nombre que prefieras)
   - **Description:** "Landing page para aigovernance.pe - Data Governance & AI Compliance"
   - **Visibility:** Público (para GitHub Pages gratuito)
   - ✅ Check "Add a README file" (opcional)
4. Click **"Create repository"**

### Paso 2: Subir los Archivos

**Opción A: Usar la Interfaz Web de GitHub** (Más fácil)

1. En tu nuevo repositorio, click en **"Add file"** → **"Upload files"**
2. Arrastra o selecciona todos estos archivos:
   - `index.html`
   - Carpeta `css/` con `style.css`
   - Carpeta `js/` con `main.js`
3. Escribe un mensaje: "Initial commit - Landing page completa"
4. Click **"Commit changes"**

**Opción B: Usar Git desde Terminal** (Más profesional)

```bash
# Navega a la carpeta donde descargaste los archivos
cd /ruta/a/aigovernance-landing

# Inicializa Git
git init

# Agrega todos los archivos
git add .

# Haz el primer commit
git commit -m "Initial commit - Landing page completa"

# Conecta con tu repositorio de GitHub (reemplaza USERNAME con tu usuario)
git remote add origin https://github.com/USERNAME/aigovernance-pe.git

# Sube los archivos
git branch -M main
git push -u origin main
```

### Paso 3: Activar GitHub Pages

1. En tu repositorio, ve a **Settings** (⚙️)
2. En el menú lateral, busca **"Pages"** (en la sección "Code and automation")
3. En **"Source"**, selecciona:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Click **"Save"**
5. Espera 1-2 minutos
6. ¡Tu sitio estará disponible en: `https://USERNAME.github.io/aigovernance-pe/`!

### Paso 4: Configurar Dominio Personalizado (aigovernance.pe)

#### A) Configurar DNS en tu Proveedor de Dominio

Ve al panel de control de tu proveedor de dominio (donde compraste aigovernance.pe) y agrega estos registros DNS:

**Registros A (para dominio root):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**Registro CNAME (para www):**
```
Type: CNAME
Name: www
Value: USERNAME.github.io
```

#### B) Configurar en GitHub Pages

1. Ve a **Settings** → **Pages** en tu repositorio
2. En **"Custom domain"**, escribe: `aigovernance.pe`
3. Click **"Save"**
4. Espera a que aparezca el check verde ✅
5. ✅ Activa **"Enforce HTTPS"** (importante para seguridad)

**Nota:** Los cambios DNS pueden tardar 24-48 horas en propagarse completamente.

## 📧 Configurar Email (wilko.feye@aigovernance.pe)

### Opción 1: Google Workspace (Recomendado para profesionales)

1. Ve a [Google Workspace](https://workspace.google.com)
2. Inicia prueba gratuita de 14 días
3. Durante la configuración, te pedirá verificar tu dominio
4. Agrega los registros MX que Google te proporcione en tu proveedor de dominio
5. Una vez verificado, crea: `wilko.feye@aigovernance.pe`

**Costo:** USD 6-12/mes (depende del plan)

### Opción 2: Zoho Mail (Alternativa gratuita hasta 5 usuarios)

1. Ve a [Zoho Mail](https://www.zoho.com/mail/)
2. Regístrate con tu dominio `aigovernance.pe`
3. Verifica tu dominio (agregando registros DNS)
4. Crea el email: `wilko.feye@aigovernance.pe`

**Costo:** Gratis para hasta 5 usuarios

## 🔗 Integrar Formulario de Contacto

El formulario actual guarda datos en la consola. Para hacerlo funcional:

### Opción 1: Google Forms (Más fácil)

1. Crea un Google Form con los mismos campos
2. Obtén el URL de "pre-filled link"
3. Reemplaza el `action` del form en `index.html`

### Opción 2: Formspree (Recomendado)

1. Ve a [Formspree.io](https://formspree.io)
2. Regístrate (plan gratuito: 50 envíos/mes)
3. Crea un nuevo form
4. Copia el endpoint que te dan
5. En `js/main.js`, reemplaza la función `simulateFormSubmission`:

```javascript
async function submitToFormspree(data) {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return response.json();
}
```

### Opción 3: Google Apps Script (Gratis, más técnico)

1. Crea un nuevo Google Sheet
2. Tools → Script Editor
3. Crea un Web App que reciba POST requests
4. Configura como público
5. Usa el URL del Web App en tu formulario

## 📊 Agregar Google Analytics (Opcional)

1. Ve a [Google Analytics](https://analytics.google.com)
2. Crea una propiedad para `aigovernance.pe`
3. Obtén tu Measurement ID (G-XXXXXXXXXX)
4. Agrega antes del cierre de `</head>` en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔍 SEO - Keywords Configuradas

El sitio ya está optimizado para estas keywords principales:

- data governance peru
- compliance ia peru
- DS 115-2025-PCM
- gobernanza datos financiero
- calidad datos ia
- consultoria data governance peru
- auditoria sistemas ia

### Verificar SEO:

1. **Google Search Console:**
   - Verifica tu propiedad: `aigovernance.pe`
   - Envía el sitemap (se genera automático en GitHub Pages)

2. **Meta tags:** Ya incluidos en `index.html`
   - Title, Description, Open Graph, Twitter Cards

## ✅ Checklist Pre-Lanzamiento

- [ ] Repositorio creado en GitHub
- [ ] Archivos subidos correctamente
- [ ] GitHub Pages activado
- [ ] DNS configurado para aigovernance.pe
- [ ] Email wilko.feye@aigovernance.pe funcionando
- [ ] Formulario de contacto conectado
- [ ] Probar en móvil (responsive)
- [ ] Probar en diferentes navegadores
- [ ] Google Analytics instalado (opcional)
- [ ] Google Search Console verificado
- [ ] LinkedIn actualizado con el dominio

## 🔄 Hacer Cambios Futuros

Para actualizar el sitio después del lanzamiento:

**Opción A: Editar directamente en GitHub**
1. Ve a tu repositorio
2. Click en el archivo que quieres editar (ej: `index.html`)
3. Click en el ícono del lápiz ✏️
4. Haz tus cambios
5. Scroll down → "Commit changes"
6. Los cambios aparecerán en 1-2 minutos en aigovernance.pe

**Opción B: Editar localmente y subir con Git**
```bash
# Edita los archivos localmente
# Luego:
git add .
git commit -m "Descripción de los cambios"
git push
```

## 📱 Testing Responsive

Tu sitio está optimizado para:
- 📱 Mobile (320px - 767px)
- 📱 Tablet (768px - 1023px)
- 💻 Desktop (1024px+)

Prueba en: [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 🎯 Próximos Pasos Recomendados

1. **Inmediato:**
   - [ ] Sube el sitio a GitHub Pages
   - [ ] Configura DNS para aigovernance.pe
   - [ ] Activa email profesional
   - [ ] Conecta formulario de contacto

2. **Primera semana:**
   - [ ] Agrega Google Analytics
   - [ ] Verifica en Google Search Console
   - [ ] Comparte en LinkedIn
   - [ ] Prueba desde diferentes dispositivos

3. **Primer mes:**
   - [ ] Escribe 2-3 artículos de blog (LinkedIn)
   - [ ] Optimiza según métricas de Analytics
   - [ ] Considera agregar testimonios
   - [ ] Crea página de recursos/blog

## 🆘 Soporte

Si tienes problemas:
1. Revisa la [documentación de GitHub Pages](https://docs.github.com/en/pages)
2. Verifica que todos los archivos estén en las carpetas correctas
3. Asegúrate que los registros DNS estén correctos (usa [whatsmydns.net](https://www.whatsmydns.net))

## 📄 Licencia

© 2025 Wilko Feye - aigovernance.pe

---

**¿Preguntas?** Revisa este README o contacta: wilko.feye@aigovernance.pe
