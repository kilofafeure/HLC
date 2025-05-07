import { Component } from "@angular/core"
import { NgFor } from "@angular/common"

interface Benefit {
  icon: string
  title: string
  description: string
}

@Component({
  selector: "app-benefits-section",
  standalone: true,
  imports: [NgFor],
  template: `
    <section id="beneficios" class="w-full py-12 md:py-24 bg-green-50">
      <div class="container">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold tracking-tight text-green-800 mb-4">
            Beneficios de la Agricultura Ecológica
          </h2>
          <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
            La agricultura ecológica no solo produce alimentos más saludables, sino que también contribuye a la
            protección del medio ambiente y al bienestar social.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let benefit of benefits" class="bg-white p-6 rounded-lg shadow-md">
            <div class="mb-4" [innerHTML]="benefit.icon"></div>
            <h3 class="text-xl font-semibold text-green-700 mb-2">{{ benefit.title }}</h3>
            <p class="text-muted-foreground">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class BenefitsSectionComponent {
  benefits: Benefit[] = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 text-green-600">
              <path d="M12 2L7.5 6.5M7.5 6.5C5 9 5 12.5 7.5 15M7.5 6.5L7 7M17.5 17.5C20 15 20 11.5 17.5 9M17.5 17.5L17 17M17.5 17.5L12 22M12 22L7.5 17.5M12 22L12.5 21.5M7.5 17.5C5 15 5 11.5 7.5 9M7.5 17.5L7 17M7.5 9L7 9.5M17.5 9C20 11.5 20 15 17.5 17.5M17.5 9L17 9.5"></path>
            </svg>`,
      title: "Alimentos más Saludables",
      description: "Los productos ecológicos contienen más nutrientes y están libres de residuos químicos nocivos.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 text-green-600">
              <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
            </svg>`,
      title: "Protección del Agua",
      description: "La agricultura ecológica evita la contaminación de acuíferos y cursos de agua.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 text-green-600">
              <circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
            </svg>`,
      title: "Energía Renovable",
      description: "Utilizamos energías limpias y renovables en nuestros procesos de cultivo.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 text-green-600">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>`,
      title: "Mejor Sabor",
      description: "Los alimentos ecológicos conservan todo su sabor natural y auténtico.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 text-green-600">
              <path d="M8 3 6 21"></path><path d="M18 14v7"></path><path d="M18 14c-1.5 0-3.5-2-3.5-6 0-4 2-7.5 3.5-7.5s3.5 3.5 3.5 7.5c0 4-2 6-3.5 6Z"></path><path d="M10 13c1.5 0 3.5-2 3.5-6 0-4-2-7.5-3.5-7.5S6.5 3 6.5 7c0 4 2 6 3.5 6Z"></path><path d="M16 21H2"></path>
            </svg>`,
      title: "Economía Circular",
      description: "Aprovechamos todos los recursos y minimizamos los residuos.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 text-green-600">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>`,
      title: "Apoyo Local",
      description: "Fomentamos la economía local y el desarrollo rural sostenible.",
    },
  ]
}
