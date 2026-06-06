import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { QuickBook } from "@/components/site/QuickBook";
import { Fleet } from "@/components/site/Fleet";
import { Trust } from "@/components/site/Trust";
import { About } from "@/components/site/About";
import { Reviews } from "@/components/site/Reviews";
import { Contact } from "@/components/site/Contact";
import { StickyBar } from "@/components/site/StickyBar";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "ANAS CAR — Car Rental in Marrakech" },
      { name: "description", content: "Car rental in Marrakech. Wide fleet: Dacia, Renault, Hyundai, Volkswagen, Audi. 24/7 delivery, instant booking via WhatsApp. ANAS CAR — Location de voiture." },
      { property: "og:title", content: "ANAS CAR — Car Rental in Marrakech" },
      { property: "og:description", content: "Drive in Marrakech. Wide fleet, 24/7 delivery, instant booking." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "theme-color", content: "#0a0a0a" },
    ],
    links: [
      { rel: "canonical", href: "/" },

      // ── FAVICON ────────────────────────────────────────────────
      // File must be placed at: /public/aa.png
      // Full path from project root: public/aa.png
      // To replace: swap the file at public/aa.png with your new icon.
      // To use a different filename: update the href below.
      { rel: "icon", type: "image/png", href: "/aa.png" },
      { rel: "apple-touch-icon", href: "/aa.png" },
      // ──────────────────────────────────────────────────────────

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
}));

function Index() {
  // When the user clicks "Enquire" on a Fleet card, we store the car name here.
  // QuickBook reads this prop, pre-selects the car, and scrolls into view.
  const [pendingCar, setPendingCar] = useState<string | undefined>();

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />

      {/* QuickBook receives the pre-selected car from Fleet */}
      <QuickBook
        preSelectedCar={pendingCar}
        onPreSelectConsumed={() => setPendingCar(undefined)}
      />

      {/* Fleet passes back the chosen car name via onEnquire */}
      <Fleet onEnquire={(car) => setPendingCar(car)} />

      <Trust />
      <About />
      <Reviews />
      <Contact />
      <StickyBar />
      {/* Bottom padding for mobile sticky bar */}
      <div className="h-24 md:hidden" />
    </main>
  );
}
