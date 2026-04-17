/* ============================================================
   Footer.tsx — Reformas de Baño Madrid Pro
   Doc C: 3 columnas, fondo #0B0B0B, logo blanco
   ============================================================ */
import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--brand-darker)", color: "rgba(255,255,255,0.8)" }}>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Logo + datos */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="font-bold text-xl text-white">Reformas</span>
              <span className="font-bold text-xl" style={{ color: "var(--brand-red)" }}>Baño</span>
              <span className="font-bold text-xl text-white ml-1">Madrid Pro</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              Especialistas en reforma de baños en Madrid. Más de 15 años transformando baños en Argüelles, Moncloa y toda la capital.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "var(--brand-red)" }} />
                <span style={{ color: "rgba(255,255,255,0.7)" }}>Calle de la Princesa 45, 28008 Madrid</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} style={{ color: "var(--brand-red)" }} />
                <a href="tel:910123456" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>910 12 34 56</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} style={{ color: "var(--brand-red)" }} />
                <a href="mailto:info@reformasbanomadridpro.es" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>info@reformasbanomadridpro.es</a>
              </div>
            </div>
          </div>

          {/* Col 2: Conócenos */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Conócenos</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Quiénes somos", href: "/nosotros" },
                { label: "Proyectos realizados", href: "/proyectos" },
                { label: "Blog", href: "/blog" },
                { label: "Contacto", href: "/presupuesto" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Servicios */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Reforma Integral de Baño", href: "/servicios/reforma-integral-bano" },
                { label: "Cambio Bañera por Ducha", href: "/servicios/cambio-banera-por-ducha" },
                { label: "Instalación de Mamparas", href: "/servicios/instalacion-mamparas" },
                { label: "Muebles de Baño a Medida", href: "/servicios/muebles-bano-medida" },
                { label: "Reforma Sin Obra", href: "/servicios/reforma-sin-obra" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ backgroundColor: "rgba(0,0,0,0.4)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          <span>© 2026 Reformas Baño Madrid Pro. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso legal</Link>
            <Link href="/politica-privacidad" className="hover:text-white transition-colors">Política de privacidad</Link>
            <Link href="/politica-cookies" className="hover:text-white transition-colors">Política de cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
