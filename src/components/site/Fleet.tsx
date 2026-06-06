import { ArrowRight, Fuel, Gauge, Users } from "lucide-react";
import { FLEET } from "@/data/fleet";

// ── Brand placeholder colors (used when no image is available) ──
function getBrandColor(name: string) {
  if (name.startsWith("Dacia")) return "oklch(0.45 0.18 155)";
  if (name.startsWith("Renault")) return "oklch(0.45 0.22 25)";
  if (name.startsWith("Opel")) return "oklch(0.40 0.02 240)";
  if (name.startsWith("Kia")) return "oklch(0.38 0.15 240)";
  if (name.startsWith("Hyundai")) return "oklch(0.42 0.18 230)";
  if (name.startsWith("Volkswagen")) return "oklch(0.38 0.18 240)";
  if (name.startsWith("Audi")) return "oklch(0.35 0.02 0)";
  return "oklch(0.38 0.12 25)";
}

function getBrandInitials(name: string) {
  return name.split(" ").slice(0, 2).map(p => p[0]).join("").toUpperCase();
}

// ── Props ────────────────────────────────────────────────────────
type FleetProps = {
  // Called when user clicks "Enquire" on a car card.
  // Passes the car name so the booking form can pre-select it.
  onEnquire?: (carName: string) => void;
};

export function Fleet({ onEnquire }: FleetProps) {
  return (
    <section id="fleet" className="relative py-24 md:py-32">
      <div className="px-6 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              Our Fleet
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
              Choose your <span className="text-gradient-red">drive</span>
            </h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
            Contact <ArrowRight className="size-4" />
          </a>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 pb-6 hide-scrollbar snap-x-mandatory">
        {FLEET.map((car) => {
          // Image path → /public/cars/<filename>
          // To replace: just swap the file at /public/cars/<filename>
          const imagePath = `/cars/${car.image}`;

          return (
            <article
              key={car.name}
              className="snap-center shrink-0 w-[82vw] max-w-[340px] bg-gradient-card rounded-3xl overflow-hidden border border-white/8 shadow-card group"
            >
              {/* ── Car image area ─────────────────────────────────────
                  If the image file exists in /public/cars/, it shows here.
                  If not, a branded color gradient placeholder is shown.
              ─────────────────────────────────────────────────────── */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={imagePath}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // If image is missing, show brand-color placeholder
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = "flex";
                  }}
                />
                {/* Fallback placeholder — hidden when image loads */}
                <div
                  className="absolute inset-0 flex-col items-center justify-center gap-2"
                  style={{
                    display: "none",
                    background: `linear-gradient(135deg, ${getBrandColor(car.name)}, oklch(0.08 0.005 0))`,
                  }}
                >
                  <span className="font-display font-bold text-5xl tracking-widest opacity-30 select-none">
                    {getBrandInitials(car.name)}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] opacity-50">{car.name.split(" ")[0]}</span>
                </div>

                <div className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">
                  {car.tag}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display font-bold text-lg leading-tight">{car.name}</h3>
                <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Users className="size-3.5" />{car.seats}</span>
                  <span className="inline-flex items-center gap-1.5"><Fuel className="size-3.5" />{car.fuel}</span>
                  <span className="inline-flex items-center gap-1.5"><Gauge className="size-3.5" />{car.power}</span>
                </div>
                <div className="mt-5 flex items-center justify-end">
                  {/* Clicking Enquire scrolls to booking form AND pre-selects this car */}
                  <button
                    onClick={() => onEnquire?.(car.name)}
                    className="h-11 px-5 inline-flex items-center gap-1.5 rounded-full bg-gradient-red text-sm font-semibold shadow-glow active:scale-95 transition-transform"
                  >
                    Enquire <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
        <div className="shrink-0 w-2" />
      </div>
    </section>
  );
}
