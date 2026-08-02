import jacobImg from "@/assets/jacob-villegas.jpg";
import { Check } from "lucide-react";

const reasons = [
  "Dedicated one-on-one service from start to finish",
  "Prompt communication and regular updates",
  "Strong negotiation focused on protecting your interests",
  "Local market knowledge throughout Southern California",
  "Honest advice with no pressure",
  "A relationship built on trust, integrity, and results",
];

export const MeetJacob = () => {
  return (
    <section id="about" className="py-28 lg:py-36 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="relative lg:sticky lg:top-32">
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-elegant max-w-md">
              <img
                src={jacobImg}
                alt="Jacob Villegas, Southern California Realtor"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Meet Jacob Villegas</p>
            <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight text-balance">
              A modern approach to <em className="text-accent">Southern California real estate.</em>
            </h2>

            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Whether you're buying your first home, upgrading to your forever home, or
                preparing to sell one of your biggest investments, my goal is simple: make
                the process clear, stress-free, and successful.
              </p>
              <p>
                I earned my California real estate license in January 2026 and quickly
                helped my first clients successfully purchase their new home at 3234 Meadow
                Grass Lane in Escondido. That experience reinforced why I chose this
                career — to guide people through one of life's biggest milestones with
                honesty, communication, and dedication.
              </p>
              <p>
                As a Southern California Realtor®, I believe every client deserves the
                attention, responsiveness, and level of service often reserved for luxury
                transactions. I pride myself on staying accessible, educating my clients
                throughout every step of the process, and working relentlessly to negotiate
                the best possible outcome.
              </p>
              <p>
                Being early in my real estate career is something I embrace. It means every
                client receives my full attention, my strongest effort, and a commitment to
                building relationships that last well beyond the closing table. Your goals
                become my priority from our very first conversation until long after you've
                received your keys.
              </p>
              <p>
                Whether you're buying, selling, or simply exploring your options, I'd be
                honored to help you navigate the Southern California market with confidence.
              </p>
            </div>

            <h3 className="font-display text-2xl text-primary mt-12 mb-6">
              Why Clients Choose to Work With Me
            </h3>
            <ul className="space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-accent-soft flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                  </span>
                  <span className="text-foreground">{r}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 font-display text-2xl text-primary">
              Let's make your next move your best one.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 rounded-sm font-medium tracking-wide hover:bg-primary-glow transition-smooth"
            >
              Meet Jacob
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
