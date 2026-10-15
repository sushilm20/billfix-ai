import { useState } from "react";
import { Section, Reveal, Bar } from "@/lib/site";
import { Slider } from "@/components/arc/slider/slider";
import { Alert } from "@/components/arc/alert/alert";

export default function Roi() {
  const [callsK, setCallsK] = useState(1000);
  const [churnBps, setChurnBps] = useState(5);

  const savedM = ((callsK * 1000 * 25) / 1e6).toFixed(1);
  const retained = Math.round(churnBps * 90000).toLocaleString();
  const revB = ((churnBps * 90000 * 70 * 12) / 1e9).toFixed(2);

  return (
    <Section
      id="roi"
      eyebrow="Research · 07 — Business value"
      title="The math judges want"
      lead="Every figure below carries its attribution. Industry benchmarks are labeled as benchmarks; Verizon's own disclosed AI results are labeled as Verizon's."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-extrabold">Cost to serve</h3>
            <div className="mt-4">
              <Bar label="Human telecom contact" value="$20–30" width={100} />
              <Bar label="AI voice agent" value="$0.30–0.50" width={4} tone="green" />
            </div>
            <ul className="mt-5 space-y-2 text-[13px] leading-relaxed text-neutral-500">
              <li>· $20–30/contact: <strong>industry benchmark</strong> (Crescendo.ai via Ringly's 2026 roundup) — <em>not</em> Verizon's disclosed figure.</li>
              <li>· Gartner (analyst data): median <strong>$13.50</strong> assisted vs <strong>$1.84</strong> self-serve per contact.</li>
              <li>· AI deflects 25–45% of tickets (vendor-reported); Freshworks survey: cost/interaction down <strong>68%</strong> ($4.60 → $1.45).</li>
              <li>· Gartner: conversational AI to cut <strong>$80B</strong> in contact-center labor costs by 2026.</li>
              <li>· <strong>Verizon's own AI results</strong> (Schulman, Q1 2026): 1,280-bp YoY CSAT improvement; 85% of network problems autonomously resolved; $200M+ energy savings.</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full rounded-2xl bg-[#0a0a0b] p-6 md:p-8 text-white shadow-sm">
            <h3 className="text-lg font-extrabold">Interactive ROI — drag the sliders</h3>
            <div className="mt-6">
              <Slider label="Billing calls deflected / year" value={callsK} min={100} max={5000} step={100}
                onValueChange={(v) => setCallsK(v as number)} format={(v) => `${v.toLocaleString()}K`} showValue />
            </div>
            <div className="mt-6">
              <Slider label="Churn prevented" value={churnBps} min={1} max={25} step={1}
                onValueChange={(v) => setChurnBps(v as number)} format={(v) => `0.${String(v).padStart(2, "0")} pts`} showValue />
            </div>
            <div className="mt-6 rounded-xl border border-[#cd040b44] bg-black/50 p-5 text-[14px]">
              <div><strong className="text-[20px] font-black text-white">${savedM}M</strong> <span className="text-neutral-400">support savings / yr</span></div>
              <div className="mt-2"><strong className="text-[20px] font-black text-white">{retained}</strong> <span className="text-neutral-400">customers retained</span></div>
              <div className="mt-2"><strong className="text-[20px] font-black text-white">${revB}B</strong> <span className="text-neutral-400">revenue protected / yr</span></div>
              <div className="mt-3 text-[12px] text-neutral-500">Math: calls × $25 · bps × 90,000 net adds (Schulman) · × $70 ARPU × 12 mo</div>
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal delay={120}>
        <div className="mt-6">
          <Alert tone="info" title="Poster one-liner">
            "1M billing calls deflected × $25 = <strong>$25M saved</strong>. 0.05 pts churn prevented ≈ <strong>$190M revenue protected</strong>." Even at 10% realization, the project pays for itself 1,000×.
          </Alert>
        </div>
      </Reveal>
    </Section>
  );
}
