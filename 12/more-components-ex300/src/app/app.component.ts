import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class='app'>
    [应用]
    <app-customer-list></app-customer-list>
    </div>
    
  `,
  styles: ['.app {background-color:#d5f4e6;margin:10px;padding: 10px;}']
})
export class AppComponent {
  title = 'more-components-ex300';
}
