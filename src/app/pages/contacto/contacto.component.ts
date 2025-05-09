import { Component } from "@angular/core"
import { SocialMediaContactComponent } from "../../components/social-media-contact/social-media-contact.component"
import { AddressComponent } from "../../components/address/address.component"
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-contacto",
  standalone: true,
  imports: [SocialMediaContactComponent, AddressComponent, NgOptimizedImage],
  templateUrl: "./contacto.component.html",
  styleUrl: "./contacto.component.css",
})
export class ContactoComponent {}