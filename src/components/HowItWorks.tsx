const steps = [
  {
    num: "01",
    title: "We visit your shop",
    body: "Ten minutes — we gather your name, address, hours, and take real photos.",
  },
  {
    num: "02",
    title: "We claim & verify",
    body: "We handle the process with Google. The listing stays yours — you own it.",
  },
  {
    num: "03",
    title: "We build it out",
    body: "Photos, description, products, and first posts — done properly.",
  },
  {
    num: "04",
    title: "You go live",
    body: "Searchable on Google Maps and Search, usually within a week.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="px-6 py-18">
      <div className="mx-auto max-w-270">
        <div className="mb-11 max-w-[56ch]">
          <div className="mb-4.5 flex items-center gap-2.5 font-mono text-xs tracking-[0.14em] text-gold uppercase before:h-px before:w-5.5 before:bg-gold before:content-['']">
            Process
          </div>
          <h2 className="font-display text-[clamp(24px,3.4vw,34px)] font-bold tracking-[-0.015em]">
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-4 max-sm:grid-cols-1 max-sm:gap-7 sm:max-lg:grid-cols-2 sm:max-lg:gap-y-7">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative pr-4.5 ${
                i !== steps.length - 1
                  ? "after:absolute after:top-3.5 after:right-0 after:h-px after:w-4.5 after:bg-cream/20 after:content-[''] max-sm:after:hidden lg:after:block"
                  : ""
              } ${i === 1 ? "sm:max-lg:after:hidden" : ""}`}
            >
              <div className="mb-3.5 font-mono text-xs text-pin">
                {step.num}
              </div>
              <h3 className="mb-2 font-display text-base font-semibold">
                {step.title}
              </h3>
              <p className="text-[13.5px] leading-normal text-muted-ink">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
