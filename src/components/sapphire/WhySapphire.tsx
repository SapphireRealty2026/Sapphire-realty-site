import { MapPin, Megaphone, Handshake, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Local Market Expertise",
    desc: "Deep, current knowledge of pricing and inventory across the Inland Empire and greater Southern California.",
  },
  {
    icon: Megaphone,
    title: "Strategic Marketing",
    desc: "Professional photography, targeted exposure, and positioning that gets your home seen by the right buyers.",
  },
  {
    icon: Handshake,
    title: "Skilled Negotiation",
    desc: "Every offer, counter, and contingency handled with a firm focus on protecting your bottom line.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    desc: "Prompt updates and honest answers — no jargon, no guessing where things stand.",
  },
];

export const WhySapphire = () => {
  return (
    <section id="why-sapphire" className="py-28 lg:py-36 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Why Sapphire Realty</p>
          <h2 className="font-display text-4xl lg:text-5xl text-primary text-balance leading-tight">
            A different kind of <em className="text-accent">real estate experience.</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {reasons.map((r) => (
            <div key={r.title} className="bg-background p-8 lg:p-10">
              <div className="w-14 h-14 rounded-sm bg-accent-soft flex items-center justify-center mb-6">
                <r.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl text-primary mb-3">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
