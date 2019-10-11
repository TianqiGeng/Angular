import { Component, OnInit} from '@angular/core';
import { SwaggerService } from './swagger.service';
import { Language } from './language';
@Component({
  selector: 'app-root',
  template: `
  <h1>Countries</h1>
  <ul>
    <li *ngFor="let language of _language">
      {{language.name}}&nbsp;{{language.code}}
    </li>
  </ul>
    
  `,
  styles: []
})
export class AppComponent {
  _language=new Array<Language>();
  constructor(private _swaggerService: SwaggerService) { }
  ngOnInit() {
    this._swaggerService.getLanguages().subscribe(
      res=>{
        this._language=res;
      },
      error=>{
        console.log("an error occurred");
      }
    )
  }
}
