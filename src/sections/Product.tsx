import { Section, Reveal } from "@/lib/site";
import { Alert } from "@/components/arc/alert/alert";
import { Badge } from "@/components/arc/badge/badge";

const steps = [
  { k: "1 · Scan", t: "Bill intake", d: "Photo / PDF upload. On-device OCR + edge AI extracts every line item. Your bill never leaves your phone.", pills: [["5G", "info"], ["Edge AI", "info"]] as const },
  { k: "2 · Translate", t: "Plain English", d: '"Verizon Cloud $12 — unopened in 6 months." "Admin fee — the charge behind the $100M settlement."', pills: [["LLM", "info"]] as const },
  { k: "3 · Optimize", t: "Plan math", d: "Deterministic rules engine compares your usage vs every plan. “Welcome → Simplicity saves $420/yr.”", pills: [["Savings", "success"]] as const },
  { k: "4 · Act", t: "One-tap action", d: "Dispute email drafted, plan-change checklist, perk toggles, discount-expiry alerts.", pills: [["Automation", "info"]] as const },
];

export default function Product() {
  return (
    <Section
      id="product"
      eyebrow="Product · 05 — How BillFix works"
      title="Four steps. Thirty seconds."
      lead="BillFix is the customer-facing proof of Verizon's AI-native story — the same 4-layer AI stack Schulman described (data layer, agent factory, runtime engines, control plane), pointed at the #1 churn driver."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.k} delay={i * 80}>
            <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#cd040b]">{s.k}</div>
              <div className="mt-2 text-[17px] font-extrabold">{s.t}</div>
              <div className="mt-2 text-[14px] leading-relaxed text-neutral-500">{s.d}</div>
              <div className="mt-3">{s.pills.map(([label, tone]) => <Badge key={label} tone={tone} className="mr-2">{label}</Badge>)}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={100}>
        <div className="mt-6">
          <Alert tone="danger" title="Accuracy architecture — judges will ask">
            Billing math runs on a <em>deterministic rules engine</em> — the LLM only writes explanations, never invents dollar amounts. This is exactly how real telecom AI avoids hallucinating account data, and it mirrors Verizon's own control-plane-with-guardrails layer.
          </Alert>
        </div>
      </Reveal>
      <Reveal delay={140}>
        <div className="mt-6 rounded-2xl bg-[#0a0a0b] p-6 md:p-8 text-white">
          <h3 className="text-lg font-extrabold">What we demo <span className="text-[13px] font-medium text-neutral-500">— no Verizon API needed</span></h3>
          <ul className="mt-3 space-y-2 text-[14.5px] text-neutral-400">
            <li>· Three mock anonymized bills (student · family of 4 · traveler)</li>
            <li>· Plan engine built from public pricing + the Simplicity / price-lock / perk rules above</li>
            <li>· One-tap dispute email generator</li>
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
