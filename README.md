# QA Services Website

Este proyecto es una página web dedicada a ofrecer información sobre los servicios de aseguramiento de calidad (QA) proporcionados por CleverIT. La aplicación está construida utilizando React y TypeScript, y está organizada en varias secciones para facilitar la navegación y el acceso a la información.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
qa-services-website
├── src
│   ├── components
│   │   ├── Header.tsx        # Componente para el encabezado de la página
│   │   ├── Footer.tsx        # Componente para el pie de página
│   │   ├── Navigation.tsx     # Componente para la barra de navegación
│   │   └── ServiceCard.tsx    # Componente para mostrar información de servicios
│   ├── pages
│   │   ├── Home.tsx          # Página de inicio
│   │   ├── Services.tsx      # Página de servicios
│   │   ├── QaaS.tsx          # Página de "Quality as a Service"
│   │   ├── DevTestOps.tsx    # Página de "DevTestOps"
│   │   └── Contact.tsx       # Página de contacto
│   ├── styles
│   │   ├── globals.css       # Estilos globales
│   │   ├── components.css     # Estilos para componentes
│   │   └── pages.css         # Estilos para páginas
│   ├── assets
│   │   └── fonts             # Fuentes utilizadas en el proyecto
│   ├── utils
│   │   └── constants.ts      # Constantes utilizadas en la aplicación
│   └── App.tsx               # Punto de entrada de la aplicación
├── public
│   └── index.html            # Archivo HTML principal
├── package.json              # Configuración del proyecto para npm
├── tsconfig.json             # Configuración de TypeScript
└── README.md                 # Documentación del proyecto
```

## Instalación

Para configurar el proyecto, debes instalar las siguientes dependencias:

- React
- ReactDOM
- TypeScript
- CSS Modules (opcional, si decides usar módulos CSS)

Ejecuta los siguientes comandos en tu terminal:

```
npm init -y
npm install react react-dom typescript
npm install --save-dev @types/react @types/react-dom
```

## Configuración de TypeScript

Asegúrate de tener configurado el archivo `tsconfig.json` con las siguientes opciones básicas:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "jsx": "react",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
```

## Ejecución del Proyecto

Finalmente, puedes iniciar el proyecto con un servidor de desarrollo como Create React App o Vite, dependiendo de tu preferencia.