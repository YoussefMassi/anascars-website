import { Calendar, Car, Check, ChevronRight, MapPin, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CAR_NAMES } from "@/data/fleet";

const STEPS = [
  { label: "Car", icon: Car },
  { label: "Dates", icon: Calendar },
  { label: "Location", icon: MapPin },
  { label: "Info", icon: User },
  { label: "Confirm", icon: Check },
];

type BookingData = {
  car: string;
  pickup: string;
  dropoff: string;
  location: string;
  name: string;
  phone: string;
  email: string;
};

const EMPTY: BookingData = {
  car: "", pickup: "", dropoff: "",
  location: "", name: "", phone: "", email: "",
};

function formatDate(d: string) {
  if (!d) return "—";
  const [y, m, day] = d.split("-");
  return `${day}/${m}/${y}`;
}

type QuickBookProps = {
  // When set, the component pre-selects this car and skips to step 1
  preSelectedCar?: string;
  // Called once the pre-selected car has been consumed
  onPreSelectConsumed?: () => void;
};

export function QuickBook({ preSelectedCar, onPreSelectConsumed }: QuickBookProps) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<BookingData>(EMPTY);
  const [errors, setErrors] = useState<Partial<BookingData>>({});
  const sectionRef = useRef<HTMLElement>(null);

  // When a car is pre-selected from the Fleet section, jump straight to Step 1
  useEffect(() => {
    if (preSelectedCar) {
      setData(prev => ({ ...prev, car: preSelectedCar }));
      setStep(1);
      // Scroll booking section into view
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      onPreSelectConsumed?.();
    }
  }, [preSelectedCar, onPreSelectConsumed]);

  const set = (k: keyof BookingData, v: string) => {
    setData(prev => ({ ...prev, [k]: v }));
    setErrors(prev => ({ ...prev, [k]: "" }));
  };

  const validate = (): boolean => {
    const e: Partial<BookingData> = {};
    if (step === 0 && !data.car) e.car = "Please select a car.";
    if (step === 1) {
      if (!data.pickup) e.pickup = "Required";
      if (!data.dropoff) e.dropoff = "Required";
      if (data.pickup && data.dropoff && data.dropoff < data.pickup)
        e.dropoff = "Return date must be after pickup";
    }
    if (step === 2 && !data.location.trim()) e.location = "Please enter a delivery location.";
    if (step === 3) {
      if (!data.name.trim()) e.name = "Required";
      if (!data.phone.trim()) e.phone = "Required";
      if (!data.email.trim()) e.email = "Required";
      else if (!/\S+@\S+\.\S+/.test(data.email)) e.email = "Invalid email";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate()) setStep(s => s + 1); };
  const back = () => setStep(s => s - 1);

  const confirm = () => {
    const msg =
      `🚗 *New Booking Request*%0A%0A` +
      `*Car:* ${encodeURIComponent(data.car)}%0A` +
      `*Pickup Date:* ${formatDate(data.pickup)}%0A` +
      `*Return Date:* ${formatDate(data.dropoff)}%0A` +
      `*Location:* ${encodeURIComponent(data.location)}%0A%0A` +
      `*Name:* ${encodeURIComponent(data.name)}%0A` +
      `*Phone:* ${encodeURIComponent(data.phone)}%0A` +
      `*Email:* ${encodeURIComponent(data.email)}`;
    window.open(`https://wa.me/212704716532?text=${msg}`, "_blank");
  };

  const today = new Date().toISOString().split("T")[0];

  const scrollToFleet = () => {
    document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const inputClass = (err?: string) =>
    `w-full h-13 px-4 py-3.5 rounded-2xl bg-secondary/60 border ${err ? "border-primary/70" : "border-white/10"} focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition text-sm`;

  return (
    <section id="booking" ref={sectionRef} className="relative px-5 -mt-14 md:-mt-20 z-20">
      <div className="mx-auto max-w-2xl glass-dark rounded-3xl p-5 sm:p-7 shadow-card border border-white/10">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display font-bold text-xl">Quick Booking</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Reserve in under 2 minutes</p>
          </div>
          <div className="size-10 rounded-full bg-gradient-red grid place-items-center shadow-glow">
            <Car className="size-5" />
          </div>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-1 mb-7">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const done = i < step;
            const active = i === step;
            return (
              <div key={s.label} className="flex items-center gap-1 flex-1 last:flex-none">
                <div className={`flex items-center gap-1.5 ${active ? "opacity-100" : done ? "opacity-90" : "opacity-35"}`}>
                  <div className={`size-7 rounded-full grid place-items-center text-[10px] font-bold transition-all
                    ${done || active ? "bg-gradient-red shadow-glow" : "bg-secondary border border-white/10"}`}>
                    {done ? <Check className="size-3.5" /> : <Icon className="size-3.5" />}
                  </div>
                  <span className={`text-[10px] uppercase tracking-wider hidden sm:block ${active ? "text-foreground" : "text-muted-foreground"}`}>
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`flex-1 h-px mx-1 transition-all ${done ? "bg-primary/60" : "bg-white/10"}`} />
                )}
              </div>
            );
          })}
        </div>

        {/* ── Step 0: Select Car ─────────────────────────────────── */}
        {step === 0 && (
          <div className="space-y-4">
            {/* Prompt to browse fleet first */}
            <div className="rounded-2xl bg-secondary/40 border border-white/8 p-5 text-center space-y-3">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Select a Car First</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pick the vehicle you want, then click <span className="text-foreground font-semibold">Enquire</span> to start your reservation.
              </p>
              <button
                onClick={scrollToFleet}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gradient-red text-sm font-semibold shadow-glow active:scale-95 transition-transform"
              >
                View Fleet <ChevronRight className="size-4" />
              </button>
            </div>


          </div>
        )}

        {/* ── Step 1: Dates ──────────────────────────────────────── */}
        {step === 1 && (
          <div className="space-y-3">
            {data.car && (
              <div className="mb-4 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-primary/10 border border-primary/20">
                <Car className="size-4 text-primary shrink-0" />
                <span className="text-sm font-semibold">{data.car}</span>
              </div>
            )}
            <label className="block">
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Pickup Date</span>
              <div className="mt-1.5 relative">
                <Calendar className="size-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                <input
                  type="date"
                  min={today}
                  value={data.pickup}
                  onChange={e => set("pickup", e.target.value)}
                  className={`w-full h-13 pl-11 pr-4 py-3.5 rounded-2xl bg-secondary/60 border ${errors.pickup ? "border-primary/70" : "border-white/10"} focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition`}
                />
              </div>
              {errors.pickup && <p className="mt-1 text-[11px] text-primary">{errors.pickup}</p>}
            </label>
            <label className="block">
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Return Date</span>
              <div className="mt-1.5 relative">
                <Calendar className="size-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                <input
                  type="date"
                  min={data.pickup || today}
                  value={data.dropoff}
                  onChange={e => set("dropoff", e.target.value)}
                  className={`w-full h-13 pl-11 pr-4 py-3.5 rounded-2xl bg-secondary/60 border ${errors.dropoff ? "border-primary/70" : "border-white/10"} focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition`}
                />
              </div>
              {errors.dropoff && <p className="mt-1 text-[11px] text-primary">{errors.dropoff}</p>}
            </label>
          </div>
        )}

        {/* ── Step 2: Location ───────────────────────────────────── */}
        {step === 2 && (
          <div className="space-y-3">
            <label className="block">
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Delivery / Pickup Location</span>
              <div className="mt-1.5 relative">
                <MapPin className="size-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  placeholder="e.g. Marrakech Airport, Hotel name, address…"
                  value={data.location}
                  onChange={e => set("location", e.target.value)}
                  className={`w-full h-13 pl-11 pr-4 py-3.5 rounded-2xl bg-secondary/60 border ${errors.location ? "border-primary/70" : "border-white/10"} focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition text-sm`}
                />
              </div>
              {errors.location && <p className="mt-1 text-[11px] text-primary">{errors.location}</p>}
              <p className="mt-2 text-[11px] text-muted-foreground">Airport · Hotel · Apartment · Any address in Marrakech</p>
            </label>
          </div>
        )}

        {/* ── Step 3: Customer Info ──────────────────────────────── */}
        {step === 3 && (
          <div className="space-y-3">
            <label className="block">
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Full Name</span>
              <input type="text" placeholder="Your full name" value={data.name}
                onChange={e => set("name", e.target.value)} className={`mt-1.5 ${inputClass(errors.name)}`} />
              {errors.name && <p className="mt-1 text-[11px] text-primary">{errors.name}</p>}
            </label>
            <label className="block">
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Phone Number</span>
              <input type="tel" placeholder="+212 …" value={data.phone}
                onChange={e => set("phone", e.target.value)} className={`mt-1.5 ${inputClass(errors.phone)}`} />
              {errors.phone && <p className="mt-1 text-[11px] text-primary">{errors.phone}</p>}
            </label>
            <label className="block">
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Email</span>
              <input type="email" placeholder="your@email.com" value={data.email}
                onChange={e => set("email", e.target.value)} className={`mt-1.5 ${inputClass(errors.email)}`} />
              {errors.email && <p className="mt-1 text-[11px] text-primary">{errors.email}</p>}
            </label>
          </div>
        )}

        {/* ── Step 4: Summary & Confirm ──────────────────────────── */}
        {step === 4 && (
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Booking Summary</p>
            {[
              { label: "Car", value: data.car },
              { label: "Pickup Date", value: formatDate(data.pickup) },
              { label: "Return Date", value: formatDate(data.dropoff) },
              { label: "Location", value: data.location },
              { label: "Name", value: data.name },
              { label: "Phone", value: data.phone },
              { label: "Email", value: data.email },
            ].map(row => (
              <div key={row.label} className="flex justify-between items-start py-3 border-b border-white/8 last:border-0">
                <span className="text-xs text-muted-foreground w-24 shrink-0">{row.label}</span>
                <span className="text-sm font-semibold text-right break-all">{row.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Navigation buttons */}
        <div className={`mt-6 flex gap-3 ${step > 0 ? "justify-between" : "justify-end"}`}>
          {step > 0 && (
            <button onClick={back}
              className="h-13 px-6 rounded-2xl bg-secondary/60 border border-white/10 text-sm font-semibold active:scale-[0.98] transition-transform">
              Back
            </button>
          )}
          {step < 4 ? (
            <button onClick={next}
              className="flex-1 h-13 rounded-2xl bg-gradient-red font-semibold text-sm shadow-glow active:scale-[0.98] transition-transform inline-flex items-center justify-center gap-2">
              Continue <ChevronRight className="size-4" />
            </button>
          ) : (
            <button onClick={confirm}
              className="flex-1 h-13 rounded-2xl bg-gradient-red font-semibold text-sm shadow-glow active:scale-[0.98] transition-transform inline-flex items-center justify-center gap-2">
              Confirm on WhatsApp <ChevronRight className="size-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
