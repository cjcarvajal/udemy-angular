import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {

    if (value.length === 0) {
      return value;
    }

    return value.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) {
        return -1;
      }
      if (leftSide.name > rightSide.name) {
        return 1;
      }
      return 0;
    });
  }

}
