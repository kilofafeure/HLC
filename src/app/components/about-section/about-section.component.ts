import { Component } from "@angular/core"

@Component({
  selector: "app-about-section",
  standalone: true,
  template: `
    <section id="sobre-nosotros" class="w-full py-12 md:py-24 bg-white">
      <div class="container">
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <div class="md:w-1/2">
            <img
              src="/assets/images/huerta.jpg"
              alt="Huerta ecológica"
              class="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div class="md:w-1/2">
            <h2 class="text-3xl font-bold tracking-tight text-green-800 mb-6">Sobre Nuestra Huerta Ecológica</h2>
            <p class="text-lg text-muted-foreground mb-6">
              En Verde Vida, nos dedicamos a cultivar alimentos de la más alta calidad utilizando métodos ecológicos y
              sostenibles. Nuestra huerta, ubicada en un entorno natural privilegiado, lleva más de 15 años produciendo
              verduras, hortalizas y frutas libres de pesticidas y productos químicos.
            </p>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-green-600 mt-0.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path>
                </svg>
                <div>
                  <h3 class="font-medium">Cultivo 100% Ecológico</h3>
                  <p class="text-muted-foreground">Sin pesticidas ni fertilizantes químicos.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-green-600 mt-0.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path>
                </svg>
                <div>
                  <h3 class="font-medium">Productos de Temporada</h3>
                  <p class="text-muted-foreground">Respetamos los ciclos naturales de cultivo.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-green-600 mt-0.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path>
                </svg>
                <div>
                  <h3 class="font-medium">Sostenibilidad</h3>
                  <p class="text-muted-foreground">Prácticas agrícolas que respetan el medio ambiente.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-green-600 mt-0.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path>
                </svg>
                <div>
                  <h3 class="font-medium">Biodiversidad</h3>
                  <p class="text-muted-foreground">Fomentamos la diversidad de especies vegetales y animales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutSectionComponent {}
