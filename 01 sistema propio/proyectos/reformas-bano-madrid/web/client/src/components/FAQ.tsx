/* ============================================================
   FAQ.tsx — Acordeón de preguntas frecuentes
   Doc C: Texto rojo en tab activo, 26px/700
   ============================================================ */
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = "Preguntas frecuentes" }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-3xl mx-auto">
        <h2 className="section-title">{title}</h2>
        <div className="section-title-divider" />
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="border border-gray-100 overflow-hidden" style={{ borderRadius: "4px" }}>
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center transition-colors"
                style={{
                  backgroundColor: open === i ? "var(--brand-light)" : "#fff",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: open === i ? "var(--brand-red)" : "var(--brand-heading)",
                }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={18}
                  style={{
                    color: "var(--brand-red)",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 200ms ease",
                    flexShrink: 0,
                  }}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 pt-2" style={{ color: "var(--brand-text)", fontSize: "15px", lineHeight: "1.7" }}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
