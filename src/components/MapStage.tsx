"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Bonapriso,Douala,Cameroon&z=15&output=embed";

export default function MapStage() {
  const [found, setFound] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;
    const timer = setTimeout(() => setFound(true), 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[20px] border border-cream/8 bg-ink-3">
      <div className="flex items-center justify-between border-b border-cream/6 px-5 py-4 font-mono text-xs text-muted-ink">
        <span>google.com/maps · preview</span>
        <div className="flex items-center gap-2.5 select-none">
          <span
            className={`transition-colors ${!found ? "text-cream" : "text-muted-ink"}`}
          >
            Invisible
          </span>
          <button
            type="button"
            aria-label="Toggle map preview state"
            onClick={() => setFound((v) => !v)}
            className={`relative h-6 w-[42px] rounded-full transition-colors ${
              found ? "bg-pin/30" : "bg-cream/15"
            }`}
          >
            <span
              className={`absolute top-[3px] left-[3px] h-[18px] w-[18px] rounded-full transition-all duration-250 ${
                found ? "translate-x-[18px] bg-pin" : "bg-muted-ink"
              }`}
            />
          </button>
          <span
            className={`transition-colors ${found ? "text-cream" : "text-muted-ink"}`}
          >
            Found on Google
          </span>
        </div>
      </div>

      <div className="relative h-[300px] overflow-hidden">
        <iframe
          title="Map preview of Bonapriso, Douala"
          src={MAP_EMBED_SRC}
          loading="lazy"
          className={`pointer-events-none absolute inset-0 h-full w-full border-0 transition-[filter] duration-500 ${
            found ? "grayscale-0 brightness-100" : "grayscale brightness-[.55] contrast-125"
          }`}
        />
        <div
          className={`absolute inset-0 bg-ink transition-opacity duration-500 ${
            found ? "opacity-0" : "opacity-15"
          }`}
        />

        <span
          className={`pointer-events-none absolute top-[44%] left-1/2 -ml-[7px] -mt-[7px] h-3.5 w-3.5 rounded-full bg-pin/50 ${
            found ? "animate-[map-ping_1.8s_ease-out_infinite]" : "opacity-0"
          }`}
        />

        <svg
          className={`absolute top-[44%] left-1/2 z-[3] transition-all duration-500 ${
            found
              ? "-translate-x-1/2 -translate-y-full opacity-100"
              : "-translate-x-1/2 -translate-y-[120%] opacity-0"
          }`}
          width="26"
          height="34"
          viewBox="0 0 26 34"
          fill="none"
        >
          <path
            d="M13 0C5.8 0 0 5.8 0 13c0 9.75 13 21 13 21s13-11.25 13-21C26 5.8 20.2 0 13 0z"
            fill="#ff4e32"
          />
          <circle cx="13" cy="13" r="5" fill="#13231d" />
        </svg>

        <div
          className={`absolute top-[44%] left-1/2 mt-3.5 w-[210px] -translate-x-1/2 rounded-xl bg-paper p-3.5 text-ink shadow-[0_16px_30px_rgba(0,0,0,0.35)] transition-all duration-400 ${
            found
              ? "translate-y-1.5 scale-100 opacity-100"
              : "pointer-events-none translate-y-1.5 scale-95 opacity-0"
          }`}
        >
          <div className="mb-1 font-display text-sm font-bold">
            Boutique Faith
          </div>
          <div className="mb-0.5 flex items-center gap-1.5 text-[11.5px] text-muted-paper">
            <span className="flex items-center gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            4.8 (32)
          </div>
          <div className="mb-0.5 text-[11.5px] text-muted-paper">
            Open · Closes 8PM
          </div>
          <div className="text-[11.5px] text-muted-paper">
            Bonapriso, Douala
          </div>
          <span className="mt-2 inline-block rounded-full bg-teal/15 px-2 py-1 font-mono text-[10px] tracking-wide text-teal">
            VERIFIED
          </span>
        </div>
      </div>
    </div>
  );
}
