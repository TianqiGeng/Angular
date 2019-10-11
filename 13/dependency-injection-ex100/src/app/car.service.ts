import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { 
    console.log('CarService: constructor');
  }
  isSuperCharged(car:string){
    return car === 'Polo'?'yes':'no';
  }
}
