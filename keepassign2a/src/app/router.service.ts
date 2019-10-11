import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  routeToDashboard() {
    this.router.navigate(["dashboard"]);
  }

  routeToLogin() {
    this.router.navigate(["login"]);
  }
  //路由比较特殊1需要传值2进入的子路由
  routeToEditNoteView(noteId){
    console.log("routeToEditNoteView",noteId);
    this.router.navigate(['dashboard',{
      outlets:{
        noteEditOutlet:['note',noteId,'edit']
      }
    }]);
   
  }

  routeBack(){
    this.router.navigate(["dashboard"]);
  }
  routeToNoteView(){
    this.router.navigate(['dashboard/view/noteview']);
  }
  routeToListView(){
    this.router.navigate(['dashboard/view/listview']);
  }

  routeToLogOut() {
    //要清除当地缓存
    localStorage.setItem('bearertoken', '');
    this.router.navigate(["login"]);
  }
}
