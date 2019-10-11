import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../note';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
 
  notes = new Array<Note>();
  NotStarted = new Array<Note>();
  Started = new Array<Note>();
  Finished = new Array<Note>();
  errMessage;
  constructor(private notesService: NotesService) { }

  ngOnInit() {

    this.notesService.getNotes().subscribe(
      res => {
        this.notes = res;
        for (const note of this.notes) {
          if (note.status === "not-started") {
            this.NotStarted.push(note);
          } else
            if (note.status === "started") {
              this.Started.push(note);
            } else
              if (note.status === "finished") {
                this.Finished.push(note);
              }
        }
      },
      error => {
        this.errMessage = "Http failure response for http://localhost:3000/notes: 404 Not Found";
      }
    );
  }


}

