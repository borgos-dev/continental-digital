import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function Header() {
  return (
    <header className="border-b border-cream/8 py-5">
      <div className="mx-auto flex max-w-270 items-center justify-between px-6">
        <div className="flex items-center gap-2 font-display text-[19px] font-bold tracking-tight">
          <span className="h-2 w-2 rounded-full bg-pin shadow-[0_0_0_3px_rgba(255,78,50,0.2)]" />
          Continental Digital
          <span className="ml-0.5 font-mono text-[11px] font-normal text-muted-ink">
            / DOUALA
          </span>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-pin px-5 py-2.75 text-sm font-semibold text-ink shadow-[0_6px_20px_rgba(255,78,50,0.25)] transition-all hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(255,78,50,0.35)]"
        >
          <MessageCircle size={16} strokeWidth={2.25} />
          Chat on WhatsApp
        </a>
      </div>
    </header>
  );
}
