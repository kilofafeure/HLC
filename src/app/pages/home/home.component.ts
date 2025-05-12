import { Component } from "@angular/core"
import { RouterLink } from "@angular/router"
import { CarouselComponent } from "../../components/carousel/carousel.component"
import { Slide } from "../../components/carousel/carousel.interface"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink, CarouselComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  slides: Slide[] = [
    { headline: "", src: "../../../assets/carousel/home/home-1.jpeg" },
    { headline: "", src: "../../../assets/carousel/home/home-2.jpeg" },
    { headline: "", src: "../../../assets/carousel/home/home-3.jpeg" },
    { headline: "", src: "../../../assets/carousel/home/home-4.jpeg" },
    { headline: "", src: "../../../assets/carousel/home/home-5.jpeg" } ];
}