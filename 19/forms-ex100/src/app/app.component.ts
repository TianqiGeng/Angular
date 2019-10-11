import { Component, ViewChild } from '@angular/core';
import { NgForm, RequiredValidator,FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  template: `
  <form #f="ngForm" novalidate>
    <p>First Name <input name="fname" ngModel #fname="ngModel" required /></p>
    <p>Last Name <input name="lname" ngModel required /></p>
    Valid: {{ f.valid }}  &nbsp;
    Data: {{ f.value | json }}

    <h2>测试</h2>
    <h2>模版变量</h2>
    Valid {{ fname.valid}} &nbsp;
    Data: {{ fname.value | json }}
    <h2>实例变量</h2>
    Valid {{ fname2.valid}} &nbsp;
    Data: {{ fname2.value | json }}
</form> 
    
  `,
  styles: []
})
export class AppComponent {
  @ViewChild('f', { static: false }) fdddd: NgForm;
  @ViewChild('fname', { static: false }) fname2: FormControl;
  
}
