"use client";

import { Youtube, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { SVGProps } from "react";

const TiktokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function Redes() {
  const socials = [
    { icon: Youtube, href: "https://youtube.com/@inanilux", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com/inanilux", label: "Instagram" },
    { icon: TiktokIcon, href: "https://tiktok.com/@inanilux", label: "TikTok" },
    { icon: Twitter, href: "https://twitter.com/inanilux", label: "Twitter" },
  ];

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight font-heading">
            Únete a la Comunidad
          </h2>
          <p className="text-lg text-foreground-secondary mb-12 font-light max-w-2xl mx-auto leading-relaxed font-body">
            Sígueme en mis redes sociales para no perderte ningún contenido nuevo
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-8">
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background-secondary/30 hover:bg-background-secondary/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                <span className="text-sm font-medium text-foreground font-body">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
