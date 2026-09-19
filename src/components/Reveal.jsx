import { motion } from "framer-motion";

export default function Reveal({
    children,
    delay = 0,
    y = 30,
    x = 0,
    className,
    once = true,
    scale = 1,
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y, x, scale }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
            }}
            viewport={{
                once,
                margin: "-70px",
            }}
            transition={{
                duration: 0.75,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
