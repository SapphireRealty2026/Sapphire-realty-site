import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Guy Montiel",
    role: "Homeowner · Rancho Cucamonga",
    rating: 5,
    text: "It's been a little over a year since my wife and I purchased our new home with Sapphire Realty. We are very happy. Our broker Alika Castellon is the best — he still keeps in touch to see how we're doing. He made the whole experience easy and stress-free. Professional, honest, courteous and friendly. We feel as though we are family.",
    highlight: true,
  },
  {
    name: "Andrew Castellon",
    role: "Verified Client",
    rating: 5,
    text: "Responsiveness, quality, professionalism, and value — Sapphire Realty delivered on every front.",
  },
  {
    name: "Family Referral",
    role: "Repeat Client",
    rating: 5,
    text: "We highly recommended Alika to my mother-in-law and she sold and purchased her new home with him as well. She is extremely happy and tells everyone about it.",
  },
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-28 lg:py-36 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container relative">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Client Stories</p>
          <h2 className="font-display text-4xl lg:text-5xl text-balance leading-tight">
            Trusted by families <em className="text-accent">across the Inland Empire.</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              className={`relative p-8 lg:p-10 rounded-sm border border-primary-foreground/10 backdrop-blur-sm transition-smooth hover:border-accent/40 ${
                r.highlight ? "lg:row-span-1 bg-primary-foreground/[0.04]" : "bg-primary-foreground/[0.02]"
              } ${i === 0 ? "lg:col-span-2" : ""}`}
            >
              <Quote className="w-10 h-10 text-accent/50 mb-6" />
              <div className="flex gap-1 mb-5">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-primary-foreground/90 leading-relaxed text-base lg:text-[17px]">
                "{r.text}"
              </p>
              <div className="mt-8 pt-6 border-t border-primary-foreground/10">
                <div className="font-display text-xl">{r.name}</div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/60 mt-1">
                  {r.role}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-3 text-sm text-primary-foreground/70">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
          <span>Verified Google Reviews · Sapphire Realty</span>
        </div>
      </div>
    </section>
  );
};
