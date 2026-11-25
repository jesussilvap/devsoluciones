export type ServiceCategory = 'software' | 'web' | 'ia' | 'marketing';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  badge?: string;
  summary: string;
  deliverables: string[];
  icon:
    | 'code'
    | 'smartphone'
    | 'shopping-bag'
    | 'globe'
    | 'rocket'
    | 'megaphone'
    | 'sparkles'
    | 'workflow';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  tag: string;
  title: string;
  challenge: string;
  solution: string;
  impact: string;
}

export interface EngagementModel {
  name: string;
  subtitle: string;
  highlighted?: boolean;
  idealFor: string;
  features: string[];
  ctaText: string;
  presetService: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const siteInfo = {
  brand: 'DevSoluciones',
  shortMark: 'DS',
  tagline: 'Ingeniería de software, experiencias digitales e Inteligencia Artificial para escalar tu negocio.',
  description:
    'En DevSoluciones desarrollamos software a la medida, aplicaciones móviles para Apple y Android, tiendas virtuales, sitios web, landing pages, marketing digital, asesorías y capacitaciones en IA, y automatizaciones de procesos.',
  siteUrl: 'https://devsoluciones.com',
  email: 'contacto@devsoluciones.com',
  location: 'Colombia · Atención remota en toda Latinoamérica',
  /** Número en formato internacional sin signos ni espacios (ej. 573001234567) */
  whatsappNumber: '573000000000',
  whatsappDisplay: '+57 300 000 0000',
  whatsappDefaultMessage:
    'Hola DevSoluciones, me gustaría recibir información y cotizar un proyecto.',
  /** URL opcional para envío de formulario (Formspree, Web3Forms o webhook n8n/Make) */
  formEndpoint: '',
  social: {
    facebook: 'https://facebook.com/devsoluciones',
    instagram: 'https://instagram.com/devsoluciones',
    whatsapp: 'https://wa.me/573000000000',
  },
};

export function getWhatsAppUrl(message = siteInfo.whatsappDefaultMessage): string {
  return `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#ia-automatizacion', label: 'IA y Automatización' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#modalidades', label: 'Modalidades' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
];

export const heroStats = [
  { value: '8', label: 'Líneas de solución integral' },
  { value: 'iOS & Android', label: 'Apps nativas y multiplataforma' },
  { value: '24/7', label: 'Flujos y automatizaciones con IA' },
];

export const techStackGroups = [
  'Astro',
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Flutter',
  'Swift (iOS)',
  'Kotlin (Android)',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Supabase',
  'Shopify / WooCommerce',
  'OpenAI / Gemini API',
  'n8n / Make',
  'Docker',
  'Google & Meta Ads',
];

export const serviceCategories: { id: 'all' | ServiceCategory; label: string }[] = [
  { id: 'all', label: 'Todos los servicios' },
  { id: 'software', label: 'Software y Apps' },
  { id: 'web', label: 'Web y E-commerce' },
  { id: 'ia', label: 'IA y Automatización' },
  { id: 'marketing', label: 'Marketing Digital' },
];

export const services: ServiceItem[] = [
  {
    id: 'software-a-la-medida',
    title: 'Software a la medida',
    category: 'software',
    categoryLabel: 'Software y Apps',
    badge: 'Core',
    summary:
      'Sistemas diseñados exactamente alrededor de tus procesos internos, reglas de negocio y crecimiento operativo.',
    deliverables: [
      'ERPs, CRMs, portales administrativos y plataformas SaaS',
      'Arquitectura escalable, roles de usuario y APIs seguras',
      'Migración de datos, capacitación y documentación técnica',
    ],
    icon: 'code',
  },
  {
    id: 'aplicaciones-apple-android',
    title: 'Aplicaciones Apple y Android',
    category: 'software',
    categoryLabel: 'Software y Apps',
    badge: 'iOS & Android',
    summary:
      'Apps móviles rápidas e intuitivas listas para tus clientes o tu equipo en campo, publicadas en App Store y Google Play.',
    deliverables: [
      'Desarrollo para iOS y Android con experiencia nativa fluida',
      'Notificaciones push, geolocalización y pagos integrados',
      'Acompañamiento completo hasta la publicación en tiendas',
    ],
    icon: 'smartphone',
  },
  {
    id: 'tiendas-virtuales',
    title: 'Tiendas virtuales',
    category: 'web',
    categoryLabel: 'Web y E-commerce',
    badge: 'E-commerce',
    summary:
      'Vende 24/7 con una tienda en línea rápida, confiable y pensada para convertir visitantes en compradores recurrentes.',
    deliverables: [
      'Catálogo autoadministrable, carrito y checkout optimizado',
      'Integración de pasarelas de pago locales y envíos',
      'Control de inventario, cupones y alertas por WhatsApp/correo',
    ],
    icon: 'shopping-bag',
  },
  {
    id: 'sitios-web',
    title: 'Sitios web corporativos',
    category: 'web',
    categoryLabel: 'Web y E-commerce',
    summary:
      'Presencia digital sólida que comunica tu propuesta de valor con velocidad sobresaliente y posicionamiento en buscadores.',
    deliverables: [
      'Diseño moderno, 100% adaptable a móvil, tablet y escritorio',
      'SEO técnico, analítica web y velocidad optimizada',
      'Panel editable o estructura modular fácil de actualizar',
    ],
    icon: 'globe',
  },
  {
    id: 'landing-pages',
    title: 'Landing pages de conversión',
    category: 'web',
    categoryLabel: 'Web y E-commerce',
    summary:
      'Páginas enfocadas en un único objetivo comercial: captar leads, agendar citas o impulsar campañas de lanzamiento.',
    deliverables: [
      'Estructura persuasiva con llamados a la acción estratégicos',
      'Formularios inteligentes integrados con WhatsApp y CRM',
      'Carga ultrarrápida ideal para campañas de pauta digital',
    ],
    icon: 'rocket',
  },
  {
    id: 'marketing-digital',
    title: 'Marketing digital',
    category: 'marketing',
    categoryLabel: 'Marketing Digital',
    summary:
      'Estrategias medibles para atraer prospectos calificados, fortalecer tu marca en redes y multiplicar tus ventas.',
    deliverables: [
      'Campañas en Meta Ads (Facebook/Instagram) y Google Ads',
      'Optimización de embudos, píxeles y seguimiento de conversiones',
      'Reportes claros enfocados en retorno de inversión (ROI)',
    ],
    icon: 'megaphone',
  },
  {
    id: 'asesorias-capacitaciones-ia',
    title: 'Asesorías y capacitaciones en IA',
    category: 'ia',
    categoryLabel: 'IA y Automatización',
    badge: 'Alta demanda',
    summary:
      'Acompañamos a directivos y equipos a adoptar Inteligencia Artificial con criterio práctico, seguridad y resultados reales.',
    deliverables: [
      'Talleres prácticos presenciales o remotos por área de negocio',
      'Diagnóstico de oportunidades IA y hoja de ruta de adopción',
      'Buenas prácticas, prompting avanzado y gobierno de datos',
    ],
    icon: 'sparkles',
  },
  {
    id: 'automatizaciones',
    title: 'Automatizaciones de procesos',
    category: 'ia',
    categoryLabel: 'IA y Automatización',
    badge: 'Ahorro operativo',
    summary:
      'Conectamos tus herramientas y eliminamos tareas repetitivas mediante flujos automáticos y agentes inteligentes.',
    deliverables: [
      'Bots y asistentes de atención al cliente en WhatsApp y web',
      'Sincronización automática entre CRM, facturación y hojas de cálculo',
      'Flujos con n8n, Make y APIs de IA que operan 24/7',
    ],
    icon: 'workflow',
  },
];

export const aiHighlights = [
  {
    label: 'Atención y ventas 24/7',
    title: 'Asistentes IA conectados a WhatsApp y CRM',
    description:
      'Califican prospectos, responden preguntas frecuentes con tu catálogo real y agendan reuniones sin intervención manual.',
  },
  {
    label: 'Equipos más productivos',
    title: 'Capacitaciones prácticas en IA aplicada',
    description:
      'Entrenamos a tu equipo administrativo, comercial o técnico para ahorrar horas cada semana usando herramientas de IA con seguridad.',
  },
  {
    label: 'Cero reprocesos manuales',
    title: 'Orquestación de flujos empresariales',
    description:
      'Generación automática de cotizaciones, reportes diarios, seguimiento de pagos e integración directa entre tus sistemas.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Diagnóstico y alcance',
    description:
      'Escuchamos tus objetivos, analizamos tus procesos actuales y definimos una propuesta clara en tiempos y entregables.',
  },
  {
    number: '02',
    title: 'Diseño UX/UI y arquitectura',
    description:
      'Prototipamos la experiencia de usuario y definimos la arquitectura tecnológica más sólida y rentable para tu proyecto.',
  },
  {
    number: '03',
    title: 'Desarrollo ágil y pruebas',
    description:
      'Construimos en iteraciones cortas con avances demostrables, control de calidad y retroalimentación constante.',
  },
  {
    number: '04',
    title: 'Lanzamiento y acompañamiento',
    description:
      'Publicamos en producción, capacitamos a tu equipo y ofrecemos soporte evolutivo para seguir escalando.',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    tag: 'Software a la medida',
    title: 'Plataforma de gestión operativa y reportes en tiempo real',
    challenge:
      'Procesos dispersos en hojas de cálculo con demoras en cierres, aprobaciones y trazabilidad de clientes.',
    solution:
      'Aplicación web centralizada con roles, panel de indicadores, exportación PDF/Excel y alertas automáticas.',
    impact: 'Reducción del 60% en tiempo administrativo semanal y visibilidad total del negocio.',
  },
  {
    tag: 'E-commerce + Marketing',
    title: 'Tienda virtual optimizada con embudo de conversión',
    challenge:
      'Ventas limitadas a atención manual por chat sin catálogo organizado ni pagos en línea integrados.',
    solution:
      'E-commerce veloz con pasarela de pagos, recuperación de carrito y campañas segmentadas en Meta Ads.',
    impact: 'Ventas automatizadas 24/7 y aumento sostenido de pedidos desde dispositivos móviles.',
  },
  {
    tag: 'IA y Automatización',
    title: 'Flujo inteligente de atención y capacitación corporativa',
    challenge:
      'Equipo saturado respondiendo consultas repetitivas y generando cotizaciones manualmente.',
    solution:
      'Integración de agente IA en WhatsApp conectado al CRM + taller práctico de IA para el equipo comercial.',
    impact: 'Respuestas en menos de 30 segundos y +12 horas semanales liberadas por asesor.',
  },
];

export const engagementModels: EngagementModel[] = [
  {
    name: 'Lanzamiento Web & Landing',
    subtitle: 'Ideal para validar, posicionarte y captar clientes rápido',
    idealFor: 'Sitios web, landing pages y tiendas virtuales',
    features: [
      'Diseño a medida alineado con tu marca',
      'Optimización móvil, velocidad y SEO base',
      'Integración con WhatsApp, redes sociales y analítica',
      'Entrega llave en mano con acompañamiento de publicación',
    ],
    ctaText: 'Cotizar presencia web',
    presetService: 'Sitios web corporativos',
  },
  {
    name: 'Proyecto de Software o App',
    subtitle: 'Ingeniería a la medida con alcance, hitos y propiedad del código',
    highlighted: true,
    idealFor: 'Software empresarial, plataformas SaaS y apps Apple/Android',
    features: [
      'Levantamiento de requerimientos y arquitectura escalable',
      'Entregas parciales verificables por sprint',
      'Integración con APIs, bases de datos y sistemas existentes',
      'Soporte post-lanzamiento y capacitación a tu equipo',
    ],
    ctaText: 'Planificar mi software',
    presetService: 'Software a la medida',
  },
  {
    name: 'IA, Automatización y Crecimiento',
    subtitle: 'Talleres, consultoría práctica o implementación de flujos',
    idealFor: 'Asesorías/capacitaciones en IA, automatizaciones y marketing',
    features: [
      'Diagnóstico de procesos automatizables y retorno esperado',
      'Capacitaciones prácticas adaptadas al nivel de tu equipo',
      'Implementación de bots, webhooks y campañas digitales',
      'Modalidad por proyecto puntual o acompañamiento mensual',
    ],
    ctaText: 'Agendar asesoría IA',
    presetService: 'Asesorías y capacitaciones en IA',
  },
];

export const faqs: FaqItem[] = [
  {
    question: '¿Cuánto tiempo toma desarrollar un sitio web, una app o un software a la medida?',
    answer:
      'Una landing page puede estar lista entre 5 y 10 días hábiles; un sitio web o tienda virtual entre 2 y 4 semanas; y un software a la medida o aplicación móvil Apple/Android depende del alcance funcional, normalmente entre 4 y 12 semanas con entregas parciales cada semana.',
  },
  {
    question: '¿El código fuente y los accesos quedan a nombre de mi empresa?',
    answer:
      'Sí. Al finalizar el proyecto entregamos el control de dominios, repositorios, cuentas de publicación y documentación acordada para que tengas total independencia tecnológica.',
  },
  {
    question: '¿Cómo funcionan las asesorías y capacitaciones en Inteligencia Artificial?',
    answer:
      'Diseñamos sesiones 100% prácticas (presenciales o virtuales) adaptadas al sector de tu empresa: desde fundamentos seguros de IA generativa hasta creación de asistentes, automatización de informes y mejora de productividad por área.',
  },
  {
    question: '¿Pueden automatizar procesos usando las herramientas que ya tenemos?',
    answer:
      'Sí. Integramos herramientas como WhatsApp Business, Google Workspace, Microsoft 365, CRMs, tiendas virtuales, facturación y bases de datos mediante APIs, n8n o Make para evitar que tengas que cambiar todo tu ecosistema.',
  },
  {
    question: '¿Ofrecen soporte y mantenimiento después del lanzamiento?',
    answer:
      'Sí. Todos nuestros desarrollos incluyen un periodo de garantía y ofrecemos planes flexibles de soporte, actualizaciones de seguridad, mejoras evolutivas y acompañamiento en marketing digital.',
  },
];
