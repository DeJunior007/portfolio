import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "./language-provider";
import { Footer } from "./footer";

describe("Footer", () => {
  it("renders navigation links translated in the current language", () => {
    render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    );

    expect(screen.getByText("Início")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });

  it("shows the current year in the copyright line", () => {
    const { container } = render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    );

    const year = new Date().getFullYear().toString();
    expect(container.textContent).toContain(`© ${year}`);
  });
});
