import { motion } from "framer-motion";
import Garnish from "./Garnish";
import { OrderToken } from "./CanteenProps";
import Bread from "../assets/Bread.png";
import Anda from "../assets/Anda.png";
import Coffee2 from "../assets/Coffee2.png";

const paragraphs = [
  "Canteen Mitra keeps your whole service line in sync — every dish, price and stock count updates instantly across counters, QR pages and the kitchen display.",
  "Guests scan, order and pay in seconds, so your team stops fighting queues and starts plating. Managers get live margin data on every single plate served.",
];

export default function Diet() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* ── Bowl visual ── */}
        <div className="relative z-10 mx-auto w-full max-w-[480px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.6, x: -60, rotate: 14 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 15 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04, rotate: -4 }}
            className="relative aspect-square"
          >
            <motion.img
              src={Coffee2}
              alt="Balanced canteen salad bowl"
              className="h-full w-full rounded-full object-contain shadow-[0_36px_64px_-28px_rgba(180,83,9,0.5)]"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-orange-200/50 blur-3xl" />
          </motion.div>

          <Garnish
            src={Anda}
            size={80}
            className="-right-2 top-0 sm:-right-12"
            rotate={40}
            delay={0.8}
            flip
            from={{ x: 70, y: -30 }}
          />
          <Garnish
            src={Bread}
            size={100}
            className="-bottom-2 left-4 sm:-left-8"
            rotate={-18}
            delay={0.95}
            from={{ x: -60, y: 50 }}
          />
          <Garnish
            src={Bread}
            size={88}
            className="bottom-24 -left-4 sm:-left-14"
            rotate={200}
            delay={1.1}
            from={{ x: -60, y: 30 }}
          />
        </div>
        <OrderToken
          className="bottom-[10%] right-[10%] z-20 hidden xl:block"
          size={88}
          number="17"
          delay={1.55}
          from={{ x: 60, y: 50 }}
        />

        {/* ── Copy ── */}
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-4xl"
          >
            Food Is An Important Part{" "}
            <span className="text-red-700">Of A Balanced Diet</span>
          </motion.h2>

          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-lg text-[15px] leading-relaxed text-zinc-500"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
