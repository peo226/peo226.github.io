const About = () => {
  return (
    <section id="about" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <h2 className="section-heading">about</h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }} className="about-grid">
          {/* Left column */}
          <div>
            {/* Education card */}
            <div style={{
              background: "var(--bg-tertiary)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "24px",
              marginBottom: "32px",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: "2px",
                background: "linear-gradient(90deg, var(--accent), var(--accent-cyan))",
              }} />
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--accent-bright)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}>
                Education
              </div>
              <h4 style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: "6px",
                lineHeight: 1.4,
              }}>
                B.S. Computer Science, Minor in Data Science
              </h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "4px" }}>
                Lehigh University — P.C. Rossin College of Engineering
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  background: "rgba(34,211,238,0.1)",
                  color: "var(--accent-cyan)",
                  border: "1px solid rgba(34,211,238,0.25)",
                  borderRadius: "4px",
                  padding: "3px 10px",
                }}>
                  Class of 2026
                </span>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  background: "rgba(124,106,247,0.1)",
                  color: "var(--accent-bright)",
                  border: "1px solid rgba(124,106,247,0.25)",
                  borderRadius: "4px",
                  padding: "3px 10px",
                }}>
                  Recently Graduated
                </span>
              </div>
            </div>

            {/* Bio */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "My academic journey has been focused on building a strong foundation in algorithm design, data structures, and AI. with a particular interest in how machine learning can enhance both traditional software and interactive experiences.",
                "I've applied that interest across a range of projects including real-time computer vision systems for cyclist safety, financial forecasting models, and distributed systems built from scratch.",
                "Outside of that, I spend time in game development. I've been leading a multiplayer Roblox title with a 2000+ member community, which has been a great space to blend technical depth with creative product thinking.",
              ].map((para, i) => (
                <p key={i} style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: 1.75 }}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right column - quick facts */}
          <div>
            <div style={{
              background: "var(--bg-tertiary)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "28px",
            }}>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--accent-bright)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}>
                Quick Facts
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { label: "Focus", value: "Data Science, AI & ML" },
                  { label: "Side project", value: "Roblox game dev (2k+ community)" },
                  { label: "Languages", value: "Python, Java, C++, JS, R, Lua" },
                  { label: "Currently into", value: "Distributed systems & AI" },
                  { label: "Based in", value: "Pennsylvania, USA" },
                ].map(({ label, value }) => (
                  <li key={label} style={{ display: "flex", gap: "12px" }}>
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--accent-bright)",
                      minWidth: "100px",
                      flexShrink: 0,
                    }}>
                      {label}
                    </span>
                    <span style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                      {value}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Coursework */}
              <div style={{
                marginTop: "28px",
                paddingTop: "24px",
                borderTop: "1px solid var(--border-subtle)",
              }}>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}>
                  Relevant Coursework
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {[
                    "Data Structures & Algorithms",
                    "AI Theory & Practice",
                    "Data Mining",
                    "Distributed Systems",
                    "Database Systems",
                    "OS Design",
                    "Statistical Computing",
                  ].map((course) => (
                    <span key={course} style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "4px",
                      padding: "3px 9px",
                    }}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
