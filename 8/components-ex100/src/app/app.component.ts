import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
    {{title}}
    </h1>
    <p>
    字符串长度: {{title.length}}
    </p>
    <p>
    反方向字符串: {{getReversed(title)}}
    </p>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'welcome to app!';
  getReversed(str: string) {
          return str.split('').reverse().join('');
          }
}
