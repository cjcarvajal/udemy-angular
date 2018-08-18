import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    const valueAsArray = value.split("");
    const reversedArray = valueAsArray.reverse();
    return reversedArray.join("");
  }

}
