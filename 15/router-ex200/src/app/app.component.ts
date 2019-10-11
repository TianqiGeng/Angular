import { Component } from '@angular/core';

@Component({
  selector: 'picture',
  template: `
    <div>
      <h2>Picture</h2>
      <img src="https://picsum.photos/1200/500?random&t=${Math.random()}">
    </div> 
  `,
  styles: []
})

export class PictureComponent {}
@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>菜单演示</h1>
    <a [routerLink]="['picture']" routerLinkActive="router-link-active">Picture</a>
    <a [routerLink]="['other']" routerLinkActive="router-link-active">Other Menu Items</a>
 
    <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'router-ex200';
}
