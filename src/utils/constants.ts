// Constants file

export interface QAService {
  id: string;
  title: string;
  description: string;
  icon: string;
  backgroundColor: string;
  team: {
    roles: string[];
    count: string;
  };
  tools: string[];
  includes: string[];
  benefits?: string[];
  kpis: {
    title: string;
    description: string;
    icon: string;
    color: string;
  }[];
}

export interface TechStackItem {
  category: string;
  items: string[];
}

export interface TechStack {
  id: string;
  title: string;
  description: string;
  icon: string;
  backgroundColor: string;
  details: TechStackItem[];
}

export const HOME_INFO_CARDS = [
  {
    icon: '🤝',
    title: 'Confianza',
    description: 'Garantizamos entregas estables y sin sorpresas, para que tu software sea tan confiable como lo necesitas.'
  },
  {
    icon: '⚡',
    title: 'Eficiencia',
    description: 'Optimizamos tiempos y costos con un equilibrio entre pruebas manuales y automatizadas.'
  },
  {
    icon: '😊',
    title: 'Experiencia de usuario',
    description: 'Más allá de detectar bugs, nos enfocamos en que tu producto ofrezca una experiencia fluida y satisfactoria.'
  },
  {
    icon: '🔧',
    title: 'Adaptabilidad',
    description: 'Diseñamos estrategias de QA a medida, alineadas con la realidad de tu negocio y tus objetivos de crecimiento.'
  },
  {
    icon: '🎯',
    title: 'Expertise',
    description: 'Contamos con un equipo especializado y herramientas de vanguardia para cubrir pruebas funcionales, no funcionales, automatización y performance.'
  }
];

export const NAVIGATION_ITEMS = [
  { path: '/', label: 'Inicio' },
  { path: '/services', label: 'Servicios' },
  { path: '/tech-stack', label: 'Stack Tecnológico' },
  { path: '/methodology', label: 'Metodología' },
  { path: '/benefits', label: 'Beneficios' }
];

export const COMPANY_INFO = {
  name: 'CleverIT',
  description: 'En CleverIT aseguramos la calidad de tu software desde la arquitectura hasta el producto final.',
  approach: 'Nuestro enfoque se basa en TMAP (Test Management Approach), que nos permite garantizar consistencia, trazabilidad y control en todas las etapas de QA, aplicando prácticas de Risk-Based Testing, procesos estructurados, toolkits modernos y una metodología adaptable a Agile, DevOps y Waterfall.',
  email: 'info@cleverit.com',
  phone: '+54 11 1234-5678'
};

export const COMPANY_BENEFITS = [
  {
    icon: '🚀',
    title: 'Reducción del tiempo de ejecución',
    description: 'Optimizamos procesos para acelerar las pruebas sin comprometer calidad'
  },
  {
    icon: '🛡️',
    title: 'Sitios estables',
    description: 'Aplicaciones sin caídas y con alta disponibilidad'
  },
  {
    icon: '✅',
    title: 'Entregas a tiempo',
    description: 'Sin demoras, cumpliendo los plazos establecidos'
  },
  {
    icon: '⭐',
    title: 'Mejor reputación',
    description: 'Mejores calificaciones en tiendas de aplicaciones'
  },
  {
    icon: '👥',
    title: 'Equipo productivo',
    description: 'Un equipo menos cansado y más enfocado en innovar'
  },
  {
    icon: '💰',
    title: 'Reducción de costos',
    description: 'Menos horas de trabajo en debugging y fixes'
  }
];

