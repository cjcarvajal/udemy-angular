import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  odds: number[] = [];
  evens: number[] = [];
  isEven: boolean = true;

  onNumberGenerated(numberData: { generatedNumber: number }) {
    if (this.isEven) {
      this.evens.push(numberData.generatedNumber);
    } else {
      this.odds.push(numberData.generatedNumber);
    }
    this.isEven = !this.isEven;
  }
}
