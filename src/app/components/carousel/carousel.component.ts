import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Slide } from "./carousel.interface";
import { trigger, transition, useAnimation } from "@angular/animations";

import {
  AnimationType,
  scaleIn,
  scaleOut,
  fadeIn,
  fadeOut,
  flipIn,
  flipOut,
  jackIn,
  jackOut
} from "./carousel.animations";

@Component({
  selector: "carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
  animations: [
    trigger("slideAnimation", [

      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "500ms" } })
      ]),

      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),

      /* flip */
      transition("void => flip", [
        useAnimation(flipIn, { params: { time: "500ms" } })
      ]),
      transition("flip => void", [
        useAnimation(flipOut, { params: { time: "500ms" } })
      ]),

      /* JackInTheBox */
      transition("void => jackInTheBox", [
        useAnimation(jackIn, { params: { time: "700ms" } })
      ]),
      transition("jackInTheBox => void", [
        useAnimation(jackOut, { params: { time: "700ms" } })
      ])

    ])
  ]
})

export class CarouselComponent implements OnInit, OnDestroy {
  @Input() slides: Slide[] = [];
  @Input() animationType: AnimationType = AnimationType.Fade;
  @Input() isSlider: boolean = true;
  @Input() intervalTimer: number = 5000;

  currentSlide: number = 0;
  interval: any;

  constructor() {}

  resetInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(()=> { this.onNextClick() }, this.intervalTimer);
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    if (this.isSlider)
      this.resetInterval();
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    if (this.isSlider)
      this.resetInterval();
  }

  goToSlide(idx: number) {
    this.currentSlide = idx;
    if (this.isSlider)
      this.resetInterval();
  }

  ngOnInit() {
    this.preloadImages(); 
    if (this.isSlider)
      this.resetInterval();
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }

  ngOnDestroy() {
    if (this.isSlider)
      clearTimeout(this.interval);
  }
}
