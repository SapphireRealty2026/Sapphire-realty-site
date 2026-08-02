import { Navbar } from "@/components/sapphire/Navbar";
import { Hero } from "@/components/sapphire/Hero";
import { SearchHomes } from "@/components/sapphire/SearchHomes";
import { WhySapphire } from "@/components/sapphire/WhySapphire";
import { Services } from "@/components/sapphire/Services";
import { Areas } from "@/components/sapphire/Areas";
import { BuyerProcess } from "@/components/sapphire/BuyerProcess";
import { SellerProcess } from "@/components/sapphire/SellerProcess";
import { MeetJacob } from "@/components/sapphire/MeetJacob";
import { Reviews } from "@/components/sapphire/Reviews";
import { Contact } from "@/components/sapphire/Contact";
import { Footer } from "@/components/sapphire/Footer";
import { StickyMobileBar } from "@/components/sapphire/StickyMobileBar";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Sapphire Realty | Southern California Realtor | Inland Empire Homes";

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
      "Sapphire Realty is a Southern California real estate brokerage serving the Inland Empire, Orange County, Los Angeles, and San Diego. Buy or sell with Realtor Jacob Villegas.";

    setMeta('meta[name="description"]', "name", "description", desc);
    setMeta('meta[property="og:title"]', "property", "og:title", "Sapphire Realty | Southern California Real Estate");
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
    <main className="min-h-screen bg-background pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <SearchHomes />
      <WhySapphire />
      <Services />
      <Areas />
      <BuyerProcess />
      <SellerProcess />
      <MeetJacob />
      <Reviews />
      <Contact />
      <Footer />
      <StickyMobileBar />
    </main>
  );
};

export default Index;
