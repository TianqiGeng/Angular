import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(
    private http: HttpClient
  ) { }
  additem(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearitem() {
    this.items = [];
    return this.items;
  }
  getShoppingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
