import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './../food.model';

@Pipe({
  name: 'calorieFilter'
})

export class CalorieFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
