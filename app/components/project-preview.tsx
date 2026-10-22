"use client";

import { useEffect, useRef, useState } from "react";

type PreviewProps = { project?: "cognitrain" | "proofgym" };

export function ProjectPreview({ project = "cognitrain" }: PreviewProps) {
  const title = project === "proofgym" ? "ProofGym" : "CogniTrain";
  const caption = project === "proofgym" ? "App walkthrough · 3× speed" : "Gameplay preview";
  const container = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const preference = () => setAllowed(!media.matches);
    preference();
    media.addEventListener("change", preference);
    const preload = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setNear(true); preload.disconnect(); }
    }, { rootMargin: "200px" });
    const playback = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    if (container.current) { preload.observe(container.current); playback.observe(container.current); }
    return () => { preload.disconnect(); playback.disconnect(); media.removeEventListener("change", preference); };
  }, []);

  useEffect(() => {
    const sync = () => {
      const element = video.current;
      if (!element) return;
      if (near && visible && allowed && !failed && !document.hidden) {
        void element.play().catch(() => setPlaying(false));
      } else { element.pause(); }
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, [near, visible, allowed, failed]);

  return <figure className="project-preview" ref={container}>
    <div className="preview-media">
      <div className="preview-fallback" hidden={ready && !failed}>
        {project === "proofgym" ? <div className="case-proof"><div className="proof-window">
          <span>1&nbsp;&nbsp; P → Q</span><span>2&nbsp;&nbsp; P</span>
          <span className="valid">3&nbsp;&nbsp; Q &nbsp;&nbsp; →E 1,2 &nbsp; ✓</span><b>⊢</b>
        </div></div> : <div className="stream-diagram">
          <div><b>memory</b><span>Dual N-Back · memory sequences</span></div>
          <div><b>attention</b><span>color-word challenges</span></div>
          <strong>7 GAMES</strong><small>short sessions · adaptive challenges · progress tracking</small>
        </div>}
      </div>
    <video className={ready && !failed ? "preview-ready" : ""} ref={video} src={near ? `/previews/${project}.mp4` : undefined}
      poster={`/previews/${project}.jpg`} width={project === "proofgym" ? 960 : 720} height={project === "proofgym" ? 674 : 1016}
      muted loop playsInline preload="none" aria-label={`${title} ${caption}`}
      onLoadedData={() => setReady(true)} onError={() => { setFailed(true); setPlaying(false); }}
      onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
    </div>
    <figcaption>
      <span>{title} · {failed ? "Project preview" : caption}</span>
      {!failed && <button type="button" onClick={() => {
        setNear(true);
        setAllowed(!playing);
        if (playing) video.current?.pause();
        else if (video.current?.getAttribute("src")) void video.current.play().catch(() => setPlaying(false));
      }}
        aria-label={`${playing ? "Pause" : "Play"} ${title} preview`}>
        {playing ? "Pause ⏸" : "Play ▶"}
      </button>}
    </figcaption>
  </figure>;
}
