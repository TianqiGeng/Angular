import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'picture',
  template: `
    <h2>Picture</h2>
    <img src="https://picsum.photos/600/300?random&t=${Math.random()}">
  `,
  styles: []
})

export class PictureComponent { }

@Component({
  selector: 'everything',
  template: `
    <h2>Everything</h2><br/>
    <h3>Size:{{size}}<h3><br/>
    <img src="https://picsum.photos/600/300?random&t=${Math.random() + 1}">
  `,
  styles: []
})

export class EverythingComponent {
  private size: String = '';
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(
      (params: Object) =>
        this.size = params['size']);
  }
}


@Component({
  selector: 'app-root',
  template: `
  <h1>Pictures</h1>
  <a [routerLink]="['picture']">Picture</a> |
  <a [routerLink]="['everything','small']">Everything Small</a> |
  <a [routerLink]="['everything','large']">Everything Large</a> |
  <router-outlet></router-outlet>

  `,
  styles: []
})
export class AppComponent {
  title = 'router-ex100';
}
