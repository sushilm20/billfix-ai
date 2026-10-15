import { Section, Reveal } from "@/lib/site";

const milestones = [
  { d: "Now → Oct 24", t: "Lock team & register", x: "3–6 members; assign the 4 roles from the pitch. Applications close Oct 24 at midnight (official)." },
  { d: "Oct 24 → Nov 3", t: "Build the demo core", x: "Recommender logic + 3 mock bills (student / family / traveler). Draft challenge statement + value prop." },
  { d: "Nov 3 · Mentor drop-in", t: "Get a Verizon quote", x: "Ask: “does this fit the CX pillar?” A mentor soundbite in the video is gold." },
  { d: "Mid-Nov · Video due", t: "Submit the 2-min pitch", x: "Team calendar says Nov 12 — confirm against the official listing (“mid-November”). Problem → demo → ROI → pilot ask." },
  { d: "Feb → Mar", t: "Poster → finals", x: "$500 stipend for late-stage teams. Winner's Circle at Verizon HQ, Basking Ridge NJ." },
];

const developments = [
  { d: "Jan 14, 2026", t: "~10-hour nationwide outage", x: "SOS mode across the country; $20 account credit offered; FCC probe opened. Clipped Q1 revenue ~80 bps — reliability is part of the trust story." },
  { d: "Jan 20, 2026", t: "Frontier acquisition closed — $20B", x: "~30M fiber passings across 31 states + DC; ≥$500M annual synergies by year 3. Verizon is expanding — trust must scale with it." },
  { d: "2025–2026", t: "The price-hike record", x: "2025: four rounds (plans, activation $35→$40, killed loyalty discounts, tablet +$5–10, Mobile Protect +$8). 2026: Netflix/Max perk $10→$13, Ultimate +$5, Disney perks +$2–3." },
  { d: "June 2026", t: "Verizon One — $70/mo mobile+home", x: "Convergence is the growth strategy. A trusted billing experience sells the bundle." },
];

export default function Roadmap() {
  return (
    <Section
      id="roadmap"
      eyebrow="Execution · 11 — Roadmap"
      title="Road to the finals"
    >
      <div className="relative ml-2 border-l-2 border-[#cd040b22] pl-8">
        {milestones.map((m, i) => (
          <Reveal key={m.d} delay={i * 60}>
            <div className="relative pb-8 last:pb-0">
              <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#cd040b] ring-4 ring-[#cd040b22]" />
              <div className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#cd040b]">{m.d}</div>
              <div className="mt-1 text-[17px] font-extrabold">{m.t}</div>
              <div className="mt-1 max-w-2xl text-[14px] text-neutral-500">{m.x}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <h3 className="mt-12 text-lg font-extrabold">2026 developments — the backdrop</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {developments.map((d, i) => (
          <Reveal key={d.t} delay={(i % 2) * 80}>
            <div className="h-full rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-neutral-400">{d.d}</div>
              <div className="mt-1 font-extrabold">{d.t}</div>
              <div className="mt-1 text-[13.5px] text-neutral-500">{d.x}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
