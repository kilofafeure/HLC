import { Component } from "@angular/core"
import { RouterLink, RouterLinkActive } from "@angular/router"
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  menuItems = [
    { path: "/inicio", label: "Inicio" },
    { path: "/sobre-nosotros", label: "Sobre Nosotros" },
    { path: "/beneficios", label: "Beneficios" },
    // { path: "/galeria", label: "Galería" },
    // { path: "/productos", label: "Productos" },
    { path: "/contacto", label: "Contacto/FAQs" },
    { path: "routeShop", label: "Tienda" },
  ]

  isMenuOpen = false

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
}
