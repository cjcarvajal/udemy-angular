import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() numberGenerated = new EventEmitter<{ generatedNumber: number, }>();
  consecutive: number = 0;
  intervalReference: any;
  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.intervalReference = setInterval(() => this.emitNumber(),1000);
  }

  onStopGame() { 
    clearInterval(this.intervalReference);
  }

  emitNumber() {
    this.numberGenerated.emit({ generatedNumber: this.consecutive });
    this.consecutive++;
  }

}
