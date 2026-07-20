import Image from "next/image";
import {
  Camera,
  CircleCheck,
  ShoppingBag,
  Megaphone,
  Star,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Photos that sell",
    body: "Logo, storefront, interior, and product shots that make people stop scrolling.",
  },
  {
    icon: CircleCheck,
    title: "Full profile, done right",
    body: "Category, hours, description, and attributes filled in properly — not left blank.",
  },
  {
    icon: ShoppingBag,
    title: "Products & services",
    body: "Your price list, visible right inside the search result.",
  },
  {
    icon: Megaphone,
    title: "Posts & updates",
    body: "Offers and news that keep your listing active — and ranking.",
  },
  {
    icon: Star,
    title: "Review link",
    body: "One tap for customers to leave a review — no app required.",
  },
  {
    icon: MessageSquare,
    title: "Message button",
    body: "Customers message your shop straight from Google — we monitor it.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-18">
      <div className="mx-auto max-w-270">
        <div className="mb-11 max-w-[56ch]">
          <div className="mb-4.5 flex items-center gap-2.5 font-mono text-xs tracking-[0.14em] text-teal uppercase before:h-px before:w-5.5 before:bg-teal before:content-['']">
            What&apos;s included
          </div>
          <h2 className="mb-3 font-display text-[clamp(24px,3.4vw,34px)] font-bold tracking-[-0.015em]">
            Everything a listing needs to actually get chosen
          </h2>
          <p className="text-[15.5px] text-muted-ink">
            A blank or half-filled listing barely shows up. We build yours
            out properly, once, then keep it active.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3.5 max-sm:grid-cols-1 sm:max-lg:grid-cols-2">
          {features.map(({ icon: Icon, title, body }, i) =>
            i === 0 ? (
              <div
                key={title}
                className="relative col-span-1 row-span-1 min-h-56 overflow-hidden rounded-2xl"
              >
                <Image
                  src="https://images.pexels.com/photos/30840030/pexels-photo-30840030.jpeg"
                  alt="A shop owner arranging products on shelves inside a small local shop"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5.5">
                  <div className="mb-4 flex h-8.5 w-8.5 items-center justify-center rounded-[9px] bg-paper">
                    <Icon size={17} className="text-ink" strokeWidth={1.6} />
                  </div>
                  <h3 className="mb-1.5 font-display text-base font-semibold tracking-[-0.01em]">
                    {title}
                  </h3>
                  <p className="text-[13.5px] leading-normal text-cream/75">
                    {body}
                  </p>
                </div>
              </div>
            ) : (
              <div key={title} className="rounded-2xl bg-paper p-5.5 text-ink">
                <div className="mb-4 flex h-8.5 w-8.5 items-center justify-center rounded-[9px] bg-ink">
                  <Icon size={17} className="text-paper" strokeWidth={1.6} />
                </div>
                <h3 className="mb-1.5 font-display text-base font-semibold tracking-[-0.01em]">
                  {title}
                </h3>
                <p className="text-[13.5px] leading-normal text-muted-paper">
                  {body}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
