import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, PhoneCall } from "lucide-react";
import { Blob } from "./Blob";
import { Cloche3D, OrderToken, ChaiCup } from "./CanteenProps";
import Coffee2 from "../assets/Coffee2.png";
import Plate2 from '../assets/Plates2.png';
import Samosa from '../assets/Samosa.png';

const GRADIENT = "linear-gradient(100deg,#fbbf24,#f97316 55%,#ef4444)";
const ICON_BG = "linear-gradient(140deg,#fbbf24,#f97316 60%,#ef4444)";

const infoItems = [
  { icon: Clock, value: "Digital Ordering", label: "Working hours" },
  { icon: MapPin, value: "Real Time Tracking", label: "Get Directions" },
  { icon: PhoneCall, value: "Smart Billing", label: "Call Online" },
  { icon: PhoneCall, value: "Inventory Control", label: "Call Online" },
];

/** 3-column info row under the hero (reference style). */
function InfoStrip() {
  return (
    <div className="relative mx-auto mt-30 max-w-4xl px-4 sm:px-6">
      <div className="grid gap-10 sm:grid-cols-4">
        {infoItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15 + i * 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col items-center text-center"
          >
            <motion.span
              whileHover={{ scale: 1.14, rotate: 8 }}
              transition={{ type: "spring", stiffness: 320, damping: 16 }}
              className="flex h-12 w-12 items-center bg-red-700 justify-center rounded-full text-white shadow-lg shadow-orange-300/60"
            >
              <item.icon className="h-5 w-5" />
            </motion.span>
            <p className="mt-4 font-display text-[15px] font-bold text-zinc-900">
              {item.value}
            </p>
            <p className="mt-1 text-sm text-zinc-500">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:pb-24">
      {/* ── Signature orange circle, top-right ── */}
      <Blob
        className="-right-24 -top-32 sm:-right-16 lg:-right-10 lg:-top-40"
        size={620}
        delay={0.15}
        from={{ x: 140, y: -120 }}
      />
      <div className="bg-dots pointer-events-none absolute right-10 top-40 h-40 w-40 opacity-70 [mask-image:radial-gradient(circle,black,transparent_70%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-4">
        {/* ── Copy ── */}
        <div className="relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Canteen management platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[2.4rem] font-extrabold leading-[1.12] tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.5rem]"
          >
            Smart Canteen,
            <br />
             Management <span className="text-red-700">System</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-zinc-500"
          >
            Canteen Mitra does all the prep work for you — digital menus, QR
            self-ordering, instant billing, live inventory and guest experience,
            all from one powerful platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <a
              href="#contact"
              className=" group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 via-red-700 to-red-800 px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
            >
              Order Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </a>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {[
                  { c: "from-orange-400 to-red-500", t: "A" },
                  { c: "from-red-400 to-rose-600", t: "K" },
                  { c: "from-amber-400 to-orange-600", t: "R" },
                ].map((a) => (
                  <span
                    key={a.t}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br ${a.c} text-[11px] font-bold text-white shadow-sm`}
                  >
                    {a.t}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900">500+ canteens</p>
                <p className="text-xs text-zinc-500">already serving smarter</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Circular bowl visual ── */}
        <div className="relative z-10 mx-auto w-full max-w-[520px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-[-6%]"
          >
            <div className="animate-spin-slow h-full w-full rounded-full border-2 border-dashed border-brand-300/60" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.55, y: 60, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.25, duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04, rotate: 4 }}
            className="relative aspect-square"
          >
            <motion.img
              src={Samosa}
              alt="Fresh canteen meal bowl"
              className="h-full w-full object-contain"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-orange-300/40 blur-3xl" />

            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: -30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-2 top-8 rounded-2xl bg-white px-4 py-2.5 shadow-xl shadow-orange-200/70 sm:-left-8"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Today's special
              </p>
              <p className="font-display text-sm font-extrabold text-zinc-900">
                Veg Bowl · <span className="text-brand-600">₹99</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-1 bottom-10 rounded-xl backdrop-blur-2xl px-4 py-2.5 shadow-xl shadow-orange-200/70 sm:-right-6"
            >
              <p className="flex items-center gap-1 text-sm font-extrabold text-zinc-900">
                ⭐ 4.9
                <span className="text-[11px] font-medium text-zinc-50">/5 rating</span>
              </p>
            </motion.div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.55, y: 60, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.25, duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04, rotate: 4 }}
            src={Plate2} alt="#" className="absolute right-110 -bottom-23 h-50"
          />
          <OrderToken
            className="right-[-6%] top-[-8%] z-30 sm:right-[-12%]"
            size={92}
            number="42"
            delay={1.65}
            from={{ x: 70, y: -50 }}
          />
        </div>
      </div>

      <InfoStrip />
    </section>
  );
}
