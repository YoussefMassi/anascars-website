// =============================================================
// FLEET CONFIGURATION FILE
// =============================================================
// This is the single source of truth for all car data.
//
// HOW TO ADD A NEW CAR:
//   1. Add a new entry to the FLEET array below.
//   2. Place the car image in /public/cars/ with the filename
//      matching the `image` field (e.g. "my-new-car.jpg").
//   3. That's it — the website updates automatically.
//
// HOW TO REPLACE A CAR IMAGE:
//   1. Put the new image in /public/cars/
//   2. Update the `image` field below to match the new filename.
//      OR just replace the file with the same name (no code change needed).
//
// HOW TO REMOVE A CAR:
//   1. Delete its entry from the FLEET array below.
//
// IMAGE PATH FORMAT:
//   All images live in /public/cars/
//   Reference them as "/cars/filename.jpg" (no /public prefix needed)
// =============================================================

export type Car = {
  name: string;       // Display name shown on the card
  tag: string;        // Category label shown as a badge
  seats: number;      // Number of seats
  fuel: string;       // Fuel type
  power: string;      // Engine power
  image: string;      // Filename inside /public/cars/ — e.g. "dacia-sandero.jpg"
                      // Place the actual image file at: /public/cars/dacia-sandero.jpg
};

export const FLEET: Car[] = [
  // ── DACIA ────────────────────────────────────────────────
  {
    name: "Dacia Sandero",
    tag: "Economy",
    seats: 5,
    fuel: "Petrol",
    power: "90 HP",
    image: "dacia-sandero.jpg",
    // Image file → /public/cars/dacia-sandero.jpg
  },
  {
    name: "Dacia Logan",
    tag: "Economy Sedan",
    seats: 5,
    fuel: "Petrol",
    power: "90 HP",
    image: "dacia-logan.jpg",
  },
  {
    name: "Dacia Jogger",
    tag: "Family MPV",
    seats: 7,
    fuel: "Petrol",
    power: "110 HP",
    image: "dacia-jogger.jpg",
  },
  {
    name: "Dacia Duster",
    tag: "Compact SUV",
    seats: 5,
    fuel: "Petrol",
    power: "130 HP",
    image: "dacia-duster.jpg",
  },

  // ── RENAULT ───────────────────────────────────────────────
  {
    name: "Renault Clio 5 Automatic",
    tag: "City Car",
    seats: 5,
    fuel: "Petrol",
    power: "100 HP",
    image: "renault-clio5-auto.jpg",
  },
  {
    name: "Renault Clio 5 Manual",
    tag: "City Car",
    seats: 5,
    fuel: "Petrol",
    power: "100 HP",
    image: "renault-clio5-auto.jpg",
  },

  // ── OPEL ─────────────────────────────────────────────────
  {
    name: "Opel Corsa",
    tag: "City Car",
    seats: 5,
    fuel: "Petrol",
    power: "100 HP",
    image: "opel-corsa.jpg",
  },

  // ── KIA ──────────────────────────────────────────────────
  {
    name: "Kia Picanto",
    tag: "Micro City",
    seats: 5,
    fuel: "Petrol",
    power: "67 HP",
    image: "kia-picanto.jpg",
  },

  // ── HYUNDAI ───────────────────────────────────────────────
  {
    name: "Hyundai Grand i10",
    tag: "City Car",
    seats: 5,
    fuel: "Petrol",
    power: "67 HP",
    image: "hyundai-grand-i10.jpg",
  },
  {
    name: "Hyundai Creta",
    tag: "Compact SUV",
    seats: 5,
    fuel: "Petrol",
    power: "120 HP",
    image: "hyundai-creta.jpg",
  },
  {
    name: "Hyundai Tucson",
    tag: "Mid-size SUV",
    seats: 5,
    fuel: "Petrol",
    power: "150 HP",
    image: "hyundai-tucson.jpg",
  },
  {
    name: "Hyundai Accent",
    tag: "Sedan",
    seats: 5,
    fuel: "Petrol",
    power: "100 HP",
    image: "hyundai-accent.jpg",
  },

  // ── VOLKSWAGEN ────────────────────────────────────────────
  {
    name: "Volkswagen T-Roc",
    tag: "Compact SUV",
    seats: 5,
    fuel: "Petrol",
    power: "150 HP",
    image: "volkswagen-t-roc.jpg",
  },
  {
    name: "Volkswagen Golf 8",
    tag: "Premium Hatch",
    seats: 5,
    fuel: "Petrol",
    power: "130 HP",
    image: "volkswagen-golf-8.jpg",
  },

  // ── AUDI ─────────────────────────────────────────────────
  {
    name: "Audi A3",
    tag: "Premium Sedan",
    seats: 5,
    fuel: "Petrol",
    power: "150 HP",
    image: "audi-a3.jpg",
  },
];

// Flat list of car names — used by the booking form dropdown
export const CAR_NAMES = FLEET.map((c) => c.name);
