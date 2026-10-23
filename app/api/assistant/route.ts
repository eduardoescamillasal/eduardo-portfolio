import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { parseQuestion, generateAnswer } from "../../../lib/assistant";
import { siteUrl } from "../../../lib/site";

export const runtime = "nodejs";
export const maxDuration = 30;
const windowMs = 10 * 60 * 1000;
// Best-effort per-instance abuse control, not a global billing limit.
const requests = new Map<string, { count: number; until: number }>();
const headers = { "Cache-Control": "no-store" };
const failure = (error: string, status: number) => NextResponse.json({ error }, { status, headers });

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin && origin !== siteUrl) return failure("Please ask from the portfolio website.", 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return failure("Please send a JSON question.", 415);
  if (Number(request.headers.get("content-length")) > 12000) return failure("Please keep your question shorter.", 413);
  let input: ReturnType<typeof parseQuestion>;
  try {
    const body = await request.text();
    if (Buffer.byteLength(body) > 12000) return failure("Please keep your question shorter.", 413);
    input = parseQuestion(JSON.parse(body));
  } catch { return failure("Please enter a valid question.", 400); }
  if (!input) return failure("Please enter a question of up to 1,500 characters.", 400);
  const key = process.env.OPENAI_API_KEY;
  if (!key) return failure("AI follow-up is not available yet. The quick explanation and project links are still available.", 503);
  const now = Date.now();
  for (const [id, record] of requests) if (record.until <= now) requests.delete(id);
  const identity = createHash("sha256").update(request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown").digest("hex");
  const record = requests.get(identity) ?? { count: 0, until: now + windowMs };
  if (record.count >= 10 || (!requests.has(identity) && requests.size >= 2000)) {
    return NextResponse.json({ error: "Too many questions. Please try again in a few minutes." }, { status: 429, headers: { ...headers, "Retry-After": String(Math.ceil((record.until - now) / 1000)) } });
  }
  record.count += 1;
  requests.set(identity, record);
  try { return NextResponse.json({ answer: await generateAnswer(input.topic, input.messages, key) }, { headers }); }
  catch (error) {
    console.error("[portfolio-assistant] Request failed", {
      kind: error instanceof Error && ["TimeoutError", "AbortError", "TypeError"].includes(error.name) ? error.name : "ProviderError",
    });
    return failure("The assistant couldn’t respond right now. Please try again, or use the explanation and links above.", 502);
  }
}
