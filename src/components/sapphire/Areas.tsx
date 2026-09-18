import ranchoImg from "@/assets/feature-rancho.jpg";
import ontarioImg from "@/assets/feature-ontario.jpg";
import inlandImg from "@/assets/feature-inland.jpg";

const areas = [
  {
    name: "Rancho Cucamonga",
    img: ranchoImg,
    blurb: "Master-planned communities, top-rated schools, and a vibrant lifestyle at the foot of the San Gabriels.",
  },
  {
    name: "Ontario",
    img: ontarioImg,
    blurb: "The heart of the Inland Empire — affordable, accessible, and growing fast with new opportunities.",
  },
  {
    name: "The Inland Empire",
    img: inlandImg,
    blurb: "From Chino Hills to Riverside, we know the neighborhoods, the market, and the story behind every street.",
  },
];

export const Areas = () => {
  return (
    <section id="areas" className="py-28 lg:py-36 bg-secondary">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Where We Work</p>
            <h2 className="font-display text-4xl lg:text-5xl text-primary text-balance leading-tight">
              Local roots. <em className="text-accent">Deep knowledge.</em>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            We've helped hundreds of families plant roots across Southern California's
            most desirable communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((a, idx) => (
            <article
              key={a.name}
              className="group relative overflow-hidden rounded-sm shadow-soft hover:shadow-elegant transition-elegant cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={a.img}
                  alt={`${a.name} real estate`}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full h-full object-cover group-hover:scale-110 transition-elegant"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <span className="text-accent text-xs uppercase tracking-[0.3em]">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-3xl text-primary-foreground mt-3 mb-3">
                  {a.name}
                </h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
                  {a.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
