import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../notes.service';
@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent implements OnInit {
  note = new Note();
  notes = new Array<Note>();
  errMessage;
  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }
  add() {
    if (this.note.Title && this.note.Text) {
      this.notesService.addNote(this.note).subscribe(
        res => {
          console.log(res);
          this.notes.push(res);
        },
        error => {
          console.log(error);
          this.errMessage = "Http failure response for http://localhost:3000/notes: 404 Not Found";
        }
      );
    } else {
      console.log("dddddddddd");
      this.errMessage = 'Title and Text both are required fields';
    }
  }
}
