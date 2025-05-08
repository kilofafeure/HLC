import { Component } from "@angular/core"

@Component({
  selector: "app-productos",
  standalone: true,
  imports: [],
  templateUrl: "./productos.component.html",
  styleUrl: "./productos.component.css",
})
export class ProductosComponent {
  products = [
    {
      id: 1,
      name: "Tomates Ecológicos",
      description: "Tomates cultivados sin pesticidas, llenos de sabor y nutrientes.",
      season: "verano",
      category: "verduras",
      price: "3.50€/kg",
      available: true,
    },
    {
      id: 2,
      name: "Lechugas Variadas",
      description: "Diferentes variedades de lechugas frescas y crujientes.",
      season: "primavera",
      category: "verduras",
      price: "1.80€/unidad",
      available: true,
    },
    {
      id: 3,
      name: "Calabacines",
      description: "Calabacines tiernos y versátiles para cualquier receta.",
      season: "verano",
      category: "verduras",
      price: "2.20€/kg",
      available: true,
    },
    {
      id: 4,
      name: "Pimientos",
      description: "Pimientos dulces y sabrosos, perfectos para ensaladas y asados.",
      season: "verano",
      category: "verduras",
      price: "3.80€/kg",
      available: true,
    },
    {
      id: 5,
      name: "Fresas Ecológicas",
      description: "Fresas dulces y aromáticas cultivadas sin químicos.",
      season: "primavera",
      category: "frutas",
      price: "4.50€/kg",
      available: false,
    },
    {
      id: 6,
      name: "Cebollas",
      description: "Cebollas de cultivo ecológico, perfectas para dar sabor a tus platos.",
      season: "todo el año",
      category: "verduras",
      price: "2.00€/kg",
      available: true,
    },
    {
      id: 7,
      name: "Zanahorias",
      description: "Zanahorias dulces y crujientes, ricas en vitaminas.",
      season: "otoño",
      category: "verduras",
      price: "2.30€/kg",
      available: true,
    },
    {
      id: 8,
      name: "Manzanas Ecológicas",
      description: "Manzanas jugosas y aromáticas de variedades locales.",
      season: "otoño",
      category: "frutas",
      price: "3.20€/kg",
      available: false,
    },
    {
      id: 9,
      name: "Patatas",
      description: "Patatas de cultivo ecológico, versátiles y nutritivas.",
      season: "todo el año",
      category: "verduras",
      price: "1.90€/kg",
      available: true,
    },
  ]

  activeCategory = "todos"
  activeSeason = "todos"

  setCategory(category: string) {
    this.activeCategory = category
  }

  setSeason(season: string) {
    this.activeSeason = season
  }

  get filteredProducts() {
    return this.products.filter((product) => {
      const matchCategory = this.activeCategory === "todos" || product.category === this.activeCategory
      const matchSeason = this.activeSeason === "todos" || product.season === this.activeSeason
      return matchCategory && matchSeason
    })
  }
}
