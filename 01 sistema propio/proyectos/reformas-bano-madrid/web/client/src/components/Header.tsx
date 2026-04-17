/* ============================================================
   Header.tsx — Reformas de Baño Madrid Pro
   Doc C: Nav 14px/400, rojo en hover, teléfono der, logo izq
   ============================================================ */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Reforma Integral de Baño", href: "/servicios/reforma-integral-bano" },
      { label: "Cambio Bañera por Ducha", href: "/servicios/cambio-banera-por-ducha" },
      { label: "Instalación de Mamparas", href: "/servicios/instalacion-mamparas" },
      { label: "Muebles de Baño a Medida", href: "/servicios/muebles-bano-medida" },
      { label: "Reforma Sin Obra", href: "/servicios/reforma-sin-obra" },
    ],
  },
  {
    label: "Zonas",
    href: "/zonas",
    children: [
      { label: "Reformas de Baño en Madrid", href: "/zonas/madrid" },
      { label: "Reformas de Baño en Moncloa", href: "/zonas/moncloa" },
      { label: "Reformas de Baño en Argüelles", href: "/zonas/arguelles" },
    ],
  },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Blog", href: "/blog" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/presupuesto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  return (
    <>
      {/* Top bar */}
      <div style={{ backgroundColor: "var(--brand-dark)" }} className="text-white text-xs py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <span style={{ color: "rgba(255,255,255,0.7)" }}>Reformas de Baño en Madrid · Argüelles y Moncloa</span>
          <div className="flex items-center gap-6">
            <a href="mailto:info@reformasbanomadridpro.es" style={{ color: "rgba(255,255,255,0.7)" }} className="hover:text-white transition-colors">
              info@reformasbanomadridpro.es
            </a>
            <a href="tel:910123456" className="flex items-center gap-1 font-semibold" style={{ color: "var(--brand-red)" }}>
              <Phone size={12} /> 910 12 34 56
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="flex items-center gap-1">
              <span className="font-bold text-2xl" style={{ color: "var(--brand-heading)" }}>Reformas</span>
              <span className="font-bold text-2xl" style={{ color: "var(--brand-red)" }}>Baño</span>
            </div>
            <div className="hidden md:block text-xs font-medium leading-tight" style={{ color: "var(--brand-text)", opacity: 0.7 }}>
              <div>Madrid Pro</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium transition-colors py-2 inline-block"
                  style={{
                    color: location === link.href ? "var(--brand-red)" : "var(--brand-heading)",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-red)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = location === link.href ? "var(--brand-red)" : "var(--brand-heading)")}
                >
                  {link.label}
                  {link.children && <span className="ml-1 text-xs">▾</span>}
                </Link>

                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 bg-white shadow-lg border-t-2 min-w-56 z-50" style={{ borderTopColor: "var(--brand-red)" }}>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 text-sm transition-colors border-b border-gray-50"
                        style={{ color: "var(--brand-text)", fontFamily: "'Poppins', sans-serif", fontSize: "13px" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--brand-red)"; e.currentTarget.style.backgroundColor = "var(--brand-light)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--brand-text)"; e.currentTarget.style.backgroundColor = "transparent"; }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a href="tel:910123456" className="hidden md:flex items-center gap-2 btn-primary text-sm py-3 px-6">
              <Phone size={14} /> 910 12 34 56
            </a>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menú"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t" style={{ borderTopColor: "var(--brand-red)" }}>
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block px-6 py-4 font-medium border-b border-gray-100"
                  style={{ color: "var(--brand-heading)", fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-10 py-3 border-b border-gray-50"
                    style={{ color: "var(--brand-red)", fontFamily: "'Poppins', sans-serif", fontSize: "13px" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="p-4">
              <a href="tel:910123456" className="btn-primary w-full text-center block">
                Llamar ahora: 910 12 34 56
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
