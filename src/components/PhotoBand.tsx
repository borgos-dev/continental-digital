import Image from "next/image";

export default function PhotoBand() {
  return (
    <section className="relative h-[360px] overflow-hidden sm:h-[440px]">
      <Image
        src="https://images.pexels.com/photos/30020992/pexels-photo-30020992.jpeg"
        alt="A shopkeeper standing among fully stocked shelves inside a small local shop"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/10" />
      <div className="absolute inset-x-0 bottom-0 px-6 pb-10">
        <div className="mx-auto max-w-270">
          <p className="max-w-[38ch] font-display text-xl font-semibold leading-snug sm:text-2xl">
            Your shop is already real. We make sure Google agrees.
          </p>
        </div>
      </div>
    </section>
  );
}
