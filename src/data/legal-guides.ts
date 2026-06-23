export type LegalGuide = {
  title: string;
  metaDescription: string;
  heroSubtitle: string;
  introTitle: string;
  introParagraphs: readonly string[];
  topics: readonly string[];
  services: readonly { title: string; desc: string }[];
  whenToSeek: readonly string[];
  cta: { title: string; text: string };
  disclaimer: string;
};

import { CONTENT_DISCLAIMER } from "@/site-config";

const DISCLAIMER = `Conteúdo informativo de caráter geral. Não substitui consulta jurídica. ${CONTENT_DISCLAIMER}`;

export const CIVIL_LAW_GUIDE: LegalGuide = {
  title: "Direito Civil",
  metaDescription:
    "Orientação sobre Direito Civil: contratos, responsabilidade civil, cobranças e obrigações. Wilson Faustino Advocacia — Foz do Iguaçu, PR.",
  heroSubtitle:
    "Contratos, obrigações, responsabilidade civil, cobranças e questões do direito privado — entenda quando buscar orientação jurídica.",
  introTitle: "O que abrange o Direito Civil?",
  introParagraphs: [
    "O Direito Civil regula as relações entre pessoas físicas e jurídicas no âmbito privado: contratos, propriedade, família (em parte), sucessões, responsabilidade por danos e obrigações em geral.",
    "É o ramo mais amplo do direito privado e permeia o cotidiano — desde a compra de um produto até a locação de um imóvel ou a cobrança de uma dívida.",
    "Uma consulta preventiva pode evitar prejuízos e litígios desnecessários.",
  ],
  topics: [
    "Contratos e inadimplemento",
    "Responsabilidade civil e indenizações",
    "Cobranças e execução de dívidas",
    "Usucapião e posse",
    "Direitos reais e obrigações",
    "Ações de despejo e reintegração de posse",
  ],
  services: [
    { title: "Análise contratual", desc: "Revisão e elaboração de contratos com foco em segurança jurídica." },
    { title: "Ações de cobrança", desc: "Recuperação de créditos por meios judiciais e extrajudiciais." },
    { title: "Defesa em processos", desc: "Representação em ações cíveis de qualquer natureza." },
  ],
  whenToSeek: [
    "Recebeu uma citação ou notificação judicial",
    "Precisa cobrar uma dívida ou foi cobrado indevidamente",
    "Quer revisar um contrato antes de assinar",
    "Sofreu um dano e busca reparação",
  ],
  cta: {
    title: "Precisa de orientação em Direito Civil?",
    text: "Agende uma consulta com o Dr. Wilson Faustino para analisar seu caso.",
  },
  disclaimer: DISCLAIMER,
};

export const FAMILY_LAW_GUIDE: LegalGuide = {
  title: "Direito de Família e Sucessões",
  metaDescription:
    "Divórcio, guarda, pensão alimentícia, inventário e partilha de bens. Wilson Faustino Advocacia — Foz do Iguaçu, PR.",
  heroSubtitle:
    "Divórcio, guarda de filhos, pensão alimentícia, inventário e partilha de bens — orientação sensível e técnica para momentos delicados.",
  introTitle: "Direito de Família e Sucessões",
  introParagraphs: [
    "O Direito de Família trata das relações familiares: casamento, união estável, divórcio, guarda, visitas, pensão alimentícia e regulamentação de convivência.",
    "O Direito das Sucessões cuida da transmissão de bens após o falecimento — inventário, testamentos e partilha entre herdeiros.",
    "Essas matérias exigem abordagem técnica e humana, respeitando a sensibilidade de cada família.",
  ],
  topics: [
    "Divórcio consensual e litigioso",
    "Guarda compartilhada e unilateral",
    "Pensão alimentícia — fixação e revisão",
    "Inventário e partilha de bens",
    "União estável e reconhecimento",
    "Alienação parental e regulamentação de visitas",
  ],
  services: [
    { title: "Divórcio e separação", desc: "Condução do processo com agilidade e respeito às partes." },
    { title: "Inventário", desc: "Abertura, partilha e regularização patrimonial." },
    { title: "Pensão e guarda", desc: "Defesa dos interesses de pais, filhos e cônjuges." },
  ],
  whenToSeek: [
    "Está em processo de separação ou divórcio",
    "Precisa regularizar pensão alimentícia",
    "Há bens a partilhar após falecimento",
    "Questões de guarda ou visitas dos filhos",
  ],
  cta: {
    title: "Questões familiares exigem orientação especializada",
    text: "Entre em contato para uma consulta reservada e personalizada.",
  },
  disclaimer: DISCLAIMER,
};

