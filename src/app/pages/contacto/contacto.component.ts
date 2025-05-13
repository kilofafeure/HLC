import { Component } from "@angular/core"
import { SocialMediaContactComponent } from "../../components/social-media-contact/social-media-contact.component"
import { AddressComponent } from "../../components/address/address.component"
import { NgOptimizedImage } from "@angular/common"
import { SocialMediaLinksComponent } from "../../components/social-media-links/social-media-links.component"
import { SocialMedia } from "../../components/social-media-links/social-media-links.interface"

@Component({
  selector: "app-contacto",
  standalone: true,
  imports: [SocialMediaContactComponent, AddressComponent, NgOptimizedImage, SocialMediaLinksComponent],
  templateUrl: "./contacto.component.html",
  styleUrl: "./contacto.component.css",
})
export class ContactoComponent {
    smEnredadera: SocialMedia[] = [
      { imageLink: "https://www.instagram.com/huerta_la_enredadera/", imageSrc: "../../../assets/icons/social-logos/instagram-dark.svg" },
      { imageLink: "https://www.facebook.com/huertalaenredadera/", imageSrc: "../../../assets/icons/social-logos/facebook.svg" },
      { imageLink: "https://www.google.es/maps/place/Huerta+La+Enredadera/@43.5279778,-5.9485474,17z/data=!3m1!4b1!4m6!3m5!1s0xd369b7c0477fb15:0xc7309c7dcdffbd4!8m2!3d43.5279739!4d-5.9459725!16s%2Fg%2F11j5q3bktc?hl=es&entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D", imageSrc: "../../../assets/icons/social-logos/google-maps.svg" }];
    smLaJoyana: SocialMedia[] = [
      { imageLink: "https://www.facebook.com/lahuertajoyana/", imageSrc: "../../../assets/icons/social-logos/facebook.svg" }];
    smLibelula: SocialMedia[] = [];
}