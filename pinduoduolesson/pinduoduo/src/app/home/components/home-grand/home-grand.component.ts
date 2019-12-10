import { Component, OnInit } from '@angular/core';
import { AttachSession } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  price: number;
  data = [1, 2, 3, 4, 5];
  date;
  constructor() { }

  ngOnInit() {
    this.price = 123.23;
    this.date = this.minusDays(new Date(), 2);
  }
  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }
}
