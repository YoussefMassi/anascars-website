import { Clock, Sparkles, Truck, ShieldCheck } from "lucide-react";

const items = [
  { icon: Clock, title: "24/7 Service", text: "Day or night, we're at your service across Marrakech." },
  { icon: Sparkles, title: "Clean & Sanitized", text: "Every vehicle is detailed and disinfected before delivery." },
  { icon: Truck, title: "Fast Delivery", text: "Door-to-door delivery anywhere in Marrakech in under 60 min." },
  { icon: ShieldCheck, title: "Fully Insured", text: "Drive with peace of mind, full coverage included." },
];

export function Trust() {
  return (
    <section id="trust" className="relative py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-3">
          Why ANAS CAR
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-10">
          Built on <span className="text-gradient-red">trust</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((it) => (
            <div key={it.title} className="glass rounded-3xl p-6 flex gap-4 hover:border-primary/40 transition">
              <div className="size-12 shrink-0 rounded-2xl bg-gradient-red grid place-items-center shadow-glow">
                <it.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">{it.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
