import { Section, Reveal } from "@/lib/site";

const quotes = [
  {
    q: "Our churn rate was going up because people were unhappy with us. We were raising prices. Our plans were confusing.",
    a: "Dan Schulman, CEO", s: "HBR interview, Sept 2026",
    use: "Open the video with this. The CEO indicted his own bills.",
  },
  {
    q: "There are four reasons why people leave us: price increases without corresponding value… friction in the process, whether it's onboarding, the billing… price perception and competitive intensity.",
    a: "Dan Schulman", s: "Q4 2025 earnings call, Jan 30, 2026",
    use: "The problem slide. Verbatim, attributed.",
  },
  {
    q: "I want us to be not an AI-first company. I want us to be an AI-native company.",
    a: "Dan Schulman", s: "Q1 2026 earnings call — plus: 85% of network problems autonomously resolved; 1,280-bp YoY CSAT improvement",
    use: "The tech slide: “BillFix is the customer-facing proof.”",
  },
  {
    q: "Verizon's value-for-money perception has run negative for the last two years… Customers like Verizon but dislike what it costs relative to what they believe they get.",
    a: "Roger Entner, Recon Analytics", s: "via Light Reading",
    use: "The analyst voice — third-party validation of the perception gap.",
  },
];

export default function Quotables() {
  return (
    <Section id="quotes" eyebrow="Ammunition · 12 — Quotables" title="Steal these lines" lead="Four quotes, all attributable, all pitch-grade. Use them verbatim.">
      <div className="grid gap-4 md:grid-cols-2">
        {quotes.map((x, i) => (
          <Reveal key={x.a + i} delay={(i % 2) * 80}>
            <figure className="quote-card flex h-full flex-col rounded-r-2xl border border-l-0 border-neutral-200 bg-white p-6 shadow-sm">
              <blockquote className="text-[16px] font-medium leading-relaxed text-neutral-800">"{x.q}"</blockquote>
              <figcaption className="mt-4 text-[13px] text-neutral-500">
                <strong className="text-black">{x.a}</strong> — {x.s}
              </figcaption>
              <div className="mt-3 rounded-lg bg-[#cd040b08] px-3 py-2 text-[12.5px] font-bold text-[#cd040b]">🎯 {x.use}</div>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
