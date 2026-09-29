import { Component, Input, OnInit, OnDestroy, computed } from "@angular/core";
import { Slide } from "./carousel.interface";

export enum AnimationType {
  Scale = "scale",
  Fade = "fade",
  Flip = "flip",
  JackInTheBox = "jackInTheBox"
}

@Component({
  selector: "carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})

export class CarouselComponent implements OnInit, OnDestroy {
  @Input() slides: Slide[] = [];
  @Input() animationType: AnimationType = AnimationType.Fade;
  @Input() isSlider: boolean = true;
  @Input() intervalTimer: number = 5000;

  currentSlide: number = 0;
  interval: any;

  enterClass = computed(() => `anim-${this.animationType}-enter`);
  leaveClass = computed(() => `anim-${this.animationType}-leave`);
  
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
     console.log('>>> onNextClick fired, currentSlide:', this.currentSlide);
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
     clearInterval(this.interval);
  }
}
