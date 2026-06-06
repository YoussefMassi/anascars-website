import logo from "@/assets/anas-car-logo.png";

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.58_0.24_25/0.15),transparent_70%)]" />
      <div className="relative max-w-4xl mx-auto text-center">
        <img src={logo} alt="ANAS CAR" className="mx-auto h-24 w-24 rounded-full mb-8 shadow-glow" />
        <p className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-3">About</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
          The Marrakech standard for <span className="text-gradient-red">luxury rental</span>
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          ANAS CAR is the go-to premium car rental in Marrakech. We combine a hand-picked fleet of luxury, sport and SUV vehicles with white-glove service, instant booking and 24/7 delivery — so your trip starts the moment you arrive.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl mx-auto">
          {[
            { k: "500+", v: "Happy clients" },
            { k: "30+", v: "Premium cars" },
            { k: "24/7", v: "Concierge" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl p-4">
              <div className="font-display font-bold text-2xl sm:text-3xl text-gradient-red">{s.k}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
