import { createFileRoute } from "@tanstack/react-router";
import { LegalGuidePage } from "@/components/LegalGuidePage";
import { CIVIL_LAW_GUIDE } from "@/data/legal-guides";
import { SITE_TITLE } from "@/site-config";

export const Route = createFileRoute("/direito-civil")({
  head: () => ({
    meta: [
      { title: `${CIVIL_LAW_GUIDE.title} | ${SITE_TITLE}` },
      { name: "description", content: CIVIL_LAW_GUIDE.metaDescription },
    ],
  }),
  component: () => <LegalGuidePage guide={CIVIL_LAW_GUIDE} />,
});
