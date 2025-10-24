"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";

interface Artwork {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ArteProps {
  artworks: Artwork[];
}

export function Arte({ artworks }: ArteProps) {
  return (
    <section id="art" className="w-full py-20 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <span className="text-xs uppercase tracking-widest text-primary font-semibold block text-center mb-3 font-body">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight font-heading">
            Mi Arte
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <FadeIn key={artwork.id} delay={0.2 + index * 0.1}>
              <motion.div whileHover={{ y: -8 }} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-bold text-xl mb-2 tracking-tight font-heading">{artwork.title}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed font-light font-body">
                  {artwork.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
