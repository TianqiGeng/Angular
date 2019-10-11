import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-root',
  template: `
   <ul>
    <li *ngFor="let car of _cars">
        <span [attr.data-desc]="car.make + ' ' + car.model" [attr.data-article]="car.article">
          {{car.year}} &nbsp; {{car.make}} &nbsp; {{car.model}} &nbsp;
          <button (click)="showCar($event)">View</button>
        
        </span>
        
    </li>
   </ul>
    
  `,
  styles: []
})
export class AppComponent {
  _cars = [
    new Car('car1', 2012, 'Polo', '1', 'https://en.wikipedia.org/wiki/Volkswagen_Polo'),
    new Car('car2', 2015, '高尔夫', '2', 'https://en.wikipedia.org/wiki/Volkswagen_Golf'),
    new Car('car3', 2016, '帕萨特', '3', 'https://en.wikipedia.org/wiki/Volkswagen_Passat')
];
showCar(event){
  const desc=event.target.parentElement.dataset.desc;
  if(window.confirm('点击 OK，将会跳转到详情页面 ' +
  desc + '. 点击 Cancel 取消 ')){
    window.location.href=event.target.parentElement.dataset.article;
  }
}
}
