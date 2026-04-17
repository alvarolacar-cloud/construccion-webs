/* ============================================================
   App.tsx — Reformas de Baño Madrid Pro
   Rutas: Doc A 2.3 — Árbol de URLs completo
   ============================================================ */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import LocationPage from "./pages/LocationPage";
import BlogPage from "./pages/BlogPage";
import NosotrosPage from "./pages/NosotrosPage";
import PresupuestoPage from "./pages/PresupuestoPage";
import ProyectosPage from "./pages/ProyectosPage";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      {/* Homepage */}
      <Route path="/" component={Home} />

      {/* Service Pages */}
      <Route path="/servicios/reforma-integral-bano">
        {() => <ServicePage slug="reforma-integral-bano" />}
      </Route>
      <Route path="/servicios/cambio-banera-por-ducha">
        {() => <ServicePage slug="cambio-banera-por-ducha" />}
      </Route>
      <Route path="/servicios/instalacion-mamparas">
        {() => <ServicePage slug="instalacion-mamparas" />}
      </Route>
      <Route path="/servicios/muebles-bano-medida">
        {() => <ServicePage slug="muebles-bano-medida" />}
      </Route>
      <Route path="/servicios/reforma-sin-obra">
        {() => <ServicePage slug="reforma-sin-obra" />}
      </Route>

      {/* Location Pages */}
      <Route path="/zonas/madrid">
        {() => <LocationPage zone="madrid" />}
      </Route>
      <Route path="/zonas/moncloa">
        {() => <LocationPage zone="moncloa" />}
      </Route>
      <Route path="/zonas/arguelles">
        {() => <LocationPage zone="arguelles" />}
      </Route>

      {/* Blog */}
      <Route path="/blog" component={BlogPage} />

      {/* Standalone pages */}
      <Route path="/nosotros" component={NosotrosPage} />
      <Route path="/presupuesto" component={PresupuestoPage} />
      <Route path="/proyectos" component={ProyectosPage} />

      {/* Fallback */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
