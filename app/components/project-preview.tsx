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
      if (near && visible && allowed && !document.hidden) {
        void element.play().catch(() => setPlaying(false));
      } else { element.pause(); }
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, [near, visible, allowed]);

  return <figure className="project-preview" ref={container}>
    <video ref={video} src={near ? `/previews/${project}.mp4` : undefined}
      poster={`/previews/${project}.jpg`} width={project === "proofgym" ? 960 : 720} height={project === "proofgym" ? 674 : 1016}
      muted loop playsInline preload="none" aria-label={`${title} ${caption}`}
      onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
    <figcaption>
      <span>{title} · {caption}</span>
      <button type="button" onClick={() => {
        setNear(true);
        setAllowed(!playing);
        if (playing) video.current?.pause();
        else if (video.current?.getAttribute("src")) void video.current.play().catch(() => setPlaying(false));
      }}
        aria-label={`${playing ? "Pause" : "Play"} ${title} preview`}>
        {playing ? "Pause ⏸" : "Play ▶"}
      </button>
    </figcaption>
  </figure>;
}
