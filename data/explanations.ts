export const explanations = {
  overview: {
    title: "Ask about my work",
    summary: "Explore Eduardo’s experience building web and mobile products, from interactive interfaces to the services behind them. Ask about a project, a technology, or how his experience relates to your team.",
    questions: ["What experience does Eduardo have with React?", "Explain this without technical jargon.", "Which projects should I look at first?"],
    sources: [{ label: "Selected projects", href: "/#work" }, { label: "Professional experience", href: "/#experience" }],
  },
  greenfield: {
    title: "Building from scratch",
    summary: "Greenfield development means starting a new product rather than modifying an existing one. It involves turning an idea or design into a working application: choosing an approach, building the interface and behavior, connecting services, and getting it online. ProofGym and KickboxWM are examples of Eduardo’s personal projects.",
    questions: ["What does greenfield mean?", "Show me a concrete project example.", "How does this relate to frontend work?"],
    sources: [{ label: "ProofGym", href: "/proofgym" }, { label: "KickboxWM", href: "/kickboxwm" }],
  },
  production: {
    title: "Software used in production",
    summary: "Production software is an application released for people to use. Eduardo’s professional experience includes React web applications, React Native mobile apps, dashboards, authentication, messaging, media uploads, and cloud services. This work connects what users see with the systems behind it.",
    questions: ["What has Eduardo shipped professionally?", "What is his React and React Native experience?", "What does backend mean here?"],
    sources: [{ label: "Professional experience", href: "/#experience" }],
  },
  quantitative: {
    title: "Mathematics applied to problems",
    summary: "A quantitative background means experience working with mathematical models, data, and structured reasoning. Eduardo’s background includes game theory research, risk modeling, and math competitions. That experience brings a foundation in structured reasoning to his software projects.",
    questions: ["How does mathematics relate to his software work?", "What research did Eduardo contribute to?", "What is his professional software experience?"],
    sources: [{ label: "Background, education & research", href: "/#background" }, { label: "Professional experience", href: "/#experience" }],
  },
  ai: {
    title: "AI integrations in practice",
    summary: "LLMs are AI models that work with language. Eduardo’s recent work includes workflow prototypes using Gemini, Claude, and n8n, connected to webhooks and databases. Structured outputs mean having a model return information in a predictable format that an application can use.",
    questions: ["What does structured output mean?", "What AI integrations has Eduardo worked on?", "How does AI connect to a web application?"],
    sources: [{ label: "Q Bridge AI experience", href: "/#experience" }],
  },
  proofgym: {
    title: "ProofGym, in plain language",
    summary: "ProofGym is an interactive practice app for logic and STEM problems. Its proof editor lets someone build an argument one step at a time and checks whether each step follows the rules. The software handles dependencies between steps, exercise progress, achievements, and custom practice.",
    questions: ["What does a proof trainer actually do?", "What makes the interface technically interesting?", "How is this relevant to frontend engineering?"],
    sources: [{ label: "ProofGym project", href: "/proofgym" }, { label: "Professional experience", href: "/#experience" }],
  },
  kickboxwm: {
    title: "KickboxWM, in plain language",
    summary: "KickboxWM combines memory tasks with movement and timed exercise sessions. The app coordinates independent streams of prompts, difficulty settings, audio cues, and work/rest intervals. It is an experimental software project exploring interaction and timing.",
    questions: ["What does N-back mean?", "What does the app coordinate during a session?", "What engineering work does this demonstrate?"],
    sources: [{ label: "KickboxWM project", href: "/kickboxwm" }],
  },
  cognitrain: {
    title: "CogniTrain, in plain language",
    summary: "CogniTrain is a project in progress with seven browser-based cognitive games. Examples include memory sequences, Dual N-Back, and color-word challenges. It brings together short sessions, adaptive challenges, and progress tracking; the current public version can be explored without signup.",
    questions: ["What can I try in the current version?", "What does adaptive difficulty mean?", "How is this different from KickboxWM?"],
    sources: [{ label: "CogniTrain project", href: "/cognitrain" }],
  },
} as const;

export type ExplanationTopic = keyof typeof explanations;

export const starterQuestions = [
  "What could Eduardo bring to my team?",
  "What has he built with React and React Native?",
  "Which project should I explore first, and why?",
  "Explain his work without technical jargon.",
] as const;
