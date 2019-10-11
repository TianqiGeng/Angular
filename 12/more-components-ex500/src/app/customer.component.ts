import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
@Component({
    selector: 'app-customer',
    template: `
        <div class='customer' (click)="onClicked()">
       
        {{thecustomer.name}}|{{thecustomer.city}}
        </div>
    `,
    styles: ['.customer {background-color:#fefbd8;margin:10px; padding: 10px}']
})
export class CustomerComponent implements OnInit {
 
    constructor() { }
    ngOnInit() {
    }
    @Input() thecustomer;
    @Output() clicked: EventEmitter<String> = new EventEmitter<String>();

    onClicked(){
        this.clicked.emit(this.thecustomer.name);
    }
}