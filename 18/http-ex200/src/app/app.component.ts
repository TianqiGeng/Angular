import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="_search" placeholder="city">
    <button (click)="doSearchConcatenatedUrl()">Search (Concatenated URL)</button>
    <button (click)="doSeachHttpParams1()">Search (Http Params1)</button>
    <button (click)="doSeachHttpParams2()">Search (Http Params2)</button>
    <p>JSON {{_result | json}}</p>
    
  `,
  styles: []
})
export class AppComponent {
  _search = 'london';
  _result = {};
  constructor(private _http: HttpClient) { }
  httpHeaders: HttpHeaders = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      
    });

  params1 = new HttpParams({
    fromString: 'query=' + this._search
  });
  url: string = 'https://www.metaweather.com/api/location/search/';
  params2 = new HttpParams().set('query', this._search);


  doSearchConcatenatedUrl() {
    const concatenatedUrl: string = "https://www.metaweather.com/api/location/search/?query=" +
      encodeURIComponent(this._search);


    this._http.get(concatenatedUrl, { headers: this.httpHeaders, observe: "response" }).subscribe(
      res => { this._result = res; });
  }
  doSeachHttpParams1() {
    
    const params = new HttpParams({
      fromString: 'query=' + this._search
    });
    this._http.get(this.url, { headers: this.httpHeaders, params: this.params1, observe: "response" }).
      subscribe(
        res => { this._result = res; });
  }
  doSeachHttpParams2() {
   
    this._http.get(this.url, { headers: this.httpHeaders, params: this.params2, observe: "response" }).
      subscribe(
        res => { this._result = res; });
  }
}
