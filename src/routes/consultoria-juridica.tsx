import { createFileRoute } from "@tanstack/react-router";
import { LegalGuidePage } from "@/components/LegalGuidePage";
import { LEGAL_CONSULTING_GUIDE } from "@/data/legal-guides";
import { SITE_TITLE } from "@/site-config";

export const Route = createFileRoute("/consultoria-juridica")({
  head: () => ({
    meta: [
      { title: `${LEGAL_CONSULTING_GUIDE.title} | ${SITE_TITLE}` },
      { name: "description", content: LEGAL_CONSULTING_GUIDE.metaDescription },
    ],
  }),
  component: () => <LegalGuidePage guide={LEGAL_CONSULTING_GUIDE} />,
});
