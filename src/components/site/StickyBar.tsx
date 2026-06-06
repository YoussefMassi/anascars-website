import { MessageCircle, Zap } from "lucide-react";

export function StickyBar() {
  return (
    <>
      {/* Floating WhatsApp (always visible) */}
      <a
        href="https://wa.me/212704716532"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-40 size-14 rounded-full grid place-items-center bg-[oklch(0.62_0.18_145)] shadow-luxury animate-pulse-ring"
      >
        <MessageCircle className="size-6" fill="currentColor" />
      </a>

      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 px-4 pb-4 pt-3 bg-gradient-to-t from-background via-background/95 to-transparent">
        <a
          href="#booking"
          className="flex items-center justify-center gap-2 h-14 rounded-full bg-gradient-red font-semibold shadow-glow active:scale-[0.98] transition-transform"
        >
          <Zap className="size-4" fill="currentColor" />
          Book Now · Instant
        </a>
      </div>
    </>
  );
}
