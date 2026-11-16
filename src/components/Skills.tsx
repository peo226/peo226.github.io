const SKILLS = [
  { label: "Languages", value: "Python, SQL, Java, R, C++, C#, LuaU, JavaScript, Rust, Assembly, HTML/CSS" },
  { label: "Frameworks and libraries", value: "React, Node.js, Spring, Maven, Supabase, TensorFlow, Keras, scikit-learn, Pandas, Ultralytics" },
  { label: "Tools", value: "Git, Linux, Docker, PostgreSQL, Kafka, Jupyter, TensorBoard, Jira, Azure DevOps, Figma, Roblox Studio, Unity, AI-assisted development (Claude, Gemini, MCP)" },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <dl className="skills">
        {SKILLS.map(({ label, value }) => (
          <div key={label} style={{ display: "contents" }}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Skills;
