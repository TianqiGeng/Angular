import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICar } from './icar';

@Component({
  selector: 'app-car',
  template: `
    <p>
    {{car.make}} : {{car.model}}
    <button (click)="delete(car)">删除</button>
    </p>
  `,
  styles: []
})
export class CarComponent implements OnInit {
  @Input('theCar') car: ICar;
  @Output() carDelete=new EventEmitter();
  constructor() { }
  delete(car:ICar){
    this.carDelete.emit(car);
  }
  ngOnInit() {
  }

}
