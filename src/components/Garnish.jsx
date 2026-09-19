import { motion } from "framer-motion";

/**
 * A food cut-out (lettuce leaf, tomato slice…) shot on pure white.
 * `mix-blend-mode: multiply` drops the white out on light backgrounds, and the
 * piece slides into position then drifts gently like a real floating garnish.
 */
export default function Garnish({
  src,
  alt = "",
  className = "",
  size = 120,
  rotate = 0,
  delay = 0,
  from = { x: -40, y: 30 },
  drift = true,
  flip = false,
}) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute select-none ${className}`}
      style={{ width: size }}
      initial={{ opacity: 0, x: from.x, y: from.y, rotate: rotate - 25, scale: 0.6 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className={drift ? "animate-drift" : ""}
        style={{ animationDelay: `-${delay * 3}s` }}
      >
        <img
          src={src}
          alt={alt}
          className="cutout w-full"
          style={{ transform: flip ? "scaleX(-1)" : undefined }}
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}
