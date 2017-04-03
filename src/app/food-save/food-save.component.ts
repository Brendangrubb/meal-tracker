import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Food } from './../food.model';

@Component({
  selector: 'app-food-save',
  templateUrl: './food-save.component.html',
  styleUrls: ['./food-save.component.css']
})
export class FoodSaveComponent implements OnInit {
  @Output() saveFoodSender = new EventEmitter();

  saveFood = false;
  startSaveFoodButton = true;
  abortSaveFoodButton = false;

  startSaveFood() {
    this.saveFood = true;
    this.startSaveFoodButton = false;
    this.abortSaveFoodButton = true;
  }

  abortSaveFood() {
    this.saveFood = false;
    this.startSaveFoodButton = true;
  }

  completeSaveFood(foodName: string, category: string, description: string, calories: number) {
    let newFood = new Food(foodName, category, description, calories);
    this.saveFoodSender.emit(newFood);
    this.saveFood = false;
    this.startSaveFoodButton = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
