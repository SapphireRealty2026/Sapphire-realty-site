import { useState } from "react";
import { MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll be in touch within one business day.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 lg:py-36 bg-gradient-cream">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <p className="eyebrow mb-4">Get In Touch</p>
            <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight text-balance">
              Let's start the conversation about <em className="text-accent">your next home.</em>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md">
              Buying, selling or just exploring? Reach out — we'll listen first, advise honestly,
              and only move when you're ready.
            </p>

            <div className="mt-12 space-y-6">
              <a href="tel:+19099877786" className="flex items-start gap-4 group">
                <span className="w-12 h-12 rounded-sm bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Call</div>
                  <div className="font-display text-xl text-primary mt-1">(909) 987-7786 ext. 101</div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-sm bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Visit</div>
                  <div className="text-primary mt-1 leading-relaxed">
                    Empire Executive Suites<br />
                    3400 Inland Empire Blvd<br />
                    Ontario, CA 91764
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-sm bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Hours</div>
                  <div className="text-primary mt-1">Mon–Fri · 8:30 AM – 6:00 PM</div>
                  <div className="text-muted-foreground text-sm">Weekends by appointment</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-card p-8 lg:p-10 rounded-sm shadow-elegant border border-border">
            <h3 className="font-display text-2xl text-primary mb-6">Request a Consultation</h3>

            <div className="space-y-5">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-border py-3 text-foreground focus:border-accent outline-none transition-smooth"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full bg-transparent border-b border-border py-3 text-foreground focus:border-accent outline-none transition-smooth"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 w-full bg-transparent border-b border-border py-3 text-foreground focus:border-accent outline-none transition-smooth"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">How can we help?</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Buying, selling, investing…"
                  className="mt-2 w-full bg-transparent border-b border-border py-3 text-foreground focus:border-accent outline-none transition-smooth resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-7 py-4 rounded-sm font-medium tracking-wide hover:bg-accent hover:text-accent-foreground transition-smooth"
            >
              Send Message
              <ArrowRight className="w-4 h-4 transition-smooth group-hover:translate-x-1" />
            </button>

            <p className="mt-4 text-xs text-muted-foreground text-center">
              We respond within one business day. Or call us directly at (909) 987-7786.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
