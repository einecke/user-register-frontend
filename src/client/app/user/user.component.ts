import { Component, OnInit } from '@angular/core';
import {UserListService}  from '../shared/user-list/user-list.service';
import {User} from './user';

@Component({
  moduleId: module.id,
  selector: 'sd-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(public userListService: UserListService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  deleteUser(user: User){
    var index = this.users.indexOf(user);
    this.users.splice(index, 1);
    this.userListService.removeUser(user.userId).subscribe();
  }

  getAllUsers(){
    this.userListService.getTodos().subscribe(users => this.users = users);
    console.log(this.users);
  }
}
