import { Component } from '@angular/core';
import * as Rx from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const observable: Rx.Observable<number> = Rx.range(0, 100);
    const subscription: Rx.Subscription = observable.subscribe(
      val => { console.log(`Next: ${val}`) },
      err => { console.log(`Error: ${err}`) },
      () => { console.log(`Completed`) }
    );
  }

}
