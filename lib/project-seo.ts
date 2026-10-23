import { siteUrl } from "./site";

export const projectSeo = {
  proofgym: {
    title: "ProofGym — Formal Logic & Critical Thinking Practice",
    description: "Explore ProofGym, a formal logic and STEM practice app. Try a guided Fitch proof and see how its parser, validation engine, and exercise generator work.",
    subject: "Formal logic, Fitch-style proofs, STEM problem solving and independent reasoning",
  },
  kickboxwm: {
    title: "KickboxWM — Memory & Movement Experiment",
    description: "Explore KickboxWM, a personal experiment pairing delayed-recall memory cues with kickboxing-style intervals. Discover the hypothesis and prototype.",
    subject: "An experimental prototype combining delayed-recall memory tasks and movement",
  },
  cognitrain: {
    title: "CogniTrain — Browser-Based Cognitive Games",
    description: "Explore CogniTrain, a work-in-progress web app with seven cognitive games, adaptive challenges, and progress tracking. Try the public games without signup.",
    subject: "Browser-based cognitive games, adaptive challenges and progress tracking",
  },
} as const;

export function projectStructuredData(slug: keyof typeof projectSeo, project: { title: string; href: string; description: string }) {
  const seo = projectSeo[slug];
  const url = `${siteUrl}/${slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage", "@id": `${url}#page`, url,
        name: seo.title, description: seo.description, inLanguage: "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#project` },
        author: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "SoftwareApplication", "@id": `${url}#project`,
        name: project.title, description: project.description, operatingSystem: "Web browser",
        url: project.href, mainEntityOfPage: { "@id": `${url}#page` },
        about: { "@type": "Thing", name: seo.subject },
      },
      {
        "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Portfolio", item: siteUrl },
          { "@type": "ListItem", position: 2, name: project.title, item: url },
        ],
      },
    ],
  };
}
