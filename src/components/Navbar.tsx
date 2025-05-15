
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        navbarBackground ? "bg-background/95 backdrop-blur-sm shadow-sm" : ""
      )}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl md:text-2xl font-bold text-olive hover:text-opacity-80 transition-opacity">
            Prince<span className="text-tan">Omuyeh</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-4 animate-fade-in">
            <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</MobileNavLink>
            <MobileNavLink href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="text-foreground hover-underline transition-colors hover:text-olive font-medium"
    >
      {children}
    </a>
  );
};

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-foreground hover:text-olive hover:pl-2 transition-all duration-200 block font-medium"
    >
      {children}
    </a>
  );
};

export default Navbar;
