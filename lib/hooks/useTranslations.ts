"use client";

import { useLanguage } from "@/lib/contexts/language-context";
import esMessages from "@/locales/es.json";
import enMessages from "@/locales/en.json";
import { useState, useEffect } from "react";

type Messages = typeof esMessages;

export function useTranslations() {
  const context = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to Spanish while mounting
  const language = mounted ? context.language : "es";
  const messages: Messages = language === "es" ? esMessages : enMessages;

  return {
    t: messages,
    language
  };
}
