import { Component, OnInit, Input } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  template: `
  {{name}} 是否是 SUV: {{supercharged}}
  `,
  styles: [],
  //第一种写在一个组件里
  // providers: [CarService]
})
export class CarComponent implements OnInit {
  @Input() name;
  supercharged: string='';
  constructor(private service: CarService) { }

  ngOnInit() {
    this.supercharged=this.service.isSuperCharged(this.name);
  }

}
