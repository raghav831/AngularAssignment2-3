import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(price: number, discount: number): number {
    discount = price - (price * discount) / 100;
    return discount;
  }

}

