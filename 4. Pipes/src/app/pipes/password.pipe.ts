import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, show: boolean): any {
    if (show) return value;

    let newValue = '';
    for (let i = 0; i < value.length; i++) {
      newValue += '*';
    }
    return newValue;
  }

}
