/*
 * DESIGN PHILOSOPHY: Vintage Literary Warmth
 * Warm parchment cream backgrounds, heavy condensed display typography,
 * alternating cream/dark sections with texture, golden accents.
 * Fonts: Bebas Neue (display), Oswald (headings), Lora (body)
 */

import { useState } from "react";
import { Youtube, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import NavBar from "@/components/NavBar";
import { useSEO } from "@/hooks/useSEO";

// Asset URLs
const HERO_BG = "/images/hero-bg.webp";
const BOOK_ICARUS = "/images/real-icarus-cover.webp";
const BOOK_ALEX = "/images/real-alex-cover.webp";
const BOOK_BACK = "/images/real-back-cover.webp";
const DARK_BG = "/images/dark-texture-bg.webp";
const STARS_BG = "/images/stars-bg.webp";
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
  useSEO({
    title: "Home",
    description: "Matt Benjamin is an author of fiction and Christian non-fiction. Find his books and audiobooks on Ko-fi.",
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f0ece0" }}>

      {/* ===== NAVIGATION ===== */}
      <NavBar />

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
            Official Website of Author
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

      {/* ===== KO-FI SHOP FOCAL POINT ===== */}
      <section
        style={{
          backgroundImage: `url(${DARK_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#2d2d2d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "420px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(22, 20, 16, 0.78)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "3.5rem",
            maxWidth: "960px",
            margin: "0 auto",
            padding: "3rem 1.5rem",
            flexWrap: "wrap",
          }}
        >
          {/* Stacked book covers — four books fanned */}
          <div style={{ position: "relative", width: "260px", height: "270px", flexShrink: 0 }}>
            {/* Back to the Beginning — far left, rotated back */}
            <img
              src={BOOK_BACK}
              alt="Back to the Beginning"
              style={{
                width: "115px",
                height: "175px",
                objectFit: "cover",
                position: "absolute",
                left: "0",
                top: "45px",
                boxShadow: "6px 6px 20px rgba(0,0,0,0.7)",
                transform: "rotate(-8deg)",
                zIndex: 1,
              }}
            />
            {/* Alex Was Here — left-center */}
            <img
              src={BOOK_ALEX}
              alt="Alex Was Here"
              style={{
                width: "115px",
                height: "175px",
                objectFit: "cover",
                position: "absolute",
                left: "45px",
                top: "20px",
                boxShadow: "6px 6px 20px rgba(0,0,0,0.7)",
                transform: "rotate(-3deg)",
                zIndex: 2,
              }}
            />
            {/* Nathan Was Gone — right-center */}
            <img
              src="/images/nathan-was-gone.webp"
              alt="Nathan Was Gone"
              style={{
                width: "115px",
                height: "175px",
                objectFit: "cover",
                position: "absolute",
                right: "45px",
                top: "20px",
                boxShadow: "6px 6px 20px rgba(0,0,0,0.7)",
                transform: "rotate(3deg)",
                zIndex: 2,
              }}
            />
            {/* We Are Icarus — far right, front and center */}
            <img
              src={BOOK_ICARUS}
              alt="We Are Icarus"
              style={{
                width: "125px",
                height: "190px",
                objectFit: "cover",
                position: "absolute",
                right: "0",
                top: "40px",
                boxShadow: "8px 8px 28px rgba(0,0,0,0.85)",
                transform: "rotate(7deg)",
                zIndex: 3,
              }}
            />
          </div>

          {/* Text + CTA */}
          <div style={{ textAlign: "center", color: "#e8e0c8", maxWidth: "420px" }}>
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400,
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#c8b87a",
                marginBottom: "0.6rem",
              }}
            >
              Books &amp; Audio Versions
            </p>
            <h2
              style={{
                fontFamily: "'Bebas Neue', Impact, sans-serif",
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                lineHeight: 1,
                letterSpacing: "0.04em",
                color: "#e8e0c8",
                marginBottom: "0.5rem",
              }}
            >
              Books on Ko-fi
            </h2>
            <div
              style={{
                width: "2.5rem",
                height: "2px",
                backgroundColor: "#c8b87a",
                margin: "0 auto 1.1rem",
              }}
            />
            <p
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "0.92rem",
                lineHeight: 1.75,
                color: "#c8c0a8",
                marginBottom: "1.75rem",
              }}
            >
              Shop ebooks and audiobooks directly from the author, with prices starting at free.
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
                fontSize: "0.88rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                padding: "0.85rem 2.25rem",
                textDecoration: "none",
                border: "none",
                boxShadow: "0 4px 20px rgba(255,94,91,0.45)",
                transition: "background-color 0.2s, box-shadow 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#e84e4b";
                e.currentTarget.style.boxShadow = "0 6px 28px rgba(255,94,91,0.6)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FF5E5B";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(255,94,91,0.45)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Ko-fi cup icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 3H5.5C4.12 3 3 4.12 3 5.5v9C3 17.43 5.57 20 8.5 20h7c2.93 0 5.5-2.57 5.5-5.5V5.5C21 4.12 19.88 3 18.5 3zM19 14.5c0 1.93-1.57 3.5-3.5 3.5h-7C6.57 18 5 16.43 5 14.5V5.5C5 5.22 5.22 5 5.5 5h13c.28 0 .5.22.5.5V14.5z"/>
                <path d="M9 8c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z"/>
              </svg>
              Get Books on Ko-fi
            </a>
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.72rem",
                color: "#888",
                marginTop: "0.9rem",
                letterSpacing: "0.04em",
              }}
            >
              ko-fi.com/mattbenjamin
            </p>
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
            href="/bonus"
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
              View Bonus Material
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
            marginBottom: "0.5rem",
            letterSpacing: "0.02em",
          }}
        >
          Subscribe to My Newsletter
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
            marginBottom: "1.75rem",
            lineHeight: 1.7,
          }}
        >
          Get updates on new books, audiobooks, and ideas straight to your inbox.
        </p>
        <a
          href="https://matt-benjamin-z0yd2c.subscribepage.io/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#1a1a1a",
            color: "#ffffff",
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 600,
            fontSize: "0.82rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            padding: "0.8rem 2.5rem",
            textDecoration: "none",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
        >
          Sign Up
        </a>
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
              Matt Benjamin studied the humanities in college and grad school. Because of that, he now owns a lawncare business. But when he's not mowing lawns (and sometimes when he is), he is crafting tales that force his readers to think deeply. Drawing from his studies of ancient philosophy and the Bible, Matt writes to challenge the assumptions we make about modern life with stories that are true, good, and beautiful. His debut novel "We Are Icarus" explores where our technological society might be heading, and what we can do to prevent the consequences of our current trajectory. Matt also runs a YouTube channel with over 20K subscribers: <a href="https://www.youtube.com/@60SPH" target="_blank" rel="noopener noreferrer" style={{ color: "#c8b87a", textDecoration: "none" }}>60 Second Philosophy</a>.
            </p>
            <a
              href="/about"
              style={{
                display: "inline-block",
                marginTop: "1.25rem",
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#c8b87a",
                textDecoration: "none",
                borderBottom: "1px solid rgba(200,184,122,0.4)",
                paddingBottom: "1px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e8d898")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#c8b87a")}
            >
              Full Bio →
            </a>
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
            buttonLabel="$1+ on Ko-fi"
            buttonHref="https://ko-fi.com/s/0c8805122a"
          />
          {/* Nathan Was Gone */}
          <WorkItem
            image="/images/nathan-was-gone.webp"
            title="Nathan Was Gone"
            buttonLabel="$5+ on Ko-fi"
            buttonHref="https://ko-fi.com/s/de0b484212"
          />
          {/* We Are Icarus */}
          <WorkItem
            image={BOOK_ICARUS}
            title="We Are Icarus"
            buttonLabel="$5+ on Ko-fi"
            buttonHref="https://ko-fi.com/s/2d5d9d477e"
          />
          {/* Back to the Beginning */}
          <WorkItem
            image={BOOK_BACK}
            title="Back to the Beginning"
            buttonLabel="Free on Ko-fi"
            buttonHref="https://ko-fi.com/s/6036e7da97"
          />
          {/* YouTube */}
          <WorkItem
            isYoutube
            title="Youtube"
            buttonLabel="My Channel"
            buttonHref="https://www.youtube.com/@60SPH"
          />
          {/* Short Stories */}
          <WorkItem
            isSubstack
            title="Short Stories"
            buttonLabel="Read on Substack"
            buttonHref="https://hardlyaclearview.substack.com/"
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
        {/* Ko-fi footer link */}
        <a
          href="https://ko-fi.com/mattbenjamin"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.82rem",
            color: "#FF5E5B",
            textDecoration: "none",
            marginBottom: "0.5rem",
            letterSpacing: "0.04em",
            fontWeight: 600,
          }}
        >
          ☕ Get books on Ko-fi
        </a>
        <br />
        <a
          href="https://hardlyaclearview.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.82rem",
            color: "#FF6719",
            textDecoration: "none",
            marginBottom: "1rem",
            letterSpacing: "0.04em",
            fontWeight: 600,
          }}
        >
          ✍ Short Stories on Substack
        </a>
        <a
          href="mailto:matt@mattbwrites.com"
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.85rem",
            color: "#555",
            textDecoration: "none",
            display: "block",
            marginBottom: "0.75rem",
          }}
        >
          matt@mattbwrites.com
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
            href="https://www.youtube.com/@60SPH"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#555", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c00")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            <Youtube size={18} />
          </a>
          <a
            href="https://www.instagram.com/mattbwrites/"
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
          ©2026 by Matthew Benjamin.
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
  isSubstack,
}: {
  image?: string;
  title: string;
  buttonLabel: string;
  buttonHref: string;
  isYoutube?: boolean;
  isSubstack?: boolean;
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
      ) : isSubstack ? (
        <img
          src={SUBSTACK_IMG}
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
        target="_blank"
        rel="noopener noreferrer"
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
