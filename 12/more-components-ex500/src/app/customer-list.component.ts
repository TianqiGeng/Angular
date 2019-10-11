import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-customer-list',
    template: `
        <div class='customerList'>
            <p>[customerList]</p>
            <app-customer *ngFor="let customer of customerList" 
                [thecustomer]="customer"
                (clicked)="onCustomerClicked($event)">
            </app-customer>
           
        </div>
    `,
    styles: ['.customerList {background-color:#80ced6;margin:10px;padding:10px;}']
})
export class CustomerListComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
    private customerList = [
        { name: 'Murphy', city: '武汉光谷' },
        { name: 'Bob', city: '上海' },
        { name: 'Jack', city: '广州' },
    ];
    onCustomerClicked(customerName:String){
        alert('单击客户:' + customerName);
    }
}