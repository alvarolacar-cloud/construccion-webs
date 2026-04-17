/* ============================================================
   Home.tsx — Homepage Reformas de Baño Madrid Pro
   Doc A 2.6: Hero · Servicios · Métricas · CTA · Proyectos
              · Diferenciadores · Blog · Testimonios · Pre-footer
   Doc C: Layout-Map 2.1
   ============================================================ */
import { Link } from "wouter";
import { Phone, CheckCircle, Clock, Shield, Star, ArrowRight, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-homepage-CpBHWLohyRwJUcBfNFcFAa.webp";
const GALLERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/bathroom-gallery-1-Uvk9yuCwaxcjRzCnVZQ6gX.webp";
const CAMBIO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-cambio-banera-EZM3WzYHDMbet3SY4CtKg4.webp";
const REFORMA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-reforma-integral-PtkybgjiNmqgdLfcNLHh8K.webp";
const ARGUELLES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-arguelles-g4sPkhdTuAwopFWkTx5iKu.webp";

const services = [
  { title: "Reforma Integral de Baño", desc: "Transformamos tu baño de arriba abajo. Diseño, fontanería, alicatado y acabados.", href: "/servicios/reforma-integral-bano", img: REFORMA_IMG, price: "desde 6.995€" },
  { title: "Cambio Bañera por Ducha", desc: "Baño nuevo en menos de 48 horas. Plato extraplano, mampara y acabados incluidos.", href: "/servicios/cambio-banera-por-ducha", img: CAMBIO_IMG, price: "desde 1.199€" },
  { title: "Instalación de Mamparas", desc: "Mamparas de 6-8mm de vidrio templado. Instalación limpia y garantía de 5 años.", href: "/servicios/instalacion-mamparas", img: GALLERY_IMG, price: "desde 499€" },
  { title: "Muebles de Baño a Medida", desc: "Diseñamos y fabricamos muebles adaptados a tu espacio y estilo.", href: "/servicios/muebles-bano-medida", img: ARGUELLES_IMG, price: "desde 799€" },
];

const metrics = [
  { value: "+500", label: "Baños reformados" },
  { value: "15+", label: "Años de experiencia" },
  { value: "48h", label: "Plazo cambio bañera" },
  { value: "5★", label: "Valoración media" },
];

const differentiators = [
  { icon: <Clock size={28} style={{ color: "var(--brand-red)" }} />, title: "Obra en 48 horas", desc: "El cambio de bañera por ducha lo completamos en un solo día de trabajo." },
  { icon: <Shield size={28} style={{ color: "var(--brand-red)" }} />, title: "Garantía 5 años", desc: "Todos nuestros trabajos incluyen garantía completa de materiales y mano de obra." },
  { icon: <CheckCircle size={28} style={{ color: "var(--brand-red)" }} />, title: "Financiación sin intereses", desc: "Financia tu reforma en cómodos plazos mensuales sin ningún tipo de interés." },
  { icon: <Star size={28} style={{ color: "var(--brand-red)" }} />, title: "Presupuesto sin compromiso", desc: "Visita gratuita y presupuesto detallado sin ningún tipo de compromiso." },
  { icon: <MapPin size={28} style={{ color: "var(--brand-red)" }} />, title: "Especialistas en Argüelles", desc: "Conocemos los edificios de Argüelles y Moncloa. Sin sorpresas en obra." },
  { icon: <CheckCircle size={28} style={{ color: "var(--brand-red)" }} />, title: "Retirada a punto limpio", desc: "Nos encargamos de retirar todos los escombros y materiales al punto limpio." },
];

const testimonials = [
  { name: "María González", zone: "Argüelles", rating: 5, text: "Reformaron nuestro baño en 5 días. Muy profesionales, puntuales y el resultado es espectacular. Totalmente recomendables." },
  { name: "Carlos Martínez", zone: "Moncloa", rating: 5, text: "Cambiaron la bañera por una ducha en un solo día. Limpieza total y el precio fue exactamente el presupuestado. Sin sorpresas." },
  { name: "Ana López", zone: "Madrid", rating: 5, text: "Llevábamos años queriendo reformar el baño. Nos dieron varias opciones de diseño y el resultado superó nuestras expectativas." },
];

const blogPosts = [
  { title: "¿Cuánto cuesta reformar un baño en Madrid en 2026?", excerpt: "Analizamos los precios reales de una reforma de baño en Madrid según el tipo de trabajo y los materiales elegidos.", href: "/blog/cuanto-cuesta-reformar-bano-madrid", date: "10 marzo 2026" },
  { title: "Cambiar bañera por ducha: todo lo que necesitas saber", excerpt: "Ventajas, plazos, precios y qué incluye exactamente el servicio de cambio de bañera por plato de ducha.", href: "/blog/cambiar-banera-por-ducha-madrid", date: "2 marzo 2026" },
  { title: "Ideas para reformar un baño pequeño en Argüelles", excerpt: "Los pisos de Argüelles tienen baños pequeños. Te mostramos cómo sacarles el máximo partido con una reforma inteligente.", href: "/blog/reformar-bano-pequeno-arguelles", date: "20 febrero 2026" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "580px" }}>
        <img src={HERO_IMG} alt="Reforma de baño en Madrid" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.6) 100%)" }} />
        <div className="relative container flex flex-col justify-end h-full py-16" style={{ minHeight: "580px" }}>
          <div className="max-w-2xl">
            <div className="inline-block mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white" style={{ backgroundColor: "var(--brand-red)" }}>
              Argüelles · Moncloa · Madrid
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Reforma de Baño en Madrid<br />
              <span style={{ color: "var(--brand-red)" }}>desde 1.199€</span>
            </h1>
            <p className="text-lg text-white mb-8" style={{ opacity: 0.9, maxWidth: "520px" }}>
              Especialistas en reforma integral, cambio de bañera por ducha y mamparas. Presupuesto gratuito en 24 horas. Obra en 48 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/presupuesto" className="btn-primary text-center">
                Solicitar presupuesto gratis
              </Link>
              <a href="tel:910123456" className="flex items-center justify-center gap-2 btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.6)" }}>
                <Phone size={16} /> 910 12 34 56
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle title="Nuestros Servicios de Reforma de Baño" subtitle="Trabajamos en Argüelles, Moncloa y toda la ciudad de Madrid con los mejores materiales y garantía de 5 años." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="service-card group no-underline block">
                <div className="overflow-hidden" style={{ height: "200px" }}>
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--brand-red)" }}>{s.price}</div>
                  <h3 className="font-semibold mb-2 text-base leading-snug" style={{ color: "var(--brand-heading)" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--brand-text)" }}>{s.desc}</p>
                  <span className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--brand-red)" }}>
                    Ver más <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTRICAS ── */}
      <section className="py-14" style={{ backgroundColor: "var(--brand-light)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="text-4xl font-bold mb-1" style={{ color: "var(--brand-red)" }}>{m.value}</div>
                <div className="text-sm font-medium" style={{ color: "var(--brand-text)" }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FORMULARIO ── */}
      <ContactForm title="Pide tu presupuesto sin compromiso" subtitle="Cuéntanos tu proyecto y te respondemos en menos de 24 horas con un presupuesto detallado y sin sorpresas." />

      {/* ── DIFERENCIADORES ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle title="¿Por qué elegirnos?" subtitle="Más de 500 baños reformados en Madrid avalan nuestra experiencia y compromiso con la calidad." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((d) => (
              <div key={d.title} className="flex gap-4">
                <div className="shrink-0 mt-1">{d.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1 text-base" style={{ color: "var(--brand-heading)" }}>{d.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--brand-text)" }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROYECTOS ── */}
      <section className="py-16" style={{ backgroundColor: "var(--brand-light)" }}>
        <div className="container">
          <SectionTitle title="Proyectos Realizados" subtitle="Trabajos reales en pisos de Argüelles, Moncloa y Madrid centro." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[HERO_IMG, CAMBIO_IMG, ARGUELLES_IMG, GALLERY_IMG].map((img, i) => (
              <div key={i} className="overflow-hidden" style={{ borderRadius: "4px", aspectRatio: "1/1" }}>
                <img src={img} alt={`Proyecto de reforma de baño ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/proyectos" className="btn-outline">Ver todos los proyectos</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle title="Lo que dicen nuestros clientes" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 border border-gray-100" style={{ borderRadius: "4px" }}>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="var(--brand-red)" style={{ color: "var(--brand-red)" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4 italic" style={{ color: "var(--brand-text)" }}>"{t.text}"</p>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "var(--brand-heading)" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "var(--brand-red)" }}>{t.zone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="py-16" style={{ backgroundColor: "var(--brand-light)" }}>
        <div className="container">
          <SectionTitle title="Últimas entradas del blog" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {blogPosts.map((p) => (
              <Link key={p.href} href={p.href} className="bg-white no-underline block service-card">
                <div className="p-6">
                  <div className="text-xs mb-3" style={{ color: "var(--brand-red)" }}>{p.date}</div>
                  <h3 className="font-semibold mb-3 text-base leading-snug" style={{ color: "var(--brand-heading)" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--brand-text)" }}>{p.excerpt}</p>
                  <span className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--brand-red)" }}>
                    Leer más <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog" className="btn-outline">Ver todos los artículos</Link>
          </div>
        </div>
      </section>

      {/* ── PRE-FOOTER ── */}
      <section className="py-12" style={{ backgroundColor: "var(--brand-light)" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8" style={{ borderRadius: "4px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.08)" }}>
            <div className="md:w-1/3 shrink-0">
              <img src={GALLERY_IMG} alt="Contacta con Reformas Baño Madrid Pro" className="w-full object-cover" style={{ borderRadius: "4px", maxHeight: "200px" }} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--brand-heading)" }}>Contacta con Reformas Baño Madrid Pro</h3>
              <p className="text-sm mb-4" style={{ color: "var(--brand-text)" }}>Estamos disponibles de lunes a viernes de 9:00 a 19:00 h y sábados de 10:00 a 14:00 h.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:910123456" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--brand-red)" }}>
                  <Phone size={14} /> 910 12 34 56
                </a>
                <a href="mailto:info@reformasbanomadridpro.es" className="text-sm" style={{ color: "var(--brand-text)" }}>
                  info@reformasbanomadridpro.es
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
