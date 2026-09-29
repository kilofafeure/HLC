import { Component } from "@angular/core"
import { Slide } from "../../components/carousel/carousel.interface";
import { NgOptimizedImage } from "@angular/common";
import { CarouselComponent } from "../../components/carousel/carousel.component";

@Component({
  selector: "app-beneficios",
  standalone: true,
  imports: [CarouselComponent, NgOptimizedImage],
  templateUrl: "./beneficios.component.html",
  styleUrl: "./beneficios.component.css",
})
export class BeneficiosComponent {
  slides: Slide[] = [
    { headline: "", src: "../../../assets/carousel/beneficios/beneficios-1.jpeg" },
    { headline: "", src: "../../../assets/carousel/beneficios/beneficios-2.jpeg" },
    { headline: "", src: "../../../assets/carousel/beneficios/beneficios-3.jpeg" },
    { headline: "", src: "../../../assets/carousel/beneficios/beneficios-4.jpeg" }
  ];
}
