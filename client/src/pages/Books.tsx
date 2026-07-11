/**
 * Books Page — mattbwrites.com
 * Design: Vintage Literary Warmth
 * - Parchment cream (#f5f0e8) background with dark sections
 * - Bebas Neue for display, Oswald for headings, Lora for body
 * - Gold (#c8b87a) accents throughout
 * - Each book gets a full alternating section with cover, description, reviews
 */

import { Link } from "wouter";
import NavBar from "@/components/NavBar";
import { useSEO } from "@/hooks/useSEO";

const BOOK_ICARUS = "/images/real-icarus-cover.webp";
const BOOK_ALEX = "/images/real-alex-cover.webp";
const BOOK_BACK = "/images/real-back-cover.webp";
const BOOK_NATHAN = "/images/nathan-was-gone.webp";
const KOFI_URL = "https://ko-fi.com/mattbenjamin"; // fallback

interface ReviewQuote {
  text: string;
  reviewer: string;
  stars: number;
}

interface Book {
  id: string;
  title: string;
  subtitle?: string;
  series?: string;
  genre: string;
  pages: number;
  published: string;
  rating: number;
  ratingCount: number;
  cover: string;
  description: string;
  reviews: ReviewQuote[];
  dark?: boolean;
  goodreadsUrl: string;
  kofiUrl: string;
  price: string;
}

