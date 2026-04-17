/* ============================================================
   NosotrosPage.tsx — Quiénes somos
   Doc A: Silo independiente
   ============================================================ */
import { Link } from "wouter";
import { CheckCircle, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-reforma-integral-PtkybgjiNmqgdLfcNLHh8K.webp";
const GALLERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/bathroom-gallery-1-Uvk9yuCwaxcjRzCnVZQ6gX.webp";

const values = [
  { title: "Honestidad", desc: "Presupuestos cerrados y sin sorpresas. Lo que presupuestamos es lo que cobras." },
  { title: "Calidad", desc: "Solo trabajamos con materiales de primera calidad y fabricantes de confianza." },
  { title: "Puntualidad", desc: "Cumplimos los plazos acordados. Tu obra termina cuando dijimos que terminaría." },
  { title: "Limpieza", desc: "Dejamos la obra limpia cada día y retiramos todos los escombros al punto limpio." },
];

export default function NosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "360px" }}>
        <img src={HERO_IMG} alt="Equipo de Reformas Baño Madrid Pro" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />
        <div className="relative container flex flex-col justify-end h-full py-14" style={{ minHeight: "360px" }}>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Quiénes somos</h1>
          <p className="text-base text-white" style={{ opacity: 0.85, maxWidth: "520px" }}>
            Más de 15 años reformando baños en Madrid con honestidad, calidad y puntualidad.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--brand-heading)" }}>Nuestra historia</h2>
              <div className="section-title-divider" style={{ margin: "0 0 1.5rem 0" }} />
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--brand-text)" }}>
                Reformas Baño Madrid Pro nació en 2009 en el barrio de Argüelles con una misión clara: ofrecer reformas de baño de calidad a precios justos y sin sorpresas. Desde entonces hemos reformado más de 500 baños en Madrid, Argüelles, Moncloa y toda la capital.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--brand-text)" }}>
                Somos un equipo de 12 profesionales especializados en reforma de baños: fontaneros, alicatadores, electricistas y diseñadores. Todos nuestros trabajadores son empleados directos, no subcontratamos, lo que nos permite garantizar la calidad en cada obra.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--brand-text)" }}>
                Nuestra sede está en la Calle de la Princesa 45, en el corazón de Argüelles, lo que nos permite estar cerca de nuestros clientes y responder rápidamente a cualquier incidencia.
              </p>
            </div>
            <div>
              <img src={GALLERY_IMG} alt="Equipo de trabajo" className="w-full object-cover" style={{ borderRadius: "4px", maxHeight: "420px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16" style={{ backgroundColor: "var(--brand-light)" }}>
        <div className="container">
          <SectionTitle title="Nuestros valores" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-6 text-center" style={{ borderRadius: "4px" }}>
                <CheckCircle size={32} className="mx-auto mb-3" style={{ color: "var(--brand-red)" }} />
                <h3 className="font-semibold mb-2" style={{ color: "var(--brand-heading)" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--brand-text)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white text-center">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--brand-heading)" }}>¿Hablamos de tu proyecto?</h2>
          <p className="text-base mb-6" style={{ color: "var(--brand-text)" }}>Cuéntanos qué necesitas y te damos un presupuesto gratuito sin compromiso.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/presupuesto" className="btn-primary">Solicitar presupuesto</Link>
            <a href="tel:910123456" className="btn-outline flex items-center gap-2 justify-center">
              <Phone size={14} /> 910 12 34 56
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
