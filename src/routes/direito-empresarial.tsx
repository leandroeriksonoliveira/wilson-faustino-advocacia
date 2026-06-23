import { createFileRoute } from "@tanstack/react-router";
import { LegalGuidePage } from "@/components/LegalGuidePage";
import { BUSINESS_LAW_GUIDE } from "@/data/legal-guides";
import { SITE_TITLE } from "@/site-config";

export const Route = createFileRoute("/direito-empresarial")({
  head: () => ({
    meta: [
      { title: `${BUSINESS_LAW_GUIDE.title} | ${SITE_TITLE}` },
      { name: "description", content: BUSINESS_LAW_GUIDE.metaDescription },
    ],
  }),
  component: () => <LegalGuidePage guide={BUSINESS_LAW_GUIDE} />,
});
