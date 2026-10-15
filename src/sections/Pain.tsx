import { Section, Reveal } from "@/lib/site";
import { Accordion } from "@/components/arc/accordion/accordion";

const items = [
  {
    title: "Phantom charges — the $100M lesson",
    content: (
      <div className="space-y-3 text-[14.5px] text-neutral-600">
        <p>
          Verizon paid <strong className="text-black">$100 million</strong> to settle a class action (NJ Superior
          Court, class period <strong className="text-black">Jan 1, 2016 – Nov 8, 2023</strong>) over an allegedly
          hidden "Administrative Charge" / "Telco Recovery Charge." Payout formula:{" "}
          <strong className="text-black">$15 base + $1/month, up to $100 per account</strong>. Claims closed April 15,
          2024; payouts began early/mid-2025. Verizon denied wrongdoing — but the check cleared.
        </p>
        <p>
          The pattern continues anecdotally: in May 2026, a customer found device insurance added{" "}
          <em>without consent starting Dec 1, 2025</em> on an iPhone bought from Apple; the rep removed it "as an
          exception" — like a favor. <span className="text-neutral-400">(Illustrative anecdote, PhoneArena — not a statistic.)</span>
        </p>
        <p className="font-bold text-black">→ BillFix: the scanner flags any charge you never opted into, with the settlement history attached.</p>
      </div>
    ),
  },
  {
    title: "Commission upsells",
    content: (
      <div className="space-y-3 text-[14.5px] text-neutral-600">
        <p>
          Customer asks for the $30 Simplicity plan; the rep activates $95 Unlimited Ultimate for the commission.
          Six calls later, it's still not fixed. This is the exact friction Schulman named — and the exact
          moment trust dies.
        </p>
        <p className="font-bold text-black">→ BillFix: the optimizer proves the cheaper plan fits your actual usage — with receipts the rep can't argue with.</p>
      </div>
    ),
  },
  {
    title: "Unreadable bills",
    content: (
      <div className="space-y-3 text-[14.5px] text-neutral-600">
        <p>
          Base price vs. taxes/fees vs. device installments vs. perks ($10–12/mo each) vs. expiring discounts vs. a
          price lock that ended June 16, 2026 — six moving parts, zero explanation. Schulman said it himself:{" "}
          <em>"Our plans were confusing."</em>
        </p>
        <p className="font-bold text-black">→ BillFix: every line translated to plain English. "Verizon Cloud $12 — you haven't opened it in 6 months."</p>
      </div>
    ),
  },
  {
    title: "Support hell",
    content: (
      <div className="space-y-3 text-[14.5px] text-neutral-600">
        <p>
          Routed offshore, promised callbacks that never come, the same story retold to four agents. Every one of
          those contacts costs $20–30 by industry benchmarks — Verizon pays for the privilege of frustrating you.
        </p>
        <p className="font-bold text-black">→ BillFix: self-serve answers plus one-tap dispute drafts that deflect the call entirely.</p>
      </div>
    ),
  },
  {
    title: "Discount decay",
    content: (
      <div className="space-y-3 text-[14.5px] text-neutral-600">
        <p>
          AutoPay/paperless discounts ($10/mo per line) and promo credits expire silently; the bill just creeps up
          $10–15. And the old 3-year price lock? Ended for new myPlan mobile sign-ups on June 16, 2026.
        </p>
        <p className="font-bold text-black">→ BillFix: watches every expiring discount and warns you before the bill jumps — not after.</p>
      </div>
    ),
  },
];

export default function Pain() {
  return (
    <Section
      id="pain"
      eyebrow="Research · 03 — Billing pain, documented"
      title="What actually goes wrong"
      lead="Real, attributable patterns — each one maps to a BillFix feature. No invented statistics; anecdotes labeled as anecdotes."
    >
      <Reveal>
        <Accordion items={items} defaultOpen={0} size="lg" />
      </Reveal>
    </Section>
  );
}
