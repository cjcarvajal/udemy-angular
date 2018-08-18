import { Component } from '@angular/core';
import { UsersServiceService } from './users-service.service';
import { CounterServiceService } from './counter-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private usersServiceService: UsersServiceService,
    public counterServiceService: CounterServiceService) { }

}
