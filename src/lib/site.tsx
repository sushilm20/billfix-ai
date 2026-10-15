import { useEffect, useRef, type ReactNode } from "react";

/** Fade-and-rise on scroll into view. Respects prefers-reduced-motion via CSS. */
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

/** Standard research section shell. */
export function Section({ id, eyebrow, title, lead, children, dark = false }: {
  id: string; eyebrow: string; title: ReactNode; lead?: ReactNode; children: ReactNode; dark?: boolean;
}) {
  return (
    <section id={id} className={`section-pad scroll-mt-20 ${dark ? "bg-[#0a0a0b] text-white" : ""}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="eyebrow">{eyebrow}</div>
          <h2 className={`h2 ${dark ? "text-white" : ""}`}>{title}</h2>
          {lead && <p className={`lead mt-3 ${dark ? "!text-neutral-400" : ""}`}>{lead}</p>}
        </Reveal>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

/** Animated horizontal bar that fills when scrolled into view. */
export function Bar({ label, value, width, tone = "red" }: { label: ReactNode; value: ReactNode; width: number; tone?: "red" | "dark" | "green" }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          const fill = el.querySelector<HTMLElement>(".fill");
          if (fill) fill.style.width = `${width}%`;
          io.disconnect();
        }
      }),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [width]);
  return (
    <div className="barrow" ref={ref}>
      <div className="t"><span>{label}</span><b>{value}</b></div>
      <div className="track"><div className={`fill ${tone === "dark" ? "dark" : tone === "green" ? "green" : ""}`} /></div>
    </div>
  );
}

/** Small red check used in lists. */
export function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 shrink-0" aria-hidden="true">
      <path d="M2.5 8.5l3.5 3.5 7-8" stroke="#cd040b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
