"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { User, Heart, Sparkles, Star, Palette, Camera } from "lucide-react";
import { useTranslations } from "@/lib/hooks/useTranslations";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { t } = useTranslations();

  return (
    <div className="w-full min-h-screen relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 pb-32">
      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-32 left-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart className="w-12 h-12 text-secondary fill-secondary opacity-20" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-10"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Sparkles className="w-14 h-14 text-primary opacity-15" />
      </motion.div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            {/* Decorative icon */}
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg mb-10 mt-4 relative"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <User className="w-10 h-10 text-white" />
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Star className="w-5 h-5 text-accent fill-accent" />
              </motion.div>
            </motion.div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-10 mt-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {t.about.title}
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.about.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto space-y-14 w-full">
          {/* My Story Section */}
          <FadeIn delay={0.2}>
            <motion.div
              className="bg-card-background/80 backdrop-blur-sm rounded-3xl shadow-xl w-full border-2 border-primary/20 relative overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-3xl" />

              {/* Content wrapper */}
              <div className="relative z-10 p-10 md:p-12 lg:p-14">
                <div className="flex items-center gap-6 mb-8">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-hover flex items-center justify-center shadow-lg flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Heart className="w-8 h-8 text-white" />
                  </motion.div>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {t.about.myStory}
                  </h2>
                </div>
                <p
                  className="text-foreground-secondary text-lg md:text-xl leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t.about.storyContent}
                </p>
              </div>
            </motion.div>
          </FadeIn>

          {/* What I Do Section */}
          <FadeIn delay={0.4}>
            <motion.div
              className="bg-card-background/80 backdrop-blur-sm rounded-3xl shadow-xl w-full border-2 border-primary/20 relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />

              {/* Content wrapper */}
              <div className="relative z-10 p-10 md:p-12 lg:p-14">
                <div className="flex items-center gap-6 mb-10">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center shadow-lg flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Sparkles className="w-8 h-8 text-white" />
                  </motion.div>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {t.about.whatIDo}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {[
                    { icon: Palette, text: t.about.digitalIllustration, color: "from-primary to-primary-hover" },
                    { icon: Camera, text: t.about.goFest, color: "from-secondary to-secondary-hover" },
                    { icon: Heart, text: t.about.commissions, color: "from-accent to-accent-hover" },
                    { icon: Sparkles, text: t.about.contentCreation, color: "from-primary to-secondary" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-6 p-6 md:p-7 rounded-2xl bg-background/60 border-2 border-primary/10 hover:border-primary/30 hover:bg-background/80 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <p
                        className="text-foreground text-base md:text-lg leading-relaxed pt-3"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Fun Fact Section */}
          <FadeIn delay={0.6}>
            <motion.div
              className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl text-center border-2 border-primary/30 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              {/* Decorative stars */}
              <motion.div
                className="absolute top-8 left-8"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Star className="w-6 h-6 text-accent fill-accent opacity-60" />
              </motion.div>
              <motion.div
                className="absolute bottom-8 right-8"
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-8 h-8 text-primary opacity-60" />
              </motion.div>

              {/* Content wrapper */}
              <div className="relative z-10 p-10 md:p-12 lg:p-14">
                <p
                  className="text-2xl md:text-3xl font-bold text-foreground mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t.about.funFact}
                </p>
                <p
                  className="text-lg md:text-xl text-foreground-secondary"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t.about.funFactContent}
                </p>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
