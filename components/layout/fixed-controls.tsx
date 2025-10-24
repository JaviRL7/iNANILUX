"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LanguageToggle = dynamic(
  () => import("@/components/ui/language-toggle").then(mod => mod.LanguageToggle),
  { 
    ssr: false,
    loading: () => <div className="w-20 h-10" />
  }
);

const PokemonThemeToggle = dynamic(
  () => import("@/components/ui/pokemon-theme-toggle").then(mod => mod.PokemonThemeToggle),
  { 
    ssr: false,
    loading: () => <div className="w-10 h-10" />
  }
);

export function FixedControls() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
      <LanguageToggle />
      <PokemonThemeToggle />
    </div>
  );
}
