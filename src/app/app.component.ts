import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  editFood = null;

  foodList: Food[] = [
    new Food('Cereal', 'breakfast', 'Uncle Sams and Flax Plus with various berries', 200),
    new Food('Power Bar', 'snack', 'Luna Bar', 180),
    new Food('Vegan BLT', 'lunch', 'extra bacon, add cheese, hold the lettuce and tomato', 550),
    new Food('Fries', 'snack', 'french fries with mustard and vinegar', 600),
    new Food('Sausage Stugged Tomatoes', 'dinner', 'steak tomatoes stuffed with a vegan sausage hash with rice and asparagus', 650)
  ];

  deleteFood(idx: number) {
  this.foodList.splice(idx, 1);
}

  startEditFood(idx: number) {
    this.editFood = this.foodList[idx];
  }

  endEditFood(idx: number) {
    this.editFood = null;
  }

  saveFood(newFood) {
    this.foodList.push(newFood);
  }

}
