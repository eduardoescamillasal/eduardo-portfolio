import { projectSeo, projectStructuredData } from "../../lib/project-seo";
import { ProofDemo } from "../components/proof-demo";
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
    problem: "I built ProofGym as a place to practice independent reasoning in an age of instant answers. Explore a problem, examine its assumptions, and build an argument you understand one step at a time.",
    decisions: ["Parse formulas into a structured syntax tree before comparing them.", "Separate proof state and validation from the React interface with Zustand.", "Reuse the proof workspace for curated, generated, and custom exercises."],
    focus: "A TypeScript formula parser, rule-specific validation, nested subproof scope, and a procedural exercise generator sit behind the interactive workspace.",
    scope: "A browser-based personal project built with Next.js, React, TypeScript, Zustand, Tailwind CSS, and KaTeX. Progress is saved locally in the browser; accounts and cloud synchronization are not part of the inspected implementation.",
  },
  kickboxwm: {
    index: 1,
    problem: "I wanted a workout that challenged memory and deliberate action alongside physical effort. Could recalling an earlier movement cue while exercising make cognitive practice part of the workout itself?",
    decisions: ["Turn the hypothesis into a prototype that can be tried.", "Make cue timing, memory difficulty, and work/rest intervals configurable.", "Use movement cues to explore recalling an earlier instruction while receiving a new one."],
    focus: "Hear a new cue, hold it in memory, and execute the movement from N cues earlier. The prototype makes this idea tangible, with adjustable pacing and memory load to explore the balance between thinking and moving.",
    scope: "An exploratory prototype supported by a theoretical rationale. No controlled study or measured results for this combined protocol have been supplied; the app is a way to explore the idea, not evidence that it improves cognition.",
  },
  cognitrain: {
    index: 2,
    problem: "Bringing seven different cognitive games into one browser-based app, with short sessions and a shared way to track progress.",
    decisions: ["Make the current games available without signup.", "Use short sessions and adaptive challenges.", "Include progress tracking across the training experience."],
    focus: "Interactive game flows, challenge configuration, session feedback, and progress tracking.",
    scope: "Currently in progress. The public version includes Dual N-Back, memory sequences, and color-word challenges, with further development ongoing.",
  },
};
export const dynamicParams = false;

export function generateStaticParams() { return Object.keys(details).map(project => ({ project })); }
export async function generateMetadata({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  const detail = details[project as keyof typeof details];
  if (!detail) return { title: "Project not found", robots: { index: false, follow: false } };
  const item = projects[detail.index];
  const { title, description } = projectSeo[project as keyof typeof projectSeo];
  return {
    title, description,
    alternates: { canonical: `/${project}` },
    openGraph: { title, description, url: `/${project}`, images: [shareImage] },
    twitter: { card: "summary_large_image" as const, title, description, images: [shareImage] },
  };
}
export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  const detail = details[project as keyof typeof details];
  if (!detail) notFound();
  const item = projects[detail.index];
  return <main className="shell project-detail"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectStructuredData(project as keyof typeof projectSeo, item)).replace(/</g, "\\u003c") }} /><nav className="nav"><Link className="brand" href="/">EE<span>.</span></Link><Link className="text-link" href="/#work"><Arrow direction="left" /> All projects</Link><ThemeToggle /></nav><section className="section"><p className="kicker">PERSONAL PROJECT / {item.eyebrow}</p><h1>{item.title}</h1><p className="case-lede">{item.description}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="button primary" href={item.href} target="_blank" rel="noreferrer">Try the live application <Arrow /></a></section>{project === "proofgym" && <ProofDemo />}<ExplainThis topic={project as ExplanationTopic} /><section className="lab-grid"><article className="lab-panel"><p className="kicker">{project === "proofgym" || project === "kickboxwm" ? "WHY I BUILT IT" : "THE PROBLEM"}</p><h2>{item.subtitle}</h2><p>{detail.problem}</p></article><article className="lab-panel"><p className="kicker">DESIGN DECISIONS</p><h2>How the pieces fit.</h2><ul>{detail.decisions.map(decision => <li key={decision}>{decision}</li>)}</ul></article><article className="lab-panel"><p className="kicker">{project === "kickboxwm" ? "PROTOTYPE PURPOSE" : "ENGINEERING FOCUS"}</p><p>{detail.focus}</p></article><article className="lab-panel"><p className="kicker">CONTEXT & SCOPE</p><p>{detail.scope}</p></article></section>{project === "kickboxwm" && <section id="experiment" className="section"><p className="kicker">THE EXPERIMENT</p><h2>A question, a prototype, and a way to investigate.</h2><div className="lab-grid"><article className="lab-panel"><h3>The hypothesis</h3><p>My hypothesis is that physical effort and working-memory practice might reinforce each other when they happen together. The prototype lets me explore that possibility; establishing a benefit would require a separate study.</p></article><article className="lab-panel"><h3>The proposed task</h3><p>A spoken number maps to a movement. Instead of executing the newest cue, recall and perform the movement from N cues earlier while keeping track of the incoming sequence.</p></article><article className="lab-panel"><h3>What the prototype contributes</h3><p>A practical setting to explore cue pacing, memory load, and work/rest timing. The supporting document describes the rationale and proposed protocol; it does not report experimental results.</p></article><article className="lab-panel"><h3>What a test could examine</h3><p>A future comparison could separate combined, sequential, and single-task conditions, measuring task performance and adherence. Better performance on the practiced task would need to be distinguished from broader transfer.</p></article></div></section>}{project === "proofgym" && <section id="architecture" className="section"><p className="kicker">INSIDE THE IMPLEMENTATION</p><h2>From a formula to useful feedback.</h2><p className="case-lede">A typed logic engine supports the interface, while separate stores handle the current proof and saved progress.</p><div className="lab-grid"><article className="lab-panel"><h3>1. Parse the input</h3><p>Normalize typed symbols, tokenize the formula, and build a syntax tree with operator precedence. Structural comparison checks formulas beyond their raw text.</p></article><article className="lab-panel"><h3>2. Check the step</h3><p>Validate the chosen rule and cited formulas. Scope checks prevent a step from borrowing a line inside a subproof that has already closed.</p></article><article className="lab-panel"><h3>3. Update the workspace</h3><p>Zustand tracks proof lines, open assumptions, closed subproofs, hints, and undo. React presents the proof and validation feedback.</p></article><article className="lab-panel"><h3>4. Keep practice varied</h3><p>A backward-construction generator builds exercise candidates with difficulty tiers and hints. Browser-local progress tracks solved exercises, XP, medals, and streaks.</p></article></div><p className="fine-note">The STEM arena includes logic, mathematics, critical thinking, physics, biology, and chemistry. Logic puzzles can reuse the same proof workspace.</p></section>}<footer className="section"><Link className="text-link" href="/#contact">Talk about a project <Arrow direction="right" /></Link></footer></main>;
}
