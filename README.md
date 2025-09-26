# 🚀 QA Services Website - CleverIT

Una moderna aplicación web que presenta los servicios de aseguramiento de calidad (QA) de CleverIT, construida con las mejores prácticas de desarrollo y un enfoque técnico robusto basado en TMAP (Test Management Approach).

## ✨ Características Principales

- 🎯 **Servicios QA Completos**: QAaaS, DevTestOps, Pruebas Funcionales/No Funcionales, Equipos Dedicados, QA con IA
- 🛠️ **Stack Tecnológico Avanzado**: Herramientas modernas para todas las necesidades de QA
- 📋 **Metodología TMAP**: Framework estructurado y adaptable para gestión de pruebas
- 🎨 **Diseño Responsive**: Experiencia optimizada en todos los dispositivos
- ♿ **Accesibilidad**: Cumple estándares ARIA y navegación por teclado
- 🧪 **Testing Robusto**: 14 pruebas automatizadas con 100% de éxito
- 🛡️ **Error Handling**: Error Boundaries para manejo resiliente de errores

## 🔧 Stack Tecnológico

### **Core Technologies**
- **React 18** - Biblioteca moderna con Concurrent Features
- **TypeScript** - Tipado estático para mayor robustez
- **React Router DOM v6** - Enrutamiento declarativo con accesibilidad
- **Lucide React** - Iconografía consistente y moderna

### **Calidad de Código**
- **ESLint** - Análisis estático de código con reglas personalizadas
- **Prettier** - Formateo automático de código
- **Jest & React Testing Library** - Testing moderno y accesible

### **Desarrollo**
- **Create React App** - Configuración optimizada sin eject
- **CSS3 Moderno** - Flexbox, Grid, Custom Properties
- **Environment Configuration** - Configuración flexible por entorno

## 📁 Estructura del Proyecto

```
serviciosQA/
├── 🌐 public/
│   └── index.html                    # Archivo HTML principal
├── 📦 src/
│   ├── 🧱 components/
│   │   ├── ErrorBoundary.tsx         # 🛡️ Manejo robusto de errores
│   │   ├── Header.tsx                # 📍 Encabezado con branding CleverIT
│   │   ├── Navigation.tsx            # 🧭 Navegación accesible con ARIA
│   │   ├── ServiceCard.tsx           # 📋 Tarjetas de servicios QA
│   │   ├── ServiceCarousel.tsx       # 🎠 Carrusel interactivo de servicios
│   │   ├── ServiceModal.tsx          # 📱 Modal detallado con focus trap
│   │   ├── TechStackCard.tsx         # 🛠️ Tarjetas de tecnologías
│   │   ├── TechStackModal.tsx        # 📊 Modal de stack tecnológico
│   │   └── ToolsCarousel.tsx         # 🔧 Carrusel de herramientas QA
│   ├── 📄 pages/
│   │   ├── Home.tsx                  # 🏠 Página principal con propuesta de valor
│   │   ├── Services.tsx              # 🚀 Catálogo completo de servicios QA
│   │   ├── QaaS.tsx                  # 🛡️ Quality as a Service
│   │   ├── DevTestOps.tsx            # 🔄 Integración DevOps + QA
│   │   ├── TechStack.tsx             # 🛠️ Stack tecnológico especializado
│   │   ├── Benefits.tsx              # ⭐ Beneficios para clientes
│   │   ├── Methodology.tsx           # 📋 Metodología TMAP detallada
│   │   └── Contact.tsx               # 📞 Información de contacto
│   ├── 🧪 __tests__/                 # Suite completa de pruebas
│   │   ├── App.test.tsx              # ✅ Tests del componente principal
│   │   ├── components/
│   │   │   ├── ErrorBoundary.test.tsx # 🛡️ Tests de manejo de errores
│   │   │   └── Navigation.test.tsx    # 🧭 Tests de navegación
│   │   └── pages/
│   │       └── Home.test.tsx         # 🏠 Tests de página principal
│   ├── 🎨 styles/
│   │   ├── globals.css               # 🌍 Estilos globales + accesibilidad
│   │   ├── components.css            # 🧱 Estilos de componentes
│   │   └── pages.css                 # 📄 Estilos específicos de páginas
│   ├── 📂 assets/
│   │   └── fonts/                    # 🔤 Tipografías del proyecto
│   ├── 🔧 utils/
│   │   └── constants.ts              # 📊 Datos y constantes tipadas
│   ├── App.tsx                       # 🎯 Componente raíz con Error Boundaries
│   ├── index.tsx                     # 🚀 Punto de entrada de la aplicación
│   └── setupTests.ts                 # ⚙️ Configuración del entorno de testing
├── ⚙️  Configuración
│   ├── .env                          # 🌐 Variables de entorno (dominio personalizado)
│   ├── .eslintrc.json                # 📏 Configuración ESLint
│   ├── .prettierrc.json              # 💄 Configuración Prettier
│   ├── .prettierignore               # 🚫 Archivos excluidos de formateo
│   ├── package.json                  # 📦 Dependencias y scripts
│   ├── tsconfig.json                 # 📘 Configuración TypeScript
│   └── README.md                     # 📖 Documentación del proyecto
```

