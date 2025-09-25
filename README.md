# QA Services Website

Este proyecto es una página web dedicada a ofrecer información sobre los servicios de aseguramiento de calidad (QA) proporcionados por CleverIT. La aplicación está construida utilizando React y TypeScript con Create React App, y está organizada en varias secciones para facilitar la navegación y el acceso a la información.

## Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript** - Superset de JavaScript que añade tipado estático
- **React Router DOM** - Enrutamiento para aplicaciones React
- **Lucide React** - Librería de iconos para React
- **CSS3** - Estilos personalizados organizados por componentes y páginas

## Estructura del Proyecto

```
serviciosQA/
├── public/
│   └── index.html                # Archivo HTML principal
├── src/
│   ├── components/
│   │   ├── Header.tsx            # Componente para el encabezado de la página
│   │   ├── Navigation.tsx        # Componente para la barra de navegación
│   │   ├── ServiceCard.tsx       # Componente para mostrar información de servicios
│   │   ├── ServiceCarousel.tsx   # Carrusel de servicios
│   │   ├── ServiceModal.tsx      # Modal para detalles de servicios
│   │   ├── TechStackCard.tsx     # Tarjeta para tecnologías
│   │   ├── TechStackModal.tsx    # Modal para stack tecnológico
│   │   └── ToolsCarousel.tsx     # Carrusel de herramientas
│   ├── pages/
│   │   ├── Home.tsx              # Página de inicio
│   │   ├── Services.tsx          # Página de servicios
│   │   ├── QaaS.tsx              # Página de "Quality as a Service"
│   │   ├── DevTestOps.tsx        # Página de "DevTestOps"
│   │   ├── TechStack.tsx         # Página de stack tecnológico
│   │   ├── Benefits.tsx          # Página de beneficios
│   │   ├── Methodology.tsx       # Página de metodología
│   │   └── Contact.tsx           # Página de contacto
│   ├── styles/
│   │   ├── globals.css           # Estilos globales
│   │   ├── components.css        # Estilos para componentes
│   │   └── pages.css             # Estilos para páginas
│   ├── assets/
│   │   └── fonts/                # Fuentes utilizadas en el proyecto
│   ├── utils/
│   │   └── constants.ts          # Constantes utilizadas en la aplicación
│   ├── App.tsx                   # Componente principal de la aplicación
│   └── index.tsx                 # Punto de entrada de la aplicación
├── package.json                  # Configuración del proyecto para npm
├── tsconfig.json                 # Configuración de TypeScript
└── README.md                     # Documentación del proyecto
```

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** (normalmente viene incluido con Node.js)

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/alletxis-clever/serviciosQA.git
   cd serviciosQA
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

## Comandos Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

La página se recargará automáticamente cuando hagas cambios en el código.
También verás errores de lint en la consola.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.
Optimiza React para el mejor rendimiento, minimiza el código y los nombres de archivos incluyen hashes para el cacheo.

### `npm test`

Inicia el corredor de pruebas en modo interactivo.
Consulta la sección sobre [ejecutar pruebas](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run eject`

**Nota: esta es una operación de un solo sentido. ¡Una vez que ejecutes `eject`, no podrás volver atrás!**

Si no estás satisfecho con la herramienta de construcción y las opciones de configuración, puedes "eject" en cualquier momento.

## Inicio Rápido

Para levantar el proyecto de desarrollo:

```bash
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Iniciar el servidor de desarrollo
npm start
```

El proyecto se abrirá automáticamente en tu navegador en `http://localhost:3000`.

## Configuración de TypeScript

El proyecto utiliza TypeScript con la configuración optimizada para React. El archivo `tsconfig.json` está preconfigurado con las mejores prácticas para desarrollo con Create React App.

## Funcionalidades Principales

- **Navegación por secciones:** Home, Services, QaaS, DevTestOps, TechStack, Benefits, Methodology, y Contact
- **Componentes interactivos:** Carruseles, modales, y tarjetas de información
- **Diseño responsive:** Adaptado para dispositivos móviles y desktop
- **Routing:** Navegación entre páginas utilizando React Router
- **Iconografía:** Integración con Lucide React para iconos consistentes

## Estructura de Estilos

Los estilos están organizados en tres archivos principales:

- `globals.css`: Estilos globales y reset CSS
- `components.css`: Estilos específicos para componentes reutilizables
- `pages.css`: Estilos específicos para cada página

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Autor

**Alletxis Villaparedes** - CleverIT




