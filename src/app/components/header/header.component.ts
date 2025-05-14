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
    { path: "/contacto", label: "Contacto/FAQs" },
    { path: "Tienda", label: "Tienda" },
  ]

  isMenuOpen: boolean = false
  tipoModo: string = "Modo claro"

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  switchTheme(e: any) {
    if (e.target.checked) {
      this.tipoModo = "Modo oscuro";
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    else {
        this.tipoModo = "Modo claro";       
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }    
  }
}
