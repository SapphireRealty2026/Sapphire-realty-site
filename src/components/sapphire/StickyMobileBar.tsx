import { Phone, MessageSquare, CalendarDays } from "lucide-react";

export const StickyMobileBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-primary border-t border-primary-glow/30 shadow-elegant safe-bottom">
      <div className="grid grid-cols-3">
        <a
          href="tel:+19099877786"
          className="flex flex-col items-center justify-center gap-1 py-3 text-primary-foreground active:bg-primary-glow transition-smooth"
          aria-label="Call Sapphire Realty"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[11px] font-medium tracking-wide">Call</span>
        </a>
        <a
          href="sms:+19099877786"
          className="flex flex-col items-center justify-center gap-1 py-3 text-primary-foreground border-x border-primary-glow/30 active:bg-primary-glow transition-smooth"
          aria-label="Text Sapphire Realty"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-[11px] font-medium tracking-wide">Text</span>
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-accent text-accent-foreground active:bg-accent/90 transition-smooth"
          aria-label="Schedule a consultation"
        >
          <CalendarDays className="w-5 h-5" />
          <span className="text-[11px] font-medium tracking-wide">Schedule</span>
        </a>
      </div>
    </div>
  );
};
