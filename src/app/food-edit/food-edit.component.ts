import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './../food.model';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent implements OnInit {
  @Input() editFood: Food;

  constructor() { }

  ngOnInit() {
  }

}
