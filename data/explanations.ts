import { kickboxwmGuide } from "./kickboxwm";
import { proofgymGuide } from "./proofgym";

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
  proofgym: proofgymGuide,
  kickboxwm: kickboxwmGuide,
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
