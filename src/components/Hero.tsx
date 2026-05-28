import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const ROLES = [
  "Software Engineer",
  "AI Enthusiast",
  "Game Developer",
  "System Designer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="bg-grid"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        paddingBottom: "48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(124,106,247,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container">
        <div style={{ maxWidth: "680px" }}>
          {/* Eyebrow */}
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            color: "var(--accent-bright)",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
            <span style={{
              display: "inline-block",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "var(--accent-bright)",
              boxShadow: "0 0 8px var(--accent-bright)",
              animation: "pulse 2s infinite",
            }} />
            available for opportunities
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(40px, 7vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "var(--text-primary)",
            marginBottom: "16px",
            letterSpacing: "-0.02em",
          }}>
            Prince<br />
            <span style={{ color: "var(--accent-bright)" }}>Omuyeh</span>
          </h1>

          {/* Typing role */}
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(16px, 2.5vw, 22px)",
            color: "var(--text-secondary)",
            marginBottom: "24px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}>
            <span style={{ color: "var(--accent-cyan)" }}>&gt; </span>
            <span>{displayed}</span>
            <span style={{
              display: "inline-block",
              width: "2px",
              height: "1.1em",
              background: "var(--accent-bright)",
              animation: "blink 1s step-end infinite",
              marginLeft: "1px",
            }} />
          </div>

          {/* Tagline */}
          <p style={{
            fontSize: "17px",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            marginBottom: "40px",
            maxWidth: "520px",
          }}>
            Building intelligent systems and interactive experiences.
            <br />CS grad from Lehigh University.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "48px" }}>
            <a href="#projects" className="btn-primary">
              View my work <ArrowRight size={15} />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: "20px" }}>
            {[
              { href: "https://github.com/peo226", Icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/prince-omuyeh-828517218/", Icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:princeomuyeh@gmail.com", Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  color: "var(--text-muted)",
                  transition: "var(--transition)",
                  display: "flex",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-bright)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Profile image — right side on desktop */}
      <div style={{
        position: "absolute",
        right: "8%",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }} className="hero-photo">
        <div style={{
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          border: "2px solid rgba(124,106,247,0.4)",
          overflow: "hidden",
          boxShadow: "0 0 40px rgba(124,106,247,0.15), 0 0 80px rgba(124,106,247,0.05)",
          position: "relative",
        }}>
          <img
            src="/pfp.jpg"
            alt="Prince Omuyeh"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        @media (max-width: 900px) {
          .hero-photo { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
