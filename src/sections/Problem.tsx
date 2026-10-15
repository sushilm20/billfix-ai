import { Section, Reveal, Bar } from "@/lib/site";
import { MetricCard } from "@/components/arc/metric-card/metric-card";
import { Alert } from "@/components/arc/alert/alert";

const drivers = [
  { t: "Price increases without corresponding value", d: "Four plan price hikes in 2025 alone; activation fee $35→$40; loyalty discounts killed." },
  { t: "Friction in onboarding, billing, customer service", d: "The CEO's own words — 'whether it's onboarding, the billing…'" },
  { t: "Price perception", d: "Analyst Roger Entner: value-for-money perception 'has run negative for the last two years.'" },
  { t: "Competitive intensity", d: "Rivals undercut on price while Verizon's bills stay unreadable." },
];

const earnings = [
  { q: "Q4 2025", v: "+616K net adds", s: "Best quarter since 2019 — the turnaround started here" },
  { q: "Q1 2026", v: "+55K net adds", s: "First positive Q1 since 2013 · churn 0.97% (+2 bps YoY)" },
  { q: "Q2 2026", v: "+184K net adds", s: "Churn down 5 bps YoY · retention cost down double digits" },
  { q: "2026 guidance", v: "750K–1M net adds", s: "2–3× 2025 · Q3 reports Oct 26, 2026" },
];

export default function Problem() {
  return (
    <Section
      id="problem"
      eyebrow="Research · 01 — The problem"
      title={<>Verizon's churn crisis <span className="text-[#cd040b]">is</span> a billing crisis</>}
      lead={<>CEO Dan Schulman indicted his own bills in HBR (Sept 2026): <em>"Our churn rate was going up because people were unhappy with us. We were raising prices. Our plans were confusing."</em> Then he named the four reasons people leave on the Jan 30, 2026 earnings call — three of the four touch the bill.</>}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal><MetricCard label="Customers lost in 3 years" value={2.25} suffix="M" context="Churn up 25 bps — Schulman's own math: each basis point ≈ 90,000 net adds" /></Reveal>
        <Reveal delay={80}><MetricCard label="2026 opex savings target ($B)" value={5} suffix="B" context="Schulman-stated target · ~16,600 layoffs in 9 months (Nov 2025–Jul 2026)" /></Reveal>
        <Reveal delay={160}><MetricCard label="Price hikes in 2025" value={4} context="Plan prices, activation fees, killed loyalty discounts, +$8 Mobile Protect" /></Reveal>
        <Reveal delay={240}><MetricCard label="Postpaid net adds, Q2 2026" value={184} suffix="K" context="Turnaround in progress — churn down 5 bps YoY. BillFix protects it." /></Reveal>
      </div>

      <Reveal delay={100}>
        <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-lg font-extrabold">The four churn drivers — Schulman, Q4 2025 earnings call</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {drivers.map((d, i) => (
              <div key={d.t} className="rounded-xl bg-neutral-50 p-4">
                <div className="flex gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#cd040b] text-[12px] font-black text-white">{i + 1}</span>
                  <div>
                    <div className="font-bold text-[15px]">"{d.t}"</div>
                    <div className="mt-1 text-[13px] text-neutral-500">{d.d}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-neutral-500">
            His pledge on the same call: <em>"We will not raise prices without adding corresponding value"</em> and{" "}
            <em>"Our financial success will rely on subscriber growth driven by convergence, a value-based pricing strategy, superior value-added services and a fully revamped end to end customer experience."</em>
          </p>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-lg font-extrabold">Churn math that fits on one slide</h3>
          <div className="mt-4">
            <Bar label={<>Every <b>0.01 pts</b> of churn ≈ customers lost</> } value="90,000" width={18} tone="dark" />
            <Bar label={<>Verizon's 3-yr churn increase</>} value="0.25 pts → 2.25M lost" width={100} />
            <Bar label={<>If BillFix prevents just <b>0.05 pts</b> of billing-driven churn</>} value="~450K retained" width={45} tone="green" />
          </div>
          <p className="mt-4 text-[13px] text-neutral-500">
            At ~$70 ARPU/mo, 450K retained customers ≈ <strong className="text-[#cd040b]">$380M/year</strong> in protected
            revenue. You don't need judges to believe the full number — even 10% of it is a $38M story.
          </p>
        </div>
      </Reveal>

      <h3 className="mt-10 text-lg font-extrabold">The turnaround timeline — momentum BillFix protects</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {earnings.map((e, i) => (
          <Reveal key={e.q} delay={i * 80}>
            <div className="h-full rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#cd040b]">{e.q}</div>
              <div className="mt-1 text-xl font-black">{e.v}</div>
              <div className="mt-1 text-[13px] text-neutral-500">{e.s}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div className="mt-6">
          <Alert tone="warning" title="Framing rule">
            Never say "Verizon scams customers." Always say <em>"we're helping Verizon deliver on the CEO's promise to reduce friction and rebuild trust."</em> You're on Verizon's side — and the CEO already admitted the problem.
          </Alert>
        </div>
      </Reveal>
    </Section>
  );
}
