import { Navbar } from "@/components/sapphire/Navbar";
import { Hero } from "@/components/sapphire/Hero";
import { Services } from "@/components/sapphire/Services";
import { Areas } from "@/components/sapphire/Areas";
import { About } from "@/components/sapphire/About";
import { Reviews } from "@/components/sapphire/Reviews";
import { Contact } from "@/components/sapphire/Contact";
import { Footer } from "@/components/sapphire/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Sapphire Realty | Ontario CA Real Estate Agency | Inland Empire Homes";

    const setMeta = (selector: string, attr: string, key: string, value: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    const desc =
      "Sapphire Realty is a trusted real estate brokerage in Ontario, CA serving Rancho Cucamonga, Chino, Fontana & the Inland Empire. Buy, sell, and invest with broker Alika Castellon.";

    setMeta('meta[name="description"]', "name", "description", desc);
    setMeta('meta[property="og:title"]', "property", "og:title", "Sapphire Realty | Ontario & Inland Empire Real Estate");
    setMeta('meta[property="og:description"]', "property", "og:description", desc);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", desc);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/";
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Areas />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
