import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  shoppingCosts;
  constructor(
    private cartservice: CartService,
  ) { }

  ngOnInit() {
    this.shoppingCosts = this.cartservice.getShoppingPrices();
  }
}
