import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-like',
  templateUrl: './product-like.component.html',
  styleUrls: ['./product-like.component.css']
})
export class ProductLikeComponent implements OnInit {
  @Output() note = new EventEmitter<boolean>();
  didVote = false;
  constructor() { }

  ngOnInit() {
  }
  vote(agreed: boolean) {
    this.note.emit(agreed);
    this.didVote = true;
  }
}
