"use client";

import Image from "next/image";
import { Play, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

interface Video {
  id: number;
  title: string;
  videoId: string;
  thumbnail: string;
}

interface VideosProps {
  latestVideos: Video[];
}

export function LatestVideo({ video }: { video: Video }) {
  return (
    <section className="w-full py-16 px-6 bg-primary/5">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-primary font-semibold font-body">
                Último Video
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight font-heading">
                Contenido Reciente
              </h2>
            </div>
            <a
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-primary hover:gap-4 transition-all"
            >
              <span className="text-sm font-medium">Ver en YouTube</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mt-4 group-hover:text-primary transition-colors font-body">
              {video.title}
            </h3>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

export function Videos({ latestVideos }: VideosProps) {
  return (
    <section id="videos" className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <span className="text-xs uppercase tracking-widest text-primary font-semibold block text-center mb-3 font-body">
            Contenido
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight font-heading">
            Últimos Videos
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestVideos.map((video, index) => (
            <FadeIn key={video.id} delay={0.2 + index * 0.1}>
              <a
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2 font-body">
                  {video.title}
                </h3>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
