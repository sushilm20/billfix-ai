import { Section, Reveal } from "@/lib/site";
import { Alert } from "@/components/arc/alert/alert";

const rows = [
  { f: "Knows Verizon plans", b: "Deep — all tiers, perks, promos, Simplicity rules", v: "Knows them but won't tell you to downgrade", r: "Generic" },
  { f: "Plain-English bills", b: "Core feature", v: "Itemized jargon", r: "Partial" },
  { f: "Dispute drafting", b: "One-tap", v: "Call us", r: "None" },
  { f: "Incentive", b: "Aligned with you", v: "Conflicted (commission)", r: "Aligned, but shallow" },
  { f: "Verizon AI story", b: "5G + edge + AI-native", v: "Yes", r: "None" },
];

const personas = [
  { av: "🎓", n: "Maya, 19 — NJIT freshman", d: "On her parent's family plan, first bill shock. Needs: “am I overpaying?”", q: "“My dad pays $210 and nobody knows why.”" },
  { av: "👨‍👩‍👧", n: "Deshawn, 42 — family of 5", d: "4 lines, 2 teens, Disney perk confusion. Needs: the cheapest combo.", q: "“The rep said Ultimate. My kids use WiFi.”" },
  { av: "✈️", n: "Priya, 34 — consultant", d: "Travels monthly, got a $900 roaming bill once. Needs: no surprises.", q: "“I just want to know before I fly.”" },
];

export default function Market() {
  return (
    <Section
      id="market"
      eyebrow="Research · 04 — Landscape"
      title="Who else plays here (and why we win)"
    >
      <Reveal>
        <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <table className="vtable min-w-[640px]">
            <thead><tr><th></th><th className="!text-[#cd040b]">BillFix AI</th><th>Carrier apps (myVerizon)</th><th>Rocket Money / auditors</th></tr></thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.f}>
                  <td><strong>{r.f}</strong></td>
                  <td className="hl">✓ {r.b}</td>
                  <td className={r.v.includes("Conflicted") ? "text-[#cd040b] font-bold" : "text-neutral-500"}>{r.v.startsWith("✓") || r.v.startsWith("✗") ? r.v : (r.v === "Call us" ? "✗ " : r.v === "Yes" ? "✓ " : "") + r.v}</td>
                  <td className="text-neutral-500">{r.r === "Generic" || r.r === "None" ? `✗ ${r.r}` : r.r === "Partial" ? `~ ${r.r}` : r.r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <div className="mt-6">
          <Alert tone="success" title="The moat">
            myVerizon will never tell you to buy the cheaper plan. Third-party apps don't understand Verizon's plan maze — Simplicity's switcher rules, the dead price lock, $10–12 perk math. BillFix is the only one with <em>both</em> deep plan intelligence and your interests.
          </Alert>
        </div>
      </Reveal>
      <h3 className="mt-10 text-lg font-extrabold">Personas we design for</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {personas.map((p, i) => (
          <Reveal key={p.n} delay={i * 80}>
            <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-2xl">{p.av}</div>
              <div className="mt-3 font-extrabold">{p.n}</div>
              <div className="mt-1 text-[13px] text-neutral-500">{p.d}</div>
              <blockquote className="mt-3 border-l-[3px] border-[#cd040b] pl-3 text-[14px] italic text-neutral-500">{p.q}</blockquote>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
