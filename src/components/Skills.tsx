const skillGroups = [
  {
    label: "Languages",
    color: "accent",
    items: ["Python", "Java", "C++", "JavaScript", "SQL", "R", "C#", "Dart", "Rust", "LuaU", "HTML/CSS"],
  },
  {
    label: "Frameworks & Libraries",
    color: "cyan",
    items: ["React", "Flutter", "Spring", "Maven", "Node.js", "Supabase", "TensorFlow", "Keras", "scikit-learn"],
  },
  {
    label: "Tools & Platforms",
    color: "accent",
    items: ["Git", "Docker", "Linux", "Jira/Atlassian", "Agile/Scrum", "Roblox Studio", "TensorBoard", "PostgreSQL"],
  },
 
];

const Skills = () => {
  return (
    <section id="skills" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <h2 className="section-heading">skills</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}>
          {skillGroups.map(({ label, color, items }) => (
            <div key={label} style={{
              background: "var(--bg-tertiary)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "24px",
              transition: "var(--transition)",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = color === "cyan"
                  ? "rgba(34,211,238,0.3)"
                  : "rgba(124,106,247,0.3)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
              }}
            >
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: color === "cyan" ? "var(--accent-cyan)" : "var(--accent-bright)",
                marginBottom: "16px",
              }}>
                {label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {items.map((item) => (
                  <span
                    key={item}
                    className={`skill-item`}
                    style={color === "cyan" ? {
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--text-secondary)",
                    } : undefined}
                    onMouseEnter={e => {
                      if (color === "cyan") {
                        (e.currentTarget as HTMLSpanElement).style.color = "var(--accent-cyan)";
                        (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(34,211,238,0.4)";
                        (e.currentTarget as HTMLSpanElement).style.background = "var(--accent-cyan-dim)";
                      }
                    }}
                    onMouseLeave={e => {
                      if (color === "cyan") {
                        (e.currentTarget as HTMLSpanElement).style.color = "var(--text-secondary)";
                        (e.currentTarget as HTMLSpanElement).style.borderColor = "var(--border)";
                        (e.currentTarget as HTMLSpanElement).style.background = "var(--bg-secondary)";
                      }
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
