import { Component } from "@angular/core"
import { SocialMediaContactComponent } from "../../components/social-media-contact/social-media-contact.component"

@Component({
  selector: "app-contacto",
  standalone: true,
  imports: [SocialMediaContactComponent],
  templateUrl: "./contacto.component.html",
  styleUrl: "./contacto.component.css",
})
export class ContactoComponent {}