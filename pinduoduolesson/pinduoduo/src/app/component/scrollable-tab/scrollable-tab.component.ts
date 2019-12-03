import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
export interface TopMenu {
  title: String;
  readonly link: String;

}
@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {
  @Input() menus;
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor;
  @Output() tabSelected = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  selectedIndex = -1;

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }

}
