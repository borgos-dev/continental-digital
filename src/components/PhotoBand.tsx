import Image from "next/image";
import { Star, MapPin, Clock, Phone, ExternalLink } from "lucide-react";

const SHOP_PHOTO =
  "https://images.pexels.com/photos/33852486/pexels-photo-33852486.jpeg";

export default function PhotoBand() {
  return (
    <section className="px-6 py-18">
      <div className="mx-auto max-w-270">
        <div className="mb-11 max-w-[56ch]">
          <div className="mb-4.5 flex items-center gap-2.5 font-mono text-xs tracking-[0.14em] text-pin uppercase before:h-px before:w-5.5 before:bg-pin before:content-['']">
            Before &amp; after
          </div>
          <h2 className="mb-3 font-display text-[clamp(24px,3.4vw,34px)] font-bold tracking-[-0.015em]">
            Same shop. Two different outcomes.
          </h2>
          <p className="text-[15.5px] text-muted-ink">
            On the left, your shop exactly as it is today. On the right, how
            it looks once it&apos;s live, verified, and easy to find on
            Google.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3.5 max-sm:grid-cols-1">
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl">
            <Image
              src={SHOP_PHOTO}
              alt="A premium restaurant dining room, exactly as it looks in person"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5.5">
              <p className="font-mono text-[11px] tracking-[0.14em] text-cream/60 uppercase">
                Today
              </p>
              <p className="mt-1 max-w-[28ch] font-display text-lg font-semibold leading-snug">
                Real, welcoming, easy to miss online.
              </p>
            </div>
          </div>

          <div className="flex min-h-[420px] flex-col overflow-hidden rounded-2xl bg-paper text-ink">
            <div className="relative h-[42%] w-full">
              <Image
                src={SHOP_PHOTO}
                alt="The same restaurant's photo as it appears on its Google Business Profile"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute top-3 right-3 rounded-full bg-teal px-2.5 py-1 font-mono text-[10px] tracking-wide text-ink">
                VERIFIED
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5.5">
              <p className="font-mono text-[11px] tracking-[0.14em] text-teal uppercase">
                On Google
              </p>
              <h3 className="mt-1.5 font-display text-xl font-bold">
                La Table Bonapriso
              </h3>
              <div className="mt-1 flex items-center gap-1.5 text-[13px] text-muted-paper">
                <span className="flex items-center gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                  ))}
                </span>
                <span className="font-semibold text-ink">4.9</span>
                <span>(214) · Restaurant</span>
              </div>
              <div className="mt-3.5 space-y-1.5 text-[13px] text-muted-paper">
                <div className="flex items-center gap-2">
                  <Clock size={13} className="shrink-0 text-teal" />
                  <span className="font-medium text-teal">Open</span>
                  <span>· Closes 10PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="shrink-0" />
                  Rue de la Joie, Bonapriso, Douala
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="shrink-0" />
                  +237 6XX XXX XXX
                </div>
              </div>
              <div className="mt-4.5 flex gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-[12.5px] font-semibold text-paper">
                  Directions
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3.5 py-2 text-[12.5px] font-semibold text-ink">
                  <ExternalLink size={12} />
                  Website
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
