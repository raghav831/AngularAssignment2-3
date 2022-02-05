import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validityCheck'
})
export class ValidityCheckPipe implements PipeTransform {

  transform(date:Date): Date {
    var today = new Date;

    // return date-today;
    return date;
  }

}
