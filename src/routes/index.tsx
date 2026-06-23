import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Linkedin,
  MapPin,
  Scale,
  Users,
  Building2,
  Home,
  Briefcase,
  Shield,
  FileText,
  FileSignature,
  Gavel,
  Calculator,
  ExternalLink,
  Clock,
  BookOpen,
  Landmark,
  Handshake,
} from "lucide-react";
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  LINKEDIN_URL,
  EMAIL,
  FIRM_SHORT_NAME,
  CLINIC_NAME,
  DOCTOR_NAME,
  DOCTOR_NAME_FULL,
  DOCTOR_TITLE,
  DOCTOR_TAGLINE,
  CITY,
  STATE,
  ADDRESS_STREET,
  ADDRESS_NEIGHBORHOOD,
  ADDRESS_CITY,
  ADDRESS_NOTE,
  MAPS_URL,
  BIO_PARAGRAPHS,
  PROFESSIONAL_EXPERIENCE,
  DIFFERENTIALS,
  LEGAL_SERVICES_INTRO,
  LEGAL_REFERENCES,
  CIVIL_LAW_PAGE_PATH,
  FAMILY_LAW_PAGE_PATH,
  CONSUMER_LAW_PAGE_PATH,
  TAX_LAW_PAGE_PATH,
  CONTRACTS_PAGE_PATH,
  BUSINESS_LAW_PAGE_PATH,
  REAL_ESTATE_LAW_PAGE_PATH,
  LEGAL_CONSULTING_PAGE_PATH,
  SITE_TITLE,
  SITE_DESCRIPTION,
  STAT_SPECIALTIES,
  STAT_YEARS,
  OAB,
  SPECIALIZATIONS,
  CONTENT_DISCLAIMER,
  SCHEDULE_CONSULTATION_TEXT,
  SCHEDULE_CONSULTATION_TITLE,
} from "@/site-config";
import drWilsonPhoto from "@/assets/dr-wilson-faustino.svg";
import drWilsonAtuacaoPhoto from "@/assets/dr-wilson-faustino-atuacao.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "O Escritório", href: "#escritorio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Referências", href: "#referencias" },
  { label: "Contato", href: "#contato" },
];

const SPECIALTIES = [
  {
    icon: Users,
    title: "Família e Sucessões",
    desc: "Divórcio, guarda, pensão alimentícia, inventário e planejamento sucessório.",
    pagePath: FAMILY_LAW_PAGE_PATH,
  },
  {
    icon: Scale,
    title: "Direito Civil",
    desc: "Obrigações, responsabilidade civil, cobranças e questões patrimoniais.",
    pagePath: CIVIL_LAW_PAGE_PATH,
  },
  {
    icon: FileSignature,
    title: "Contratos",
    desc: "Elaboração, revisão e negociação de contratos civis e empresariais.",
    pagePath: CONTRACTS_PAGE_PATH,
  },
  {
    icon: Building2,
    title: "Direito Empresarial",
    desc: "Constituição de empresas, societário e contratos comerciais.",
    pagePath: BUSINESS_LAW_PAGE_PATH,
  },
  {
    icon: Calculator,
    title: "Direito Tributário",
    desc: "Planejamento fiscal, obrigações acessórias e defesa em autuações.",
    pagePath: TAX_LAW_PAGE_PATH,
  },
  {
    icon: Home,
    title: "Direito Imobiliário",
    desc: "Compra, venda, locação e regularização de imóveis.",
    pagePath: REAL_ESTATE_LAW_PAGE_PATH,
  },
  {
    icon: Shield,
    title: "Direito do Consumidor",
    desc: "Defesa contra práticas abusivas e produtos defeituosos.",
    pagePath: CONSUMER_LAW_PAGE_PATH,
  },
  {
    icon: FileText,
    title: "Consultoria Jurídica",
    desc: "Orientação preventiva para evitar litígios.",
    pagePath: LEGAL_CONSULTING_PAGE_PATH,
  },
];

const DIFF_ICONS = [Handshake, Shield, Landmark, Scale] as const;

