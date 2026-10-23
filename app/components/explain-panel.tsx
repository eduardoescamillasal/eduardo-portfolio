"use client";

import { CodeExcerpt } from "./code-excerpt";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { explanations, type ExplanationTopic } from "../../data/explanations";

type Message = { role: "user" | "assistant"; content: string };

export function ExplainPanel({ topic, aiEnabled }: { topic: ExplanationTopic; aiEnabled: boolean }) {
  const section = explanations[topic];
  const code = "code" in section ? section.code : null;
  const id = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const conversation = useRef<HTMLDivElement>(null);
  const latestAnswer = useRef<HTMLDivElement>(null);
  const pending = useRef<AbortController | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => () => pending.current?.abort(), []);
  useEffect(() => {
    const container = conversation.current;
    if (!container) return;
    if (!busy && !error && latestAnswer.current) {
      const top = latestAnswer.current.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop - 16;
      container.scrollTo({ top });
    } else if (busy || error) {
      container.scrollTo({ top: container.scrollHeight });
    }
  }, [messages, busy, error]);

  async function ask(text: string) {
    const value = text.trim();
    if (!value || busy || !aiEnabled || pending.current) return;
    const controller = new AbortController();
    pending.current = controller;
    const history = [...messages, { role: "user" as const, content: value }].slice(-7);
    const timeout = setTimeout(() => controller.abort("timeout"), 25000);
    setBusy(true); setError(""); setShowSuggestions(false);
    try {
      const response = await fetch("/api/assistant", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, messages: history }), signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || typeof result.answer !== "string") throw new Error(result.error || "The assistant couldn’t respond. Please try again.");
      if (controller.signal.aborted) return;
      setMessages([...history, { role: "assistant", content: result.answer }]);
      setQuestion("");
    } catch (problem) {
      if (controller.signal.reason === "timeout") setError("The assistant took too long. Please try again.");
      else if (!controller.signal.aborted) setError(problem instanceof Error ? problem.message : "Something went wrong. Please try again.");
    } finally {
      clearTimeout(timeout);
      if (pending.current === controller) { pending.current = null; setBusy(false); }
    }
  }
  function submit(event: FormEvent) { event.preventDefault(); void ask(question); }
  function cancelPending() { pending.current?.abort(); pending.current = null; setBusy(false); }

  return <div className="assistant-widget" data-project={topic}>
    <button className="explain-trigger" type="button" aria-haspopup="dialog" aria-controls={id} aria-label={section.title}
      onClick={() => dialog.current?.showModal()}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-3 3V11.5A8.5 8.5 0 0 1 9.5 3h3a8.5 8.5 0 0 1 8.5 8.5Z" /></svg> Explore with AI</button>
    <dialog className="explain-dialog" ref={dialog} id={id} aria-labelledby={`${id}-title`}
      onClose={cancelPending} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <header className="explain-header">
        <div><p className="kicker">PROJECT EXPLORER</p><h2 id={`${id}-title`}>{section.title}</h2></div>
        <button className="explain-close" type="button" aria-label="Close assistant" onClick={() => dialog.current?.close()}>×</button>
      </header>
      <div className="explain-conversation" ref={conversation}>
        <div className="explain-summary"><p>{section.summary}</p></div>
        {code && <details className="explain-code"><summary>View code · {"codeLabel" in section ? section.codeLabel : "Selected excerpt"}</summary><CodeExcerpt code={code} /></details>}
        <nav className="explain-sources" aria-label="Supporting portfolio sections">
          {section.sources.map(source => <a href={source.href} key={source.href} onClick={() => dialog.current?.close()}>{source.label} ↗</a>)}
        </nav>
        {!aiEnabled && <p className="fine-note">The chat is not available yet. You can still explore the projects and experience linked above.</p>}
        <div role="log" aria-label="Conversation with the portfolio assistant" aria-live="polite" aria-busy={busy}>
          {messages.map((message, index) => <div className={`explain-message explain-message-${message.role}`} key={index} ref={message.role === "assistant" && index === messages.length - 1 ? latestAnswer : undefined}>
            <p className="explain-label">{message.role === "user" ? "You" : "AI assistant"}</p><p>{message.content}</p>
          </div>)}
        </div>
        {busy && <p role="status" className="fine-note">Exploring the project…</p>}
        {error && <p role="alert" className="explain-error">{error}</p>}
        {aiEnabled && <nav className="explain-guide" aria-label="Suggested questions">
          {messages.length > 0 && <button className="explain-explore" type="button" disabled={busy}
            aria-expanded={showSuggestions} aria-controls={`${id}-suggestions`}
            onClick={() => setShowSuggestions(value => !value)}>{showSuggestions ? "Hide suggestions −" : "Keep exploring +"}</button>}
          {messages.length === 0 && showSuggestions && <p className="explain-label">Start here</p>}
          <div id={`${id}-suggestions`} className="explain-suggestions" hidden={!showSuggestions}>
            {section.questions.map(text => <button key={text} type="button" disabled={busy} onClick={() => { setQuestion(text); void ask(text); }}>{text} <span aria-hidden="true">↗</span></button>)}
          </div>
        </nav>}
      </div>
      {aiEnabled && <form className="explain-form" onSubmit={submit}>
        <label htmlFor={`${id}-question`}>Or ask your own question</label>
        <textarea id={`${id}-question`} value={question} onChange={event => setQuestion(event.target.value)} required maxLength={1500} rows={2} placeholder="Ask about this project’s code or design…" disabled={busy} />
        <div><p className="fine-note">AI guide to this project. Questions are processed by OpenAI.</p>
          <button type="submit" disabled={busy || !question.trim()}>{busy ? "Thinking…" : "Ask ↗"}</button></div>
      </form>}
    </dialog>
  </div>;
}
