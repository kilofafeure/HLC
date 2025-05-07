import { Component } from "@angular/core"

@Component({
  selector: "app-hero",
  standalone: true,
  template: `
    <section class="w-full py-12 md:py-24 lg:py-32 bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center relative">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="container relative z-10 flex flex-col items-center text-center text-white">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
          Huerta Ecológica Verde Vida
        </h1>
        <p class="max-w-[700px] text-lg md:text-xl mb-8">
          Cultivamos alimentos frescos, saludables y respetuosos con el medio ambiente. Descubre el sabor auténtico de
          la naturaleza.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#productos" class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium">
            Nuestros Productos
          </a>
          <a href="#contacto" class="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/20">
            Contactar
          </a>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {}
