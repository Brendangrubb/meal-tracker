import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './../food.model';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  @Input() foodList: Food[];
  @Output() deleteFoodSender = new EventEmitter();
  @Output() editFoodSender = new EventEmitter();

  setCalorieFilter: string = "all";

  deleteFood(idx: number) {
    this.deleteFoodSender.emit(idx);
  }

  startEditFood(idx: number) {
    this.editFoodSender.emit(idx);
  }

  onChange(option) {
  this.setCalorieFilter = option;
}

  constructor() { }

  ngOnInit() {
  }

}
