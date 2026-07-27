import heroImg from "@/assets/hero-home.jpg";
import { ArrowRight, Star } from "lucide-react";

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
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-primary-foreground/80 text-sm tracking-wide">
              Trusted across the Inland Empire
            </span>
          </div>

          <p className="eyebrow mb-5 animate-fade-up">Sapphire Realty · Est. Ontario, CA</p>

          <h1 className="font-display text-primary-foreground text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance animate-fade-up [animation-delay:120ms]">
            Find the home <em className="text-accent not-italic">that finds you.</em>
          </h1>

          <p className="mt-7 text-lg text-primary-foreground/85 max-w-xl leading-relaxed animate-fade-up [animation-delay:240ms]">
            Real estate brokerage serving Ontario, Rancho Cucamonga and the
            greater Inland Empire — guiding buyers, sellers and investors with care,
            candor, and uncommon attention to detail.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:360ms]">
            
              href="#contact"
              className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 rounded-sm font-medium tracking-wide shadow-gold hover:bg-accent/90 transition-smooth"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 transition-smooth group-hover:translate-x-1" />
            </a>
            
              href="#services"
              className="inline-flex items-center gap-3 border border-primary-foreground/40 text-primary-foreground px-7 py-4 rounded-sm font-medium tracking-wide hover:bg-primary-foreground hover:text-primary transition-smooth"
            >
              Explore Our Services
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg animate-fade-up [animation-delay:480ms]">
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

      <div
