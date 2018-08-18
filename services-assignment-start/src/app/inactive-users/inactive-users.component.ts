import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private usersServiceService: UsersServiceService) {
    this.users = usersServiceService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersServiceService.onSetToActive(id);
  }
}
