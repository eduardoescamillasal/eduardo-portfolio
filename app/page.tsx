import { ExplainThis } from "./components/explain-this";
import Link from "next/link";
import { Arrow } from "./components/arrow";
import type { Metadata } from "next";
import { siteUrl, siteDescription, shareImage } from "../lib/site";
import { ParticleWave } from "./components/particle-wave";
import { ProjectPreview } from "./components/project-preview";
import { CodewarsProfile } from "./components/codewars-profile";
import { ThemeToggle } from "./components/theme-toggle";
import { ContactForm, Certificates } from "./components/interactive";
import { experience } from "../data/portfolio";



export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", url: "/", locale: "en_US", siteName: "Eduardo Escamilla",
    title: "Eduardo Escamilla | Software Engineer", description: siteDescription,
    images: [shareImage],
  },
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "ProfilePage", url: siteUrl,
        mainEntity: { "@type": "Person", name: "Eduardo Escamilla", url: siteUrl,
          image: `${siteUrl}/portrait.jpg`, jobTitle: "Software Engineer",
          sameAs: ["https://github.com/eduardoescamillasal"],
          homeLocation: { "@type": "Place", name: "Monterrey, Mexico" },
          knowsAbout: ["Software Engineering", "Web Development", "Mobile Development", "React", "Next.js", "React Native", "Cloud Computing"] },
      }).replace(/</g, "\\u003c") }} />
      <nav className="nav shell">
        <a className="brand" href="#top">
          EE<span>.</span>
        </a>
        <div className="navlinks">
          <ThemeToggle />
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#certificates">Learning</a>
          <a href="#contact">Contact</a>
          <a
            href="https://github.com/eduardoescamillasal"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Arrow />
          </a>
          <a className="nav-cv" href="/Eduardo_Escamilla_CV.pdf" download>
            Download CV
          </a>
        </div>
      </nav>

      <div className="hero-stage">
      <ParticleWave />
      <section id="top" className="hero evidence-hero shell">
        <div className="hero-copy">
          <p className="kicker">FULL STACK SOFTWARE ENGINEER</p>

          <h1>
            From zero to
            <br />
            <em>working software.</em>
          </h1>

          <p className="lede">
            I’m Eduardo Escamilla, a software engineer based in Monterrey. I build web and mobile products with React,
            Next.js, React Native, Node.js and Python, and I’m particularly
            comfortable with greenfield development. My background also includes
            mathematics, quantitative modeling and machine learning.
          </p>

          <div className="actions">
            <a className="button primary" href="#work">
              View selected work <Arrow direction="down" />
            </a>

            <a className="button" href="/Eduardo_Escamilla_CV.pdf" download>
              Download CV (PDF) <Arrow direction="down" />
            </a>

            <a
              className="button"
              href="https://github.com/eduardoescamillasal"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Arrow />
            </a>
          </div>
        </div>

        <div className="portrait-card">
          <div className="portrait-visual">
            <img
              src="/portrait.jpg"
              alt="Eduardo Escamilla"
              className="portrait-image"
            />
            <div className="portrait-overlay" />
            <div className="portrait-info">
              <b>Eduardo Escamilla</b>
              <span>Monterrey, Mexico</span>
            </div>
          </div>
        </div>
      </section>

      </div>

      <section className="signal-strip" aria-labelledby="overview-heading">
        <div className="shell signal-heading">
          <div><h2 id="overview-heading">Experience at a glance</h2><p>Explore the projects and professional experience behind each area.</p></div>
        </div>
        <div className="shell signal-grid">
          <div>
            <span>01</span>
            <b><a href="#work">Greenfield development ↗</a></b>
            <small>Idea or design → production</small>
          </div>
          <div>
            <span>02</span>
            <b><a href="#experience">Production engineering ↗</a></b>
            <small>Web · mobile · backend · cloud</small>
          </div>
          <div>
            <span>03</span>
            <b><a href="#background">Quantitative background ↗</a></b>
            <small>Mathematics · modeling · ML</small>
          </div>
          <div>
            <span>04</span>
            <b><a href="#experience">Recent AI work ↗</a></b>
            <small>LLMs · automation · structured outputs</small>
          </div>
        </div>
      </section>

      <section id="work" className="section shell work-v2">
        <ExplainThis topic="portfolio" />
        <div className="section-head">
          <p className="kicker">SELECTED WORK</p>
          <h2>Work that shows how I approach problems.</h2>
        </div>

        <article className="case-study flagship">
          <div className="case-index">01 / FLAGSHIP</div>
          <div className="case-main">
            <p className="kicker">FORMAL LOGIC · STEM</p>
            <h3>ProofGym</h3>
            <p className="case-lede">
              AI can give you an answer in seconds. ProofGym gives you a reason
              to work through one yourself. Practice building arguments and
              tackling STEM problems where the reasoning matters.
            </p>
            <div className="case-links">
              <Link href="/proofgym">Explore the project <Arrow direction="right" /></Link>
              <a
                href="https://proof-gym.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live application <Arrow />
              </a>
              <a
                href="https://github.com/eduardoescamillasal"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
            </div>
          </div>
          <ProjectPreview project="proofgym" />
          <div className="case-notes">
            <div>
              <p className="kicker">THE PROBLEM</p>
              <p>
                I wanted a place to practice independent reasoning in an age of
                instant answers: question assumptions, follow an argument,
                and understand why a conclusion holds.
              </p>
            </div>
            <div>
              <p className="kicker">WHAT I BUILT</p>
              <p>
                A formal-logic workspace for building proofs one step at a time,
                alongside STEM and critical-thinking challenges. Choose an
                exercise, construct your reasoning, and use feedback to
                reconsider a step when it does not follow.
              </p>
            </div>
            <div>
              <p className="kicker">WHY IT MATTERS</p>
              <p>
                AI opens up new ways to learn. ProofGym complements those tools
                with hands-on reasoning practice: time to explore an idea,
                test an argument, and reach your own conclusion.
              </p>
            </div>
          </div>
          <div className="flow">
            <span>expression</span>
            <i>→</i>
            <span>rule</span>
            <i>→</i>
            <span>references</span>
            <i>→</i>
            <span>validation</span>
            <i>→</i>
            <span>feedback</span>
          </div>
        </article>

        <article className="case-study professional-case">
          <div className="case-index">02 / PRODUCTION</div>
          <div className="case-main">
            <p className="kicker">REACT NATIVE · GEOLOCATION · AWS</p>
            <h3>GPS → geographic region</h3>
            <p className="case-lede">
              A production mobile feature that classified a user’s GPS position
              into configured geographic zones represented by KML polygons.
            </p>
          </div>
          <div className="geo-diagram">
            <div>
              GPS
              <br />
              <small>lat / lon</small>
            </div>
            <b>→</b>
            <div>
              KML
              <br />
              <small>polygons</small>
            </div>
            <b>→</b>
            <div>
              point in
              <br />
              polygon
            </div>
            <b>→</b>
            <div className="geo-hit">
              matched
              <br />
              zone
            </div>
          </div>
          <div className="case-notes two">
            <div>
              <p className="kicker">CONTEXT</p>
              <p>
                Part of my work on a production React Native application, React
                administrative system and AWS-backed services.
              </p>
            </div>
            <div>
              <p className="kicker">ENGINEERING</p>
              <p>
                The feature connected device geolocation with KML polygon data
                so the application could determine which configured zone
                contained a coordinate.
              </p>
            </div>
          </div>
        </article>

        <article className="case-study compact-case">
          <div className="case-index">03 / EXPERIMENT</div>
          <div className="case-main">
            <p className="kicker">HYPOTHESIS · PROTOTYPE · EXPERIMENT</p>
            <h3>KickboxWM</h3>
            <p className="case-lede">
              What if a workout challenged your memory as deliberately as your
              body? Recall an earlier movement cue, resist reacting to the
              newest one, and keep moving. An experiment in combining
              physical effort with cognitive practice.
            </p>
            <div className="case-links">
              <Link href="/kickboxwm">Explore the project <Arrow direction="right" /></Link>
              <a
                href="https://kickboxer-pfc-optimizer.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live application <Arrow />
              </a>
              <a
                href="https://github.com/eduardoescamillasal"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
            </div>
          </div>
          <div className="stream-diagram">
            <div>
              <b>movement</b>
              <span>← independent stream →</span>
            </div>
            <div>
              <b>visual memory</b>
              <span>← independent stream →</span>
            </div>
            <strong>N−BACK</strong>
            <small>timing · audio cues · work/rest · session state</small>
          </div>
        </article>

        <article className="case-study compact-case">
          <div className="case-index">04 / IN PROGRESS</div>
          <div className="case-main">
            <p className="kicker">INTERACTIVE GAMES · MEMORY · ATTENTION</p>
            <h3>CogniTrain</h3>
            <p className="case-lede">
              Seven browser-based cognitive games covering memory, attention,
              processing speed, mental arithmetic, and emotion recognition.
              Short sessions combine adaptive challenges and progress tracking.
            </p>
            <div className="case-links">
              <Link href="/cognitrain">Explore the project <Arrow direction="right" /></Link>
              <a href="https://cognitrainmx.vercel.app/" target="_blank" rel="noreferrer">Try the current version <Arrow /></a>
            </div>
          </div>
          <ProjectPreview />
        </article>
      </section>

      <section className="other-work">
        <div className="shell">
          <p className="kicker light">ENGINEERING RANGE</p>
          <div className="other-grid">
            <div>
              <b>React ecosystem</b>
              <span>
                React · Next.js · React Native · responsive interfaces
              </span>
            </div>
            <div>
              <b>Backend & data</b>
              <span>Node.js · Express · Python · SQL · Supabase</span>
            </div>
            <div>
              <b>Cloud & deployment</b>
              <span>AWS · GCP · Azure · Vercel · Docker · Linux</span>
            </div>
            <div>
              <b>ML & LLM work</b>
              <span>Python · machine learning · Gemini · Claude · n8n</span>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section shell split">
        <div className="section-head sticky">
          <p className="kicker">EXPERIENCE</p>
          <h2>Software shipped in professional environments.</h2>
          <p className="muted">
            A condensed history. Download the CV for the full version.
          </p>
          <a className="text-link" href="/Eduardo_Escamilla_CV.pdf" download>
            Download CV (PDF) <Arrow direction="down" />
          </a>
        </div>
        <div className="timeline">
          {experience.map((x) => (
            <article key={x.company + x.period}>
              <time>{x.period}</time>
              <div>
                <h3>{x.company}</h3>
                <h4>{x.role}</h4>
                <p>{x.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="codelaunch">
        <div className="shell codelaunch-grid">
          <div>
            <p className="kicker light">TEAM / HACKATHON EXPERIENCE</p>
            <h2>CodeLaunch Houston 2022</h2>
          </div>
          <div>
            <p>
              I participated at CodeLaunch Houston 2022 as part of The Blue
              People development team, working in a fast-paced collaborative
              product environment.
            </p>
            <p className="fineprint"></p>
          </div>
        </div>
      </section>

      <section id="background" className="background-section">
        <div className="shell background-grid">
          <div>
            <p className="kicker light">BACKGROUND</p>
            <h2>Mathematical thinking.<br />Practical software.</h2>
            <p>
              My background in mathematics, game theory research, and quantitative
              modeling informs how I approach software and machine learning.
              I continue building on that foundation through structured learning
              and projects that put the ideas into practice.
            </p>
            <a className="text-link" href="#certificates">Explore my professional development <Arrow direction="down" /></a>
            <div className="education-records" aria-labelledby="education-heading">
              <h3 id="education-heading">Education</h3>
              <article>
                <span className="education-label">UNIVERSITY STUDIES · 2007–2010</span>
                <h3>Mathematics</h3>
                <p>University of Texas–Pan American (UTPA)</p>
                <p className="education-detail">Additional coursework in Economics and Physics.</p>
              </article>
              <article>
                <span className="education-label">UNIVERSITY STUDIES</span>
                <h3>Computer Science</h3>
                <p>Universidad Virtual del Estado de Guanajuato (UVEG)</p>
              </article>
            </div>
          </div>
          <div className="background-list">
            <h3 className="background-list-heading">Research & honors</h3>
            <div>
              <span>2008–2009</span>
              <b>Game Theory Research</b>
              <p>
                University of Texas–Pan American · seller competition and
                mechanism design.
                <span className="research-paper">
                  Seller Competition by Mechanism Design · Damian S. Damianov
                  <br />Acknowledged in the published article for contributions through comments.
                  <span className="research-links">
                    <a href="https://link.springer.com/article/10.1007/s00199-010-0597-z#additional-information" target="_blank" rel="noreferrer">View publication & acknowledgment <Arrow /></a>
                    <a href="/research/seller-competition-by-mechanism-design.pdf" download>Download paper (PDF) <Arrow direction="down" /></a>
                  </span>
                </span>
              </p>
            </div>
            <div>
              <span>2013–2014</span>
              <b>Quantitative Modeling</b>
              <p>Stochastic simulation and quantitative risk modeling in R.</p>
            </div>
            <div>
              <span>2003</span>
              <b>Mexican Mathematical Olympiad</b>
              <p>Silver Medal.</p>
            </div>
            <div>
              <span>2004</span>
              <b>Regional Mathematical Olympiad · Nuevo León</b>
              <p>1st Place Overall.</p>
            </div>
          </div>
        </div>
      </section>

      <Certificates />

      <section className="section shell about" id="approach">
        <p className="kicker">HOW I WORK</p>
        <div>
          <h2>Curiosity, practice, and honest work.</h2>
          <p>I use AI as part of my workflow. This portfolio is a place to share the things I love building, problems I’ve tackled, and ideas I’m still learning. The projects here show what I’ve built and how I approach problems.</p>
          <details><summary>A little more about me</summary><p>My interests connect mathematics, formal reasoning, software, and learning. ProofGym and KickboxWM explore different sides of that curiosity: practicing rigorous thinking and experimenting with interactive training.</p></details>
        </div>
      </section>

      <section id="contact" className="contact shell">
        <p className="kicker">CONTACT</p>
        <h2>Looking for someone who can build from scratch?</h2>
        <a className="mail" href="mailto:eduardo.escamillasal@gmail.com">
          eduardo.escamillasal@gmail.com <Arrow />
        </a>
        <ContactForm />
        <div className="footer-links">
          <CodewarsProfile />
          <a
            href="https://github.com/eduardoescamillasal"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Arrow />
          </a>
          <a href="/Eduardo_Escamilla_CV.pdf" download>
            Download CV (PDF) <Arrow direction="down" />
          </a>
          <span>Monterrey, Mexico</span>
        </div>
      </section>
    </main>
  );
}
