"use client";

import { useLanguage } from "@/lib/contexts/language-context";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="relative p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <Globe className="w-5 h-5 text-primary" />
      <span className="text-sm font-medium uppercase">{language}</span>
    </motion.button>
  );
}
