// Curated from the user-provided theoretical PDF and project clarification, reviewed 2026-10-23.
export const kickboxwmGuide = {
  "title": "Explore the KickboxWM experiment",
  "summary": "What if a workout challenged your memory as deliberately as your body? Explore the idea behind KickboxWM, the delayed-recall movement task, and what it would take to test the hypothesis.",
  "questions": [
    "Why combine kickboxing and memory practice?",
    "What do I do during a session?",
    "What is the hypothesis behind the experiment?",
    "How could we find out whether it works?"
  ],
  "sources": [
    {
      "label": "Try the prototype",
      "href": "https://kickboxer-pfc-optimizer.vercel.app/"
    },
    {
      "label": "Experiment rationale",
      "href": "/kickboxwm#experiment"
    }
  ],
  "facts": "Purpose: explore whether a workout can deliberately engage memory and controlled responding alongside physical effort, and whether concurrent physical and cognitive practice might reinforce each other. Explain the concrete task before describing theoretical mechanisms. Treat that reinforcement as the hypothesis, not a result. Do not lead general introductions with software architecture or a list of caveats. User describes this as a personal hypothesis-driven experiment with a straightforward implementation, rather than a showcase of unusual software complexity. The user supplied a 14-page generated theoretical document, Concurrent Cognitive–Motor Training: Neural Substrates, Mechanisms, and Expected Outcomes of Dual N-Back Training Combined with High-Intensity Kickboxing (2026), reviewed 2026-10-23. Treat this as project rationale, not a peer-reviewed study or verified scientific evidence. The central question is whether doing a working-memory task at the same time as kickboxing-style intervals might differ from doing either alone or sequentially. The document proposes exercise-related plasticity and cognitive–motor coupling as possible explanations; these are proposed mechanisms, not mechanisms measured by the app. In its described task, spoken number cues map to movements, and the participant executes the movement cued N steps earlier rather than the current cue. This is delayed-recall motor N-back, not necessarily the conventional N-back match-detection task; do not conflate them or assume standard N-back findings directly apply. The document proposes configurable N, cue intervals, work/rest rounds and subjective difficulty feedback. These are protocol descriptions, not source-verified implementation details. Existing portfolio describes independent movement and visual-memory streams, audio cues, bilingual announcements, timing and performance tracking; project source code has not been reviewed. Source code is not supplied; proposed timing architectures must be clearly labeled suggestions. The theoretical PDF does not establish that every proposed protocol feature is present in the app. Its limitations section explicitly states the combined protocol has not been tested in a controlled trial and optimal dose is unknown. No measured outcomes or participant results were supplied. Do not repeat numerical outcome predictions, BDNF changes, brain-region adaptations, IQ/attention/ADHD benefits, timelines or fitness targets as established facts or promises. Citations in the generated document have not been independently verified. Value demonstrated here: translating a personal question into a configurable interactive prototype and articulating how to investigate it. When asked how to test it, offer a clearly labeled conceptual proposal: compare combined, sequential and single-task conditions; use baseline and follow-up measures, account for task practice, physical effort and adherence, and distinguish improved performance on this task from transfer to other tasks. No study is claimed to have been run. Stay with project rationale, app behavior and research-design concepts, rather than individual exercise or medical advice."
} as const;
