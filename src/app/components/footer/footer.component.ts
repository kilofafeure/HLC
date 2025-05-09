import { Component } from "@angular/core"
import { SocialMediaContactComponent } from "../social-media-contact/social-media-contact.component"

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [SocialMediaContactComponent],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  currentYear = new Date().getFullYear()
}
