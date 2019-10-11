import { Component, OnInit } from '@angular/core';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isNoteView = true;
  constructor(private routerservice: RouterService) { }

  ngOnInit() {
  }

  routeToNoteView(){
    this.routerservice.routeToNoteView();
    this.isNoteView = true;
  }

  routeToListView(){
    this.routerservice.routeToListView();
    this.isNoteView = false;
  }

  logOut() {
    this.routerservice.routeToLogOut();
  }
}
