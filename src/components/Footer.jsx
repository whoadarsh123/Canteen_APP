import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const columns = [
  { title: "Company", links: ["About us", "Certification", "How it works", "Careers"] },
  { title: "Product", links: ["Digital menu", "QR ordering", "Billing & POS", "Inventory"] },
  { title: "Support", links: ["Contact sales", "Help centre", "Partner program", "Privacy"] },
];

/* Brand glyphs (lucide no longer ships brand icons) */
const TwitterIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18.9 2H22l-7 8 8.2 12h-6.4l-5-7.3L5.9 22H2.8l7.5-8.6L2.4 2h6.6l4.5 6.7L18.9 2Zm-1.1 18h1.8L7.3 3.9H5.4L17.8 20Z" />
  </svg>
);
const LinkedinIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21 8.65 22 10.9 22 14.1V21h-4v-6.1c0-1.46-.52-2.45-1.82-2.45-1 0-1.6.67-1.86 1.32-.1.23-.12.55-.12.88V21h-4V9Z" />
  </svg>
);
const InstagramIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.96.24 2.65.51.71.27 1.31.64 1.9 1.23.6.6.96 1.19 1.24 1.9.26.69.45 1.48.5 2.65.06 1.27.08 1.65.08 4.85s-.02 3.58-.08 4.85c-.05 1.17-.24 1.96-.5 2.65-.28.71-.65 1.31-1.24 1.9-.59.6-1.19.96-1.9 1.24-.69.26-1.48.45-2.65.5-1.27.06-1.65.08-4.85.08s-3.58-.02-4.85-.08c-1.17-.05-1.96-.24-2.65-.5-.71-.28-1.31-.65-1.9-1.24-.6-.59-.96-1.19-1.23-1.9-.27-.69-.46-1.48-.51-2.65C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.96.51-2.65.27-.71.63-1.3 1.23-1.9.6-.59 1.19-.96 1.9-1.23.69-.27 1.48-.46 2.65-.51C8.42 2.21 8.8 2.2 12 2.2Zm0 4.86a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm6.28-2.2a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0Z" />
  </svg>
);
const YoutubeIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M23.5 6.9a3 3 0 0 0-2.1-2.1C19.5 4.3 12 4.3 12 4.3s-7.5 0-9.4.5A3 3 0 0 0 .5 6.9C0 8.8 0 12 0 12s0 3.2.5 5.1a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.1.5-5.1s0-3.2-.5-5.1ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
  </svg>
);

const socials = [
  { icon: TwitterIcon, label: "Twitter" },
  { icon: LinkedinIcon, label: "LinkedIn" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: YoutubeIcon, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-red-700"
      />
      <div
        className="blob pointer-events-none absolute -left-24 -top-24 opacity-70"
        style={{ width: 320, height: 320 }}
      />
      <div
        className="blob pointer-events-none absolute -bottom-28 -right-20 opacity-25"
        style={{ width: 360, height: 360 }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3">
              <span className="font-display text-xl font-extrabold text-white">
                Canteen Mitra
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-orange-50/90">
              The all-in-one platform to manage canteen orders, menus, billing,
              inventory and customer experience.
            </p>

            <div className="mt-6 space-y-2.5 text-sm text-orange-50/90">
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4" /> hello@canteenmitra.in
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4" /> +91 98765 43210
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4" /> Bengaluru, India
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-white">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="group inline-flex items-center gap-1.5 text-sm text-orange-50/85 transition-colors hover:text-white"
                      >
                        {link}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/25 pt-8 sm:flex-row">
          <p className="text-xs text-orange-50/80">
            © 2026 Canteen Mitra Technologies Pvt. Ltd. · All rights reserved
          </p>
          <div className="flex items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all hover:-translate-y-1 hover:bg-white hover:text-brand-600"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
