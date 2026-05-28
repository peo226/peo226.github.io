import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <h2 className="section-heading">contact</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "start",
        }} className="contact-grid">
          {/* Left — CTA text */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.3,
              marginBottom: "20px",
            }}>
              Let's build<br />
              <span style={{ color: "var(--accent-bright)" }}>something great.</span>
            </h3>
            <p style={{
              fontSize: "15px",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              maxWidth: "380px",
            }}>
              I'm actively seeking new opportunites and personal connections. Feel free to reach out anytime!
            </p>

            <a
              href="mailto:princeomuyeh@gmail.com"
              className="btn-primary"
              style={{ marginTop: "32px", display: "inline-flex" }}
            >
              <Mail size={15} />
              Say hello
            </a>
          </div>

          {/* Right — contact cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              {
                Icon: Mail,
                label: "Email",
                value: "princeomuyeh@gmail.com",
                href: "mailto:princeomuyeh@gmail.com",
              },
              {
                Icon: Linkedin,
                label: "LinkedIn",
                value: "prince-omuyeh-828517218",
                href: "https://www.linkedin.com/in/prince-omuyeh-828517218/",
              },
              {
                Icon: Github,
                label: "GitHub",
                value: "peo226",
                href: "https://github.com/peo226",
              },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "18px 20px",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  textDecoration: "none",
                  transition: "var(--transition)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,106,247,0.4)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-card)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(4px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-tertiary)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                }}
              >
                <div style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--accent-dim)",
                  border: "1px solid rgba(124,106,247,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={17} color="var(--accent-bright)" />
                </div>
                <div>
                  <p style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "2px",
                  }}>
                    {label}
                  </p>
                  <p style={{ fontSize: "14px", color: "var(--text-primary)" }}>
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
