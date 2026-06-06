import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/anas-car-logo.png";

const links = [
  { href: "#fleet", label: "Fleet" },
  { href: "#trust", label: "Why Us" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-dark py-3" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="ANAS CAR Marrakech" className="h-10 w-10 rounded-full object-cover" />
            <div className="leading-none">
              <div className="font-display font-bold text-sm tracking-wider">
                ANAS <span className="text-primary">CAR</span>
              </div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
                Marrakech
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+212704716532"
              className="inline-flex items-center gap-2 bg-gradient-red px-4 py-2 rounded-full text-sm font-semibold shadow-glow"
            >
              <Phone className="size-4" /> Call
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden size-11 grid place-items-center glass rounded-full"
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl" />
        <div className="relative h-full flex flex-col items-center justify-center gap-2 px-8">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${i * 70}ms` }}
              className={`text-4xl font-display font-bold tracking-tight ${
                open ? "animate-fade-up" : ""
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/212704716532"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-8 bg-gradient-red px-8 py-4 rounded-full font-semibold shadow-glow"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
