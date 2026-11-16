import { useEffect, useState } from "react";
import { RESUMES } from "./Navbar";

const ROLES = ["Software Engineer", "AI Enthusiast", "Game Developer", "System Designer"];

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayed(ROLES[0]);
      return;
    }
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }, 300);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <header className="hero">
      <div className="hero-top">
        <h1>
          Prince
          <br />
          Omuyeh
        </h1>
        <div className="portrait-wrap">
          <div className="portrait">
            <img src="/pfp.jpg" alt="Portrait of Prince Omuyeh" width={240} height={240} />
          </div>
          <p className="sticker">Open to Summer 2027 internships and full-time positions</p>
        </div>
      </div>

      <p className="typing" aria-label={ROLES.join(", ")}>
        <span className="prompt" aria-hidden="true">&gt;</span>
        <span aria-hidden="true">{displayed}</span>
        <span className="caret" aria-hidden="true" />
      </p>

      <p className="tagline">
        Building intelligent systems and interactive experiences.
        <br />
        Currently: MS in SWE @ Villanova University.
        <br />
        CS grad from Lehigh University.
      </p>

      <div className="social">
        <a href="mailto:princeomuyeh@gmail.com" aria-label="Email">
          <svg viewBox="0 0 24 24" {...stroke}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
        </a>
        <a href="https://www.linkedin.com/in/prince-omuyeh-828517218/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" {...stroke}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg>
        </a>
        <a href="https://github.com/peo226" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 24 24" {...stroke}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
        </a>
      </div>

      <p className="mobile-resumes">
        <span>Resumes</span>
        {RESUMES.map(({ label, href }) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </p>
    </header>
  );
};

export default Hero;
