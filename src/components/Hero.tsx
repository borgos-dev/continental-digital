import { WHATSAPP_URL } from "@/lib/constants";
import MapStage from "./MapStage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-16">
      <div
        aria-hidden
        className="motion-reduce:animate-none pointer-events-none absolute -top-28 right-[-8%] h-[440px] w-[440px] rounded-full bg-pin/12 blur-[130px] animate-[hero-glow-drift_14s_ease-in-out_infinite]"
      />
      <div
        aria-hidden
        className="motion-reduce:animate-none pointer-events-none absolute top-36 left-[-10%] h-[340px] w-[340px] rounded-full bg-teal/10 blur-[110px] animate-[hero-glow-drift_18s_ease-in-out_infinite_reverse]"
      />

      <div className="relative mx-auto max-w-270">
        <div className="grid items-center gap-x-12 gap-y-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <div className="motion-reduce:animate-none mb-4.5 flex items-center gap-2.5 font-mono text-xs tracking-[0.14em] text-gold uppercase before:h-px before:w-5.5 before:bg-gold before:content-[''] animate-[hero-rise_0.55s_ease-out_both]">
              Local Search · Douala
            </div>
            <h1 className="motion-reduce:animate-none mb-5.5 max-w-[15ch] font-display text-[clamp(32px,5.4vw,54px)] leading-[1.06] font-bold tracking-[-0.02em] max-sm:max-w-none animate-[hero-rise_0.6s_ease-out_0.08s_both]">
              Your shop is real. Let&apos;s{" "}
              <em className="text-pin not-italic">put it on the map</em>.
            </h1>
            <p className="motion-reduce:animate-none mb-8 max-w-[46ch] text-[17px] text-muted-ink animate-[hero-rise_0.6s_ease-out_0.16s_both]">
              We claim, verify, and build out your business on Google Maps
              and Search — so customers nearby find you first.
            </p>
            <div className="motion-reduce:animate-none mb-10 flex flex-wrap items-center gap-5.5 animate-[hero-rise_0.6s_ease-out_0.24s_both]">
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
            <div className="motion-reduce:animate-none flex items-center gap-5 border-t border-cream/8 pt-6 animate-[hero-rise_0.6s_ease-out_0.32s_both]">
              <div>
                <div className="font-display text-lg font-bold text-cream">
                  Douala
                </div>
                <div className="font-mono text-[11px] tracking-[0.1em] text-muted-ink uppercase">
                  Where we work
                </div>
              </div>
              <div className="h-8 w-px bg-cream/10" />
              <div>
                <div className="font-display text-lg font-bold text-cream">
                  ~1 week
                </div>
                <div className="font-mono text-[11px] tracking-[0.1em] text-muted-ink uppercase">
                  Shop to searchable
                </div>
              </div>
              <div className="h-8 w-px bg-cream/10" />
              <div>
                <div className="font-display text-lg font-bold text-cream">
                  Google
                </div>
                <div className="font-mono text-[11px] tracking-[0.1em] text-muted-ink uppercase">
                  Maps &amp; Search
                </div>
              </div>
            </div>
          </div>

          <div className="motion-reduce:animate-none animate-[hero-panel-in_0.7s_ease-out_0.3s_both]">
            <MapStage />
          </div>
        </div>
      </div>
    </section>
  );
}
