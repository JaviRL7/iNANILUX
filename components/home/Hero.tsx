"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import { LucideIcon, Youtube, Instagram, Music, Twitter } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  socialStats: Array<{ icon: LucideIcon; count: number; label: string; href: string }>;
}

const cards = [
  {
    id: 1,
    backTitle: "Videos",
    backContent: "Vlogs, tutoriales y cobertura de eventos GO Fest de Pokémon",
    backImage: "/PNG/rojo.png",
    backColor: "#EF4444", // Rojo vibrante
  },
  {
    id: 2,
    backTitle: "Arte",
    backContent: "Fan art, diseños originales y comisiones personalizadas",
    backImage: "/PNG/verde.png",
    backColor: "#10B981", // Verde vibrante
  },
  {
    id: 3,
    backTitle: "Comunidad",
    backContent: "Únete en YouTube, Instagram, TikTok y más redes sociales",
    backImage: "/PNG/azul.png",
    backColor: "#3B82F6", // Azul vibrante
  },
];

export function Hero({ socialStats }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLSection>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Configurar velocidad del video
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500", // Distancia reducida para animación más rápida
          scrub: 1, // Scrub suave sin tirones
          pin: true,
          anticipatePin: 1,
        },
      });

      // ========== FASE 1: Zoom out del video (0 - 1.5s) ==========
      // Video se reduce a 75vh
      masterTL.to(videoRef.current, {
        height: "75vh",
        width: "133.33vh", // Ancho exacto: 75vh × 16/9
        borderRadius: "0rem", // Quitar bordes redondeados al reducirse
        ease: "power1.out", // Empieza rápido y termina suave
        duration: 1.5,
      }, 0);

      // Overlay se reduce junto con el video
      masterTL.to(overlayRef.current, {
        height: "75vh",
        width: "133.33vh",
        borderRadius: "0rem",
        ease: "power1.out",
        duration: 1.5,
      }, 0);

      // Contenido (foto y texto) sube completamente fuera de la pantalla
      masterTL.to(contentRef.current, {
        y: "-100vh", // Sube completamente fuera de la pantalla
        ease: "power1.out",
        duration: 1.5,
      }, 0);

      // ========== FASE 2: Cambio imperceptible video → imagen (1.5s - 1.75s) ==========
      // Fade out del video muy rápido
      masterTL.to(videoRef.current, {
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.25,
      }, 1.5);

      // Fade in de la imagen EN EL MISMO MOMENTO
      masterTL.to(imageContainerRef.current, {
        opacity: 1,
        ease: "power1.inOut",
        duration: 0.25,
      }, 1.5);

      // ========== FASE 3: Separación de las cards (1.9s - 2.3s) ==========
      // Las cards se separan añadiendo gap de forma rápida
      masterTL.to(cardsWrapperRef.current, {
        gap: "4rem", // Mayor separación
        ease: "power2.out", // Más rápido al principio
        duration: 0.4,
      }, 1.9);

      // ========== FASE 4: Inclinación de cards laterales (2.3s - 2.7s) ==========
      // Card izquierda se inclina hacia la izquierda
      if (cardRefs.current[0]) {
        masterTL.to(cardRefs.current[0], {
          rotateZ: -5,
          duration: 0.4,
          ease: "power1.out",
        }, 2.3);
      }

      // Card derecha se inclina hacia la derecha
      if (cardRefs.current[2]) {
        masterTL.to(cardRefs.current[2], {
          rotateZ: 5,
          duration: 0.4,
          ease: "power1.out",
        }, 2.3);
      }

      // ========== FASE 5: Flip de TODAS las cards a la vez (2.7s - 3.4s) ==========
      // Todas las cards se voltean simultáneamente
      cardRefs.current.forEach((card) => {
        if (card) {
          masterTL.to(card, {
            rotateY: 180,
            duration: 0.7,
            ease: "power1.inOut",
          }, 2.7);
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-white"
    >
      {/* ========== VIDEO DE FONDO ========== */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute object-cover z-0"
        style={{
          width: "95vw",
          height: "95vh",
          borderRadius: "1.5rem",
          maxWidth: "none",
        }}
        onCanPlay={(e) => {
          e.currentTarget.playbackRate = 0.5;
        }}
      >
        <source src="/video/intro.mp4" type="video/mp4" />
      </video>

      {/* Overlay oscuro - mismo tamaño que el video */}
      <div
        ref={overlayRef}
        className="absolute bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-[5]"
        style={{
          width: "95vw",
          height: "95vh",
          borderRadius: "1.5rem",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* ========== CONTENIDO INICIAL (FOTO + TEXTO) ========== */}
      <div ref={contentRef} className="max-w-6xl mx-auto text-center relative z-10 px-6">
        <FadeIn delay={0.2}>
          <div className="relative inline-block mb-10">
            <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-[6px] border-white shadow-2xl">
              <Image
                src="/fotoina.jpg"
                alt="Inanilux"
                width={288}
                height={288}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="text-9xl md:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-extrabold mb-10 text-white drop-shadow-2xl tracking-tighter font-bricolage leading-none">
            Inanilux
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 drop-shadow-lg font-medium tracking-wide font-body">
            Artista Digital & Creadora de Contenido
          </p>
        </FadeIn>
      </div>

      {/* ========== IMAGEN DIVIDIDA EN 3 CARDS (INICIALMENTE 75vh) ========== */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 z-20 flex items-center justify-center opacity-0 bg-white"
      >
        {/* Wrapper de las cards - inicia sin gap, luego se añade */}
        <div
          ref={cardsWrapperRef}
          className="flex h-[75vh] gap-0"
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="perspective-1000"
              style={{
                perspective: "1000px",
                width: "44.44vh", // 75vh * 16/9 / 3 = ancho fijo por card
                flexShrink: 0, // No encogerse cuando se añade gap
              }}
            >
              {/* Card container con flip 3D */}
              <div
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="relative w-full h-full bg-white"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* ========== CARA FRONTAL (1/3 DE LA IMAGEN) ========== */}
                <div
                  className="absolute inset-0 overflow-hidden rounded-3xl"
                  style={{
                    backgroundImage: "url(/capturas/c1.jpeg)",
                    backgroundSize: "300%", // Imagen 3x para dividir en 3
                    backgroundPosition: index === 0 ? "0% center" : index === 1 ? "50% center" : "100% center",
                    backgroundRepeat: "no-repeat",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  {/* Overlay oscuro igual que el video */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
                </div>

                {/* ========== CARA TRASERA (INFORMACIÓN CON COLORES) ========== */}
                <div
                  className="absolute inset-0 overflow-hidden rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col justify-center items-center text-center"
                  style={{
                    transform: "rotateY(180deg)",
                    backgroundColor: card.backColor, // Rojo, Verde o Azul
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  {/* Imagen PNG del Pokémon más visible */}
                  <div
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${card.backImage})`,
                      opacity: 0.35, // Más visible
                      transform: "scale(1.2)", // Más grande
                    }}
                  />

                  {/* Contenido con z-index superior */}
                  <div className="w-full h-full relative z-10 flex flex-col items-center justify-center p-8">
                    {index === 0 ? (
                      // CARD ROJA - Redes Sociales
                      <>
                        {/* Foto circular pequeña arriba */}
                        <div className="mb-6">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl">
                            <Image
                              src="/fotoina.jpg"
                              alt="Inanilux"
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 font-bricolage drop-shadow-2xl text-center">
                          Sígueme
                        </h3>
                        <p className="text-white/90 text-sm mb-6 font-body text-center">
                          Únete a la comunidad
                        </p>

                        {/* Redes sociales con números */}
                        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <Youtube className="w-8 h-8 text-white mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white font-bricolage">45K</div>
                            <div className="text-xs text-white/80 font-body">Suscriptores</div>
                          </div>

                          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <Instagram className="w-8 h-8 text-white mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white font-bricolage">32K</div>
                            <div className="text-xs text-white/80 font-body">Seguidores</div>
                          </div>

                          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <Music className="w-8 h-8 text-white mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white font-bricolage">28K</div>
                            <div className="text-xs text-white/80 font-body">TikTok</div>
                          </div>

                          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <Twitter className="w-8 h-8 text-white mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white font-bricolage">15K</div>
                            <div className="text-xs text-white/80 font-body">Seguidores</div>
                          </div>
                        </div>
                      </>
                    ) : (
                      // OTRAS CARDS - Contenido original
                      <div className="max-w-xs">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 font-bricolage drop-shadow-2xl">
                          {card.backTitle}
                        </h3>
                        <p className="text-white text-base md:text-lg lg:text-xl font-medium font-body leading-relaxed drop-shadow-lg">
                          {card.backContent}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
