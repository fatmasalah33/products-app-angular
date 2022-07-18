import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {
  x: boolean = true;
  transform(value: number, ...args: unknown[]): unknown {
    if (value > 2) {
      return 'In stock';
    } else {
     this.x=false;
      return 'Out of stock';
      
    }
  }

}
