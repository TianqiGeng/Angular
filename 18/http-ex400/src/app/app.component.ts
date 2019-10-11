import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  template: `
  <div>
    Title:
    <br/>
      <input type="text" [(ngModel)]="_title"size="50"/>
    <br/><br/>
    Body:
    <br/>
      <textarea [(ngModel)]='_body' rows="2" cols="50"></textarea>
    <br/>
    <button (click)="onAdd()">Add</button>
  </div>
  <p><b>You Added:</b></p>
  <p *ngIf="_added.length == 0">None</p>
  <p *ngFor="let added of _added">
    {{added.title}}
  </p>
  `,
  styles: []
})
export class AppComponent {
  _title:string;
  _body:string;
  _added:Array<any> = new Array<any>();

  constructor(private _http:HttpClient){}

  ngOnInit() {
    return this._http.get<any>('').subscribe(
      res=>{
        this._added=res;
      }
    );
  }
  onAdd(){
    const requestBody={
      title: this._title || '[Unspecified]',
      body: this._body || '[Unspecified]',
    };
   
    this._http.post("http://jsonplaceholder.typicode.com/posts",requestBody).subscribe(
      res=>{
        this._added.push(res);
      }
    );
  }

}