export const CONSUMER_LAW_GUIDE: LegalGuide = {
  title: "Direito do Consumidor",
  metaDescription:
    "Defesa do consumidor: produtos defeituosos, serviços inadequados, cobranças indevidas e relações de consumo. Wilson Faustino Advocacia.",
  heroSubtitle:
    "Produtos defeituosos, serviços inadequados, cobranças indevidas e descumprimento do CDC — saiba como proteger seus direitos.",
  introTitle: "Seus direitos como consumidor",
  introParagraphs: [
    "O Código de Defesa do Consumidor (Lei nº 8.078/1990) protege o consumidor nas relações com fornecedores de produtos e serviços, estabelecendo direitos como informação clara, qualidade, segurança e reparação de danos.",
    "Bancos, operadoras de telefonia, planos de saúde, lojas e prestadores de serviço estão sujeitos às normas consumeristas.",
    "Muitas vezes, uma notificação extrajudicial ou reclamação no Procon resolve o problema; em outros casos, a via judicial é necessária.",
  ],
  topics: [
    "Produtos com defeito ou vício oculto",
    "Cancelamento de contratos e multas abusivas",
    "Cobranças indevidas e negativação indevida",
    "Planos de saúde e negativa de cobertura",
    "Vícios em serviços contratados",
    "Publicidade enganosa e propaganda abusiva",
  ],
  services: [
    { title: "Reclamações extrajudiciais", desc: "Notificações e acordos com fornecedores." },
    { title: "Ações consumeristas", desc: "Indenização por danos materiais e morais." },
    { title: "Revisão de contratos", desc: "Análise de cláusulas abusivas e juros excessivos." },
  ],
  whenToSeek: [
    "Comprou um produto com defeito e o fornecedor não resolveu",
    "Foi cobrado indevidamente ou teve o nome negativado",
    "Plano de saúde negou procedimento coberto",
    "Contrato com cláusulas que parecem abusivas",
  ],
  cta: {
    title: "Teve seus direitos de consumidor violados?",
    text: "Consulte o escritório para avaliar as medidas cabíveis.",
  },
  disclaimer: DISCLAIMER,
};

export const TAX_LAW_GUIDE: LegalGuide = {
  title: "Direito Tributário",
  metaDescription:
    "Consultoria tributária, planejamento fiscal, obrigações acessórias e defesa em autuações. Wilson Faustino Advocacia — Foz do Iguaçu, PR.",
  heroSubtitle:
    "Planejamento tributário, obrigações fiscais, consultoria para empresas e defesa em autuações — orientação técnica com visão estratégica.",
  introTitle: "Segurança fiscal para pessoas e empresas",
  introParagraphs: [
    "O Direito Tributário regula a relação entre contribuintes e o Fisco, abrangendo impostos, taxas, contribuições e o cumprimento de obrigações acessórias.",
    "Empresas e profissionais liberais precisam de estrutura fiscal adequada para operar com segurança, evitar autuações e aproveitar benefícios legais.",
    "A combinação de experiência jurídica e conhecimento contábil-fiscal permite uma abordagem integrada e eficiente.",
  ],
  topics: [
    "Planejamento tributário lícito",
    "Obrigações acessórias e compliance fiscal",
    "Defesa em autuações e execuções fiscais",
    "Simples Nacional, Lucro Presumido e Lucro Real",
    "Recuperação de créditos tributários",
    "Consultoria para abertura e reestruturação de empresas",
  ],
  services: [
    { title: "Consultoria tributária", desc: "Análise de regime tributário e obrigações da empresa." },
    { title: "Defesa fiscal", desc: "Impugnação de autuações e acompanhamento em processos." },
    { title: "Planejamento patrimonial", desc: "Estruturação fiscal para proteção de bens e negócios." },
  ],
  whenToSeek: [
    "Recebeu autuação ou intimação da Receita Federal",
    "Vai abrir empresa e precisa definir o regime tributário",
    "Quer revisar a carga tributária do negócio",
    "Precisa de orientação sobre obrigações fiscais",
  ],
  cta: {
    title: "Questões tributárias exigem atenção especializada",
    text: "Agende uma consulta com o Dr. Wilson Faustino para avaliar sua situação fiscal.",
  },
  disclaimer: DISCLAIMER,
};

