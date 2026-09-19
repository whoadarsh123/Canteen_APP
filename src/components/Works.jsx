import { motion } from "framer-motion";
import { Cloche3D, OrderToken } from "./CanteenProps";
import BillGenerated from "../assets/BillGenerated.png";
import FoodReady from "../assets/FoodReady.png";
import KitchenOrder from "../assets/KitchenOrder.png";
import PlacezOrder from "../assets/Placeorder.png";

const steps = [
  {
    n: "01",
    title: "Place Order",
    desc: "Customers browse the menu and place their order online.",
    prop: PlacezOrder,
  },
  {
    n: "02",
    title: "Token Generated",
    desc: "The system automatically generates a digital order token.",
    prop: BillGenerated,
  },
  {
    n: "03",
    title: "Kitchen Received Order",
    desc: "The kitchen instantly receives order details for preparation.",
    prop: KitchenOrder,
  },
  {
    n: "04",
    title: "Food Ready",
    desc: "Guests get a live token number and a ready alert. Collect, pay by UPI, and the invoice is filed GST-ready automatically.",
    prop: FoodReady,
  },
];


export default function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden py-20 sm:py-24">
      <div className="bg-dots pointer-events-none absolute left-1/2 top-8 h-32 w-64 -translate-x-1/2 opacity-60 [mask-image:radial-gradient(circle,black,transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl"
          >
            How Your Canteen <span className="text-red-700">Runs Itself</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.12, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-500"
          >
            Real canteen objects, reimagined digitally. Hover each one to see how
            your service line works.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ delay: 0.12 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="card group relative overflow-hidden rounded-3xl pb-5 text-center"
            >
              <span
                className="absolute left-5 top-5 z-20 flex h-9 w-9 items-center bg-red-700 justify-center rounded-full font-display text-xs font-extrabold text-white shadow-md"
              >
                {step.n}
              </span>
              <img src={step.prop} alt="#" />
              <div className="relative px-7">
                <h3 className="font-display text-lg font-extrabold text-zinc-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{step.desc}</p>
                <span className="mx-auto mt-6 block h-1 w-10 rounded-full bg-gradient-to-r from-red-400 to-red-700 transition-all duration-300 group-hover:w-20" />
                <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-red-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Hover to interact ↑
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
