import { createFileRoute } from "@tanstack/react-router";
import { LegalGuidePage } from "@/components/LegalGuidePage";
import { FAMILY_LAW_GUIDE } from "@/data/legal-guides";
import { SITE_TITLE } from "@/site-config";

export const Route = createFileRoute("/direito-de-familia")({
  head: () => ({
    meta: [
      { title: `${FAMILY_LAW_GUIDE.title} | ${SITE_TITLE}` },
      { name: "description", content: FAMILY_LAW_GUIDE.metaDescription },
    ],
  }),
  component: () => <LegalGuidePage guide={FAMILY_LAW_GUIDE} />,
});
