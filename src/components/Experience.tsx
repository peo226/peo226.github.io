const experiences = [
  {
    when: "Sep 2026 to now",
    role: "Graduate Assistant, Data Analytics & Technical Operations",
    where: "Villanova University",
    bullets: [
      "Run data analytics projects end to end for University stakeholders: inspect, clean and transform, analyze, and present findings to supervisors, planners, and advisors.",
      "Built a Python and Jupyter pipeline over 7 years (14 terms) of Banner registration event data: deduplicated transactions, classified status codes, and produced a clean dataset ready for analysis.",
      "Scraped university course catalogs and used AI-assisted categorization (sequence level, course type) so courses compare across departments.",
      "Applied two-proportion z-tests, chi-square, 95% confidence intervals, Cohen's h, and Benjamini–Hochberg FDR correction to separate real trends from term-to-term variance. Presented results in Excel and an interactive HTML report.",
    ],
  },
  {
    when: "Jan 2025 to Dec 2025",
    role: "Computer Vision Software Engineer",
    where: "Hawkeye, capstone sponsor",
    bullets: [
      "Improved a real-time Python computer vision pipeline for cyclist hazard detection with a startup sponsor, on a 4-person Agile team tracked in Jira.",
      "Migrated the object detection model from YOLOv8 to YOLOv11: updated model configs, refactored pre- and post-processing, and resolved dependency changes across the Ultralytics codebase.",
      "Reached 92.66% vehicle orientation prediction accuracy.",
    ],
  },
  {
    when: "Mar 2025 to May 2025",
    role: "Software Development Intern",
    where: "Lehigh University",
    bullets: [
      "Built an admin interface in React for an academic integrity platform, letting 100+ faculty and associate chairs manage user roles and access to student reports.",
      "Implemented 6 REST APIs and OAuth authentication with role-based access control for faculty, associate chairs, and students.",
    ],
  },
  {
    when: "Jun 2023 to Aug 2023",
    role: "IT Intern and STEM Instructor",
    where: "Lavner Education",
    bullets: [
      "Taught STEM programs to cohorts of about 20 students and kept the computer labs running.",
      "Helped develop curriculum-aligned teaching materials.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experiences.map(({ when, role, where, bullets }) => (
        <div className="entry" key={role}>
          <p className="when">{when}</p>
          <div>
            <h3>{role}</h3>
            <p className="where">{where}</p>
            <ul>
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
