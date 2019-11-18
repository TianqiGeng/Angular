import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages = [];
  constructor() { }
  add(message: string) {
    // console.log("message+++++" + message);
    this.messages.push(message);

  }
  clear() {
    this.messages = [];
  }
}
