import { Link } from "wouter";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: "#f5f0e8", color: "#1a1916" }}
    >
      <p
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "8rem",
          lineHeight: 1,
          color: "#c8b87a",
          letterSpacing: "0.05em",
        }}
      >
        404
      </p>
      <h1
        className="mb-4 text-center"
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: "1.75rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Page Not Found
      </h1>
      <p
        className="mb-10 text-center max-w-sm"
        style={{ fontFamily: "'Lora', serif", color: "#5a4a30", lineHeight: 1.7 }}
      >
        The page you're looking for doesn't exist. It may have been moved or deleted.
      </p>
      <Link href="/">
        <a
          className="inline-block px-8 py-4 font-semibold transition-colors"
          style={{
            backgroundColor: "#1a1916",
            color: "#e8e0cc",
            fontFamily: "'Oswald', sans-serif",
            letterSpacing: "0.08em",
            fontSize: "0.95rem",
          }}
        >
          GO HOME →
        </a>
      </Link>
    </div>
  );
}
