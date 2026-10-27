"use client";

import React, { createContext, useContext, useState, useEffect, useSyncExternalStore } from "react";
import {
  PORTFOLIO_DATA,
  type LanguageCode,
  type PortfolioData,
} from "@/data/portfolio";

interface LanguageContextType {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  data: PortfolioData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "alvaro_cv_lang";

function subscribeLanguage(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getClientLanguage(): LanguageCode {
  if (typeof window === "undefined") return "es";
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    if (saved === "es" || saved === "en") return saved;
    const browser = navigator.language.toLowerCase();
    return browser.startsWith("es") ? "es" : "en";
  } catch {
    return "es";
  }
}

function getServerLanguage(): LanguageCode {
  return "es";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const storeLang = useSyncExternalStore(
    subscribeLanguage,
    getClientLanguage,
    getServerLanguage
  );
  const [manualLang, setManualLang] = useState<LanguageCode | null>(null);

  const lang = manualLang ?? storeLang;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: LanguageCode) => {
    setManualLang(newLang);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, newLang);
        document.documentElement.lang = newLang;
      } catch {
        // Storage might be restricted
      }
    }
  };

  const data = PORTFOLIO_DATA[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
