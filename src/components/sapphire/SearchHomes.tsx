import { useState, FormEvent } from "react";
import { Search, MapPin } from "lucide-react";

const serviceAreaCities = [
  "Ontario, CA",
  "Rancho Cucamonga, CA",
  "Fontana, CA",
  "Upland, CA",
  "Chino, CA",
  "Riverside, CA",
  "Eastvale, CA",
];

export const SearchHomes = () => {
  const [query, setQuery] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim() || "Ontario, CA";
    // Actively searches real, live listings — opens results in a new tab.
    const url = `https://www.zillow.com/homes/${encodeURIComponent(q)}_rb/`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="search" className="py-24 lg:py-32 bg-primary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">Find Your Next Home</p>
          <h2 className="font-display text-4xl lg:text-5xl text-primary-foreground text-balance leading-tight">
            Search homes across <em className="text-accent not-italic">Southern California.</em>
          </h2>
          <p className="mt-5 text-primary-foreground/75 text-lg leading-relaxed">
            Enter a city, neighborhood, address, or zip code to see live listings.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-10 bg-card rounded-sm shadow-elegant p-2 flex flex-col sm:flex-row gap-2"
          >
            <div className="flex items-center gap-3 flex-1 px-4">
              <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="City, neighborhood, address, or zip"
                aria-label="Search homes by city, neighborhood, address, or zip"
                className="w-full bg-transparent py-5 text-base sm:text-lg text-foreground placeholder:text-muted-foreground outline-none"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-5 rounded-sm font-medium text-base tracking-wide hover:bg-accent/90 transition-smooth"
            >
              <Search className="w-5 h-5" />
              Search Homes
            </button>
          </form>

          <div className="mt-6 flex flex-wrap justify-center gap-x-2 gap-y-2 text-sm">
            <span className="text-primary-foreground/60">Popular areas:</span>
            {serviceAreaCities.map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => {
                  setQuery(city);
                  window.open(
                    `https://www.zillow.com/homes/${encodeURIComponent(city)}_rb/`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="text-accent hover:text-primary-foreground underline underline-offset-4 transition-smooth"
              >
                {city.replace(", CA", "")}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