export const QA_SERVICES: QAService[] = [
  {
    id: 'qaas',
    title: 'Quality as a Service (QAaaS)',
    description: 'Modelo flexible donde nos integramos como parte de tu equipo para cubrir todas las necesidades de QA (manual, automatización, performance, seguridad y mobile).',
    icon: '🛡️',
    backgroundColor: '#f0f8ff',
    team: {
      roles: ['QA Lead (estrategia y gestión)', 'QA Manual / Automation (según tamaño de equipo dev)'],
      count: '1-4 personas'
    },
    tools: ['Cypress, Selenium, Appium, RestAssured', 'JMeter, K6 (performance)', 'Jira, Zephyr, Azure Test Plans (gestión)'],
    includes: ['Implementación de un marco QA basado en TMAP', 'Estrategia QA + ejecución + reporting', 'KPIs: defect leakage, automation coverage, defect density'],
    kpis: [
      { title: 'Defect Leakage', description: 'Defectos en producción', icon: '🔴', color: '#e74c3c' },
      { title: 'Automation Coverage', description: 'Cobertura automatizada', icon: '⚡', color: '#f39c12' },
      { title: 'Defect Density', description: 'Densidad de defectos', icon: '📈', color: '#27ae60' }
    ]
  },
  {
    id: 'devtestops',
    title: 'DevTestOps',
    description: 'Integramos QA en el ciclo completo de DevOps: pruebas desde el día 1, pipelines CI/CD, feedback temprano y monitoreo continuo.',
    icon: '�',
    backgroundColor: '#fff5ee',
    team: {
      roles: ['QA Automation', 'DevOps Engineer', 'QA Manual (para exploratorias y regresión)'],
      count: '3 personas'
    },
    tools: ['Jenkins, GitHub Actions, Azure DevOps (CI/CD)', 'SonarQube, Snyk (seguridad y calidad de código)', 'Cypress, Selenium, Postman (funcional y API)'],
    includes: ['Estrategia DevTestOps con TMAP adaptado a integración continua', 'Framework de automatización + pipelines versionados', 'Dashboards de métricas en tiempo real'],
    kpis: [
      { title: 'Pipeline Success Rate', description: 'Tasa de éxito de pipelines', icon: '✅', color: '#27ae60' },
      { title: 'Deployment Frequency', description: 'Frecuencia de despliegues', icon: '�', color: '#3498db' },
      { title: 'Mean Time to Recovery', description: 'Tiempo medio de recuperación', icon: '⏱️', color: '#f39c12' }
    ]
  },
  {
    id: 'functional-nonfunctional',
    title: 'Proyectos de pruebas funcionales y no funcionales',
    description: 'Enfoque puntual para proyectos con requerimientos específicos (ej: performance, seguridad, accesibilidad o pruebas funcionales críticas).',
    icon: '🔍',
    backgroundColor: '#f0fff0',
    team: {
      roles: ['QA Lead (definición estrategia)', 'QA Manual', 'QA Automation (si aplica no funcionales)'],
      count: '2-4 personas'
    },
    tools: ['Funcionales: Cypress, Selenium', 'No funcionales: JMeter, K6, Burp Suite, BrowserStack'],
    includes: ['Diseño y ejecución de pruebas funcionales (UI/API/Back)', 'Performance y stress testing', 'Reporte ejecutivo de riesgos y métricas'],
    kpis: [
      { title: 'Test Coverage', description: 'Cobertura de pruebas', icon: '�', color: '#27ae60' },
      { title: 'Performance Score', description: 'Puntuación de rendimiento', icon: '⚡', color: '#f39c12' },
      { title: 'Risk Assessment', description: 'Evaluación de riesgos', icon: '⚠️', color: '#e74c3c' }
    ]
  },
  {
    id: 'dedicated-qa-team',
    title: 'Equipo QA Dedicado',
    description: 'Célula QA dedicada a proyectos con alta complejidad, sistemas monolíticos o múltiples integraciones.',
    icon: '�',
    backgroundColor: '#fdf6e3',
    team: {
      roles: ['QA Lead o Architect (estrategia y coaching)', 'QA Manual', 'QA Automation'],
      count: '5-7 personas'
    },
    tools: ['Cypress, Serenity, Selenium, Appium', 'JMeter, K6, SonarQube, Postman', 'Azure Test Plans, Jira, Zephyr'],
    includes: ['Marco QA TMAP completo (Assessment, Planificación, Ejecución, Monitoreo, Cierre)', 'Cobertura de pruebas E2E, regresión, performance, mobile', 'Reportes de KPIs y plan de mejora continua'],
    kpis: [
      { title: 'Team Productivity', description: 'Productividad del equipo', icon: '👥', color: '#3498db' },
      { title: 'Quality Gates', description: 'Cumplimiento de quality gates', icon: '�️', color: '#27ae60' },
      { title: 'Continuous Improvement', description: 'Mejora continua', icon: '�', color: '#9b59b6' }
    ]
  },
  {
    id: 'qa-with-ai',
    title: 'Servicio de QA con IA',
    description: 'Servicio enfocado en potenciar los procesos de testing mediante Inteligencia Artificial, reduciendo el esfuerzo manual repetitivo y acelerando la detección de riesgos de calidad.',
    icon: '🤖',
    backgroundColor: '#f8f9fa',
    team: {
      roles: ['QA Lead / Architect con enfoque en IA', 'QA Automation Engineers', 'Data/ML Engineer (opcional en proyectos grandes)'],
      count: '2-4 personas'
    },
    tools: ['Testing asistido por IA: Testim.io, Mabl, Functionize, Applitools (Visual AI)', 'Automatización tradicional + IA: Selenium, Cypress, Playwright + librerías self-healing', 'Generación de pruebas con IA: ChatGPT APIs, Testim Smart Locators', 'Análisis predictivo: MLflow, TensorFlow, SonarQube + AI plugins', 'Gestión: Jira, Azure Test Plans, dashboards con PowerBI o Grafana + IA'],
    includes: ['Evaluación de madurez QA e identificación de áreas de aplicación de IA', 'Implementación de framework híbrido (automatización tradicional + capacidades de IA)', 'Generación y priorización automática de casos de prueba', 'Automatización con self-healing scripts resistentes a cambios de UI/API', 'Integración de dashboards inteligentes para defectos y cobertura', 'Reportes predictivos de calidad y riesgos', 'Transferencia de conocimiento y workshops al equipo del cliente'],
    benefits: ['Reducción de hasta 40% en el tiempo de diseño y mantenimiento de pruebas', 'Mayor resiliencia en la automatización (menos fallos por cambios de UI)', 'Cobertura optimizada: foco en los flujos más críticos para el negocio', 'Predicción temprana de defectos → menos bugs en producción', 'Insights accionables en tiempo real con dashboards potenciados por IA'],
    kpis: [
      { title: 'AI Efficiency', description: 'Eficiencia de la IA', icon: '🤖', color: '#9b59b6' },
      { title: 'Test Generation Speed', description: 'Velocidad de generación de pruebas', icon: '⚡', color: '#f39c12' },
      { title: 'Defect Prediction Accuracy', description: 'Precisión en predicción de defectos', icon: '🎯', color: '#27ae60' }
    ]
  }
];

