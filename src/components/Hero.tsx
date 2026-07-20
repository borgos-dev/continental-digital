import { WHATSAPP_URL } from "@/lib/constants";
import MapStage from "./MapStage";

export default function Hero() {
  return (
    <section className="px-6 pt-20 pb-10">
      <div className="mx-auto max-w-270">
        <div className="mb-4.5 flex items-center gap-2.5 font-mono text-xs tracking-[0.14em] text-gold uppercase before:h-px before:w-5.5 before:bg-gold before:content-['']">
          Local Search · Douala
        </div>
        <h1 className="mb-5.5 max-w-[15ch] font-display text-[clamp(32px,5.4vw,54px)] leading-[1.06] font-bold tracking-[-0.02em] max-sm:max-w-none">
          Your shop is real. Let&apos;s{" "}
          <em className="text-pin not-italic">put it on the map</em>.
        </h1>
        <p className="mb-8 max-w-[46ch] text-[17px] text-muted-ink">
          We claim, verify, and build out your business on Google Maps and
          Search — so customers nearby find you first.
        </p>
        <div className="mb-14 flex flex-wrap items-center gap-5.5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-pin px-5 py-2.75 text-sm font-semibold text-ink shadow-[0_6px_20px_rgba(255,78,50,0.25)] transition-all hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(255,78,50,0.35)]"
          >
            Chat on WhatsApp
          </a>
          <a
            href="#how"
            className="border-b border-cream/35 pb-0.5 text-sm font-semibold text-cream"
          >
            See how it works →
          </a>
        </div>

        <MapStage />
      </div>
    </section>
  );
}
