import { Component } from '@angular/core';
import { ICar } from './icar';

@Component({
  selector: 'app-root',
  template: `
  
    <app-car *ngFor="let car of cars" [theCar]="car"></app-car>
  `,
  styles: []
})
export class AppComponent {
 cars:Array<ICar>=[
  { make: 'Polo', model: '大众' },
  { make: 'Q5', model: '2.0' },
  { make: 'Q7', model: '4.0' }
 ];
}
