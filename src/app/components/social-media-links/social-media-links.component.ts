import { Component, Input } from "@angular/core"
import { SocialMedia } from "./social-media-links.interface";

@Component({
  selector: "app-social-media-links",
  standalone: true,
  imports: [],
  templateUrl: "./social-media-links.component.html",
  styleUrl: "./social-media-links.component.css",
})
export class SocialMediaLinksComponent {
    @Input() socialMediaData: SocialMedia[] = [];
}
