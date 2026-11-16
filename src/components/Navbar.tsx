const NAV = [
  { label: "About", href: "#about", hot: false },
  { label: "Live ops story", href: "#incident", hot: true },
  { label: "Experience", href: "#experience", hot: false },
  { label: "Projects", href: "#projects", hot: false },
  { label: "Skills", href: "#skills", hot: false },
  { label: "Contact", href: "#contact", hot: false },
];

export const RESUMES = [
  { label: "Engineering", href: "/resumes/engineering.pdf" },
  { label: "Data", href: "/resumes/data.pdf" },
  { label: "AI", href: "/resumes/ai.pdf" },
  { label: "Product", href: "/resumes/product.pdf" },
];

const Navbar = () => {
  return (
    <nav className="rail" aria-label="Site">
      <a className="who" href="#top">Prince Omuyeh</a>
      <div className="nav-sec">
        <h2>On this page</h2>
        <ul>
          {NAV.map(({ label, href, hot }) => (
            <li key={href}>
              <a className={hot ? "hot" : undefined} href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-res">
        <h2>Resumes</h2>
        <ul>
          {RESUMES.map(({ label, href }) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
