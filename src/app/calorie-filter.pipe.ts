import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: 'highCalorieFilter',
  pure: false
})

export class CalorieFilterPipe implements PipeTransform {

  transform(input: Food[], optionSelector) {
    let output: Food[] = [];
    if (optionSelector === 'highCalorie') {
      for (let i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
