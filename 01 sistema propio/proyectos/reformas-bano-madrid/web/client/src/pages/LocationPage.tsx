/* ============================================================
   LocationPage.tsx — Página de zona local
   Doc A 2.6 · Doc C Layout-Map 2.3
   ============================================================ */
import { Link } from "wouter";
import { CheckCircle, Phone, MapPin, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import SectionTitle from "@/components/SectionTitle";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-homepage-CpBHWLohyRwJUcBfNFcFAa.webp";
const CAMBIO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-cambio-banera-EZM3WzYHDMbet3SY4CtKg4.webp";
const REFORMA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-reforma-integral-PtkybgjiNmqgdLfcNLHh8K.webp";
const ARGUELLES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-arguelles-g4sPkhdTuAwopFWkTx5iKu.webp";
const GALLERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/bathroom-gallery-1-Uvk9yuCwaxcjRzCnVZQ6gX.webp";

interface LocationData {
  title: string;
  subtitle: string;
  heroImg: string;
  intro: string;
  localContext: string;
  services: { title: string; href: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  galleryImgs: string[];
}

const locationsData: Record<string, LocationData> = {
  madrid: {
    title: "Reformas de Baño en Madrid",
    subtitle: "Empresa especializada en reforma de baños en Madrid. Más de 500 baños reformados en toda la capital.",
    heroImg: REFORMA_IMG,
    intro: "Somos una empresa de reformas de baños con sede en Madrid y más de 15 años de experiencia en toda la capital. Realizamos reformas integrales, cambios de bañera por ducha, instalación de mamparas y muebles a medida en todos los distritos de Madrid.",
    localContext: "Madrid es una ciudad con una gran variedad de tipologías de vivienda: desde pisos modernos en el Ensanche hasta edificios históricos del siglo XIX en el centro. Conocemos las particularidades de cada zona y sabemos cómo afrontar los retos que plantea cada tipo de edificio.",
    services: [
      { title: "Reforma Integral de Baño", href: "/servicios/reforma-integral-bano", desc: "Transformamos tu baño de arriba abajo en Madrid." },
      { title: "Cambio Bañera por Ducha", href: "/servicios/cambio-banera-por-ducha", desc: "Baño nuevo en 48 horas en cualquier punto de Madrid." },
      { title: "Instalación de Mamparas", href: "/servicios/instalacion-mamparas", desc: "Mamparas de vidrio templado con instalación el mismo día." },
      { title: "Muebles de Baño a Medida", href: "/servicios/muebles-bano-medida", desc: "Diseño y fabricación a medida para tu baño en Madrid." },
      { title: "Reforma Sin Obra", href: "/servicios/reforma-sin-obra", desc: "Renueva tu baño sin polvo ni escombros en Madrid." },
    ],
    faqs: [
      { question: "¿Cuánto cuesta reformar un baño en Madrid?", answer: "El precio de una reforma de baño en Madrid varía según el tipo de reforma. Un cambio de bañera por ducha parte desde 1.199€. Una reforma integral parte desde 6.995€. Te damos un presupuesto cerrado sin sorpresas." },
      { question: "¿En qué zonas de Madrid trabajáis?", answer: "Trabajamos en toda la ciudad de Madrid, aunque nos especializamos en los barrios de Argüelles, Moncloa, Ciudad Universitaria, Chamberí, Salamanca y Centro." },
      { question: "¿Cuánto tiempo tarda una reforma de baño en Madrid?", answer: "Depende del tipo de reforma. Un cambio de bañera por ducha se realiza en 48 horas. Una reforma integral tarda entre 7 y 15 días laborables." },
    ],
    galleryImgs: [HERO_IMG, CAMBIO_IMG, ARGUELLES_IMG, GALLERY_IMG],
  },
  moncloa: {
    title: "Reformas de Baño en Moncloa",
    subtitle: "Especialistas en reforma de baños en el distrito Moncloa-Aravaca. Conocemos los edificios del barrio.",
    heroImg: REFORMA_IMG,
    intro: "Somos especialistas en reforma de baños en Moncloa y el distrito Moncloa-Aravaca. Llevamos más de 15 años trabajando en este distrito y conocemos perfectamente las características de sus edificios: desde los bloques de los años 60 hasta las viviendas más modernas.",
    localContext: "El distrito Moncloa-Aravaca incluye barrios como Argüelles, Ciudad Universitaria, Valdezarza y Aravaca. Es una zona con una gran variedad de tipologías de vivienda, desde pisos pequeños de estudiantes hasta grandes apartamentos familiares. En todos ellos hemos realizado reformas de baño con excelentes resultados.",
    services: [
      { title: "Reforma Integral en Moncloa", href: "/servicios/reforma-integral-bano", desc: "Reforma completa de baño en el distrito Moncloa-Aravaca." },
      { title: "Cambio Bañera por Ducha en Moncloa", href: "/servicios/cambio-banera-por-ducha", desc: "Servicio exprés en 48 horas en Moncloa." },
      { title: "Mamparas en Moncloa", href: "/servicios/instalacion-mamparas", desc: "Instalación de mamparas en viviendas de Moncloa." },
      { title: "Muebles a Medida en Moncloa", href: "/servicios/muebles-bano-medida", desc: "Muebles de baño adaptados a los espacios de Moncloa." },
    ],
    faqs: [
      { question: "¿Trabajáis en todo el distrito Moncloa-Aravaca?", answer: "Sí, trabajamos en todos los barrios del distrito Moncloa-Aravaca: Argüelles, Ciudad Universitaria, Valdezarza, Valdemarín, El Plantío y Aravaca." },
      { question: "¿Tenéis experiencia con los edificios antiguos de Moncloa?", answer: "Sí, tenemos amplia experiencia con los edificios de los años 50 y 60 que son habituales en Moncloa. Conocemos sus particularidades en fontanería y estructura." },
      { question: "¿Cuánto cuesta reformar un baño en Moncloa?", answer: "Los precios son los mismos que en el resto de Madrid. Un cambio de bañera por ducha parte desde 1.199€ y una reforma integral desde 6.995€." },
    ],
    galleryImgs: [REFORMA_IMG, HERO_IMG, CAMBIO_IMG, GALLERY_IMG],
  },
  arguelles: {
    title: "Reformas de Baño en Argüelles",
    subtitle: "Especialistas en reforma de baños en Argüelles. Conocemos los pisos del barrio y sus particularidades.",
    heroImg: ARGUELLES_IMG,
    intro: "Somos la empresa de reforma de baños de referencia en Argüelles. Llevamos más de 15 años trabajando en este barrio y hemos reformado más de 200 baños en sus edificios. Conocemos perfectamente las características de los pisos de Argüelles: techos altos, distribuciones clásicas y fontanería de época.",
    localContext: "Argüelles es uno de los barrios más elegantes de Madrid, con edificios de principios del siglo XX y pisos de gran tamaño con techos altos y molduras. Sus baños suelen ser grandes pero con instalaciones antiguas que necesitan una renovación completa. Somos especialistas en adaptar los baños clásicos de Argüelles a las necesidades actuales manteniendo el carácter del edificio.",
    services: [
      { title: "Reforma Integral en Argüelles", href: "/servicios/reforma-integral-bano", desc: "Reforma completa respetando el carácter de los edificios de Argüelles." },
      { title: "Cambio Bañera por Ducha en Argüelles", href: "/servicios/cambio-banera-por-ducha", desc: "Servicio exprés en 48 horas en Argüelles." },
      { title: "Mamparas en Argüelles", href: "/servicios/instalacion-mamparas", desc: "Mamparas a medida para los baños grandes de Argüelles." },
      { title: "Muebles a Medida en Argüelles", href: "/servicios/muebles-bano-medida", desc: "Muebles de baño a medida para los espacios singulares de Argüelles." },
    ],
    faqs: [
      { question: "¿Tenéis experiencia con los pisos clásicos de Argüelles?", answer: "Sí, somos especialistas en los edificios de Argüelles. Conocemos sus particularidades: fontanería antigua, distribuciones clásicas, techos altos y materiales de época. Sabemos cómo trabajar en ellos sin sorpresas." },
      { question: "¿Cuánto cuesta reformar un baño en Argüelles?", answer: "Los precios son los mismos que en el resto de Madrid. Un cambio de bañera por ducha parte desde 1.199€ y una reforma integral desde 6.995€. En Argüelles, los baños suelen ser más grandes, lo que puede influir en el precio final." },
      { question: "¿Trabajáis en comunidades de vecinos de Argüelles?", answer: "Sí, trabajamos tanto en viviendas particulares como en comunidades de vecinos. Tenemos experiencia en la gestión de obras en edificios con normas de comunidad estrictas." },
    ],
    galleryImgs: [ARGUELLES_IMG, HERO_IMG, GALLERY_IMG, CAMBIO_IMG],
  },
};

interface LocationPageProps {
  zone: string;
}

export default function LocationPage({ zone }: LocationPageProps) {
  const data = locationsData[zone] || locationsData["madrid"];

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        <img src={data.heroImg} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />
        <div className="relative container flex flex-col justify-end h-full py-14" style={{ minHeight: "420px" }}>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={14} style={{ color: "var(--brand-red)" }} />
              <span className="text-xs font-semibold uppercase tracking-widest text-white" style={{ opacity: 0.8 }}>Zona de actuación</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{data.title}</h1>
            <p className="text-base text-white mb-6" style={{ opacity: 0.9 }}>{data.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/presupuesto" className="btn-primary text-center">Solicitar presupuesto</Link>
              <a href="tel:910123456" className="flex items-center justify-center gap-2 btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.6)" }}>
                <Phone size={14} /> 910 12 34 56
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + contexto local */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--brand-heading)" }}>Empresa de Reformas de Baño en {zone === "arguelles" ? "Argüelles" : zone === "moncloa" ? "Moncloa" : "Madrid"}</h2>
              <div className="section-title-divider" style={{ margin: "0 0 1.5rem 0" }} />
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--brand-text)" }}>{data.intro}</p>
              <p className="text-base leading-relaxed" style={{ color: "var(--brand-text)" }}>{data.localContext}</p>
            </div>
            <div>
              <img src={data.heroImg} alt={data.title} className="w-full object-cover" style={{ borderRadius: "4px", maxHeight: "380px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios en la zona */}
      <section className="py-16" style={{ backgroundColor: "var(--brand-light)" }}>
        <div className="container">
          <SectionTitle title={`Nuestros servicios en ${zone === "arguelles" ? "Argüelles" : zone === "moncloa" ? "Moncloa" : "Madrid"}`} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((s) => (
              <Link key={s.href} href={s.href} className="bg-white p-6 no-underline block service-card">
                <h3 className="font-semibold mb-2 text-base" style={{ color: "var(--brand-heading)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--brand-text)" }}>{s.desc}</p>
                <span className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--brand-red)" }}>
                  Ver más <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario */}
      <ContactForm title={`Pide presupuesto en ${zone === "arguelles" ? "Argüelles" : zone === "moncloa" ? "Moncloa" : "Madrid"}`} />

      {/* Galería */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle title="Proyectos realizados en la zona" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.galleryImgs.map((img, i) => (
              <div key={i} className="overflow-hidden" style={{ borderRadius: "4px", aspectRatio: "1/1" }}>
                <img src={img} alt={`Proyecto ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQ items={data.faqs} />

      <Footer />
    </div>
  );
}