export const CONTRACTS_LAW_GUIDE: LegalGuide = {
  title: "Contratos",
  metaDescription:
    "Elaboração, revisão e negociação de contratos civis e empresariais. Wilson Faustino Advocacia — Foz do Iguaçu, PR.",
  heroSubtitle:
    "Elaboração, revisão e negociação de contratos — segurança jurídica antes de assinar e defesa em caso de inadimplemento.",
  introTitle: "Contratos bem estruturados evitam litígios",
  introParagraphs: [
    "Contratos são a base das relações comerciais e pessoais no direito privado. Uma redação inadequada ou cláusulas abusivas podem gerar prejuízos significativos.",
    "A revisão preventiva identifica riscos, define obrigações com clareza e protege os interesses das partes antes da assinatura.",
    "Em caso de descumprimento, a orientação jurídica adequada define a melhor estratégia — negociação, notificação ou ação judicial.",
  ],
  topics: [
    "Contratos de prestação de serviços",
    "Contratos comerciais e de parceria",
    "Contratos de locação e compra e venda",
    "Acordos extrajudiciais e aditivos",
    "Rescisão contratual e multas",
    "Inadimplemento e execução de obrigações",
  ],
  services: [
    { title: "Elaboração de contratos", desc: "Redação personalizada para cada tipo de relação jurídica." },
    { title: "Revisão contratual", desc: "Análise de cláusulas, riscos e pontos de atenção." },
    { title: "Negociação e defesa", desc: "Suporte em conflitos contratuais e cobranças." },
  ],
  whenToSeek: [
    "Vai assinar um contrato importante",
    "A outra parte descumpriu o acordo",
    "Precisa rescindir ou alterar um contrato vigente",
    "Quer padronizar contratos da sua empresa",
  ],
  cta: {
    title: "Não assine sem orientação jurídica",
    text: "Consulte o Dr. Wilson Faustino antes de fechar qualquer acordo relevante.",
  },
  disclaimer: DISCLAIMER,
};

export const BUSINESS_LAW_GUIDE: LegalGuide = {
  title: "Direito Empresarial",
  metaDescription:
    "Constituição de empresas, contratos comerciais, societário e compliance. Wilson Faustino Advocacia — Foz do Iguaçu, PR.",
  heroSubtitle:
    "Constituição de empresas, contratos comerciais, questões societárias e compliance — suporte jurídico para o seu negócio.",
  introTitle: "Segurança jurídica para empresas",
  introParagraphs: [
    "O Direito Empresarial abrange a constituição e gestão de sociedades, contratos comerciais, fusões, dissoluções, recuperação judicial e relações entre sócios.",
    "Empreendedores e empresas de todos os portes precisam de estrutura jurídica sólida para crescer com segurança e evitar litígios.",
    "A consultoria preventiva é especialmente valiosa na fase de abertura e expansão do negócio.",
  ],
  topics: [
    "Abertura e alteração de empresas",
    "Contratos comerciais e parcerias",
    "Acordos entre sócios e dissolução societária",
    "Recuperação judicial e falência",
    "Propriedade intelectual básica",
    "Compliance e adequação regulatória",
  ],
  services: [
    { title: "Constituição societária", desc: "Escolha do tipo societário e registro adequado." },
    { title: "Contratos empresariais", desc: "Elaboração e revisão de contratos comerciais." },
    { title: "Consultoria contínua", desc: "Suporte jurídico para decisões do dia a dia." },
  ],
  whenToSeek: [
    "Vai abrir ou reestruturar uma empresa",
    "Precisa de contrato com fornecedor ou cliente",
    "Conflito entre sócios ou dissolução da sociedade",
    "Empresa em dificuldades financeiras",
  ],
  cta: {
    title: "Seu negócio merece respaldo jurídico",
    text: "Consulte o escritório para estruturar ou proteger sua empresa.",
  },
  disclaimer: DISCLAIMER,
};

