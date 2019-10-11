import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedAnimal = '熊';
  animals = ['猫', '狗', '熊', '长颈鹿'];
  onAnimalClicked(event: any) {
      const clickedAnimal = event.target.innerText;
      this.selectedAnimal = clickedAnimal;
  }

  getAnimalStyle(animal) {
    const isSelected = (animal === this.selectedAnimal);
    return {
    'padding': '10px',
    'margin': '10px',
    'color': isSelected ? '#ffffff' : '#000000',
    'background-color': isSelected ? '#ff0000' : '#ffffff',
    }
}
}
