"use client";

import { Youtube, Instagram, Twitter } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Cards3D } from "@/components/home/Cards3D";
import { LatestVideo, Videos } from "@/components/home/Videos";
import { Arte } from "@/components/home/Arte";
import { Redes } from "@/components/home/Redes";
import { Sobre } from "@/components/home/Sobre";

export default function HomePage() {
  const socialStats = [
    { icon: Youtube, count: 45, label: "YouTube", href: "https://youtube.com/@inanilux" },
    { icon: Instagram, count: 32, label: "Instagram", href: "https://instagram.com/inanilux" },
    { icon: Twitter, count: 28, label: "Twitter", href: "https://twitter.com/inanilux" },
  ];

  const latestVideos = [
    {
      id: 1,
      title: "GO FEST MADRID 2024 - VLOG Completo",
      videoId: "YTfdNXkMkg0",
      thumbnail: "https://img.youtube.com/vi/YTfdNXkMkg0/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "REUNIÓN POKÉMON GO - ¡Conociendo jugadores!",
      videoId: "nBJ6I3RojmI",
      thumbnail: "https://img.youtube.com/vi/nBJ6I3RojmI/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "MEJORES MOMENTOS GO FEST 2024",
      videoId: "6K0xQhDlEss",
      thumbnail: "https://img.youtube.com/vi/6K0xQhDlEss/maxresdefault.jpg",
    },
  ];

  const artworks = [
    {
      id: 1,
      title: "Digital Portrait",
      description: "Explorando emociones a través del arte digital",
      image: "/G1.jfif",
    },
    {
      id: 2,
      title: "Fantasy Characters",
      description: "Diseños originales de personajes",
      image: "/G2.jfif",
    },
    {
      id: 3,
      title: "Landscape Studies",
      description: "Arte de entornos y mundos",
      image: "/G3.jfif",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero con zoom-out y división en cards */}
      <Hero socialStats={[]} />

      {/* Galería de Arte */}
      <Arte />
    </div>
  );
}
