import { PipeTransform } from '@angular/core';

export class ShortenPipe implements PipeTransform {
  transform(value: any) {
    return value.substr(0, 10);
  }
}
