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
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef;
  @ViewChildren('img') img: QueryList<ElementRef>;
  constructor(
    private rd2: Renderer2
  ) {

  }

  ngOnInit() {
    console.log("ngOnInit", this.imgSlider);
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", this.img);
    this.img.forEach(element => {
      this.rd2.setStyle(element.nativeElement, 'height', '100px');
    });

  }
}
