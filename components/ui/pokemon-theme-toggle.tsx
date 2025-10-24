"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/contexts/theme-context";

export function PokemonThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-16 h-16 rounded-full bg-primary/20" />
    );
  }

  const isDay = theme === "light";

  return (
    <motion.button
      onClick={() => setTheme(isDay ? "dark" : "light")}
      className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDay ? "Switch to Gengar (Night Mode)" : "Switch to Clefable (Day Mode)"}
    >
      {/* Background */}
      <motion.div
        className={`absolute inset-0 ${
          isDay
            ? "bg-gradient-to-br from-pink-200 to-pink-300"
            : "bg-gradient-to-br from-purple-900 to-purple-700"
        }`}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Icon */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            rotate: isDay ? 0 : 360,
            scale: isDay ? 1 : 1.1,
          }}
          transition={{ duration: 0.5 }}
        >
          {isDay ? (
            <div className="relative">
              {/* Clefable representation */}
              <Sun className="w-8 h-8 md:w-10 md:h-10 text-pink-600" />
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
            </div>
          ) : (
            <div className="relative">
              {/* Gengar representation */}
              <Moon className="w-8 h-8 md:w-10 md:h-10 text-purple-300" />
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
            </div>
          )}
        </motion.div>
      </div>

      {/* Sparkle effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full" />
        <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-white rounded-full" />
        <div className="absolute top-1/2 right-2 w-1 h-1 bg-white rounded-full" />
      </motion.div>
    </motion.button>
  );
}
