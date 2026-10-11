export interface Review {
  name: string;
  date: string;
  text: string;
  initials: string;
  featured?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface VideoShort {
  id: string;
  label: string;
  youtubeId: string;
}

export const BUSINESS_DATA = {
  name: "Xtremeclean",
  wordmark: "XTREMECLEAN",
  phone: "+56 9 7689 5809",
  phoneRaw: "56976895809",
  phoneUrl: "tel:+56976895809",
  email: "ventas@xtremeclean.cl",
  emailUrl: "mailto:ventas@xtremeclean.cl",
  address: "Av. Apoquindo 6410, Las Condes, Chile",
  mapUrl: "https://goo.gl/maps/D5CJud6b2hHT3o6c9",
  schedule: "Lun a Vie 8:30–18:30 · Sáb 9:00–15:30",
  scheduleDetail: {
    weekdays: "Lunes a viernes de 8:30 a 18:30",
    saturday: "Sábado de 9:00 a 15:30",
  },
  comunas: [
    "Las Condes",
    "Vitacura",
    "Providencia",
    "Ñuñoa",
    "Macul",
    "La Florida",
    "Santiago",
  ],
  socials: {
    instagram: "https://www.instagram.com/xtremeclean.cl",
    facebook: "https://www.facebook.com/www.xtremeclean.cl",
    youtube: "https://www.youtube.com/@xtremeclean/videos",
    tiktok: "https://www.tiktok.com/@xtremeclean.cl",
    linkedin: "https://www.linkedin.com/in/xtremeclean-limpieza-61972b249/",
  },
  guaranteeText: "Garantía de 3 días post secado: si la mancha reaparece, volvemos sin costo.",
  paymentText: "Aceptamos todas las tarjetas de crédito y recomendamos reservar con anticipación.",
  reviewCount: "119 reseñas en Google",
  ownerNote: "Atendido con ❤️ por su dueño y el equipo de Xtremeclean.",
};

export const WHATSAPP_MESSAGES = {
  general: "Hola! Quiero cotizar un servicio de XtremeClean",
  sofa: "Hola! Quiero solicitar el servicio de limpieza de sofá",
  colchon: "Hola! Quiero solicitar el servicio de limpieza de colchón",
  sillas: "Hola! Quiero solicitar el servicio de limpieza de sillas",
  alfombras: "Hola! Quiero solicitar el servicio de limpieza de alfombras muro a muro",
  decapado: "Hola! Quiero solicitar el servicio de decapado de piso flotante",
  alfombrasDecorativas: "Hola! Quiero cotizar el lavado de alfombras decorativas",
  cocina: "Hola! Quiero solicitar el servicio de limpieza de Cocina",
  horno: "Hola! Quiero solicitar el servicio de desengrasado de horno campana",
  mudanza: "Hola! Quiero solicitar el servicio de limpieza de departamento",
};

export function getWhatsAppUrl(messageKey: keyof typeof WHATSAPP_MESSAGES = 'general'): string {
  const text = encodeURIComponent(WHATSAPP_MESSAGES[messageKey]);
  return `https://wa.me/${BUSINESS_DATA.phoneRaw}?text=${text}`;
}

export const REVIEWS: Review[] = [
  {
    name: "Omar Enrique Caro Zunino",
    date: "26/04/2026",
    text: "Excelente experiencia y servicio. Fácil de contactar y coordinar por wsp, entregan la info de las personas que irán a tu casa, realizan el trabajo de limpieza realmente bien, literal hasta el mínimo detalle. Los operarios son educados y amables, muy buen trato. Acá limpiaron vidrios, marcos, baños y terraza y quedó impecable. Totalmente recomendable.",
    initials: "OC",
    featured: true,
  },
  {
    name: "Manuela Dussart",
    date: "27/08/2026",
    text: "Me dejaron el horno como NUEVO, un trabajo a conciencia y súper detallado. Además q no ensuciaron nada y con muy buena disposición!!!!",
    initials: "MD",
  },
  {
    name: "Francisca Saieg",
    date: "16/05/2026",
    text: "Increíble servicio, quedo todo impecable y el piso espectacular",
    initials: "FS",
  },
  {
    name: "Matias Pena",
    date: "02/07/2026",
    text: "Excelente servicio. Respuesta rápida, excelente disposición y trabajo eficiente.",
    initials: "MP",
  },
  {
    name: "Claudia Pozo",
    date: "08/07/2026",
    text: "Muy buena disposición. Fue explicando el proceso paso a paso.",
    initials: "CP",
  },
  {
    name: "Max Achondo",
    date: "13/06/2026",
    text: "Impecable servicio!! 100% recomendados...",
    initials: "MA",
  },
];

export const VIDEO_SHORTS: VideoShort[] = [
  { id: "general", label: "General", youtubeId: "elJq5t4s9Uk" },
  { id: "mudanza", label: "Mudanza", youtubeId: "7eWcbjY_Qik" },
  { id: "alfombras", label: "Alfombras", youtubeId: "0l3xuVH1MPY" },
  { id: "decapado", label: "Piso flotante", youtubeId: "MPL0Btv0rKQ" },
  { id: "sofa", label: "Sofá", youtubeId: "o28sUMq6s74" },
  { id: "colchon", label: "Colchón", youtubeId: "uOvECxrcGLM" },
  { id: "cocina", label: "Cocina", youtubeId: "ToD03l1XsjU" },
];

export const CLIENT_LOGOS = [
  { name: "Rienda Suelta", src: "/logos/rienda-suelta.png" },
  { name: "Blck", src: "/logos/blck.png" },
  { name: "Gulfo", src: "/logos/gulfo.jpg" },
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Todas las manchas salen?",
    answer: "Algunas manchas no salen por completo y solo se atenúan: vino, sangre, café, orina, aceite, grasa, pintura y tintas. Asimismo, no se restaura la tela ya desgastada por el tiempo; queda limpia y desinfectada, pero el daño previo del tejido no se repara.",
  },
  {
    question: "¿Pueden eliminar la orina de mascotas?",
    answer: "La orina de mascotas se puede eliminar. La efectividad del tratamiento depende de la concentración acumulada y del tiempo transcurrido desde que ocurrió la mancha.",
  },
  {
    question: "¿Mueven los muebles?",
    answer: "Nuestros operarios no mueven muebles, objetos pesados, electrodomésticos ni cajas. Solicitamos que el área a intervenir se encuentre previamente despejada antes de iniciar el servicio.",
  },
  {
    question: "¿Qué pasa si mi inmueble o cocina está ocupado?",
    answer: "Los inmuebles y cocinas ocupados tienen un valor extra por la labor de mover muebles y dejarlos nuevamente en su lugar. La tarifa estándar de mudanza y cocina aplica a espacios desocupados.",
  },
  {
    question: "¿Cuánto demora el secado?",
    answer: "El secado de alfombras y tapices en invierno tarda entre 24 y 48 horas aproximadamente. En temporadas más cálidas el proceso puede ser más rápido.",
  },
  {
    question: "¿El colchón se limpia por ambas caras?",
    answer: "El servicio de limpieza de colchón incluye la cara principal y los laterales. Para cotizar ambas caras principales, consúltanos directamente por WhatsApp.",
  },
  {
    question: "¿El decapado repara el piso?",
    answer: "El decapado es una técnica de limpieza profunda para remover cera acumulada, suciedad adherida y marcas, no de reparación de juntas, rayaduras profundas o hundimientos de tablas.",
  },
  {
    question: "¿Hay una superficie mínima?",
    answer: "Sí: se requiere una superficie mínima de 15 m² en alfombra muro a muro y de 25 m² en decapado de piso flotante.",
  },
  {
    question: "¿Qué no incluye la limpieza de inmuebles?",
    answer: "La limpieza de inmuebles se realiza en espacios desocupados y no incluye refrigerador, microondas ni electrodomésticos (salvo contratación adicional), ni fragües, lavado de loza, ni trabajo sobre paredes o papel mural.",
  },
  {
    question: "¿Cómo funciona la garantía?",
    answer: "Ofrecemos garantía de 3 días post secado: si una mancha tratada reaparece dentro de los 3 días posteriores al secado completo, volvemos a limpiarla sin costo.",
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer: "Aceptamos todas las tarjetas de crédito y débito, además de transferencia electrónica. Recomendamos reservar tu visita con anticipación.",
  },
];
