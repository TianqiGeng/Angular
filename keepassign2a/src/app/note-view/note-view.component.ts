import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../note';
@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  note = new Note();
  notes = new Array<Note>();
  errMessage;
  constructor(private notesService: NotesService) { }

  ngOnInit() {

    this.notesService.getNotes().subscribe(
      res => {
        this.notes = res;
      },
      error => {
        this.errMessage = "Http failure response for http://localhost:3000/notes: 404 Not Found";
      }
    );
  }
}
