import { WHATSAPP_URL, PHONE_DISPLAY } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-18">
      <div className="mx-auto max-w-270">
        <div className="rounded-[22px] bg-paper px-6 py-13 text-center text-ink sm:px-10">
          <h2 className="mb-3 font-display text-[clamp(24px,3.4vw,34px)] font-bold tracking-[-0.015em] text-ink">
            Ready to be found?
          </h2>
          <p className="mx-auto mb-7 max-w-[40ch] text-[15.5px] text-muted-paper">
            Send a message on WhatsApp. Most shops in Douala are live on
            Google within a week.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-pin px-7 py-3.5 text-[15px] font-semibold text-ink shadow-[0_6px_20px_rgba(255,78,50,0.25)] transition-all hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(255,78,50,0.35)]"
          >
            Chat on WhatsApp
          </a>
          <span className="mt-4 block font-mono text-[13px] text-muted-paper">
            {PHONE_DISPLAY}
          </span>
        </div>
      </div>
    </section>
  );
}
