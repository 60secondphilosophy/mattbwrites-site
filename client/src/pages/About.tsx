/**
 * DESIGN PHILOSOPHY: Vintage Literary Warmth
 * Warm parchment cream backgrounds, heavy condensed display typography,
 * alternating cream/dark sections with texture, golden accents.
 * Fonts: Bebas Neue (display), Oswald (headings), Lora (body)
 */

const AUTHOR_PHOTO = "/manus-storage/real-author-photo_8263ad32.png";

export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f0ece0" }}>

      {/* ===== NAV ===== */}
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
          <a
            href="/"
            style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: "1.4rem",
              letterSpacing: "0.08em",
              color: "#1a1a1a",
              textDecoration: "none",
            }}
          >
            Matt Benjamin
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <a
              href="/value-for-value"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 500,
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#555",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8b87a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
            >
              Value for Value
            </a>
            <a
              href="/books"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 500,
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#555",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8b87a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
            >
              Books
            </a>
            <a
              href="/"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 500,
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#555",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
            >
              ← Home
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO: Full-width photo with overlay ===== */}
      <section
        style={{
          position: "relative",
          height: "clamp(340px, 55vw, 560px)",
          overflow: "hidden",
        }}
      >
        <img
          src={AUTHOR_PHOTO}
          alt="Matt Benjamin"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 20%",
            filter: "sepia(25%) contrast(1.08)",
            display: "block",
          }}
        />
        {/* Dark gradient overlay at bottom */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(26,25,22,0) 40%, rgba(26,25,22,0.85) 100%)",
          }}
        />
        {/* Name badge over photo */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            width: "100%",
          }}
        >
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "#c8b87a",
              marginBottom: "0.4rem",
            }}
          >
            Author
          </p>
          <h1
            style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: "clamp(3rem, 9vw, 6rem)",
              lineHeight: 0.95,
              letterSpacing: "0.05em",
              color: "#f0ece0",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            Matt Benjamin
          </h1>
        </div>
      </section>

      {/* ===== BIO SECTION ===== */}
      <section
        style={{
          backgroundColor: "#1a1916",
          backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(200,184,122,0.06) 0%, transparent 65%)",
          padding: "5rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "#c8b87a",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            The Story Behind the Stories
          </p>
          <div
            style={{
              width: "3rem",
              height: "2px",
              backgroundColor: "#c8b87a",
              margin: "0 auto 2.5rem",
            }}
          />

          {/* Bio paragraphs */}
          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "#d8d0b8",
              marginBottom: "1.5rem",
            }}
          >
            Matt Benjamin studied the humanities in college and graduate school. Because of that, he now owns a lawncare business. But when he's not mowing lawns — and sometimes when he is — he is crafting tales that force his readers to think deeply.
          </p>
          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "#d8d0b8",
              marginBottom: "1.5rem",
            }}
          >
            Drawing from his studies of ancient philosophy and the Bible, Matt writes to challenge the assumptions we make about modern life with stories that are true, good, and beautiful. His debut novel <em>We Are Icarus</em> explores where our technological society might be heading, and what we can do to prevent the consequences of our current trajectory.
          </p>
          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "#d8d0b8",
              marginBottom: "1.5rem",
            }}
          >
            His second novel, <em>Alex Was Here</em>, is a coming-of-age story set against the backdrop of a small American town — a story about friendship, loss, and the things we leave behind. His non-fiction work, <em>Back to the Beginning: Wisdom from Genesis for Modern Life</em>, brings ancient text into conversation with the questions that define contemporary existence.
          </p>
          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "#d8d0b8",
            }}
          >
            Matt also runs{" "}
            <a
              href="https://www.youtube.com/@60SPH"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c8b87a", textDecoration: "none", borderBottom: "1px solid rgba(200,184,122,0.4)" }}
            >
              60 Second Philosophy
            </a>
            , a YouTube channel with over 20,000 subscribers, where big ideas are distilled into short, accessible videos. He also writes short fiction at{" "}
            <a
              href="https://hardlyaclearview.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c8b87a", textDecoration: "none", borderBottom: "1px solid rgba(200,184,122,0.4)" }}
            >
              Hardly a Clear View
            </a>{" "}
            on Substack.
          </p>
        </div>
      </section>

      {/* ===== QUOTE BREAK ===== */}
      <section
        style={{
          backgroundColor: "#f0ece0",
          padding: "4rem 1.5rem",
          textAlign: "center",
          borderTop: "1px solid #d8d0b8",
          borderBottom: "1px solid #d8d0b8",
        }}
      >
        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
          }}
        >
          <span
            style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: "4rem",
              color: "#d8d0b8",
              lineHeight: 0.6,
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            "
          </span>
          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontStyle: "italic",
              fontSize: "1.2rem",
              lineHeight: 1.8,
              color: "#444",
            }}
          >
            Stories that are true, good, and beautiful.
          </p>
          <div
            style={{
              width: "2.5rem",
              height: "2px",
              backgroundColor: "#c8b87a",
              margin: "1.5rem auto",
            }}
          />
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#999",
            }}
          >
            Matt Benjamin
          </p>
        </div>
      </section>

      {/* ===== CONNECT ===== */}
      <section
        style={{
          backgroundColor: "#f0ece0",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 600,
            fontSize: "1.5rem",
            letterSpacing: "0.06em",
            color: "#1a1a1a",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          Find the Work
        </h2>
        <div
          style={{
            width: "2.5rem",
            height: "2px",
            backgroundColor: "#c8b87a",
            margin: "0 auto 2rem",
          }}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.75rem",
          }}
        >
          {[
            { label: "Free Books on Ko-fi", href: "https://ko-fi.com/mattbenjamin", accent: true },
            { label: "60 Second Philosophy", href: "https://www.youtube.com/@60SPH", accent: false },
            { label: "Hardly a Clear View", href: "https://hardlyaclearview.substack.com/", accent: false },
            { label: "Newsletter", href: "https://matt-benjamin-z0yd2c.subscribepage.io/", accent: false },
          ].map(({ label, href, accent }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: accent ? "#FF5E5B" : "transparent",
                color: accent ? "#fff" : "#1a1a1a",
                border: accent ? "none" : "1px solid #1a1a1a",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "0.7rem 1.6rem",
                textDecoration: "none",
                boxShadow: accent ? "0 4px 16px rgba(255,94,91,0.3)" : "none",
                transition: "background-color 0.2s, color 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                if (accent) {
                  e.currentTarget.style.backgroundColor = "#e84e4b";
                } else {
                  e.currentTarget.style.backgroundColor = "#1a1a1a";
                  e.currentTarget.style.color = "#f0ece0";
                }
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = accent ? "#FF5E5B" : "transparent";
                e.currentTarget.style.color = accent ? "#fff" : "#1a1a1a";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section
        style={{
          backgroundColor: "#1a1916",
          backgroundImage: "radial-gradient(ellipse at 50% 100%, rgba(200,184,122,0.07) 0%, transparent 65%)",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            color: "#c8b87a",
            marginBottom: "0.6rem",
          }}
        >
          Get in Touch
        </p>
        <h2
          style={{
            fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            letterSpacing: "0.06em",
            color: "#f0ece0",
            marginBottom: "0.5rem",
            lineHeight: 1,
          }}
        >
          Say Hello
        </h2>
        <div
          style={{
            width: "2.5rem",
            height: "2px",
            backgroundColor: "#c8b87a",
            margin: "0 auto 1.75rem",
          }}
        />
        <p
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: "1rem",
            lineHeight: 1.85,
            color: "#c8c0a8",
            maxWidth: "480px",
            margin: "0 auto 2.5rem",
          }}
        >
          Questions, thoughts on the books, errors you spotted, or just want to return some value — the inbox is open.
        </p>
        <a
          href="mailto:matt@mattbwrites.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            backgroundColor: "transparent",
            color: "#f0ece0",
            border: "1px solid #c8b87a",
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 700,
            fontSize: "0.88rem",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            padding: "0.9rem 2.4rem",
            textDecoration: "none",
            transition: "background-color 0.2s, color 0.2s, transform 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#c8b87a";
            e.currentTarget.style.color = "#1a1916";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#f0ece0";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          matt@mattbwrites.com
        </a>
        <p
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.72rem",
            color: "#666",
            marginTop: "1.25rem",
            letterSpacing: "0.04em",
          }}
        >
          matt@mattbwrites.com
        </p>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        style={{
          backgroundColor: "#f0ece0",
          borderTop: "1px solid #d8d0b8",
          padding: "1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.75rem",
            color: "#aaa",
            letterSpacing: "0.04em",
          }}
        >
          © {new Date().getFullYear()} Matt Benjamin
        </p>
      </footer>

    </div>
  );
}
