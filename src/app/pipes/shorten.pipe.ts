import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  /**
   * A pipe used to shorten a text value based on a limit
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
