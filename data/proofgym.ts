// Curated from the supplied ProofGym source snapshot, reviewed 2026-10-23.
export const proofgymGuide = {
  "title": "Explore ProofGym with AI",
  "summary": "Explore the parser, proof-scope checks, state management, and exercise generator behind this interactive logic trainer. Start with a real excerpt from its validation engine.",
  "questions": [
    "Explain this proof-scope check simply.",
    "How do the parser, validator, and React interface work together?",
    "How does the exercise generator build new problems?",
    "What are the tradeoffs of browser-local progress?"
  ],
  "sources": [
    {
      "label": "Try ProofGym",
      "href": "https://proof-gym.vercel.app/"
    },
    {
      "label": "Project architecture",
      "href": "/proofgym#architecture"
    }
  ],
  "code": "export function isAccessible(\n  targetId: number,\n  fromId: number,\n  allLines: ProofLine[],\n  closedSubproofs: ClosedSubproof[],\n): boolean {\n  if (targetId >= fromId) return false\n\n  const targetLine = allLines.find(l => l.id === targetId)\n  if (!targetLine) return false\n\n  // A closed subproof's interior is inaccessible to lines OUTSIDE it.\n  // Lines inside the same subproof can still reference each other freely.\n  for (const sp of closedSubproofs) {\n    if (targetId >= sp.startId && targetId <= sp.endId) {\n      // Target is inside this closed subproof.\n      // Only inaccessible if fromId is OUTSIDE the same subproof.\n      const fromIsInside = fromId >= sp.startId && fromId <= sp.endId\n      if (!fromIsInside) return false\n    }\n  }\n  return true\n}",
  "codeLabel": "ProofGym · lib/validator.ts · isAccessible",
  "facts": "Source reviewed locally on 2026-10-23; these facts describe the supplied snapshot, not an independently verified live deployment. Stack: Next.js 14 App Router, React 18, TypeScript, Zustand, Tailwind CSS, KaTeX. Browser-side proof trainer and STEM arena, without a backend or account integration in the inspected code. lib/formula.ts normalizes ASCII and Unicode operators, tokenizes them, uses recursive descent with operator precedence and right-associative implication, builds a discriminated-union Formula AST, prints formulas and compares structure with formulaEq. lib/validator.ts validates rule-specific steps and cited formulas; isAccessible rejects forward references, missing lines, and references from outside a closed subproof to its interior. Dedicated closing rules use subproof ranges. store/useProofStore.ts separates proof state from UI with exercise loading, parsed lines, assumptions, a stack of open subproofs, closed ranges, hints, reset and undo-last-line. Adding and closing steps revalidates lines and updates feedback. The current checkProofComplete only compares the last top-level parsed formula with the goal; it does not itself inspect every line validation, so do not claim formally certified correctness or that completion guarantees an entirely valid proof. lib/generator.ts implements backward construction, context expansion under conjunction elimination, double-negation elimination and modus ponens; supports seeds, tiers and depth limits; filters trivial candidates, attempts at most 80 candidates and returns null on failure. components/ExerciseSelector.tsx calls generateExercise, displays loading and handles failure. Progress and arena state use separate Zustand stores and localStorage keys proofgym_progress and proofgym_arena. Proof progress includes XP, hint penalties, medals and date-based streaks. Browser-local persistence does not imply cross-device sync or accounts. lib/puzzles/index.ts combines logic, math, critical thinking, physics, biology and chemistry content; deriveExercise adapts logic puzzles to the same proof workspace. components/TeX.tsx renders math using KaTeX. Custom proofs and generated exercises are implemented. README is stale about memory-only progress and the generator being a stub. Supabase, accounts, predicate logic, modal logic and proof-repair mode must not be claimed as implemented. No AI runtime integration was found in this ProofGym snapshot; the portfolio AI guide is separate. No claims of measured learning benefits, production scale, test coverage or sole authorship are established by reading this snapshot."
} as const;
