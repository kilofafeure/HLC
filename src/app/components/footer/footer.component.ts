import { Component } from "@angular/core"
import { SocialMediaContactComponent } from "../social-media-contact/social-media-contact.component"
import { AddressComponent } from "../address/address.component"

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [SocialMediaContactComponent, AddressComponent],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  currentYear = new Date().getFullYear()
}
