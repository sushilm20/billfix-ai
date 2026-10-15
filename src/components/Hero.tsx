import { useState } from "react";
import { AnimatedCounter } from "@/components/arc/animated-counter/animated-counter";
import { CopyButton } from "@/components/arc/copy-button/copy-button";

export const PITCH_30 =
  "Verizon lost 2.25 million customers in three years. The CEO himself says billing friction is a top reason people leave — 'Our plans were confusing.' Bills are unreadable, reps upsell you to the $95 plan when you asked for the $30 one, and every support call costs $20–30 by industry benchmarks. BillFix AI scans your bill, translates it to plain English, finds junk charges, and tells you the cheapest plan that actually fits your usage — then drafts the dispute for you. It runs on-device with 5G real-time sync, cuts support costs, and rebuilds the trust Verizon needs to stop churn.";

const stats = [
  { value: 2.25, decimals: 2, suffix: "M", label: "customers lost in 3 years", sub: "Churn +25 bps — Schulman, Jan 2026 earnings call" },
  { value: 25, decimals: 0, prefix: "$", label: "per telecom support contact", sub: "Industry benchmark (Ringly / Crescendo 2026)" },
  { value: 100, decimals: 0, prefix: "$", suffix: "M", label: "admin-fee class action", sub: "NJ Superior Court · hidden 'Administrative Charge', 2016–2023" },
  { value: 1280, decimals: 0, suffix: "", label: "bps CSAT improvement from AI", sub: "Verizon Q1 2026 — 85% of network problems now autonomously resolved" },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);
  return (
    <header className="relative overflow-hidden bg-[#0a0a0b] text-white">
      <div className="hero-grid-bg absolute inset-0" aria-hidden="true" />
      <div className="orb" style={{ width: 460, height: 460, background: "#cd040b55", top: -140, right: -100 }} aria-hidden="true" />
      <div className="orb" style={{ width: 340, height: 340, background: "#cd040b33", bottom: -120, left: -80, animationDelay: "-7s" }} aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#cd040b66] bg-[#cd040b14] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#ff8a80]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#cd040b] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#cd040b]" />
          </span>
          Verizon Smart Campus Innovation Challenge · 2026–27
        </div>

        <h1 className="mt-6 text-[clamp(52px,9vw,104px)] font-black leading-[0.95] tracking-[-0.03em]">
          BillFix <span className="text-[#cd040b]">AI</span>
        </h1>
        <p className="mt-5 max-w-3xl text-[clamp(16px,2.2vw,21px)] leading-relaxed text-neutral-400">
          An AI billing translator &amp; plan optimizer that attacks the{" "}
          <strong className="text-white">#1 churn driver Verizon's CEO publicly named</strong> — billing
          friction — while cutting support costs. App-only. No Verizon API needed for the prototype.
        </p>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {[
            ["📅", "Oct 24", "registration deadline"],
            ["🎥", "Mid-Nov", "video pitch round"],
            ["👥", "3–6", "per team"],
            ["🎯", "Next-Gen CX", "+ AI Automation"],
          ].map(([icon, bold, rest]) => (
            <span key={rest} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] text-neutral-300">
              <span>{icon}</span><strong className="text-white">{bold}</strong><span className="text-neutral-400">{rest}</span>
            </span>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <CopyButton
            value={PITCH_30}
            label={copied ? "Copied!" : "Copy 30-sec team pitch"}
            onCopied={() => { setCopied(true); setTimeout(() => setCopied(false), 1800); }}
            className="!bg-[#cd040b] !text-white hover:!bg-[#a50309] !border-transparent !rounded-xl !px-7 !py-3.5 !text-[15px] !font-extrabold"
          />
          <a href="#pitch" className="inline-flex items-center rounded-xl border border-white/25 px-7 py-3.5 text-[15px] font-bold text-white transition hover:border-[#cd040b] hover:bg-[#cd040b14]">
            Read the pitch ↓
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
              style={{ animation: `none` }}
            >
              <div className="text-[32px] md:text-[36px] font-black tabular-nums text-white">
                <AnimatedCounter value={s.value} decimals={s.decimals} prefix={s.prefix ?? ""} suffix={s.suffix ?? ""} animateOnView />
              </div>
              <div className="mt-1 text-[13px] font-bold text-white">{s.label}</div>
              <div className="mt-1 text-[11.5px] leading-snug text-neutral-500">{s.sub}</div>
              <span className="sr-only">{i + 1} of 4</span>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-hint absolute bottom-5 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.25em] text-neutral-600">
        scroll
      </div>
    </header>
  );
}
