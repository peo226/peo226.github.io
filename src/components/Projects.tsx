import { ExternalLink, FileText, Github, Figma } from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  tagColor: "accent" | "cyan";
  links: { label: string; href: string; Icon: React.ElementType }[];
  badge?: string;
  note?: string;
};

const projects: Project[] = [
  {
    title: "Movie Watchlist App",
    subtitle: "Full-Stack Web Application",
    description:
      "A full-stack movie watchlist app built with a team of 3, featuring movie search, personal watchlists, and social reviews powered by the TMDb API and PostgreSQL. Includes a complete auth system with Google OAuth and JWT session management via Supabase.",
    highlights: [
      "Built movie search, personal watchlists, and social reviews with TMDb API",
      "Designed and implemented authentication: email/password login, Google OAuth, and JWT via Supabase Auth",
      "PostgreSQL database with a full relational schema (users, watchlists, reviews)",
      "Produced technical documentation for system requirements and architecture",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Supabase", "Google OAuth", "TMDb API"],
    tagColor: "cyan",
    links: [
      // Replace YOUR_RENDER_URL with the actual deployed URL after deployment
      { label: "Live Demo", href: "https://movie-watchlist-alpha-henna.vercel.app/", Icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/peo226/cse264-final", Icon: Github },
    ],
    badge: "Live",
  },
  {
    title: "Hawkeye Cyclist Safety Device",
    subtitle: "AI/ML Capstone — Skillion",
    description:
      "Real-time object detection system for cyclist safety using advanced computer vision and machine learning. Collaborated with startup founders to build a production-grade pipeline focused on early hazard detection.",
    highlights: [
      "Implemented YOLOv8/YOLOv11 for real-time object detection at the edge",
      "Focused on depth prediction, model optimization, and dataset expansion",
      "Utilized TensorFlow, Keras, Python, and TensorBoard for training and evaluation",
      "Followed Agile methodologies in collaboration with startup founders",
    ],
    tags: ["TensorFlow", "Keras", "Python", "YOLOv8", "Computer Vision", "TensorBoard"],
    tagColor: "accent",
    links: [
      { label: "Hawkeye Website", href: "https://hawkeye.bike/", Icon: ExternalLink },
    ],
  },
  {
    title: "Distributed Replicated Hash Table",
    subtitle: "Systems Project — CSE 376",
    description:
      "Implemented a distributed hash table across a 5-node system with support for atomic operations, data replication, and fault tolerance. Built from scratch in C++ with no external distributed systems frameworks.",
    highlights: [
      "Designed and implemented consistent hashing across 5 nodes",
      "Supported atomic read/write operations with full replication guarantees",
      "Built fault-tolerance mechanisms to handle node failures gracefully",
      "Measured and analyzed throughput and success rate under load",
    ],
    tags: ["C++", "Distributed Systems", "Fault Tolerance", "Replication", "Consistent Hashing"],
    tagColor: "accent",
    links: [],
  },
  {
    title: "E-Commerce Mobile UI",
    subtitle: "UX Design — DES 173",
    description:
      "A high-fidelity mobile UI/UX prototype for an e-commerce platform, designed in Figma. Covers the full shopping flow from browsing to checkout, optimized for mobile interaction patterns and accessibility.",
    highlights: [
      "Designed end-to-end shopping flow: browse, product detail, cart, checkout",
      "Applied mobile-first design principles and component consistency throughout",
      "Built interactive prototype for user testing — best viewed on a real mobile device",
    ],
    tags: ["Figma", "UI/UX", "Mobile Design", "Prototyping", "E-Commerce"],
    tagColor: "cyan",
    links: [
      {
        label: "View Prototype",
        href: "https://www.figma.com/proto/m0P89odUY00BmTlFN0Bh9i/P1-%7C-Prince-E.-Omuyeh-%7C-E-Commerce-Mobile-Site?node-id=13360-1423&starting-point-node-id=13360%3A1457&t=lb8TlwVttFAfVzn8-1",
        Icon: Figma,
      },
    ],
    note: "Best viewed on mobile",
  },
  {
    title: "Classification Algorithms Analysis",
    subtitle: "Data Mining — Lehigh University",
    description:
      "Led the implementation and evaluation of Support Vector Machine (SVM) classification across MNIST, CIFAR-10, and Iyer datasets. Focused on hyperparameter tuning and cross-dataset performance analysis.",
    highlights: [
      "Implemented SVM using scikit-learn across three diverse datasets",
      "Performed hyperparameter tuning with GridSearchCV (C and γ)",
      "Evaluated performance via accuracy, F1 score, and AUC metrics",
      "Conducted sensitivity analysis to find optimal configurations per dataset",
    ],
    tags: ["Python", "scikit-learn", "SVM", "GridSearchCV", "MNIST", "CIFAR-10"],
    tagColor: "accent",
    links: [
      { label: "Project Report", href: "/DataMining.pdf", Icon: FileText },
    ],
  },
  {
    title: "Multiplayer Game Systems",
    subtitle: "Independent Studio — Ongoing",
    description:
      "Leading game development for a multiplayer Roblox title with a 2000+ member community. Responsible for project planning, system architecture, UI/UX design, and team coordination across a 6-person team.",
    highlights: [
      "Led project planning and task delegation using Trello across a 6-person team, organizing sprints and defining milestones",
      "Managed bug tracking and community feedback for a 2000+ member community using BetaHub",
      "Designed interactive UI/UX and reusable gameplay systems with optimized rendering and physics logic",
      "Oversaw team deliverables and collaborated with clients on feature specs",
    ],
    tags: ["LuaU", "Roblox Studio", "Trello", "BetaHub", "UI/UX", "Game Systems"],
    tagColor: "cyan",
    links: [],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-heading">projects</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
          gap: "20px",
        }} className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

const ProjectCard = ({ title, subtitle, description, highlights, tags, tagColor, links, badge, note }: Project) => {
  return (
    <div className="project-card" style={{ height: "100%" }}>
      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "16px",
        gap: "12px",
      }}>
        <div>
          <h3 style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "var(--text-primary)",
            marginBottom: "4px",
            lineHeight: 1.3,
          }}>
            {title}
          </h3>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: tagColor === "cyan" ? "var(--accent-cyan)" : "var(--accent-bright)",
            letterSpacing: "0.05em",
          }}>
            {subtitle}
          </p>
        </div>
        <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
          {badge && (
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              background: "rgba(34,197,94,0.1)",
              color: "#4ade80",
              border: "1px solid rgba(34,197,94,0.25)",
              borderRadius: "4px",
              padding: "3px 8px",
              letterSpacing: "0.08em",
            }}>
              ● {badge}
            </span>
          )}
          {note && (
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              background: "rgba(250,204,21,0.08)",
              color: "#facc15",
              border: "1px solid rgba(250,204,21,0.2)",
              borderRadius: "4px",
              padding: "3px 8px",
              letterSpacing: "0.05em",
            }}>
              {note}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{
        fontSize: "14px",
        color: "var(--text-secondary)",
        lineHeight: 1.7,
        marginBottom: "18px",
      }}>
        {description}
      </p>

      {/* Highlights */}
      <ul style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginBottom: "20px",
        flex: 1,
      }}>
        {highlights.map((h, i) => (
          <li key={i} style={{
            display: "flex",
            gap: "10px",
            fontSize: "13px",
            color: "var(--text-muted)",
            lineHeight: 1.6,
          }}>
            <span style={{
              color: tagColor === "cyan" ? "var(--accent-cyan)" : "var(--accent-bright)",
              flexShrink: 0,
              fontSize: "10px",
              marginTop: "4px",
            }}>◆</span>
            {h}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            className={tagColor === "cyan" ? "tag tag-cyan" : "tag"}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {links.length > 0 && (
        <div style={{
          display: "flex",
          gap: "20px",
          paddingTop: "16px",
          borderTop: "1px solid var(--border-subtle)",
        }}>
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
