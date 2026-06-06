import { ChevronDown, Zap } from "lucide-react";
import hero from "@/assets/hero-car.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.58_0.24_25/0.25),transparent_60%)]" />

      <div className="relative z-10 flex flex-col min-h-[100svh] px-6 pt-28 pb-32 md:pb-24">
        <div className="flex-1 flex flex-col justify-end max-w-3xl">
          <div className="inline-flex items-center gap-2 self-start glass rounded-full px-3 py-1.5 mb-6 animate-fade-up">
            <Zap className="size-3.5 text-primary" fill="currentColor" />
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium">
              Instant booking · 2 minutes
            </span>
          </div>

          <h1
            className="font-display font-bold text-[clamp(2.75rem,11vw,5.5rem)] leading-[0.95] tracking-tight animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Drive <span className="text-gradient-red">Luxury</span>
            <br />in Marrakech
          </h1>

          <p
            className="mt-5 text-base sm:text-lg text-foreground/75 max-w-md animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            Premium car rental experience with ANAS CAR. Delivered to your door, day or night.
          </p>

          <div
            className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="#booking"
              className="h-14 px-7 inline-flex items-center justify-center rounded-full bg-gradient-red font-semibold text-base shadow-glow active:scale-[0.98] transition-transform"
            >
              Book Now
            </a>
            <a
              href="https://wa.me/212704716532"
              target="_blank"
              rel="noreferrer"
              className="h-14 px-7 inline-flex items-center justify-center rounded-full glass font-semibold text-base active:scale-[0.98] transition-transform"
            >
              WhatsApp Us
            </a>
          </div>
        </div>


      </div>
    </section>
  );
}
