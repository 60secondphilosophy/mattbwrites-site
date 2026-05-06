/*
 * DESIGN PHILOSOPHY: Vintage Literary Warmth
 * Warm parchment cream backgrounds, heavy condensed display typography,
 * alternating cream/dark sections with texture, golden accents.
 * Fonts: Bebas Neue (display), Oswald (headings), Lora (body)
 */

import { useState } from "react";
import { Search, Youtube, Instagram, ChevronLeft, ChevronRight } from "lucide-react";

// Asset URLs
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663633554144/jEcgBdc7PyJztsAfGFeGpi/hero-bg-mKAqVJrmfDdPHnvrhGS5jz.webp";
const BOOK_ICARUS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663633554144/jEcgBdc7PyJztsAfGFeGpi/book-we-are-icarus-KG8bBbwLZxcPboSzzoKhQ6.webp";
const BOOK_ALEX = "https://d2xsxph8kpxj0f.cloudfront.net/310519663633554144/jEcgBdc7PyJztsAfGFeGpi/book-alex-was-here-eYyfXLC3wfh9VoagaaHAkV.webp";
const BOOK_BACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663633554144/jEcgBdc7PyJztsAfGFeGpi/book-back-to-beginning-3aKdndV5eEeTsLAiM3fdFy.webp";
const DARK_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663633554144/jEcgBdc7PyJztsAfGFeGpi/dark-texture-bg-3vgmafUFFg7xrx6tiNQNoa.webp";
const STARS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663633554144/jEcgBdc7PyJztsAfGFeGpi/stars-bg-5LsJLVi2j8QAtergCaUGJD.webp";
const AUTHOR_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663633554144/jEcgBdc7PyJztsAfGFeGpi/author-photo-oXyXnfuYJPBNPmZvkioN5w.webp";

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
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f0ece0" }}>

      {/* ===== NAVIGATION ===== */}
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
          {/* Nav Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
            className="hidden md:flex"
          >
            {["Home", "Extras", "About", "Blog", "We Are Icarus"].map((item) => (
              <a
                key={item}
                href="#"
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
                onMouseEnter={(e) => (e.currentTarget.style.color = "#666")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              color: "#333",
            }}
          >
            <div style={{ width: "22px", height: "2px", backgroundColor: "#333", marginBottom: "5px" }} />
            <div style={{ width: "22px", height: "2px", backgroundColor: "#333", marginBottom: "5px" }} />
            <div style={{ width: "22px", height: "2px", backgroundColor: "#333" }} />
          </button>

          {/* Right side: Social + Search */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
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
              href="https://www.youtube.com/@60secondphilosophy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#333", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c00")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://www.instagram.com/mattbwrites"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#333", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c13584")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
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
            {["Home", "Extras", "About", "Blog", "We Are Icarus"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#333",
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f0ece0",
          textAlign: "center",
          padding: "5rem 1.5rem 4rem",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(240, 236, 224, 0.55)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#555",
              marginBottom: "0.75rem",
            }}
          >
            Official Website of Author and YouTube Creator
          </p>
          <h1
            style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: "clamp(4rem, 12vw, 9rem)",
              lineHeight: 0.95,
              letterSpacing: "0.04em",
              color: "#1a1a1a",
              margin: "0 auto",
              maxWidth: "900px",
            }}
          >
            Matt Benjamin
          </h1>
        </div>
      </section>

      {/* ===== WE ARE ICARUS FEATURE ===== */}
      <section
        style={{
          backgroundImage: `url(${DARK_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#2d2d2d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "340px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(30, 28, 25, 0.72)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "2rem 1.5rem",
            flexWrap: "wrap",
          }}
        >
          {/* Book Cover */}
          <div
            style={{
              flexShrink: 0,
              boxShadow: "8px 8px 30px rgba(0,0,0,0.6)",
              transform: "rotate(-2deg)",
            }}
          >
            <img
              src={BOOK_ICARUS}
              alt="We Are Icarus book cover"
              style={{ width: "160px", height: "240px", objectFit: "cover", display: "block" }}
            />
          </div>
          {/* Text */}
          <div style={{ textAlign: "center", color: "#e8e0c8" }}>
            <h2
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "2rem",
                color: "#e8e0c8",
                marginBottom: "1.25rem",
              }}
            >
              We Are Icarus
            </h2>
            <a
              href="#"
              style={{
                display: "inline-block",
                backgroundColor: "transparent",
                color: "#e8e0c8",
                border: "1px solid #e8e0c8",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                padding: "0.6rem 2rem",
                textDecoration: "none",
                transition: "background-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#e8e0c8";
                e.currentTarget.style.color = "#1a1a1a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#e8e0c8";
              }}
            >
              Order Now
            </a>
          </div>
        </div>
      </section>

      {/* ===== FREE EXTRAS SECTION ===== */}
      <section
        style={{
          backgroundColor: "#f0ece0",
          padding: "4rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "3rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Stacked book images */}
          <div style={{ position: "relative", width: "180px", height: "220px", flexShrink: 0 }}>
            <img
              src={BOOK_ALEX}
              alt="Alex Was Here book cover"
              style={{
                width: "140px",
                height: "200px",
                objectFit: "cover",
                position: "absolute",
                left: "0",
                top: "0",
                boxShadow: "4px 4px 15px rgba(0,0,0,0.25)",
                transform: "rotate(-4deg)",
              }}
            />
            <img
              src={BOOK_ICARUS}
              alt="We Are Icarus book cover"
              style={{
                width: "130px",
                height: "190px",
                objectFit: "cover",
                position: "absolute",
                right: "0",
                bottom: "0",
                boxShadow: "4px 4px 15px rgba(0,0,0,0.25)",
                transform: "rotate(3deg)",
              }}
            />
          </div>
          {/* Text */}
          <div style={{ maxWidth: "480px" }}>
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#888",
                marginBottom: "0.25rem",
              }}
            >
              Download
            </p>
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "2.5rem",
                color: "#1a1a1a",
                marginBottom: "0.5rem",
              }}
            >
              Free Extras!
            </h2>
            <div
              style={{
                width: "2.5rem",
                height: "2px",
                backgroundColor: "#c8b87a",
                marginBottom: "1rem",
              }}
            />
            <p
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "#444",
                marginBottom: "1.5rem",
              }}
            >
              Both We Are Icarus and Alex Was Here have bonus e-books with extra scenes, commentary and more. Click the button below to access!
            </p>
            <a
              href="#"
              style={{
                display: "inline-block",
                backgroundColor: "#1a1a1a",
                color: "#ffffff",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "0.65rem 1.75rem",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
            >
              Extra Content
            </a>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER SECTION ===== */}
      <section
        style={{
          backgroundColor: "#ede8d8",
          padding: "3.5rem 1.5rem",
          textAlign: "center",
          borderTop: "1px solid #d8d0b8",
          borderBottom: "1px solid #d8d0b8",
        }}
      >
        <h2
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 600,
            fontSize: "1.75rem",
            color: "#1a1a1a",
            marginBottom: "1.5rem",
            letterSpacing: "0.02em",
          }}
        >
          Subscribe to My Newsletter
        </h2>
        {submitted ? (
          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "1rem",
              color: "#555",
            }}
          >
            Thanks for submitting!
          </p>
        ) : (
          <form
            onSubmit={handleSignUp}
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                border: "1px solid #c0b898",
                backgroundColor: "#f8f4ea",
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "0.9rem",
                color: "#444",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.75rem",
                backgroundColor: "#1a1a1a",
                color: "#ffffff",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
            >
              Sign Up
            </button>
          </form>
        )}
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section
        style={{
          backgroundImage: `url(${DARK_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#2d2d2d",
          position: "relative",
          minHeight: "420px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(25, 22, 18, 0.78)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "stretch",
            maxWidth: "1100px",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          {/* Author Photo */}
          <div
            style={{
              flex: "0 0 45%",
              minWidth: "280px",
              overflow: "hidden",
              maxHeight: "480px",
            }}
          >
            <img
              src={AUTHOR_PHOTO}
              alt="Matt Benjamin"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                filter: "sepia(30%) contrast(1.05)",
                display: "block",
              }}
            />
          </div>
          {/* Text */}
          <div
            style={{
              flex: "1 1 300px",
              padding: "3rem 2.5rem",
              color: "#e8e0c8",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "2.2rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#e8e0c8",
                marginBottom: "0.75rem",
                lineHeight: 1.1,
              }}
            >
              About Matt Benjamin
            </h2>
            <div
              style={{
                width: "2.5rem",
                height: "2px",
                backgroundColor: "#c8b87a",
                marginBottom: "1.25rem",
              }}
            />
            <p
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "0.9rem",
                lineHeight: 1.85,
                color: "#d8d0b8",
                textAlign: "justify",
              }}
            >
              Matt Benjamin studied the humanities in college and grad school. Because of that, he now owns a lawncare business. But when he's not mowing lawns (and sometimes when he is), he is crafting tales that force his readers to think deeply. Drawing from his studies of ancient philosophy and the Bible, Matt writes to challenge the assumptions we make about modern life with stories that are true, good, and beautiful. His debut novel "We Are Icarus" explores where our technological society might be heading, and what we can do to prevent the consequences of our current trajectory. Matt also runs a YouTube channel with over 20K subscribers: 60 Second Philosophy.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MATT BENJAMIN'S WORK ===== */}
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
            fontWeight: 700,
            fontSize: "2rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#1a1a1a",
            marginBottom: "0.5rem",
          }}
        >
          Matt Benjamin's Work
        </h2>
        <div
          style={{
            width: "2.5rem",
            height: "2px",
            backgroundColor: "#c8b87a",
            margin: "0 auto 2.5rem",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* Alex Was Here */}
          <WorkItem
            image={BOOK_ALEX}
            title="Alex Was Here"
            buttonLabel="Amazon Page"
            buttonHref="#"
          />
          {/* We Are Icarus */}
          <WorkItem
            image={BOOK_ICARUS}
            title="We Are Icarus"
            buttonLabel="More Info"
            buttonHref="#"
          />
          {/* Back to the Beginning */}
          <WorkItem
            image={BOOK_BACK}
            title="Back to the Beginning"
            buttonLabel="Amazon Page"
            buttonHref="#"
          />
          {/* YouTube */}
          <WorkItem
            isYoutube
            title="Youtube"
            buttonLabel="My Channel"
            buttonHref="https://www.youtube.com/@60secondphilosophy"
          />
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section
        style={{
          backgroundImage: `url(${STARS_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#1a1a1a",
          padding: "4rem 1.5rem",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(15, 14, 12, 0.7)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "1.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#c8b87a",
              marginBottom: "0.5rem",
            }}
          >
            What Readers Are Saying
          </h2>
          <div
            style={{
              width: "2.5rem",
              height: "2px",
              backgroundColor: "#c8b87a",
              margin: "0 auto 2.5rem",
            }}
          />

          {/* Testimonial carousel */}
          <div
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <button
              onClick={prevTestimonial}
              style={{
                background: "none",
                border: "none",
                color: "#e8e0c8",
                cursor: "pointer",
                padding: "0.5rem",
                flexShrink: 0,
                opacity: 0.7,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              <ChevronLeft size={24} />
            </button>

            <div
              style={{
                border: "1px solid rgba(232, 224, 200, 0.4)",
                padding: "2rem 2.5rem",
                flex: 1,
              }}
            >
              <p
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  lineHeight: 1.85,
                  color: "#e8e0c8",
                  marginBottom: "1rem",
                }}
              >
                {testimonials[currentTestimonial].text}
              </p>
              <div
                style={{
                  width: "2rem",
                  height: "1px",
                  backgroundColor: "#c8b87a",
                  margin: "0 auto 0.5rem",
                }}
              />
              <p
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "0.78rem",
                  letterSpacing: "0.08em",
                  color: "#c8b87a",
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
                color: "#e8e0c8",
                cursor: "pointer",
                padding: "0.5rem",
                flexShrink: 0,
                opacity: 0.7,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "1.5rem",
            }}
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: i === currentTestimonial ? "#c8b87a" : "rgba(200, 184, 122, 0.35)",
                  cursor: "pointer",
                  padding: 0,
                  transition: "background-color 0.2s",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        style={{
          backgroundColor: "#f0ece0",
          borderTop: "1px solid #d8d0b8",
          padding: "2rem 1.5rem",
          textAlign: "center",
        }}
      >
        <a
          href="mailto:60secondphilosophy@gmail.com"
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.85rem",
            color: "#555",
            textDecoration: "none",
            display: "block",
            marginBottom: "0.75rem",
          }}
        >
          60secondphilosophy@gmail.com
        </a>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <a
            href="https://www.youtube.com/@60secondphilosophy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#555", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c00")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            <Youtube size={18} />
          </a>
          <a
            href="https://www.instagram.com/mattbwrites"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#555", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c13584")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            <Instagram size={18} />
          </a>
        </div>
        <p
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.75rem",
            color: "#888",
          }}
        >
          ©2023 by Matthew Benjamin.
        </p>
      </footer>
    </div>
  );
}

// Work item component
function WorkItem({
  image,
  title,
  buttonLabel,
  buttonHref,
  isYoutube,
}: {
  image?: string;
  title: string;
  buttonLabel: string;
  buttonHref: string;
  isYoutube?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
        width: "180px",
      }}
    >
      {isYoutube ? (
        <div
          style={{
            width: "180px",
            height: "220px",
            backgroundColor: "#f8f4ea",
            border: "1px solid #d8d0b8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "56px",
              backgroundColor: "#ff0000",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "14px solid transparent",
                borderBottom: "14px solid transparent",
                borderLeft: "22px solid white",
                marginLeft: "4px",
              }}
            />
          </div>
        </div>
      ) : (
        <img
          src={image}
          alt={title}
          style={{
            width: "180px",
            height: "220px",
            objectFit: "cover",
            boxShadow: "3px 3px 12px rgba(0,0,0,0.2)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform = "translateY(-4px)";
            (e.currentTarget as HTMLImageElement).style.boxShadow = "5px 8px 20px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLImageElement).style.boxShadow = "3px 3px 12px rgba(0,0,0,0.2)";
          }}
        />
      )}
      <p
        style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "0.9rem",
          color: "#333",
          textAlign: "center",
        }}
      >
        {title}
      </p>
      <a
        href={buttonHref}
        target={isYoutube ? "_blank" : undefined}
        rel={isYoutube ? "noopener noreferrer" : undefined}
        style={{
          display: "inline-block",
          border: "1px solid #555",
          color: "#333",
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 500,
          fontSize: "0.72rem",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          padding: "0.35rem 1rem",
          textDecoration: "none",
          transition: "background-color 0.2s, color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#1a1a1a";
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.borderColor = "#1a1a1a";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#333";
          e.currentTarget.style.borderColor = "#555";
        }}
      >
        {buttonLabel}
      </a>
    </div>
  );
}
