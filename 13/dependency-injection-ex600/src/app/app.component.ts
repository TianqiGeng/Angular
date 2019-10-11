import { Component, Injector } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
  {{title}}
  </h1>
    
  `,
  styles: [],
  providers: [{
    provide: 'names',
    useValue: '变量name的值'
}]
})
export class AppComponent {
  title = 'dependency-injection-ex600';
  constructor(private injector: Injector) {
    this.title = '值Provide: ' + injector.get('names');
}
}
