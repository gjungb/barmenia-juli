import { Pipe, PipeTransform } from '@angular/core';
// @ts-ignore
import ISBN from 'isbn3';

@Pipe({
  name: 'barmIsbn'
})
export class BarmIsbnPipe implements PipeTransform {

  /**
   *
   * @param value Die ISBN
   * @param args
   */
  transform(value: string, ...args: unknown[]): string {
    return ISBN.hyphenate(value);
  }

}
