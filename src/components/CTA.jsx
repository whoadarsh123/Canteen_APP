import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Garnish from "./Garnish";
import { Blob } from "./Blob";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_-40px_rgba(234,88,12,0.6)]">
        <div
          className="absolute inset-0 bg-gradient-to-r from-amber-600 via-red-600 to-red-800"
        />
        <Blob className="-left-16 -top-24 opacity-30" size={280} delay={0.2} />
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-25" />

        <div className="relative grid items-center gap-8 p-10 sm:p-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl"
            >
              Join Our Canteen
              <br />
              Get Delicious Updates
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.75 }}
              className="mt-4 max-w-md text-[15px] leading-relaxed text-orange-50/90"
            >
              Drop your email and our team will set up a personalised demo for
              your kitchen — free onboarding and staff training included.
            </motion.p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/20 px-6 py-4 text-sm font-bold text-white backdrop-blur"
              >
                <CheckCircle2 className="h-6 w-6" />
                Thanks! We'll reach out within one business day.
              </motion.div>
            ) : (
              <motion.form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSent(true);
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.22, duration: 0.75 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="w-full rounded-2xl border border-white/40 bg-red-700 px-6 py-4 text-sm font-medium text-white placeholder:text-orange-50/70 outline-none backdrop-blur transition-colors focus:border-white focus:bg-white/30 sm:max-w-xs"
                />
                <button
                  type="submit"
                  className="btn-shine group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-extrabold text-brand-700 transition-transform hover:scale-105 active:scale-95"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.form>
            )}

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-orange-50/85">
              <span>✓ No credit card required</span>
              <span>✓ Setup in one afternoon</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>

          {/* Garnish cluster */}
          <div className="relative hidden h-56 lg:block">
            <Garnish
              src="/images/garnish-lettuce.png"
              size={190}
              className="left-4 top-0"
              rotate={20}
              delay={0.4}
              from={{ x: 60, y: -40 }}
            />
            <Garnish
              src="/images/garnish-tomato.png"
              size={130}
              className="bottom-0 right-6"
              rotate={-25}
              delay={0.6}
              from={{ x: 50, y: 50 }}
            />
            <Garnish
              src="/images/garnish-chai.png"
              size={130}
              className="bottom-2 left-2"
              rotate={-12}
              delay={0.75}
              from={{ x: -40, y: 40 }}
            />
            <Garnish
              src="/images/garnish-cutlery.png"
              size={115}
              className="left-24 top-2"
              rotate={35}
              delay={0.9}
              from={{ x: 40, y: -40 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
