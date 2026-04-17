/* ============================================================
   SectionTitle.tsx — H2 con separador rojo
   Doc C: 30px/500, separador #B30000 116px
   ============================================================ */
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
}

export default function SectionTitle({ title, subtitle, light = false, align = "center" }: SectionTitleProps) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2
        className="section-title"
        style={{
          color: light ? "#fff" : "var(--brand-heading)",
          textAlign: align,
        }}
      >
        {title}
      </h2>
      <div className={`section-title-divider ${align === "left" ? "ml-0" : ""}`} />
      {subtitle && (
        <p
          className="text-base max-w-2xl mx-auto"
          style={{
            color: light ? "rgba(255,255,255,0.7)" : "var(--brand-text)",
            lineHeight: "1.7",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
