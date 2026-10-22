"use client";

import { Arrow } from "./arrow";

import { useRef, useState } from "react";
import { certificates, type Certificate } from "../../data/certificates";

export function Certificates() {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const [platform, setPlatform] = useState("All");
  const [kind, setKind] = useState("All");
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState<Certificate | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const platforms = [...new Set(certificates.map(c => c.platform))];
  const filtered = certificates.filter(c => (platform === "All" || c.platform === platform) && (kind === "All" || c.kind === kind) && [c.title, c.issuer, c.platform, ...(c.courses || [])].join(" ").toLowerCase().includes(query.trim().toLowerCase()));
  const pageSize = 6;
  const visible = expanded ? filtered.slice(page * pageSize, (page + 1) * pageSize) : certificates.filter(c => c.featured);
  const pages = Math.ceil(filtered.length / pageSize);
  function openCertificate(c: Certificate) { setSelected(c); dialog.current?.showModal(); }
  if (!certificates.length) return null;
  return <section id="certificates" className="certificate-section shell">
    <div className="certificate-heading"><h2>Professional Development</h2><span className="fine-note">Completed tracks, specializations & selected courses</span></div>
    <p className="credential-intro">Structured learning in software, data engineering, and machine learning, supported by completed projects and coursework.</p>
    <p className="credential-summary">4 completed DataCamp tracks · Coursera specializations & courses</p>
    {expanded && <div className="credential-controls">
      <label>Search courses or institutions<input type="search" value={query} onChange={e => { setQuery(e.target.value); setPage(0); }} placeholder="Algorithms, mathematics, Python…" /></label>
      {platforms.length > 1 && <label>Platform<select value={platform} onChange={e => { setPlatform(e.target.value); setPage(0); }}><option>All</option>{platforms.map(p => <option key={p}>{p}</option>)}</select></label>}
      <label>Credential type<select value={kind} onChange={e => { setKind(e.target.value); setPage(0); }}><option value="All">All types</option><option value="Course">Courses</option><option value="Specialization">Specializations</option><option value="Track">Completed tracks</option><option value="Guided project">Guided projects</option></select></label>
    </div>}
    <div className="certificate-banners">{visible.map(c => <button type="button" className="certificate-banner" key={c.title} onClick={() => openCertificate(c)} aria-haspopup="dialog">
      <span className="certificate-mark" aria-hidden="true">✧</span>
      <span className="certificate-info"><span className="certificate-meta">{c.issuer} · {c.platform}</span><strong>{c.title}</strong><span className="certificate-meta">{c.kind === "Track" ? "Completed track" : c.kind}{c.hours ? ` · ${c.hours} hours` : ""}{c.honors ? " · With honors" : ""}{c.courses ? ` · ${c.courses.length} courses` : ""}</span></span>
      <span className="certificate-arrow" aria-hidden="true">＋</span>
    </button>)}</div>
    {expanded && <p className="fine-note" role="status">{filtered.length ? `${page * pageSize + 1}–${Math.min((page + 1) * pageSize, filtered.length)} of ${filtered.length} learning records` : "No matching credentials. Try another search or filter."}</p>}
    <div className="credential-footer">
      <button className="text-link certificate-toggle" onClick={() => { setExpanded(!expanded); setPage(0); }} aria-expanded={expanded}>{expanded ? "Show selected only" : `Browse all ${certificates.length} learning records`} <Arrow direction={expanded ? "up" : "down"} /></button>
      {expanded && pages > 1 && <div className="credential-pagination"><button onClick={() => setPage(page - 1)} disabled={page === 0} aria-label="Previous certificates"><Arrow direction="left" /></button><span className="fine-note">{page + 1} / {pages}</span><button onClick={() => setPage(page + 1)} disabled={page + 1 >= pages} aria-label="Next certificates"><Arrow direction="right" /></button></div>}
    </div>
    <dialog ref={dialog} className="credential-dialog" aria-labelledby="credential-title" onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }}>
      {selected && <><header><div><p className="kicker">{selected.platform} · {selected.kind}</p><h3 id="credential-title">{selected.title}</h3><p className="fine-note">{selected.issuer}</p></div><button className="credential-close" aria-label="Close certificate" onClick={() => dialog.current?.close()}>×</button></header>
      {selected.preview ? <object className="credential-document" data={selected.preview} aria-label={`${selected.title} certificate preview`}><a href={selected.preview} target="_blank" rel="noreferrer">Open certificate preview <Arrow /></a></object> : <p className="fine-note">Completed coursework. Certificate preview will be added here.</p>}
      {selected.completedOn && <p className="fine-note">Completed {selected.completedOn}{selected.hours ? ` · ${selected.hours} hours` : ""}{selected.honors ? " · With honors" : ""}</p>}
      {selected.courses && <div><h4>Included courses</h4><ul>{selected.courses.map(course => <li key={course}>{course}</li>)}</ul></div>}
      {selected.preview && <p><a className="text-link" href={selected.preview} target="_blank" rel="noreferrer">Open certificate document <Arrow /></a></p>}
      {selected.url && <a className="text-link" href={selected.url} target="_blank" rel="noreferrer">Verify credential <Arrow /></a>}</>}
    </dialog>
  </section>;
}

export function ContactForm() {
  const [sending, setSending] = useState(false);
  return <form
    className="contact-form"
    action="https://formsubmit.co/267fce375e4c1569e82cabdd1873d342"
    method="POST"
    onSubmit={() => setSending(true)}
  >
    <input type="hidden" name="_subject" value="New portfolio contact message" />
    <input type="hidden" name="_template" value="table" />
    <div className="contact-trap" aria-hidden="true">
      <label htmlFor="contact-website">Leave this field empty</label>
      <input id="contact-website" name="_honey" type="text" tabIndex={-1} autoComplete="off" />
    </div>
    <div><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" required maxLength={120} /></div>
    <div><label htmlFor="contact-email">Your email</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} /></div>
    <div className="message-field"><label htmlFor="contact-message">What are you building?</label><textarea id="contact-message" name="message" rows={5} required maxLength={5000} /></div>
    <p className="fine-note">Send me a message here. You may be asked to complete a quick spam check before confirmation.</p>
    <button className="button primary" type="submit" disabled={sending}>{sending ? "Sending…" : <>Send message <Arrow direction="right" /></>}</button>
    {sending && <p role="status">Opening secure submission. Complete any spam check to finish sending.</p>}
  </form>;
}
