"use client";

import { useState } from "react";

const steps = [
  { formula: "P → Q", rule: "Premise", english: "If I practice, I improve.", explanation: "Start with a premise: something we accept for this argument. P means ‘I practice’; Q means ‘I improve’. The arrow means ‘if … then …’." },
  { formula: "Q → R", rule: "Premise", english: "If I improve, I can tackle harder problems.", explanation: "Our second premise connects improving (Q) with tackling harder problems (R). We want to show that P implies R, using these two premises." },
  { formula: "P", rule: "Assumption", english: "Suppose I practice.", explanation: "Open a temporary assumption: suppose P is true. The indented box marks a subproof. We are exploring what follows from this assumption, rather than claiming P is already established." },
  { formula: "Q", rule: "→ elimination · 1, 3", english: "Then I improve.", explanation: "Line 1 says P implies Q. Inside our assumption, line 3 gives us P. So Q follows. This rule is called implication elimination, or modus ponens." },
  { formula: "R", rule: "→ elimination · 2, 4", english: "Then I can tackle harder problems.", explanation: "Use the same rule again: line 2 says Q implies R, and line 4 gives us Q. Therefore R follows, still within the temporary assumption." },
  { formula: "P → R", rule: "→ introduction · 3–5", english: "If I practice, I can tackle harder problems.", explanation: "Close the subproof. Assuming P led to R, so we can conclude P implies R. This is implication introduction: the assumption is discharged. The conclusion depends on our two original premises; it is not an empirical claim about practice." },
];

function Formula({ value }: { value: string }) {
  return <>{value.split(/([PQR]|→)/).map((token, index) => <span key={index} className={token === "→" ? "proof-operator" : /^[PQR]$/.test(token) ? `proof-atom proof-atom-${token.toLowerCase()}` : undefined}>{token}</span>)}</>;
}

export function ProofDemo() {
  const [revealed, setRevealed] = useState(2);
  const [selected, setSelected] = useState(1);
  const [plain, setPlain] = useState(false);
  function next() { setSelected(revealed); setRevealed(value => Math.min(6, value + 1)); }
  return <section className="proof-demo" aria-label="Interactive Fitch proof demonstration">
    <div className="proof-demo-intro"><p className="kicker">TRY A SMALL ARGUMENT</p><h2>Don’t just accept the conclusion.<br />Follow the reasoning.</h2><p>A Fitch proof is an argument written one justified line at a time. Indentation marks a temporary assumption; rule names and line numbers show exactly why each new statement follows.</p></div>
    <div className="proof-demo-body">
      <div className="proof-board">
        <div className="proof-board-heading"><span>PROVE <b><Formula value="P → R" /></b></span><button type="button" aria-pressed={plain} onClick={() => setPlain(value => !value)}>{plain ? "Show symbols" : "Read in English"}</button></div>
        <p className="proof-key"><span className="proof-atom-p">P · practice</span><span className="proof-atom-q">Q · improve</span><span className="proof-atom-r">R · harder problems</span></p>
        <ol className="proof-lines">
          {steps.slice(0, revealed).map((step, index) => <li key={index} className={`${index >= 2 && index <= 4 ? "proof-nested" : ""} ${index === 2 ? "proof-assumption" : ""} ${index === 5 ? "proof-conclusion" : ""}`}>
            <button type="button" className={`proof-line ${selected === index ? "proof-line-selected" : ""}`} aria-pressed={selected === index} onClick={() => setSelected(index)}>
              <span className="proof-number">{index + 1}</span><span className={`proof-expression ${plain ? "proof-english" : ""}`}>{plain ? step.english : <Formula value={step.formula} />}</span><span className={`proof-rule ${index === 2 ? "proof-rule-assumption" : ""}`}>{step.rule}</span>
            </button>
          </li>)}
        </ol>
        <div className="proof-demo-actions">{revealed < 6 ? <button type="button" className="button primary" onClick={next}>{revealed === 2 ? "Start with an assumption" : revealed === 5 ? "Close the subproof" : "Derive the next line"} <span aria-hidden="true">→</span></button> : <button type="button" className="button" onClick={() => { setRevealed(2); setSelected(1); }}>Replay the proof ↺</button>}<span>{revealed}/6 lines</span></div>
      </div>
      <aside className="proof-explanation" aria-live="polite" aria-atomic="true"><p className="kicker">{selected === 5 ? "ASSUMPTION DISCHARGED" : `LOOK AT LINE ${selected + 1}`}</p><div className="proof-explanation-formula"><Formula value={steps[selected].formula} /></div><h3>{steps[selected].english}</h3><p>{steps[selected].explanation}</p><span className="proof-demo-hint">Select any revealed line to revisit its reasoning.</span></aside>
    </div>
    <p className="proof-demo-caption">A small propositional-logic example, created for this portfolio. ProofGym lets you construct your own proofs and practice with logic, STEM, and critical-thinking challenges.</p>
  </section>;
}
