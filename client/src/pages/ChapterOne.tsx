import { useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import { useSEO } from "@/hooks/useSEO";

const FORM_ID = "ccc7621a-ae4d-11f1-ba78-abb5a2ae0730";

export default function ChapterOne() {
  const formHost = useRef<HTMLDivElement>(null);

  useSEO({
    title: "Read Chapter One of Alex Was Here Free",
    description:
      "Get Summer Undefined, the first chapter of Matt Benjamin's Alex Was Here, delivered free to your inbox.",
  });

  useEffect(() => {
    if (!formHost.current) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://eomail5.com/form/${FORM_ID}.js`;
    script.dataset.form = FORM_ID;
    formHost.current.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f0ece0" }}>
      <NavBar />
      <main
        style={{
          minHeight: "calc(100vh - 56px)",
          backgroundImage:
            "linear-gradient(rgba(21, 19, 16, 0.9), rgba(21, 19, 16, 0.94)), url('/images/dark-texture-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "clamp(3rem, 7vw, 6rem) 1.5rem",
        }}
      >
        <section
          style={{
            width: "100%",
            maxWidth: "920px",
            margin: "0 auto",
            display: "flex",
            gap: "clamp(2.5rem, 7vw, 5rem)",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <img
            src="/images/real-alex-cover.webp"
            alt="Alex Was Here by Matt Benjamin"
            style={{
              width: "min(260px, 68vw)",
              height: "auto",
              borderRadius: "3px",
              boxShadow: "14px 18px 42px rgba(0,0,0,0.65)",
            }}
          />

          <div style={{ maxWidth: "470px", color: "#eee8d8" }}>
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                color: "#c8b87a",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              A free introduction to Alex & Nathan
            </p>
            <h1
              style={{
                fontFamily: "'Bebas Neue', Impact, sans-serif",
                fontSize: "clamp(3.2rem, 8vw, 5.5rem)",
                lineHeight: 0.96,
                letterSpacing: "0.025em",
                marginBottom: "1.25rem",
              }}
            >
              Read Chapter One Free
            </h1>
            <p
              style={{
                fontFamily: "'Lora', Georgia, serif",
                color: "#cbc4b3",
                fontSize: "1.02rem",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}
            >
              Meet Nathan at the beginning of the summer that changes everything.
              Enter your email and I’ll send you “Summer Undefined,” the opening
              chapter of <em>Alex Was Here</em>.
            </p>
            <div
              ref={formHost}
              aria-label="Get the free first chapter of Alex Was Here"
              style={{
                backgroundColor: "#f7f2e7",
                borderRadius: "4px",
                padding: "1rem",
                boxShadow: "0 8px 28px rgba(0,0,0,0.3)",
              }}
            />
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                color: "#928b7c",
                fontSize: "0.72rem",
                lineHeight: 1.5,
                marginTop: "0.9rem",
              }}
            >
              You’ll also join my reader email list. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
