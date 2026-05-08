/**
 * Blog Page — mattbwrites.com
 * Design: Vintage Literary Warmth
 * - Parchment cream (#f5f0e8) background
 * - Bebas Neue for display, Oswald for headings, Lora for body
 * - Gold (#c8b87a) accents throughout
 * - Fetches latest posts from Substack RSS feed
 */

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ChevronLeft, Loader2 } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  pubDate: string;
  link: string;
  author?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubstackFeed = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch the RSS feed from Substack (short stories)
        const response = await fetch(
          "https://hardlyaclearview.substack.com/feed",
          {
            headers: {
              Accept: "application/rss+xml, application/xml, text/xml",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch feed: ${response.statusText}`);
        }

        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
          throw new Error("Failed to parse RSS feed");
        }

        const items = xmlDoc.getElementsByTagName("item");
        const parsedPosts: BlogPost[] = [];

        for (let i = 0; i < Math.min(items.length, 10); i++) {
          const item = items[i];
          const title = item.getElementsByTagName("title")[0]?.textContent || "Untitled";
          const description = item.getElementsByTagName("description")[0]?.textContent || "";
          const link = item.getElementsByTagName("link")[0]?.textContent || "";
          const pubDate = item.getElementsByTagName("pubDate")[0]?.textContent || "";

          // Strip HTML tags from description
          const cleanDescription = description
            .replace(/<[^>]*>/g, "")
            .substring(0, 200)
            .trim();

          parsedPosts.push({
            id: link,
            title,
            description: cleanDescription,
            pubDate,
            link,
          });
        }

        setPosts(parsedPosts);
      } catch (err) {
        console.error("Error fetching Substack feed:", err);
        setError(
          "Unable to load posts. Please check back later or visit Substack directly."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSubstackFeed();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

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
          <h1
            className="font-bold mb-4 text-foreground"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "3.5rem",
              letterSpacing: "0.05em",
            }}
          >
            Latest Writing
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Short stories and creative writing from Hardly a Clear View. Subscribe for the full experience.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Loading posts...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="max-w-2xl mx-auto mb-12 p-6 bg-secondary/50 rounded-lg border border-border">
            <p className="text-foreground mb-4">{error}</p>
          <a
            href="https://hardlyaclearview.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-foreground text-background font-semibold rounded-md hover:bg-foreground/90 transition-colors"
          >
            Visit Substack →
          </a>
          </div>
        )}

        {/* Posts Grid */}
        {!loading && !error && posts.length > 0 && (
          <div className="max-w-3xl mx-auto space-y-8">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block pb-8 border-b border-border last:border-b-0 hover:bg-secondary/20 transition-colors p-4 rounded-lg no-underline"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2
                        className="font-bold mb-2 text-foreground hover:text-accent transition-colors"
                        style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: "1.5rem",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-3">
                        {formatDate(post.pubDate)}
                      </p>
                    </div>
                  </div>

                  {post.description && (
                    <p className="text-foreground/80 leading-relaxed">
                      {post.description}
                      {post.description.length === 200 && "..."}
                    </p>
                  )}

                  <div className="pt-2">
                    <span
                      className="inline-block text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                      style={{ color: "#c8b87a" }}
                    >
                      Read on Substack →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && posts.length === 0 && (
          <div className="max-w-2xl mx-auto text-center py-16">
            <p className="text-muted-foreground mb-6">No posts found yet.</p>
            <a
              href="https://hardlyaclearview.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-foreground text-background font-semibold rounded-md hover:bg-foreground/90 transition-colors"
            >
              Subscribe on Substack →
            </a>
          </div>
        )}

        {/* CTA Section */}
        <div
          className="mt-16 p-8 rounded-lg text-center"
          style={{
            backgroundColor: "#1a1612",
            color: "#e8e0cc",
          }}
        >
          <h3
            className="font-bold mb-3"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "1.5rem",
              letterSpacing: "0.02em",
            }}
          >
            Get New Stories in Your Inbox
          </h3>
          <p className="mb-6 text-sm">
            Subscribe to Hardly a Clear View for short stories and creative writing.
          </p>
          <a
            href="https://hardlyaclearview.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-colors"
          >
            Subscribe Now →
          </a>
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
