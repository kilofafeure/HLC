import { Component } from "@angular/core"
import { CarouselComponent } from "../../components/carousel/carousel.component"
import { Slide } from "../../components/carousel/carousel.interface"

@Component({
  selector: "app-sobre-nosotros",
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: "./sobre-nosotros.component.html",
  styleUrl: "./sobre-nosotros.component.css",
})
export class SobreNosotrosComponent {
  slides: Slide[] = [
    { headline: "", src: "../../../assets/carousel/sobre-nosotros/sobre-nosotros-1.jpeg" },
    { headline: "", src: "../../../assets/carousel/sobre-nosotros/sobre-nosotros-2.jpeg" },
    { headline: "", src: "../../../assets/carousel/sobre-nosotros/sobre-nosotros-3.jpeg" },
    { headline: "", src: "../../../assets/carousel/sobre-nosotros/sobre-nosotros-4.jpeg" }
  ];
}
