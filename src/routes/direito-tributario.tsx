import { createFileRoute } from "@tanstack/react-router";
import { LegalGuidePage } from "@/components/LegalGuidePage";
import { TAX_LAW_GUIDE } from "@/data/legal-guides";
import { SITE_TITLE } from "@/site-config";

export const Route = createFileRoute("/direito-tributario")({
  head: () => ({
    meta: [
      { title: `${TAX_LAW_GUIDE.title} | ${SITE_TITLE}` },
      { name: "description", content: TAX_LAW_GUIDE.metaDescription },
    ],
  }),
  component: () => <LegalGuidePage guide={TAX_LAW_GUIDE} />,
});
