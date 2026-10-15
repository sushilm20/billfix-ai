import { useEffect, useState } from "react";

const links = [
  ["pitch", "Pitch"], ["problem", "Problem"], ["plans", "Plans"], ["pain", "Pain"],
  ["market", "Market"], ["product", "Product"], ["demo", "Demo"], ["roi", "ROI"],
  ["tech", "Verizon AI"], ["judges", "Judges"], ["risks", "Risks"], ["roadmap", "Roadmap"],
  ["quotes", "Quotes"], ["faq", "FAQ"], ["sources", "Sources"],
];

export default function Nav() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const onScroll = () => {
      let cur = "";
      for (const [id] of links) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="noscroll mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2.5">
        <a href="#top" className="mr-2 flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-black tracking-tight">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-[#cd040b] text-[11px] font-black text-white">✓</span>
          BillFix AI
        </a>
        {links.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={`navlink shrink-0 whitespace-nowrap rounded-lg px-3.5 py-2 text-[13px] font-bold text-neutral-500 transition hover:bg-neutral-100 hover:text-black ${active === id ? "active" : ""}`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
