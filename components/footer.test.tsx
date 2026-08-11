import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "./language-provider";
import { Footer } from "./footer";

describe("Footer", () => {
  it("renders the social links", () => {
    render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    );

    expect(screen.getByLabelText("LinkedIn")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/deilton-pedro/"
    );
    expect(screen.getByLabelText("GitHub")).toHaveAttribute(
      "href",
      "https://github.com/DeJunior007"
    );
    expect(screen.getByLabelText("Email")).toHaveAttribute(
      "href",
      "mailto:deiltonp74@gmail.com"
    );
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
