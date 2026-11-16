type Kind = "game" | "sys" | "data" | "web";

type Project = {
  id?: string;
  kind: Kind;
  when: string;
  title: string;
  where: string;
  bullets?: string[];
  body?: string;
  stack: string;
  links?: { label: string; href: string }[];
  note?: string;
};

const LEGEND: { kind: Kind; label: string }[] = [
  { kind: "game", label: "Game systems" },
  { kind: "sys", label: "Systems" },
  { kind: "data", label: "Data and ML" },
  { kind: "web", label: "Web and design" },
];

const projects: Project[] = [
  {
    id: "multiplayer-game-systems",
    kind: "game",
    when: "2023 to now",
    title: "Multiplayer Game Systems",
    where: "Live Roblox title, 2,000+ member community, 6-person team",
    bullets: [
      "Lead architecture and feature work, with a dev/prod deployment pipeline that tests builds before release.",
      "Server checks every client request: type and range validation, per-player cooldowns, and server-authoritative combat and purchases.",
      "Analytics funnels and economy tracking show where players drop off and how they spend currency. That same data caught the exploit above.",
    ],
    stack: "LuaU, C#, Roblox Studio, Unity",
  },
  {
    kind: "game",
    when: "2026, in progress",
    title: "Combat netcode: prediction with server validation",
    where: "Fighting-game combat system",
    body: "Client-side prediction so player inputs feel instant, while the server stays authoritative over combat outcomes. Client timestamps are clamped to a 200 ms window, the server keeps a 1 second state history, and rejected actions roll back on the client. Tested at 0 to 300 ms simulated latency. I directed AI assistants (Claude, Gemini) to build it and approved each patch. Hit-detection rewind is not finished.",
    stack: "LuaU",
  },
  {
    kind: "sys",
    when: "Apr 2026",
    title: "Distributed Replicated Hash Table",
    where: "Systems course, Lehigh University",
    body: "A 5-node hash table with Paxos-based consensus, atomic operations, replication, and fault tolerance, written in C++ with no distributed-systems framework. About 30,000 operations per second at under 1 ms average latency with 10k keys under fault injection.",
    stack: "C++",
  },
  {
    kind: "sys",
    when: "Apr 2025",
    title: "Scripting Language Interpreter",
    where: "Systems programming course, Lehigh University",
    body: "A hand-written lexer, a recursive descent parser built with nom, and a tree-walking interpreter for a custom scripting language. It has 15+ AST node types, functions, variables, and stack-frame scoping.",
    stack: "Rust",
  },
  {
    kind: "web",
    when: "Apr 2026 to May 2026",
    title: "Movie Watchlist",
    where: "Full-stack web app, team of 3",
    body: "Movie search through the TMDb API, personal watchlists, and social reviews on a PostgreSQL schema. Authentication with email and password, Google OAuth, and JWT sessions through Supabase.",
    stack: "React, Node.js, PostgreSQL, Supabase",
    links: [
      { label: "Live demo", href: "https://movie-watchlist-alpha-henna.vercel.app/" },
      { label: "GitHub", href: "https://github.com/peo226/cse264-final" },
    ],
    note: "The database is paused, so the demo may not load data.",
  },
  {
    kind: "sys",
    when: "Apr 2025",
    title: "JPMorgan Chase Software Engineering Virtual Experience",
    where: "Job simulation, not paid work",
    body: "A Kafka-based transaction processing system in Spring Boot with an H2 database, external API calls, and user balance endpoints.",
    stack: "Java, Spring Boot, Kafka, SQL",
    links: [{ label: "Certificate", href: "/JPMorgan_Certificate.pdf" }],
  },
  {
    kind: "data",
    when: "2025",
    title: "10-Year Treasury Yield Forecast",
    where: "Machine learning course, Lehigh University",
    body: "Supervised regression models in R on inflation, GDP, and unemployment data. Feature selection and cleaning improved prediction accuracy 15% over baseline.",
    stack: "R",
  },
  {
    kind: "data",
    when: "2025",
    title: "SVM Classification Analysis",
    where: "Data mining course, Lehigh University",
    body: "Support vector machines on MNIST, CIFAR-10, and Iyer, with GridSearchCV tuning of C and gamma and results compared by accuracy, F1, and AUC.",
    stack: "Python, scikit-learn",
    links: [{ label: "Project report", href: "/DataMining.pdf" }],
  },
  {
    kind: "web",
    when: "2025",
    title: "E-Commerce Mobile UI",
    where: "UI/UX course, Lehigh University",
    body: "A mobile prototype covering browse, product detail, cart, and checkout. Best viewed on a phone.",
    stack: "Figma",
    links: [
      {
        label: "Open prototype",
        href: "https://www.figma.com/proto/m0P89odUY00BmTlFN0Bh9i/P1-%7C-Prince-E.-Omuyeh-%7C-E-Commerce-Mobile-Site?node-id=13360-1423&starting-point-node-id=13360%3A1457&t=lb8TlwVttFAfVzn8-1",
      },
    ],
  },
];

const isExternal = (href: string) => href.startsWith("http");

const Projects = () => {
  return (
    <section className="band" id="projects">
      <h2>Projects</h2>
      <p className="legend">
        {LEGEND.map(({ kind, label }) => (
          <span key={kind} className={`k-${kind}`}>{label}</span>
        ))}
      </p>
      {projects.map((p) => (
        <div className={`entry k-${p.kind}`} id={p.id} key={p.title}>
          <p className="when">{p.when}</p>
          <div>
            <h3>{p.title}</h3>
            <p className="where">{p.where}</p>
            {p.bullets && (
              <ul>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            {p.body && <p>{p.body}</p>}
            <p className="stack">{p.stack}</p>
            {p.links && (
              <p className="links">
                {p.links.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    {...(isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {label}
                  </a>
                ))}
              </p>
            )}
            {p.note && <p className="note">{p.note}</p>}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
