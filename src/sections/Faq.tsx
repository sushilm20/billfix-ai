import { Section, Reveal } from "@/lib/site";
import { Accordion } from "@/components/arc/accordion/accordion";

const items = [
  {
    title: "Do you need Verizon's internal APIs?",
    content: <p className="text-[14.5px] text-neutral-600">No. The prototype uses public plan pricing and user-uploaded bills. In production it would use Verizon's account APIs over 5G — we describe that as the scale-up path, alongside the AI Connect enterprise infrastructure story.</p>,
  },
  {
    title: "Why would Verizon want customers to downgrade?",
    content: <p className="text-[14.5px] text-neutral-600">Because a retained $65/mo customer is worth $2,340 over 3 years; a churned $95 customer is worth $0 — and Schulman's math says each basis point of churn is 90,000 net adds. Trust compounds: today's saver is tomorrow's Verizon One bundle buyer.</p>,
  },
  {
    title: "How is this different from Rocket Money?",
    content: <p className="text-[14.5px] text-neutral-600">Rocket Money is carrier-generic. BillFix knows every Verizon plan, perk, promo, and Simplicity switcher rule — and it's framed as a Verizon CX feature aligned with the AI-native story, not an adversary.</p>,
  },
  {
    title: "What about privacy?",
    content: <p className="text-[14.5px] text-neutral-600">On-device OCR plus edge processing. Bills never leave the phone without explicit consent. This is a deliberate architecture choice — the same "control plane with guardrails" philosophy as Verizon's own 4-layer AI stack.</p>,
  },
];

export default function Faq() {
  return (
    <Section id="faq" eyebrow="13 — FAQ" title="Questions you'll get">
      <Reveal><Accordion items={items} defaultOpen={-1} size="lg" /></Reveal>
    </Section>
  );
}
