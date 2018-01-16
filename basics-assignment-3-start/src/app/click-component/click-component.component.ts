import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-component',
  template: `
  <p
  [ngStyle]="{backgroundColor: backColor}"
  [ngClass]="{fifthLog: fifthLog}"
  >
    {{timestamp}}
  </p>
  `,
  styles: [`
        .fifthLog {
            color: white;
        }
    `]
})
export class ClickComponentComponent implements OnInit {
  
  static globalCount : number = 0;
  timestamp : string = '';
  fifthLog : boolean = false;
  backColor : string = 'white';

  constructor() {
    this.timestamp = new Date().toLocaleString();
    ClickComponentComponent.globalCount += 1;

    if(ClickComponentComponent.globalCount > 4) {
      this.fifthLog = true;
      this.backColor = 'blue';
     } else {
      this.fifthLog = false;
      this.backColor = 'white';
    }
  }

  getColor() {
    return ClickComponentComponent.globalCount > 4 ? 'blue' : 'white';
  }

  getTextColor() {
    return ClickComponentComponent.globalCount > 4;
  }

  ngOnInit() {
  }

}
