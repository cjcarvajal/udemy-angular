import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warningalert',
  template: '<div><h3>This is a warning message, beware!!!</h3></div>',
  styleUrls: ['./warningalert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
