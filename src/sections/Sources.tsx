import { Section, Reveal } from "@/lib/site";

const groups: { t: string; items: string[] }[] = [
  {
    t: "Plans & pricing",
    items: [
      "Simplicity $30/mo (AutoPay + $15 switcher discount; $45 existing; all-lines-together; no device promos) — verizon.com/plans/unlimited",
      "Simplicity launched June 16, 2026; majority of net adds now via Simplicity — gojimobile, droid-life, marketbeat",
      "myPlan tiers verified; single-line prices conflict across sources — droid-life (Sept 2026): ~$65/$80/$95; webpronews (May 2026): $55/$70/$90→$95",
      "Disney+/Hulu/ESPN+ perk $10→$12 (Sept 17, 2026); Ultimate +$5 (May 7, 2026) — androidauthority, thestreet, techtimes",
      "3-year price lock ended for new myPlan mobile sign-ups June 16, 2026 — droid-life, thestreet, phonearena",
    ],
  },
  {
    t: "Churn & earnings",
    items: [
      "+25 bps / 2.25M lost; four churn drivers — Schulman, Q4 2025 earnings call, Jan 30, 2026 (thestreet)",
      "Each basis point ≈ 90,000 net adds — PhoneArena",
      "Q4 2025: +616K net adds (best since 2019) — infomarine · Q1 2026: +55K, churn 0.97% — fierce-network · Q2 2026: +184K, churn −5 bps YoY — fierce-network, marketbeat",
      "2026 guidance 750K–1M net adds; Q3 2026 reports Oct 26, 2026 (verizon.com) — do not cite Q3 numbers",
      "$5B opex target; ~16,600 layoffs Nov 2025–Jul 2026 — lightreading, techtimes, fierce-network",
    ],
  },
  {
    t: "Billing pain",
    items: [
      "$100M admin-fee class action (Jan 2016–Nov 2023, NJ Superior Court; $15 + $1/mo up to $100) — legalclarity.org, tomsguide.com",
      "Unauthorized insurance anecdote (Dec 2025) — PhoneArena, May 2026 — illustrative, not a statistic",
      "FCC $47M location-data fine upheld (2nd Circuit) — ainvest — trust-deficit color",
    ],
  },
  {
    t: "Support economics",
    items: [
      "$20–30/contact industry benchmark (Crescendo.ai via Ringly 2026) — ringly.io",
      "Gartner $13.50 assisted vs $1.84 self-serve — via Ringly/Count.co",
      "AI voice $0.30–0.50/call; 25–45% deflection; Freshworks 68% ($4.60→$1.45); Gartner $80B by 2026",
      "Verizon AI results: 1,280-bp CSAT, 85% autonomous resolution, $200M+ energy savings — Schulman, Q1 2026 (fierce-network)",
    ],
  },
  {
    t: "Competition",
    items: [
      "Official listing: Oct 24 deadline, challenge question, three pillars, “clear, measurable business value,” mentors — entrepreneurship.njit.edu/events",
      "Prior-year structure: teams 3–6, 2-min video, ~15 → poster, ~7 → finals, $500 stipend, 3 × $3,000, Basking Ridge HQ — NJIT News, UTD",
    ],
  },
  {
    t: "AI strategy & 2026 developments",
    items: [
      "AI Connect launched Jan 2025 (enterprise; Google Cloud, Meta; ~$1B pipeline; Corning 80M-mile fiber Sept 2026) — samenacouncil.org, telecomtalk.info",
      "“AI-native company” + 4-layer stack (Google, Anthropic; done Nov 2026); “Every Customer Has a Name” — fierce-network, mobileworldlive, rcrwireless",
      "HBR interview Sept 2026 (“Our plans were confusing”) — hbr.org/2026/09; Entner value-perception quote — Light Reading",
      "Jan 14, 2026 outage ($20 credit, FCC probe) — androidauthority; Frontier closed Jan 20, 2026 ($20B) — roi-nj.com",
    ],
  },
];

export default function Sources() {
  return (
    <Section id="sources" eyebrow="Appendix · 14 — Sources" title="Receipts" lead="Every claim on this page traces to one of these. Tiers: verified on-record · credible press · labeled anecdote.">
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal key={g.t} delay={(i % 2) * 60}>
            <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="font-extrabold">{g.t}</h3>
              <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-neutral-500">
                {g.items.map((s) => <li key={s} className="flex gap-2"><span className="text-[#cd040b]">·</span><span>{s}</span></li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center text-[13px] text-neutral-400">
        BillFix AI · Verizon Smart Campus Innovation Challenge 2026–27 · Research dossier v3 — all claims verified Oct 15, 2026 🚀
      </p>
    </Section>
  );
}
