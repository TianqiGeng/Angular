import { Component } from '@angular/core';
@Component({
    selector: 'pasta',
    template: `
    <div>
        <h2>风景图1</h2>
        <img src="https://picsum.photos/600/300?random&t=${Math.random()+1}">
    </div> `,
    styles: []
})
export class NestedPastaComponent {}

@Component({
    selector: 'calzone',
    template: `
    <div>
        <h2>风景图2</h2>
        <img src="https://picsum.photos/600/300?random&t=${Math.random()+2}">
    </div> `,
    styles: []
})
export class NestedCalzoneComponent {}
@Component({
    selector: 'other',
    template: `
    <div>
      <h1>Other Menu Items</h1>
      <a [routerLink]="['pasta']" routerLinkActive="router-link-active">pasta</a>
      <a [routerLink]="['calzone']" routerLinkActive="router-link-active">calzone</a>
    
      <router-outlet></router-outlet>
      </div>
    `,
    styles: []
  })
  export class OtherComponent {}