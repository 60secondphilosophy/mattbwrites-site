import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

const BONUS_ITEMS = [
  {
    id: "alex-bonus",
    title: "Alex Was Here",
    description:
      "This e-book contains 3 bonus scenes, some author commentary, a playlist from the novel and other bonus content.",
    image: "/images/AWHBCCover.webp",
    downloadUrl: "https://BookHip.com/LXXWTRZ",
    buttonText: "Download",
  },
  {
    id: "enoch-bonus",
    title: "We Are Icarus",
    description:
      "This e-book contains a short side story I wrote shortly after finishing We Are Icarus. It also contains an essay explaining the connections between We Are Icarus and classic works of literature.",
    image: "/images/enoch-cover.webp",
    downloadUrl: "https://dl.bookfunnel.com/rqwb477nyr",
    buttonText: "Download",
  },
  {
    id: "air-hockey-game",
    title: "Pinockey",
    description:
      "Play the game described in We Are Icarus (with some modifications). Experience the Thrill!",
    image: "/manus-storage/pinockey_ebeae04c.png",
    downloadUrl: "/air-hockey",
    buttonText: "Play Game",
    isGame: true,
  },
];

export default function BonusMaterial() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Back
            </a>
          </Link>
          <h1 className="text-lg font-bold">Matt Benjamin</h1>
          <div className="w-10" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Bonus Material
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exclusive bonus content for my novels — bonus scenes, author commentary, essays, and more.
          </p>
        </div>

        {/* Bonus Items Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {BONUS_ITEMS.map((item) => (
            <div key={item.id} className="flex flex-col">
              {/* Image */}
              <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h2 className="font-display text-2xl font-bold mb-3 text-foreground">
                  {item.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Download Button */}
                <a
                  href={item.downloadUrl}
                  target={item.isGame ? undefined : "_blank"}
                  rel={item.isGame ? undefined : "noopener noreferrer"}
                  className="inline-block px-6 py-3 bg-foreground text-background font-semibold rounded-md hover:bg-foreground/90 transition-colors w-fit"
                >
                  {item.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border mt-16">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Matt Benjamin. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="https://ko-fi.com/mattbenjamin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Ko-fi
              </a>
              <a
                href="https://www.youtube.com/@60SPH"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/mattbwrites/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
              </a>
              <a
                href="mailto:matt@mattbwrites.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
