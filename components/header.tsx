"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/components/language-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ExternalLink, ChevronDown } from "lucide-react";
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
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(`#${current}`);
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const getLanguageLabel = () => {
    return language === "pt-BR" ? "PT" : "EN";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="group flex items-center space-x-2 transition-transform hover:scale-105"
          >
            <div className="relative">
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Deilton
              </span>
              <span className="text-2xl lg:text-3xl font-bold text-muted-foreground/70">
                Dev
              </span>
              <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 group-hover:w-full" />
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  activeSection === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === item.href
                      ? "w-8"
                      : "w-0 group-hover:w-8"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1.5 font-medium"
                >
                  <Globe className="h-4 w-4" />
                  {getLanguageLabel()}
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem
                  onClick={() => setLanguage("pt-BR")}
                  className={`cursor-pointer ${
                    language === "pt-BR" ? "bg-accent" : ""
                  }`}
                >
                  🇧🇷 Português
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("en-US")}
                  className={`cursor-pointer ${
                    language === "en-US" ? "bg-accent" : ""
                  }`}
                >
                  🇺🇸 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ModeToggle />

            <Button
              asChild
              size="sm"
              className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              <a
                href="https://www.linkedin.com/in/deilton-pedro/"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-1.5"
              >
                LinkedIn
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          <div className="flex items-center space-x-2 lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem
                  onClick={() => setLanguage("pt-BR")}
                  className={`cursor-pointer ${
                    language === "pt-BR" ? "bg-accent" : ""
                  }`}
                >
                  🇧🇷 Português
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("en-US")}
                  className={`cursor-pointer ${
                    language === "en-US" ? "bg-accent" : ""
                  }`}
                >
                  🇺🇸 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ModeToggle />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-9 w-9"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-background/98 backdrop-blur-xl border-t border-border/50 shadow-xl">
          <nav className="mx-auto w-full max-w-content px-4 py-6">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      activeSection === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-border/50">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              >
                <a
                  href="https://www.linkedin.com/in/deilton-pedro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Conectar no LinkedIn
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}