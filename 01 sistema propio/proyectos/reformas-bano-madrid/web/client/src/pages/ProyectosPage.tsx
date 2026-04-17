/* ============================================================
   ProyectosPage.tsx — Galería de proyectos realizados
   Doc A: Silo independiente
   ============================================================ */
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-homepage-CpBHWLohyRwJUcBfNFcFAa.webp";
const CAMBIO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-cambio-banera-EZM3WzYHDMbet3SY4CtKg4.webp";
const REFORMA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-reforma-integral-PtkybgjiNmqgdLfcNLHh8K.webp";
const ARGUELLES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-arguelles-g4sPkhdTuAwopFWkTx5iKu.webp";
const GALLERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/bathroom-gallery-1-Uvk9yuCwaxcjRzCnVZQ6gX.webp";

const projects = [
  { title: "Reforma integral en Argüelles", zone: "Argüelles", type: "Reforma Integral", img: ARGUELLES_IMG, desc: "Reforma completa de baño de 8m² en piso del siglo XX. Alicatado en mármol blanco, mueble a medida y ducha de obra." },
  { title: "Cambio bañera por ducha en Moncloa", zone: "Moncloa", type: "Cambio Bañera", img: CAMBIO_IMG, desc: "Sustitución de bañera por plato de ducha extraplano de 160x70cm. Realizado en un solo día." },
  { title: "Reforma integral en Madrid Centro", zone: "Madrid", type: "Reforma Integral", img: REFORMA_IMG, desc: "Reforma completa de baño principal en piso de Malasaña. Diseño nórdico con madera y cemento." },
  { title: "Mueble a medida en Argüelles", zone: "Argüelles", type: "Muebles a Medida", img: GALLERY_IMG, desc: "Mueble de baño suspendido a medida en roble natural con lavabo de sobre encimera." },
  { title: "Reforma integral en Chamberí", zone: "Madrid", type: "Reforma Integral", img: HERO_IMG, desc: "Baño de lujo con ducha de obra, bañera exenta y doble lavabo. Acabados en mármol Calacatta." },
  { title: "Mamparas en Moncloa", zone: "Moncloa", type: "Mamparas", img: ARGUELLES_IMG, desc: "Instalación de mampara fija de vidrio templado de 8mm en ducha de 120x80cm." },
];

export default function ProyectosPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />

      <section className="py-14 bg-white">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--brand-heading)" }}>Proyectos realizados</h1>
          <div className="section-title-divider" style={{ margin: "0 0 2.5rem 0" }} />
          <p className="text-base mb-10" style={{ color: "var(--brand-text)", maxWidth: "600px" }}>
            Más de 500 baños reformados en Madrid, Argüelles y Moncloa. Aquí te mostramos una selección de nuestros trabajos más recientes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="service-card">
                <div className="overflow-hidden" style={{ height: "240px" }}>
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5" style={{ backgroundColor: "var(--brand-red)", color: "#fff" }}>{p.type}</span>
                    <span className="text-xs" style={{ color: "var(--brand-red)" }}>{p.zone}</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-base" style={{ color: "var(--brand-heading)" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--brand-text)" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12" style={{ backgroundColor: "var(--brand-light)" }}>
        <div className="container text-center">
          <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--brand-heading)" }}>¿Quieres un baño como estos?</h2>
          <p className="text-sm mb-6" style={{ color: "var(--brand-text)" }}>Pídenos presupuesto gratuito y sin compromiso.</p>
          <Link href="/presupuesto" className="btn-primary">Solicitar presupuesto</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
