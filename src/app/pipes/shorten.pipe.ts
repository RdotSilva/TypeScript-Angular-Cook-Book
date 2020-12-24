import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  /**
   * Adds the ingredients included in a recipe to the shopping list
   *
   * @param value - The value to shorten
   * @param limit - The max number of characters to show before shortening a value
   */
  transform(value: any, limit: number) {
    if (value.length > limit) {
      return value.substr(0, limit) + '...';
    }
    return value;
  }
}
