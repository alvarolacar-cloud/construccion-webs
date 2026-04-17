/* ============================================================
   PresupuestoPage.tsx — Solicitar presupuesto online
   Doc A: Silo independiente
   ============================================================ */
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function PresupuestoPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />

      {/* Header de página */}
      <section className="py-14" style={{ backgroundColor: "var(--brand-dark)" }}>
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Solicita tu presupuesto gratuito</h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.75)", maxWidth: "520px", margin: "0 auto" }}>
            Rellena el formulario y te respondemos en menos de 24 horas con un presupuesto detallado y sin compromiso.
          </p>
        </div>
      </section>

      {/* Formulario */}
      <ContactForm title="" dark={false} />

      {/* Datos de contacto */}
      <section className="py-14" style={{ backgroundColor: "var(--brand-light)" }}>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Phone size={28} style={{ color: "var(--brand-red)" }} />, title: "Teléfono y WhatsApp", lines: ["910 12 34 56", "661 23 45 67"] },
              { icon: <MapPin size={28} style={{ color: "var(--brand-red)" }} />, title: "Dirección", lines: ["Calle de la Princesa 45", "28008 Madrid"] },
              { icon: <Mail size={28} style={{ color: "var(--brand-red)" }} />, title: "Correo electrónico", lines: ["info@reformasbanomadridpro.es"] },
              { icon: <Clock size={28} style={{ color: "var(--brand-red)" }} />, title: "Horario de atención", lines: ["Lun–Vie: 9:00 a 19:00 h", "Sáb: 10:00 a 14:00 h"] },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6" style={{ borderRadius: "4px" }}>
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "var(--brand-heading)" }}>{item.title}</h3>
                {item.lines.map((l) => (
                  <p key={l} className="text-sm" style={{ color: "var(--brand-text)" }}>{l}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
