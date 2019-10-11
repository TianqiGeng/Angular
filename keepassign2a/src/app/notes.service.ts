import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from './note';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { tap, catchError, map } from 'rxjs/operators';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  //声明note数组和notesSubject对象
  URL: string = 'http://localhost:3000/660/notes';
  notes: Array<Note>;
  notesSubject: BehaviorSubject<Array<Note>>;
  httpOptions = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getBearerToken()}`)
  };
  constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
    //赋值 
    this.notes = [];
    this.notesSubject = new BehaviorSubject([]);
  }
  fetchNotesFromServer() {
    return this.httpClient.get<Array<Note>>(this.URL, this.httpOptions).subscribe(
      response => {
        //注册并监控
        this.notes = response;
        this.notesSubject.next(this.notes);
      }, error => {
        this.notes = [];
        this.notesSubject.next(this.notes);
      });
  }

  // getNotes(): Observable<Array<Note>> {
  //   return this.httpClient.get<Array<Note>>('http://localhost:3000/660/notes', {
  //     headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getBearerToken()}`)
  //   });
  // }
  //通过这种写法达到数据实时更新
  getNotes(): Observable<Array<Note>> {
    return this.notesSubject;
  }

  addNote(note: Note): Observable<Note> {
    return this.httpClient.post<Note>(this.URL, note, this.httpOptions).pipe(
      tap(
        addNote => {
          this.notes.push(addNote);
          this.notesSubject.next(this.notes);
        }
      ));
  }
  getNoteById(id: number): Observable<Note> {
    console.log(id);
    const url = `http://localhost:3000/660/notes/${id}`;
    // return this.httpClient.put<Note>(this.URL + `/${note.id}`, note, {
    return this.httpClient.get<Note>(url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getBearerToken()}`)
    }
    );
  }

  editNote(note: Note): Observable<any> {
    console.log("=====" + note.id + note.title + note.status);
    return this.httpClient.put(`http://localhost:3000/660/notes/${note.id}`, note, this.httpOptions).pipe(
      tap(
        editedNote => {
          const foundNote = this.notes.find(cnote => cnote.id === editedNote.id);
          //const returnedTarget = Object.assign(target, source);
          //target会获得target, source补集
          Object.assign(foundNote, editedNote);
          //15.5大概就是有个BehaviorSubject类型的subject
          //被订阅，然后next执行了获取最新的值
          this.notesSubject.next(this.notes);
        }));
  }
  //dialog is closed after which the previous route is rendered by calling
  routeBack() {

  }


  deleteNote(id: number) {
    console.log("delete id =" + id);
    return this.httpClient.delete<Note>(`http://localhost:3000/660/notes/${id}`, this.httpOptions).subscribe(

      response => {
        console.log("yes");
        this.getNotes();
        this.notesSubject.next(this.notes);
      },
      error => {
        console.log(error);
      });
  }
}

