import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f5f0e8", color: "#1a1916" }}>
      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-sm border-b"
        style={{ backgroundColor: "rgba(245,240,232,0.95)", borderColor: "#d4c9a8" }}
      >
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a
              className="text-sm font-medium flex items-center gap-2 transition-colors"
              style={{ color: "#8a7a5a" }}
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </a>
          </Link>
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.25rem",
              letterSpacing: "0.05em",
              color: "#1a1916",
            }}
          >
            Matt Benjamin
          </span>
          <div className="w-10" />
        </div>
      </nav>

      {/* Hero */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: "#1a1916", color: "#e8e0cc" }}
      >
        <div className="container max-w-2xl mx-auto px-6">
          <p
            className="mb-4 uppercase tracking-widest text-xs"
            style={{ color: "#c8b87a" }}
          >
            Writing
          </p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "4rem",
              letterSpacing: "0.05em",
              lineHeight: 1,
            }}
          >
            Hardly a Clear View
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#c8b87a", fontFamily: "'Lora', serif" }}>
            Short stories and creative writing. New pieces published regularly on Substack.
          </p>
        </div>
      </section>

      {/* Main CTA */}
      <main className="flex-1 flex flex-col items-center justify-center py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p
            className="mb-10 leading-relaxed text-lg"
            style={{ fontFamily: "'Lora', serif", color: "#3a3020" }}
          >
            All writing lives on Substack. Subscribe for free to get new stories delivered to your inbox — or browse the archive anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://hardlyaclearview.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 font-semibold transition-colors"
              style={{
                backgroundColor: "#1a1916",
                color: "#e8e0cc",
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.08em",
                fontSize: "0.95rem",
              }}
            >
              READ ON SUBSTACK →
            </a>
            <a
              href="https://hardlyaclearview.substack.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 font-semibold border-2 transition-colors"
              style={{
                borderColor: "#1a1916",
                color: "#1a1916",
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.08em",
                fontSize: "0.95rem",
              }}
            >
              SUBSCRIBE FREE →
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="border-t mt-auto"
        style={{ backgroundColor: "#1a1916", borderColor: "#2a2520", color: "#8a7a5a" }}
      >
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">© 2026 Matt Benjamin. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="https://ko-fi.com/mattbenjamin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Ko-fi</a>
              <a href="https://www.youtube.com/@60SPH" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
              <a href="https://www.instagram.com/mattbwrites/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="mailto:matt@mattbwrites.com" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
