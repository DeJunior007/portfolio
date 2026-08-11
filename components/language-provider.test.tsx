import { describe, expect, it, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { LanguageProvider, useLanguage } from "./language-provider";
import type { ReactNode } from "react";

function wrapper({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

describe("useLanguage", () => {
  it("throws when used outside a LanguageProvider", () => {
    // Silence the expected React error log for this assertion.
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => renderHook(() => useLanguage())).toThrow(
      "useLanguage must be used within a LanguageProvider"
    );
    spy.mockRestore();
  });

  it("defaults to pt-BR and translates known keys", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.language).toBe("pt-BR");
    // Checks the key resolved to an actual translation instead of a literal
    // copy string, so this doesn't churn every time copy text is edited.
    expect(result.current.t("nav.home")).not.toBe("nav.home");
  });

  it("falls back to the raw key when a translation is missing", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.t("nav.does-not-exist")).toBe("nav.does-not-exist");
  });

  it("switches translations when the language changes", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    const ptBRValue = result.current.t("nav.home");

    act(() => {
      result.current.setLanguage("en-US");
    });

    expect(result.current.language).toBe("en-US");
    expect(result.current.t("nav.home")).not.toBe(ptBRValue);
  });

  it("respects a custom defaultLanguage prop", () => {
    const { result } = renderHook(() => useLanguage(), {
      wrapper: ({ children }) => (
        <LanguageProvider defaultLanguage="en-US">{children}</LanguageProvider>
      ),
    });
    expect(result.current.language).toBe("en-US");
  });
});
