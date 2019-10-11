import { Component, AfterViewInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input #input type="text" (input)="textInput($event)"
    value=""/>
    <hr>
    字符串大写: {{upperCase}}
    <br/>
    字符串小写: {{lowerCase}}
      
  `,
  styles: []
})
export class AppComponent implements AfterViewInit {
  upperCase: string = '';
  lowerCase: string = '';
  @ViewChild('input', { static: false }) inputBox;
  textInput(event) {
    this.upperCase = event.target.value.toUpperCase();
    this.lowerCase = event.target.value.toLowerCase();
  }
  ngAfterViewInit() {
    this.inputBox.nativeElement.focus()
  }
}
