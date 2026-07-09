const WHATSAPP_MSG =
  "Hello Modern Edge Architects & Engineers Pvt. Ltd., I would like to discuss my project.";


const WHATSAPP_URL =
  "https://wa.me/9779852059599?text=" +
  encodeURIComponent(
    "Hello Modern Edge Architects & Engineers Pvt. Ltd., I would like to discuss my project.",
  );

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed z-40 right-5 md:right-6 bottom-24 md:bottom-8 flex items-center gap-3"
    >
      {/* Hover label (desktop only) */}
      <span
        aria-hidden
        className="hidden md:inline-flex items-center whitespace-nowrap rounded-full bg-ink text-white text-[12px] font-medium px-4 py-2 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] opacity-0 translate-x-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
      >
        Chat with us on WhatsApp
      </span>

      {/* Circular button */}
      <span className="relative grid place-items-center h-[60px] w-[60px]">
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#25D366] animate-me-pulse"
        />
        <span className="relative grid place-items-center h-[60px] w-[60px] rounded-full bg-[#25D366] shadow-[0_14px_34px_-10px_rgba(37,211,102,0.55),0_4px_10px_-2px_rgba(0,0,0,0.15)] ring-1 ring-black/5 transition-transform duration-300 ease-out group-hover:scale-[1.06] group-active:scale-95">
          <WhatsAppIcon className="h-[30px] w-[30px] text-white" />
        </span>
      </span>
    </a>
  );
}


export function MobileContactBar() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-white/95 backdrop-blur">
      <div className="grid grid-cols-3">
        <a
          href="tel:+9779852059599"
          className="flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-medium text-ink hover:bg-surface"
        >
          <PhoneIcon className="h-5 w-5 text-primary" />
          Call
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-medium text-ink border-x border-hairline hover:bg-surface"
        >
          <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
          WhatsApp
        </a>
        <a
          href="https://www.google.com/maps/place/Modern+Edge+Architects+And+Engineers+Pvt.+Ltd./@26.5622764,87.2795168,18z"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-medium text-ink hover:bg-surface"
        >
          <PinIcon className="h-5 w-5 text-primary" />
          Directions
        </a>
      </div>
    </div>
  );
}

// Suppress unused import warning
export const _unused = { MessageCircle, X };

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M19.11 17.28c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.15-.19.29-.74.93-.9 1.12-.17.19-.33.22-.62.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.58-.9-2.16-.24-.57-.48-.49-.65-.5l-.55-.01c-.19 0-.51.07-.77.36-.26.29-1.01.99-1.01 2.41 0 1.42 1.03 2.8 1.17 2.99.15.19 2.03 3.1 4.92 4.35.69.3 1.22.47 1.64.6.69.22 1.31.19 1.81.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.17-.55-.32zM16.02 4C9.4 4 4.03 9.37 4.03 15.99c0 2.11.55 4.17 1.6 5.99L4 28l6.19-1.61a11.94 11.94 0 0 0 5.83 1.49h.01c6.62 0 11.99-5.37 11.99-11.99 0-3.2-1.25-6.21-3.51-8.48A11.9 11.9 0 0 0 16.02 4zm0 21.86c-1.79 0-3.54-.48-5.06-1.39l-.36-.21-3.67.96.98-3.58-.24-.37a9.85 9.85 0 0 1-1.51-5.27c0-5.44 4.43-9.86 9.87-9.86 2.63 0 5.11 1.03 6.97 2.9a9.79 9.79 0 0 1 2.89 6.97c0 5.44-4.43 9.86-9.87 9.86z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
