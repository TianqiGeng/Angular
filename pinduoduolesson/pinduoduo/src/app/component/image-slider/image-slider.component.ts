import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';
export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  @Input() selectedIndex = 0;
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef;
  @ViewChildren('img') img: QueryList<ElementRef>;
  constructor(
    private rd2: Renderer2
  ) {

  }

  ngOnInit() {

  }
  ngAfterViewInit(): void {

    setInterval(() => {

      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        ((this.getIndex(++this.selectedIndex)) *
          this.imgSlider.nativeElement.scrollWidth) /
        this.sliders.length
      );
    }, this.intervalBySeconds * 1000);

  }
  getIndex(idx: number): number {
    return idx >= 0 ?
      idx % this.sliders.length :
      this.sliders.length - (Math.abs(idx) % this.sliders.length)
  }
  handleScroll(ev) {
    const ratio = ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length);
    this.selectedIndex = Math.round(ratio);

  }

}

