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
    new Food('Vegan BLT', 'brunch', 'extra bacon, add cheese, hold the lettuce and tomato..delicious and totally worth it!', 550),
    new Food('Fries', 'snack', 'french fries with mustard and vinegar', 600),
    new Food('Sausage Stuffed Tomatoes', 'late lunch', 'steak tomatoes stuffed with a vegan sausage hash with rice and asparagus', 650),
    new Food('Power Bar', 'snack', 'Luna Bar', 180),
    new Food('Fruit Salad', 'dessert', 'Bananas, peaches and various berries', 200)
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
