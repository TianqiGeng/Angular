import { Component } from '@angular/core';

class Watch {
  getTime(): string {
    return new Date() + "";
  }
}

class Seiko extends Watch {
  getTime(): string {
    return "类Provider演示，子类 Time:" + super.getTime();
  }
}






@Component({
  selector: 'app-root',
  template: `
   {{watch.getTime()}}
  `,
  styles: [],
  providers:[{
    provide:Watch,
    useClass:Seiko
  }]
})
export class AppComponent {
 constructor(private watch:Watch){}
}
