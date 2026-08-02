import { ClipboardList, Camera, Megaphone, Handshake, FileSignature } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Home Valuation", desc: "A data-driven pricing strategy based on current market conditions and comparable sales." },
  { icon: Camera, title: "Prep & Staging", desc: "Guidance on repairs, staging, and presentation to help your home show its best." },
  { icon: Megaphone, title: "Marketing Launch", desc: "Professional photography and targeted exposure to qualified buyers, right out of the gate." },
  { icon: Handshake, title: "Offers & Negotiation", desc: "We review every offer and negotiate firmly to secure the strongest terms for you." },
  { icon: FileSignature, title: "Closing", desc: "Escrow, inspections, and paperwork managed start to finish — you just sign." },
];

export const SellerProcess = () => {
  return (
    <section id="sell" className="py-28 lg:py-36 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">For Sellers</p>
          <h2 className="font-display text-4xl lg:text-5xl text-primary text-balance leading-tight">
            Sell for <em className="text-accent">top dollar, faster.</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="w-14 h-14 rounded-sm bg-accent-soft flex items-center justify-center mb-6">
                <s.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Step {i + 1}
              </div>
              <h3 className="font-display text-xl text-primary mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
