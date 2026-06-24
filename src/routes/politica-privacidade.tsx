import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CITY,
  CLINIC_NAME,
  DOCTOR_NAME,
  EMAIL,
  FIRM_SHORT_NAME,
  OAB,
  PRIVACY_POLICY_PATH,
  SITE_TITLE,
  STATE,
  WHATSAPP_DISPLAY,
} from "@/site-config";

export const Route = createFileRoute("/politica-privacidade")({
  head: () => ({
    meta: [
      { title: `Política de Privacidade | ${SITE_TITLE}` },
      {
        name: "description",
        content: `Política de Privacidade e proteção de dados do escritório ${CLINIC_NAME}, em conformidade com a LGPD.`,
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[color:var(--color-cream)] font-sans text-[color:var(--color-ink)] antialiased">
      <header className="border-b border-[color:var(--color-ink)]/8 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" className="font-display text-lg font-semibold text-[color:var(--color-ink)]">
            {FIRM_SHORT_NAME}
          </Link>
          <Link to="/" className="text-sm font-medium text-[color:var(--color-lime)] hover:underline">
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-10 lg:px-8 lg:py-14">
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-sm text-[color:var(--color-ink-soft)]/70">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-[color:var(--color-ink-soft)]/85 sm:text-base">
          <section>
            <h2 className="text-lg font-bold text-[color:var(--color-ink)]">1. Controlador dos dados</h2>
            <p className="mt-3">
              O controlador dos dados pessoais tratados por meio deste site é {CLINIC_NAME}, sob
              responsabilidade de {DOCTOR_NAME}, {OAB}, com atendimento em {CITY} — {STATE} e contato
              pelos canais informados na página principal.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[color:var(--color-ink)]">2. Dados coletados</h2>
            <p className="mt-3">
              Podemos tratar dados fornecidos voluntariamente quando você entra em contato por
              WhatsApp, e-mail ou outros canais indicados no site, como nome, telefone, e-mail e
              informações relacionadas à sua demanda jurídica.
            </p>
            <p className="mt-3">
              Também podemos coletar dados técnicos de navegação, como endereço IP, tipo de navegador,
              páginas acessadas e cookies essenciais para funcionamento e segurança do site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[color:var(--color-ink)]">3. Finalidade e base legal</h2>
            <p className="mt-3">Os dados são utilizados para:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>responder solicitações de contato e agendamento de atendimento;</li>
              <li>prestar serviços advocatícios quando houver relação profissional;</li>
              <li>cumprir obrigações legais e regulatórias;</li>
              <li>garantir segurança, estabilidade e melhoria técnica do site.</li>
            </ul>
            <p className="mt-3">
              O tratamento fundamenta-se no consentimento, na execução de contrato ou de medidas
              pré-contratuais, no legítimo interesse e no cumprimento de obrigação legal, conforme
              arts. 7º e 11 da Lei nº 13.709/2018 (LGPD).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[color:var(--color-ink)]">4. Compartilhamento</h2>
            <p className="mt-3">
              Os dados não são comercializados. O compartilhamento ocorre apenas quando necessário para
              a prestação do serviço, cumprimento de obrigação legal, ordem de autoridade competente ou
              com prestadores de tecnologia que atuam como operadores, sob contratos compatíveis com a
              LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[color:var(--color-ink)]">5. Retenção e segurança</h2>
            <p className="mt-3">
              Os dados são mantidos pelo tempo necessário à finalidade do tratamento, ao cumprimento de
              prazos legais e à defesa de direitos. Adotamos medidas técnicas e administrativas
              razoáveis para proteger as informações, incluindo uso de conexão segura (HTTPS) quando
              disponível.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[color:var(--color-ink)]">6. Direitos do titular</h2>
            <p className="mt-3">
              Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade,
              eliminação, informação sobre compartilhamentos e revogação do consentimento, nos termos da
              LGPD, pelo e-mail {EMAIL} ou WhatsApp {WHATSAPP_DISPLAY}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[color:var(--color-ink)]">7. Cookies</h2>
            <p className="mt-3">
              Utilizamos cookies essenciais para lembrar preferências básicas, como o consentimento
              desta política. Você pode gerenciar cookies no seu navegador, observando que algumas
              funcionalidades podem ser afetadas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[color:var(--color-ink)]">8. Contato</h2>
            <p className="mt-3">
              Para exercer direitos ou esclarecer dúvidas sobre privacidade, entre em contato pelo
              e-mail {EMAIL} ou WhatsApp {WHATSAPP_DISPLAY}.
            </p>
          </section>
        </div>

        <p className="mt-10 text-xs text-[color:var(--color-ink-soft)]/60">
          Esta política pode ser atualizada a qualquer tempo. A versão vigente estará sempre disponível
          em {PRIVACY_POLICY_PATH}.
        </p>
      </main>

      <footer className="border-t border-[color:var(--color-ink)]/8 bg-white py-6">
        <p className="text-center text-xs text-[color:var(--color-ink-soft)]/60">
          {CLINIC_NAME} · {DOCTOR_NAME} · {OAB}
        </p>
      </footer>
    </div>
  );
}
