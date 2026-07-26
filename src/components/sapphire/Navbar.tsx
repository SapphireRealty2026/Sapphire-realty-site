import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "Areas", href: "#areas" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2">
          <span
            className={cn(
              "font-display text-2xl tracking-tight transition-smooth",
              scrolled ? "text-primary" : "text-primary-foreground"
            )}
          >
            Sapphire
            <span className="text-accent"> Realty</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-smooth hover:text-accent",
                scrolled ? "text-foreground" : "text-primary-foreground/90"
              )}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="tel:+19099877786"
          className={cn(
            "hidden md:inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-sm border transition-smooth",
            scrolled
              ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              : "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          )}
        >
          <Phone className="w-4 h-4" />
          (909) 987-7786
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "md:hidden p-2",
            scrolled ? "text-primary" : "text-primary-foreground"
          )}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container flex flex-col py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground py-2 font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+19099877786"
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-sm bg-primary text-primary-foreground"
            >
              <Phone className="w-4 h-4" /> (909) 987-7786
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
