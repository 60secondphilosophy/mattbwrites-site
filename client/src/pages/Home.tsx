/*
 * DESIGN PHILOSOPHY: Vintage Literary Warmth
 * Warm parchment cream backgrounds, heavy condensed display typography,
 * alternating cream/dark sections with texture, golden accents.
 * Fonts: Bebas Neue (display), Oswald (headings), Lora (body)
 */

import { useState } from "react";
import { Search, Youtube, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";

// Asset URLs
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663633554144/jEcgBdc7PyJztsAfGFeGpi/hero-bg-mKAqVJrmfDdPHnvrhGS5jz.webp";
const BOOK_ICARUS = "/images/real-icarus-cover.webp";
const BOOK_ALEX = "/images/real-alex-cover.webp";
const BOOK_BACK = "/images/real-back-cover.webp";
const DARK_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663633554144/jEcgBdc7PyJztsAfGFeGpi/dark-texture-bg-3vgmafUFFg7xrx6tiNQNoa.webp";
const STARS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663633554144/jEcgBdc7PyJztsAfGFeGpi/stars-bg-5LsJLVi2j8QAtergCaUGJD.webp";
const AUTHOR_PHOTO = "/images/real-author-photo.webp";
const SUBSTACK_IMG = "/images/hardly-a-clear-view.webp";

const testimonials = [
  {
    text: "From the moment I picked up 'We Are Icarus' I was mesmerised. My intention to read a few chapters and then return to the book another day when I had more time to read was futile… as the story quickly became far too gripping to put down.",
    author: "— Amazon Reviewer"
  },
  {
    text: "Matt Benjamin has crafted a thought-provoking tale that challenges everything we take for granted about modern technology. A must-read for anyone who cares about where our society is heading.",
    author: "— Goodreads Reviewer"
  },
  {
    text: "We Are Icarus is one of those rare novels that stays with you long after you've finished it. The philosophical depth combined with a gripping narrative is extraordinary.",
    author: "— Book Club Review"
  },
  {
    text: "Alex Was Here is a heartfelt, funny, and deeply moving story. Matt Benjamin writes with such authenticity and warmth that you feel like you're right there alongside the characters.",
    author: "— Amazon Reviewer"
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f0ece0" }}>
      <Header />

      {/* Right side: Social + Search */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", position: "fixed", top: "1rem", right: "1.5rem", zIndex: 101 }}>
        {/* Search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #c0b898",
            backgroundColor: "#f8f4ea",
            padding: "0.25rem 0.75rem",
            gap: "0.4rem",
          }}
        >
          <Search size={14} color="#888" />
          <input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              border: "none",
              background: "transparent",
              outline: "none",
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.78rem",
              color: "#555",
              width: "120px",
            }}
          />
        </div>
        {/* Social Icons */}
        <a
          href="https://www.youtube.com/@60SPH"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#333", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#c00")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
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
        >
          <Instagram size={18} />
        </a>
        {/* Substack icon */}
        <a
          href="https://hardlyaclearview.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#333", transition: "color 0.2s", display: "flex", alignItems: "center" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6719")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
          title="Short Stories on Substack"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
          </svg>
        </a>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "6rem 1.5rem",
          textAlign: "center",
          position: "relative",
          marginTop: "56px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#d4af37",
              marginBottom: "1rem",
            }}
          >
            Official Website of Author
          </p>
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              fontWeight: 400,
              letterSpacing: "0.04em",
              color: "#fff",
              lineHeight: 1,
              margin: "0 0 2rem 0",
            }}
          >
            MATT BENJAMIN
          </h1>
          <p
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: "#e8e0cc",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Exploring the intersection of technology, humanity, and meaning through dystopian fiction and philosophical inquiry.
          </p>
        </div>
      </section>

      {/* ===== FEATURED BOOKS ===== */}
      <section style={{ backgroundColor: "#f0ece0", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              letterSpacing: "0.04em",
              color: "#333",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            Featured Works
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {[BOOK_ICARUS, BOOK_ALEX, BOOK_BACK].map((cover, idx) => (
              <div
                key={idx}
                style={{
                  boxShadow: "0 20px 60px rgba(0,0,0,0.25), 0 8px 20px rgba(0,0,0,0.12)",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <img src={cover} alt={`Book ${idx + 1}`} style={{ width: "100%", display: "block" }} />
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a
              href="/books"
              style={{
                display: "inline-block",
                background: "#333",
                color: "#fff",
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                padding: "0.75rem 2rem",
                borderRadius: "2px",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#555";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#333";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View All Books
            </a>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section style={{ backgroundColor: "#2d2d2d", padding: "5rem 1.5rem", color: "#e8e0cc" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              letterSpacing: "0.04em",
              color: "#d4af37",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            What Readers Say
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              minHeight: "200px",
            }}
          >
            <button
              onClick={prevTestimonial}
              style={{
                background: "none",
                border: "none",
                color: "#d4af37",
                cursor: "pointer",
                fontSize: "2rem",
                padding: "0.5rem",
              }}
            >
              <ChevronLeft size={32} />
            </button>

            <div style={{ flex: 1, textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}
              >
                "{testimonials[currentTestimonial].text}"
              </p>
              <p
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#d4af37",
                }}
              >
                {testimonials[currentTestimonial].author}
              </p>
            </div>

            <button
              onClick={nextTestimonial}
              style={{
                background: "none",
                border: "none",
                color: "#d4af37",
                cursor: "pointer",
                fontSize: "2rem",
                padding: "0.5rem",
              }}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ backgroundColor: "#f0ece0", padding: "3rem 1.5rem", textAlign: "center", borderTop: "1px solid #d8d0b8" }}>
        <p
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.8rem",
            color: "#888",
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} Matt Benjamin. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
