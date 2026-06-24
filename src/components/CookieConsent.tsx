import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { PRIVACY_POLICY_PATH } from "@/site-config";

const STORAGE_KEY = "wilson-faustino-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const consent = window.localStorage.getItem(STORAGE_KEY);
    setVisible(consent !== "accepted" && consent !== "rejected");
  }, []);

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function reject() {
    window.localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentimento de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-[color:var(--color-ink)]/10 bg-[color:var(--color-ink)]/95 p-4 text-white backdrop-blur-md sm:p-5"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-white/80">
          Utilizamos apenas cookies essenciais para o funcionamento do site. Você pode aceitar ou
          recusar o armazenamento de preferências locais. Saiba mais em nossa{" "}
          <Link
            to={PRIVACY_POLICY_PATH}
            className="font-semibold text-[color:var(--color-lime-soft)] underline-offset-2 hover:underline"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={reject}
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-full bg-[color:var(--color-lime)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-ink)] transition-opacity hover:opacity-90"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
