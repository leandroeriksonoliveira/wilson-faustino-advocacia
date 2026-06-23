/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  CONFIGURAÇÃO DO SITE — Wilson Faustino Advocacia
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ─── Contato ───────────────────────────────────────────────────────────────

/** Apenas números, com DDI. +55 24 99975-6094 */
export const WHATSAPP_PHONE = "5524999756094";

export const WHATSAPP_DISPLAY = "(24) 99975-6094";

export const PHONE_DISPLAY = "(24) 99975-6094";

export const WHATSAPP_MESSAGE =
  "Olá, Dr. Wilson. Gostaria de agendar uma consulta jurídica com o escritório Wilson Faustino Advocacia.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const LINKEDIN_URL = "https://br.linkedin.com/in/wilson-faustino-18b3b035";

export const EMAIL = "contato@wilsonfaustino.adv.br";

// ─── Escritório e profissional ──────────────────────────────────────────────

export const CLINIC_NAME = "Wilson Faustino Advocacia";
export const FIRM_SHORT_NAME = "Wilson Faustino Advocacia";
export const DOCTOR_NAME = "Dr. Wilson Faustino";
export const DOCTOR_NAME_FULL = "Wilson Faustino";
export const DOCTOR_TITLE = "Advogado";
export const OAB = "OAB/PR";
export const DOCTOR_TAGLINE =
  "Família e Sucessões · Direito Civil · Empresarial e Tributário";
export const CITY = "Foz do Iguaçu";
export const STATE = "PR";

export const UNIVERSITY =
  "Faculdade Carlos Drummond de Andrade · Universidade Cruzeiro do Sul";

export const SPECIALIZATIONS = [
  "Direito de Família e Sucessões",
  "Direito Civil",
  "Contratos",
  "Direito Empresarial",
  "Direito Tributário",
  "Direito Imobiliário",
  "Direito do Consumidor",
  "Consultoria Jurídica Preventiva",
] as const;

export const ADDRESS_STREET = "Atendimento presencial e online";
export const ADDRESS_NEIGHBORHOOD = CITY;
export const ADDRESS_CITY = `${CITY} — ${STATE}`;
export const ADDRESS_CEP = "";
export const ADDRESS_FULL = `${CITY} — ${STATE}`;
export const ADDRESS_NOTE =
  "Atendimento com hora marcada · Seg a Sex, 9h às 18h · Presencial e online em todo o Brasil";

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Foz+do+Iguaçu+PR";

export const BIO_PARAGRAPHS = [
  `${DOCTOR_NAME} é advogado especialista em Direito de Família e Sucessões, com sólida formação em Direito e ampla experiência em Direito Civil, Contratos, Empresarial e Tributário. À frente do escritório ${FIRM_SHORT_NAME}, atua em ${CITY} e em todo o Brasil com atendimento presencial e online.`,
  "Com trajetória que une advocacia e visão estratégica de negócios — incluindo experiência em gestão fiscal e contábil — o escritório oferece orientação técnica, clara e personalizada para pessoas físicas e jurídicas em momentos delicados e decisões patrimoniais relevantes.",
  "Cada demanda é tratada com sigilo profissional, ética e compromisso com resultados, buscando soluções eficientes na prevenção de conflitos, na negociação ou na representação em juízo.",
] as const;

export const PROFESSIONAL_EXPERIENCE = [
  {
    area: "Família e Sucessões",
    focus: "Divórcio, guarda, pensão e inventário",
    period: "Atuação especializada desde 2023",
  },
  {
    area: "Direito Civil e Contratos",
    focus: "Obrigações, responsabilidade civil e contratos",
    period: "Pessoas físicas e empresas",
  },
  {
    area: "Direito Empresarial e Tributário",
    focus: "Estruturação societária e consultoria fiscal",
    period: "Visão integrada jurídica e patrimonial",
  },
  {
    area: "Atendimento Personalizado",
    focus: `${CITY}, ${STATE} · Atendimento online`,
    period: "Presencial e remoto em todo o Brasil",
  },
] as const;

export const DIFFERENTIALS = [
  {
    title: "Especialização em Família",
    desc: "Abordagem técnica e humana em divórcios, guarda, pensão e inventários.",
  },
  {
    title: "Visão Patrimonial Integrada",
    desc: "Experiência que une direito civil, empresarial e tributário para proteger seu patrimônio.",
  },
  {
    title: "Presencial e Online",
    desc: "Flexibilidade para consultas em Foz do Iguaçu ou por videoconferência em qualquer lugar.",
  },
  {
    title: "Estratégia e Transparência",
    desc: "Comunicação clara sobre prazos, possibilidades e o melhor caminho para cada caso.",
  },
] as const;

