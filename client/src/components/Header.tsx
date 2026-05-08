import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "ABOUT", href: "/about" },
    { label: "BOOKS", href: "/books" },
    { label: "VALUE FOR VALUE", href: "/value-for-value" },
    { label: "BONUS MATERIAL", href: "/bonus-material" },
    { label: "BLOG", href: "/blog" },
  ];

  const isHomePage = window.location.pathname === "/";

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
        {/* Brand */}
        {!isHomePage && (
          <a
            href="/"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.3rem",
              fontWeight: 400,
              letterSpacing: "0.04em",
              color: "#333",
              textDecoration: "none",
              marginRight: "2rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c8b87a")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
          >
            MATT BENJAMIN
          </a>
        )}

        {/* Desktop Nav Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="hidden md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 500,
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#333",
                textDecoration: "none",
                padding: "0.25rem 0.6rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8b87a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#333",
            padding: "0.5rem",
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "1rem 1.5rem",
            backgroundColor: "#f0ece0",
            borderTop: "1px solid #d8d0b8",
          }}
          className="md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 500,
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#333",
                textDecoration: "none",
                padding: "0.5rem 0",
                transition: "color 0.2s",
              }}
              onClick={() => setMobileMenuOpen(false)}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8b87a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
