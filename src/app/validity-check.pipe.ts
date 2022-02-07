import { ConsoleLogger } from '@angular/compiler-cli/private/localize';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validityCheck'
})
export class ValidityCheckPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if (value) {
          console.log(value);
      }
      return value;
  }

}
