import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p>
  Lowercase: {{ "I love Angular and Java" | lowercase }}
</p>
<p>
  Uppercase: {{ "I love Angular and Java" | uppercase }}
</p>
<p>
  Currency: {{ 2019.55 | currency }}
</p>
<p>
  汇率: {{ 2019.55 | currency: 'gbp':true }}
</p>
<p>
  Percentage: {{ 0.7 | percent }}
</p>
<p>
  Date: {{ dt | date }}
</p>
<p>
  短日期: {{ dt | date:shortdate }}
</p>
<p>
  指定日期格式: {{ dt | date:'yMMMMEEEEd' }}
</p>
    
  `,
  styles: []
})
export class AppComponent {
  dt = new Date();
}
