import { Component } from '@angular/core';

@Component({
  selector: 'app-good-tests',
  templateUrl: './good-tests.component.html',
  styleUrls: ['./good-tests.component.css']
})
export class GoodTestsComponent {
  add(a: number, b: number): number {
    return a + b;
  }

  increase(value: number): number {
    return value + 1;
  }

  sendGreeting(name: string): string {
    return `Hello, ${name}!`;
  }

  isNegative(number: number): boolean {
    return number < 0;
  }

  isValid(age: number, hasPermission: boolean): boolean {
    return age >= 18 && hasPermission;
  }

  updateStock(currentStock: number, additionalUnits: number): number {
    currentStock += additionalUnits;
    return currentStock;
  }

  getGreeting(): string {
    return 'Hello, world!';
  }

  getData(callback: () => void): void {
    callback();
  }
}
