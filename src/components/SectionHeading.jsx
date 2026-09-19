import Reveal from "./Reveal";

export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = "center",
}) {
    return (
        <div
            className={
                align === "center"
                    ? "mx-auto max-w-2xl text-center"
                    : "max-w-2xl text-left"
            }
        >
            <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
                    {eyebrow}
                </span>
            </Reveal>

            <Reveal>
                <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl">
                    {title}
                </h2>
            </Reveal>

            {description && (
                <Reveal delay={0.16}>
                    <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
                        {description}
                    </p>
                </Reveal>
            )}
        </div>
    );
}
