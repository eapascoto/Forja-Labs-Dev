import {
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Code2,
  Compass,
  ExternalLink,
  FileText,
  Gauge,
  Globe2,
  LayoutTemplate,
  Link2,
  MapPinned,
  MessageCircle,
  MonitorSmartphone,
  Paintbrush,
  RefreshCcw,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Smartphone,
  Store,
  Target,
  UsersRound,
  Utensils,
} from "lucide-react";

export const phone = "+55 61 8162-5918";
export const whatsappBase = "https://wa.me/556181625918";

export function whatsappLink(message) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Processo", "#processo"],
  ["Portfólio", "#portfolio"],
  ["Planos", "#planos"],
  ["FAQ", "#faq"],
  ["Contato", "#contato"],
];

export const painPoints = [
  ["Seu negócio não aparece bem no Google", Search],
  ["Clientes não encontram informações rápidas", Clock3],
  ["O Instagram sozinho não passa tanta confiança", ShieldCheck],
  ["Sites antigos afastam compradores", RefreshCcw],
  ["Falta de presença online reduz oportunidades", BarChart3],
];

export const services = [
  ["Site institucional", "Apresente sua empresa com clareza, autoridade e uma estrutura preparada para contato.", Building2],
  ["Landing page de vendas", "Uma página objetiva para campanhas, anúncios e ofertas com foco em conversão.", Target],
  ["Site para empresas locais", "Ideal para academias, autoescolas, clínicas, restaurantes e comércios regionais.", Store],
  ["Página profissional com WhatsApp", "Canais de contato visíveis para facilitar orçamento, atendimento e vendas.", MessageCircle],
  ["Portfólio profissional", "Mostre serviços, projetos e diferenciais com uma apresentação memorável.", LayoutTemplate],
  ["Redesign de site antigo", "Atualize visual, organização e responsividade sem perder a essência da marca.", Paintbrush],
  ["Integração com Google Maps", "Ajude clientes a encontrar sua empresa com localização destacada.", MapPinned],
  ["Botões de contato e redes sociais", "Conecte WhatsApp, Instagram e outros canais importantes no fluxo do site.", Share2],
  ["Otimização para celular", "Experiência fluida em smartphones, tablets e computadores.", Smartphone],
  ["Estrutura básica de SEO", "Páginas organizadas com fundamentos para presença digital mais forte.", Globe2],
];

export const deliveries = [
  ["Design profissional", Sparkles],
  ["Site responsivo", MonitorSmartphone],
  ["Botão de WhatsApp", MessageCircle],
  ["Informações organizadas", ClipboardCheck],
  ["Layout moderno", LayoutTemplate],
  ["Página rápida", Gauge],
  ["Estrutura preparada para divulgar", ExternalLink],
  ["Integração com localização, redes sociais e contatos", Link2],
  ["Código limpo e organizado", Code2],
  ["Site pronto para apresentar a empresa", BadgeCheck],
];

export const processSteps = [
  ["Conversamos pelo WhatsApp", "Você conta o que precisa e alinhamos o objetivo do site."],
  ["Entendemos sua empresa", "Mapeamos público, serviços, diferenciais e informações essenciais."],
  ["Criamos o visual do site", "A identidade ganha forma com layout moderno e coerente com sua marca."],
  ["Montamos as seções", "Organizamos conteúdo, chamadas, contato e elementos de confiança."],
  ["Ajustamos detalhes", "Refinamos textos, espaçamentos, responsividade e pontos importantes."],
  ["Entregamos o site pronto", "Você recebe uma presença digital preparada para divulgar sua empresa."],
];

export const portfolioItems = [
  ["Academia", "Site com planos, estrutura, modalidades e chamadas para matrícula.", "Fitness", UsersRound],
  ["Autoescola", "Página objetiva com serviços, categorias, localização e contato rápido.", "Serviços locais", Compass],
  ["Clínica", "Apresentação profissional com especialidades, equipe, endereço e WhatsApp.", "Saúde", ShieldCheck],
  ["Restaurante", "Cardápio, horários, localização e botão para pedidos ou reservas.", "Gastronomia", Utensils],
  ["Loja local", "Vitrine digital para produtos, diferenciais e atendimento direto.", "Comércio", ShoppingBag],
  ["Prestador de serviço", "Site focado em confiança, prova de serviço e pedido de orçamento.", "Profissional", FileText],
];

export const plans = [
  {
    name: "Plano Essencial",
    description: "Para começar com uma presença online clara e profissional.",
    features: [
      "Página única profissional",
      "Informações da empresa",
      "Botão de WhatsApp",
      "Layout responsivo",
      "Ideal para começar",
    ],
    message: "Olá, tenho interesse no Plano Essencial da Forja Labs.",
  },
  {
    name: "Plano Profissional",
    description: "Para empresas que querem uma apresentação mais completa.",
    featured: true,
    features: [
      "Site mais completo",
      "Mais seções",
      "Visual premium",
      "Google Maps",
      "Redes sociais",
      "Melhor apresentação da empresa",
    ],
    message: "Olá, tenho interesse no Plano Profissional da Forja Labs.",
  },
  {
    name: "Plano Personalizado",
    description: "Para projetos sob medida, com estratégia e integrações específicas.",
    features: [
      "Projeto sob medida",
      "Layout exclusivo",
      "Mais integrações",
      "Estratégia específica para o negócio",
      "Ideal para empresas que querem algo mais completo",
    ],
    message: "Olá, tenho interesse em um projeto personalizado com a Forja Labs.",
  },
];

export const benefits = [
  "Mais confiança para sua empresa",
  "Atendimento mais fácil pelo WhatsApp",
  "Visual profissional",
  "Melhor presença digital",
  "Facilidade para divulgar",
  "Site funcionando 24 horas por dia",
  "Mais clareza para seus clientes",
  "Melhor primeira impressão",
];

export const faqItems = [
  [
    "Quanto custa um site?",
    "O valor depende do tipo de site, quantidade de seções e necessidades da empresa. O orçamento é feito pelo WhatsApp.",
  ],
  [
    "O site funciona no celular?",
    "Sim, todos os sites são responsivos e adaptados para celular, tablet e computador.",
  ],
  [
    "Vocês fazem site para qualquer tipo de empresa?",
    "Sim, criamos sites para negócios locais, prestadores de serviço, lojas, academias, clínicas, restaurantes, autoescolas e outros segmentos.",
  ],
  [
    "Preciso pagar pelo site pelo próprio site?",
    "Não. O site é focado em apresentação e contato. As vendas e negociações são feitas diretamente pelo WhatsApp.",
  ],
  [
    "O site pode ter botão para WhatsApp?",
    "Sim, o botão de WhatsApp será uma das principais chamadas do site.",
  ],
  [
    "Posso pedir alterações?",
    "Sim, os ajustes podem ser combinados durante o processo de criação.",
  ],
];