## 🏗️ Arquitectura y Patrones

- **🛡️ Error Boundaries**: Manejo resiliente de errores en múltiples capas
- **♿ Accesibilidad**: Cumplimiento ARIA, navegación por teclado, semántica HTML
- **🧪 Testing Strategy**: Cobertura integral con Testing Library patterns
- **📱 Responsive Design**: Mobile-first con breakpoints optimizados
- **🔄 State Management**: Props drilling optimizado con contexto local
- **🎨 CSS Architecture**: Módulos organizados por responsabilidad

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior) - Runtime JavaScript
- **npm** (versión 7+) - Gestor de paquetes
- **Git** - Control de versiones

## 🚀 Instalación y Configuración

### 1. **Clona el repositorio**
```bash
git clone https://github.com/alletxis-clever/serviciosQA.git
cd serviciosQA
```

### 2. **Instala las dependencias**
```bash
npm install
```

### 3. **Configuración del dominio personalizado (opcional)**
El proyecto incluye configuración para usar un dominio personalizado en desarrollo:

```bash
# El archivo .env ya está configurado con:
HOST=servicesqa.local
PORT=3000
```

Para usar el dominio personalizado, añade esta línea a tu archivo `/etc/hosts`:
```
127.0.0.1 servicesqa.local
```

### 4. **Verifica la instalación**
```bash
# Ejecuta los tests para verificar que todo funciona
npm test -- --watchAll=false

# Ejecuta el linter
npm run lint

# Inicia el servidor de desarrollo
npm start
```

## 📋 Scripts Disponibles

### 🚀 **Desarrollo**
```bash
# Inicia el servidor de desarrollo
npm start
# Abre http://localhost:3000 o http://servicesqa.local:3000
```

### 🧪 **Testing**
```bash
# Ejecuta todas las pruebas
npm test

# Ejecuta las pruebas una sola vez (ideal para CI)
npm test -- --watchAll=false

# Ejecuta las pruebas con cobertura
npm test -- --coverage
```

### 🔍 **Calidad de Código**
```bash
# Ejecuta ESLint para detectar problemas
npm run lint

# Ejecuta ESLint y corrige problemas automáticamente
npm run lint:fix

# Formatea el código con Prettier
npm run format

# Verifica el formateo sin modificar archivos
npm run format:check
```

### 🏗️ **Construcción**
```bash
# Construye la aplicación para producción
npm run build
# Genera archivos optimizados en la carpeta build/
```

### ⚠️ **Avanzado (No Recomendado)**
```bash
# Expone la configuración interna de Create React App
npm run eject
# ⚠️ Esta operación es irreversible
```

## 🧪 Testing Strategy

El proyecto incluye una suite completa de pruebas:

- **✅ 14 pruebas** distribuidas en 4 suites
- **🧱 Component Testing**: Tests unitarios de componentes críticos
- **📄 Page Testing**: Tests de integración de páginas principales
- **🛡️ Error Boundary Testing**: Cobertura de manejo de errores
- **♿ Accessibility Testing**: Verificación de patrones accesibles

### Cobertura Actual:
- **App Component**: Tests de renderizado y navegación
- **Navigation**: Tests de accesibilidad y roles ARIA
- **Home Page**: Tests de contenido y enlaces
- **Error Boundary**: Tests de captura y recuperación de errores

## ⚡ Inicio Rápido

### Desarrollo Local
```bash
# Clona e instala
git clone https://github.com/alletxis-clever/serviciosQA.git
cd serviciosQA
npm install

# Verifica que todo esté funcionando
npm run lint && npm test -- --watchAll=false

# Inicia el servidor de desarrollo
npm start
```

🌐 **Accede a la aplicación:**
- Local: `http://localhost:3000`
- Dominio personalizado: `http://servicesqa.local:3000` (si configuraste /etc/hosts)

## 🛠️ Configuración Técnica

### **TypeScript**
Configuración strict habilitada con:
- `noImplicitAny`: true
- `strictNullChecks`: true
- Integración completa con React 18

