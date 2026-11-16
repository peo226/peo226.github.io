const COURSEWORK = [
  "Data Structures & Algorithms",
  "Operating Systems Design",
  "Distributed Systems",
  "Database Systems",
  "Computer Architecture",
  "Systems Software",
  "Statistical Computing",
  "AI Theory & Practice",
  "Data Mining",
  "Cybersecurity",
  "Software Project Management",
  "DevOps",
];

const FACTS = [
  { label: "Focus", value: "Software & Systems" },
  { label: "Side project", value: "Roblox game dev (2k+ community)", href: "#multiplayer-game-systems" },
  { label: "Languages", value: "Python, Java, C++, JavaScript, R, Rust" },
  { label: "Currently into", value: "Data & Distributed Systems" },
  { label: "Based in", value: "Pennsylvania, USA" },
];

const About = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="about">
        <div className="text">
          <p>My academic journey has been focused on building a strong foundation in systems design, applied AI/ML, and UI/UX development.</p>
          <p>I have applied the skills that I've developed across a range of projects including: real-time computer vision systems for cyclist safety, financial forecasting models, and distributed systems built from scratch.</p>
          <p>Outside of that, I spend time in game development. I've been leading a multiplayer Roblox title with a 2000+ member community, which has been a great space to blend technical depth with creative product thinking.</p>
        </div>
        <div>
          <div className="card">
            <h3>Education</h3>
            <div className="edu-item">
              <h4>M.S. Software Engineering</h4>
              <p className="school">Villanova University</p>
              <span className="chip v">Aug 2026 to present</span>
            </div>
            <div className="edu-item">
              <h4>B.S. Computer Science, minor in Data Science</h4>
              <p className="school">Lehigh University, P.C. Rossin College of Engineering</p>
              <span className="chip c">Class of 2026</span>
              <span className="chip o">Graduated</span>
            </div>
          </div>
          <div className="card">
            <h3>Quick facts</h3>
            <dl className="facts">
              {FACTS.map(({ label, value, href }) => (
                <div key={label} style={{ display: "contents" }}>
                  <dt>{label}</dt>
                  <dd>{href ? <a href={href}>{value}</a> : value}</dd>
                </div>
              ))}
            </dl>
            <div className="coursework">
              <p className="lab">Relevant coursework</p>
              {COURSEWORK.map((course) => (
                <span key={course}>{course}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
