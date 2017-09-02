import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Maxkiller';

  PI: number = Math.PI;

  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  percentage: number = 0.234;

  money: number = 150.5;

  hero: any = {
    key: 'Wolverine',
    name: 'Logan',
    year: '500',
    address: {
      street: 'Street',
      number: 2000
    }
  };

  promise: any = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Im done');
    }, 3500);
  });
}