const BOOKS: Book[] = [
  {
    id: "we-are-icarus",
    title: "We Are Icarus",
    genre: "Sci-Fi Dystopian",
    pages: 262,
    published: "March 2024",
    rating: 4.38,
    ratingCount: 34,
    cover: BOOK_ICARUS,
    dark: true,
    goodreadsUrl: "https://www.goodreads.com/book/show/208887598-we-are-icarus",
    kofiUrl: "https://ko-fi.com/s/2d5d9d477e",
    price: "$5+",
    description:
      "It's the perfect world — be anyone, do anything. The only cost? Your humanity.\n\nIcarus believes he's happy. And why wouldn't he be? Each day in the COR, a virtual world indistinguishable from reality, was exactly what he wanted. No sickness, no hunger, no pain — only thrilling experiences and unfettered pleasures.\n\nBut when an unexpected meeting with a beautiful woman leaves him questioning if he can ever be truly happy inside the COR, he begins a quest for answers. Answers the government, his friends, and even parts of himself will do anything to keep hidden.\n\nTo stop him from escaping into the Void.\n\nFor fans of 1984, Brave New World, and The Matrix.",
    reviews: [
      {
        text: "I wasn't expecting to rethink life and society at the end of it but here I am now. It's not often that you finish a dystopia novel and feel happy at the end of it, but this one completely changed my expectations.",
        reviewer: "Julie",
        stars: 5,
      },
      {
        text: "A dystopian worthy of the genre. It is one of the first contemporary books I have read in a long time that has the same feel as some of the original dystopian books like Brave New World and 1984.",
        reviewer: "Goodreads Reviewer",
        stars: 5,
      },
      {
        text: "This dystopian science fiction novel gave me vibes along the lines of Black Mirror, Equilibrium, and The Matrix as well as The Giver and 1984. I foresee this being an incredible option for book clubs.",
        reviewer: "Vanessa S.",
        stars: 5,
      },
    ],
  },
  {
    id: "alex-was-here",
    title: "Alex Was Here",
    subtitle: "Alex and Nathan, Book 1",
    series: "Alex and Nathan",
    genre: "Coming-of-Age / YA Fiction",
    pages: 257,
    published: "September 2025",
    rating: 4.5,
    ratingCount: 10,
    cover: BOOK_ALEX,
    dark: false,
    goodreadsUrl: "https://www.goodreads.com/book/show/240073588-alex-was-here",
    kofiUrl: "https://ko-fi.com/s/0c8805122a",
    price: "$1+",
    description:
      "Two teens. A rock in the woods. And Chop Suey.\n\nFifteen-year-old Nathan Green is homeschooled and restless, pedaling through the woods in search of something, anything, to give his summer meaning. Then he finds Alex, who pulls Nathan into her world — vibrant, chaotic, hurt.\n\nTheir friendship saves Nathan's summer, but can it save Alex's life?\n\nAlex Was Here faithfully chronicles the nostalgia of teenage years in the early 2000s and the sort of friendship that never gives up.",
    reviews: [
      {
        text: "This was my first read from Matt Benjamin, but it certainly won't be my last. This nostalgic coming of age book warmed my heart in all the best ways. Don't sit on this book — add it to your TBR and read it as soon as you can. You won't regret it.",
        reviewer: "Heather",
        stars: 5,
      },
      {
        text: "Alex Was Here is a beautifully written coming of age story that I devoured. Matt Benjamin has done a remarkable job at creating an emotional page-turner. It is clear that this was written with passion — there was a layer to the writing that was obvious Matt poured parts of his soul into it.",
        reviewer: "Vanessa S.",
        stars: 5,
      },
      {
        text: "A beautifully written coming-of-age story that's full of heart… and a touch of heartache. Matt Benjamin has clearly poured his heart and soul into this story, and it shows on every page.",
        reviewer: "Abigail H.",
        stars: 5,
      },
    ],
  },
  {
    id: "nathan-was-gone",
    title: "Nathan Was Gone",
    subtitle: "Alex and Nathan, Book 2",
    series: "Alex and Nathan",
    genre: "Coming-of-Age / YA Fiction",
    pages: 216,
    published: "February 2026",
    rating: 4.8,
    ratingCount: 5,
    cover: BOOK_NATHAN,
    dark: true,
    goodreadsUrl: "https://www.goodreads.com/book/show/247253585-nathan-was-gone",
    kofiUrl: "https://ko-fi.com/s/de0b484212",
    price: "$5+",
    description:
      "He broke her heart. Now he's broken, and only she can save him.\n\nStruggling to define her relationship with her high school best friend, Alex fears her plans for life are in jeopardy. Nate promised he'd come back to her after college, but day by day the Nate who made that promise is disappearing. Starting her career as a nurse, Alex watches as Nate loses everything—including her.\n\nBut as Alex works to start fresh, Nate's addiction lands him in a hospital bed and pulls her back into his orbit as a caretaker.\n\nNow, despite a budding relationship with someone new, Alex holds the ruins of her former-best-friend's life in her hands— knowing she will have to choose between the past she still loves and the future she is building.\n\nNathan Was Gone is a story of love, addiction, and the power of old bonds.",
    reviews: [
      {
        text: "I tore through this ARC after reading Alex Was Here and being completely pulled into the world of Alex and Nate. Matt Benjamin once again does an amazing job keeping the emotion front and center in his writing. I'm not sure what he has up his sleeve next, but I can't wait to find out.",
        reviewer: "Marci C.",
        stars: 5,
      },
      {
        text: "I do NOT give 5 star ratings often. It has to be a book that leaves me with strong feelings and will make me think about it for days to come. This book has done just that! I loved everything about it!",
        reviewer: "Lisa M.",
        stars: 5,
      },
      {
        text: "What a beautiful read. Filled with emotion, it is a journey of hurt, friendship, strength, and forgiveness. I was heartbroken at chapter one and went on an emotional roller coaster throughout.",
        reviewer: "Vanessa S.",
        stars: 5,
      },
    ],
  },
  {
    id: "back-to-the-beginning",
    title: "Back to the Beginning",
    subtitle: "Wisdom from Genesis for Modern Life",
    genre: "Christian Non-Fiction",
    pages: 103,
    published: "October 2024",
    rating: 4.14,
    ratingCount: 7,
    cover: BOOK_BACK,
    dark: false,
    goodreadsUrl: "https://www.goodreads.com/book/show/218697262-back-to-the-beginning",
    kofiUrl: "https://ko-fi.com/s/6036e7da97",
    price: "Free",
    description:
      "What does it mean to live well?\n\nIn a world where modern distractions cloud our sense of purpose, Back to the Beginning offers a refreshing return to the timeless wisdom found in the early chapters of Genesis. This book delves into the foundational aspects of the human experience — creativity, work, rest, and community.\n\nDrawing from the creation narrative, Back to the Beginning challenges readers to look beyond moral imperatives and discover a way of life that aligns with God's original design for humanity. Whether you are seeking to enhance your spiritual journey, find balance in your daily life, or understand your place in the larger story of creation, this book offers a perspective that is both ancient and profoundly relevant today.",
    reviews: [
      {
        text: "Matt Benjamin has a talent for producing short sentences and paragraphs that condense super complex ideas into small statements. He does not waste your time. It's a must read for anyone looking to dip their toes into the topic of humans being created and/or the start of Genesis.",
        reviewer: "Stephen P.",
        stars: 5,
      },
      {
        text: "This book was excellent from start to finish! Every point is communicated in a way that is easy to understand and grasp. The message thoroughly resonated with me. I'll be recommending this one to everyone I know!",
        reviewer: "Abigail H.",
        stars: 5,
      },
      {
        text: "Very insightful and well written. I had a hard time putting it down. It definitely left me thinking for days after.",
        reviewer: "Anne M.",
        stars: 5,
      },
    ],
  },
];

