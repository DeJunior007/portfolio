"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/components/language-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ExternalLink } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-background/40 backdrop-blur-xl border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-primary">
          Deilton<span className="text-primary/70">Dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setLanguage("pt-BR")}
                  className={language === "pt-BR" ? "bg-accent" : ""}
                >
                  Portugues (BR)
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("en-US")}
                  className={language === "en-US" ? "bg-accent" : ""}
                >
                  English (US)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-white/20 bg-white/5 backdrop-blur"
            >
              <a
                href="https://www.linkedin.com/in/deilton-pedro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ExternalLink className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-2 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => setLanguage("pt-BR")}
                className={language === "pt-BR" ? "bg-accent" : ""}
              >
                Portugues (BR)
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage("en-US")}
                className={language === "en-US" ? "bg-accent" : ""}
              >
                English (US)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl shadow-lg border-b border-white/10">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.linkedin.com/in/deilton-pedro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm backdrop-blur hover:border-primary/40"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  LinkedIn para recrutadores
                  <ExternalLink className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
