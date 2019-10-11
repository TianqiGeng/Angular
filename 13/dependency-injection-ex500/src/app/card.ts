import { Injectable } from '@angular/core';

@Injectable()
export class Card {
    constructor(public suite: string, public rank: string) { }
    toString(): string {
        return "选择的扑克牌是 " + this.suite + " " + this.rank;
    }
}