function StarRating({ rating, count }: { rating: number; count: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.25 && rating - full < 0.75;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
      <div style={{ display: "flex", gap: "2px" }}>
        {Array.from({ length: full }).map((_, i) => (
          <span key={`f${i}`} style={{ color: "#c8b87a", fontSize: "1rem" }}>★</span>
        ))}
        {half && <span style={{ color: "#c8b87a", fontSize: "1rem" }}>½</span>}
        {Array.from({ length: empty }).map((_, i) => (
          <span key={`e${i}`} style={{ color: "#c8b87a44", fontSize: "1rem" }}>★</span>
        ))}
      </div>
      <span
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: "0.8rem",
          color: "#c8b87a",
          letterSpacing: "0.04em",
        }}
      >
        {rating.toFixed(2)} · {count} ratings on Goodreads
      </span>
    </div>
  );
}

function ReviewCard({ review, dark }: { review: ReviewQuote; dark: boolean }) {
  return (
    <div
      style={{
        borderLeft: `3px solid ${dark ? "#c8b87a" : "#8b6914"}`,
        paddingLeft: "1.25rem",
        marginBottom: "1.5rem",
      }}
    >
      <p
        style={{
          fontFamily: "'Lora', serif",
          fontSize: "0.9rem",
          fontStyle: "italic",
          lineHeight: 1.7,
          color: dark ? "#d8d0b8" : "#4a3f2f",
          margin: "0 0 0.5rem 0",
        }}
      >
        "{review.text}"
      </p>
      <p
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: "0.72rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: dark ? "#c8b87a" : "#8b6914",
          margin: 0,
        }}
      >
        — {review.reviewer}
        {" · "}
        {"★".repeat(review.stars)}
      </p>
    </div>
  );
}

