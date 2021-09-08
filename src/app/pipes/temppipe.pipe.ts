import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temppipe',
})
export class TemppipePipe implements PipeTransform {
  transform(value: number, feels_like: Number) {
    debugger;
    if (feels_like) {
      feels_like = (value - 32) / 1.8;
      return feels_like.toFixed(2);
    }
    return;
  }
}
