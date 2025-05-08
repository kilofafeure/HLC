import { Component } from "@angular/core"

@Component({
  selector: "app-galeria",
  standalone: true,
  imports: [],
  templateUrl: "./galeria.component.html",
  styleUrl: "./galeria.component.css",
})
export class GaleriaComponent {
  images = [
    {
      id: 1,
      title: "Huerta en primavera",
      description: "Nuestros cultivos floreciendo en primavera",
      category: "huerta",
    },
    {
      id: 2,
      title: "Tomates ecológicos",
      description: "Variedad de tomates cultivados sin pesticidas",
      category: "productos",
    },
    { id: 3, title: "Trabajo en la huerta", description: "Nuestro equipo trabajando la tierra", category: "equipo" },
    { id: 4, title: "Lechugas frescas", description: "Lechugas recién cosechadas", category: "productos" },
    {
      id: 5,
      title: "Sistema de riego",
      description: "Sistema de riego por goteo para ahorrar agua",
      category: "instalaciones",
    },
    {
      id: 6,
      title: "Compostaje",
      description: "Área de compostaje para fertilizante natural",
      category: "instalaciones",
    },
    { id: 7, title: "Calabacines", description: "Calabacines en crecimiento", category: "productos" },
    {
      id: 8,
      title: "Visita escolar",
      description: "Niños aprendiendo sobre agricultura ecológica",
      category: "visitas",
    },
    { id: 9, title: "Huerta en verano", description: "Vista panorámica de la huerta en verano", category: "huerta" },
  ]

  activeCategory = "todos"

  setCategory(category: string) {
    this.activeCategory = category
  }

  get filteredImages() {
    if (this.activeCategory === "todos") {
      return this.images
    }
    return this.images.filter((image) => image.category === this.activeCategory)
  }
}
