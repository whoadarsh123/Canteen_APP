import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#menu" },
  { label: "How it works", href: "#how" },
  { label: "About us", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact us", href: "#contact" },
];

const GRADIENT = "linear-gradient(100deg,#fbbf24,#f97316 55%,#ef4444)";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-3xl px-5 py-3 transition-all duration-500 sm:px-7 ${
          scrolled
            ? "bg-white/90 shadow-[0_12px_40px_-18px_rgba(234,88,12,0.35)] backdrop-blur-xl"
            : "bg-white/60 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <span className="font-display text-lg font-extrabold tracking-tight text-zinc-900">
            Canteen <span className="text-red-700">Mitra</span>
          </span>
        </a>

        {/* Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.07, duration: 0.5 }}
              className="group relative rounded-full px-4 py-2 text-sm font-semibold text-zinc-600 transition-colors hover:text-brand-600"
            >
              {link.label}
              <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center gap-3"
        >

          <a
            href="#contact"
            className=" hidden bg-gradient-to-r from-red-600 via-red-700 to-red-800  rounded-2xl px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105 sm:inline-flex"
          >
            Book Demo
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-7xl rounded-3xl bg-white p-4 shadow-xl lg:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-600 transition-colors hover:bg-brand-50 hover:text-brand-600"
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-2xl px-4 py-3 text-center text-sm font-bold text-white"
              style={{ background: GRADIENT }}
            >
              Book a demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
