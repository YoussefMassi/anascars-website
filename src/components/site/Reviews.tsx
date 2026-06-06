import { Star } from "lucide-react";

const reviews = [
  { name: "Sophie L.", country: "France", text: "Mercedes delivered to my riad in 30 minutes. Spotless car, flawless service. The Marrakech experience starts here." },
  { name: "James R.", country: "United Kingdom", text: "Easiest rental I've ever booked. WhatsApp reply in seconds, and the Range Rover was immaculate." },
  { name: "Karim B.", country: "UAE", text: "Premium service end to end. The Porsche made our weekend in Marrakech unforgettable. Highly recommend." },
  { name: "Elena M.", country: "Italy", text: "Professional, fast, and genuinely luxurious. ANAS CAR sets the standard in Morocco." },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-20 md:py-28">
      <div className="px-6 max-w-6xl mx-auto mb-8">
        <p className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-3">Reviews</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
          Loved across <span className="text-gradient-red">the world</span>
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 pb-6 hide-scrollbar snap-x-mandatory">
        {reviews.map((r) => (
          <article
            key={r.name}
            className="snap-center shrink-0 w-[82vw] max-w-[360px] bg-gradient-card rounded-3xl p-6 border border-white/8 shadow-card"
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 text-primary" fill="currentColor" />
              ))}
            </div>
            <p className="text-foreground/85 leading-relaxed">"{r.text}"</p>
            <div className="mt-5 pt-5 border-t border-white/8">
              <div className="font-semibold">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.country}</div>
            </div>
          </article>
        ))}
        <div className="shrink-0 w-2" />
      </div>
    </section>
  );
}