export const REAL_ESTATE_LAW_GUIDE: LegalGuide = {
  title: "Direito Imobiliário",
  metaDescription:
    "Compra e venda, locação, usucapião e regularização de imóveis. Wilson Faustino Advocacia — Foz do Iguaçu, PR.",
  heroSubtitle:
    "Compra e venda, locação, financiamento, usucapião e regularização de imóveis — orientação para proteger seu patrimônio.",
  introTitle: "Questões imobiliárias no dia a dia",
  introParagraphs: [
    "O Direito Imobiliário trata das relações envolvendo bens imóveis: compra e venda, locação, condomínio, financiamento, usucapião e regularização fundiária.",
    "Transações imobiliárias envolvem valores elevados e exigem análise documental cuidadosa para evitar fraudes e litígios futuros.",
    "Tanto proprietários quanto inquilinos e compradores se beneficiam de orientação jurídica antes de assinar qualquer documento.",
  ],
  topics: [
    "Compra e venda com segurança jurídica",
    "Contratos de locação e despejo",
    "Usucapião e regularização de imóveis",
    "Condomínio e assembleias",
    "Financiamento e alienação fiduciária",
    "Ações possessórias e reivindicatórias",
  ],
  services: [
    { title: "Due diligence imobiliária", desc: "Análise de documentação antes da compra." },
    { title: "Contratos de locação", desc: "Elaboração e defesa em ações de despejo." },
    { title: "Regularização", desc: "Usucapião e retificação de registros." },
  ],
  whenToSeek: [
    "Vai comprar ou vender um imóvel",
    "Problemas com inquilino ou locador",
    "Imóvel com documentação irregular",
    "Disputa de posse ou propriedade",
  ],
  cta: {
    title: "Transação imobiliária à vista?",
    text: "Consulte antes de assinar — previna problemas futuros.",
  },
  disclaimer: DISCLAIMER,
};

export const LEGAL_CONSULTING_GUIDE: LegalGuide = {
  title: "Consultoria Jurídica Preventiva",
  metaDescription:
    "Consultoria jurídica preventiva para pessoas físicas e empresas. Evite litígios com orientação antecipada. Wilson Faustino Advocacia.",
  heroSubtitle:
    "Antecipe riscos, evite litígios e tome decisões informadas com consultoria jurídica preventiva para pessoas físicas e empresas.",
  introTitle: "Prevenir é melhor que litigar",
  introParagraphs: [
    "A consultoria jurídica preventiva consiste em analisar situações antes que se transformem em processos judiciais — revisando contratos, políticas internas, relações comerciais e decisões patrimoniais.",
    "Investir em orientação antecipada costuma ser mais econômico e menos estressante do que enfrentar um litígio prolongado.",
    "O escritório Wilson Faustino Advocacia oferece consultoria sob medida para diferentes perfis de cliente.",
  ],
  topics: [
    "Revisão de contratos antes da assinatura",
    "Análise de riscos em negócios e investimentos",
    "Orientação patrimonial e sucessória",
    "Compliance para pequenas e médias empresas",
    "Notificações extrajudiciais preventivas",
    "Segunda opinião jurídica em processos em curso",
  ],
  services: [
    { title: "Consulta pontual", desc: "Orientação sobre uma questão específica." },
    { title: "Pacote empresarial", desc: "Suporte jurídico contínuo para empresas." },
    { title: "Auditoria documental", desc: "Revisão de contratos e documentos em lote." },
  ],
  whenToSeek: [
    "Vai assinar um contrato importante",
    "Está tomando uma decisão patrimonial relevante",
    "Empresa precisa de políticas e contratos padronizados",
    "Quer evitar um processo que está se formando",
  ],
  cta: {
    title: "Invista em segurança jurídica",
    text: "Agende uma consulta preventiva com o Dr. Wilson Faustino.",
  },
  disclaimer: DISCLAIMER,
};
