import { Component, OnInit } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { HeaderComponent } from "./components/header/header.component"
import { FooterComponent } from "./components/footer/footer.component"
import { inject } from '@vercel/analytics';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  title = "Huerta La Curtia"

  ngOnInit() {
    inject();
  }
}
