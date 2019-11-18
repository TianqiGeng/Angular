import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  agreed = 0;
  disagreed = 0;
  share() {
    window.alert('The product has been shared!');
  }
  notityshare() {
    window.alert('You will be notified when the product goes on sale');
  }
  onVoted(agreed: boolean) {
    console.log(agreed);
    agreed ? this.agreed++ : this.disagreed++;
  }
}