### **ESLint + Prettier**
- Reglas personalizadas para React y TypeScript
- Formateo automático en save
- Integración con Testing Library rules

### **Testing Environment**
- Jest configurado con jsdom
- React Testing Library para tests accesibles
- Setup automático con `@testing-library/jest-dom`

## 🎯 Funcionalidades del Negocio

### **Servicios QA Showcase**
1. **🛡️ QAaaS** - Quality as a Service integrado
2. **🔄 DevTestOps** - Integración CI/CD con testing
3. **🔍 Testing Especializado** - Funcional y No Funcional
4. **👥 Equipos Dedicados** - Células QA para proyectos complejos
5. **🤖 QA con IA** - Automatización inteligente y predictiva

### **Stack Tecnológico Detallado**
- **Pruebas Funcionales**: Selenium, Cypress, Appium, BrowserStack
- **Pruebas No Funcionales**: JMeter, K6, LoadRunner
- **CI/CD Testing**: Jenkins, Azure DevOps, Docker
- **Quality Control**: SonarQube, análisis estático
- **IA Aplicada**: Testim, Mabl, Applitools, ChatGPT APIs

### **Metodología TMAP**
Roadmap completo de adopción organizacional con 5 fases:
1. Preparación y Diagnóstico
2. Diseño del Framework QA  
3. Implementación Piloto
4. Escalamiento y Optimización
5. Madurez Organizacional

## 🎨 Arquitectura de Estilos

```
styles/
├── globals.css      # Base styles, CSS reset, accessibility
├── components.css   # Reusable component styles  
└── pages.css        # Page-specific styles
```

**Características:**
- 📱 **Mobile-first** responsive design
- 🎯 **CSS Custom Properties** para consistencia
- ♿ **Accessibility-focused** con focus states y ARIA
- 🌈 **Color system** coherente con brand CleverIT

## 🔧 Guía de Desarrollo

### **Estructura de Commits**
Utilizamos [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Nuevas funcionalidades
git commit -m "feat(services): add QA with AI service modal"

# Corrección de bugs  
git commit -m "fix(navigation): resolve ARIA labels in mobile menu"

# Mejoras de código
git commit -m "refactor(components): optimize ServiceCarousel performance"

# Tests
git commit -m "test(pages): add Home page accessibility tests"

# Documentación
git commit -m "docs(readme): update installation instructions"
```

### **Estándares de Código**
- ✅ **Tests obligatorios** para nuevos componentes
- 🔍 **ESLint passing** antes de commit
- 💄 **Prettier formatting** automático
- ♿ **Accessibility compliance** en componentes interactivos
- 📝 **TypeScript strict** sin any implícito

### **Workflow de Contribución**
1. **Fork** el repositorio
2. **Crea una rama** descriptiva: `git checkout -b feature/nombre-descriptivo`
3. **Desarrolla** siguiendo los estándares
4. **Ejecuta tests**: `npm test -- --watchAll=false`
5. **Verifica linting**: `npm run lint`
6. **Commit** con mensaje conventional
7. **Push** y crea **Pull Request**

## 📊 Métricas del Proyecto

- **📝 Líneas de código**: ~8,000+ líneas
- **🧱 Componentes**: 12 componentes reutilizables
- **📄 Páginas**: 8 páginas principales
- **🧪 Tests**: 14 pruebas automatizadas
- **♿ Accesibilidad**: Nivel AA compliance
- **📱 Responsive**: 5 breakpoints optimizados
- **⚡ Performance**: Optimizado para Core Web Vitals

## 🚀 Deployment

### **Preparación para Producción**
```bash
# Verifica calidad antes del deploy
npm run lint:fix
npm test -- --watchAll=false
npm run build

# Verifica que el build sea exitoso
npm run serve  # Si tienes serve instalado globalmente
```

### **Variables de Entorno**
```bash
# Desarrollo
HOST=servicesqa.local
PORT=3000

# Producción (agregar según necesidad)
REACT_APP_API_URL=https://api.cleverit.com
REACT_APP_ENVIRONMENT=production
```

## 📞 Soporte y Contacto

- **🏢 Empresa**: CleverIT - Servicios de QA
- **👨‍💻 Desarrollador**: Alletxis Villaparedes
- **📧 Email**: info@cleverit.com
- **📱 Teléfono**: +54 11 1234-5678
- **🌐 Sitio Web**: [Propuesta de Servicios QA](http://servicesqa.local:3000)

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo `LICENSE` para más detalles.

---

**🎯 Construido con excelencia técnica para CleverIT**  
*Asegurando la calidad desde la arquitectura hasta el producto final* 🛡️




