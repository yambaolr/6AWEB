import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  imports: [ DatePipe, UpperCasePipe, AsyncPipe, CurrencyPipe, DecimalPipe, SlicePipe, PercentPipe, TitleCasePipe, JsonPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  // Date Pipe
  presentDate = new Date();

  // Async Pipe
  time$ = interval(1000).pipe(map(val => new Date()));

  // Currency Pipe
  price: number = 20000;

  // Decimal Pipe
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  ngOnInit(){

  }

  // Slice Pipes
  str: string = 'aweb';

  // Additional Pipes:
  // Percent Pipes
  a: number =  0.130666;

  // Title Case Pipe
  title: string = 'AnGulAr pIPes';

  // JSON Pipe
  user = {
    id: 1,
    name: 'John ',
    email: 'john@example.com',
    address: {
      city: 'New York',
      country: 'USA'
    },
    roles: ['CEO', 'admin']
  };

}
