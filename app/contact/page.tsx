"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send, Star, Sparkles, Heart } from "lucide-react";
import { useTranslations } from "@/lib/hooks/useTranslations";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { t } = useTranslations();

  return (
    <div className="w-full min-h-screen relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 pb-32">
      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-40 right-12"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star className="w-10 h-10 text-accent fill-accent opacity-30" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-10"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Sparkles className="w-12 h-12 text-secondary opacity-20" />
      </motion.div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
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
              <Mail className="w-10 h-10 text-white" />
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Heart className="w-5 h-5 text-accent fill-accent" />
              </motion.div>
            </motion.div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-10 mt-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {t.contact.title}
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.contact.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto w-full space-y-14">
          <FadeIn delay={0.2}>
            <motion.div
              className="bg-card-background/80 backdrop-blur-sm rounded-3xl shadow-2xl w-full border-2 border-primary/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl" />

              {/* Content wrapper */}
              <div className="relative z-10 p-10 md:p-12 lg:p-14">
                <form className="space-y-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-base md:text-lg font-semibold mb-4 text-foreground"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {t.contact.name}
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      className="w-full px-6 py-5 rounded-2xl border-2 border-primary/20 bg-background focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all text-foreground placeholder:text-foreground-secondary/50"
                      placeholder={t.contact.namePlaceholder}
                      style={{ fontFamily: "var(--font-body)" }}
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base md:text-lg font-semibold mb-4 text-foreground"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {t.contact.email}
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      className="w-full px-6 py-5 rounded-2xl border-2 border-primary/20 bg-background focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all text-foreground placeholder:text-foreground-secondary/50"
                      placeholder={t.contact.emailPlaceholder}
                      style={{ fontFamily: "var(--font-body)" }}
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-base md:text-lg font-semibold mb-4 text-foreground flex items-center gap-3"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      <MessageSquare className="w-5 h-5 text-primary" />
                      {t.contact.message}
                    </label>
                    <motion.textarea
                      id="message"
                      rows={6}
                      className="w-full px-6 py-5 rounded-2xl border-2 border-primary/20 bg-background focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all resize-none text-foreground placeholder:text-foreground-secondary/50"
                      placeholder={t.contact.messagePlaceholder}
                      style={{ fontFamily: "var(--font-body)" }}
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-10">
                    <Button variant="gradient" size="lg" className="w-full shadow-lg text-lg py-7">
                      <Send className="w-6 h-6" />
                      <span style={{ fontFamily: "var(--font-heading)" }} className="font-bold">
                        {t.contact.send}
                      </span>
                    </Button>
                  </motion.div>
                </form>

                <div className="mt-12 pt-10 border-t-2 border-primary/20 text-center">
                  <motion.p
                    className="text-base md:text-lg text-foreground-secondary"
                    style={{ fontFamily: "var(--font-body)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {t.contact.orReach}{" "}
                    <motion.a
                      href="mailto:contact@inanilux.com"
                      className="text-primary hover:text-primary-hover font-semibold inline-flex items-center gap-2 group"
                      style={{ fontFamily: "var(--font-heading)" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      contact@inanilux.com
                    </motion.a>
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Social Media Quick Links */}
          <FadeIn delay={0.4}>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p
                className="text-foreground-secondary mb-8 text-lg md:text-xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Or find me on social media:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-5">
                {[
                  { name: "Twitter", href: "https://twitter.com/inanilux" },
                  { name: "Instagram", href: "https://instagram.com/inanilux" },
                  { name: "GitHub", href: "https://github.com/inanilux" },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 bg-card-background border-2 border-primary/30 rounded-full text-foreground font-semibold hover:bg-primary/10 hover:border-primary transition-all shadow-md"
                    style={{ fontFamily: "var(--font-heading)" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
