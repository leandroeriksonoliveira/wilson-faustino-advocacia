import { createFileRoute } from "@tanstack/react-router";
import { LegalGuidePage } from "@/components/LegalGuidePage";
import { CONTRACTS_LAW_GUIDE } from "@/data/legal-guides";
import { SITE_TITLE } from "@/site-config";

export const Route = createFileRoute("/direito-contratos")({
  head: () => ({
    meta: [
      { title: `${CONTRACTS_LAW_GUIDE.title} | ${SITE_TITLE}` },
      { name: "description", content: CONTRACTS_LAW_GUIDE.metaDescription },
    ],
  }),
  component: () => <LegalGuidePage guide={CONTRACTS_LAW_GUIDE} />,
});
