import { Section, Reveal } from "@/lib/site";
import { Alert } from "@/components/arc/alert/alert";
import { Badge } from "@/components/arc/badge/badge";

const cards = [
  {
    t: "5G real-time sync",
    d: "Account, usage, and plan data refresh instantly over Verizon's 5G — dispute status pushes in real time. No “check back in 24 hours.”",
  },
  {
    t: "Edge AI — privacy by architecture",
    d: "Bill OCR runs on-device / at the mobile edge. Your itemized bill never leaves your phone — the privacy story judges love.",
  },
  {
    t: "Verizon AI Connect (enterprise)",
    d: "Launched Jan 2025: Verizon's enterprise network-infrastructure suite for AI workloads — fiber, edge, power/cooling, 5G, network slicing. Early adopters Google Cloud and Meta, ~$1B pipeline, fed by the Sept 2026 Corning deal (80M miles of fiber through 2032). It is NOT a consumer LLM API — BillFix rides the infrastructure story, honestly framed.",
  },
  {
    t: "The AI-native stack",
    d: "Schulman, Q1 2026: “I want us to be not an AI-first company. I want us to be an AI-native company.” Four layers — data/intelligence, agent dev factory, runtime engines, control plane (security/guardrails) — built with Google and Anthropic; substantially complete July 2026, fully done November 2026. Internal banner: “Every Customer Has a Name” — AI micro-segmentation down to the individual customer. BillFix is the customer-facing proof.",
  },
];

export default function Tech() {
  return (
    <Section
      id="tech"
      eyebrow="Verizon fit · 08 — Technology"
      title={<>Why this is a <span className="text-[#cd040b]">Verizon</span> solution</>}
      lead="Every technology claim below is scoped honestly: what's live, what's enterprise, and what's roadmap."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.t} delay={(i % 2) * 80}>
            <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="font-extrabold">{c.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-500">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={100}>
        <div className="mt-6">
          <Alert tone="warning" title="Network slicing — roadmap, not launch">
            Slicing is an enterprise 5G capability inside AI Connect; consumer-grade slicing is not confirmed. We pitch it as the roadmap: BillFix support traffic gets a priority slice during outages, so billing help stays up when the network is stressed — a real SLA use case for phase two.
          </Alert>
        </div>
      </Reveal>
      <Reveal delay={140}>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge tone="info">AI-Driven Automation &amp; Efficiency</Badge>
          <Badge tone="info">Next-Gen Customer Experience</Badge>
          <Badge tone="neutral">Cost &amp; Sustainability Transformation</Badge>
        </div>
      </Reveal>
    </Section>
  );
}
