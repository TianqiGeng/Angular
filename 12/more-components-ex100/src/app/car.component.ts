import { Component, OnInit ,Input} from '@angular/core';
import { ICar } from './icar';

@Component({
  selector: 'app-car',
  template: `
    <p>
      {{car.make}} :{{car.model}}
    </p>
  `,
  styles: []
})
export class CarComponent implements OnInit {
  @Input('theCar') car:ICar;
  constructor() { }

  ngOnInit() {
  }

}
