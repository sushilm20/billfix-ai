import { Section, Reveal } from "@/lib/site";

const risks = [
  { t: "“You're attacking Verizon.”", d: "Frame as helping Verizon keep its CEO promise. The pilot is positioned as a Verizon-branded CX feature, not a third-party attack app — and Schulman already admitted the problem publicly." },
  { t: "“AI will hallucinate my bill.”", d: "Deterministic rules engine for all dollar math; the LLM only writes explanations. Same guardrail philosophy as Verizon's own AI control plane." },
  { t: "“Downgrades lose revenue.”", d: "A retained $65/mo customer is worth $2,340 over 3 years; a churned $95 customer is worth $0. Trust compounds — today's saver is tomorrow's home-internet + watch + tablet buyer. (Frontier's 30M fiber passings just made convergence the growth story.)" },
  { t: "“Bill data is sensitive.”", d: "On-device OCR, edge processing, explicit consent per scan. Bills never leave the phone — a deliberate architecture choice, not an afterthought." },
];

export default function Risks() {
  return (
    <Section
      id="risks"
      eyebrow="Research · 10 — Risks, honestly"
      title="What could go wrong (and our answer)"
      lead="Judges respect teams that name their own weaknesses. Four objections, four answers."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {risks.map((r, i) => (
          <Reveal key={r.t} delay={(i % 2) * 80}>
            <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-[16px] font-extrabold">{r.t}</div>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-500"><strong className="text-black">Mitigation:</strong> {r.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
