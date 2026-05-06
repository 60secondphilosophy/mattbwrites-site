/**
 * DESIGN PHILOSOPHY: Vintage Literary Warmth
 * Warm parchment cream backgrounds, heavy condensed display typography,
 * alternating cream/dark sections with texture, golden accents.
 * Fonts: Bebas Neue (display), Oswald (headings), Lora (body)
 */

export default function ValueForValue() {
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
              href="/about"
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
              About
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

      {/* ===== HERO ===== */}
      <section
        style={{
          backgroundColor: "#f0ece0",
          padding: "5rem 1.5rem 3.5rem",
          textAlign: "center",
          borderBottom: "1px solid #d8d0b8",
        }}
      >
        <p
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 400,
            fontSize: "0.78rem",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            color: "#c8b87a",
            marginBottom: "0.75rem",
          }}
        >
          A Different Kind of Exchange
        </p>
        <h1
          style={{
            fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            lineHeight: 0.95,
            letterSpacing: "0.04em",
            color: "#1a1a1a",
            marginBottom: "1.25rem",
          }}
        >
          Value for Value
        </h1>
        <div
          style={{
            width: "3rem",
            height: "2px",
            backgroundColor: "#c8b87a",
            margin: "0 auto 1.5rem",
          }}
        />
        <p
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: "#444",
            maxWidth: "620px",
            margin: "0 auto",
          }}
        >
          All of my books are offered under a simple idea: if you find value in them, you're invited to return that value in whatever way you can.
        </p>
        <p
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontStyle: "italic",
            fontSize: "0.95rem",
            color: "#777",
            marginTop: "0.75rem",
          }}
        >
          There is no fixed price, no obligation.
        </p>
      </section>

      {/* ===== THREE PILLARS ===== */}
      <section
        style={{
          backgroundColor: "#1a1916",
          backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(200,184,122,0.07) 0%, transparent 70%)",
          padding: "5rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* TIME */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                border: "1px solid #c8b87a",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.25rem",
              }}
            >
              {/* Hourglass icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8b87a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 22h14M5 2h14M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 1 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>
              </svg>
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', Impact, sans-serif",
                fontSize: "2.2rem",
                letterSpacing: "0.1em",
                color: "#c8b87a",
                marginBottom: "0.75rem",
              }}
            >
              Time
            </h2>
            <p
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "0.9rem",
                lineHeight: 1.85,
                color: "#c8c0a8",
              }}
            >
              Reading the book is already part of the exchange. If it stays with you, pass it along. Recommend it. Share it with someone who might need it. A mention online or a post on social platforms helps the book find its way to others.
            </p>
          </div>

          {/* TALENT */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                border: "1px solid #c8b87a",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.25rem",
              }}
            >
              {/* Pen icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8b87a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', Impact, sans-serif",
                fontSize: "2.2rem",
                letterSpacing: "0.1em",
                color: "#c8b87a",
                marginBottom: "0.75rem",
              }}
            >
              Talent
            </h2>
            <p
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "0.9rem",
                lineHeight: 1.85,
                color: "#c8c0a8",
              }}
            >
              If the story sparks something in you, respond to it. Share a thought, a critique, or an error I may have missed. Reviews on Amazon or Goodreads are especially valuable. They shape how the book is received and help others decide whether to read it.
            </p>
          </div>

          {/* TREASURE */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                border: "1px solid #c8b87a",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.25rem",
              }}
            >
              {/* Coin icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8b87a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v2m0 8v2M9.5 9.5C9.5 8.12 10.62 7 12 7s2.5 1.12 2.5 2.5c0 2.5-5 2.5-5 5C9.5 15.88 10.62 17 12 17s2.5-1.12 2.5-2.5"/>
              </svg>
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', Impact, sans-serif",
                fontSize: "2.2rem",
                letterSpacing: "0.1em",
                color: "#c8b87a",
                marginBottom: "0.75rem",
              }}
            >
              Treasure
            </h2>
            <p
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "0.9rem",
                lineHeight: 1.85,
                color: "#c8c0a8",
              }}
            >
              If you feel the book was worth something financially, you're free to support it at whatever level makes sense to you. Your support makes future work possible.
            </p>
          </div>
        </div>

        {/* Closing question */}
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <div
            style={{
              width: "3rem",
              height: "2px",
              backgroundColor: "#c8b87a",
              margin: "0 auto 1.5rem",
            }}
          />
          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontStyle: "italic",
              fontSize: "1.15rem",
              color: "#e8e0c8",
              maxWidth: "480px",
              margin: "0 auto 0.5rem",
            }}
          >
            There is no suggested amount.
          </p>
          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontStyle: "italic",
              fontSize: "1.15rem",
              color: "#c8b87a",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Only the question: what was it worth to you?
          </p>
        </div>
      </section>

      {/* ===== CTA: Ko-fi ===== */}
      <section
        style={{
          backgroundColor: "#f0ece0",
          padding: "4rem 1.5rem",
          textAlign: "center",
          borderBottom: "1px solid #d8d0b8",
        }}
      >
        <h2
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 600,
            fontSize: "1.6rem",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
            marginBottom: "0.5rem",
          }}
        >
          Return Value on Ko-fi
        </h2>
        <div
          style={{
            width: "2.5rem",
            height: "2px",
            backgroundColor: "#c8b87a",
            margin: "0 auto 1.25rem",
          }}
        />
        <p
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: "0.92rem",
            color: "#555",
            lineHeight: 1.75,
            maxWidth: "480px",
            margin: "0 auto 1.75rem",
          }}
        >
          Ko-fi is where you can download all books and audiobooks for free — and where you can choose to support the work if it meant something to you.
        </p>
        <a
          href="https://ko-fi.com/mattbenjamin"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            backgroundColor: "#FF5E5B",
            color: "#ffffff",
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 700,
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            padding: "0.85rem 2.25rem",
            textDecoration: "none",
            boxShadow: "0 4px 20px rgba(255,94,91,0.35)",
            transition: "background-color 0.2s, box-shadow 0.2s, transform 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#e84e4b";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#FF5E5B";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.5 3H5.5C4.12 3 3 4.12 3 5.5v9C3 17.43 5.57 20 8.5 20h7c2.93 0 5.5-2.57 5.5-5.5V5.5C21 4.12 19.88 3 18.5 3zM19 14.5c0 1.93-1.57 3.5-3.5 3.5h-7C6.57 18 5 16.43 5 14.5V5.5C5 5.22 5.22 5 5.5 5h13c.28 0 .5.22.5.5V14.5z"/>
            <path d="M9 8c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z"/>
          </svg>
          Visit Ko-fi
        </a>
      </section>

      {/* ===== UNDER THE HOOD: V4V Substack ===== */}
      <section
        style={{
          backgroundColor: "#eae5d5",
          padding: "4rem 1.5rem",
          textAlign: "center",
          borderBottom: "1px solid #d8d0b8",
        }}
      >
        <p
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#999",
            marginBottom: "0.6rem",
          }}
        >
          Under the Hood
        </p>
        <h2
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 600,
            fontSize: "1.6rem",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
            marginBottom: "0.5rem",
          }}
        >
          The Model in Action
        </h2>
        <div
          style={{
            width: "2.5rem",
            height: "2px",
            backgroundColor: "#c8b87a",
            margin: "0 auto 1.25rem",
          }}
        />
        <p
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: "0.92rem",
            color: "#555",
            lineHeight: 1.8,
            maxWidth: "560px",
            margin: "0 auto 1.75rem",
          }}
        >
          Curious about what Value for Value looks like in practice? The V4V Experiment Substack documents the model as it unfolds — the thinking behind it, what gets returned, and what it reveals about the relationship between creators and their audience.
        </p>
        <a
          href="https://v4ve.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.55rem",
            backgroundColor: "transparent",
            color: "#1a1a1a",
            border: "1px solid #1a1a1a",
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 600,
            fontSize: "0.82rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            padding: "0.75rem 2rem",
            textDecoration: "none",
            transition: "background-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1a1a1a";
            e.currentTarget.style.color = "#f0ece0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#1a1a1a";
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
          </svg>
          Read on Substack
        </a>
        <p
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.72rem",
            color: "#999",
            marginTop: "0.85rem",
            letterSpacing: "0.04em",
          }}
        >
          v4ve.substack.com
        </p>
      </section>

      {/* ===== LEARN MORE: value4value.info ===== */}
      <section
        style={{
          backgroundColor: "#f0ece0",
          padding: "3rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: "0.88rem",
            color: "#888",
            lineHeight: 1.75,
            maxWidth: "480px",
            margin: "0 auto 0.75rem",
          }}
        >
          The Value for Value model was pioneered in the podcasting world. To learn more about its origins and philosophy:
        </p>
        <a
          href="https://value4value.info/about/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#c8b87a",
            textDecoration: "none",
            letterSpacing: "0.06em",
            borderBottom: "1px solid #c8b87a",
            paddingBottom: "1px",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#a89858")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#c8b87a")}
        >
          value4value.info →
        </a>
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
