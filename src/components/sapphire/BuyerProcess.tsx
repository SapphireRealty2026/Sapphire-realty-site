import { MessageSquare, Search, FileCheck, ClipboardCheck, KeyRound } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "We talk through your goals, budget, and must-haves for your next home." },
  { icon: Search, title: "Home Search", desc: "Curated listings matched to your criteria, with private showings scheduled around your life." },
  { icon: FileCheck, title: "Offer & Negotiation", desc: "A competitive offer strategy and firm negotiation to protect your interests." },
  { icon: ClipboardCheck, title: "Inspection & Escrow", desc: "We coordinate inspections, financing, and paperwork so nothing falls through the cracks." },
  { icon: KeyRound, title: "Closing Day", desc: "Final walkthrough, signing, and handing you the keys to your new home." },
];

export const BuyerProcess = () => {
  return (
    <section id="buy" className="py-28 lg:py-36 bg-secondary">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">For Buyers</p>
          <h2 className="font-display text-4xl lg:text-5xl text-primary text-balance leading-tight">
            Your path to <em className="text-accent">homeownership.</em>
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
