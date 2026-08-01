import { useState } from "react";
import { useLocation } from "wouter";
import { Youtube, Instagram } from "lucide-react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/books", label: "Books" },
  { href: "/alphabreaker", label: "Alphabreaker" },
  { href: "/bonus", label: "Bonus Material" },
  { href: "/blog", label: "Blog" },
];

const linkStyle = (active: boolean) => ({
  fontFamily: "'Raleway', sans-serif",
  fontWeight: 500 as const,
  fontSize: "0.78rem",
  textTransform: "uppercase" as const,
  letterSpacing: "0.06em",
  color: active ? "#c8b87a" : "#333",
  textDecoration: "none",
  padding: "0.25rem 0.6rem",
  transition: "color 0.2s",
});

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav
      style={{
        backgroundColor: "#f0ece0",
        borderBottom: "1px solid #d8d0b8",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "56px",
        }}
      >
        {/* Desktop links */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={linkStyle(location === href)}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8b87a")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = location === href ? "#c8b87a" : "#333")
              }
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", color: "#333" }}
          aria-label="Toggle menu"
        >
          <div style={{ width: "22px", height: "2px", backgroundColor: "#333", marginBottom: "5px" }} />
          <div style={{ width: "22px", height: "2px", backgroundColor: "#333", marginBottom: "5px" }} />
          <div style={{ width: "22px", height: "2px", backgroundColor: "#333" }} />
        </button>

        {/* Social icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <a
            href="https://www.youtube.com/@60SPH"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#333", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c00")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
            aria-label="YouTube"
          >
            <Youtube size={18} />
          </a>
          <a
            href="https://www.instagram.com/mattbwrites/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#333", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c13584")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://hardlyaclearview.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#333", transition: "color 0.2s", display: "flex", alignItems: "center" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6719")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
            aria-label="Substack"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "#f0ece0",
            borderTop: "1px solid #d8d0b8",
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 500,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: location === href ? "#c8b87a" : "#333",
                textDecoration: "none",
              }}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
