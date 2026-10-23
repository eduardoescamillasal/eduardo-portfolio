export const explanations = {
  "portfolio": {
    "title": "Explore the code with AI",
    "summary": "Explore how this portfolio’s particle animation balances motion, accessibility, and rendering work. Read a real code excerpt, then ask about the implementation or its tradeoffs.",
    "questions": [
      "Explain this code simply.",
      "How does this animation limit rendering work?",
      "How does it respect reduced motion?",
      "What would you improve in this implementation?"
    ],
    "sources": [
      {
        "label": "See the animation",
        "href": "/#top"
      }
    ],
    "code": "function tick(now: number) {\n      frame = requestAnimationFrame(tick);\n      if (now - last < 1000 / 30) return;\n      // Bound elapsed time after returning to a background tab.\n      time.current += Math.min((now - (last || now)) / 1000, .06) * .14;\n      last = now;\n      draw();\n    }\n\n    function syncAnimation() {\n      cancelAnimationFrame(frame);\n      frame = 0;\n      if (visible && !document.hidden && !motion.matches && !paused) {\n        last = 0;\n        frame = requestAnimationFrame(tick);\n      } else draw();\n    }",
    "codeLabel": "Portfolio · app/components/particle-wave.tsx",
    "facts": "React canvas particle animation. tick caps drawing at 30 FPS and bounds elapsed time. syncAnimation stops the loop when offscreen, in a hidden tab, paused, or reduced motion is preferred. IntersectionObserver supplies visibility. The effect cleans up observers, listeners, and the frame request."
  },
  "proofgym": {
    "title": "Explore ProofGym with AI",
    "summary": "Ask how the proof trainer’s documented features fit together, what engineering challenges they create, or how you might extend them.",
    "questions": [
      "Explain how the proof trainer works.",
      "What makes proof scope and dependencies challenging?",
      "What are the tradeoffs of step-by-step validation?",
      "How could this project be extended?"
    ],
    "sources": [
      {
        "label": "Try ProofGym",
        "href": "https://proof-gym.vercel.app/"
      }
    ],
    "facts": "Fitch-style proof trainer with step-by-step validation, references to earlier lines and proof scope. Progressive exercises, custom practice, completion tracking and achievements. STEM arena spans mathematics, physics, chemistry and logic. Source code is not supplied for this project; explain documented behavior and label possible implementations as proposals."
  },
  "kickboxwm": {
    "title": "Explore KickboxWM with AI",
    "summary": "Explore the timing, independent task streams, and session interactions behind this experimental training app.",
    "questions": [
      "Explain how the training session works.",
      "What makes independent task streams challenging?",
      "How could session timing be designed?",
      "What are the tradeoffs of audio cues?"
    ],
    "sources": [
      {
        "label": "Try KickboxWM",
        "href": "https://kickboxer-pfc-optimizer.vercel.app/"
      }
    ],
    "facts": "Experimental memory tasks combined with movement and HIIT. Independent movement and visual memory streams, configurable work/rest intervals and difficulty, audio cues, bilingual announcements and performance tracking. No clinical benefits established. Source code is not supplied; proposed timing architectures must be clearly labeled suggestions."
  },
  "cognitrain": {
    "title": "Explore CogniTrain with AI",
    "summary": "Explore short game sessions, adaptive challenges, and progress tracking in a browser-based app currently in development.",
    "questions": [
      "Explain how the games fit together.",
      "What does adaptive difficulty mean here?",
      "How could shared progress tracking be designed?",
      "What would you consider when extending this app?"
    ],
    "sources": [
      {
        "label": "Try CogniTrain",
        "href": "https://cognitrainmx.vercel.app/"
      }
    ],
    "facts": "In progress: seven browser-based cognitive games with short sessions, adaptive challenges and progress tracking. Public version accessible without signup, including Dual N-Back, memory sequences and color-word challenges. No cognitive benefits established. Source code is not supplied; distinguish documented features from suggested implementation."
  }
} as const;

export type ExplanationTopic = keyof typeof explanations;
