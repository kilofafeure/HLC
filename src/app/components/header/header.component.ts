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
  isDarkMode: boolean = true

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  switchTheme() {
    if (!this.isDarkMode) {
      this.isDarkMode = true;
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
        this.isDarkMode = false  
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
  }
}
