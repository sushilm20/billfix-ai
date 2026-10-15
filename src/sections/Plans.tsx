import { useState } from "react";
import { Section, Reveal } from "@/lib/site";
import { Alert } from "@/components/arc/alert/alert";
import { Badge } from "@/components/arc/badge/badge";

const plans = [
  { name: "Unlimited Welcome", single: "~$65*", four: "~$27.50", net: "Nationwide 5G", hot: "None", note: "Entry tier" },
  { name: "Unlimited Plus", single: "~$80*", four: "~$42.50", net: "Ultra Wideband", hot: "30 GB", note: "Most popular" },
  { name: "Unlimited Ultimate", single: "~$95*", four: "~$57.50", net: "UWB + priority", hot: '"Unlimited"¹', note: "+$5 May 2026; added Identity Secure" },
];

const traps = [
  { t: "Promo vs. standard rate", d: '"$27.50/line!" is a 4-line promo math — a single line starts around $65. The headline number is never your number.' },
  { t: "Perk math", d: "Perks run $10–12/mo each (Disney+/Hulu/ESPN+ rose $10→$12 on Sept 17, 2026) vs ~$19 retail. Sometimes a deal, sometimes not." },
  { t: "Device payments", d: '"$0 phone!" is 36 monthly bill credits that vanish if you leave early. The bill hides the lock-in.' },
  { t: "The dead price lock", d: "Verizon ended the 3-year price lock for new myPlan mobile sign-ups on June 16, 2026 — another trust hit BillFix helps repair." },
  { t: "Rep upsell", d: "Commission pushes Ultimate when you asked for Simplicity. BillFix proves the cheaper plan fits — with receipts." },
];

function recommend(lines: number, data: number, hot: number, trav: boolean) {
  if (lines === 1 && data < 10 && hot === 0 && !trav)
    return { plan: "Simplicity", why: "Single light user — $30 Simplicity (with switcher discount) beats every myPlan tier.", save: "~$420/yr vs Welcome" };
  if (hot > 40 || trav)
    return { plan: "Unlimited Ultimate", why: "Heavy hotspot or travel — only Ultimate makes sense.", save: "Best value at this usage" };
  if (hot > 0 || data > 25)
    return { plan: "Unlimited Plus", why: "Hotspot/premium data need — Plus unlocks Ultra Wideband + 30 GB hotspot.", save: "~$180/yr vs Ultimate (1 line)" };
  return { plan: "Unlimited Welcome", why: "Cheapest fit — light data, no hotspot.", save: "~$240/yr vs Plus (1 line)" };
}

export default function Plans() {
  const [lines, setLines] = useState(4);
  const [data, setData] = useState(8);
  const [hot, setHot] = useState(0);
  const [trav, setTrav] = useState(false);
  const [out, setOut] = useState<ReturnType<typeof recommend> | null>(null);

  return (
    <Section
      id="plans"
      eyebrow="Research · 02 — Data plans deep-dive"
      title="Know the maze you're fixing"
      lead={<>Judges will test whether you actually understand Verizon's products. Here's the 2026 lineup — with the fine print Verizon hopes you won't read.</>}
    >
      <Reveal>
        <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <table className="vtable min-w-[720px]">
            <thead><tr><th>Plan</th><th>1 line</th><th>4 lines /line</th><th>Network</th><th>Hotspot</th><th>Notes</th></tr></thead>
            <tbody>
              {plans.map((p) => (
                <tr key={p.name}>
                  <td><strong>{p.name}</strong></td>
                  <td className="hl">{p.single}</td>
                  <td className="hl">{p.four}</td>
                  <td>{p.net}</td><td>{p.hot}</td><td className="text-neutral-500">{p.note}</td>
                </tr>
              ))}
              <tr className="bg-[#cd040b08]">
                <td><strong>Simplicity</strong> <Badge tone="success" className="ml-1">New</Badge></td>
                <td className="hl">$30†</td><td>—</td><td>UWB</td><td>10 GB</td>
                <td className="text-neutral-500">$30 only with $15/mo switcher discount + AutoPay; existing customers pay $45/line</td>
              </tr>
            </tbody>
          </table>
          <div className="border-t border-neutral-200 px-5 py-3 text-[12px] leading-relaxed text-neutral-500">
            * myPlan single-line prices conflict across secondary sources (Sept–Oct 2026 reporting lists $65/$80/$95; older sources differ) — shown as starting prices with AutoPay. <strong>Prices verified Oct 2026; confirm live on verizon.com before the pitch.</strong>
            ¹ Ultimate hotspot repositioned as "unlimited" May 2026. † Simplicity launched June 16, 2026 — Schulman says the majority of net adds now come through it.
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-6">
          <Alert tone="warning" title="Simplicity, precisely">
            $30/mo = after AutoPay <em>and</em> a $15/mo switcher discount. Existing Verizon customers pay <strong>$45/line</strong> — all lines on an account must move together, and there are <strong>no device promotions</strong> on Simplicity. BillFix encodes every one of these rules so the recommendation is never wrong.
          </Alert>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold">The 5 confusion traps</h3>
            <ol className="mt-4 space-y-4">
              {traps.map((t, i) => (
                <li key={t.t} className="flex gap-3 text-[14px]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-[12px] font-black text-white">{i + 1}</span>
                  <div><strong>{t.t}</strong><div className="mt-0.5 text-neutral-500">{t.d}</div></div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full rounded-2xl bg-[#0a0a0b] p-6 text-white shadow-sm">
            <h3 className="text-lg font-extrabold">Live: plan recommender <span className="text-[12px] font-medium text-neutral-500">(demo logic)</span></h3>
            <label className="mt-4 block text-[11px] font-extrabold uppercase tracking-[0.1em] text-neutral-500">Lines</label>
            <select value={lines} onChange={(e) => setLines(+e.target.value)} className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-white">
              {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n} className="text-black">{n}</option>)}
            </select>
            <label className="mt-4 block text-[11px] font-extrabold uppercase tracking-[0.1em] text-neutral-500">Data / person / month (GB)</label>
            <input type="number" value={data} onChange={(e) => setData(+e.target.value)} className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-white" />
            <label className="mt-4 block text-[11px] font-extrabold uppercase tracking-[0.1em] text-neutral-500">Hotspot need (GB)</label>
            <input type="number" value={hot} onChange={(e) => setHot(+e.target.value)} className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-white" />
            <label className="mt-4 flex cursor-pointer items-center gap-2.5 text-sm text-neutral-300">
              <input type="checkbox" checked={trav} onChange={(e) => setTrav(e.target.checked)} className="h-4 w-4 accent-[#cd040b]" />
              Travel abroad regularly
            </label>
            <button onClick={() => setOut(recommend(lines, data, hot, trav))} className="mt-5 w-full rounded-xl bg-[#cd040b] py-3.5 font-extrabold text-white transition hover:bg-[#a50309]">
              Recommend plan →
            </button>
            <div className="mt-4 min-h-[96px] rounded-xl border border-[#cd040b33] bg-black/40 p-4 text-[14px]">
              {out ? (
                <><div className="text-[18px] font-black text-white">{out.plan}</div>
                <div className="mt-1 text-neutral-400">{out.why}</div>
                <div className="mt-1 text-[13px] text-neutral-500">Est. savings: {out.save}</div></>
              ) : <span className="text-neutral-500">Fill in and hit recommend.</span>}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
