"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Card {
  id: number;
  frontTitle: string;
  frontImage: string;
  backTitle: string;
  backContent: string;
}

const cards: Card[] = [
  {
    id: 1,
    frontTitle: "Videos",
    frontImage: "/G1.jfif",
    backTitle: "Contenido de Pokémon",
    backContent: "Vlogs, tutoriales y cobertura de eventos GO Fest",
  },
  {
    id: 2,
    frontTitle: "Arte",
    frontImage: "/G2.jfif",
    backTitle: "Ilustración Digital",
    backContent: "Fan art, diseños originales y comisiones personalizadas",
  },
  {
    id: 3,
    frontTitle: "Comunidad",
    frontImage: "/G3.jfif",
    backTitle: "Conecta Conmigo",
    backContent: "Únete a la comunidad en YouTube, Instagram y más",
  },
];

export function Cards3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animación de entrada de las cards
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Flip de cada card en hover (CSS lo maneja)
      // Pero podríamos agregar animación al scroll si queremos
      cardsRef.current.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 70%",
          onEnter: () => {
            // Auto-flip después de un delay
            setTimeout(() => {
              card.classList.add("flipped");
            }, 500 + index * 200);
          },
          onLeaveBack: () => {
            card.classList.remove("flipped");
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex items-center justify-center px-6 py-20 relative z-10"
      style={{ marginTop: "-50vh" }} // Overlap con el hero
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="card-container perspective-1000"
              style={{ perspective: "1000px" }}
            >
              <div className="card-inner relative w-full h-96 transition-transform duration-700 preserve-3d cursor-pointer hover:flipped">
                {/* Front */}
                <div className="card-face card-front absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl">
                  <div
                    className="w-full h-full bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${card.frontImage})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <h3 className="text-4xl font-bold text-white font-bricolage">
                        {card.frontTitle}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div className="card-face card-back absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary to-secondary p-8 flex flex-col justify-center items-center text-center rotate-y-180">
                  <h3 className="text-3xl font-bold text-white mb-4 font-bricolage">
                    {card.backTitle}
                  </h3>
                  <p className="text-white/90 text-lg font-body leading-relaxed">
                    {card.backContent}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
