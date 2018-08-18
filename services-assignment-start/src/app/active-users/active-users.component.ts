import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[];
  userSetToInactive = new EventEmitter<number>();

  constructor(private usersServiceService: UsersServiceService) {
    this.users = usersServiceService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersServiceService.onSetToInactive(id);
  }
}
