import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../note';
import { RouterService } from '../router.service';
import { ActivatedRoute } from '@angular/router';
import { EditNoteViewComponent } from '../edit-note-view/edit-note-view.component';

@Component({
  selector: 'app-edit-note-opener',
  templateUrl: './edit-note-opener.component.html',
  styleUrls: ['./edit-note-opener.component.css']
})
export class EditNoteOpenerComponent implements OnInit {
  private noteId: number;

  ngOnInit(): void {
    const dialogRef = this.dialog.open(EditNoteViewComponent, {

      data: this.noteId
    });
   
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result, this.noteId);
      this.routerService.routeToDashboard();
    });
  }


  constructor(public dialog: MatDialog, private routerService: RouterService, public route: ActivatedRoute) {
    //ActivatedRoute.paramMap 属性是一个路由参数的可观察对象。
    //当用户导航到这个组件时，paramMap 会发射一个新值，其中包含 id。
    //subscribe or pipe区别，15.5用的subscribe，params.noteId，而不是get方法
    // route.params.subscribe(
    //   params => {
    //     console.log("params.get('id')" + params.noteId);
    //     this.noteId = + params.get('id')
    //   }
    // )
    route.params.subscribe(
      params => { 
        let noteId=parseInt(params.noteId);
        this.noteId = noteId;
        console.log( this.noteId);
      }
    );

  }


}
