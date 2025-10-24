"use client";

import { motion } from "framer-motion";
import { Youtube, Twitter, Instagram, TikTok, Heart, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { icon: Youtube, href: "https://youtube.com/@inanilux", label: "YouTube", color: "hover:text-red-500" },
  { icon: Twitter, href: "https://twitter.com/inanilux", label: "Twitter", color: "hover:text-blue-400" },
  { icon: Instagram, href: "https://instagram.com/inanilux", label: "Instagram", color: "hover:text-pink-500" },
  { icon: TikTok, href: "https://tiktok.com/@inanilux", label: "TikTok", color: "hover:text-white" },
];

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Galería", href: "#galeria" },
  { label: "Videos", href: "#videos" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-t-4 border-primary">
      <div className="w-full max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Sección 1: Sobre mí con foto */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <Image
                  src="/fotoina.jpg"
                  alt="Inanilux"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-4xl font-extrabold mb-1 font-bricolage bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Inanilux
                </h3>
                <p className="text-foreground-secondary text-sm font-body">
                  Artista Digital & Creadora de Contenido
                </p>
              </div>
            </div>
            <p className="text-foreground/80 font-body leading-relaxed mb-6 max-w-md">
              Apasionada por Pokémon GO, el arte digital y la creación de contenido.
              Comparto mi viaje creativo con una comunidad increíble de más de 100K seguidores.
            </p>

            {/* Ubicación y email */}
            <div className="space-y-2 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>España</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contact@inanilux.com" className="hover:text-primary transition-colors">
                  contact@inanilux.com
                </a>
              </div>
            </div>
          </div>

          {/* Sección 2: Enlaces rápidos */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-bricolage text-foreground">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors font-body inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sección 3: Redes Sociales */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-bricolage text-foreground">
              Sígueme
            </h4>
            <div className="flex flex-wrap gap-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-foreground ${social.color} transition-all shadow-lg hover:shadow-xl border border-white/20`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-foreground/60 font-body">
              Más de <span className="font-bold text-primary">100K+</span> seguidores
            </p>
          </div>
        </div>

        {/* Divisor decorativo */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />

        {/* Footer inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground-secondary text-sm font-body text-center md:text-left">
            © {new Date().getFullYear()} Inanilux. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-2 text-sm text-foreground/60 font-body">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>y dedicación</span>
          </div>

          <div className="flex gap-4 text-xs text-foreground/50">
            <a href="/privacy" className="hover:text-primary transition-colors">
              Privacidad
            </a>
            <span>•</span>
            <a href="/terms" className="hover:text-primary transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
