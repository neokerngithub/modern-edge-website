import { Mail, Phone, MapPin, Clock, MessageCircle, Navigation, Facebook, Linkedin, Instagram } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/9779852059599?text=" +
  encodeURIComponent(
    "Hello Modern Edge Architects & Engineers Pvt. Ltd., I would like to discuss my project.",
  );

const DIRECTIONS_URL =
  "https://www.google.com/maps/place/Modern+Edge+Architects+And+Engineers+Pvt.+Ltd./@26.5622764,87.2795168,18z/data=!3m1!4b1!4m6!3m5!1s0x39ef73000c701611:0x4933fb4fa8b43ffb!8m2!3d26.562275!4d87.2802605!16s%2Fg%2F11lcttpltj";

const MAP_EMBED =
  "https://www.google.com/maps?q=Modern+Edge+Architects+And+Engineers+Pvt.+Ltd.,+Duhabi,+Sunsari&ll=26.562275,87.2802605&z=18&output=embed";

export function ContactBlock() {
  return (
    <div className="space-y-16">
      {/* Two-column: details + map */}
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left — details */}
        <div className="lg:col-span-5 space-y-10">
          <Group icon={<MapPin size={16} />} label="Head Office">
            <div className="text-ink">Province 1, Duhabi-6</div>
            <div className="text-ink-muted">Sunsari, Nepal</div>
          </Group>

          <Group icon={<MapPin size={16} />} label="Branch Office">
            <div className="text-ink">Province 1, Biratnagar-10</div>
            <div className="text-ink-muted">Morang, Nepal</div>
          </Group>

          <Group icon={<Phone size={16} />} label="Phone">
            <a href="tel:+9779852059599" className="block text-ink hover:text-primary transition-colors">
              +977 98520 59599
            </a>
            <a href="tel:+9779819015015" className="block text-ink hover:text-primary transition-colors">
              +977 98190 15015
            </a>
          </Group>

          <Group icon={<MessageCircle size={16} />} label="WhatsApp">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink hover:text-primary transition-colors"
            >
              +977 98520 59599
            </a>
          </Group>

          <Group icon={<Mail size={16} />} label="Email">
            <a href="mailto:info@modernedge.com.np" className="block text-ink hover:text-primary transition-colors">
              info@modernedge.com.np
            </a>
            <a href="mailto:meae.np@gmail.com" className="block text-ink-muted hover:text-primary transition-colors">
              meae.np@gmail.com
            </a>
          </Group>

          <Group icon={<Clock size={16} />} label="Business Hours">
            <div className="text-ink">Sunday – Friday · 10:00 AM – 5:30 PM</div>
            <div className="text-ink-muted">Saturday · By Consultation</div>
          </Group>

          <div className="pt-2">
            <div className="text-[10px] uppercase tracking-[0.26em] text-ink-muted mb-4">Follow</div>
            <SocialRow />
          </div>
        </div>

        {/* Right — map + CTA */}
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-[20px] border border-hairline shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
            <iframe
              title="Modern Edge Architects & Engineers — Head Office, Duhabi"
              src={MAP_EMBED}
              width="100%"
              height="520"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full h-[420px] md:h-[520px]"
            />
          </div>

          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Navigation size={16} /> Get Directions
          </a>
        </div>
      </div>

      {/* CTA banner */}
      <div className="rounded-[24px] border border-hairline bg-ink text-white p-10 md:p-14">
        <div className="max-w-3xl">
          <div className="text-[10px] uppercase tracking-[0.28em] text-white/60">Start a project</div>
          <h3 className="mt-4 font-display font-light text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em] text-white">
            Let's Build Something{" "}
            <span className="italic text-white/70">Exceptional Together</span>
          </h3>
          <p className="mt-6 text-[15px] leading-[1.75] text-white/70 max-w-2xl">
            Whether you're planning a residential home, commercial development, construction project, or
            require a professional property valuation, our experienced team is ready to assist.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="tel:+9779852059599"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Phone size={16} /> Call Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-white/90 transition-colors"
          >
            <MessageCircle size={16} /> WhatsApp Us
          </a>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            <Navigation size={16} /> Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}

function Group({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.26em] text-ink-muted">{label}</div>
        <div className="mt-2 text-[15px] leading-[1.65] space-y-0.5">{children}</div>
      </div>
    </div>
  );
}

export function SocialRow({ tone = "light" }: { tone?: "light" | "dark" }) {
  const base =
    tone === "dark"
      ? "border-white/20 text-white/70 hover:text-white hover:border-white"
      : "border-hairline text-ink-muted hover:text-primary hover:border-primary";
  const links = [
    { href: "https://www.facebook.com/meae.np/", label: "Facebook", Icon: Facebook },
    { href: "https://www.linkedin.com/company/meaenp", label: "LinkedIn", Icon: Linkedin },
    { href: "https://www.instagram.com/meae.np", label: "Instagram", Icon: Instagram },
  ];
  return (
    <div className="flex items-center gap-3">
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${base}`}
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}
