import { Component, OnInit, Input } from '@angular/core';
import { CarService } from './car.service';






@Component({
  selector: 'app-root',
  template: `
   <app-car name="Polo"></app-car><br/>
   <app-car name="Auti Q5"></app-car>
  `,
  styles: [],
  //app组件中创建一次，并且可以被所有子组件使用。
  //providers: [CarService]
})
export class AppComponent {
  title = 'dependency-injection-ex100';
}
