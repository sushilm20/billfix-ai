import { useState } from "react";
import { Section, Reveal, Check } from "@/lib/site";
import { CopyButton } from "@/components/arc/copy-button/copy-button";
import { Alert } from "@/components/arc/alert/alert";
import { PITCH_30 } from "@/components/Hero";

const roles = [
  { k: "Person 1 · Engine", t: "Bill intelligence", d: "OCR + plan-comparison rules engine, junk-charge detector" },
  { k: "Person 2 · App", t: "Demo build", d: "Scanner UI, recommender flow, dispute drafter" },
  { k: "Person 3 · Story", t: "Research + pitch", d: "Churn data, ROI math, 2-min video script" },
  { k: "Person 4–6 · Support", t: "Design / data / test", d: "Mock bills, user interviews, poster" },
];

export default function Pitch() {
  const [copied, setCopied] = useState(false);
  return (
    <Section id="pitch" eyebrow="For the team · read this first" title="The 30-second pitch">
      <Reveal>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
          <p className="text-[17px] leading-relaxed text-neutral-700">
            "Verizon lost <strong className="text-black">2.25 million customers</strong> in three years. The CEO
            himself says billing friction is a top reason people leave — <em>"Our plans were confusing."</em> Bills
            are unreadable, reps upsell you to the $95 plan when you asked for the $30 one, and every support call
            costs <strong className="text-black">$20–30</strong> by industry benchmarks. <strong className="text-black">BillFix AI</strong> scans
            your bill, translates it to plain English, finds junk charges, and tells you the cheapest plan that
            actually fits your usage — then drafts the dispute for you. It runs on-device with 5G real-time sync,
            cuts support costs, and rebuilds the trust Verizon needs to stop churn."
          </p>
          <div className="mt-5">
            <CopyButton
              value={PITCH_30}
              label={copied ? "Copied to clipboard" : "Copy pitch"}
              onCopied={() => { setCopied(true); setTimeout(() => setCopied(false), 1800); }}
            />
          </div>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <div className="mt-6">
          <Alert tone="info" title="Why this wins">
            It solves a problem Verizon's CEO publicly admitted, it's app-only (zero funding needed), and the business
            value is one sentence: <em>fewer calls + less churn.</em>
          </Alert>
        </div>
      </Reveal>
      <h3 className="mt-10 text-lg font-extrabold">Who does what</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {roles.map((r, i) => (
          <Reveal key={r.k} delay={i * 80}>
            <div className="h-full rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#cd040b66] hover:shadow-md">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#cd040b]">{r.k}</div>
              <div className="mt-2 font-extrabold">{r.t}</div>
              <div className="mt-1 text-sm text-neutral-500">{r.d}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <ul className="mt-8 space-y-2.5 text-[15px] text-neutral-600">
          <li className="flex gap-2.5"><Check /> Prototype needs no Verizon API — mock bills + public plan data.</li>
          <li className="flex gap-2.5"><Check /> Demo in 30 seconds: scan → 3 flags → save $288/yr.</li>
          <li className="flex gap-2.5"><Check /> Aligned with two official pillars: AI-Driven Automation &amp; Next-Gen Customer Experience.</li>
        </ul>
      </Reveal>
    </Section>
  );
}
