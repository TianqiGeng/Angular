import { Component, OnInit,Input } from '@angular/core';
import { Note } from '../note';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input('theNote') note: Note;
  constructor(private routerservice: RouterService) { }

  ngOnInit() {
  }
  editNote(){
    this.routerservice.routeToEditNoteView(this.note.id); 
  }
}