function BookSection({ book, index }: { book: Book; index: number }) {
  const isEven = index % 2 === 0;
  const bg = book.dark ? "#1a1612" : "#f5f0e8";
  const textColor = book.dark ? "#e8e0cc" : "#2a1f14";
  const subColor = book.dark ? "#a09070" : "#6b5a3e";
  const dividerColor = book.dark ? "#c8b87a" : "#8b6914";

  return (
    <section
      id={book.id}
      style={{
        background: bg,
        padding: "5rem 0",
        borderBottom: `1px solid ${book.dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)"}`,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: isEven ? "320px 1fr" : "1fr 320px",
          gap: "4rem",
          alignItems: "start",
        }}
        className="books-grid"
      >
        {/* Cover */}
        <div
          style={{
            order: isEven ? 0 : 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              boxShadow: book.dark
                ? "0 20px 60px rgba(0,0,0,0.7), 0 8px 20px rgba(0,0,0,0.5)"
                : "0 20px 60px rgba(0,0,0,0.25), 0 8px 20px rgba(0,0,0,0.12)",
              borderRadius: "4px",
              overflow: "hidden",
              width: "100%",
              maxWidth: "280px",
            }}
          >
            <img
              src={book.cover}
              alt={book.title}
              style={{ width: "100%", display: "block" }}
            />
          </div>
          <a
            href={book.kofiUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#FF5E5B",
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
              width: "100%",
              maxWidth: "280px",
              textAlign: "center",
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e04a47";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FF5E5B";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            ☕ {book.price} on Ko-fi
          </a>
          <StarRating rating={book.rating} count={book.ratingCount} />
          <a
            href={book.goodreadsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: book.dark ? "#c8b87a" : "#8b6914",
              textDecoration: "none",
              borderBottom: `1px solid ${book.dark ? "rgba(200,184,122,0.4)" : "rgba(139,105,20,0.4)"}`,
              paddingBottom: "1px",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = book.dark ? "#e8d898" : "#5a3d00";
              e.currentTarget.style.borderBottomColor = book.dark ? "rgba(232,216,152,0.8)" : "rgba(90,61,0,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = book.dark ? "#c8b87a" : "#8b6914";
              e.currentTarget.style.borderBottomColor = book.dark ? "rgba(200,184,122,0.4)" : "rgba(139,105,20,0.4)";
            }}
          >
            View on Goodreads ↗
          </a>
        </div>

        {/* Content */}
        <div style={{ order: isEven ? 1 : 0 }}>
          {/* Genre tag */}
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: dividerColor,
              margin: "0 0 0.5rem 0",
            }}
          >
            {book.genre}
            {book.series && ` · ${book.series}`}
          </p>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 400,
              letterSpacing: "0.04em",
              color: textColor,
              lineHeight: 1,
              margin: "0 0 0.25rem 0",
            }}
          >
            {book.title}
          </h2>

          {/* Subtitle */}
          {book.subtitle && (
            <p
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: subColor,
                margin: "0 0 0.75rem 0",
                letterSpacing: "0.04em",
              }}
            >
              {book.subtitle}
            </p>
          )}

          {/* Meta */}
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.75rem",
              color: subColor,
              margin: "0 0 1.5rem 0",
              letterSpacing: "0.06em",
            }}
          >
            {book.pages} pages · Published {book.published}
          </p>

          {/* Divider */}
          <div
            style={{
              width: "48px",
              height: "2px",
              background: dividerColor,
              margin: "0 0 1.75rem 0",
            }}
          />

          {/* Description */}
          {book.description.split("\n\n").map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: book.dark ? "#c8c0a8" : "#3a2e1e",
                margin: "0 0 1rem 0",
              }}
            >
              {para}
            </p>
          ))}

          {/* Reviews */}
          <div style={{ marginTop: "2.5rem" }}>
            <p
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: dividerColor,
                margin: "0 0 1.25rem 0",
              }}
            >
              What Readers Are Saying
            </p>
            {book.reviews.map((r, i) => (
              <ReviewCard key={i} review={r} dark={!!book.dark} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Books() {
  useSEO({
    title: "Books",
    description: "Browse Matt Benjamin's books — We Are Icarus, Alex Was Here, Nathan Was Gone, and Back to the Beginning — with current Ko-fi prices.",
    image: "https://mattbwrites.com/images/real-icarus-cover.webp",
  });
  return (
    <div style={{ minHeight: "100vh", background: "#f5f0e8" }}>
      <NavBar />

      {/* Hero */}
      <div
        style={{
          background: "#2a1f14",
          padding: "4rem 2rem 3.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#c8b87a",
            margin: "0 0 0.75rem 0",
          }}
        >
          Books · Available on Ko-fi
        </p>
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 400,
            letterSpacing: "0.06em",
            color: "#f5f0e8",
            lineHeight: 1,
            margin: "0 0 1rem 0",
          }}
        >
          The Books
        </h1>
        <p
          style={{
            fontFamily: "'Lora', serif",
            fontSize: "1rem",
            fontStyle: "italic",
            color: "#a09070",
            maxWidth: "500px",
            margin: "0 auto 1.5rem",
            lineHeight: 1.7,
          }}
        >
          Stories that are true, good, and beautiful — available directly from the author on Ko-fi.
        </p>
        {/* Quick-jump nav */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {BOOKS.map((b) => (
            <a
              key={b.id}
              href={`#${b.id}`}
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#c8b87a",
                textDecoration: "none",
                border: "1px solid rgba(200,184,122,0.4)",
                padding: "0.4rem 0.9rem",
                borderRadius: "1px",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(200,184,122,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {b.title}
            </a>
          ))}
        </div>
      </div>

      {/* Book Sections */}
      {BOOKS.map((book, i) => (
        <>
          <BookSection key={book.id} book={book} index={i} />
          {book.id === "alex-was-here" && (
            <div
              key="duology-banner"
              style={{
                background: "linear-gradient(135deg, #2a1f0e 0%, #1a1612 50%, #0e1a18 100%)",
                borderTop: "1px solid rgba(200,184,122,0.25)",
                borderBottom: "1px solid rgba(200,184,122,0.25)",
                padding: "3rem 2rem",
                textAlign: "center",
              }}
            >
              <div style={{ maxWidth: "640px", margin: "0 auto" }}>
                <p
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "0.68rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.25em",
                    color: "#c8b87a",
                    marginBottom: "0.6rem",
                  }}
                >
                  A Connected Duology
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1.2rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div style={{ height: "1px", width: "3rem", backgroundColor: "rgba(200,184,122,0.4)" }} />
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', Impact, sans-serif",
                      fontSize: "1.6rem",
                      letterSpacing: "0.12em",
                      color: "#f0ece0",
                    }}
                  >
                    The Alex &amp; Nathan Series
                  </span>
                  <div style={{ height: "1px", width: "3rem", backgroundColor: "rgba(200,184,122,0.4)" }} />
                </div>
                <p
                  style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: "0.92rem",
                    lineHeight: 1.85,
                    color: "#c8c0a8",
                    marginBottom: "1.5rem",
                  }}
                >
                  <em>Alex Was Here</em> and <em>Nathan Was Gone</em> are two halves of the same story — told first through Nathan's eyes, then through Alex's. Each novel stands on its own, but reading them in order reveals the full picture of a friendship that refuses to let go.
                </p>
                <p
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "0.72rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#c8b87a",
                  }}
                >
                  Recommended reading order: <em>Alex Was Here</em> → <em>Nathan Was Gone</em>
                </p>
              </div>
            </div>
          )}
        </>
      ))}

      {/* Footer CTA */}
      <div
        style={{
          background: "#f5f0e8",
          padding: "4rem 2rem",
          textAlign: "center",
          borderTop: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <p
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#8b6914",
            margin: "0 0 0.75rem 0",
          }}
        >
          Books on Ko-fi
        </p>
        <h3
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "2.5rem",
            fontWeight: 400,
            letterSpacing: "0.06em",
            color: "#2a1f14",
            margin: "0 0 1rem 0",
          }}
        >
          Get Books on Ko-fi
        </h3>
        <p
          style={{
            fontFamily: "'Lora', serif",
            fontSize: "0.9rem",
            fontStyle: "italic",
            color: "#6b5a3e",
            margin: "0 0 1.75rem 0",
          }}
        >
          Shop ebooks and audiobooks directly from the author.
        </p>
        <a
          href={KOFI_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#FF5E5B",
            color: "#fff",
            fontFamily: "'Oswald', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            textDecoration: "none",
            padding: "0.9rem 2.5rem",
            borderRadius: "2px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#e04a47")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#FF5E5B")}
        >
          ☕ Visit Ko-fi
        </a>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/">
            <span
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.75rem",
                color: "#8b6914",
                textDecoration: "none",
                cursor: "pointer",
                letterSpacing: "0.06em",
              }}
            >
              ← Back to Home
            </span>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .books-grid {
            grid-template-columns: 1fr !important;
          }
          .books-grid > div {
            order: unset !important;
          }
        }
      `}</style>
    </div>
  );
}
