import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-3">Contact</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-10">
          Reserve your <span className="text-gradient-red">ride</span>
        </h2>

        <div className="space-y-3">
          <a href="tel:+212704716532" className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-primary/40 transition">
            <div className="size-12 rounded-2xl bg-gradient-red grid place-items-center shadow-glow">
              <Phone className="size-5" />
            </div>
            <div className="flex-1">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Call</div>
              <div className="font-semibold text-lg">07 04 71 65 32</div>
            </div>
          </a>

          <a href="mailto:anasanba512@gmail.com" className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-primary/40 transition">
            <div className="size-12 rounded-2xl bg-gradient-red grid place-items-center shadow-glow">
              <Mail className="size-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Email</div>
              <div className="font-semibold text-base truncate">anasanba512@gmail.com</div>
            </div>
          </a>

          <div className="flex items-center gap-4 glass rounded-2xl p-5">
            <div className="size-12 rounded-2xl bg-gradient-red grid place-items-center shadow-glow">
              <MapPin className="size-5" />
            </div>
            <div className="flex-1">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Location</div>
              <div className="font-semibold text-lg">Marrakech, Morocco</div>
            </div>
          </div>

          <a
            href="https://wa.me/212704716532"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 h-16 rounded-2xl bg-[oklch(0.62_0.18_145)] font-semibold text-lg shadow-luxury active:scale-[0.98] transition-transform mt-4"
          >
            <MessageCircle className="size-5" fill="currentColor" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <footer className="mt-20 pt-10 border-t border-white/8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ANAS CAR — Location de voiture · Marrakech
      </footer>
    </section>
  );
}
