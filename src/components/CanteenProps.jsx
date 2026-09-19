import { motion } from "framer-motion";

/* ------------------------------------------------------------------ *
 * Shared entrance helper
 * ------------------------------------------------------------------ */
const ease = [0.22, 1, 0.36, 1];

function Float({
  className = "",
  size,
  delay = 0,
  from = { x: -50, y: 40 },
  inline = false,
  children,
}) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none select-none ${
        inline ? "relative" : "absolute"
      } ${className}`}
      style={{ width: size }}
      initial={{ opacity: 0, scale: 0.5, x: from.x, y: from.y, rotate: -18 }}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ *
 * 1. CLOCHE — domed canteen serving lid that LIFTS on hover
 * ------------------------------------------------------------------ */
export function Cloche3D({
  className = "",
  size = 190,
  delay = 0,
  from,
  inline = false,
}) {
  return (
    <Float className={className} size={size} delay={delay} from={from} inline={inline}>
      <motion.div
        className="pointer-events-auto relative cursor-pointer"
        style={{ aspectRatio: "1 / 0.78", perspective: 700 }}
        initial="rest"
        whileHover="lift"
        animate="rest"
      >
        {/* glow */}
        <div className="absolute inset-[-20%] rounded-full bg-orange-300/40 blur-2xl" />

        {/* STEAM — intensifies when the lid lifts */}
        {[0, 1, 2, 3].map((i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/90 blur-[3px]"
            style={{ width: 5, height: 22, left: `${28 + i * 15}%`, top: "-12%" }}
            variants={{
              rest: { opacity: 0, y: 8, scaleY: 0.6 },
              lift: { opacity: [0, 0.95, 0], y: [-14, -48], scaleY: 1.3 },
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.28,
              ease: "easeOut",
            }}
          />
        ))}

        {/* FOOD underneath (revealed on hover) */}
        <motion.div
          className="absolute left-1/2 rounded-full"
          style={{
            width: "66%",
            aspectRatio: "1 / 0.42",
            bottom: "8%",
            x: "-50%",
          }}
          variants={{ rest: { opacity: 0, scale: 0.7 }, lift: { opacity: 1, scale: 1 } }}
          transition={{ duration: 0.45, delay: 0.14 }}
        >
          <div
            className="h-full w-full rounded-full"
            style={{
              background:
                "radial-gradient(circle at 38% 30%, #fde68a 0%, #fbbf24 30%, #ef4444 62%, #991b1b 100%)",
              boxShadow: "inset 0 -5px 10px rgba(0,0,0,0.3)",
            }}
          >
            <span className="absolute left-[30%] top-[34%] h-1.5 w-2.5 rounded-full bg-emerald-500/90" />
            <span className="absolute left-[54%] top-[52%] h-1.5 w-2.5 rounded-full bg-emerald-600/90" />
          </div>
        </motion.div>

        {/* PLATE base */}
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-[50%]"
          style={{
            width: "100%",
            aspectRatio: "1 / 0.26",
            bottom: "0%",
            background: "linear-gradient(180deg,#ffffff 0%,#f8fafc 40%,#dbeafe 100%)",
            boxShadow:
              "0 14px 26px -10px rgba(30,64,175,0.28), inset 0 2px 4px rgba(255,255,255,0.9)",
          }}
        >
          <div
            className="absolute inset-[14%] rounded-[50%] border-[2.5px]"
            style={{ borderColor: "#93c5fd" }}
          />
        </div>

        {/* DOME */}
        <motion.div
          className="absolute left-1/2"
          style={{
            width: "78%",
            aspectRatio: "1 / 0.62",
            bottom: "11%",
            x: "-50%",
            transformOrigin: "bottom center",
          }}
          variants={{
            rest: { y: 0, rotateX: 0, rotateZ: 0 },
            lift: { y: "-42%", rotateX: -22, rotateZ: -8 },
          }}
          transition={{ type: "spring", stiffness: 180, damping: 15 }}
        >
          <div
            className="h-full w-full overflow-hidden rounded-t-full"
            style={{
              background:
                "linear-gradient(105deg,#e2e8f0 0%,#ffffff 22%,#f1f5f9 42%,#cbd5e1 68%,#94a3b8 100%)",
              boxShadow:
                "0 16px 30px -12px rgba(100,116,139,0.55), inset 0 4px 8px rgba(255,255,255,0.95)",
            }}
          >
            {/* curved reflection */}
            <div
              className="absolute left-[18%] top-[16%] h-[34%] w-[30%] rounded-full"
              style={{
                background:
                  "linear-gradient(120deg,rgba(255,255,255,0.95),rgba(255,255,255,0))",
                filter: "blur(3px)",
              }}
            />
            {/* base band */}
            <div className="absolute inset-x-0 bottom-0 h-[16%] bg-gradient-to-b from-slate-300/60 to-slate-400/70" />
          </div>

          {/* knob */}
          <div
            className="absolute left-1/2 top-[-9%] h-[18%] w-[16%] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #ffffff, #cbd5e1 55%, #64748b 100%)",
              boxShadow: "0 4px 8px rgba(71,85,105,0.4)",
            }}
          />
        </motion.div>
      </motion.div>
    </Float>
  );
}

/* ------------------------------------------------------------------ *
 * 2. ORDER TOKEN — classic canteen token, flips in 3D on hover
 * ------------------------------------------------------------------ */
export function OrderToken({
  className = "",
  size = 96,
  number = "42",
  delay = 0,
  from,
  inline = false,
}) {
  return (
    <Float className={className} size={size} delay={delay} from={from} inline={inline}>
      <motion.div
        className="pointer-events-auto cursor-pointer"
        style={{ aspectRatio: "1", perspective: 600 }}
        initial="rest"
        whileHover="flip"
        animate="rest"
      >
        <motion.div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
          variants={{ rest: { rotateY: 0 }, flip: { rotateY: 180 } }}
          transition={{ duration: 0.65, ease }}
        >
          {/* ── FRONT: brand face ── */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-full"
            style={{
              backfaceVisibility: "hidden",
              background:
                "radial-gradient(circle at 34% 28%, #fdba74 0%, #f97316 45%, #c2410c 100%)",
              boxShadow:
                "0 14px 26px -10px rgba(194,65,12,0.6), inset 0 3px 6px rgba(255,255,255,0.55), inset 0 -5px 10px rgba(120,53,15,0.45)",
            }}
          >
            <div className="absolute inset-[9%] rounded-full border-2 border-dashed border-white/55" />
            <span className="font-display text-[9px] font-extrabold uppercase tracking-[0.14em] text-orange-50">
              Canteen
            </span>
            <span className="font-display text-sm font-extrabold text-white">Mitra</span>
            <span className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.18em] text-orange-100/80">
              Token
            </span>
          </div>

          {/* ── BACK: order number ── */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-full"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background:
                "radial-gradient(circle at 34% 28%, #ffffff 0%, #fef3c7 45%, #fde68a 100%)",
              boxShadow:
                "0 14px 26px -10px rgba(180,83,9,0.5), inset 0 3px 6px rgba(255,255,255,0.9)",
            }}
          >
            <div className="absolute inset-[9%] rounded-full border-2 border-dashed border-orange-300" />
            <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-orange-500">
              Your no.
            </span>
            <span className="font-display text-2xl font-extrabold leading-none text-orange-600">
              {number}
            </span>
            <span className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.14em] text-orange-400">
              Ready soon
            </span>
          </div>
        </motion.div>
      </motion.div>
    </Float>
  );
}

export function Cutlery3D({
  className = "",
  size = 130,
  delay = 0,
  from,
  inline = false,
}) {
  const metal =
    "linear-gradient(100deg,#cbd5e1 0%,#ffffff 20%,#e2e8f0 42%,#f8fafc 64%,#94a3b8 100%)";

  return (
    <Float className={className} size={size} delay={delay} from={from} inline={inline}>
      <motion.div
        className="pointer-events-auto relative cursor-pointer"
        style={{ aspectRatio: "1 / 1.05" }}
        initial="rest"
        whileHover="open"
        animate="rest"
      >
        <div className="absolute inset-[-18%] rounded-full bg-orange-200/45 blur-2xl" />

        {/* FORK (left) */}
        <motion.div
          className="absolute left-[8%] top-0 h-full w-[26%]"
          style={{ transformOrigin: "bottom center" }}
          variants={{ rest: { rotate: -7, x: 0 }, open: { rotate: -26, x: "-12%" } }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
        >
          <div className="relative h-full w-full">
            <div
              className="absolute bottom-0 left-1/2 h-[58%] w-[38%] -translate-x-1/2 rounded-full"
              style={{ background: metal, boxShadow: "0 6px 12px rgba(100,116,139,0.3)" }}
            />
            <div className="absolute left-1/2 top-0 flex h-[42%] w-[74%] -translate-x-1/2 justify-center gap-[3px]">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="w-[18%] rounded-full"
                  style={{
                    background: metal,
                    height: i === 0 || i === 3 ? "78%" : "100%",
                    marginTop: i === 0 || i === 3 ? "22%" : 0,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* SPOON (right) */}
        <motion.div
          className="absolute right-[8%] top-0 h-full w-[26%]"
          style={{ transformOrigin: "bottom center" }}
          variants={{ rest: { rotate: 7, x: 0 }, open: { rotate: 26, x: "12%" } }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
        >
          <div className="relative h-full w-full">
            <div
              className="absolute bottom-0 left-1/2 h-[56%] w-[36%] -translate-x-1/2 rounded-full"
              style={{ background: metal, boxShadow: "0 6px 12px rgba(100,116,139,0.3)" }}
            />
            <div
              className="absolute left-1/2 top-0 h-[44%] w-[86%] -translate-x-1/2 rounded-[50%_50%_46%_46%]"
              style={{
                background:
                  "radial-gradient(ellipse at 40% 28%, #ffffff 0%, #e2e8f0 50%, #94a3b8 100%)",
                boxShadow: "inset 0 -4px 8px rgba(100,116,139,0.45)",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </Float>
  );
}
export function ChaiCup({
  className = "",
  size = 110,
  delay = 0,
  from,
  inline = false,
}) {
  return (
    <Float className={className} size={size} delay={delay} from={from} inline={inline}>
      <motion.div
        className="pointer-events-auto relative cursor-pointer"
        style={{ aspectRatio: "1 / 1.1" }}
        initial="rest"
        whileHover="hot"
        animate="rest"
      >
        <div className="absolute inset-[-18%] rounded-full bg-orange-200/45 blur-2xl" />

        {/* steam */}
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white blur-[3px]"
            style={{ width: 6, height: 24, left: `${32 + i * 18}%`, top: "-6%" }}
            variants={{
              rest: { opacity: [0, 0.5, 0], y: [6, -26], scaleY: 0.9 },
              hot: { opacity: [0, 1, 0], y: [10, -54], scaleY: 1.5 },
            }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4, ease: "easeOut" }}
          />
        ))}

        {/* saucer */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-[50%]"
          style={{
            width: "100%",
            aspectRatio: "1 / 0.28",
            background: "linear-gradient(180deg,#ffffff,#f1f5f9 55%,#dbeafe)",
            boxShadow: "0 10px 20px -8px rgba(30,64,175,0.3)",
          }}
        />

        {/* cup body */}
        <motion.div
          className="absolute left-1/2"
          style={{ width: "62%", aspectRatio: "1 / 0.92", bottom: "9%", x: "-50%" }}
          variants={{ rest: { y: 0, rotate: 0 }, hot: { y: -8, rotate: -5 } }}
          transition={{ type: "spring", stiffness: 240, damping: 14 }}
        >
          <div
            className="h-full w-full overflow-hidden rounded-b-[36%] rounded-t-[14%]"
            style={{
              background:
                "linear-gradient(100deg,#f8fafc 0%,#ffffff 35%,#e2e8f0 78%,#cbd5e1 100%)",
              boxShadow: "inset 0 -6px 12px rgba(100,116,139,0.3)",
            }}
          >
            <div
              className="absolute inset-x-[9%] top-0 h-[16%] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 45% 40%, #d97706 0%, #b45309 55%, #78350f 100%)",
              }}
            />
          </div>
          <div
            className="absolute -right-[14%] top-[32%] h-[34%] w-[26%] rounded-full border-[4px]"
            style={{ borderColor: "#e2e8f0", background: "transparent" }}
          />
        </motion.div>
      </motion.div>
    </Float>
  );
}

/* ------------------------------------------------------------------ *
 * 6. SERVING TRAY — tilts toward the cursor on hover
 * ------------------------------------------------------------------ */
export function ServingTray({
  className = "",
  size = 170,
  delay = 0,
  from,
  inline = false,
}) {
  const items = [
    { bg: "radial-gradient(circle at 38% 32%,#fef3c7,#f59e0b 55%,#b45309)", l: "12%", t: "30%" },
    { bg: "radial-gradient(circle at 38% 32%,#fee2e2,#ef4444 55%,#991b1b)", l: "58%", t: "24%" },
    { bg: "radial-gradient(circle at 38% 32%,#fff7ed,#fdba74 55%,#c2410c)", l: "34%", t: "56%" },
  ];

  return (
    <Float className={className} size={size} delay={delay} from={from} inline={inline}>
      <motion.div
        className="pointer-events-auto cursor-pointer"
        style={{ aspectRatio: "1 / 0.82", perspective: 600 }}
        whileHover={{ rotateX: 22, rotateZ: -12, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <div className="absolute inset-[-16%] rounded-full bg-orange-200/45 blur-2xl" />

        <div
          className="absolute inset-0 rounded-[22%]"
          style={{
            background:
              "linear-gradient(125deg,#e2e8f0 0%,#ffffff 24%,#f1f5f9 46%,#cbd5e1 74%,#94a3b8 100%)",
            boxShadow:
              "0 20px 36px -14px rgba(100,116,139,0.5), inset 0 4px 8px rgba(255,255,255,0.9), inset 0 -6px 12px rgba(100,116,139,0.28)",
          }}
        >
          <div className="absolute inset-[7%] rounded-[18%] border-[3px] border-white/70" />
          {items.map((it, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                width: "27%",
                aspectRatio: "1",
                left: it.l,
                top: it.t,
                background: it.bg,
                boxShadow: "inset 0 -4px 8px rgba(0,0,0,0.28), 0 4px 8px rgba(0,0,0,0.12)",
              }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            />
          ))}
          <motion.div
            className="absolute inset-y-0 w-1/3"
            style={{
              background:
                "linear-gradient(100deg,transparent,rgba(255,255,255,0.85),transparent)",
              filter: "blur(5px)",
            }}
            animate={{ x: ["-130%", "320%"] }}
            transition={{ duration: 5, repeat: Infinity, repeatDelay: 2.5 }}
          />
        </div>
      </motion.div>
    </Float>
  );
}
