import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailPipe'
})
export class EmailPipePipe implements PipeTransform {

  transform(value: any, args?: any): string {
    let text = "e-mail: ";
    return text + value;
  }
}
