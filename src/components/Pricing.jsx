import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Zap,
  Crown,
  ArrowRight,
  Headphones,
} from "lucide-react";
import { Blob, BlobOnView } from "./Blob";
import Garnish from "./Garnish";
import { OrderToken } from "./CanteenProps";

const GRADIENT = "linear-gradient(100deg,#fbbf24,#f97316 55%,#ef4444)";
const ICON_BG = "linear-gradient(140deg,#fbbf24,#f97316 60%,#ef4444)";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    monthly: 999,
    yearly: 833,
    tagline: "For a single canteen going digital for the first time.",
    features: [
      "1 outlet · up to 200 orders/day",
      "Digital menu & QR ordering",
      "UPI + cash billing",
      "Basic sales reports",
      "Email support",
    ],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Professional",
    icon: Sparkles,
    monthly: 2499,
    yearly: 2083,
    tagline: "For busy canteens that need full control and insights.",
    features: [
      "Up to 3 outlets · unlimited orders",
      "Smart inventory & low-stock alerts",
      "Dish-level analytics & heatmaps",
      "Loyalty program & feedback",
      "Priority chat + phone support",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Custom",
    icon: Crown,
    monthly: 0,
    yearly: 0,
    tagline: "For multi-site campuses and corporate canteen chains.",
    features: [
      "Unlimited outlets & counters",
      "Central menu & rate control",
      "Custom branding & own domain",
      "Open API + payroll sync",
      "Dedicated success manager",
    ],
    cta: "Talk to sales",
    popular: false,
  },
];

function AnimatedPrice({ value }) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const from = display;
    const start = performance.now();
    const duration = 600;
    let frame;

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(from + (value - from) * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <>{display.toLocaleString("en-IN")}</>;
}

function PlanCard({ plan, isYearly, index }) {
  const Icon = plan.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 56, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{
        delay: 0.12 * index,
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative h-full ${plan.popular ? "lg:-mt-6 lg:mb-6" : ""}`}
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 240, damping: 20 }}
        className={`relative flex h-full flex-col rounded-[2rem] p-8 ${
          plan.popular
            ? "border-conic bg-gradient-to-b from-orange-50 via-white to-red-50/70 shadow-[0_30px_70px_-30px_rgba(234,88,12,0.55)]"
            : "card"
        }`}
      >
        {/* Most popular ribbon */}
        {plan.popular && (
          <span
            className="absolute -top-3.5 left-1/2 bg-red-700 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-lg"
          >
            Most popular
          </span>
        )}

        {/* Icon + name */}
        <div className="flex items-center gap-3">
          <motion.span
            whileHover={{ rotate: 10, scale: 1.12 }}
            transition={{ type: "spring", stiffness: 300, damping: 14 }}
            className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl text-white ${
              plan.popular
                ? "shadow-lg shadow-red-700 bg-red-600"
                : "bg-red-700 shadow-md shadow-zinc-300"
            }`}
            
          >
            <Icon className="h-5 w-5" />
          </motion.span>
          <h3 className="font-display text-xl font-extrabold text-zinc-900">
            {plan.name}
          </h3>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-zinc-500">{plan.tagline}</p>

        {/* Price */}
        <div className="mt-6 flex items-end gap-2 border-b border-dashed border-zinc-200 pb-6">
          {plan.monthly > 0 ? (
            <>
              <span className="font-display text-4xl font-extrabold leading-none text-zinc-900">
                ₹
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={isYearly ? "y" : "m"}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="inline-block"
                  >
                    <AnimatedPrice value={isYearly ? plan.yearly : plan.monthly} />
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="pb-1 text-sm font-medium text-zinc-400">/month</span>
            </>
          ) : (
            <span className="font-display text-4xl font-extrabold leading-none text-zinc-900">
              Let's talk
            </span>
          )}
        </div>

        {plan.monthly > 0 && (
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            {isYearly ? "Billed annually · save 17%" : "Billed monthly"}
          </p>
        )}

        {/* Features */}
        <ul className="mt-7 flex-1 space-y-3.5">
          {plan.features.map((f, i) => (
            <motion.li
              key={f}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.06, duration: 0.45 }}
              className="flex items-start gap-3 text-sm text-zinc-600"
            >
              <span
                className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                  plan.popular ? "text-white" : "bg-orange-100 text-brand-600"
                }`}
                style={plan.popular ? { background: ICON_BG } : undefined}
              >
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {f}
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold transition-all hover:scale-[1.03] active:scale-95 ${
            plan.popular
              ? " text-white shadow-lg shadow-red-300 bg-red-700"
              : "border border-zinc-200 bg-white text-zinc-800 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
          }`}
        >
          {plan.cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </motion.div>
  );
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative overflow-hidden py-20 sm:py-28">
      {/* Theme blobs */}
      <BlobOnView
        soft
        className="-right-32 -top-20 opacity-90 lg:-right-20"
        size={400}
        delay={0.1}
      />
      <BlobOnView className="-left-40 bottom-0 opacity-10" size={320} delay={0.25} />
      <div className="bg-dots pointer-events-none absolute left-1/2 top-10 h-32 w-64 -translate-x-1/2 opacity-60 [mask-image:radial-gradient(circle,black,transparent_70%)]" />

      {/* Floating canteen props */}
      <OrderToken
        className="left-[3%] top-[14%] z-20 hidden xl:block"
        size={86}
        number="01"
        delay={0.9}
        from={{ x: -60, y: -40 }}
      />
      <Garnish
        src="/images/garnish-chai.png"
        size={110}
        className="right-[4%] top-[10%] hidden xl:block"
        rotate={16}
        delay={1.05}
        from={{ x: 60, y: -30 }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-700"
          >
            <Headphones className="h-3.5 w-3.5" />
            Simple pricing
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Plans That Fit{" "}
            <span className="text-red-700">Your Canteen</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-500"
          >
            No setup fees, no lock-in contracts. Every plan includes free
            onboarding, menu setup and staff training.
          </motion.p>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.28, duration: 0.6 }}
          className="mt-9 flex items-center justify-center gap-4"
        >
          <span
            className={`text-sm font-bold transition-colors ${
              !isYearly ? "text-zinc-900" : "text-zinc-400"
            }`}
          >
            Monthly
          </span>

          <button
            onClick={() => setIsYearly((v) => !v)}
            aria-label="Toggle billing period"
            className={`relative h-9 w-[72px] rounded-full border transition-colors ${
              isYearly
                ? "border-brand-300 bg-orange-50"
                : "border-zinc-200 bg-white shadow-sm"
            }`}
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 500, damping: 32 }}
              className={`absolute top-1 h-7 w-7 rounded-full shadow-md ${
                isYearly
                  ? "left-[40px] text-white"
                  : "left-1 bg-red-700"
              }`}
              style={isYearly ? { background: ICON_BG } : undefined}
            />
          </button>

          <span
            className={`text-sm font-bold transition-colors ${
              isYearly ? "text-zinc-900" : "text-zinc-400"
            }`}
          >
            Yearly
          </span>

          <motion.span
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-extrabold text-emerald-600 ring-1 ring-emerald-200"
          >
            Save 17%
          </motion.span>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} isYearly={isYearly} index={i} />
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10 text-center text-sm text-zinc-400"
        >
          All prices in INR, exclusive of GST · 14-day free trial on every plan ·
          Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}
