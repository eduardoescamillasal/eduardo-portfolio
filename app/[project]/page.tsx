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
    decisions: ["Parse formulas into a structured syntax tree before comparing them.", "Separate proof state and validation from the React interface with Zustand.", "Reuse the proof workspace for curated, generated, and custom exercises."],
    focus: "A TypeScript formula parser, rule-specific validation, nested subproof scope, and a procedural exercise generator sit behind the interactive workspace.",
    scope: "A browser-based personal project built with Next.js, React, TypeScript, Zustand, Tailwind CSS, and KaTeX. Progress is saved locally in the browser; accounts and cloud synchronization are not part of the inspected implementation.",
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
  return <main className="shell project-detail"><nav className="nav"><Link className="brand" href="/">EE<span>.</span></Link><Link className="text-link" href="/#work"><Arrow direction="left" /> All projects</Link><ThemeToggle /></nav><section className="section"><p className="kicker">PERSONAL PROJECT / {item.eyebrow}</p><h1>{item.title}</h1><p className="case-lede">{item.description}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="button primary" href={item.href} target="_blank" rel="noreferrer">Try the live application <Arrow /></a></section><ExplainThis topic={project as ExplanationTopic} /><section className="lab-grid"><article className="lab-panel"><p className="kicker">THE PROBLEM</p><h2>{item.subtitle}</h2><p>{detail.problem}</p></article><article className="lab-panel"><p className="kicker">DESIGN DECISIONS</p><h2>How the pieces fit.</h2><ul>{detail.decisions.map(decision => <li key={decision}>{decision}</li>)}</ul></article><article className="lab-panel"><p className="kicker">ENGINEERING FOCUS</p><p>{detail.focus}</p></article><article className="lab-panel"><p className="kicker">CONTEXT & SCOPE</p><p>{detail.scope}</p></article></section>{project === "proofgym" && <section id="architecture" className="section"><p className="kicker">INSIDE THE IMPLEMENTATION</p><h2>From a formula to useful feedback.</h2><p className="case-lede">A typed logic engine supports the interface, while separate stores handle the current proof and saved progress.</p><div className="lab-grid"><article className="lab-panel"><h3>1. Parse the input</h3><p>Normalize typed symbols, tokenize the formula, and build a syntax tree with operator precedence. Structural comparison checks formulas beyond their raw text.</p></article><article className="lab-panel"><h3>2. Check the step</h3><p>Validate the chosen rule and cited formulas. Scope checks prevent a step from borrowing a line inside a subproof that has already closed.</p></article><article className="lab-panel"><h3>3. Update the workspace</h3><p>Zustand tracks proof lines, open assumptions, closed subproofs, hints, and undo. React presents the proof and validation feedback.</p></article><article className="lab-panel"><h3>4. Keep practice varied</h3><p>A backward-construction generator builds exercise candidates with difficulty tiers and hints. Browser-local progress tracks solved exercises, XP, medals, and streaks.</p></article></div><p className="fine-note">The STEM arena includes logic, mathematics, critical thinking, physics, biology, and chemistry. Logic puzzles can reuse the same proof workspace.</p></section>}<footer className="section"><Link className="text-link" href="/#contact">Talk about a project <Arrow direction="right" /></Link></footer></main>;
}
