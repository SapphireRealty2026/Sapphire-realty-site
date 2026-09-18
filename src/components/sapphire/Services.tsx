import { Home, KeyRound, TrendingUp, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Buying",
    desc: "From first-time buyers to luxury seekers, we negotiate hard and guide you through every detail — inspection, financing, closing.",
  },
  {
    icon: KeyRound,
    title: "Selling",
    desc: "Strategic pricing, professional marketing, and a network of qualified buyers to sell your home for top dollar, faster.",
  },
  {
    icon: TrendingUp,
    title: "Investing",
    desc: "Build long-term wealth with curated investment properties, rental analysis, and 1031 exchange expertise.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-28 lg:py-36 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-20">
          <p className="eyebrow mb-4">What We Do</p>
          <h2 className="font-display text-4xl lg:text-5xl text-primary text-balance leading-tight">
            Boutique service. <em className="text-accent">Big results.</em>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Three core practices, one consistent promise: honest counsel, sharp
            negotiation, and a stress-free experience from first showing to final signature.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-background p-10 lg:p-12 hover:bg-secondary transition-smooth cursor-pointer"
            >
              <div className="flex items-start justify-between mb-10">
                <div className="w-14 h-14 rounded-sm bg-accent-soft flex items-center justify-center group-hover:bg-accent transition-smooth">
                  <s.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-smooth" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-smooth" />
              </div>
              <h3 className="font-display text-3xl text-primary mb-4">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
