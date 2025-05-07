import { Component } from "@angular/core"
import { NgFor } from "@angular/common"

interface Product {
  name: string
  description: string
  image: string
}

@Component({
  selector: "app-products-section",
  standalone: true,
  imports: [NgFor],
  template: `
    <section id="productos" class="w-full py-12 md:py-24 bg-green-50">
      <div class="container">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold tracking-tight text-green-800 mb-4">Nuestros Productos</h2>
          <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cultivamos una amplia variedad de productos ecológicos, siempre respetando los ciclos naturales y las
            temporadas de cada cultivo.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div *ngFor="let product of products" class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="aspect-video relative">
              <img [src]="product.image" [alt]="product.name" class="w-full h-full object-cover" />
            </div>
            <div class="p-4">
              <h3 class="text-xl font-semibold text-green-700 mb-2">{{ product.name }}</h3>
              <p class="text-muted-foreground">{{ product.description }}</p>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-muted-foreground italic">
            * Todos nuestros productos varían según la temporada, garantizando siempre la máxima frescura y calidad.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class ProductsSectionComponent {
  products: Product[] = [
    {
      name: "Verduras de Temporada",
      description: "Lechugas, tomates, pimientos, berenjenas, calabacines y más, según la temporada.",
      image: "/assets/images/verduras.jpg",
    },
    {
      name: "Frutas Ecológicas",
      description: "Fresas, manzanas, peras y otras frutas cultivadas sin productos químicos.",
      image: "/assets/images/frutas.jpg",
    },
    {
      name: "Hierbas Aromáticas",
      description: "Albahaca, romero, tomillo y otras hierbas frescas para dar sabor a tus platos.",
      image: "/assets/images/hierbas.jpg",
    },
    {
      name: "Productos Elaborados",
      description: "Mermeladas, conservas y otros productos elaborados con nuestras materias primas.",
      image: "/assets/images/elaborados.jpg",
    },
  ]
}
