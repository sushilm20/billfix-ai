import { useState } from "react";
import { Section, Reveal } from "@/lib/site";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/arc/tabs/tabs";
import { Alert } from "@/components/arc/alert/alert";

const pillars = [
  { n: "1", t: "AI-Driven Automation & Efficiency", d: "BillFix automates bill analysis, plan math, and dispute drafting — AI doing the work of $25 support calls.", fit: true },
  { n: "2", t: "Cost & Sustainability Transformation", d: "Deflected contacts + retained subscribers = measurable opex and revenue impact. Fits the $5B savings story.", fit: true },
  { n: "3", t: "Next-Gen Products & Services to Enhance Customer Experience", d: "Our primary pillar: a plain-English bill is a new customer experience.", fit: true },
];

const rubric = [
  { c: "Impact", a: "2.25M churned over billing friction; $20–30/contact (industry benchmark); $100M hidden-fee settlement. One app attacks all three.", e: "CEO quotes, churn math, settlement record" },
  { c: "Feasibility", a: "App-only. Public plan data. No Verizon internal API needed. 3 mock bills + recommender = working demo.", e: "Plan tables, live demo above" },
  { c: "Content", a: "Plan-by-plan pricing with fine print, earnings timeline, support-cost benchmarks — all attributed.", e: "This dossier" },
  { c: "Creativity", a: "“The bill itself is the product” — nobody pitches the bill.", e: "Competitive table" },
  { c: "Presentation", a: "30-second demo: scan → 3 flags → save $288/yr. Instantly legible.", e: "Interactive demo §06" },
];

export default function Judges() {
  const [tab, setTab] = useState("challenge");
  return (
    <Section
      id="judges"
      eyebrow="Competition · 09 — The rules & the rubric"
      title="How we win on every criterion"
      lead="Sourced from the official NJIT listing (entrepreneurship.njit.edu/events) and prior-year structure — with dates labeled where they come from the team calendar."
    >
      <Reveal>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-lg font-extrabold">The official challenge</h3>
          <blockquote className="quote-card mt-3 pl-5 text-[16px] italic leading-relaxed text-neutral-700">
            "How can you leverage Verizon's next-gen network to create a smarter, more efficient world and drive real growth?"
          </blockquote>
          <p className="mt-3 text-[14px] text-neutral-500">
            Entries must deliver <strong className="text-black">"clear, measurable business value"</strong> and align
            with one of three pillars. Verizon engineering mentors are provided; judging weighs use of Verizon network
            capabilities, scalability, and tangible business outcomes.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.n} className="rounded-xl border-2 border-[#cd040b33] bg-[#cd040b08] p-4">
                <div className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#cd040b]">Pillar {p.n} ✓</div>
                <div className="mt-1 font-extrabold text-[15px]">{p.t}</div>
                <div className="mt-1 text-[13px] text-neutral-500">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-lg font-extrabold">Structure &amp; prizes</h3>
          <div className="mt-3 grid gap-x-8 gap-y-2 text-[14px] text-neutral-600 md:grid-cols-2">
            <div>· <strong>Applications deadline:</strong> Oct 24 at midnight (official)</div>
            <div>· <strong>Teams:</strong> 3–6 (prior-year pattern)</div>
            <div>· <strong>Mentor drop-in:</strong> Nov 3</div>
            <div>· <strong>Round 1 video:</strong> "mid-November" official — <em>team calendar says Nov 12, confirm against official listing</em></div>
            <div>· <strong>Round 2:</strong> poster showcase (~15 teams)</div>
            <div>· <strong>Finals:</strong> ~7 teams · <strong>$500 stipend</strong> for late-stage teams</div>
            <div>· <strong>Prizes:</strong> top 3 teams × <strong>$3,000</strong></div>
            <div>· <strong>Winner's Circle:</strong> Verizon HQ, Basking Ridge NJ</div>
          </div>
          <p className="mt-3 text-[13px] text-neutral-400">Judging criteria cited in prior-year materials: impact, feasibility, creativity, presentation.</p>
        </div>
      </Reveal>

      <h3 className="mt-10 text-lg font-extrabold">Rubric mapping</h3>
      <Reveal>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <table className="vtable min-w-[640px]">
            <thead><tr><th>Criterion</th><th>Our answer</th><th>Evidence</th></tr></thead>
            <tbody>
              {rubric.map((r) => (
                <tr key={r.c}><td><strong>{r.c}</strong></td><td>{r.a}</td><td className="text-neutral-500">{r.e}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-8">
          <Tabs value={tab} onValueChange={setTab}>
            <TabsList>
              <TabsTrigger value="challenge">Challenge statement</TabsTrigger>
              <TabsTrigger value="value">Value proposition</TabsTrigger>
              <TabsTrigger value="beats">2-min video beats</TabsTrigger>
            </TabsList>
            <TabsContent value="challenge">
              <div className="mt-4"><Alert tone="info" title="Say it verbatim">
                "Verizon's CEO named billing friction a top churn driver — 'Our plans were confusing.' Bills are unreadable, upsells are common, support costs $20–30 per contact by industry benchmarks, and a $100M settlement proved the fees were real."
              </Alert></div>
            </TabsContent>
            <TabsContent value="value">
              <div className="mt-4"><Alert tone="success" title="Say it verbatim">
                "BillFix AI translates any Verizon bill to plain English, finds waste, and recommends the cheapest fitting plan — cutting support costs and rebuilding the trust Verizon needs to stop churn. It's the customer-facing proof of Verizon's AI-native story."
              </Alert></div>
            </TabsContent>
            <TabsContent value="beats">
              <div className="mt-4"><Alert tone="warning" title="Video structure">
                0:00–0:20 problem (HBR quote + churn stat) → 0:20–1:20 live demo (scan → flags → savings) → 1:20–1:50 business value (ROI sliders) → 1:50–2:00 ask ("pilot with 10K NJIT families").
              </Alert></div>
            </TabsContent>
          </Tabs>
        </div>
      </Reveal>
    </Section>
  );
}
