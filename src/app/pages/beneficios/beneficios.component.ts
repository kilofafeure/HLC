import { Component } from "@angular/core"
import { Slide } from "../../components/carousel/carousel.interface";

@Component({
  selector: "app-beneficios",
  standalone: true,
  imports: [],
  templateUrl: "./beneficios.component.html",
  styleUrl: "./beneficios.component.css",
})
export class BeneficiosComponent {
    slides: Slide[] = [
      // { headline: "", src: "../../../assets/carousel/sobre-nosotros/sobre-nosotros-1.jpeg" },
      // { headline: "", src: "../../../assets/carousel/sobre-nosotros/sobre-nosotros-2.jpeg" },
      // { headline: "", src: "../../../assets/carousel/sobre-nosotros/sobre-nosotros-3.jpeg" },
      // { headline: "", src: "../../../assets/carousel/sobre-nosotros/sobre-nosotros-4.jpeg" }
    ];
}
