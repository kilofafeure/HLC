import { Component, signal } from "@angular/core"
import { NgIf } from "@angular/common"

@Component({
  selector: "app-header",
  standalone: true,
  imports: [NgIf],
  template: `
    <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container flex h-16 items-center justify-between">
        <a href="/" class="flex items-center space-x-2">
          <span class="text-xl font-bold text-green-700">Verde Vida</span>
        </a>

        <nav class="hidden md:flex gap-6">
          <a href="#sobre-nosotros" class="text-sm font-medium hover:text-green-700 transition-colors">
            Sobre Nosotros
          </a>
          <a href="#productos" class="text-sm font-medium hover:text-green-700 transition-colors">
            Productos
          </a>
          <a href="#galeria" class="text-sm font-medium hover:text-green-700 transition-colors">
            Galería
          </a>
          <a href="#beneficios" class="text-sm font-medium hover:text-green-700 transition-colors">
            Beneficios
          </a>
          <a href="#contacto" class="text-sm font-medium hover:text-green-700 transition-colors">
            Contacto
          </a>
        </nav>

        <button class="md:hidden" (click)="isMenuOpen.set(!isMenuOpen())">
          <svg *ngIf="isMenuOpen()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
            <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
          </svg>
          <svg *ngIf="!isMenuOpen()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
            <line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
          <span class="sr-only">Toggle menu</span>
        </button>
      </div>

      <div *ngIf="isMenuOpen()" class="container md:hidden py-4">
        <nav class="flex flex-col space-y-4">
          <a
            href="#sobre-nosotros"
            class="text-sm font-medium hover:text-green-700 transition-colors"
            (click)="isMenuOpen.set(false)"
          >
            Sobre Nosotros
          </a>
          <a
            href="#productos"
            class="text-sm font-medium hover:text-green-700 transition-colors"
            (click)="isMenuOpen.set(false)"
          >
            Productos
          </a>
          <a
            href="#galeria"
            class="text-sm font-medium hover:text-green-700 transition-colors"
            (click)="isMenuOpen.set(false)"
          >
            Galería
          </a>
          <a
            href="#beneficios"
            class="text-sm font-medium hover:text-green-700 transition-colors"
            (click)="isMenuOpen.set(false)"
          >
            Beneficios
          </a>
          <a
            href="#contacto"
            class="text-sm font-medium hover:text-green-700 transition-colors"
            (click)="isMenuOpen.set(false)"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  isMenuOpen = signal(false)
}
