import aboutImg from "@/assets/about-interior.jpg";
import { Check } from "lucide-react";

const promises = [
  "Personal service from a dedicated broker",
  "Honest, transparent communication at every step",
  "Deep relationships in the Inland Empire community",
  "Lifelong support — long after the keys change hands",
];

export const About = () => {
  return (
    <section id="about" className="py-28 lg:py-36 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-elegant">
              <img
                src={aboutImg}
                alt="Modern luxury home interior"
                loading="lazy"
                width={1280}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden lg:block absolute -bottom-10 -right-10 bg-accent text-accent-foreground p-8 max-w-xs shadow-gold">
              <div className="font-display text-5xl leading-none">20+</div>
              <p className="mt-3 text-sm leading-relaxed font-medium">
                Years guiding families home across Southern California.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">About Sapphire Realty</p>
            <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight text-balance">
              Real estate done the <em className="text-accent">right way.</em>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Led by Broker <span className="text-primary font-medium">Alika Castellon</span>,
              Sapphire Realty is a boutique brokerage built on a simple idea: clients
              deserve more than a transaction — they deserve a trusted advisor who will
              still pick up the phone years after the deal closes.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From first-time buyers in Ontario to families upgrading in Rancho Cucamonga,
              we've made the process easy, honest, and genuinely enjoyable.
            </p>

            <ul className="mt-10 space-y-4">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-accent-soft flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                  </span>
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 rounded-sm font-medium tracking-wide hover:bg-primary-glow transition-smooth"
            >
              Meet Alika
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
