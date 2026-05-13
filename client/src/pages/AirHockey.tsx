/*
 * Air Hockey Game Page
 * Embedded game for bonus content
 */

import { Game } from "../components/Game";

export default function AirHockey() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f0ece0" }}>
      {/* Nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(245,240,232,0.97)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          padding: "0.85rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.4rem",
            letterSpacing: "0.08em",
            color: "#2a1f14",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Matt Benjamin
        </a>
        <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
          {[
            { label: "About", href: "/about" },
            { label: "Books", href: "/books" },
            { label: "Value for Value", href: "/value-for-value" },
            { label: "Bonus Material", href: "/bonus" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: item.href === "/air-hockey" ? 700 : 500,
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: item.href === "/air-hockey" ? "#8b6914" : "#333",
                textDecoration: "none",
                padding: "0.25rem 0.6rem",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8b87a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = item.href === "/air-hockey" ? "#8b6914" : "#333")}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Game Container */}
      <div style={{ padding: "2rem", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "calc(100vh - 56px)" }}>
        <div style={{ width: "100%", maxWidth: "1000px" }}>
          <Game />
        </div>
      </div>
    </div>
  );
}
