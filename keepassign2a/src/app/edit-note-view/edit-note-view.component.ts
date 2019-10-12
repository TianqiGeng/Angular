import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../note';
import { NotesService } from '../notes.service';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-edit-note-view',
  templateUrl: './edit-note-view.component.html',
  styleUrls: ['./edit-note-view.component.css']
})

export class EditNoteViewComponent implements OnInit {
  note=new Note();
  errMessage: string;
  status: Array<string> = ['not-started', 'started', 'finished'];
  constructor(
    public dialogRef: MatDialogRef<EditNoteViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private notesService: NotesService,
    private routerservice: RouterService,
  ) { }

  ngOnInit() {
    // this.notesService.getNoteById(this.data)
    this.getNote();

  }

  getNote() {

    this.notesService.getNoteById(this.data).subscribe(
      note => {console.log(note);this.note = note;}
    );
  }

  onNoClick() {
    this.dialogRef.close();
    this.routerservice.routeBack();
    }
  onSave() {
    let editNote = new Note();
    editNote = this.note;
    editNote.id = this.data;
    console.log("=====" + editNote.status+this.note.status);
    editNote.status=this.note.status;
    console.log("=====" + editNote.id + editNote.title + editNote.status);
    this.notesService.editNote(editNote).subscribe(
      res => {

      },
      error => {
        this.errMessage = error;
      }

    );
    this.dialogRef.close();

  }
  Delete(){
    console.log("delete")
    this.notesService.deleteNote(this.note.id);
    this.dialogRef.close();
    this.routerservice.routeToDashboard();
  }
}