import { Cpu, Sword, BookOpen, Mail } from "lucide-react";
import type { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import { useSEO } from "@/hooks/useSEO";

const HERO = "/images/alphabreaker-hero.webp";
const LIBRARY = "/images/alphabreaker-library.webp";
const OMNIFORGE = "/images/alphabreaker-omniforge.webp";
const DARK_BG = "/images/dark-texture-bg.webp";

const quoteStyle = {
  fontFamily: "'Lora', Georgia, serif",
  fontSize: "clamp(1.15rem, 2.4vw, 1.55rem)",
  lineHeight: 1.75,
  color: "#f0ece0",
  fontStyle: "italic",
};

export default function Alphabreaker() {
  useSEO({
    title: "Alphabreaker",
    description:
      "A teaser for Alphabreaker, Matt Benjamin's work-in-progress novel about a video game hero who starts noticing the world around him is unfinished.",
    image: "https://mattbwrites.com/images/alphabreaker-hero.webp",
  });

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f0ece0", color: "#1a1a1a" }}>
      <NavBar />

      <section
        style={{
          minHeight: "calc(100vh - 56px)",
          backgroundImage: `linear-gradient(90deg, rgba(12,11,10,0.92) 0%, rgba(12,11,10,0.72) 42%, rgba(12,11,10,0.28) 100%), url(${HERO})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "4rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto", width: "100%" }}>
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.82rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#c8b87a",
              marginBottom: "0.9rem",
            }}
          >
            Work in Progress
          </p>
          <h1
            style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: "clamp(5rem, 14vw, 11rem)",
              lineHeight: 0.9,
              letterSpacing: "0.04em",
              color: "#f0ece0",
              marginBottom: "1.25rem",
            }}
          >
            Alphabreaker
          </h1>
          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
              lineHeight: 1.75,
              color: "#ded4b8",
              maxWidth: "660px",
              marginBottom: "2rem",
            }}
          >
            A desperate indie developer turns to experimental AI to finish his fantasy RPG. Then the hero inside the game starts noticing the walls.
          </p>
          <div style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap" }}>
            <a
              href="https://mattwrites.eo.page/zb6q4"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                backgroundColor: "#c8b87a",
                color: "#141210",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 800,
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "0.85rem 1.45rem",
                textDecoration: "none",
              }}
            >
              <Mail size={17} />
              Get Updates
            </a>
            <a
              href="#sample"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                border: "1px solid rgba(240,236,224,0.62)",
                color: "#f0ece0",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "0.82rem 1.3rem",
                textDecoration: "none",
              }}
            >
              <BookOpen size={17} />
              Read a Taste
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "4.25rem 1.5rem", backgroundColor: "#f0ece0" }}>
        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "1.1rem",
          }}
        >
          <PremiseCard
            icon={<Cpu size={23} />}
            title="The game is unfinished"
            text="Theo has maps, assets, combat, and a promise he cannot afford to break. The only missing piece is the story."
          />
          <PremiseCard
            icon={<Sword size={23} />}
            title="The hero is waking up"
            text="Caelius was made to chase a legendary sword. But invisible barriers and respawning enemies are starting to feel like clues."
          />
          <PremiseCard
            icon={<BookOpen size={23} />}
            title="The story pushes back"
            text="The deeper Caelius and Thysia travel, the more the world reveals its rules, its wounds, and the cost of being authored."
          />
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${DARK_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#211f1b",
          padding: "4.75rem 1.5rem",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(14,13,11,0.84)" }} />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1080px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <img
            src={LIBRARY}
            alt="Caelius and Thysia in the Library of the Last Night"
            style={{
              width: "100%",
              flex: "1 1 520px",
              minWidth: 0,
              aspectRatio: "16 / 9",
              objectFit: "cover",
              boxShadow: "0 18px 45px rgba(0,0,0,0.45)",
            }}
          />
          <div style={{ flex: "1 1 320px", minWidth: 0 }}>
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.78rem",
                letterSpacing: "0.17em",
                textTransform: "uppercase",
                color: "#c8b87a",
                marginBottom: "0.7rem",
              }}
            >
              The Library of the Last Night
            </p>
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.08,
                color: "#f0ece0",
                marginBottom: "1rem",
              }}
            >
              Some stories do not want to let go.
            </h2>
            <p style={{ fontFamily: "'Lora', Georgia, serif", lineHeight: 1.85, color: "#d9d0ba" }}>
              Caelius and Thysia enter dungeons, join factions, face monsters, and chase pieces of the Sword of Kainos. But the most dangerous places are the ones that understand what a story can do to the people trapped inside it.
            </p>
          </div>
        </div>
      </section>

      <section id="sample" style={{ backgroundColor: "#e8dfca", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.78rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#7e6c37",
              marginBottom: "0.85rem",
            }}
          >
            From the manuscript
          </p>
          <blockquote
            style={{
              margin: 0,
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "clamp(1.35rem, 3vw, 2rem)",
              lineHeight: 1.7,
              color: "#211f1b",
              fontStyle: "italic",
            }}
          >
            "This isn't real."
          </blockquote>
          <p
            style={{
              maxWidth: "660px",
              margin: "1.25rem auto 0",
              fontFamily: "'Lora', Georgia, serif",
              lineHeight: 1.8,
              color: "#4b4438",
            }}
          >
            The thought hits Caelius after a named enemy disappears like loot from a defeated boss. From that moment on, every quest becomes a question: who wrote this world, and who gets to decide how it ends?
          </p>
        </div>
      </section>

      <section style={{ padding: "4.75rem 1.5rem", backgroundColor: "#f0ece0" }}>
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1 1 320px", minWidth: 0 }}>
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.78rem",
                letterSpacing: "0.17em",
                textTransform: "uppercase",
                color: "#8a783f",
                marginBottom: "0.7rem",
              }}
            >
              The Sword of Kainos
            </p>
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.08,
                color: "#1a1a1a",
                marginBottom: "1rem",
              }}
            >
              The next piece is hidden behind machines built to kill heroes.
            </h2>
            <p style={{ fontFamily: "'Lora', Georgia, serif", lineHeight: 1.85, color: "#444" }}>
              Beyond Port Pierce and the Saloi Desert, the Omniforge waits inside the Red Mountains. Somewhere inside its traps is the pommel of the only sword that can kill K'ttak, Lord of Demons.
            </p>
          </div>
          <img
            src={OMNIFORGE}
            alt="The Omniforge in the Red Mountains"
            style={{
              width: "100%",
              flex: "1 1 520px",
              minWidth: 0,
              aspectRatio: "16 / 9",
              objectFit: "cover",
              boxShadow: "0 16px 38px rgba(48,37,20,0.28)",
            }}
          />
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#151412",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={quoteStyle}>
            "Your life has the potential to be special, if you live up to what you were made for."
          </p>
          <div style={{ width: "3rem", height: "2px", backgroundColor: "#c8b87a", margin: "1.75rem auto" }} />
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
              color: "#f0ece0",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "1.25rem",
            }}
          >
            Follow the Draft
          </h2>
          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              lineHeight: 1.8,
              color: "#cfc4a8",
              marginBottom: "1.6rem",
            }}
          >
            Alphabreaker is currently in development. Join the newsletter for draft notes, release updates, and the occasional look behind the invisible wall.
          </p>
          <a
            href="https://mattwrites.eo.page/zb6q4"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              backgroundColor: "#f0ece0",
              color: "#151412",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 800,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              padding: "0.85rem 1.6rem",
              textDecoration: "none",
            }}
          >
            <Mail size={17} />
            Newsletter Updates
          </a>
        </div>
      </section>
    </div>
  );
}

function PremiseCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        border: "1px solid #d2c8ad",
        backgroundColor: "#f8f3e8",
        padding: "1.35rem",
      }}
    >
      <div style={{ color: "#8a783f", marginBottom: "0.85rem" }}>{icon}</div>
      <h3
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: "1.3rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "#1f1d19",
          marginBottom: "0.55rem",
        }}
      >
        {title}
      </h3>
      <p style={{ fontFamily: "'Lora', Georgia, serif", lineHeight: 1.7, color: "#4b4438", fontSize: "0.95rem" }}>
        {text}
      </p>
    </div>
  );
}
