import { Component, OnInit, Input } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
  }
  selectedIndex = -1;

  handleSelection(index: number) {
    this.selectedIndex = index;
  }

}
