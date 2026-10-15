import { useState } from "react";
import { Section, Reveal } from "@/lib/site";
import { AnimatePresence, motion } from "motion/react";

const screens: { body: React.ReactNode }[] = [
  {
    body: (
      <>
        <div className="bill-line"><span>Unlimited Plus · 1 line</span><span className="amt">$80.00</span></div>
        <div className="bill-line"><span>Device payment · iPhone</span><span className="amt">$27.08</span></div>
        <div className="bill-line"><span>Taxes &amp; fees</span><span className="amt">$5.39</span></div>
        <div className="mt-4 text-center text-[12px] text-neutral-400">9 line items extracted ✓</div>
        <div className="mt-4 text-center"><span className="rounded-full bg-[#cd040b] px-4 py-1.5 text-[13px] font-extrabold text-white">TOTAL $112.47</span></div>
      </>
    ),
  },
  {
    body: (
      <>
        <div className="bill-line flag"><span>Device insurance <span className="ml-1 rounded bg-[#cd040b1a] px-1.5 py-0.5 text-[10px] font-extrabold text-[#cd040b]">NEVER ASKED</span></span><span className="amt">$17.00</span></div>
        <div className="bill-line flag"><span>Verizon Cloud <span className="ml-1 rounded bg-[#cd040b1a] px-1.5 py-0.5 text-[10px] font-extrabold text-[#cd040b]">UNUSED 6 MO</span></span><span className="amt">$12.00</span></div>
        <div className="bill-line"><span>Autopay discount <span className="ml-1 rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-extrabold text-amber-700">EXPIRING</span></span><span className="amt">−$10.00</span></div>
        <div className="mt-4 text-center"><span className="rounded-full bg-green-100 px-4 py-1.5 text-[13px] font-extrabold text-green-700">RECOVERABLE $29/mo</span></div>
      </>
    ),
  },
  {
    body: (
      <>
        <div className="bill-line"><span>Your usage: 8 GB/mo</span><span className="rounded bg-green-100 px-1.5 py-0.5 text-[10px] font-extrabold text-green-700">LIGHT</span></div>
        <div className="bill-line"><span>Current: Plus</span><span className="amt">$80</span></div>
        <div className="bill-line" style={{ borderColor: "#cd040b66", background: "#cd040b08" }}><span><strong>Recommended: Welcome</strong></span><span className="amt text-[#cd040b]">$65</span></div>
        <div className="mt-4 text-center"><span className="rounded-full bg-[#cd040b] px-4 py-1.5 text-[13px] font-extrabold text-white">SAVE $288/YR</span></div>
      </>
    ),
  },
  {
    body: (
      <>
        <div className="bill-line"><span>✉️ Dispute email</span><span className="rounded bg-green-100 px-1.5 py-0.5 text-[10px] font-extrabold text-green-700">DRAFTED</span></div>
        <div className="rounded-[10px] bg-neutral-100 p-3 text-[12px] leading-relaxed text-neutral-600">
          "Hi Verizon, I was charged $17/mo for device insurance I never authorized (Dec 2025–Oct 2026). Please remove and refund $187…" <strong className="text-[#cd040b]">[Send]</strong>
        </div>
        <div className="bill-line mt-2"><span>📋 Plan switch checklist</span><span className="rounded bg-green-100 px-1.5 py-0.5 text-[10px] font-extrabold text-green-700">READY</span></div>
      </>
    ),
  },
];

const steps = [
  { k: "Step 1 · Scan", t: "$112.47 bill scanned", d: "OCR pulled 9 line items in 2 seconds." },
  { k: "Step 2 · Flags", t: "3 issues found", d: "Insurance you never asked for. Cloud you never open. Discount expiring." },
  { k: "Step 3 · Optimize", t: "Save $288/yr", d: "You're on Plus ~$80 — your usage fits Welcome ~$65." },
  { k: "Step 4 · Act", t: "Dispute drafted", d: "Email ready to send. Plan switch checklist generated." },
];

export default function Demo() {
  const [active, setActive] = useState(0);
  return (
    <Section
      id="demo"
      eyebrow="Interactive · 06 — Try the demo"
      title="Tap through the app"
      lead="Click each step — this is exactly what the 2-minute video will show."
    >
      <div className="flex flex-wrap items-start gap-8">
        <Reveal>
          <div className="phone">
            <div className="screen">
              <div className="border-b border-neutral-200 px-4 py-4 text-center">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#cd040b]">BillFix AI</div>
                <div className="text-[14px] font-extrabold">Scan result · Oct bill</div>
              </div>
              <div className="flex-1 p-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22 }}
                  >
                    {screens[active].body}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex justify-center gap-1.5 pb-4">
                {steps.map((_, i) => (
                  <span key={i} className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-[#cd040b]" : "w-1.5 bg-neutral-300"}`} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
        <div className="flex min-w-[260px] flex-1 flex-col gap-3">
          {steps.map((s, i) => (
            <button key={s.k} onClick={() => setActive(i)} className={`dstep ${i === active ? "on" : ""}`}>
              <div className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#cd040b]">{s.k}</div>
              <div className="mt-1 font-extrabold">{s.t}</div>
              <div className="mt-0.5 text-[13px] text-neutral-500">{s.d}</div>
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
