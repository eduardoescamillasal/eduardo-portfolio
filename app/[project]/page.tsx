import { ExplainThis } from "../components/explain-this";
import type { ExplanationTopic } from "../../data/explanations";
import Link from "next/link";
import { Arrow } from "../components/arrow";
import { ThemeToggle } from "../components/theme-toggle";
import { notFound } from "next/navigation";
import { projects } from "../../data/portfolio";
import { shareImage } from "../../lib/site";

const details = {
  proofgym: {
    index: 0,
    problem: "Practicing formal logic means understanding why each step follows. A useful trainer needs to account for inference rules, references to earlier lines, and the scope of a proof.",
    decisions: ["Make individual proof steps the unit of interaction and feedback.", "Combine progressive exercises with custom practice.", "Support continued practice through completion tracking and achievements."],
    focus: "Rule validation, dependent state, proof scope, and useful feedback are the engineering problems at the heart of this project.",
    scope: "A personal project connecting mathematics, formal reasoning, and software. Explore the live application to try the proof trainer and STEM arena.",
  },
  kickboxwm: {
    index: 1,
    problem: "Combining working-memory tasks with movement requires coordinating independent streams, timing, cues, and session state in one interface.",
    decisions: ["Keep movement and visual memory tasks as independent streams.", "Make work/rest intervals and memory difficulty configurable.", "Use audio cues and bilingual announcements to support the training flow."],
    focus: "Session timing, configurable task streams, audio cues, and performance tracking make this an exploration of stateful interaction.",
    scope: "An experimental personal project. It explores cognitive and physical training interactions; it does not establish clinical or cognitive benefits.",
  },
  cognitrain: {
    index: 2,
    problem: "Bringing seven different cognitive games into one browser-based app, with short sessions and a shared way to track progress.",
    decisions: ["Make the current games available without signup.", "Use short sessions and adaptive challenges.", "Include progress tracking across the training experience."],
    focus: "Interactive game flows, challenge configuration, session feedback, and progress tracking.",
    scope: "Currently in progress. The public version includes Dual N-Back, memory sequences, and color-word challenges, with further development ongoing.",
  },
};
export function generateStaticParams() { return Object.keys(details).map(project => ({ project })); }
export async function generateMetadata({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  const detail = details[project as keyof typeof details];
  if (!detail) return { title: "Project not found", robots: { index: false, follow: false } };
  const item = projects[detail.index];
  const title = `${item.title} — ${item.subtitle}`;
  return {
    title, description: item.description,
    alternates: { canonical: `/${project}` },
    openGraph: { title, description: item.description, url: `/${project}`, images: [shareImage] },
    twitter: { card: "summary_large_image" as const, title, description: item.description, images: [shareImage] },
  };
}
export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  const detail = details[project as keyof typeof details];
  if (!detail) notFound();
  const item = projects[detail.index];
  return <main className="shell project-detail"><nav className="nav"><Link className="brand" href="/">EE<span>.</span></Link><Link className="text-link" href="/#work"><Arrow direction="left" /> All projects</Link><ThemeToggle /></nav><section className="section"><p className="kicker">PERSONAL PROJECT / {item.eyebrow}</p><h1>{item.title}</h1><p className="case-lede">{item.description}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="button primary" href={item.href} target="_blank" rel="noreferrer">Try the live application <Arrow /></a></section><ExplainThis topic={project as ExplanationTopic} /><section className="lab-grid"><article className="lab-panel"><p className="kicker">THE PROBLEM</p><h2>{item.subtitle}</h2><p>{detail.problem}</p></article><article className="lab-panel"><p className="kicker">DESIGN DECISIONS</p><h2>How the pieces fit.</h2><ul>{detail.decisions.map(decision => <li key={decision}>{decision}</li>)}</ul></article><article className="lab-panel"><p className="kicker">ENGINEERING FOCUS</p><p>{detail.focus}</p></article><article className="lab-panel"><p className="kicker">CONTEXT & SCOPE</p><p>{detail.scope}</p></article></section><footer className="section"><Link className="text-link" href="/#contact">Talk about a project <Arrow direction="right" /></Link></footer></main>;
}
