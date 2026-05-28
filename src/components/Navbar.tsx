import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        transition: "all 0.3s ease",
        padding: "16px 24px",
        background: scrolled
          ? "rgba(13, 17, 23, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(48,54,61,0.6)" : "1px solid transparent",
      }}
    >
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a
          href="#"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "16px",
            fontWeight: 700,
            textDecoration: "none",
            color: "var(--text-primary)",
            letterSpacing: "0.02em",
          }}
        >
          prince<span style={{ color: "var(--accent-bright)" }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="hidden-mobile">
          {["about", "experience", "skills", "projects", "contact"].map((item) => (
            <NavLink key={item} href={`#${item}`}>{item}</NavLink>
          ))}
          <a
            href="/Prince_Omuyeh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--accent-bright)",
              border: "1px solid rgba(124,106,247,0.4)",
              borderRadius: "var(--radius-sm)",
              padding: "6px 14px",
              textDecoration: "none",
              transition: "var(--transition)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--accent-dim)";
              e.currentTarget.style.borderColor = "var(--accent-bright)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(124,106,247,0.4)";
            }}
          >
            resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="show-mobile"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            cursor: "pointer",
            padding: "4px",
          }}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav
          className="animate-fade-in"
          style={{
            padding: "16px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            borderTop: "1px solid var(--border-subtle)",
            marginTop: "12px",
          }}
        >
          {["about", "experience", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "var(--transition)",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--accent-bright)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
            >
              <span style={{ color: "var(--accent-bright)", marginRight: "8px" }}>→</span>{item}
            </a>
          ))}
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="hover-underline"
    style={{
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      color: "var(--text-secondary)",
      textDecoration: "none",
      transition: "var(--transition)",
      letterSpacing: "0.05em",
    }}
    onMouseEnter={e => e.currentTarget.style.color = "var(--text-primary)"}
    onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
  >
    {children}
  </a>
);

export default Navbar;
