import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-root',
  template: `
  <h1>
  {{title}}
  </h1>
    
  `,
  styles: [],
  providers: [{
    provide: Card,
    useFactory: () => {
      const suite: number = Math.floor(Math.random() * 4);
      const suiteName: string =
        suite == 0 ? "♣️" :
          suite == 1 ? "♠️" :
            suite == 2 ? "♥️" : "♦️";
      const rank: number = Math.floor(Math.random() * 15);
      const rankName: string =
        rank == 0 ? "A" :
          rank == 1 ? "J" :
            rank == 2 ? "K" :
              rank == 3 ? "Q" :
                (rank - 3).toString();
      return new Card(suiteName, rankName);
    }
  }]
})
export class AppComponent {
  title = 'dependency-injection-ex500';
  constructor(card: Card) {
    this.title = card.toString();
  }
}
