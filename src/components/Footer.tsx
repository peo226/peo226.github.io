const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "32px 24px",
      background: "var(--bg-primary)",
    }}>
      <div className="container" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
      }}>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          fontWeight: 700,
          color: "var(--text-primary)",
        }}>
          prince<span style={{ color: "var(--accent-bright)" }}>.</span>
        </span>

        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--text-muted)",
        }}>
          © {year} Prince Omuyeh
        </span>
      </div>
    </footer>
  );
};

export default Footer;
