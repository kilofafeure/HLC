import { Component } from "@angular/core"
import { RouterLink, RouterLinkActive } from "@angular/router"

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  menuItems = [
    { path: "/inicio", label: "Inicio" },
    { path: "/sobre-nosotros", label: "Sobre Nosotros" },
    { path: "/beneficios", label: "Beneficios" },
    { path: "/galeria", label: "Galería" },
    { path: "/productos", label: "Productos" },
    { path: "/contacto", label: "Contacto/FAQs" },
  ]

  isMenuOpen = false

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
}