function Logo({ className = "", variant = "default" }: { className?: string; variant?: "default" | "footer" }) {
  const isFooter = variant === "footer";
  return (
    <a href="#inicio" className={`group inline-flex flex-col ${className}`}>
      <span
        className={`font-display font-semibold leading-none tracking-tight ${
          isFooter ? "text-xl text-white" : "text-lg text-[color:var(--color-ink)] sm:text-xl"
        }`}
      >
        {FIRM_SHORT_NAME}
      </span>
      <span
        className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] ${
          isFooter ? "text-white/55" : "text-[color:var(--color-ink-soft)]/70"
        }`}
      >
        {DOCTOR_NAME} · {OAB}
      </span>
    </a>
  );
}

function WhatsAppButton({
  children,
  size = "md",
  className = "",
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-base sm:text-lg",
  };
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-whatsapp)] font-semibold text-white shadow-lg shadow-[color:var(--color-whatsapp)]/25 transition-all duration-300 hover:scale-[1.02] hover:bg-[color:var(--color-whatsapp-dark)] hover:shadow-xl ${sizes[size]} ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {children}
    </a>
  );
}

function LinkedInButton({ size = "sm", className = "" }: { size?: "sm" | "md"; className?: string }) {
  const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-base" };
  return (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--color-ink)]/10 bg-white/80 font-semibold text-[color:var(--color-ink)] backdrop-blur-sm transition-all duration-300 hover:border-[color:var(--color-lime)] hover:text-[color:var(--color-lime)] ${sizes[size]} ${className}`}
    >
      <Linkedin className="h-5 w-5" />
      LinkedIn
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-ink)]/5 glass-nav">
      <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden flex-1 flex-wrap items-center justify-end gap-x-1 gap-y-1 xl:flex xl:gap-x-2">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-medium text-[color:var(--color-ink-soft)] transition-colors hover:bg-white hover:text-[color:var(--color-lime)] xl:text-sm"
            >
              {l.label}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-2">
            <LinkedInButton size="sm" />
            <WhatsAppButton size="sm">WhatsApp</WhatsAppButton>
          </div>
        </nav>
        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto rounded-xl border border-[color:var(--color-ink)]/8 bg-white/90 p-2.5 text-[color:var(--color-ink)] shadow-sm xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-[color:var(--color-ink)]/5 bg-[color:var(--color-cream)]/98 backdrop-blur-md xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-[color:var(--color-ink-soft)] hover:bg-white hover:text-[color:var(--color-lime)]"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <LinkedInButton size="md" className="w-full" />
              <WhatsAppButton size="sm" className="w-full">
                Agendar consulta
              </WhatsAppButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative scroll-mt-[4.5rem] overflow-hidden hero-mesh">
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-ink)]/5 via-transparent to-[color:var(--color-sage)]/5" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-8 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-12">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-lime)]/25 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-ink)] backdrop-blur-sm">
            <Scale className="h-3.5 w-3.5 text-[color:var(--color-lime)]" />
            Advocacia e Consultoria Jurídica · {CITY}
          </span>
          <h1 className="font-display mt-7 text-4xl font-semibold leading-[1.08] tracking-tight text-[color:var(--color-ink)] sm:text-5xl lg:text-[3.4rem]">
            Defesa de direitos com{" "}
            <span className="gradient-text">estratégia e humanidade</span>
          </h1>
          <p className="mt-4 text-base font-medium text-[color:var(--color-ink-soft)] sm:text-lg">
            {DOCTOR_NAME} · {DOCTOR_TITLE} · {OAB}
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[color:var(--color-ink-soft)]/85">
            {DOCTOR_TAGLINE}. Atendimento presencial em {CITY}, {STATE}, e online em todo o Brasil.
            O primeiro passo é agendar uma consulta para entender sua demanda.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton size="lg">Agendar Consulta</WhatsAppButton>
            <LinkedInButton size="md" />
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-[color:var(--color-ink)]/6 bg-white/60 p-5 backdrop-blur-sm">
            <div>
              <p className="text-2xl font-bold text-[color:var(--color-ink)]">{STAT_SPECIALTIES}</p>
              <p className="text-[11px] uppercase tracking-wider text-[color:var(--color-ink-soft)]/60">Especialidades</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[color:var(--color-ink)]">{STAT_YEARS}</p>
              <p className="text-[11px] uppercase tracking-wider text-[color:var(--color-ink-soft)]/60">Anos de experiência</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[color:var(--color-ink)]">24h</p>
              <p className="text-[11px] uppercase tracking-wider text-[color:var(--color-ink-soft)]/60">Resposta via WhatsApp</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[color:var(--color-lime)]/10 to-[color:var(--color-sage)]/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--color-ink)]/10 bg-[color:var(--color-ink)] shadow-2xl shadow-[color:var(--color-ink)]/20">
            <img
              src={drWilsonPhoto}
              alt={`${DOCTOR_NAME}, ${DOCTOR_TITLE}`}
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color:var(--color-ink)] via-[color:var(--color-ink)]/90 to-transparent px-8 pb-8 pt-24 sm:px-10 sm:pb-10">
              <blockquote className="border-l-4 border-[color:var(--color-lime)] pl-6 text-lg leading-relaxed text-white/90">
                "Cada família e cada patrimônio merecem orientação clara, técnica e respeitosa — a justiça começa com informação de qualidade."
              </blockquote>
              <p className="mt-4 text-sm font-medium text-[color:var(--color-lime-soft)]">
                — {DOCTOR_NAME}, {DOCTOR_TITLE}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {SPECIALIZATIONS.slice(0, 4).map((spec) => (
                  <span
                    key={spec}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutFirm() {
  return (
    <section id="escritorio" className="scroll-mt-[4.5rem] bg-white py-10 lg:py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 lg:grid-cols-[auto_1fr] lg:gap-12 lg:px-8">
        <div className="relative mx-auto lg:mx-0">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[color:var(--color-lime)]/15 to-[color:var(--color-sage)]/15 blur-xl" />
          <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-[1.75rem] border-4 border-white bg-[color:var(--color-ink)] shadow-2xl sm:h-80 sm:w-72 lg:h-[22rem] lg:w-80">
            <img
              src={drWilsonPhoto}
              alt={`${DOCTOR_NAME}, ${DOCTOR_TITLE}`}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
        <div className="min-w-0">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-ink-soft)]/60">
            O Escritório
          </span>
          <h2 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-tight text-[color:var(--color-ink)] sm:text-4xl lg:text-5xl">
            {DOCTOR_NAME_FULL}
            <span className="mt-1 block text-lg font-sans font-medium text-[color:var(--color-ink-soft)]/75 sm:text-xl">
              {DOCTOR_NAME} · {DOCTOR_TITLE} · {OAB}
            </span>
          </h2>
          <p className="mt-4 text-base font-semibold text-[color:var(--color-lime)]">{DOCTOR_TAGLINE}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {SPECIALIZATIONS.map((spec) => (
              <li
                key={spec}
                className="rounded-full border border-[color:var(--color-lime)]/20 bg-[color:var(--color-lime)]/8 px-3 py-1 text-xs font-semibold text-[color:var(--color-ink)]"
              >
                {spec}
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[color:var(--color-ink-soft)]/85 sm:text-lg">
            {BIO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton size="md">Agendar consulta</WhatsAppButton>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-ink)]/10 px-5 py-3 text-sm font-semibold text-[color:var(--color-ink)] transition-colors hover:border-[color:var(--color-lime)] hover:text-[color:var(--color-lime)]"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Specialties() {
  return (
    <section id="especialidades" className="scroll-mt-[4.5rem] bg-[color:var(--color-cream)] py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-ink-soft)]/60">
            Áreas de Atuação
          </span>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[color:var(--color-ink)] sm:text-4xl lg:text-5xl">
            Especialidades jurídicas
          </h2>
          <p className="mt-4 text-base text-[color:var(--color-ink-soft)]/70">
            Visão geral informativa. Para saber o que se aplica ao seu caso, agende uma consulta com {DOCTOR_NAME}.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SPECIALTIES.map(({ icon: Icon, title, desc, pagePath }) => (
            <Link
              key={title}
              to={pagePath}
              className="group card-modern block rounded-2xl p-6 text-left"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--color-ink)] text-[color:var(--color-lime-soft)] transition-colors group-hover:bg-[color:var(--color-lime)] group-hover:text-white">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[color:var(--color-ink)]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-soft)]/70">{desc}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-lime)]">
                Saiba mais →
              </p>
            </Link>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[color:var(--color-lime)]/20 bg-[color:var(--color-lime)]/8 px-5 py-4 text-center text-sm text-[color:var(--color-ink)]">
          {CONTENT_DISCLAIMER}
        </div>
        <div className="mt-8 text-center">
          <WhatsAppButton size="lg">Agendar consulta jurídica</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function Practice() {
  return (
    <section id="atuacao" className="scroll-mt-[4.5rem] bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-ink-soft)]/60">
              Forma de Atuação
            </span>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
              Consultoria e contencioso
            </h2>
            <p className="mt-4 text-base text-[color:var(--color-ink-soft)]/70">
              Atuação em consultoria preventiva, soluções extrajudiciais e representação em processos judiciais.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[color:var(--color-lime)]/15 to-[color:var(--color-sage)]/15 blur-xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border-4 border-white shadow-2xl">
              <img
                src={drWilsonAtuacaoPhoto}
                alt={`${DOCTOR_NAME} em atuação profissional`}
                className="aspect-[3/4] w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {PROFESSIONAL_EXPERIENCE.map(({ area, focus, period }) => (
            <div key={area} className="card-modern rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[color:var(--color-ink)] text-[color:var(--color-lime-soft)]">
                  <Gavel className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[color:var(--color-lime)]">
                    {focus}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-[color:var(--color-ink)]">{area}</h3>
                  <p className="mt-1 text-sm text-[color:var(--color-ink-soft)]/70">{period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhenToSeek() {
  return (
    <section className="scroll-mt-[4.5rem] bg-[color:var(--color-ink)] py-10 lg:py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-lime-soft)]">
            Orientação Jurídica
          </span>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Quando buscar uma consulta?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            {LEGAL_SERVICES_INTRO.intro}
          </p>
          <ul className="mt-6 space-y-3">
            {LEGAL_SERVICES_INTRO.characteristics.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-white/80 sm:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-lime)]" />
                {item}
              </li>
            ))}
          </ul>
          <WhatsAppButton size="md" className="mt-8">
            Agendar consulta
          </WhatsAppButton>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {DIFFERENTIALS.map(({ title, desc }, i) => {
            const Icon = DIFF_ICONS[i] ?? Gavel;
            return (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--color-lime)] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LegalReferences() {
  return (
    <section id="referencias" className="scroll-mt-[4.5rem] bg-[color:var(--color-cream)] py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[color:var(--color-lime)]">
            <BookOpen className="h-4 w-4" />
            Fontes Oficiais
          </span>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
            Referências jurídicas
          </h2>
          <p className="mt-4 text-base text-[color:var(--color-ink-soft)]/70">
            Links para órgãos oficiais, legislação e tribunais — fontes confiáveis para consulta de direitos e normas.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LEGAL_REFERENCES.map(({ title, desc, url }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-modern flex flex-col rounded-2xl p-5"
            >
              <ExternalLink className="h-4 w-4 text-[color:var(--color-lime)]" />
              <h3 className="mt-3 text-sm font-bold leading-snug text-[color:var(--color-ink)] group-hover:text-[color:var(--color-lime)]">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-[color:var(--color-ink-soft)]/65">{desc}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-lime)]">
                Acessar →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function LinkedInSection() {
  return (
    <section className="border-y border-[color:var(--color-ink)]/5 bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#0a66c2] text-white shadow-lg">
          <Linkedin className="h-8 w-8" />
        </div>
        <h2 className="font-display mt-6 text-2xl font-semibold text-[color:var(--color-ink)] sm:text-3xl">
          Dr. Wilson Faustino no LinkedIn
        </h2>
        <p className="mx-auto mt-2 max-w-md text-base text-[color:var(--color-ink-soft)]/70">
          Conecte-se para acompanhar a trajetória profissional e conteúdos sobre direito, família e gestão patrimonial.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ink)] px-8 py-3 text-base font-semibold text-white transition-all hover:bg-[color:var(--color-sage)]"
          >
            <Linkedin className="h-5 w-5" />
            Ver perfil no LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="scroll-mt-[4.5rem] bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-ink-soft)]/60">
            Atendimento
          </span>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
            {SCHEDULE_CONSULTATION_TITLE}
          </h2>
          <p className="mt-4 text-base text-[color:var(--color-ink-soft)]/70">
            {SCHEDULE_CONSULTATION_TEXT}
          </p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="card-modern rounded-2xl p-8">
            <h3 className="flex items-center gap-2 text-lg font-bold text-[color:var(--color-ink)]">
              <MapPin className="h-5 w-5 text-[color:var(--color-lime)]" />
              Localização
            </h3>
            <div className="mt-4 space-y-1 text-sm leading-relaxed text-[color:var(--color-ink-soft)]/85">
              <p className="font-medium text-[color:var(--color-ink)]">{ADDRESS_STREET}</p>
              <p>{ADDRESS_NEIGHBORHOOD}</p>
              <p>{ADDRESS_CITY}</p>
              <p className="flex items-center gap-2 pt-2 text-[color:var(--color-ink-soft)]/60">
                <Clock className="h-4 w-4 shrink-0" />
                {ADDRESS_NOTE}
              </p>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-ink)] transition-colors hover:text-[color:var(--color-lime)]"
            >
              Ver no Google Maps
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="card-modern rounded-2xl p-8">
            <h3 className="flex items-center gap-2 text-lg font-bold text-[color:var(--color-ink)]">
              <MessageCircle className="h-5 w-5 text-[color:var(--color-lime)]" />
              Contato Rápido
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-[color:var(--color-ink-soft)]/85">
              <li>
                <span className="font-medium text-[color:var(--color-ink)]">WhatsApp / Telefone:</span>{" "}
                {WHATSAPP_DISPLAY}
              </li>
              <li>
                <span className="font-medium text-[color:var(--color-ink)]">E-mail:</span>{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-[color:var(--color-ink)] underline-offset-2 hover:text-[color:var(--color-lime)] hover:underline"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="font-medium text-[color:var(--color-ink)]">LinkedIn:</span>{" "}
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--color-ink)] underline-offset-2 hover:text-[color:var(--color-lime)] hover:underline"
                >
                  Dr. Wilson Faustino
                </a>
              </li>
              <li>
                <span className="font-medium text-[color:var(--color-ink)]">Registro:</span> {OAB}
              </li>
              <li>
                <span className="font-medium text-[color:var(--color-ink)]">Advogado:</span>{" "}
                {DOCTOR_NAME_FULL} — {DOCTOR_TITLE}
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton size="md">Agendar consulta</WhatsAppButton>
              <LinkedInButton size="md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--color-ink)] text-white">
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-3 lg:px-8">
          <div>
            <Logo variant="footer" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {DOCTOR_TAGLINE}. Advocacia e consultoria jurídica em {CITY}, {STATE}.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[color:var(--color-lime-soft)]">
              Escritório
            </h4>
            <div className="mt-4 flex items-start gap-3 text-sm text-white/80">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-lime-soft)]" />
              <div>
                <p>{ADDRESS_STREET}</p>
                <p className="mt-1">{ADDRESS_NEIGHBORHOOD}</p>
                <p className="mt-1">{ADDRESS_CITY}</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[color:var(--color-lime-soft)]">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-[color:var(--color-lime-soft)]"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-[color:var(--color-lime-soft)]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/50 sm:flex-row lg:px-8">
            <p>
              © {new Date().getFullYear()} {CLINIC_NAME}. Todos os direitos reservados.
            </p>
            <p>
              {DOCTOR_NAME} · {OAB}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[color:var(--color-whatsapp)] text-white shadow-2xl shadow-[color:var(--color-whatsapp)]/40 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-[color:var(--color-cream)] font-sans text-[color:var(--color-ink)] antialiased">
      <Header />
      <main>
        <Hero />
        <AboutFirm />
        <Specialties />
        <Practice />
        <WhenToSeek />
        <LegalReferences />
        <LinkedInSection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
