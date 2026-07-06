import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import officeImg from "@/assets/contact-office.jpg";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Add a subject").max(120),
  message: z.string().trim().min(10, "Tell us a little more").max(1500),
});

export function ContactBlock() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    // Compose mailto — no backend configured
    const body = `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone ?? ""}\n\n${parsed.data.message}`;
    const url = `mailto:info@modernedge.com.np?subject=${encodeURIComponent(
      parsed.data.subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setStatus("sent");
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <div className="grid lg:grid-cols-12 gap-0 border border-hairline rounded-2xl overflow-hidden bg-white">
      {/* Left: office visual + details */}
      <aside className="lg:col-span-5 relative bg-ink text-white p-8 md:p-12 flex flex-col">
        <img
          src={officeImg}
          alt="Modern Edge office interior"
          width={1400}
          height={1000}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="eyebrow text-white/70">Contact</div>
          <h3 className="mt-3 text-3xl md:text-4xl text-white">
            Let's build something extraordinary together.
          </h3>
          <p className="mt-4 text-sm text-white/70 max-w-md">
            Reach out for consultations, valuations or project inquiries. Our team responds
            within one business day.
          </p>

          <div className="mt-10 space-y-6 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-primary-foreground" />
              <div>
                <div className="text-white">Main Office</div>
                <div className="text-white/70">Duhabi-06, Sunsari, Nepal</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-primary-foreground" />
              <div>
                <div className="text-white">Branch Office</div>
                <div className="text-white/70">Biratnagar-10, Morang, Nepal</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 text-primary-foreground" />
              <div className="space-y-1">
                <a href="mailto:info@modernedge.com.np" className="block text-white/90 hover:text-white">
                  info@modernedge.com.np
                </a>
                <a href="mailto:meae.np@gmail.com" className="block text-white/70 hover:text-white">
                  meae.np@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 text-primary-foreground" />
              <div className="space-y-1 text-white/80">
                <div>Kiran · +977 98520 59599 · +977 98422 78666</div>
                <div>Samir · +977 97677 84543 · +977 98190 15015</div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Right: form */}
      <div className="lg:col-span-7 p-8 md:p-12">
        <form onSubmit={onSubmit} className="grid gap-5" noValidate>
          <div className="grid md:grid-cols-2 gap-5">
            <Field name="name" label="Full name" error={errors.name} required />
            <Field name="email" label="Email address" type="email" error={errors.email} required />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Field name="phone" label="Phone (optional)" type="tel" error={errors.phone} />
            <Field name="subject" label="Subject" error={errors.subject} required />
          </div>
          <Field name="message" label="How can we help?" as="textarea" error={errors.message} required />

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <p className="text-xs text-ink-muted max-w-sm">
              By submitting this form you agree to be contacted about your inquiry.
            </p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Send inquiry <Send size={16} />
            </button>
          </div>

          {status === "sent" && (
            <div className="text-sm text-primary" role="status">
              Thank you — your mail client should have opened.
            </div>
          )}
        </form>

        <div className="mt-12 rounded-[16px] overflow-hidden border border-hairline">
          <iframe
            title="Modern Edge — Duhabi Office location"
            src="https://www.google.com/maps?q=Duhabi%2C%20Sunsari%2C%20Nepal&output=embed"
            width="100%"
            height="340"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full grayscale contrast-[1.05]"
          />
        </div>
      </div>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  as,
  required,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  as?: "textarea";
  required?: boolean;
  error?: string;
}) {
  const base =
    "block w-full bg-transparent border-0 border-b border-hairline focus:border-primary focus:ring-0 outline-none py-3 text-sm text-ink placeholder:text-ink-muted/60";
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.18em] text-ink-muted mb-1">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={4}
          required={required}
          className={base + " resize-y"}
          maxLength={1500}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className={base}
          maxLength={200}
        />
      )}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