/** Aviso exibido em todo conteúdo informativo do site */
export const CONTENT_DISCLAIMER = `Os textos deste site têm caráter meramente informativo e não substituem consulta jurídica. Cada situação é única — entre em contato com ${DOCTOR_NAME} para orientação profissional adequada ao seu caso.`;

export const SCHEDULE_CONSULTATION_TITLE = "Precisa de orientação jurídica?";

export const SCHEDULE_CONSULTATION_TEXT = `Agende uma consulta com ${DOCTOR_NAME} pelo WhatsApp. O escritório irá compreender sua demanda e indicar o melhor caminho jurídico.`;

export const LEGAL_SERVICES_INTRO = {
  intro:
    "Reconhecer que você precisa de orientação jurídica é o primeiro passo para proteger seus direitos e seu patrimônio. Os temas abaixo são uma visão geral — a análise adequada começa com uma consulta individualizada.",
  characteristics: [
    "Divórcio, guarda, pensão e inventário",
    "Planejamento sucessório e partilha de bens",
    "Questões contratuais e obrigações civis",
    "Constituição e gestão de empresas",
    "Consultoria tributária e fiscal",
    "Compra, venda e locação de imóveis",
    "Problemas com fornecedores e serviços",
    "Cobranças, dívidas e execuções",
    "Consultoria preventiva para evitar litígios",
  ],
  disclaimer: CONTENT_DISCLAIMER,
} as const;

/** Fontes oficiais e institucionais para credibilidade */
export const LEGAL_REFERENCES = [
  {
    title: "Ordem dos Advogados do Brasil — OAB",
    desc: "Órgão de classe que regulamenta e fiscaliza o exercício da advocacia no Brasil.",
    url: "https://www.oab.org.br/",
  },
  {
    title: "Supremo Tribunal Federal — STF",
    desc: "Guardião da Constituição Federal e tribunal de última instância em matéria constitucional.",
    url: "https://www.stf.jus.br/",
  },
  {
    title: "Superior Tribunal de Justiça — STJ",
    desc: "Uniformização da interpretação da legislação federal infraconstitucional.",
    url: "https://www.stj.jus.br/",
  },
  {
    title: "Conselho Nacional de Justiça — CNJ",
    desc: "Órgão de controle e disciplina do Poder Judiciário brasileiro.",
    url: "https://www.cnj.jus.br/",
  },
  {
    title: "Presidência da República — Planalto",
    desc: "Acesso à Constituição Federal, códigos e legislação brasileira.",
    url: "http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
  },
  {
    title: "Senado Federal — Legislação",
    desc: "Consulta a leis, decretos e normas federais em vigor.",
    url: "https://www25.senado.leg.br/web/atividade/legislacao",
  },
  {
    title: "Código de Defesa do Consumidor",
    desc: "Lei nº 8.078/1990 — direitos e proteção do consumidor brasileiro.",
    url: "http://www.planalto.gov.br/ccivil_03/leis/l8078.htm",
  },
  {
    title: "Código Civil Brasileiro",
    desc: "Lei nº 10.406/2002 — relações jurídicas de direito privado.",
    url: "http://www.planalto.gov.br/ccivil_03/leis/2002/l10406.htm",
  },
] as const;

// ─── Rotas das especialidades ───────────────────────────────────────────────

export const CIVIL_LAW_PAGE_PATH = "/direito-civil";
export const FAMILY_LAW_PAGE_PATH = "/direito-de-familia";
export const CONSUMER_LAW_PAGE_PATH = "/direito-do-consumidor";
export const TAX_LAW_PAGE_PATH = "/direito-tributario";
export const CONTRACTS_PAGE_PATH = "/direito-contratos";
export const BUSINESS_LAW_PAGE_PATH = "/direito-empresarial";
export const REAL_ESTATE_LAW_PAGE_PATH = "/direito-imobiliario";
export const LEGAL_CONSULTING_PAGE_PATH = "/consultoria-juridica";

// ─── SEO ────────────────────────────────────────────────────────────────────

export const SITE_TITLE = `${FIRM_SHORT_NAME} | ${DOCTOR_NAME} · ${OAB} · ${CITY}`;

export const SITE_DESCRIPTION = `${DOCTOR_TAGLINE}. Consultoria e advocacia com ${DOCTOR_NAME} em ${CITY}, ${STATE} — presencial e online. Família, Sucessões, Civil, Empresarial e Tributário.`;

export const OG_DESCRIPTION = `Consultoria jurídica com ${DOCTOR_NAME}. Atendimento presencial em ${CITY} e online em todo o Brasil.`;

export const STAT_YEARS = "18+";
export const STAT_CLIENTS = "100%";
export const STAT_SPECIALTIES = String(SPECIALIZATIONS.length);
