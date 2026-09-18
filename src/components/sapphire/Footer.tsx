export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-display text-3xl">
              Sapphire<span className="text-accent"> Realty</span>
            </div>
            <p className="mt-4 text-primary-foreground/70 max-w-sm leading-relaxed">
              A real estate brokerage serving Ontario, Rancho Cucamonga, and the
              greater Inland Empire with care and candor.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-accent mb-4">Office</div>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              Empire Executive Suites<br />
              3400 Inland Empire Blvd<br />
              Ontario, CA 91764
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-accent mb-4">Contact</div>
            <a href="tel:+19099877786" className="block text-primary-foreground/80 hover:text-accent transition-smooth text-sm">
              (909) 987-7786 ext. 101
            </a>
            <p className="text-primary-foreground/60 text-sm mt-3">Mon–Fri · 8:30 AM – 6:00 PM</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Sapphire Realty. All rights reserved.</p>
          <p>Licensed Real Estate Broker · California DRE</p>
        </div>
      </div>
    </footer>
  );
};
