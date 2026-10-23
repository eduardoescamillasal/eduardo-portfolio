import { ExplainPanel } from "./explain-panel";
import type { ExplanationTopic } from "../../data/explanations";

export function ExplainThis({ topic }: { topic: ExplanationTopic }) {
  return <ExplainPanel topic={topic} aiEnabled={Boolean(process.env.OPENAI_API_KEY)} />;
}
