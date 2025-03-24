
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "./search-bar";
import { externalLinks } from "@/lib/constants";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3"
          : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-hero-gradient flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <a
            href="#"
            className="text-xl font-bold text-foreground flex items-center"
          >
            Monarch<span className="text-monarch-purple">ORM</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          <a href="#quickstart" className="nav-item">
            Quick Start
          </a>
          <a href="#features" className="nav-item">
            Features
          </a>
          <a href="#community" className="nav-item">
            Community
          </a>
          <a
            href={externalLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
          >
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <SearchBar />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/50 py-4 animate-fade-in">
          <div className="container flex flex-col space-y-4">
            <SearchBar />
            <nav className="flex flex-col space-y-2">
              <Link
                href="/docs/quick-start"
                className="nav-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Quick Start
              </Link>
              <a
                href=""
                className="nav-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              {/* <a
                href="#community"
                className="nav-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </a> */}
              <a
                href={externalLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GitHub
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
