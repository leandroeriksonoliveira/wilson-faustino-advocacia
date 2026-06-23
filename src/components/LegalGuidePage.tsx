import { Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle, Scale } from "lucide-react";
import {
  CONTENT_DISCLAIMER,
  DOCTOR_NAME,
  DOCTOR_TITLE,
  FIRM_SHORT_NAME,
  OAB,
  SCHEDULE_CONSULTATION_TEXT,
  SCHEDULE_CONSULTATION_TITLE,
  WHATSAPP_URL,
} from "@/site-config";
import type { LegalGuide } from "@/data/legal-guides";

export function LegalGuidePage({ guide }: { guide: LegalGuide }) {
  return (
    <div className="min-h-screen bg-[color:var(--color-cream)] font-sans text-[color:var(--color-ink)] antialiased">
      <header className="sticky top-0 z-50 border-b border-[color:var(--color-ink)]/5 glass-nav">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" className="group inline-flex flex-col">
            <span className="font-display text-lg font-semibold leading-none tracking-tight text-[color:var(--color-ink)]">
              {FIRM_SHORT_NAME}
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-ink-soft)]/70">
              {DOCTOR_NAME} · {DOCTOR_TITLE} · {OAB}
            </span>
          </Link>
          <Link
            to="/"
            hash="especialidades"
            className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-ink-soft)] transition-colors hover:text-[color:var(--color-lime)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-16">
        <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-ink-soft)]/60">
          Especialidade jurídica
        </span>
        <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[color:var(--color-ink)] sm:text-4xl lg:text-5xl">
          {guide.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[color:var(--color-ink-soft)]/70">
          {guide.heroSubtitle}
        </p>

        <div className="mt-6 rounded-xl border border-[color:var(--color-lime)]/30 bg-[color:var(--color-lime)]/10 px-5 py-4 text-sm leading-relaxed text-[color:var(--color-ink)]">
          <strong>Conteúdo informativo.</strong> {CONTENT_DISCLAIMER}
        </div>

        <section className="mt-12">
          <div className="flex items-start gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[color:var(--color-ink)] text-[color:var(--color-lime-soft)]">
              <Scale className="h-7 w-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[color:var(--color-ink)]">{guide.introTitle}</h2>
              {guide.introParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="mt-4 text-base leading-relaxed text-[color:var(--color-ink-soft)]/85"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-[color:var(--color-ink)]/8 pt-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-lime)]">
            Principais temas
          </span>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {guide.topics.map((topic) => (
              <li
                key={topic}
                className="flex items-start gap-3 rounded-xl border border-[color:var(--color-ink)]/6 bg-white px-4 py-3 text-sm text-[color:var(--color-ink-soft)]/85"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-lime)]" />
                {topic}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-[color:var(--color-ink)]/8 pt-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-lime)]">
            Como o escritório atua
          </span>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {guide.services.map(({ title, desc }) => (
              <div key={title} className="card-modern rounded-2xl p-5">
                <h3 className="font-bold text-[color:var(--color-ink)]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-soft)]/70">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-[color:var(--color-ink)]/8 pt-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-lime)]">
            Quando buscar orientação
          </span>
          <ul className="mt-6 space-y-3">
            {guide.whenToSeek.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-[color:var(--color-ink-soft)]/85 sm:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-lime)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 rounded-2xl border border-[color:var(--color-ink)]/8 bg-[color:var(--color-ink)] p-8 text-center sm:p-10">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{guide.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/75">{guide.cta.text}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-whatsapp)] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[color:var(--color-whatsapp-dark)]"
          >
            <MessageCircle className="h-5 w-5" />
            Agendar consulta
          </a>
        </section>

        <p className="mt-8 text-center text-xs text-[color:var(--color-ink-soft)]/60">{guide.disclaimer}</p>
      </main>

      <footer className="border-t border-[color:var(--color-ink)]/8 bg-[color:var(--color-ink)] py-8 text-center text-sm text-white/60">
        <p>
          © {new Date().getFullYear()} {FIRM_SHORT_NAME}. {DOCTOR_NAME} · {OAB}
        </p>
        <p className="mt-2 text-xs">{SCHEDULE_CONSULTATION_TITLE}</p>
        <p className="mt-1 text-xs text-white/40">{SCHEDULE_CONSULTATION_TEXT}</p>
      </footer>
    </div>
  );
}
