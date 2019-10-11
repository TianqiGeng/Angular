import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  selectedAnimal = '';
  animals = ['猫', '狗', '熊', '长颈鹿'];
  ClickedA(event) {
   
    const clickedAnimal = event.target.innerText;
    console.log(clickedAnimal );
    this.selectedAnimal = clickedAnimal;
  }
}