export const TECH_STACKS: TechStack[] = [
  {
    id: 'functional-testing',
    title: 'Pruebas Funcionales',
    description: 'Conjunto completo de herramientas y tecnologías para pruebas funcionales, desde testing manual hasta automatización avanzada.',
    icon: '🔍',
    backgroundColor: '#f0f8ff',
    details: [
      {
        category: 'Tipos de pruebas',
        items: ['Api testing', 'Integration Testing', 'UI Testing', 'Test Manual', 'Test Automation', 'Regression']
      },
      {
        category: 'Lenguaje',
        items: ['Java', 'JavaScript', 'Python', 'TypeScript', 'C#']
      },
      {
        category: 'Automations Test',
        items: ['Selenium', 'Cypress', 'Appium', 'BrowserStack', 'Playwright', 'XCUITest']
      },
      {
        category: 'Herramientas de Test Management',
        items: ['Azure', 'Jira', 'Zephyr', 'Qmetry', 'Xray', 'Mantis']
      },
      {
        category: 'Librerías',
        items: ['TestNG', 'RestAssured', 'Mocha', 'Mockito', 'Jest', 'WireMock', 'Cucumber', 'SpecFlow']
      },
      {
        category: 'Herramientas de Api testing',
        items: ['Postman', 'SoapUi', 'Swagger']
      },
      {
        category: 'Base de Datos',
        items: ['MySQL', 'MongoDB', 'Oracle']
      }
    ]
  },
  {
    id: 'non-functional-testing',
    title: 'Pruebas No Funcionales',
    description: 'Herramientas especializadas para evaluar performance, carga, estrés y escalabilidad de aplicaciones.',
    icon: '📊',
    backgroundColor: '#fff5ee',
    details: [
      {
        category: 'Tipos de Pruebas',
        items: ['Performance', 'Stress', 'Load', 'Spike', 'Soak tests']
      },
      {
        category: 'Herramientas',
        items: ['JMeter', 'LoadRunner', 'K6', 'Taurus']
      }
    ]
  },
  {
    id: 'cicd-testing',
    title: '(CI/CD) Testing',
    description: 'Integración continua y despliegue continuo con testing automatizado en pipelines de desarrollo.',
    icon: '🚀',
    backgroundColor: '#f0fff0',
    details: [
      {
        category: 'Actividades',
        items: ['Integration with CI/CD Pipelines', 'Automated Build Verification', 'Deployment Testing']
      },
      {
        category: 'Herramientas de CI/CD',
        items: ['Jenkins', 'AzureDevops', 'Git', 'Docker']
      }
    ]
  },
  {
    id: 'quality-control',
    title: 'Quality Control',
    description: 'Herramientas avanzadas para control de calidad de código y análisis estático.',
    icon: '🛡️',
    backgroundColor: '#fdf6e3',
    details: [
      {
        category: 'Herramientas',
        items: ['SonarQube / Cloud']
      }
    ]
  },
  {
    id: 'quality-consulting',
    title: 'Asesoramiento en control de calidad y mejora de procesos',
    description: 'Consultoría especializada para optimizar procesos de QA y desarrollar estrategias de calidad.',
    icon: '📈',
    backgroundColor: '#f8f9fa',
    details: [
      {
        category: 'Servicios',
        items: ['Desarrollo de estrategias de control de calidad', 'Evaluación y optimización de procesos', 'Formación y desarrollo de habilidades', 'Métricas y generación de informes de control de calidad']
      }
    ]
  },
  {
    id: 'ai-testing',
    title: 'IA',
    description: 'Inteligencia Artificial aplicada al testing para automatización inteligente y análisis predictivo.',
    icon: '🤖',
    backgroundColor: '#fff0f5',
    details: [
      {
        category: 'Actividades',
        items: ['Design and create', 'Analysis requirement', 'Query Database', 'Test Usability']
      },
      {
        category: 'Herramientas',
        items: ['Copilot', 'TestCraft', 'Postbot']
      }
    ]
  }
];
