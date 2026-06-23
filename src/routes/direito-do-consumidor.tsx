import { createFileRoute } from "@tanstack/react-router";
import { LegalGuidePage } from "@/components/LegalGuidePage";
import { CONSUMER_LAW_GUIDE } from "@/data/legal-guides";
import { SITE_TITLE } from "@/site-config";

export const Route = createFileRoute("/direito-do-consumidor")({
  head: () => ({
    meta: [
      { title: `${CONSUMER_LAW_GUIDE.title} | ${SITE_TITLE}` },
      { name: "description", content: CONSUMER_LAW_GUIDE.metaDescription },
    ],
  }),
  component: () => <LegalGuidePage guide={CONSUMER_LAW_GUIDE} />,
});
