const LINKEDIN = "https://www.linkedin.com/in/prince-omuyeh-828517218/details/experience/";

const experiences = [
  {
    role: "Software Development Intern",
    company: "Lehigh University",
    period: "Mar 2025 – May 2025",
    bullets: [
      "Contributed to a full-stack academic integrity platform, building an admin interface enabling 100+ faculty and associate chairs to manage user roles and control access to student reports",
      "Implemented RESTful APIs and OAuth authentication to enhance platform security and streamline user access management",
      "Supported academic integrity initiatives through scalable platform tooling",
    ],
    tags: ["JavaScript", "React", "SQL", "REST API", "OAuth"],
  },
  {
    role: "IT Intern / STEM Instructor",
    company: "Lavner Education",
    period: "Jun 2023 – Aug 2023",
    bullets: [
      "Instructed STEM programs to cohorts of ~20 students, delivering hands-on tech-focused learning experiences",
      "Coordinated computer labs, ensuring optimal software and hardware functionality for educational use",
      "Collaborated with team members to develop engaging, curriculum-aligned materials",
    ],
    tags: ["Teaching", "Lab Management", "STEM Education"],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-heading">experience</h2>

        <div style={{ position: "relative", paddingLeft: "28px" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: 0,
            top: "8px",
            bottom: "8px",
            width: "1px",
            background: "linear-gradient(to bottom, var(--accent), rgba(124,106,247,0.1))",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{ position: "relative" }}>
                {/* Timeline dot */}
                <div style={{
                  position: "absolute",
                  left: "-33px",
                  top: "20px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  border: "2px solid var(--bg-primary)",
                  boxShadow: "0 0 8px rgba(124,106,247,0.6)",
                }} />

                <div
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "28px",
                    transition: "var(--transition)",
                    cursor: "default",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,106,247,0.35)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 20px rgba(124,106,247,0.1)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLDivElement).style.transform = "none";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "4px" }}>
                    <div>
                      <a
                        href={LINKEDIN}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "var(--accent-bright)",
                          textDecoration: "none",
                          transition: "var(--transition)",
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = "var(--accent-cyan)"}
                        onMouseLeave={e => e.currentTarget.style.color = "var(--accent-bright)"}
                      >
                        {exp.role}
                      </a>
                      <p style={{ fontSize: "15px", color: "var(--text-primary)", marginTop: "4px" }}>
                        {exp.company}
                      </p>
                    </div>
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--text-muted)",
                      flexShrink: 0,
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  <ul style={{
                    marginTop: "16px",
                    paddingLeft: "0",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.65,
                      }}>
                        <span style={{ color: "var(--accent-bright)", flexShrink: 0, marginTop: "2px" }}>▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
