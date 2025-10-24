"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";

export function Sobre() {
  return (
    <section id="about" className="w-full py-20 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-xs uppercase tracking-widest text-primary font-semibold block text-center mb-3 font-body">
            Conóceme
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight font-heading">
            Sobre mí
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <FadeIn delay={0.2} className="md:col-span-2">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image src="/fotoina.jpg" alt="Inanilux" fill className="object-cover" />
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="md:col-span-3">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight font-heading">
                  Hola, soy Inanilux
                </h3>
                <p className="text-lg leading-relaxed text-foreground/80 font-light font-body">
                  Artista digital apasionada por crear mundos fantásticos y personajes únicos. Mi
                  trabajo se centra en la ilustración digital, el diseño de personajes y el arte
                  conceptual.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <p className="text-base leading-relaxed text-foreground-secondary font-light font-body">
                  En mi canal de YouTube comparto mi proceso creativo, desde los primeros bocetos
                  hasta la pieza final. Me encanta experimentar con nuevas técnicas y estilos,
                  siempre buscando evolucionar como artista.
                </p>
              </div>

              <div>
                <p className="text-base leading-relaxed text-foreground-secondary font-light font-body">
                  Mi objetivo es inspirar a otros artistas y construir una comunidad creativa donde
                  podamos aprender y crecer juntos. Cada proyecto es una oportunidad para explorar
                  nuevas ideas y llevar mi arte al siguiente nivel.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Ilustración Digital
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Diseño de Personajes
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Arte Conceptual
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
