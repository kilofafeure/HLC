import type { Routes } from "@angular/router"

export const routes: Routes = [
  { path: "", redirectTo: "/inicio", pathMatch: "full" },
  { path: "inicio", loadComponent: () => import("./pages/home/home.component").then((m) => m.HomeComponent) },
  {
    path: "sobre-nosotros",
    loadComponent: () =>
      import("./pages/sobre-nosotros/sobre-nosotros.component").then((m) => m.SobreNosotrosComponent),
  },
  {
    path: "beneficios",
    loadComponent: () => import("./pages/beneficios/beneficios.component").then((m) => m.BeneficiosComponent),
  },
  // { path: "galeria", loadComponent: () => import("./pages/galeria/galeria.component").then((m) => m.GaleriaComponent) },
  // {
  //   path: "productos",
  //   loadComponent: () => import("./pages/productos/productos.component").then((m) => m.ProductosComponent),
  // },
  {
    path: "contacto",
    loadComponent: () => import("./pages/contacto/contacto.component").then((m) => m.ContactoComponent),
  },
  { path: "**", redirectTo: "/inicio" },
]
