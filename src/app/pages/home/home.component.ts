import { Component } from "@angular/core"
import { HeroComponent } from "../../components/hero/hero.component"
import { AboutSectionComponent } from "../../components/about-section/about-section.component"
import { ProductsSectionComponent } from "../../components/products-section/products-section.component"
import { GallerySectionComponent } from "../../components/gallery-section/gallery-section.component"
import { BenefitsSectionComponent } from "../../components/benefits-section/benefits-section.component"
import { ContactSectionComponent } from "../../components/contact-section/contact-section.component"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    HeroComponent,
    AboutSectionComponent,
    ProductsSectionComponent,
    GallerySectionComponent,
    BenefitsSectionComponent,
    ContactSectionComponent,
  ],
  template: `
    <div class="flex flex-col items-center">
      <app-hero />
      <app-about-section />
      <app-products-section />
      <app-gallery-section />
      <app-benefits-section />
      <app-contact-section />
    </div>
  `,
})
export class HomeComponent {}
