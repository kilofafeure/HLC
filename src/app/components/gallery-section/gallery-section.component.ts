import { Component } from "@angular/core"
import { NgFor } from "@angular/common"

interface GalleryImage {
  src: string
  alt: string
}

@Component({
  selector: "app-gallery-section",
  standalone: true,
  imports: [NgFor],
  template: `
    <section id="galeria" class="w-full py-12 md:py-24 bg-white">
      <div class="container">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold tracking-tight text-green-800 mb-4">Galería</h2>
          <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubre nuestra huerta ecológica a través de imágenes que muestran nuestro trabajo diario y el resultado de
            nuestro compromiso con la agricultura sostenible.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let image of images" class="overflow-hidden rounded-lg shadow-md">
            <div class="aspect-[4/3] relative">
              <img
                [src]="image.src"
                [alt]="image.alt"
                class="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class GallerySectionComponent {
  images: GalleryImage[] = [
    {
      src: "/assets/images/gallery1.jpg",
      alt: "Cultivos de la huerta",
    },
    {
      src: "/assets/images/gallery2.jpg",
      alt: "Trabajando en la huerta",
    },
    {
      src: "/assets/images/gallery3.jpg",
      alt: "Productos recién cosechados",
    },
    {
      src: "/assets/images/gallery4.jpg",
      alt: "Instalaciones de la huerta",
    },
    {
      src: "/assets/images/gallery5.jpg",
      alt: "Sistema de riego sostenible",
    },
    {
      src: "/assets/images/gallery6.jpg",
      alt: "Biodiversidad en la huerta",
    },
  ]
}
