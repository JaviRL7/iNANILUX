"use client";

import { motion } from "framer-motion";
import { Youtube, Twitter, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Youtube, href: "https://youtube.com/@inanilux", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com/inanilux", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/inanilux", label: "Instagram" },
];

export function Footer() {

  return (
    <footer className="w-full bg-background border-t border-border/50">
      <div className="w-full max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 font-heading">Inanilux</h3>
            <p className="text-foreground-secondary text-sm font-body">
              Artista Digital & Creadora de Contenido
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-foreground-secondary hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-foreground-secondary text-sm">
              © {new Date().getFullYear()} Inanilux
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
