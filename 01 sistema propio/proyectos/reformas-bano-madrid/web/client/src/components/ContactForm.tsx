/* ============================================================
   ContactForm.tsx — Formulario de presupuesto
   Doc C: Fondo oscuro #151515, inputs con borde inferior
   ============================================================ */
import { useState } from "react";
import { Phone } from "lucide-react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function ContactForm({ title = "Pide tu presupuesto", subtitle, dark = true }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", servicio: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = dark ? "form-input" : "form-input-light";
  const labelColor = dark ? "rgba(255,255,255,0.6)" : "var(--brand-text)";

  return (
    <section style={{ backgroundColor: dark ? "var(--brand-dark)" : "#fff" }} className="py-16">
      <div className="container max-w-3xl mx-auto">
        {title && (
          <div className="text-center mb-10">
            <h2 className="section-title" style={{ color: dark ? "#fff" : "var(--brand-heading)" }}>{title}</h2>
            <div className="section-title-divider" />
            {subtitle && <p className="text-sm" style={{ color: dark ? "rgba(255,255,255,0.6)" : "var(--brand-text)" }}>{subtitle}</p>}
          </div>
        )}

        {submitted ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: dark ? "#fff" : "var(--brand-heading)" }}>¡Solicitud recibida!</h3>
            <p style={{ color: dark ? "rgba(255,255,255,0.7)" : "var(--brand-text)" }}>Nos pondremos en contacto contigo en menos de 24 horas.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs mb-2 uppercase tracking-wider" style={{ color: labelColor }}>Nombre *</label>
                <input required className={inputClass} placeholder="Tu nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs mb-2 uppercase tracking-wider" style={{ color: labelColor }}>Teléfono *</label>
                <input required className={inputClass} placeholder="Tu teléfono" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} />
              </div>
            </div>
            <div>
              <label className="block text-xs mb-2 uppercase tracking-wider" style={{ color: labelColor }}>Email</label>
              <input type="email" className={inputClass} placeholder="tu@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs mb-2 uppercase tracking-wider" style={{ color: labelColor }}>Servicio de interés</label>
              <select
                className={inputClass}
                value={form.servicio}
                onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                style={{ appearance: "none" }}
              >
                <option value="">Elige una opción</option>
                <option value="reforma-integral">Reforma Integral de Baño</option>
                <option value="cambio-banera">Cambio Bañera por Ducha</option>
                <option value="mamparas">Instalación de Mamparas</option>
                <option value="muebles">Muebles de Baño a Medida</option>
                <option value="sin-obra">Reforma Sin Obra</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-xs mb-2 uppercase tracking-wider" style={{ color: labelColor }}>Mensaje</label>
              <textarea rows={3} className={inputClass} placeholder="Cuéntanos tu proyecto..." value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} style={{ resize: "none" }} />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center pt-2">
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Solicitar presupuesto
              </button>
              <a href="tel:910123456" className="flex items-center gap-2 text-sm" style={{ color: dark ? "rgba(255,255,255,0.7)" : "var(--brand-text)" }}>
                <Phone size={14} style={{ color: "var(--brand-red)" }} />
                O llámanos al <strong style={{ color: dark ? "#fff" : "var(--brand-red)" }}>910 12 34 56</strong>
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
