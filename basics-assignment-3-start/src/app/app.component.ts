import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayDetails : boolean = false;
  buttonText : string = 'Display Details';
  clickCounts = [];

  constructor() {
    this.displayDetails = false;
  }

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;

    if(this.displayDetails) {
      this.buttonText = 'Hide Details'
    }else{
      this.buttonText = 'Display Details'
    }

    this.clickCounts.push(new Object());
  }
  
}
