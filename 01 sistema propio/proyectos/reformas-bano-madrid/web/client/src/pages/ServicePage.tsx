/* ============================================================
   ServicePage.tsx — Página de servicio genérica
   Doc A 2.6 · Doc C Layout-Map 2.2
   ============================================================ */
import { Link } from "wouter";
import { CheckCircle, Phone, Clock, Shield, Star, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import SectionTitle from "@/components/SectionTitle";

interface ServiceData {
  title: string;
  subtitle: string;
  heroImg: string;
  price: string;
  description: string;
  benefits: string[];
  includes: string[];
  faqs: { question: string; answer: string }[];
  galleryImgs: string[];
}

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-homepage-CpBHWLohyRwJUcBfNFcFAa.webp";
const CAMBIO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-cambio-banera-EZM3WzYHDMbet3SY4CtKg4.webp";
const REFORMA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-reforma-integral-PtkybgjiNmqgdLfcNLHh8K.webp";
const ARGUELLES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-arguelles-g4sPkhdTuAwopFWkTx5iKu.webp";
const GALLERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/bathroom-gallery-1-Uvk9yuCwaxcjRzCnVZQ6gX.webp";

const servicesData: Record<string, ServiceData> = {
  "reforma-integral-bano": {
    title: "Reforma Integral de Baño en Madrid",
    subtitle: "Transformamos tu baño de arriba abajo con diseño personalizado, materiales de calidad y garantía de 5 años.",
    heroImg: REFORMA_IMG,
    price: "desde 6.995€ +IVA",
    description: "Somos especialistas en reforma integral de baños en Madrid. Nos encargamos de todo el proceso: desde el diseño en 3D hasta la entrega de llaves, incluyendo fontanería, electricidad, alicatado, instalación de sanitarios y acabados. Trabajamos principalmente en Argüelles, Moncloa y toda la ciudad de Madrid.",
    benefits: [
      "Diseño personalizado en 3D antes de empezar",
      "Fontanería y electricidad incluidas",
      "Alicatado con porcelánico de gran formato",
      "Instalación de sanitarios y griferías",
      "Retirada de escombros a punto limpio",
      "Garantía completa de 5 años",
    ],
    includes: [
      "Visita y presupuesto gratuito",
      "Proyecto en 3D sin compromiso",
      "Demolición y retirada de escombros",
      "Impermeabilización y solera",
      "Instalación de fontanería y desagüe",
      "Alicatado suelo y paredes",
      "Instalación de sanitarios",
      "Instalación de griferías",
      "Mampara o cortina de ducha",
      "Mueble de baño e iluminación",
    ],
    faqs: [
      { question: "¿Cuánto tiempo tarda una reforma integral de baño?", answer: "Una reforma integral de baño en Madrid suele durar entre 7 y 15 días laborables según el tamaño del baño y los materiales elegidos. En Reformas Baño Madrid Pro nos comprometemos a cumplir los plazos acordados." },
      { question: "¿Qué precio tiene una reforma integral de baño en Madrid?", answer: "El precio de una reforma integral de baño en Madrid parte desde 6.995€ +IVA para baños estándar. El precio final depende del tamaño, los materiales y los acabados elegidos. Te damos un presupuesto cerrado sin sorpresas." },
      { question: "¿Incluís el diseño en 3D?", answer: "Sí. Antes de empezar la obra te presentamos un diseño en 3D de tu nuevo baño para que puedas ver el resultado final y hacer los cambios que quieras antes de empezar." },
      { question: "¿Trabajáis en pisos de Argüelles y Moncloa?", answer: "Sí, somos especialistas en reformas de baños en Argüelles, Moncloa y toda la ciudad de Madrid. Conocemos bien las características de los edificios de estos barrios." },
    ],
    galleryImgs: [HERO_IMG, CAMBIO_IMG, ARGUELLES_IMG, GALLERY_IMG],
  },
  "cambio-banera-por-ducha": {
    title: "Cambio de Bañera por Ducha en Madrid",
    subtitle: "Baño nuevo en menos de 48 horas. Plato extraplano de 3cm, mampara de vidrio templado y acabados incluidos.",
    heroImg: CAMBIO_IMG,
    price: "desde 1.199€ +IVA",
    description: "El cambio de bañera por ducha es el servicio más demandado en Madrid. En Reformas Baño Madrid Pro lo realizamos en un solo día de trabajo, sin obras aparatosas y con un resultado impecable. Incluye plato de ducha extraplano de 3cm, mampara de vidrio templado de 6mm y todos los acabados.",
    benefits: [
      "Instalación en menos de 48 horas",
      "Plato extraplano de 3cm antideslizante clase 3",
      "Mampara de vidrio templado 6-8mm",
      "Modificación de desagüe incluida",
      "Sellado y estanqueidad garantizados",
      "Garantía completa de 5 años",
    ],
    includes: [
      "Retirada de la bañera antigua",
      "Modificación del desagüe",
      "Instalación del plato de ducha extraplano",
      "Instalación de la mampara de vidrio",
      "Alicatado de la zona de ducha si es necesario",
      "Sellado perimetral con silicona",
      "Limpieza y retirada de escombros",
    ],
    faqs: [
      { question: "¿Cuánto cuesta cambiar la bañera por una ducha en Madrid?", answer: "El precio del cambio de bañera por ducha en Madrid parte desde 1.199€ +IVA. Este precio incluye la retirada de la bañera, el plato de ducha extraplano, la mampara y todos los acabados." },
      { question: "¿En cuánto tiempo se hace el cambio de bañera por ducha?", answer: "En la mayoría de los casos completamos el cambio de bañera por ducha en un solo día de trabajo. En casos más complejos puede extenderse a dos días." },
      { question: "¿Qué plato de ducha instaláis?", answer: "Instalamos platos de ducha extraplanos de 3cm de altura, antideslizantes clase 3, en medidas estándar de 160x70cm o a medida. Trabajamos con marcas de primera calidad como Roca y Porcelanosa." },
      { question: "¿Hay que romper el alicatado para cambiar la bañera?", answer: "En la mayoría de los casos sí es necesario retirar algunas piezas del alicatado para instalar correctamente el plato de ducha y la mampara. Siempre intentamos minimizar la obra y dejar el baño como nuevo." },
    ],
    galleryImgs: [CAMBIO_IMG, HERO_IMG, GALLERY_IMG, ARGUELLES_IMG],
  },
  "instalacion-mamparas": {
    title: "Instalación de Mamparas de Baño en Madrid",
    subtitle: "Mamparas de vidrio templado de 6-8mm con perfilería de aluminio. Instalación limpia y garantía de 5 años.",
    heroImg: GALLERY_IMG,
    price: "desde 499€ +IVA",
    description: "Instalamos mamparas de baño y ducha en Madrid con vidrio templado de seguridad de 6 a 8mm de grosor. Disponemos de una amplia gama de modelos: fijas, abatibles, correderas y plegables. Trabajamos con las mejores marcas del mercado y ofrecemos garantía de 5 años en todos nuestros trabajos.",
    benefits: [
      "Vidrio templado de seguridad 6-8mm",
      "Perfilería de aluminio de alta calidad",
      "Modelos fijos, abatibles y correderos",
      "Tratamiento antical incluido",
      "Instalación en un solo día",
      "Garantía de 5 años",
    ],
    includes: [
      "Visita de medición gratuita",
      "Asesoramiento en la elección del modelo",
      "Instalación por técnicos certificados",
      "Sellado perimetral con silicona",
      "Limpieza y retirada de materiales",
      "Garantía de 5 años",
    ],
    faqs: [
      { question: "¿Cuánto cuesta instalar una mampara de ducha en Madrid?", answer: "El precio de instalación de una mampara de ducha en Madrid parte desde 499€ +IVA incluyendo materiales e instalación. El precio varía según el modelo, las dimensiones y el tipo de vidrio." },
      { question: "¿Qué grosor de vidrio es el más recomendable?", answer: "Para uso doméstico recomendamos vidrio templado de 6mm, que ofrece una excelente relación calidad-precio. Para mamparas de mayor tamaño o uso intensivo, recomendamos 8mm." },
      { question: "¿Cuánto tiempo tarda la instalación?", answer: "La instalación de una mampara estándar se realiza en pocas horas. En el mismo día en que venimos a instalar ya puedes usar la ducha." },
    ],
    galleryImgs: [GALLERY_IMG, HERO_IMG, CAMBIO_IMG, ARGUELLES_IMG],
  },
  "muebles-bano-medida": {
    title: "Muebles de Baño a Medida en Madrid",
    subtitle: "Diseñamos y fabricamos muebles de baño completamente adaptados a tu espacio, estilo y necesidades.",
    heroImg: ARGUELLES_IMG,
    price: "desde 799€ +IVA",
    description: "Fabricamos muebles de baño a medida en Madrid para aprovechar al máximo cada centímetro de tu baño. Trabajamos con materiales de alta calidad: madera lacada, roble natural, melamina y lacado mate. Incluimos el diseño, la fabricación y la instalación.",
    benefits: [
      "Diseño personalizado a medida",
      "Fabricación en madera de alta calidad",
      "Acabados en lacado, roble o melamina",
      "Instalación incluida en el precio",
      "Optimización máxima del espacio",
      "Garantía de 5 años",
    ],
    includes: [
      "Visita y toma de medidas gratuita",
      "Diseño en 3D sin compromiso",
      "Fabricación a medida",
      "Instalación por técnicos especializados",
      "Instalación de lavabo e iluminación",
      "Garantía de 5 años",
    ],
    faqs: [
      { question: "¿Cuánto cuesta un mueble de baño a medida en Madrid?", answer: "El precio de un mueble de baño a medida en Madrid parte desde 799€ +IVA incluyendo diseño, fabricación e instalación. El precio varía según las dimensiones, el material y los acabados." },
      { question: "¿Cuánto tiempo tarda la fabricación?", answer: "El plazo habitual de fabricación es de 2 a 3 semanas desde la confirmación del pedido. La instalación se realiza en un solo día." },
      { question: "¿Qué materiales utilizáis?", answer: "Trabajamos con madera lacada en cualquier color RAL, roble natural, melamina y lacado mate. Todos nuestros materiales son resistentes a la humedad y aptos para uso en baños." },
    ],
    galleryImgs: [ARGUELLES_IMG, GALLERY_IMG, HERO_IMG, CAMBIO_IMG],
  },
  "reforma-sin-obra": {
    title: "Reforma de Baño Sin Obra en Madrid",
    subtitle: "Renueva tu baño sin polvo, sin ruido y sin escombros. Resultados en un solo día.",
    heroImg: HERO_IMG,
    price: "desde 899€ +IVA",
    description: "La reforma de baño sin obra es la solución perfecta para renovar tu baño sin los inconvenientes de una obra tradicional. Cubrimos el alicatado existente con nuevos revestimientos, sustituimos sanitarios y griferías y renovamos el aspecto completo del baño en un solo día y sin escombros.",
    benefits: [
      "Sin demolición ni escombros",
      "Sin polvo ni ruido excesivo",
      "Resultado en un solo día",
      "Precio muy competitivo",
      "Ideal para comunidades y alquileres",
      "Garantía de 5 años",
    ],
    includes: [
      "Recubrimiento del alicatado existente",
      "Sustitución de sanitarios",
      "Sustitución de griferías",
      "Renovación de silicona y juntas",
      "Limpieza y retirada de materiales",
      "Garantía de 5 años",
    ],
    faqs: [
      { question: "¿Qué es una reforma de baño sin obra?", answer: "Una reforma de baño sin obra consiste en renovar el aspecto del baño sin demoler el alicatado existente. Se utilizan técnicas de recubrimiento que permiten colocar nuevos materiales sobre los existentes, eliminando el polvo, el ruido y los escombros." },
      { question: "¿Es tan duradera como una reforma tradicional?", answer: "Sí, siempre que se realice correctamente con materiales de calidad. Ofrecemos garantía de 5 años en todos nuestros trabajos de reforma sin obra." },
      { question: "¿En cuánto tiempo se hace?", answer: "La mayoría de las reformas sin obra se completan en un solo día de trabajo, lo que permite usar el baño al día siguiente." },
    ],
    galleryImgs: [HERO_IMG, ARGUELLES_IMG, CAMBIO_IMG, GALLERY_IMG],
  },
};

interface ServicePageProps {
  slug: string;
}

export default function ServicePage({ slug }: ServicePageProps) {
  const data = servicesData[slug] || servicesData["reforma-integral-bano"];

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        <img src={data.heroImg} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.5)" }} />
        <div className="relative container flex flex-col justify-end h-full py-14" style={{ minHeight: "420px" }}>
          <div className="max-w-2xl">
            <div className="inline-block mb-3 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white" style={{ backgroundColor: "var(--brand-red)" }}>
              {data.price}
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

      {/* Descripción + beneficios */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--brand-heading)" }}>{data.title}</h2>
              <div className="section-title-divider" style={{ margin: "0 0 1.5rem 0" }} />
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--brand-text)" }}>{data.description}</p>
              <ul className="space-y-3">
                {data.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "var(--brand-red)" }} />
                    <span className="text-sm" style={{ color: "var(--brand-text)" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src={data.heroImg} alt={data.title} className="w-full object-cover" style={{ borderRadius: "4px", maxHeight: "420px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <ContactForm title="Solicita tu presupuesto" subtitle="Cuéntanos tu proyecto y te respondemos en menos de 24 horas." />

      {/* Qué incluye */}
      <section className="py-16" style={{ backgroundColor: "var(--brand-light)" }}>
        <div className="container">
          <SectionTitle title="Qué incluye el servicio" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {data.includes.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white p-4" style={{ borderRadius: "4px" }}>
                <CheckCircle size={16} style={{ color: "var(--brand-red)", flexShrink: 0 }} />
                <span className="text-sm" style={{ color: "var(--brand-text)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="py-14 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Clock size={32} style={{ color: "var(--brand-red)" }} />, title: "Rapidez", desc: "Plazos de obra cumplidos al 100%" },
              { icon: <Shield size={32} style={{ color: "var(--brand-red)" }} />, title: "Garantía 5 años", desc: "En materiales y mano de obra" },
              { icon: <Star size={32} style={{ color: "var(--brand-red)" }} />, title: "Financiación", desc: "Sin intereses, en cómodos plazos" },
            ].map((d) => (
              <div key={d.title} className="flex flex-col items-center gap-3">
                {d.icon}
                <h3 className="font-semibold" style={{ color: "var(--brand-heading)" }}>{d.title}</h3>
                <p className="text-sm" style={{ color: "var(--brand-text)" }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-16" style={{ backgroundColor: "var(--brand-light)" }}>
        <div className="container">
          <SectionTitle title="Fotos de trabajos realizados" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.galleryImgs.map((img, i) => (
              <div key={i} className="overflow-hidden" style={{ borderRadius: "4px", aspectRatio: "1/1" }}>
                <img src={img} alt={`Trabajo realizado ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQ items={data.faqs} />

      {/* Pre-footer */}
      <section className="py-10" style={{ backgroundColor: "var(--brand-light)" }}>
        <div className="container text-center">
          <p className="text-base mb-4" style={{ color: "var(--brand-text)" }}>¿Tienes dudas? Llámanos o escríbenos sin compromiso.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:910123456" className="btn-primary flex items-center gap-2 justify-center">
              <Phone size={14} /> 910 12 34 56
            </a>
            <Link href="/presupuesto" className="btn-outline">Solicitar presupuesto</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
