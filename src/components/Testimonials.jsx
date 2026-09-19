import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const reviews = [
    {
        name: "Priya Sharma",
        role: "Admin, TechPark Canteen",
        avatar: "PS",
        color: "from-red-500 to-rose-700",
        text: "Lunch rush went from 40-minute queues to almost none. Our students scan, pay, and eat. Canteen Mitra basically paid for itself in the first month.",
    },
    {
        name: "Rahul Verma",
        role: "Owner, Green Bowl",
        avatar: "RV",
        color: "from-orange-500 to-red-600",
        text: "The inventory alerts alone cut our daily wastage by a third. I finally know exactly which dish makes money and which one doesn't.",
    },
    {
        name: "Ananya Iyer",
        role: "Cafeteria Head, Sunrise University",
        avatar: "AI",
        color: "from-rose-500 to-rose-800",
        text: "Settlement used to take two hours every evening. Now it's a single tap. The GST-ready invoices keep our auditors happy too.",
    },
    {
        name: "Mohammed Irfan",
        role: "Manager, Spice Route",
        avatar: "MI",
        color: "from-red-600 to-rose-700",
        text: "Our guests love the live order tracking. Feedback ratings jumped from 3.8 to 4.9 stars within six weeks of going live.",
    },
    {
        name: "Sneha Patil",
        role: "Owner, The Daily Thali",
        avatar: "SP",
        color: "from-red-500 to-orange-600",
        text: "I run two canteens on my own now. One dashboard for both — menus, stock, sales. It feels like having a full ops team.",
    },
    {
        name: "Vikram Nair",
        role: "Facilities Lead, NovaCorp",
        avatar: "VN",
        color: "from-rose-600 to-red-800",
        text: "Setup took one afternoon including QR printing and staff training. Support replies in minutes — genuinely rare in this category.",
    },
    {
        name: "Kavya Reddy",
        role: "Admin, Campus Kitchen",
        avatar: "KR",
        color: "from-red-500 to-rose-600",
        text: "Peak-hour heatmaps helped me reschedule my staff. Same headcount, 30% more orders served during lunch.",
    },
    {
        name: "Arjun Mehta",
        role: "Owner, Brew & Bite",
        avatar: "AM",
        color: "from-orange-600 to-red-700",
        text: "UPI, card, cash — everything reconciles automatically. My evenings are free again instead of counting tills.",
    },
];

function Card({ review }) {
    return (
        <figure className="mx-3 flex w-[340px] flex-none flex-col rounded-3xl border border-zinc-400 bg-zinc-200 p-6 transition-colors hover:border-red-500/30 sm:w-[380px]">
            <div className="flex items-center justify-between">
                <Quote className="h-7 w-7 text-red-700" />

                <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                        />
                    ))}
                </div>
            </div>

            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-black">
                “{review.text}”
            </blockquote>

            <figcaption className="mt-5 flex items-center gap-3 border-t border-white/8 pt-4">
                <span
                    className={`flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gradient-to-br ${review.color} text-xs font-bold text-white`}
                >
                    {review.avatar}
                </span>

                <div>
                    <p className="text-sm font-bold text-red-700">
                        {review.name}
                    </p>

                    <p className="text-[11px] text-zinc-500">
                        {review.role}
                    </p>
                </div>
            </figcaption>
        </figure>
    );
}

function MarqueeRow({
    items,
    reverse = false,
    duration = 45,
}) {
    return (
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <motion.div
                className="flex w-max"
                animate={{
                    x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
                }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {[...items, ...items].map((review, i) => (
                    <Card
                        key={`${review.name}-${i}`}
                        review={review}
                    />
                ))}
            </motion.div>
        </div>
    );
}

export default function Testimonials() {
    const row1 = reviews.slice(0, 4);
    const row2 = reviews.slice(4);

    return (
        <section
            id="reviews"
            className="relative overflow-hidden py-24 sm:py-25"
        >
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[60%] -translate-x-1/2 rounded-full bg-red-800/12 blur-[120px]" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <SectionHeading
                    eyebrow="Loved by operators"
                    title={
                        <>
                            Canteen owners who{" "}
                            <span className="text-red-700">
                                never look back
                            </span>
                        </>
                    }
                    description="From university campuses to corporate cafeterias — here's what daily operations look like with Canteen Mitra."
                />
            </div>

            <div className="mt-14 space-y-6">
                <Reveal delay={0.05}>
                    <MarqueeRow items={row1} />
                </Reveal>

                <Reveal delay={0.15}>
                    <MarqueeRow
                        items={row2}
                        reverse
                        duration={55}
                    />
                </Reveal>
            </div>

            <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
                <Reveal delay={0.1}>
                    <div className="glass grid gap-6 rounded-3xl p-8 text-center sm:grid-cols-3">
                        {[
                            {
                                value: "4.9/5",
                                label: "Average customer rating",
                            },
                            {
                                value: "62%",
                                label: "Faster queue clearance",
                            },
                            {
                                value: "98%",
                                label: "Monthly retention rate",
                            },
                        ].map((s) => (
                            <div key={s.label}>
                                <p className="font-display text-3xl font-extrabold text-gradient-red">
                                    {s.value}
                                </p>

                                <p className="mt-1 text-xs font-medium text-zinc-500">
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}