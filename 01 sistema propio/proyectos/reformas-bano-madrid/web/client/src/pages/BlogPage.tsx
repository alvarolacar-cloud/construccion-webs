/* ============================================================
   BlogPage.tsx — Hub del blog
   Doc C Layout-Map 2.4
   ============================================================ */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-homepage-CpBHWLohyRwJUcBfNFcFAa.webp";
const CAMBIO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-cambio-banera-EZM3WzYHDMbet3SY4CtKg4.webp";
const REFORMA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-reforma-integral-PtkybgjiNmqgdLfcNLHh8K.webp";
const ARGUELLES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-arguelles-g4sPkhdTuAwopFWkTx5iKu.webp";
const GALLERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/bathroom-gallery-1-Uvk9yuCwaxcjRzCnVZQ6gX.webp";

const posts = [
  { title: "¿Cuánto cuesta reformar un baño en Madrid en 2026?", excerpt: "Analizamos los precios reales de una reforma de baño en Madrid según el tipo de trabajo y los materiales elegidos.", href: "/blog/cuanto-cuesta-reformar-bano-madrid", date: "10 marzo 2026", img: REFORMA_IMG, category: "Precios" },
  { title: "Cambiar bañera por ducha: todo lo que necesitas saber", excerpt: "Ventajas, plazos, precios y qué incluye exactamente el servicio de cambio de bañera por plato de ducha.", href: "/blog/cambiar-banera-por-ducha-madrid", date: "2 marzo 2026", img: CAMBIO_IMG, category: "Servicios" },
  { title: "Ideas para reformar un baño pequeño en Argüelles", excerpt: "Los pisos de Argüelles tienen baños pequeños. Te mostramos cómo sacarles el máximo partido con una reforma inteligente.", href: "/blog/reformar-bano-pequeno-arguelles", date: "20 febrero 2026", img: ARGUELLES_IMG, category: "Diseño" },
  { title: "¿Qué plato de ducha elegir para tu baño en Madrid?", excerpt: "Extraplano, de resina o de porcelana: te explicamos las diferencias y cuál es el más adecuado para cada baño.", href: "/blog/que-plato-ducha-elegir-madrid", date: "12 febrero 2026", img: GALLERY_IMG, category: "Materiales" },
  { title: "Reforma de baño sin obra: ventajas e inconvenientes", excerpt: "La reforma sin obra es cada vez más popular en Madrid. Te explicamos en qué consiste y cuándo es la mejor opción.", href: "/blog/reforma-bano-sin-obra-madrid", date: "5 febrero 2026", img: HERO_IMG, category: "Servicios" },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />

      <section className="py-14 bg-white">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--brand-heading)" }}>El Blog de Reformas Baño Madrid Pro</h1>
          <div className="section-title-divider" style={{ margin: "0 0 2.5rem 0" }} />

          {/* Featured post */}
          <Link href={featured.href} className="no-underline block mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white border border-gray-100 overflow-hidden" style={{ borderRadius: "4px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.08)" }}>
              <div className="overflow-hidden" style={{ height: "300px" }}>
                <img src={featured.img} alt={featured.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4" style={{ backgroundColor: "var(--brand-red)", color: "#fff" }}>{featured.category}</span>
                <h2 className="text-xl font-semibold mb-3 leading-snug" style={{ color: "var(--brand-heading)" }}>{featured.title}</h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--brand-text)" }}>{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "var(--brand-red)" }}>{featured.date}</span>
                  <span className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--brand-red)" }}>
                    Leer más <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <Link key={p.href} href={p.href} className="no-underline block service-card">
                <div className="overflow-hidden" style={{ height: "200px" }}>
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider px-2 py-0.5 mb-3" style={{ backgroundColor: "var(--brand-red)", color: "#fff" }}>{p.category}</span>
                  <h3 className="font-semibold mb-2 text-base leading-snug" style={{ color: "var(--brand-heading)" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--brand-text)" }}>{p.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "var(--brand-red)" }}>{p.date}</span>
                    <span className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--brand-red)" }}>
                      Leer más <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
