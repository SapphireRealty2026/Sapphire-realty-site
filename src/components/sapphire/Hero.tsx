import heroImg from "@/assets/hero-home.jpg";
import { ArrowRight, Star, Search } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury Southern California home at sunset"
          width={1920}
          height={1280}
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5 animate-fade-up">Sapphire Realty · Est. Ontario, CA</p>

          <h1 className="font-display text-primary-foreground text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance animate-fade-up [animation-delay:120ms]">
            Southern California Real Estate. <em className="text-accent not-italic">Elevated.</em>
          </h1>

          <p className="mt-7 text-lg text-primary-foreground/85 max-w-xl leading-relaxed animate-fade-up [animation-delay:240ms]">
            Helping buyers and sellers across the Inland Empire, Orange County, Los Angeles,
            and San Diego with expert negotiation, strategic marketing, and a seamless
            experience from consultation to closing.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:360ms]">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 rounded-sm font-medium tracking-wide shadow-gold hover:bg-accent/90 transition-smooth"
            >
              Get My Home Value
              <ArrowRight className="w-4 h-4 transition-smooth group-hover:translate-x-1" />
            </a>
            <a
              href="#areas"
              className="group inline-flex items-center gap-3 border border-primary-foreground/40 text-primary-foreground px-7 py-4 rounded-sm font-medium tracking-wide hover:bg-primary-foreground hover:text-primary transition-smooth"
            >
              <Search className="w-4 h-4" />
              Search Homes
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 animate-fade-in [animation-delay:480ms]">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-primary-foreground/80 text-sm tracking-wide">
              Trusted by Southern California buyers &amp; sellers
            </span>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg animate-fade-up [animation-delay:600ms]">
            {[
              { v: "20+", l: "Years Experience" },
              { v: "500+", l: "Homes Sold" },
              { v: "5★", l: "Client Reviews" },
            ].map((s) => (
              <div key={s.l} className="border-l border-primary-foreground/30 pl-4">
                <div className="font-display text-3xl text-primary-foreground">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/70 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 text-xs uppercase tracking-[0.3em] animate-fade-in [animation-delay:800ms]">
        Scroll to explore
      </div>
    </section>
  );
};
