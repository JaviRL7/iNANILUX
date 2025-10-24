"use client";

import { useCallback, useEffect, useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { Palette, ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react";
import { useTranslations } from "@/lib/hooks/useTranslations";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

// Sample portfolio items - replace with real data later
const portfolioItems = [
  { id: 1, title: "Pikachu Illustration", category: "Fan Art" },
  { id: 2, title: "Eevee Evolution Series", category: "Series" },
  { id: 3, title: "GO Fest Poster", category: "Event" },
  { id: 4, title: "Legendary Birds", category: "Fan Art" },
  { id: 5, title: "Snorlax Cozy Art", category: "Cute" },
  { id: 6, title: "Gengar Night Theme", category: "Fan Art" },
  { id: 7, title: "Clefable Day Theme", category: "Cute" },
  { id: 8, title: "Pokéball Collection", category: "Design" },
];

export default function PortfolioPage() {
  const { t } = useTranslations();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full px-8 md:px-12 py-8 md:py-12 pb-24 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-24 px-6 md:px-8 py-4">
            {/* Decorative icon */}
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg mb-10 mt-4 relative"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Palette className="w-10 h-10 text-white" />
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Star className="w-5 h-5 text-accent fill-accent" />
              </motion.div>
            </motion.div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 mt-2 px-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {t.portfolio.title}
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed px-6 md:px-8 mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.portfolio.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Carousel Section */}
        <FadeIn delay={0.2}>
          <div className="relative px-6 md:px-10 mt-8">
            {/* Carousel Container */}
            <div className="overflow-visible py-10 md:py-12" ref={emblaRef}>
              <div className="flex gap-8 md:gap-10">
                {portfolioItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="flex-[0_0_calc(100%-3rem)] md:flex-[0_0_calc(50%-2rem)] lg:flex-[0_0_calc(33.333%-2.5rem)] min-w-0 px-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative group h-full">
                      {/* Card */}
                      <motion.div
                        className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 border-primary/30 group-hover:border-primary/60 relative"
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        {/* Placeholder content */}
                        <div className="absolute inset-0 bg-card-background/40 backdrop-blur-sm">
                          <div className="flex flex-col items-center justify-center h-full p-10 md:p-12">
                            <Sparkles className="w-20 h-20 md:w-24 md:h-24 text-primary/40 mb-8" />
                            <p
                              className="text-foreground-secondary text-sm md:text-base"
                              style={{ fontFamily: "var(--font-body)" }}
                            >
                              {t.portfolio.artwork} #{item.id}
                            </p>
                          </div>
                        </div>

                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-secondary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end">
                          <div className="p-12 md:p-14">
                            <motion.div
                              initial={{ y: 20, opacity: 0 }}
                              whileHover={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                              className="text-center"
                            >
                              <h3
                                className="text-white font-bold text-xl md:text-2xl mb-4"
                                style={{ fontFamily: "var(--font-heading)" }}
                              >
                                {item.title}
                              </h3>
                              <span
                                className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm md:text-base font-medium"
                                style={{ fontFamily: "var(--font-body)" }}
                              >
                                {item.category}
                              </span>
                            </motion.div>
                          </div>
                        </div>

                        {/* Decorative corner stars */}
                        <motion.div
                          className="absolute top-4 right-4"
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <Star className="w-5 h-5 text-accent fill-accent opacity-60" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-10 mt-24 mb-8 px-6 md:px-8 py-4">
              <motion.button
                onClick={scrollPrev}
                className="w-16 h-16 rounded-full bg-card-background border-2 border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous"
              >
                <ChevronLeft className="w-7 h-7 text-primary" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-3 px-4">
                {portfolioItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === selectedIndex
                        ? "w-10 h-4 bg-primary"
                        : "w-4 h-4 bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={scrollNext}
                className="w-16 h-16 rounded-full bg-card-background border-2 border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next"
              >
                <ChevronRight className="w-7 h-7 text-primary" />
              </motion.button>
            </div>
          </div>
        </FadeIn>

        {/* Coming Soon Message */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-24 mb-8 bg-card-background/60 backdrop-blur-sm rounded-3xl border-2 border-primary/20 mx-6 md:mx-8">
            <div className="p-12 md:p-16">
              <Sparkles className="w-14 h-14 text-primary mx-auto mb-8 mt-2" />
              <h3
                className="text-2xl md:text-3xl font-bold text-foreground mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {t.portfolio.comingSoon || "More Amazing Art Coming Soon!"}
              </h3>
              <p
                className="text-foreground-secondary text-lg md:text-xl mb-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Stay tuned for more Pokémon illustrations and creative content!
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
