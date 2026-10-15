import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Pitch from "@/sections/Pitch";
import Problem from "@/sections/Problem";
import Plans from "@/sections/Plans";
import Pain from "@/sections/Pain";
import Market from "@/sections/Market";
import Product from "@/sections/Product";
import Demo from "@/sections/Demo";
import Roi from "@/sections/Roi";
import Tech from "@/sections/Tech";
import Judges from "@/sections/Judges";
import Risks from "@/sections/Risks";
import Roadmap from "@/sections/Roadmap";
import Quotables from "@/sections/Quotables";
import Faq from "@/sections/Faq";
import Sources from "@/sections/Sources";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-[#0a0a0b] antialiased">
      <Hero />
      <Nav />
      <main>
        <Pitch />
        <div className="border-t border-neutral-100"><Problem /></div>
        <div className="border-t border-neutral-100 bg-neutral-50/60"><Plans /></div>
        <div className="border-t border-neutral-100"><Pain /></div>
        <div className="border-t border-neutral-100 bg-neutral-50/60"><Market /></div>
        <div className="border-t border-neutral-100"><Product /></div>
        <div className="border-t border-neutral-100 bg-neutral-50/60"><Demo /></div>
        <div className="border-t border-neutral-100"><Roi /></div>
        <div className="border-t border-neutral-100 bg-neutral-50/60"><Tech /></div>
        <div className="border-t border-neutral-100"><Judges /></div>
        <div className="border-t border-neutral-100 bg-neutral-50/60"><Risks /></div>
        <div className="border-t border-neutral-100"><Roadmap /></div>
        <div className="border-t border-neutral-100 bg-neutral-50/60"><Quotables /></div>
        <div className="border-t border-neutral-100"><Faq /></div>
        <div className="border-t border-neutral-100 bg-neutral-50/60"><Sources /></div>
      </main>
      <footer className="border-t border-neutral-200 bg-[#0a0a0b] px-5 py-10 text-center text-[13px] text-neutral-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2">
          <div className="flex items-center gap-2 font-black text-white">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-[#cd040b] text-[12px] text-white">✓</span>
            BillFix AI
          </div>
          <div>Research dossier for the Verizon Smart Campus Innovation Challenge 2026–27 · Built for the team — share it, don't forward the raw chat.</div>
        </div>
      </footer>
    </div>
  );
}
