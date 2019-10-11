import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './note';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
        this.errMessage="Http failure response for http://localhost:3000/notes: 404 Not Found";
      }
    );
  }

  add() {
    if (this.note.Title && this.note.Text) {
      this.notesService.addNote(this.note).subscribe(
        res => {
          this.notes.push(res);
        },
        error => {
         this.errMessage="Http failure response for http://localhost:3000/notes: 404 Not Found";
        }
      );
    } else {
      console.log("dddddddddd");
      this.errMessage = 'Title and Text both are required fields';
    }
  }
}
