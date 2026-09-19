import { motion } from "framer-motion";

export function Blob({
  className = "",
  size = 420,
  soft = false,
  delay = 0,
  from = { x: 60, y: -60 },
}) {
  return (
    <motion.div
      aria-hidden
      className={`${soft ? "blob-soft" : "blob"} ${className}`}
      style={{ width: size, height: size }}
      initial={{ scale: 0.2, opacity: 0, x: from.x, y: from.y }}
      animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

/** Same blob but triggered on scroll instead of mount. */
export function BlobOnView({
  className = "",
  size = 420,
  soft = false,
  delay = 0,
}) {
  return (
    <motion.div
      aria-hidden
      className={`${soft ? "blob-soft" : "blob"} ${className}`}
      style={{ width: size, height: size }}
      initial={{ scale: 0.2, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
