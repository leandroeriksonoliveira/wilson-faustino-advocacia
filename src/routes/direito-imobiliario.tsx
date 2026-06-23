import { createFileRoute } from "@tanstack/react-router";
import { LegalGuidePage } from "@/components/LegalGuidePage";
import { REAL_ESTATE_LAW_GUIDE } from "@/data/legal-guides";
import { SITE_TITLE } from "@/site-config";

export const Route = createFileRoute("/direito-imobiliario")({
  head: () => ({
    meta: [
      { title: `${REAL_ESTATE_LAW_GUIDE.title} | ${SITE_TITLE}` },
      { name: "description", content: REAL_ESTATE_LAW_GUIDE.metaDescription },
    ],
  }),
  component: () => <LegalGuidePage guide={REAL_ESTATE_LAW_GUIDE} />,
});
